const target = {
    id: 'tarRTCIceGathererEvent'
}

const handle = {

    get(tarpTarget, propty, reciver) {

        console.log(tarpTarget == target);
        console.log(proxy == reciver);
        console.log(propty);
        // 返回属性

        // return tarpTarget[propty]
        return Reflect.get(...arguments)

    },
    set(target, property, value, reciver) {
        var success
        var success = Reflect.set(target, property, value, reciver)
        if (success) {
            console.log(success + 'fdfsf');
            success += 'djfksdjfkd'
        }
        return success // 返回true 或者false。false表示设置失败，true表示成功

    }

}

var proxy = new Proxy(target, handle)

proxy.id = 20

console.log(proxy.id);