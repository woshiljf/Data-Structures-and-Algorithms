/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {

  nums.sort((a, b) => a - b)
  var n = nums.length;
  var best = 10000000;
  // 枚举 a
  for (var i = 0; i < n; ++i) {
    // 使用双指针枚举 b 和 c
    var j = i + 1, k = n - 1;
    while (j < k) {
      var sum = nums[i] + nums[j] + nums[k];
      // 如果和为 target 直接返回答案
      if (sum == target) {
        return target;
      }
      // 根据差值的绝对值来更新答案
      if (Math.abs(sum - target) < Math.abs(best - target)) {
        best = sum;
      }
      if (sum > target) {
        k--
      } else {
        j++
      }
    }
  }
  return best;
}