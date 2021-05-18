/**
 * @param {number[]} nums
 * @return {number}
 * leetcode 287
 */
var findDuplicate = function (nums) {


  nums.sort((a, b) => a - b)

  for (let i = 1; i < nums.length; i++) {

    if (nums[i] == nums[i - 1]) {
      return nums[i]
    }


  }



};