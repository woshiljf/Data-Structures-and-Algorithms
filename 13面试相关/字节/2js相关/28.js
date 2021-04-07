var obj = {
    a: 1,
}

Object.defineProperty(obj, 'a', {


    get() {
        console.log('获取设计')
    },
    set(value) {

        console.log('设置数据')

    }



})

console.log(obj['a']);