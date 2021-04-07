/* @flow */

import config from '../config'
import Watcher from '../observer/watcher'
import Dep, { pushTarget, popTarget } from '../observer/dep'
import { isUpdatingChildComponent } from './lifecycle'

import {
    set,
    del,
    observe,
    defineReactive,
    toggleObserving,
} from '../observer/index'

import {
    warn,
    bind,
    noop,
    hasOwn,
    hyphenate,
    isReserved,
    handleError,
    nativeWatch,
    validateProp,
    isPlainObject,
    isServerRendering,
    isReservedAttribute,
} from '../util/index'

const sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop,
    set: noop,
}

export function proxy(target: Object, sourceKey: string, key: string) {
    sharedPropertyDefinition.get = function proxyGetter() {
        // 这个代理还是使用了get 和set方法，取值。。。
        return this[sourceKey][key]
    }
    sharedPropertyDefinition.set = function proxySetter(val) {
            this[sourceKey][key] = val
        }
        // Object.defineProperty(对象，key,属性描述符)
    Object.defineProperty(target, key, sharedPropertyDefinition)
}

export function initState(vm: Component) {
    vm._watchers = []
    const opts = vm.$options
    if (opts.props) initProps(vm, opts.props)
    if (opts.methods) initMethods(vm, opts.methods)
    if (opts.data) {
        initData(vm)
    } else {
        observe((vm._data = {}), true /* asRootData */ )
    }
    if (opts.computed) initComputed(vm, opts.computed)
        // 初始化用户传入的自定义watch
    if (opts.watch && opts.watch !== nativeWatch) {
        initWatch(vm, opts.watch)
    }
}

function initProps(vm: Component, propsOptions: Object) {
    const propsData = vm.$options.propsData || {}
    const props = (vm._props = {})
        // cache prop keys so that future props updates can iterate using Array
        // instead of dynamic object key enumeration.
    const keys = (vm.$options._propKeys = [])
    const isRoot = !vm.$parent
        // root instance props should be converted
    if (!isRoot) {
        toggleObserving(false)
    }
    for (const key in propsOptions) {
        keys.push(key)
        const value = validateProp(key, propsOptions, propsData, vm)
            /* istanbul ignore else */
        if (process.env.NODE_ENV !== 'production') {
            const hyphenatedKey = hyphenate(key)
            if (
                isReservedAttribute(hyphenatedKey) ||
                config.isReservedAttr(hyphenatedKey)
            ) {
                warn(
                    `"${hyphenatedKey}" is a reserved attribute and cannot be used as component prop.`,
                    vm
                )
            }
            defineReactive(props, key, value, () => {
                if (!isRoot && !isUpdatingChildComponent) {
                    warn(
                        `Avoid mutating a prop directly since the value will be ` +
                        `overwritten whenever the parent component re-renders. ` +
                        `Instead, use a data or computed property based on the prop's ` +
                        `value. Prop being mutated: "${key}"`,
                        vm
                    )
                }
            })
        } else {
            defineReactive(props, key, value)
        }
        // static props are already proxied on the component's prototype
        // during Vue.extend(). We only need to proxy props defined at
        // instantiation here.
        if (!(key in vm)) {
            proxy(vm, `_props`, key)
        }
    }
    toggleObserving(true)
}

function initData(vm: Component) {
    // 获取用户传入的数据options.data
    let data = vm.$options.data
    data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {}
    if (!isPlainObject(data)) {
        data = {}
        process.env.NODE_ENV !== 'production' &&
            warn(
                'data functions should return an object:\n' +
                'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
                vm
            )
    }
    // proxy data on instance
    const keys = Object.keys(data)
    const props = vm.$options.props
    const methods = vm.$options.methods
    let i = keys.length
    while (i--) {
        const key = keys[i]
        if (process.env.NODE_ENV !== 'production') {
            if (methods && hasOwn(methods, key)) {
                warn(`Method "${key}" has already been defined as a data property.`, vm)
            }
        }
        if (props && hasOwn(props, key)) {
            process.env.NODE_ENV !== 'production' &&
                warn(
                    `The data property "${key}" is already declared as a prop. ` +
                    `Use prop default value instead.`,
                    vm
                )
        } else if (!isReserved(key)) {
            // 这里为什么使用了代理呢,因为开始vue的data是绑定在vm._data上的，用户在取值的时候必须
            // 使用 vm_data.msg的方式，不方便。
            proxy(vm, `_data`, key)
        }
    }
    // observe data
    // 开始了数据的的观察。。。（感觉自己可以写一个vue源码了）
    observe(data, true /* asRootData */ )
}

export function getData(data: Function, vm: Component): any {
    // #7573 disable dep collection when invoking data getters
    pushTarget()
    try {
        return data.call(vm, vm)
    } catch (e) {
        handleError(e, vm, `data()`)
        return {}
    } finally {
        popTarget()
    }
}

const computedWatcherOptions = { lazy: true }

function initComputed(vm: Component, computed: Object) {
    // $flow-disable-line
    const watchers = (vm._computedWatchers = Object.create(null))
        // computed properties are just getters during SSR
    const isSSR = isServerRendering()

    for (const key in computed) {
        //  userDef：用户自定义的函数
        const userDef = computed[key]
        const getter = typeof userDef === 'function' ? userDef : userDef.get
        if (process.env.NODE_ENV !== 'production' && getter == null) {
            warn(`Getter is missing for computed property "${key}".`, vm)
        }

        if (!isSSR) {
            // create internal watcher for the computed property.
            //为计算属性computed创建一个watcher类，属于computed的watcher
            // const computedWatcherOptions = { lazy: true }
            // 存入每一个computed的watcher
            // const watchers = (vm._computedWatchers = Object.create(null))
            watchers[key] = new Watcher(
                vm,
                getter || noop,
                noop,
                computedWatcherOptions //{lazy:true}
            )
        }

        // component-defined computed properties are already defined on the
        // component prototype. We only need to define computed properties defined
        // at instantiation here.
        if (!(key in vm)) {
            defineComputed(vm, key, userDef)
        } else if (process.env.NODE_ENV !== 'production') {
            if (key in vm.$data) {
                warn(`The computed property "${key}" is already defined in data.`, vm)
            } else if (vm.$options.props && key in vm.$options.props) {
                warn(`The computed property "${key}" is already defined as a prop.`, vm)
            }
        }
    }
}

export function defineComputed(
    target: any,
    key: string,
    userDef: Object | Function
) {
    const shouldCache = !isServerRendering()
    if (typeof userDef === 'function') {
        sharedPropertyDefinition.get = shouldCache ?
            createComputedGetter(key) :
            createGetterInvoker(userDef)
        sharedPropertyDefinition.set = noop
    } else {
        sharedPropertyDefinition.get = userDef.get ?
            shouldCache && userDef.cache !== false ?
            createComputedGetter(key) :
            createGetterInvoker(userDef.get) :
            noop
        sharedPropertyDefinition.set = userDef.set || noop
    }
    if (
        process.env.NODE_ENV !== 'production' &&
        sharedPropertyDefinition.set === noop
    ) {
        sharedPropertyDefinition.set = function() {
            warn(
                `Computed property "${key}" was assigned to but it has no setter.`,
                this
            )
        }
    }
    Object.defineProperty(target, key, sharedPropertyDefinition)
}
// 当用户在页面上取值的时候：如<div>{{fullname}}</div>的时候

function createComputedGetter(key) {
    // 监听的get方法就是一下这个函数
    return function computedGetter() {
        // 这里的watcher就是计算属性的watcher
        const watcher = this._computedWatchers && this._computedWatchers[key]
        if (watcher) {
            if (watcher.dirty) {
                //如果dirty为true，就调用watcher的evaluate()的方法求值（dirty这里起到了缓存的作用）
                watcher.evaluate() //evaluate执行完毕，dirty变化了flase,只有依赖的数据发生更新，watcher调用了update之后，dirty才重新变为true;
            }
            // watcher 就是计算属性的watcher
            if (Dep.target) {
                // 让firstName和lastName的dep都收集一下watcher,当这两个数据变了，重新更新页面，更新dirty
                watcher.depend()
            }
            return watcher.value
        }
    }
}

function createGetterInvoker(fn) {
    return function computedGetter() {
        return fn.call(this, this)
    }
}

function initMethods(vm: Component, methods: Object) {
    const props = vm.$options.props
    for (const key in methods) {
        if (process.env.NODE_ENV !== 'production') {
            if (typeof methods[key] !== 'function') {
                warn(
                    `Method "${key}" has type "${typeof methods[
            key
          ]}" in the component definition. ` +
                    `Did you reference the function correctly?`,
                    vm
                )
            }
            if (props && hasOwn(props, key)) {
                warn(`Method "${key}" has already been defined as a prop.`, vm)
            }
            if (key in vm && isReserved(key)) {
                warn(
                    `Method "${key}" conflicts with an existing Vue instance method. ` +
                    `Avoid defining component methods that start with _ or $.`
                )
            }
        }
        vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm)
    }
}

function initWatch(vm: Component, watch: Object) {
    for (const key in watch) {
        const handler = watch[key]
        if (Array.isArray(handler)) {
            for (let i = 0; i < handler.length; i++) {
                // 创建一个watcher，这响应的watcher，不是渲染你的watcher
                createWatcher(vm, key, handler[i])
            }
        } else {
            createWatcher(vm, key, handler)
        }
    }
}

function createWatcher(
    vm: Component,
    expOrFn: string | Function,
    handler: any,
    options ? : Object
) {
    if (isPlainObject(handler)) {
        options = handler
        handler = handler.handler
    }
    if (typeof handler === 'string') {
        handler = vm[handler]
    }
    return vm.$watch(expOrFn, handler, options)
}

export function stateMixin(Vue: Class < Component > ) {
    // flow somehow has problems with directly declared definition object
    // when using Object.defineProperty, so we have to procedurally build up
    // the object here.
    const dataDef = {}
    dataDef.get = function() {
        return this._data
    }
    const propsDef = {}
    propsDef.get = function() {
        return this._props
    }
    if (process.env.NODE_ENV !== 'production') {
        dataDef.set = function() {
            warn(
                'Avoid replacing instance root $data. ' +
                'Use nested data properties instead.',
                this
            )
        }
        propsDef.set = function() {
            warn(`$props is readonly.`, this)
        }
    }
    Object.defineProperty(Vue.prototype, '$data', dataDef)
    Object.defineProperty(Vue.prototype, '$props', propsDef)

    Vue.prototype.$set = set
    Vue.prototype.$delete = del

    Vue.prototype.$watch = function(
        expOrFn: string | Function,
        cb: any,
        options ? : Object
    ): Function {
        const vm: Component = this
        if (isPlainObject(cb)) {
            return createWatcher(vm, expOrFn, cb, options)
        }
        options = options || {}
        options.user = true //用户写的watcher
            // createWatcher非常简单，直接new一个新的Watcher
        const watcher = new Watcher(vm, expOrFn, cb, options) //创建一个watcher
        if (options.immediate) {
            try {
                cb.call(vm, watcher.value)
            } catch (error) {
                handleError(
                    error,
                    vm,
                    `callback for immediate watcher "${watcher.expression}"`
                )
            }
        }
        return function unwatchFn() {
            watcher.teardown()
        }
    }
}