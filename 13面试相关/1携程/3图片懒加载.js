/**
 * 实现图片懒加载
 *
 * 1.前端性能优化的重要方案
 * + 通过图片或者数据的延迟加载，可以加快页面的渲染速度，让第一次打开页面的速度变快
 * + 只有图片滑动到可视区域，才加载真实的图片，节省流量
 * 2.处理方案
 * + 把所有需要延迟加载的图片用一个盒子包起来，设置宽高和默认占位符
 * + 开始所有的img的src为空，把真实的图片地址放到img的自定义属性上，让img隐藏
 * + 等到所有其他的资源都加载完成，在开始加载图片
 * + 对于很多图片，需要党页面滚动到图片区域显示出来之后再加载真实的图片
 * ....
 *
 *
 *
 */

//单张图片实现懒加载
/**
 * let $imgBox = $('.imgBox'),
    $img = $imgBox.children('img');
let $window = $(window);
//window.onload  window.onscroll
$window.on('load scroll', function() {

    if ($img.attr('isLoad') === 'true') {
        return
    }

    //获取图片底端到父容器顶端的距离
    let A = $imgBox.outerHeight() + $imgBox.offset().top;
    // console.log($window.scrollTop())
    let B = $window.outerHeight() + $window.scrollTop();
    // console.log(A);
    // console.log(B);
    if (A <= B) {
        $img.attr('src', $img.attr('data-img'));
        $img.on('load', function() {
            $img.stop().fadeIn();
        })
        $img.attr('isLoad', true)
    }
})
 */

//多张图片实现懒加载

let $container = $('.container')
let $window = $(window)

let str = ``
new Array(20).fill(null).forEach((item) => {
    str += ` <div class="imgBox">
    <img src="" alt="" data-img="http://www.zhufengpeixun.cn/images/jsbanner.jpg">
</div>`
})
$container.html(str)

let $imgBoxs = $container.children('.imgBox')

//实现多张图片延时加载
$window.on('load scroll', function() {
    let B = $window.outerHeight() + $window.scrollTop()
    $imgBoxs.each((index, item) => {
        var $imgBox = $(item)

        // 图片框底端到顶端的距离
        var A = $imgBox.outerHeight() + $imgBox.offset().top

        var isLoad = $imgBox.attr('isLoad')
        if (A <= B && isLoad !== 'true') {
            var $img = $imgBox.children('img')
            $imgBox.attr('isLoad', true)
            $img.attr('src', $img.attr('data-img'))
            $img.on('load', function() {
                $img.stop().fadeIn()
            })
        }
    })
})