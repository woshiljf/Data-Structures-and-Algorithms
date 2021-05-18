
var time = getAverage('abc', 3, 1)

console.log(time);

function getAverage (url, count = 1, concurrentCount = 1) {

  var amountTime = 0
  var sendCount = 0
  var finished = 0
  return new Promise((resolve, reject) => {
    fn1(url)
    async function fn1 (url) {
      var msg = await sendUrl(url)
      if (sendCount < count) {
        sendCount++
        fn1(url)
      } else {
        resolve(amountTime / count)
      }

    }

    function sendUrl (url) {
      return new Promise((resolve, reject) => {
        // 请求
        var stime = new Date().getTime()

        // wx.request({
        //   url: 'https://qq.com',

        //   success (res) {

        //     var endTime = new Date().getTime()
        //     amountTime += endTime - stime

        //     finished++
        //     if (finished < concurrentCount) {

        //       sendUrl(url)

        //     } else {
        //       return resolve('完成了')
        //     }
        //   }


        // })

        setTimeout(() => {

          // 结果回来了
          var etime = new Date().getTime()

          amountTime += etime - stime
          finished++
          if (finished < concurrentCount) {

            sendUrl(url)

          } else {
            return resolve('完成了')
          }




        }, 1000);




      })

    }





  })







}