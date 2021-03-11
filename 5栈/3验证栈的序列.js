/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {

    var queue = popped.slice()
    var stack = []

    while (pushed.length) {
        //      首先，先往stack中放入数字
        stack.push(pushed.shift())
            // 判断stack的栈顶元素和队列的第一个元素是否相等,相等，同时弹出，不相等，继续放元素
        while (true) {
            if (queue[0] == stack[stack.length - 1] && stack.length !== 0) {
                queue.shift()
                stack.pop()
            } else {
                break
            }
        }

    }
    return queue.length == 0

};

var f = validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1])
console.log(f);