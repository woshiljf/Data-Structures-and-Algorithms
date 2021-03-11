/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * leetcode 215
 */
var findKthLargest = function(nums, k) {
    var heapSize = nums.length
    buildMaxHeap(nums, heapSize)
    for (let i = nums.length - 1; i >= nums.length - k + 1; --i) {

        swap(nums, 0, i)
            --heapSize
        maxHeapify(nums, 0, heapSize)

    }
    return nums[0]

    function buildMaxHeap(nums, heapSize) {
        for (let i = parseInt(heapSize / 2); i >= 0; i--) {
            maxHeapify(nums, i, heapSize)
        }
    }

    function maxHeapify(nums, i, heapSize) {
        var maxIndex = i
        if (2 * i + 1 < heapSize && nums[2 * i + 1] > nums[maxIndex]) {
            maxIndex = 2 * i + 1
        }
        if (2 * i + 2 < heapSize && nums[2 * i + 2] > nums[maxIndex]) {
            maxIndex = 2 * i + 2
        }
        if (maxIndex == i) return
        swap(nums, i, maxIndex)
        maxHeapify(nums, maxIndex, heapSize)
    }

    function swap(nums, i, j) {

        [nums[i], nums[j]] = [nums[j], nums[i]]


    }








};