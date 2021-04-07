$(function() {
    createWebSocket();
});

//避免重复连接
var lockReconnect = false;
var wsUrl = "ws://localhost:8888/websocket/name";
var websocket = null;
var tt = null;

function createWebSocket() {
    try {
        websocket = new WebSocket(wsUrl);
        init();
    } catch (e) {
        console.log('catch');
        reconnect(wsUrl);
    }
}

function init() {

    //连接发生错误的回调方法
    websocket.onerror = function() {
        console.log("socket连接失败");
        //重连
        reconnect(wsUrl);
    };

    //连接成功建立的回调方法
    websocket.onopen = function(event) {
        console.log("socket连接已打开");
        //心跳检测重置
        heartCheck.start();
    };

    //接收到消息的回调方法
    websocket.onmessage = function(event) {
        console.log("后台接收到前台传送的值，还有心跳...");
        //心跳检测重置
        heartCheck.start();
        setMessageInnerHTML(event.data);
    };

    //连接关闭的回调方法
    websocket.onclose = function() {
        console.log("socket连接已关闭");
        //重连
        reconnect(wsUrl);
    };

    //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
    window.onbeforeunload = function() {
        websocket.close();
    };
}


//重连函数
function reconnect(url) {
    if (lockReconnect) {
        return;
    };
    lockReconnect = true;
    //没连接上会一直重连，设置延迟避免请求过多
    tt && clearTimeout(tt);
    tt = setTimeout(function() {
        createWebSocket(url);
        lockReconnect = false;
    }, 20000);
}


//心跳检测
var heartCheck = {
    //每隔几秒测试一下心跳是否在继续
    timeout: 10000,
    timeoutObj: null,
    serverTimeoutObj: null,
    start: function() {
        console.log('开始测试心跳');
        var self = this;
        this.timeoutObj && clearTimeout(this.timeoutObj);
        this.serverTimeoutObj && clearTimeout(this.serverTimeoutObj);
        this.timeoutObj = setTimeout(function() {
            //这里发送一个心跳，后端收到后，返回一个心跳消息，
            console.log('发送消息，测试后台是否运行中...');
            //任意发一个消息过去，后台接收，在init()中的onmessage收到消息，说明后台没有挂掉，有心跳
            websocket.send("666");
            self.serverTimeoutObj = setTimeout(function() {
                console.log("后台挂掉，没有心跳了....");
                console.log("打印websocket的地址:" + websocket);
                websocket.close();
                // createWebSocket();
            }, self.timeout);

        }, this.timeout)
    }
};


//关闭连接
function closeWebSocket() {
    websocket.close();
}

//发送消息
function send() {
    var message = document.getElementById('text').value;
    websocket.send(message);
}