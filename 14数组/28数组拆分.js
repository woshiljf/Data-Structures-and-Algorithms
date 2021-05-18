/**
 * @param {number[]} nums
 * @return {number}
 * leetcode 581
 * 给定长度为 2n 的整数数组 nums ，你的任务是将这些数分成 n 对,
 * 例如 (a1, b1), (a2, b2), ..., (an, bn) ，使得从 1 到 n 的 min(ai, bi) 总和最大。
 */
var arrayPairSum = function (nums) {

  var len = nums.length
  nums.sort((a, b) => a - b)
  var sum = 0
  for (let i = 0; i < len; i = i + 2) {
    sum += nums[i]
  }

  return sum


};