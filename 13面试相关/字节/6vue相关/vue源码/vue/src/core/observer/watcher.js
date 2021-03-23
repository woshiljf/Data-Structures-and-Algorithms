/* @flow */

import {
    warn,
    remove,
    isObject,
    parsePath,
    _Set as Set,
    handleError,
    noop,
} from '../util/index'

import { traverse } from './traverse'
import { queueWatcher } from './scheduler'
import Dep, { pushTarget, popTarget } from './dep'

import type { SimpleSet } from '../util/index'

let uid = 0 //每一个watch都有一个uid标识

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.**/
export default class Watcher {
    vm: Component
    expression: string
    cb: Function
    id: number
    deep: boolean
    user: boolean
    lazy: boolean
    sync: boolean
    dirty: boolean
    active: boolean
    deps: Array < Dep >
        newDeps: Array < Dep >
        depIds: SimpleSet
    newDepIds: SimpleSet
    before: ? Function
    getter: Function
    value: any

    constructor(
        vm: Component, //实例
        expOrFn: string | Function, // 用户传入的表所示或者函数
        cb: Function,
        options ? : ? Object,
        isRenderWatcher ? : boolean
    ) {
        this.vm = vm
        if (isRenderWatcher) {
            vm._watcher = this
        }
        vm._watchers.push(this)
            // options
        if (options) {
            this.deep = !!options.deep
            this.user = !!options.user //用户写的watcher
            this.lazy = !!options.lazy // lazy为true，表示计算属性computed
            this.sync = !!options.sync
            this.before = options.before
        } else {
            this.deep = this.user = this.lazy = this.sync = false
        }
        this.cb = cb
        this.id = ++uid // uid for batching
        this.active = true
        this.dirty = this.lazy // for lazy watchers// 这里的dirty记录的是lazy
        this.deps = []
        this.newDeps = []
        this.depIds = new Set()
        this.newDepIds = new Set()
        this.expression =
            process.env.NODE_ENV !== 'production' ? expOrFn.toString() : ''
            // parse expression for getter
        if (typeof expOrFn === 'function') {
            // getter用户传入的方法
            this.getter = expOrFn
        } else {
            // r如果expOrFn不是一个函数，而是一个表达式，（这里指的是响应数据变化，然后执行用户设定的操作的那个Watcher)，把表达式也变成函数
            // 使用parsePath
            this.getter = parsePath(expOrFn)
            if (!this.getter) {
                this.getter = noop
                process.env.NODE_ENV !== 'production' &&
                    warn(
                        `Failed watching path: "${expOrFn}" ` +
                        'Watcher only accepts simple dot-delimited paths. ' +
                        'For full control, use a function instead.',
                        vm
                    )
            }
        }
        //用户传入的computed中的函数默认是不执行的,因为this.lazy默认为true
        // this.get()执行用户传入的方法
        // 一开始,this.lazy的值是为true,默认不执行get
        this.value = this.lazy ? undefined : this.get()
    }

    /**
     * Evaluate the getter, and re-collect dependencies.
     */
    get() {
        // 默认的情况下，会有一个渲染watcher，把当前的watcher放到dep.Target上

        pushTarget(this) //把当前的watcher放到全局上，当数据变化，让这个watcher重新执行
        let value
        const vm = this.vm
        try {
            /// getter 方法更新视图
            value = this.getter.call(vm, vm) //取值（computed计算属性求值)，会进行依赖收集,执行用户传入的方法（computed)
        } catch (e) {
            if (this.user) {
                handleError(e, vm, `getter for watcher "${this.expression}"`)
            } else {
                throw e
            }
        } finally {
            // "touch" every property so they are all tracked as
            // dependencies for deep watching
            // 这里使用的watcher中添加的deep: true，深度的观察想用，用户想监听的属性变化，然后执行操作
            if (this.deep) {
                traverse(value)
            }
            popTarget()
                //注意这一句，清楚当前的dep
            this.cleanupDeps()
        }
        return value
    }

    /**
     * Add a dependency to this directive.
     */
    addDep(dep: Dep) {
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

    /**
     * Clean up for dependency collection.
     */
    cleanupDeps() {
        // 每一次一个更新完成，都会删除一个depsId，当所有的wacher都更新完视图，subs中又装满了watcher
        let i = this.deps.length
        while (i--) {
            const dep = this.deps[i]
            if (!this.newDepIds.has(dep.id)) {
                dep.removeSub(this)
            }
        }
        let tmp = this.depIds
        this.depIds = this.newDepIds
        this.newDepIds = tmp
        this.newDepIds.clear()
        tmp = this.deps
        this.deps = this.newDeps
        this.newDeps = tmp
        this.newDeps.length = 0
    }

    /**
     * Subscriber interface.
     * Will be called when a dependency changes.
     */
    update() {
        /* istanbul ignore else */
        //当数据变化，通知的wacher调用update进行view更新，此时，用于判断计算属性的lazy重新设置为true;
        if (this.lazy) {
            this.dirty = true //依赖的数据发生了更新，用来判断computed执行的dirty变为了true;
        } else if (this.sync) {
            this.run()
        } else {
            queueWatcher(this) //把当前的watcher放入队列，这个队列中的每一个wacher的id是唯一的，和异步渲染有关系。
        }
    }

    /**
     * Scheduler job interface.
     * Will be called by the scheduler.
     */
    run() {
        if (this.active) {
            // run 调用this.get()方法，这个方法是更新
            const value = this.get()
            if (
                // 这里的比较目的是为了watcher中用户观察的数据变化，执行函数。如: msg: (newMsg,OldMsg)=>{}
                value !== this.value ||
                // Deep watchers and watchers on Object/Arrays should fire even
                // when the value is the same, because the value may
                // have mutated.
                isObject(value) ||
                this.deep
            ) {
                // set new value
                const oldValue = this.value
                this.value = value
                if (this.user) {
                    try {
                        this.cb.call(this.vm, value, oldValue)
                    } catch (e) {
                        handleError(e, this.vm, `callback for watcher "${this.expression}"`)
                    }
                } else {
                    // 然后执行用户传入的函数(执行watcher中用户自定义的函数)
                    this.cb.call(this.vm, value, oldValue)
                }
            }
        }
    }

    /**
     * Evaluate the value of the watcher.
     * This only gets called for lazy watchers.
     */
    evaluate() {
        //watcher调用evaluate去计算用户传入的函数取值，取完值，把dirty改为flase(默认为true)
        this.value = this.get()

        this.dirty = false //computed函数执行，取完值，把dirty变为了false(这个dirty起到了缓存的作用)
    }

    /**
     * Depend on all deps collected by this watcher.
     */
    depend() {
        let i = this.deps.length
        while (i--) {
            // 给每一dep都绑定了watcher
            this.deps[i].depend()
        }
    }

    /**
     * Remove self from all dependencies' subscriber list.
     */
    teardown() {
        if (this.active) {
            // remove self from vm's watcher list
            // this is a somewhat expensive operation so we skip it
            // if the vm is being destroyed.
            if (!this.vm.isBeingDestroyed) {
                remove(this.vm._watchers, this)
            }
            let i = this.deps.length
            while (i--) {
                this.deps[i].removeSub(this)
            }
            this.active = false
        }
    }
}