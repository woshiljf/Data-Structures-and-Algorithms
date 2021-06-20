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

  // 使用动态规划来解决
  // 是否存在连续子序列和为k的倍数
  let len = nums.length;

  // preSum[i] 表示：区间 [0..i) 的前缀和
  let preSum = new Array(len + 1).fill(0)
  preSum[0] = 0;
  for (let i = 0; i < len; i++) {

    preSum[i + 1] = preSum[i] + nums[i];
  }

  for (let left = 0; left < len - 1; left++) {

    for (let right = left + 1; right < len; right++) {

      let sum = preSum[right + 1] - preSum[left];

      if (sum == k || (k != 0 && sum % k == 0)) {

        return true;
      }
    }
  }
  return false;






};