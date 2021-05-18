var nums = [6, 7, 0, 3, 4], target = 7

var res = findNum(nums, target)

console.log(res);

function findNum (nums, target) {

  var l = 0
  var r = nums.length - 1

  while (l <= r) {

    var mid = (l + r) >> 1

    if (nums[mid] == target) return true

    if (nums[mid] > target) {
      r = mid - 1
    }
    if (nums[mid] < target) {
      l = mid + 1
    }
  }

  return false





}