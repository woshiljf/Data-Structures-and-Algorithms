/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {

  var result = 0

  for (let row = 0; row < grid.length; row++) {

    for (let col = 0; col < grid[0].length; col++) {

      if (grid[row][col] == 1) {

        // 岛屿的最大面积，用的就是深度优先搜索的算法
        // 每一个点，都使用深收的方式去搜索最大的岛屿数量
        var count = dfs(row, col)
        result = Math.max(count, result)

      }

    }
  }
  function dfs (row, col) {
    // 边界值的判定.
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] == 0) {
      return 0
    }
    // 把搜到1的点变为0。
    grid[row][col] = 0
    // 统计个数
    let count = 1
    // 上下左右4个方向进行深度搜索
    count += dfs(row - 1, col)
    count += dfs(row + 1, col)
    count += dfs(row, col - 1)
    count += dfs(row, col + 1)
    return count

  }

  return result

};