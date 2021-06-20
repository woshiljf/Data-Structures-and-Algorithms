/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {

  if (nums.length == 0) return 0
  if (nums.length == 1) return nums[0]
  var dp = []
  var max = 0
  // dp[i] 表示当前第i个房子的投前策略，的最大价值
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])
  max = Math.max(nums[0], nums[1])
  for (let i = 2; i < nums.length; i++) {

    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])

    max = Math.max(max, dp[i])

  }
  return max





};