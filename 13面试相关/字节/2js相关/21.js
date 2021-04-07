function repeat(fun, times, delay) {
    var count = times
    var time = delay
    var timeid = null
    return function() {
        var args = arguments[0]
        timeid = setInterval(() => {
            count--
            if (count == 0) {
                clearInterval(timeid)
            }
            fun.call(null, args)
        }, time);


    }

}

var res = repeat(console.log, 4, 1000)

res("小狗")