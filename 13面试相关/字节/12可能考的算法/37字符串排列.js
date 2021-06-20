/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {


  const res = new Set()

  const visit = {}

  function dfs (path) {

    if (path.length === s.length) return res.add(path)

    // 字符串排列，有重复数字的情况，巧妙的使用索引作为遍历的标记，是否进行添加到path，非常巧妙
    for (let i = 0; i < s.length; i++) {

      if (visit[i]) continue

      visit[i] = true

      dfs(path + s[i])

      visit[i] = false
    }
  }

  dfs('')
  return [...res]



};