/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {


  const quickSort = function (arr) {

    if (arr.length < 2) return arr

    let mid = Math.floor(arr.length / 2)

    let midValue = arr[mid]
    let lArr = []
    let rArr = []

    arr.splice(mid, 1)

    for (let i = 0; i < arr.length; i++) {

      if (arr[i] <= midValue) {
        lArr.push(arr[i])
      } else {
        rArr.push(arr[i])
      }

    }

    return quickSort(lArr).concat(midValue, quickSort(rArr))


  }
  nums = quickSort(nums)


  return nums[nums.length - k]



};



