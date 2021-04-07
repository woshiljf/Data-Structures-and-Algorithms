/* @flow */

import Dep from './dep'
import VNode from '../vdom/vnode'
import { arrayMethods } from './array'
import {
    def,
    warn,
    hasOwn,
    hasProto,
    isObject,
    isPlainObject,
    isPrimitive,
    isUndef,
    isValidArrayIndex,
    isServerRendering,
} from '../util/index'

const arrayKeys = Object.getOwnPropertyNames(arrayMethods)

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
export let shouldObserve: boolean = true

export function toggleObserving(value: boolean) {
    shouldObserve = value
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
export class Observer {
    value: any
    dep: Dep
    vmCount: number // number of vms that have this object as root $data

    constructor(value: any) {
        this.value = value
            // this.dep = new Dep()
            // 这里的Dep类是用来收集依赖的，也就是收集对数据的订阅的函数等等。。。（里面用subs和notify两个收集依赖和数据更新通知依赖的）

        // 注意这里的这个点，单独给数组开一个Dep()，用来更新数组中数据的改变
        this.dep = new Dep()
        this.vmCount = 0
        def(value, '__ob__', this)
            // 如果属性是array，这走的是arrayMethods
        if (Array.isArray(value)) {
            if (hasProto) {
                protoAugment(value, arrayMethods)
            } else {
                copyAugment(value, arrayMethods, arrayKeys)
            }
            // 对这个数组又去观察每一项。注意，oberverArray会循环把数组中的元素执行observe(arr[i])
            this.observeArray(value)
        } else {
            // walk这里真正的去对用户传入的数据进行geter和setter的观察
            this.walk(value)
        }
    }

    /**
     * Walk through all properties and convert them into
     * getter/setters. This method should only be called when
     * value type is Object.
     */
    walk(obj: Object) {
        const keys = Object.keys(obj)
        for (let i = 0; i < keys.length; i++) {
            //
            // 这里使用了一个defineReactive单独的对每一个用户传入的属性值进行观察。。
            // vue的数据响应的关键点在这里。Object.defineProperty()
            defineReactive(obj, keys[i])
        }
    }

    /**
     * Observe a list of Array items.
     */
    // 观察数组的
    observeArray(items: Array < any > ) {
        for (let i = 0, l = items.length; i < l; i++) {
            observe(items[i])
        }
    }
}

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment(target, src: Object) {
    /* eslint-disable no-proto */
    // 当target是一个数组的时候，不希望他的原型__proto__继承元素的方法，而是继承我们重写的方法
    // 也是arrayMethods（src)
    target.__proto__ = src
        /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment(target: Object, src: Object, keys: Array < string > ) {
    for (let i = 0, l = keys.length; i < l; i++) {
        const key = keys[i]
        def(target, key, src[key])
    }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
export function observe(value: any, asRootData: ? boolean): Observer | void {
    // 不是对象就直接返回，无需观察
    if (!isObject(value) || value instanceof VNode) {
        return
    }
    let ob: Observer | void
    if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
        ob = value.__ob__
    } else if (
        shouldObserve &&
        !isServerRendering() &&
        (Array.isArray(value) || isPlainObject(value)) &&
        Object.isExtensible(value) &&
        !value._isVue
    ) {
        //这一步骤开始，才是真正的观察数据，这是一个构造函数。一个类（es6写的一个观察的数据类）
        ob = new Observer(value)
    }
    if (asRootData && ob) {
        ob.vmCount++
    }
    return ob
}

/**
 * Define a reactive property on an Object.
 */
export function defineReactive(
    obj: Object, //用户传入的整个对象
    key: string, // 用户传入的键
    val: any,
    customSetter ? : ? Function,
    shallow ? : boolean
) {
    // 这里的Dep类是用来收集依赖的，也就是收集对数据的订阅的函数等等。。。（里面用subs和notify两个收集依赖和数据更新通知依赖的）

    // 用户传的所有的属性，都会new 一个Dep()
    const dep = new Dep()
    const property = Object.getOwnPropertyDescriptor(obj, key)
    if (property && property.configurable === false) {
        return
    }

    // cater for pre-defined getter/setters
    const getter = property && property.get
    const setter = property && property.set
    if ((!getter || setter) && arguments.length === 2) {
        val = obj[key]
    }

    // 这一步是判断属性值还是不是一个对象，是的话，继续观察，递归的方式来了
    // 数组的话，也是返回一个Observer
    let childOb = !shallow && observe(val)

    // vue的重点来了，数据的更新和响应都在这个Object.defineProperty上了。所有用户传入的属性。包括嵌套的数据，进行递归的监听

    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter() {
            // 这里监听这个用户传入的属性key，value是属性值
            const value = getter ? getter.call(obj) : val
                // 这一步是,添加哪个使用了属性
            if (Dep.target) {
                // 添加依赖
                dep.depend()

                /**
                 * depend() {
                 *   
                 *   if(Dep.target){
                 *     // 这里Dep.target,target表示的是watcher,让watcher添加每一个dep，这里的每一个属性都有自己的dep
                 *     Dep.target.addDep(this)
                 *    
                 *   }
                 *   
                 * addDep(dep: Dep) {
                      // 防止一个属性多次取值，多个wacher相同，所有会去重
                      // 添加Dep，每一个属性都会new 一个Dep，id 是用来记录多少个属性的
                      const id = dep.id
                      if (!this.newDepIds.has(id)) {
                          this.newDepIds.add(id)
                          this.newDeps.push(dep) //watcher记住dep
                          if (!this.depIds.has(id)) {
                              // 给每一个属性都添加watcher，明白了，双向绑定的意思。。。（haha)
                              // 双向记住，为了不重复的添加watcher,有点意思
                              dep.addSub(this)
                          }
                      }
                      }
                 * }
                 */


                if (childOb) {
                    // 如果是数组，也要添加依赖，添加Watcher
                    childOb.dep.depend()
                    if (Array.isArray(value)) {
                        // 对数组的每一向数据，也要进行观察，这里的观察是value的元素还是数组的情况
                        dependArray(value)
                    }
                }
            }
            // 返回属性值
            return value
        },
        set: function reactiveSetter(newVal) {
            const value = getter ? getter.call(obj) : val
                /* eslint-disable no-self-compare */
            if (newVal === value || (newVal !== newVal && value !== value)) {
                return
            }
            /* eslint-enable no-self-compare */
            if (process.env.NODE_ENV !== 'production' && customSetter) {
                customSetter()
            }
            // #7981: for accessor properties without setter
            if (getter && !setter) return
            if (setter) {
                setter.call(obj, newVal)
            } else {
                val = newVal
            }
            // 用户设置的值，也要进行递归观察
            childOb = !shallow && observe(newVal)
            dep.notify()
        },
    })
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
export function set(target: Array < any > | Object, key: any, val: any): any {
    if (
        process.env.NODE_ENV !== 'production' &&
        (isUndef(target) || isPrimitive(target))
    ) {
        warn(
            `Cannot set reactive property on undefined, null, or primitive value: ${(target: any)}`
        )
    }
    if (Array.isArray(target) && isValidArrayIndex(key)) {
        target.length = Math.max(target.length, key)
        target.splice(key, 1, val)
        return val
    }
    if (key in target && !(key in Object.prototype)) {
        target[key] = val
        return val
    }
    const ob = (target: any).__ob__
    if (target._isVue || (ob && ob.vmCount)) {
        process.env.NODE_ENV !== 'production' &&
            warn(
                'Avoid adding reactive properties to a Vue instance or its root $data ' +
                'at runtime - declare it upfront in the data option.'
            )
        return val
    }
    if (!ob) {
        target[key] = val
        return val
    }
    defineReactive(ob.value, key, val)
    ob.dep.notify()
    return val
}

/**
 * Delete a property and trigger change if necessary.
 */
export function del(target: Array < any > | Object, key: any) {
    if (
        process.env.NODE_ENV !== 'production' &&
        (isUndef(target) || isPrimitive(target))
    ) {
        warn(
            `Cannot delete reactive property on undefined, null, or primitive value: ${(target: any)}`
        )
    }
    if (Array.isArray(target) && isValidArrayIndex(key)) {
        target.splice(key, 1)
        return
    }
    const ob = (target: any).__ob__
    if (target._isVue || (ob && ob.vmCount)) {
        process.env.NODE_ENV !== 'production' &&
            warn(
                'Avoid deleting properties on a Vue instance or its root $data ' +
                '- just set it to null.'
            )
        return
    }
    if (!hasOwn(target, key)) {
        return
    }
    delete target[key]
    if (!ob) {
        return
    }
    ob.dep.notify()
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray(value: Array < any > ) {
    for (let e, i = 0, l = value.length; i < l; i++) {
        e = value[i]
        e && e.__ob__ && e.__ob__.dep.depend()
        if (Array.isArray(e)) {
            dependArray(e)
        }
    }
}