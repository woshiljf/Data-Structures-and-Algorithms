/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {


  var num = nums[0]

  for (let i = 1; i < nums.length; i++) {
    num ^= nums[i]
  }
  return num

};