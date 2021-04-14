/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 * leetcode 209
//  * 滑动窗口，滑动窗口，一定得记住，有这个方法
 */
var minSubArrayLen = function(target, nums) {
    var n = nums.length;
    if (n == 0) {
        return 0;
    }
    var ans = Number.MAX_VALUE;
    var start = 0,
        end = 0;
    var sum = 0;
    while (end < n) {
        sum += nums[end];
        while (sum >= target) {
            ans = Math.min(ans, end - start + 1);
            sum -= nums[start];
            start++;
        }
        end++;
    }
    return ans == Number.MAX_VALUE ? 0 : ans;

};