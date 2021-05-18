/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * leetcode 31
 */
var nextPermutation = function (nums) {


  // 首先要明白这个题目的意思，下一个更大的排列，也就是排列组成的这个数，比之前的数稍微大一点
  // 首先我们的先找到第一个较小的数，从后往前寻找第一个较小的数
  // 之后，我们再找第一个较大的数，这个较大的数要不较小的数稍微大一点


  var i = nums.length - 2;
  // 先找较小的数
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }
  // 找到了，num[i]
  if (i >= 0) {
    var j = nums.length - 1;
    // 继续找较大的数据num[j]
    while (j >= 0 && nums[i] >= nums[j]) {
      j--;
    }
    // 两个数进行位置交换，
    // swap(nums, i, j);
    [nums[i], nums[j]] = [nums[j], nums[i]]
  }
  // 然后再对i位置后的数，进行升序排列
  // 从i+1到 末尾的数，必须为降序排列，把他变成升序排列即可
  reverse(nums, i + 1);


  function swap (nums, i, j) {
    var temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }

  function reverse (nums, start) {
    var left = start, right = nums.length - 1;
    while (left < right) {
      // swap(nums, left, right);
      [nums[left], nums[right]] = [nums[right], nums[left]]
      left++;
      right--;
    }
  }

};