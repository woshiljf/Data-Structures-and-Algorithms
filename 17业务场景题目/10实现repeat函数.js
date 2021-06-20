function repeat (func, times, wait) {

  let count = times
  return function (content) {

    let timeId = setInterval(() => {

      if (count == 0) {
        clearInterval(timeId)
        return
      }

      func(content)
      count--

    }, wait);


  }

}


const repeatFunc = repeat(console.log, 4, 1000)

repeatFunc('我是小狗')