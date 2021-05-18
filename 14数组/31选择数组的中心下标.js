/**
 * @param {number[]} nums
 * @return {number}
 * leetcode 724
 * 前缀和，求和
 */
var pivotIndex = function (nums) {

  var len = nums.length
  if (len <= 2) return -1

  var sum = 0
  // 求出总和
  for (let i = 0; i < len; i++) {
    sum += nums[i]
  }
  var temp = 0
  // 从第一个元素开始，选择
  for (let i = 0; i < len; i++) {

    // 总和减去当前元素，再减去i 左边的和 temp
    var temp1 = sum - nums[i] - temp
    // 如果temp1 ===temp，说明是中心数
    if (temp1 == temp) return i

    temp += nums[i]

  }

  return -1

};