var arr1 = [1, 2, 3, 4, 5]


var arr2 = arr1.map((item) => item * 2)



Array.prototype.myMap = function(fn) {
    var arr = this
    var arr2 = null
    arr2 = arr.reduce((cur, next) => {

        next = fn(next)
        cur.push(next)
        return cur

    }, [])
    return arr2
}


console.log(arr1.myMap((item) => item + 2));