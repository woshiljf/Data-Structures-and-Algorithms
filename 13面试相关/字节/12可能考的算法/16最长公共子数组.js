/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {

  var m = nums1.length, n = nums2.length
  // 构造dp矩阵
  // dp[i][j]  表示nums1 和nums2 子字符串长度为i和j，这两个子序列的最长公共序列的长度
  var dp = new Array(m + 1).fill(0)
  var maxLen = 0
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(n + 1).fill(0)
  }
  // 当i 等于0 或者j等于0 ，也就是nums1的子序列为空，或者nums2子序列为空，最长公共子序列都为0
  for (let i = 1; i <= m; i++) {
    let s1 = nums1[i - 1]
    for (let j = 1; j <= n; j++) {
      let s2 = nums2[j - 1]
      //   dp[i][j] = s1 == s2 ? dp[i-1][j-1]+1 : 0
      //   maxLen = Math.max(dp[i][j],maxLen)
      if (s1 == s2) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      }
      maxLen = Math.max(dp[i][j], maxLen)
    }
  }
  return maxLen
};