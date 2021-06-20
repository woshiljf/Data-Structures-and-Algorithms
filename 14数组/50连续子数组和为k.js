/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * leetcode 560
 */
var subarraySum = function (nums, k) {

  let sum = 0
  let map = new Map()
  let count = 0
  map.set(0, 1)
  for (let i = 0; i < nums.length; i++) {

    sum += nums[i]
    // 求所有和k的子数组
    // 如果mpa里面存有sum-k，说明，有数字加上k等于sum

    if (map.has(sum - k)) {
      // 取出来，count，
      count += map.get(sum - k)
    }
    // 如果有相同的sum，设置sum的个数加1
    if (map.has(sum)) {
      map.set(sum, map.get(sum) + 1)
    }
    // 否则，放置sum
    else {
      map.set(sum, 1)
    }

  }


  return count



};