function repect(func, times, wait) {


    var count = times
    var delay = wait
    var timeId = 0
    return function() {
        timeId = setInterval(() => {
            func.call(null, arguments[0])
            count--
            if (count == 0) clearTimeout(timeId)

        }, delay);
    }

}

var fn = repect(console.log, 4, 1000)

fn('小狗')