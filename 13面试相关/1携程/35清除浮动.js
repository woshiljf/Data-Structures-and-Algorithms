/**
 * 3.使用after伪元素清除浮动（推荐使用）

    .clearfix:after{/*伪元素是行内元素 正常浏览器清除浮动方法*/
content: "";
display: block;
height: 0;
clear: both;
visibility: hidden;
}
.clearfix { *
    zoom: 1; /*ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行*/
}