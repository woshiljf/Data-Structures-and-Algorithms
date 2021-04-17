/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function(arr) {

    var count = arr.length

    var mod = Math.pow(10, 9) + 7
    arr.sort((a, b) => a - b)

    // 动态规划来解决这个题目
    var dp = new Array(arr.length).fill(1)

    var map = new Map()

    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], i)
    }
    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < i; j++) {

            // 找到了可以相乘等于arr[i]的数
            if (arr[i] % arr[j] == 0) {
                // 取值
                var right = Math.floor(arr[i] / arr[j])
                if (map.has(right)) {
                    //  arr[k] = arr[i] /arr[j]
                    // arr[k] * arr[j] = arr[i]
                    // dp[i] = dp[i] + dp[j] * dp[k]
                    dp[i] = (dp[i] + dp[j] * dp[map.get(right)]) % mod

                }

            }

        }

    }

    var result = 0

    dp.forEach((item) => result += item)

    return result % mod

};