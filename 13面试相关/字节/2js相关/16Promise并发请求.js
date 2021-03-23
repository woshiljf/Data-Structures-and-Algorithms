function mulitRequests(urls, maxNum) {


    var len = urls.length
    var sendCount = 0
    var finishedcount = 0
    var result = new Array(len).fill(0)
    return new Promise((resolve, reject) => {
        //  首先这里使用循环的方式调用
        while (sendCount < maxNum && sendCount < len) {
            next()
        }

        function next() {
            var curent = sendCount++
                var url = urls[curent]
            if (finishedcount >= len) {
                resolve(result)
                return
            }
            fetch(url).then((value) => {
                finishedcount++
                result[curent] = value

                if (curent < len) {
                    next()
                }

            }, (error) => {
                finishedcount++
                result[curent] = error;
                if (curent < len) {
                    next()
                }

            })


        }
    })
















}