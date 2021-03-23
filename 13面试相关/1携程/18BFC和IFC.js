/**
 *
 * BFC：创建块级上下文，独立的布局框，不收外部的布局的影响
 * 实现方式：overflow不为visibility
 * posistion 不是reative和static
 * 父元素添加after伪元素：添加clear：box
 * 单独添加一个空元素：设置样式为：clear:box 和添加伪元素一样的道理。只是多出来一个没有必要的元素。
 * float:不为none
 *
 *
 */

/**  
  * 
  * FC的line box（线框）高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的padding/margin影响)
**水平居中**：当一个块要在环境中水平居中时，设置其为inline-block则会在外层产生IFC，通过text-align则可以使其水平居中。
**垂直居中**：创建一个IFC，用其中一个元素撑开父元素的高度，然后设置其vertical-align:middle，
其他行内元素则可以在此父元素下垂直居中。
  * 
  * 
  * 
  * 
  * 
  */