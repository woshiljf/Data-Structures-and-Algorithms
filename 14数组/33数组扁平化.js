var arr = [1, [2, [[3, 4], 5, []], 6]]


// arr = [].concat(...arr);

var res = flat(arr)

console.log(res);

function flat (arr) {

  while (arr.some(item => Array.isArray(item))) {

    arr = [].concat(...arr);

  }

  return arr


}