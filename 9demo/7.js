// var line = 'offer 5272'
// var line1 = 'offer 5272'
// var obj = {}
// obj['offer'] = []


// var str = line.split(' ')
// if (str[0] == 'offer') {

//     obj['offer'].push(Number(str[1]))
// } else if (str[0] == 'poll') {

//     outStack(obj['offer'], Number(str[1]))

// }

// console.log(obj);


function outStack(arr, n) {

    var len = arr.length
    var res = []
    if (len >= n) {
        var arr1 = arr.slice()
        arr1.sort((a, b) => a - b)
        while (n > 0) {

            var num = arr1.shift()
            var index = arr.indexOf(num)
            arr.splice(index, 1)
            res.push(num)
            n--
        }
        res.sort((a, b) => a - b)
        res.forEach(item => {
            console.log(item)
        })


    } else {
        var k = n - len
        while (len > 0) {
            res.push(arr.shift())
            len--
        }
        res.sort((a, b) => a - b)
        res.forEach(item => {
            console.log(item)
        })

        while (k > 0) {
            console.log(-1)
            k--
        }
    }

}

outStack([5857, 7423, 6210, 9175, 6281], 3)