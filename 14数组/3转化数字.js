/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    var res = 0

    while (x) {

        res = res * 10 + x % 10

        if (res > Math.pow(2, 31) - 1 || res < Math.pow(-2, 31)) return 0

        x = x > 0 ? Math.floor(x / 10) : Math.ceil(x / 10)




    }

    return res


};

var res = reverse(123)
console.log(res);