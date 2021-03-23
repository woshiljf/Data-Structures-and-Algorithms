/**
 * 弹性盒子
 * 父盒子：display: flex
 *
 * 父盒子样式： just-content: flex-start,flex-end,space-around,space-between,center
 * flex-direction: row(默认),column,row-reverse,column-reverse
 * align-items(交叉轴如何对其): flex-start（顶端）,flex-end(低端),center(中间,交叉点),baseline,stretch(子元素，不设置高度，自动填满)
 *
 * flex-wrap: 是否换行
 * flex-flow: 简写（flex-direction和 flex-wrap结合), flex-wrap: column no-wrap
 * align-content
 *
 *
 *
 * 子盒子：order, flex-grow,flex-shrink,flex-base，flex(简写): flex-grow flex-shrink flex-base
 *
 *注意点：flex-base(在剩余的空间，如何占据大小，默认为元素本来的大小：flex-base: auto默认),
   优先级：max-width>flex-base>width

   align-self：和align-items差不多。覆盖父元素的align-items的设定
   
 *
 *
 */