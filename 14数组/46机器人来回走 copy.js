function enterMain (N, M, K, P) {

  if (N < 2 || K < 1 || M < 1 || M > N || P < 1 || P > N) {
    return 0
  }


  return walk(N, M, K, P)




}

function walk (N, cur, rest, P) {


  // 如果要走的步数完了，看看cur ==p，如果相等，表示走到了
  if (rest == 0) {

    return cur == p ? 1 : 0

  }
  // 当前为1位置，走到2
  if (cur == 1) {

    return walk(N, 2, rest - 1, P)

  }
  // 当前为N位置，回到N-1位置
  if (cur == N) {

    return walk(N, N - 1, rest - 1, P)

  }

  // 其他情况，可以向前，也可以向后
  return walk(N, cur + 1, rest - 1, P) + walk(N, cur - 1, rest - 1, P)



}