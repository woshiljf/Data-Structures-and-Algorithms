var arr = [2, 1, -2, -4, 6, 7, 8]

// 贪心算法解决
function method1(arr) {

    var sum = arr[0]
    var maxSum = arr[0]

    for (let i = 1; i < arr.length; i++) {

        var num = arr[i]

        if (sum < 0) {
            sum = num
            maxSum = Math.max(sum, maxSum)
        } else {
            sum += num
            maxSum = Math.max(sum, maxSum)
        }
    }

    return maxSum
}

function method2(arr) {

    var dp = []
    dp[0] = arr[0]
    for (let i = 1; i < arr.length; i++) {
        var num = arr[i]
        if (dp[i - 1] > 0) {
            dp[i] = dp[i - 1] + num
        } else {
            dp[i] = Math.max(dp[i - 1] + num, num)
        }
    }

    return dp[arr.length - 1]



}


var res = method2(arr)

console.log(res);