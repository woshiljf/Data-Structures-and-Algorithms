var arr = [
    [1, 0, 2, 0, 0, 0],
    [1, 0, 0, 2, 2, 1],
    [0, 0, 2, 1, 1, 1],
    [0, 2, 2, 1, 2, 0]
]


function killProducter(grid) {

    var len = grid.length
    var mark = []
    var count = 0
    var maxCount = 0
    for (let i = 0; i < len; i++) {
        var temp = new Array(grid[0].length).fill(0)
        mark.push(temp)
    }
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            // 只有当发现了岛屿1，并且这个位置没有被标记过
            if (grid[i][j] == '2' && mark[i][j] == 0) {
                var max = BFS(mark, grid, i, j)
                maxCount = Math.max(maxCount, max)
                count++
            }

        }
    }
    console.log(grid);
    console.log(maxCount);
    return count
}

function BFS(mark, grid, x, y) {
    var dx = [-1, 1, 0, 0]
    var dy = [0, 0, -1, 1]
    var queue = []
    var count = 0
        // 把要搜索的位置放入队列
    queue.push([x, y])
    mark[x][y] = 2
    grid[x][y] = 2
        // 队列不为空，则进行搜索
    while (queue.length) {
        var temp = queue.shift()
        x = temp[0]
        y = temp[1]
        for (let i = 0; i < 4; i++) {
            // 上下左右方向搜索
            var newX = x + dx[i]
            var newY = y + dy[i]
                // 判断边界条件
            if (newX < 0 || newX >= mark.length || newY < 0 || newY >= mark[0].length) {
                continue
            }
            if (mark[newX][newY] == 0 && grid[newX][newY] == '1' || (mark[newX][newY] == 0 && grid[newX][newY] == 2)) {
                // 这个位置找到了岛屿1，放入队列，并在mark上标记为1
                queue.push([newX, newY])
                grid[newX][newY] = 2
                mark[newX][newY] = 2
                count++
            }

        }

    }
    return count

}



var res = killProducter(arr)

console.log(res);