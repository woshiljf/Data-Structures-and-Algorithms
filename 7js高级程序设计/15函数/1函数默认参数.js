function makeKing(name = "小狗", age) {

    return name + age


}
// 传递undefined相当于不传,占位的作用
var f = makeKing(undefined, 13)
console.log(f);