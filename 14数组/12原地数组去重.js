/**
 * @param {number[]} nums
 * @return {number}
 * leetcode 80
 */
var removeDuplicates = function(nums) {

    if (nums.length == 0) return 0

    var j = 1,
        count = 1;

    for (var i = 1; i < nums.length; i++) {

        if (nums[i] == nums[i - 1]) {
            count++;
        } else {
            count = 1;
        }

        if (count <= 2) {
            nums[j++] = nums[i];
        }
    }
    return j;

};