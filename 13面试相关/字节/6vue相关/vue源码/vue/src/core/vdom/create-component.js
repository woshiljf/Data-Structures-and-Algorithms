/* @flow */

import VNode from './vnode'
import { resolveConstructorOptions } from 'core/instance/init'
import { queueActivatedComponent } from 'core/observer/scheduler'
import { createFunctionalComponent } from './create-functional-component'

import { warn, isDef, isUndef, isTrue, isObject } from '../util/index'

import {
    resolveAsyncComponent,
    createAsyncPlaceholder,
    extractPropsFromVNodeData,
} from './helpers/index'

import {
    callHook,
    activeInstance,
    updateChildComponent,
    activateChildComponent,
    deactivateChildComponent,
} from '../instance/lifecycle'

import {
    isRecyclableComponent,
    renderRecyclableComponentTemplate,
} from 'weex/runtime/recycle-list/render-component-template'

// inline hooks to be invoked on component VNodes during patch
// 组件的钩子
const componentVNodeHooks = {
    init(vnode: VNodeWithData, hydrating: boolean): ? boolean {
        if (
            vnode.componentInstance &&
            !vnode.componentInstance._isDestroyed &&
            vnode.data.keepAlive
        ) {
            // kept-alive components, treat as a patch
            const mountedNode: any = vnode // work around flow
            componentVNodeHooks.prepatch(mountedNode, mountedNode)
        } else {
            // 组件的的init方法创建一个虚拟vnode上创建一个孩子
            const child = (vnode.componentInstance = createComponentInstanceForVnode(
                    vnode,
                    activeInstance
                ))
                // 自动调用$mount渲染这个组件
            child.$mount(hydrating ? vnode.elm : undefined, hydrating)
        }
    },

    prepatch(oldVnode: MountedComponentVNode, vnode: MountedComponentVNode) {
        const options = vnode.componentOptions
        const child = (vnode.componentInstance = oldVnode.componentInstance)
        updateChildComponent(
            child,
            options.propsData, // updated props
            options.listeners, // updated listeners
            vnode, // new parent vnode
            options.children // new children
        )
    },

    insert(vnode: MountedComponentVNode) {
        const { context, componentInstance } = vnode
        if (!componentInstance._isMounted) {
            componentInstance._isMounted = true
            callHook(componentInstance, 'mounted')
        }
        if (vnode.data.keepAlive) {
            if (context._isMounted) {
                // vue-router#1212
                // During updates, a kept-alive component's child components may
                // change, so directly walking the tree here may call activated hooks
                // on incorrect children. Instead we push them into a queue which will
                // be processed after the whole patch process ended.
                queueActivatedComponent(componentInstance)
            } else {
                activateChildComponent(componentInstance, true /* direct */ )
            }
        }
    },

    destroy(vnode: MountedComponentVNode) {
        const { componentInstance } = vnode
        if (!componentInstance._isDestroyed) {
            if (!vnode.data.keepAlive) {
                componentInstance.$destroy()
            } else {
                deactivateChildComponent(componentInstance, true /* direct */ )
            }
        }
    },
}

const hooksToMerge = Object.keys(componentVNodeHooks)

// 创建组件的方法createComponent
export function createComponent(
    Ctor: Class < Component > | Function | Object | void,
    data: ? VNodeData,
    context : Component,
    children: ? Array < VNode > ,
    tag ? : string
): VNode | Array < VNode > | void {
        if (isUndef(Ctor)) {
            return
        }
        // 获取Vue
        const baseCtor = context.$options._base //Vue

        // plain options object: turn it into a constructor//组件对象转化成构造函数
        if (isObject(Ctor)) {
            //重点来了，如果Ctor是一个对象，这传入extend方法中，
            Ctor = baseCtor.extend(Ctor) //返回一个模板构造函数Ctor，当需要渲染模板的时候，new 这个构造函数(模板构造函数)
        }

        // if at this stage it's not a constructor or an async component factory,
        // reject.
        if (typeof Ctor !== 'function') {
            if (process.env.NODE_ENV !== 'production') {
                warn(`Invalid Component definition: ${String(Ctor)}`, context)
            }
            return
        }

        // async component
        let asyncFactory
        if (isUndef(Ctor.cid)) {
            asyncFactory = Ctor
                //解析异步组件，异步加载的时候使用到
            Ctor = resolveAsyncComponent(asyncFactory, baseCtor) //当前创建出来的模板构造函数和全局的Vue解析
            if (Ctor === undefined) {
                //异步组件并不是立马返回，结果，而写返回undefined
                // return a placeholder node for async component, which is rendered
                // as a comment node but preserves all the raw information for the node.
                // the information will be used for async server-rendering and hydration.
                return createAsyncPlaceholder(asyncFactory, data, context, children, tag)
            }
        }

        data = data || {}

        // resolve constructor options in case global mixins are applied after
        // component constructor creation
        resolveConstructorOptions(Ctor)

        // transform component v-model data into props & events
        if (isDef(data.model)) {
            transformModel(Ctor.options, data)
        }

        // extract props
        const propsData = extractPropsFromVNodeData(data, Ctor, tag)

        // functional component
        if (isTrue(Ctor.options.functional)) {
            return createFunctionalComponent(Ctor, propsData, data, context, children)
        }

        // extract listeners, since these needs to be treated as
        // child component listeners instead of DOM listeners
        //这里是组件的绑定事件办理
        const listeners = data.on // 组件绑定的$on事件，赋值给listerns做另一种处理
            // replace with listeners with .native modifier
            // so it gets processed during parent component patch.
            //
            // 原生的@click.native赋值给data.on和原生的处理一样
        data.on = data.nativeOn

        if (isTrue(Ctor.options.abstract)) {
            // abstract components do not keep anything
            // other than props & listeners & slot

            // work around flow
            const slot = data.slot
            data = {}
            if (slot) {
                data.slot = slot
            }
        }

        // install component management hooks onto the placeholder node
        // 组件创建过程中，初始化钩子
        installComponentHooks(data) //安装组件的钩子函数(init,patch,insert,destory)

        // return a placeholder vnode
        const name = Ctor.options.name || tag
        const vnode = new VNode(
                `vue-component-${Ctor.cid}${name ? `-${name}` : ''}`,
    data,
    undefined,
    undefined,
    undefined,
    context,
    { Ctor, propsData, listeners, tag, children },
    asyncFactory
  )

  // Weex specific: invoke recycle-list optimized @render function for
  // extracting cell-slot template.
  // https://github.com/Hanks10100/weex-native-directive/tree/master/component
  /* istanbul ignore if */
  if (__WEEX__ && isRecyclableComponent(vnode)) {
    return renderRecyclableComponentTemplate(vnode)
  }

  return vnode
}

export function createComponentInstanceForVnode(
  vnode: any, // we know it's MountedComponentVNode but flow doesn't
  parent: any // activeInstance in lifecycle state
): Component {
  const options: InternalComponentOptions = {
    _isComponent: true,
    _parentVnode: vnode,
    parent,
  }
  // check inline-template render functions
  const inlineTemplate = vnode.data.inlineTemplate
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render
    options.staticRenderFns = inlineTemplate.staticRenderFns
  }
  // 之前传入的组件对象，给extend返回的组件构造函数，通过createComponentInstanceForVnode方法，返回组件构造函数的实例
  return new vnode.componentOptions.Ctor(options) //组件的init方法，最后返回组件构造函数的实例
}

function installComponentHooks(data: VNodeData) {
  const hooks = data.hook || (data.hook = {})
  for (let i = 0; i < hooksToMerge.length; i++) {
    const key = hooksToMerge[i]
    const existing = hooks[key]
    const toMerge = componentVNodeHooks[key] //组件钩子
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook(toMerge, existing) : toMerge
    }
  }
}

function mergeHook(f1: any, f2: any): Function {
  const merged = (a, b) => {
    // flow complains about extra args which is why we use any
    f1(a, b)
    f2(a, b)
  }
  merged._merged = true
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
// 这里就是v-model的转化用法。根据不同的元素进行不同事件的双向绑定
function transformModel(options, data: any) {
  // 这是默认的情况，也就是没有给prop属性和event属性的时候，默认是value+input的语法糖
  const prop = (options.model && options.model.prop) || 'value'
  const event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value
  const on = data.on || (data.on = {})
  const existing = on[event]
  const callback = data.model.callback
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing)
    }
  } else {
    on[event] = callback
  }
}