/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {

  var result = []

  // 首选对数组进行升序排列，按照起始位置
  intervals.sort((a, b) => a[0] - b[0])
  let end = 0
  for (let i = 0; i < intervals.length;) {

    end = intervals[i][1]

    let j = i + 1

    while (j < intervals.length && intervals[j][0] <= end) {

      end = Math.max(end, intervals[j][1])
      j++

    }

    result.push([intervals[i][0], end])
    i = j


  }

  return result

};