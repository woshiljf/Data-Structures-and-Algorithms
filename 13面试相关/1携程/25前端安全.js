/**
 * Referer记录请求链接来源：如从goole.com 页面里面，点击百度链接,则referer：google.com
 *
 * 作用：防盗链：如我自己的服务器只允许指定的域名访问如：abc.com，当其他的域名来访问是，就可以拒绝访问。
 *
 *
 * XSS：跨站脚本攻击。通过合法的操作，比如（表单，url或者评论框）,也页面注入脚本。盗用cookie，破坏页面结构，插入恶意广告等等
 *
 * 1反射型：xss代码出现在url中，跟随用户发出的请求到服务器，服务器响应，跟随响应内容，返回给浏览器。浏览器解析
 * 2 存储型：提交的xss代码会存储在服务器（数据库，内存，文件系统），下次请求目标页面，会继续返给浏览器。
 *
 * 解决：对用户的输入进行转义如使用Encode(),httpOnly设置为true,防止劫去Cookie
 *
 * csrf:跨站请求伪造。
 * 
 * 攻击防范：
 * 验证码的方式。
 * referer check: referer记录的是http请求的来源地址。通过检查referer，可以判断请求是否合法。
 * 如服务端：if (req.headers.referer !== 'http://www.c.com:8002/') {
             res.write('csrf 攻击');
             return;
             }
 *
 */