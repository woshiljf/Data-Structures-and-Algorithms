/**
 * @param {number[]} nums
 * @return {number[]}
 * leetcode 442
 */
var findDuplicates = function(nums) {


    // 注意点的是， nums中的数不会大于 nums的长度，可以使用数，作为索引进行比对

    const res = []

    for (const num of nums) {

        const absNum = Math.abs(num)

        if (nums[absNum - 1] < 0) {

            res.push(absNum)
        } else {
            nums[absNum - 1] *= -1
        }
    }

    return res

};