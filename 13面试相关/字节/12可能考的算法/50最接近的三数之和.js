/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {

  nums.sort((a, b) => a - b)
  var n = nums.length;
  var best = 10000000;

  for (let i = 0; i < nums.length; i++) {


    let l = i + 1
    let r = n - 1

    while (l < r) {

      let sum = nums[i] + nums[l] + nums[r]

      if (sum == target) return sum

      if (Math.abs(sum - target) < Math.abs(best - target)) {
        best = sum
      }

      if (sum > target) {
        r--
      }
      if (sum < target) {
        l++
      }

    }


  }

  return best




}