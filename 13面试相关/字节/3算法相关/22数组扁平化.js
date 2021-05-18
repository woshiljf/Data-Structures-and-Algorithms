var arr = [1, 2, 3, [1, [3, [6, [7, [8]]]]]]

while (arr.some(item => Array.isArray(item))) {
  arr = [].concat(...arr)
}

console.log(arr)