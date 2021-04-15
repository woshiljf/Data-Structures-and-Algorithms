/**
 * @param {number[]} nums
 * @return {number}
 * leetcode 421
 */
var findMaximumXOR = function(nums) {


    // 获取最大数的二进制长度，因为数字大二进制越长
    // 测试数据中25最大，二进制11001长度为5，要计算是否最终能异或到11111
    let L = Math.max(...nums).toString(2).length;

    // max是在计算后能得到的最大值，maxCur是每一轮理想状态能达到的最大值
    // 例如，第一轮max=0,maxCur=1
    // 假设第一轮计算后max首位是1，第二轮max计算前先左移成10，maxCur设置为11
    // 每次cur都将max左移后最后一位置为1，因为它就是一个寻求最大值的变量，
    // 如果确实能够得到maxCur则赋值给max后退出循环进行下一轮
    let max = 0,
        maxCur;

    // 存储前缀，1，10，110等，每一次存储每一个数的前缀且位数从小到大
    // 每次计算前要清空
    // 如果不用Set就会超时，因为后面有一个查找数组里面是否包含异或后的结果
    // 用Set去重后就不会超时
    let prefix = new Set();
    for (let i = L - 1; i > -1; i--) {

        // max左移
        max <<= 1;
        // 上面左移一位后最后一位是0，把它设为1就是表示当前位数的最大值，后面就是计算是否能异或到，能就            重新赋值
        maxCur = max | 1;

        // 前缀数组置为空
        prefix.clear();

        // 按照例子来看，最长二进制位数为5，移动4位后就是在计算第5位，例如01001右移动4位就是0
        for (let num of nums) prefix.add(num >> i);

        for (let p of prefix) {
            // 如果 a = b ^ maxCur,那么a ^ b = maxCur
            // 也就是如果数组里面含有当前迭代的值与maxCur异或的结果，
            // 那就说明数组里面有两个数异或后得到maxCur
            if (prefix.has(p ^ maxCur)) {
                // 如果真的能得到理想状态的maxCur，那就赋值给max
                max = maxCur;
            }
        }
    }
    return max;




};