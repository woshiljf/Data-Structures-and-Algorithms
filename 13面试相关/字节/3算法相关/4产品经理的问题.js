var arr = [
    [2, 1, 1, 0, 1, 1],
    [0, 2, 0, 0, 0, 2],
    [2, 1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1],
]


function killProducter(grid) {

    var len = grid.length
    var mark = []
    var count = 0
    for (let i = 0; i < len; i++) {
        var temp = new Array(grid[0].length).fill(0)
        mark.push(temp)
    }
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            // 只有当发现了岛屿1，并且这个位置没有被标记过
            if (grid[i][j] == '2' && mark[i][j] == 0) {
                BFS(mark, grid, i, j)
                count++
            }

        }
    }

    for (let i = 0; i < grid.length; i++) {
        var temp = grid[i]
        if (temp.includes(1)) {
            return -1
        }

    }

    return count
}

function BFS(mark, grid, x, y) {

    var dx = [-1, 1, 0, 0]
    var dy = [0, 0, -1, 1]

    mark[x][y] = 2
    grid[x][y] = 2
    var queue = []
    queue.push([x, y])
    while (queue.length) {

        [x, y] = queue.shift()
        for (let i = 0; i < 4; i++) {

            var newX = x + dx[i]
            var newY = y + dy[i]

            if (newX < 0 || newX >= mark.length || newY < 0 || newY >= mark[0].length) {
                continue
            }
            if ((mark[newX][newY] == 0 && grid[newX][newY] == 1) || mark[newX][newY] == 0 && grid[newX][newY] == 2) {
                mark[newX][newY] = 2
                grid[newX][newY] = 2
                queue.push([newX, newY])
            }



        }




    }


}



var res = killProducter(arr)

console.log(res);