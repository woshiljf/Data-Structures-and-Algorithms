var p = new Promise((resolve, reject) => reject("我是错误的小欧"))

var p1 = p.then(null, () => undefined)


console.log(p1);