// 计算属性

var fn = 'sayname'

var obj = {
    [fn](name) {

        console.log(name);


    }
}

obj.sayname('xiaogou')