/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

import { def } from '../util/index'

// 继承原来Array原型上的方法。

const arrayProto = Array.prototype
    // 创建一个arrayMehods,
export const arrayMethods = Object.create(arrayProto)

// 数组只有这七个方法能改变原生数组，所有需要对这几个方法进行监督

const methodsToPatch = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse',
]

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function(method) {
    // cache original method
    // 缓存元素方法，获取数组元素上的方法
    const original = arrayProto[method]
    def(arrayMethods, method, function mutator(...args) {
        // 元素方法执行输入结果result
        const result = original.apply(this, args)
        const ob = this.__ob__ // 也就是dep
        let inserted
        switch (method) {
            case 'push':
            case 'unshift':
                inserted = args
                break
            case 'splice':
                inserted = args.slice(2)
                break
        }
        // 数组新插入的值，也会重新要观察一下
        if (inserted) ob.observeArray(inserted)
            // notify change
            // 数组变化，通知视图更新。。。
        ob.dep.notify()
        return result
    })
})