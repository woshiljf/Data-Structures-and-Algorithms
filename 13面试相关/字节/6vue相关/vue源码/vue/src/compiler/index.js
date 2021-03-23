/* @flow */

import { parse } from './parser/index'
import { optimize } from './optimizer'
import { generate } from './codegen/index'
import { createCompilerCreator } from './create-compiler'

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
export const createCompiler = createCompilerCreator(function baseCompile(
    template: string,
    options: CompilerOptions
): CompiledResult { //ast:将js语法用对象的形式描述出来
    const ast = parse(template.trim(), options) //将template模板转化成ast(抽象语法树)  (与虚拟dom不同)
    if (options.optimize !== false) { //优化ast树，比如标记静态的节点
        optimize(ast, options)
    }
    const code = generate(ast, options) //将ast转换成js代码
        // 生成
    return {
        ast,
        render: code.render,
        staticRenderFns: code.staticRenderFns
    }
})
while ( ? :