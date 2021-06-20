/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {


  var sum = 0
  var min = Number.MAX_VALUE
  var start = 0
  var end = 0
  var n = nums.length
  // 滑动窗口来计算，记住对于求连续，最大最小，可以在考虑这种方法
  while (end < n) {

    sum += nums[end]

    while (sum >= target) {

      min = Math.min(end - start + 1, min)

      sum -= nums[start]

      start++

    }
    end++
  }

  return min == Number.MAX_VALUE ? 0 : min


};