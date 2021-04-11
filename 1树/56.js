function getMaxMoney(desks, customer) {

    var sum = 0
    desks.sort((a, b) => b - a)
        //   主要还是对数组怎么排序的问题
    customer.sort((a, b) => {
        if (a[1] == b[1]) {
            return b[0] - a[0]
        } else {
            return b[1] - a[1]
        }
    })

    for (let i = 0; i < customer.length; i++) {

        var cs = customer[i][0]
        var cmoneny = customer[i][1]

        if (desks.length == 0) break

        if (desks[0] < cs) continue

        var k = 0

        while (k < desks.length && desks[k] >= cs) {
            k++
        }
        sum = sum + cmoneny
        desks.splice(k - 1, 1)
    }
    return sum

}

var desks = [12, 1, 4, 7]
var cus = [
    [11, 3],
    [3, 10],
    [35, 10],
    [5, 9],
    [12, 10],
    [6, 7],
]

var res = getMaxMoney(desks, cus)

console.log(res);