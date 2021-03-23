function flat(arr) {


    return arr.reduce((cur, value) => {

        return cur.concat(Array.isArray(value) ? flat(value) : value)

    }, [])
}

var res = flat([1, [2, 3, [4, [5]]]])

console.log(res);