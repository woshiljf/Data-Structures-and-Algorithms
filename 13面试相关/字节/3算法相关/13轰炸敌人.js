function countOne(arr) {


    var max = 0
    var mark = []
    for (let i = 0; i < arr.length; i++) {
        mark.push(new Array(arr[0].length).fill(1))
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            // 遇到空地了，准备投炸弹
            if (arr[i][j] == 0 && mark[i][j] == 1) {
                var temp = bfs(arr, mark, i, j)
                max = Math.max(max, temp)
            }

        }
    }

    function bfs(arr, mark, x, y) {

        var dx = [1, -1, 0, 0]
        var dy = [0, 0, 1, -1]
        var count = 0
        mark[x][y] = 0
        arr[x][y] = 0
        var queue = []
        queue.push([x, y])
        while (queue.length) {
            var temp = queue.shift()
            for (let i = 0; i < 4; i++) {
                var newX = temp[0] + dx[i]
                var newY = temp[1] + dy[i]
                if (newX < 0 || newX >= arr.length || newY < 0 || newY > arr[0].length) {
                    continue
                }
                if (mark[newX][newY] == 1 && arr[newX][newY] == 2 || (mark[newX][newY] == 1 && arr[newX][newY] == 0)) {

                    // 统计敌人的认识，如果当前的位置为空地，没有敌人
                    if (arr[newX][newY] !== 0) {
                        count++
                    }
                    queue.push([newX, newY])
                    mark[newX][newY] = 0
                    arr[newX][newY] = 0
                }
            }
        }

        return count
    }

    return max

}

// 1是墙壁，2是敌人，0是空地，表示可以投炸弹的空地
var arr = [
    [1, 1, 2, 1, 1, 0],
    [1, 1, 1, 2, 2, 1],
    [0, 1, 2, 1, 1, 1],
    [0, 2, 2, 1, 2, 0]
]

var f = countOne(arr)
console.log(f);