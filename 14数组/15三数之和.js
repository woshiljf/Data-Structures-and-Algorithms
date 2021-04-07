/**
 * @param {number[]} nums
 * @return {number[][]}
 * leetcode 15
 */
var threeSum = function(nums) {


    var result = []
    var set1 = new Set()
    var map = {}
    nums.sort((a, b) => a - b)
    const help = function(temp, nums, sum) {

        // console.log(temp);
        if (temp.length == 3 && sum == 0) {

            var arr = temp.slice()

            arr.sort((a, b) => a - b)

            if (!set1.has(arr.join(''))) {
                result.push(temp.slice())
                set1.add(arr.join(''))
            }

            return
        }
        if (temp.length > 3) return
        for (let i = 0; i < nums.length; i++) {

            if (map[i]) {
                continue
            }
            //使用数组索引来判断，元素是否遍历了
            map[i] = true

            temp.push(nums[i])

            help(temp, nums, sum + nums[i])
            temp.pop()
            map[i] = false

        }
    }

    help([], nums, 0)

    return result




};

var nums = [-1, 0, 1, 2, -1, -4]
var res = threeSum(nums)

console.log(res);