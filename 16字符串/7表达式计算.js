var str = '4*5+8/4-3'

var res = caculate(str)


function caculate (str, sum) {

  var stack1 = []  // 数字栈
  var stack2 = []  // 符号栈
  var sum = 0
  for (let i = 0; i < str.length; i++) {
    var s1 = str[i]
    if (s1.charCodeAt() >= 48 && s1.charCodeAt() <= 57) {
      stack1.push(Number(s1))
      if (stack1.length >= 2 && (stack2[stack2.length - 1] == '*' || stack2[stack2.length - 1] == '/')) {
        var s1 = stack1.pop() + stack2.pop() + stack1.pop()
        var out = eval(s1)
        stack1.push(out)
      }

    } else if (s1 == '+' || s1 == '-' || s1 == '*' || s1 == '/') {

      stack2.push(s1)

    } else if (s1 == '(') {

      var k = i + 1
      var newStr = ''
      while (str[k] !== ')') {
        newStr += str[k]
        k++
      }




    }

  }


  var res = []
  while (stack1.length) {
    var t1 = stack1.length !== 0 ? stack1.pop() : 0
    res.push(t1)
    var t2 = stack2.length !== 0 ? stack2.pop() : ''
    res.push(t2)
  }

  var m = res.reverse().join('')


}