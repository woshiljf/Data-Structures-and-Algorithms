/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * leetcode 189
 */
var rotate = function(nums, k) {


    let n = i = nums.length

    if ((k %= n) == 0) return

    while (i) {

        i--
        nums[i + k] = nums[i]
        if (i <= k) nums[i] = nums[n + i]
    }
    nums.length = n
    console.log(nums);
    // nums.splice(0, 0, ...nums.splice(-(k %= nums.length), k))
};

var nums = [1, 2, 3, 4, 5, 6, 7],
    k = 3

rotate(nums, k)