var obj = {

    like: {
        age: 18,
        name: {
            a: 1,
            b: 2
        }
    },
    list: [1, 2, 3, 4],
    age: 100


}
var handle = {

    set: function(target, propty, value, rerciver) {

        console.log('改变了');
        return Reflect.set(...arguments)

    },
    get(target, property, reciver) {

        // 1 target.property
        // return target[property]
        console.log('和获取数据');
        return Reflect.get(...arguments)


    },



}
var p = new Proxy(obj, handle)

p.like.age = 0

console.log(p.like.age)