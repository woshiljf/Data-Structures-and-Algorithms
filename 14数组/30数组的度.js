/**
 * @param {number[]} nums
 * @return {number}
 * leetcode 697
 */
var findShortestSubArray = function (nums) {

  // 寻找最短子数组
  // 寻找数组的度

  const map = {}
  for (const [i, num] of nums.entries()) {
    if (num in map) {
      map[num][0]++
      map[num][2] = i
    } else {
      map[num] = [1, i, i]
    }

  }

  let maxNum = 0, minLen = 0

  for (const [cout, left, right] of Object.values(map)) {
    // 求最大的度
    if (maxNum < cout) {
      maxNum = cout
      // 长度
      minLen = right - left + 1
      // 度相同，求最小长度
    } else if (maxNum == cout) {

      if (minLen > (right - left + 1)) {
        minLen = right - left + 1
      }

    }

  }

  return minLen


};