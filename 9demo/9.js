var obj = {}

obj['offer'] = []

while (line != '') {

    var str = line.split(' ')

    if (str[0] == 'offer') {

        obj['offer'].push(Number(str[1]))

    } else if (str[0] == 'poll') {

        outStack(obj['offer'], Number(str[1]))

    }

}

function outStack(arr, n) {

    var len = arr.length
    var res = []
    if (len >= n) {
        while (n > 0) {
            var num = arr1.shift()
            var index = arr.indexOf(num)
            arr.splice(index, 1)
            res.push(num)
            n--
        }
        res.sort((a, b) => a - b)
        res.forEach(item => {
            print(item)
        })


    } else {
        var k = n - len
        while (len > 0) {
            res.push(arr.pop())
            len--
        }
        res.sort((a, b) => a - b)
        res.forEach(item => {
            print(item)
        })

        while (k > 0) {
            print(-1)
            k--
        }
    }









}