function printMatrix(matrix) {
    // write code here
    var res = []
    var row = matrix.length
    var colum = matrix[0].length
        //     只有一列
    var up = false
    var down = false
    var left = false
    var right = true

    //     往右边
    var leftCount = 0
    var rightCount = colum - 1
    var downCount = row - 1
    var upCount = 0

    while (leftCount <= rightCount && upCount <= downCount) {

        if (right) {
            for (let i = leftCount; i <= rightCount; i++) {

                var mn = matrix[leftCount][i]
                res.push(mn)

            }
            down = true
            right = false
            upCount++
            if (res.length == colum * row) return res
            if (upCount >= row) break
        }
        if (down) {
            for (let i = upCount; i <= downCount; i++) {

                var mn = matrix[i][rightCount]
                res.push(mn)

            }
            left = true
            down = false
            rightCount--
            if (res.length == colum * row) return res
            if (rightCount < 0) break
        }

        if (left) {
            // 只有一行的时候，往左走有问题
            for (let i = rightCount; i >= leftCount; i--) {
                var mn = matrix[downCount][i]
                res.push(mn)

            }
            up = true
            left = false
            downCount--
            if (res.length == colum * row) return res
            if (downCount < 0) break
        }

        if (up) {
            for (let i = downCount; i >= upCount; i--) {
                var mn = matrix[i][leftCount]
                res.push(mn)
            }
            up = false
            right = true
            leftCount++
            if (res.length == colum * row) return res
            if (leftCount >= colum) break
        }

    }

    return res


}

var res = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
]

var f = printMatrix(res)

console.log(f);