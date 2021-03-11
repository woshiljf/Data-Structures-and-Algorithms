var obj = {
    p: [
        'hello',
        {
            name: '小狗'
        }
    ]
}

var { p, p: [x, { name }] } = obj

console.log(p)
console.log(x)
console.log(name)