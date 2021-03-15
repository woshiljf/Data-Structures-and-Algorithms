var p = new Promise((resolve, reject) => resolve("父亲成功"))

var p1 = p.finally(new Promise((resolve, reject) => reject("成功111")))
console.log(p1);