/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {

  var n = nums1.length, m = nums2.length
  // 构建二维矩阵： dp[i][j]
  var dp = new Array(n + 1)
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(m + 1).fill(0)
  }

  var maxLen = 0

  // 使用了动态规划的思想，这里的dp[i][j] 表示的是 num1[i:] 和num2[j:] 的连续子数组相同的长度。
  for (let i = n - 1; i >= 0; i--) {

    for (let j = m - 1; j >= 0; j--) {

      dp[i][j] = nums1[i] == nums2[j] ? dp[i + 1][j + 1] + 1 : 0
      // 获取最大值
      maxLen = Math.max(maxLen, dp[i][j])

    }

  }

  return maxLen

};