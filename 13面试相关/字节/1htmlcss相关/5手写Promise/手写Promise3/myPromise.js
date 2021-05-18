class Mypromise {

  // 定义状态
  static PENDING = 'pending'
  static FULFILLED = 'fulfilled'
  static REJECTED = 'rejected'
  constructor(exec) {

    this.state = Mypromise.PENDING
    this.value = null
    this.callback = []
    exec(this.resolve.bind(this), this.reject.bind(this))
  }

  resolve (value) {

    if (this.state == Mypromise.PENDING) {

      this.state = Mypromise.FULFILLED
      this.value = value

      this.callback.map((item) => {

        setTimeout(() => {

          item.fulfilled(value)

        }, 0);


      })

    }

  }
  reject (reason) {
    if (this.state == Mypromise.PENDING) {
      this.state = Mypromise.REJECTED
      this.value = reason
      this.callback.map((item) => {
        setTimeout(() => {
          item.falled(reason)

        }, 0);
      })

    }
  }
  then (fulfilled, falled) {
    if (typeof fulfilled !== 'function') {
      fulfilled = () => { }
    }
    if (typeof falled !== 'function') {
      falled = () => { }
    }

    return new Mypromise((resolve, reject) => {


      if (this.state == Mypromise.PENDING) {


        this.callback.push({

          fulfilled: (value) => {

            var result = fulfilled(value)

            resolve(result)


          },

          falled: (reason) => {

            var result = falled(reason)

            reject(result)

          }



        })


      }

      if (this.state == Mypromise.FULFILLED) {

        setTimeout(() => {
          var result = fulfilled(this.value)

          resolve(result)
        }, 0);


      }

      if (this.state == Mypromise.REJECTED) {

        setTimeout(() => {

          var result = falled(this.value)

          reject(result)

        }, 0);


      }


    })



  }

}

Mypromise.resolve = function (p) {

  return new Mypromise((resolve, reject) => {
    if (p instanceof Mypromise) {
      return p.then(resolve, reject)
    } else {
      resolve(p)
    }

  })

}

Mypromise.reject = function (p) {

  return new Mypromise((resolve, reject) => {
    if (p instanceof Mypromise) {
      return p.then(resolve, reject)
    } else {
      reject(p)
    }

  })



}


Mypromise.race = function (promises) {

  return new Mypromise((resolve, reject) => {
    promises.map((p) => {
      p.then(value => {

        resolve(value)

      }, error => {

        reject(error)
      })

    })

  })

}

Mypromise.myAll = function (promises) {
  var result = []
  var len = promises.length
  return new Mypromise((resolve, reject) => {
    promises.map((p) => {
      p.then((value) => {

        result.push(value)

        if (result.length == len) {
          resolve(result)
        }

      }, error => {

        reject(error)

      })
    })

  })

}