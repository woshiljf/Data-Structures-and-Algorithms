/**
 * @param {number[]} nums
 */
var Solution = function(nums) {

    this.data = nums
    this.orgin = nums.slice()

};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {

    return this.orgin

};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {

    var len = this.data.length
    var i = 0
    while (i < len) {
        // Fisher-Yates 洗牌算法即是通俗解法
        // 洗牌算法, 没吃随机产生一个在i ->i +n之间的随机数，进行交换
        var n = Math.floor(i + Math.random() * (len - i))

        var temp = this.data[i]

        this.data[i] = this.data[n]

        this.data[n] = temp

        i++

    }

    return this.data


};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */