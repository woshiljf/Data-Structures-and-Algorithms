/* @flow */
// 合并方法，Vue的全局函数mixin
import { mergeOptions } from '../util/index'

export function initMixin(Vue: GlobalAPI) {
    Vue.mixin = function(mixin: Object) {
        this.options = mergeOptions(this.options, mixin)
        return this
    }
}