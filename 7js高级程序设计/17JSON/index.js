// var a = require('./1.json')

// // var obj = eval(a)

// console.log(a.name);


// console.log(obj);

var obj = {
    name: '小狗',
    age: 18,
    toJSON: function() {
        return 'a'
    }
}

var str = JSON.stringify(obj)

console.log(str);