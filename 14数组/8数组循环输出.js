function printMatrix(matrix) {
    // write code here
    if (!matrix) return [];
    let res = [];
    let top = 0,
        left = 0,
        right = matrix[0].length - 1,
        bottom = matrix.length - 1;
    while (left <= right && top <= bottom) {
        // 往右边走
        for (let i = left; i <= right; i++) {
            res.push(matrix[top][i]);
        }
        top++;
        // 往下走
        for (let i = top; i <= bottom; i++) {
            res.push(matrix[i][right]);
        }


        if (left > right || top > bottom) {
            break;
        }
        right--;
        // 往左边走
        for (let i = right; i >= left; i--) {
            res.push(matrix[bottom][i]);
        }
        // 往上走
        bottom--;
        for (let i = bottom; i >= top; i--) {
            res.push(matrix[i][left]);
        }
        left++;
    }
    return res;
}