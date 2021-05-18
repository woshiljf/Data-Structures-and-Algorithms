/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {

  var result = []
  if (nums.length == 0) return []

  nums.sort((a, b) => a - b)
  var len = nums.length
  var l = 0
  var r = 0
  for (let i = 0; i < nums.length; i++) {

    // if(nums[i]>0) return result
    // 不统计相邻位置，且相同的元素
    if (i > 0 && nums[i] == nums[i - 1]) continue

    // 这里使用 当前位置i ，和 左边索引l,右边索引r，同时相加，是否等于0 
    l = i + 1
    r = len - 1
    while (l < r) {

      // 当把位置i，进行固定的时候，只需要移动l，或者r，来进行判断就行
      // 当相等的情况
      if (nums[i] + nums[l] + nums[r] == 0) {

        result.push([nums[i], nums[l], nums[r]])

        //    去除重复的元素,这里的数组nums，已经经过了排序,数据从小到大排序
        while (l < r && nums[l] == nums[l + 1]) {
          l = l + 1
        }
        //    右边也需要判断数据是否一样
        while (l < r && nums[r] == nums[r - 1]) {
          r = r + 1
        }
        //   两边的索引向中间靠拢
        l = l + 1
        r = r - 1

      } else if (nums[i] + nums[l] + nums[r] > 0) {
        r = r - 1
      } else {
        l = l + 1
      }

    }


  }

  return result



};