var obj = {

    a: 1,
    b: {
        c: 1,
        f: {
            m: 10
        }
    }



}
const handle = {

    set() {
        console.log('设置数据');
    },
    get() {
        console.log('获取数据');
    }


}
var p = new Proxy(obj, handle)