/**
 * @param {number[]} nums
 * @return {number}
 * leetcode 169
 */
var majorityElement = function (nums) {

  var target = 0
  var count = 0
  for (let i = 0; i < nums.length; i++) {
    if (count == 0) {
      target = nums[i]
      count++
    }
    else if (target == nums[i]) {
      count++
    } else {
      count--
    }
  }

  return target
};