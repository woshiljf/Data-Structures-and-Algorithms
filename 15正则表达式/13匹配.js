var str = 'abdfsdfs123456,我是小狗，'

// sc=Han 表示匹配汉字
// \p{L}表示匹配字符，非数字
// \p{P} 表示匹配句号逗号之类的
console.log(str.match(/\p{P}/gu));