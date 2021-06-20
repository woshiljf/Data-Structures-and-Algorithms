/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

//  * 如果 sum[0,i] = n *k+余数1
//  *      sum[0,j] = n *k + 余数2
//  * 如果余数1==余数2
//  * sum[i,j] %k == 0
var checkSubarraySum = function (nums, k) {

  var map = new Map()
  // 记忆化搜素的过程
  map.set(0, -1)

  var sum = 0
  for (let i = 0; i < nums.length; i++) {

    sum += nums[i]
    if (k != 0) {
      sum = sum % k
    }
    // 如果余数相等，表示map里面已经记录过了的余数
    if (map.has(sum)) {
      //  * 如果 sum[0,i] = n *k+余数1
      //  *      sum[0,j] = n *k + 余数2
      //  * 如果余数1==余数2
      //  * sum[i,j] %k == 0
      if (i - map.get(sum) > 1) return true
    } else {
      // 每一次放置和的余数，并记录位置i
      map.set(sum, i)
    }

  }

  return false


};