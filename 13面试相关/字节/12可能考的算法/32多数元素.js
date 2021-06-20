/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {

  var len = nums.length
  var mid = len >> 1
  nums.sort((a, b) => a - b)

  return nums[mid];


};