function mutifyPromise(arrp, maxn) {


    var len = arrp.length
    var finished = 0
    var sendCount = 0
    var result = []
    return new Promise((resolve, reject) => {
        while (sendCount < maxn && finished < len) {
            // 调用执行promise的操作
            next()
        }

        function next() {

            sendCount++
            var p = arrp.pop()

            p.then((value) => {
                // 发送成功
                result.push(value)
                finished++

                if (finished == maxn) {
                    resolve(result)
                    return
                } else {
                    next()
                }



            }, (error) => {

                // 发送失败
                result.push(error)
                finished++
                if (finished == maxn) {
                    reject(result)
                    return
                } else {
                    next()
                }




            })






        }












    })





}