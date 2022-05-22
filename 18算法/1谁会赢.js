// https://leetcode.cn/problems/can-i-win/
var canIWin = function(maxChoosableInteger, desiredTotal) {
    const memo = new Map();
    const dfs = (maxChoosableInteger, usedNumbers, desiredTotal, currentTotal) => {
        if (!memo.has(usedNumbers)) {
            let res = false;
            for (let i = 0; i < maxChoosableInteger; i++) {
                // 判断数字是否之前选择过了
                if (((usedNumbers >> i) & 1) === 0) {
                    if (i + 1 + currentTotal >= desiredTotal) {
                        res = true;
                        break;
                    }
                    if (!dfs(maxChoosableInteger, usedNumbers | (1 << i), desiredTotal, currentTotal + i + 1)) {
                        res = true;
                        break;
                    }
                }
            }
            memo.set(usedNumbers, res);
        }
        return memo.get(usedNumbers);
    }
    if ((1 + maxChoosableInteger) * (maxChoosableInteger) / 2 < desiredTotal) {
        return false;
    }
    return dfs(maxChoosableInteger, 0, desiredTotal, 0);
};