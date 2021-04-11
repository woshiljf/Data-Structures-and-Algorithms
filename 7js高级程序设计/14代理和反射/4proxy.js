var arr = [1, 2, 3, 4]

var handle = {

    get(target, propty, reciver) {
        console.log('获取数据');

        return Reflect.get(...arguments)
    },
    set(target, propty, value, reciver) {

        console.log('设置数据');
        return Reflect.set(...arguments)
    }



}

var p = new Proxy(arr, handle)

p.push(12)