/**
 * 
 * 涉及到跨域资源共享(CORS)的请求，包含简单请求和复杂请求
 * 
 * 1 首先，遇到跨域资源共享的情况，客户端首先会使用options请求方式，发起预捡请求
 * 
 * 简单请求：请求方法：get post head
 * 除了以下的请求头字段之外，没有自定义的请求头
   Accept
   Accept-Language
   Content-Language
   Content-Type
   DPR
   Downlink
   Save-Data
   Viewport-Width
   Width
   Content-Type的值只有以下三种(Content-Type一般是指在post请求中，get请求中设置没有实际意义)
   
   text/plain
   multipart/form-data
   application/x-www-form-urlencoded

   简单请求进行跨域：
   Access-Control-Allow-Origin:*
   如果只是针对某一个请求源进行设置的话，可以设置为具体的值
   Access-Control-Allow-Origin: 'http://www.yourwebsite.com'
 * 
 * 
 * 
 * 复杂请求的跨域
 * 针对复杂请求，我们需要设置不同的响应头。因为在预检请求的时候会携带相应的请求头信息

    Access-Control-Request-Method: POST
    Access-Control-Request-Headers: X-CUSTOMER-HEADER, Content-Type
    相应的响应头信息为：
    
    Access-Control-Allow-Origin: http://foo.example
    Access-Control-Allow-Methods: POST, GET, OPTIONS
    Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
    // 设置max age，浏览器端会进行缓存。没有过期之前真对同一个请求只会发送一次预检请求
    Access-Control-Max-Age: 86400
 * 
 * 
 * 
 * 
 */