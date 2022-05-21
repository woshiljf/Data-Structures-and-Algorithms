/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
 
    // 1. 暴力解法
    // 2. map解决
    const m = new Map()
    for(let i = 0;i<nums.length;i++) {
       const n1 = nums[i];
       const temp = target - n1;
       if(m.has(n1)) {
           return [m.get(n1), i];
       }else {
           m.set(temp,i);
       }
    }
    return [];
   };