var tel = '010-12381111'

var regx = /010\-\d{7,8}|020\-\d{7,8}/


// 原子组(test1|test2)匹配完整的
// var regx = /(010|020)\-\d{7,8}/

// 原子表：[] ，选择的情况，

// console.log(regx.test(tel));

var str = '123456789'

var res = str.match(/(123|456)/g, str)

console.log(res);