var target = {

    name: '小狗',
    age: 19,
    like: ["篮球", "唱歌"]


}

const handle = {

    // 获取拦截操作
    get(target, property, reciver) {

        // 1 target.property
        // return target[property]
        return Reflect.get(...arguments)


    },
    set(target, property, value, reciver) {

        return Reflect.set(...arguments)

    },
    // 判断目标对象是否拥有某个属性, in 操作
    has(target, property) {
        console.log('有没有');
        return Reflect.has(...arguments)
    },
    deleteProperty(target, property) {
        console.log('删除属性');
        Reflect.deleteProperty(...arguments)
    }



}



var proxy = new Proxy(target, handle)

Reflect.has(proxy, 'age')

Reflect.deleteProperty(proxy, 'name')

console.log(proxy.name);