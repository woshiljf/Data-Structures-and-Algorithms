function enterMain (N, M, K, P) {

  if (N < 2 || K < 1 || M < 1 || M > N || P < 1 || P > N) {
    return 0
  }


  let dp = new Array(N + 1).fill(0)

  dp.map((item) => new Array(K + 1).fill(-1))

  return walk(N, M, K, P, dp)




}

function walk (N, cur, rest, P, dp) {

  if (dp[cur][rest] !== -1) {

    return dp[cur][rest]


  }

  // 如果要走的步数完了，看看cur ==p，如果相等，表示走到了
  if (rest == 0) {

    dp[cur][rest] = cur == p ? 1 : 0

    return dp[cur][rest]

  }
  // 当前为1位置，走到2
  if (cur == 1) {

    dp[cur][rest] = walk(N, 2, rest - 1, P, dp)

    return dp[cur][rest]

  }
  // 当前为N位置，回到N-1位置
  if (cur == N) {

    dp[cur][rest] = walk(N, N - 1, rest - 1, P, dp)

    return dp[cur][rest]


  }

  // 其他情况，可以向前，也可以向后 
  dp[cur][rest] = walk(N, cur + 1, rest - 1, P) + walk(N, cur - 1, rest - 1, P)
  return dp[cur][rest]



}