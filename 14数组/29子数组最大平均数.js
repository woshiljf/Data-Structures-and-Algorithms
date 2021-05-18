/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {

  // 
  var maxSum = Number.MIN_SAFE_INTEGER
  var tempSum = nums[0]
  var len = nums.length
  var i = 0, j = 0
  while (i <= len - 1 && j <= len - 1) {
    if (j - i + 1 == k) {
      maxSum = Math.max(maxSum, tempSum)

      tempSum -= nums[i]

      i++
    }

    j++
    tempSum += nums[j]

  }

  return maxSum / k
};

// 官方解法
var findMaxAverage = function (nums, k) {
  let sum = 0;
  const n = nums.length;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  let maxSum = sum;
  for (let i = k; i < n; i++) {
    sum = sum - nums[i - k] + nums[i];
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum / k;
};
