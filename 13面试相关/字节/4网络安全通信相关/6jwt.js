http: //www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html

    /**
     * jwt(josn web Token)
     * 
     * JWT： java web token 的缩写，可使用restful接口定义，
     * 也可以用在web中 段落引用组成： header 在header中声明一些信息 payload、
     * 
     * 包括三部分：Header ，Payload，Signature
     * 
     * JSON Web Token（简称 JWT）是目前最流行的跨域认证解决方案。
     * 阮一峰

     * 
     * 客户端收到服务器返回的 JWT，可以储存在 Cookie 里面，也可以储存在 localStorage。
     * 
     * 
     * 此后，客户端每次与服务器通信，都要带上这个 JWT。你可以把它放在 Cookie 里面自动发送，
     * 但是这样不能跨域，所以更好的做法是放在 HTTP 请求的头信息Authorization字段里面。
     * 
     * Authorization: Bearer <token>
     * 
     * 另一种做法是，跨域的时候，JWT 就放在 POST 请求的数据体里面。
     * 
     * （4）JWT 的最大缺点是，由于服务器不保存 session 状态，
     * 因此无法在使用过程中废止某个 token，或者更改 token 的权限。
     * 也就是说，一旦 JWT 签发了，在到期之前就会始终有效，除非服务器部署额外的逻辑。


     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * token:
     * 
     * 客户端使用用户名跟密码请求登录

      服务端收到请求，去验证用户名与密码

      验证成功后，服务端会签发一个 token 并把这个 token 发送给客户端

      客户端收到 token 以后，会把它存储起来，比如放在 cookie 里或者 localStorage 里

      客户端每次向服务端请求资源的时候需要带着服务端签发的 token

      服务端收到请求，然后去验证客户端请求里面带着的 token ，如果验证成功，就向客户端返回请求的数据
     * 
     * cookie
     * 
     * session:
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     */