var str =
    `

   #1 js,200元 #
   #1 php,300元 #
   #9 sfksjfdklf# 小欧
   #1 java,400元 #
  






`
    // 多行匹配,使用修饰符m

var res = str.match(/^\s+#\d+\s+.+\s+#$/gm).map(item => {

    item = item.replace(/\s+#\d+\s*/, '').replace(/#/, '')

    let [name, price] = item.split(',')

    return { name, price }


})

console.log(res);