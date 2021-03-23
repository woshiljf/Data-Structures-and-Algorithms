function countOne(arr) {



    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if (arr[i][j] == 1) {

                var temp = dfs(arr, i, j)
                console.log(temp);
                if (temp >= 3) return true

            }

        }
    }

    function dfs(arr, i, j) {

        if (i < 0 || i >= arr.length || j < 0 || j > arr[0].length || arr[i][j] == 0) {
            return 0
        }

        let count = 1
        arr[i][j] = 0
        count += dfs(arr, i + 1, j)
        count += dfs(arr, i - 1, j)
        count += dfs(arr, i, j + 1)
        count += dfs(arr, i, j - 1)
            // 斜线方向
        count += dfs(arr, i + 1, j + 1)
        count += dfs(arr, i - 1, j + 1)
        count += dfs(arr, i + 1, j - 1)
        count += dfs(arr, i - 1, j - 1)
        return count



    }

    return false


}

var arr = [
    [1, 0, 0, 0, 0, 0],
    [1, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0]
]

var f = countOne(arr)
console.log(f);