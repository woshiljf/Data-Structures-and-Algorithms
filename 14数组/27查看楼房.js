var n = 6
var arr = [5, 3, 8, 3, 2, 5]


function coutFn (n, arr) {

  var res = []
  for (let i = 0; i < arr.length; i++) {

    if (i == 0 || i == n - 1) {
      f = 0
    } else {
      f = 1
    }
    var c1 = increase1(i + 1, arr) + f
    var c2 = increase2(i - 1, arr)
    res.push(c1 + c2)
  }

  return res


}

function increase1 (k, arr) {

  var count = 1
  var temp = arr[k]
  for (let i = k + 1; i < arr.length; i++) {

    if (arr[i] > temp) {
      count++
      temp = arr[i]
    }

  }

  return count

}


function increase2 (k, arr) {

  var count = 1
  var temp = arr[k]
  for (let i = k - 1; i >= 0; i--) {
    if (arr[i] > temp) {
      count++
      temp = arr[i]
    }
  }
  return count

}



var res = coutFn(n, arr)

console.log(res);