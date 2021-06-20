/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {

  // 这里考查的是排序算法
  // 使用堆排序

  var len = nums.length
  // 构建堆
  buidMaxStack(nums, len)

  for (let i = nums.length - 1; i >= nums.length - k + 1; i--) {


    [nums[0], nums[i]] = [nums[i], nums[0]]

    len--

    maxStack(0, nums, len)

  }

  console.log(nums)

  return nums[0]


};

function maxStack (maxIndex, nums, len) {

  var i = maxIndex

  var leftNode = 2 * i + 1
  var rightNode = 2 * i + 2

  if (leftNode < len && nums[leftNode] > nums[maxIndex]) {
    maxIndex = leftNode
  }

  if (rightNode < len && nums[rightNode] > nums[maxIndex]) {
    maxIndex = rightNode
  }

  if (maxIndex == i) return
  else {
    [nums[i], nums[maxIndex]] = [nums[maxIndex], nums[i]]
  }

  maxStack(maxIndex, nums, len)



}

function buidMaxStack (nums, len) {

  for (let i = Math.floor(len / 2); i >= 0; i--) {

    maxStack(i, nums, len)

  }

}