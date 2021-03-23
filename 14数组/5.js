function fbaci(n) {

    if (n == 0) return 0
    if (n == 1) return 1
    return ftml(1, 1, n - 1)

}

function ftml(a, b, n) {

    if (n < 1) return a

    return ftml(b, b + a, n - 1)


}

var res = fbaci(4)
console.log(res);