/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * leetcode 56
 */
var merge = function(intervals) {

    var result = []
    intervals.sort((a, b) => a[0] - b[0])
    for (let i = 0; i < intervals.length;) {

        var end = intervals[i][1]
        var j = i + 1
            // 重要的是这里合并区间的逻辑
            // 如果下一个数组区间的起始点小于前一个区间的终点，表示在区间内，需要合并
        while (j < intervals.length && intervals[j][0] <= end) {
            // 时刻记录最大的合并终点区间
            end = Math.max(end, intervals[j][1])
            j++

        }
        // 合并
        result.push([intervals[i][0], end])
            // j前面的合并完了，i直接从j开始，进行下一轮判断和合并
        i = j



    }

    return result







};