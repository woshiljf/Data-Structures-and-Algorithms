/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {


  let res = []

  for (let i = 0; i < nums.length; i++) {

    if (nums[i] % 2 !== 0) {
      res.unshift(nums[i])
    } else {
      res.push(nums[i])
    }

  }

  return res



};