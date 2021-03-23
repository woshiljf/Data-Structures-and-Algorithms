function pipei(str) {

    var map = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    var stack = []

    for (let i = 0; i < str.length; i++) {

        var temp = str[i]
            // 如果都是左边的括号就入栈
        if (map.hasOwnProperty(temp)) {
            stack.push(temp)
        } else {
            // 没有这个属性
            // 出栈
            stack.pop()
        }



    }

    return stack.length == 0 ? true : false



}

console.log(pipei('()([)(]){'));