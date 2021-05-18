class MyPromise {


  // 定义状态
  static PEDDING = 'pedding'
  static FULFILLED = 'fulfilled'
  static REJECTED = 'rejected'

  // 执行函数exec
  constructor(exec) {
    this.state = MyPromise.PEDDING
    this.value = null
    this.callback = []

    exec(this.resolve.bind(this), this.reject.bind(this))
  }
  // 
  resolve (value) {
    if (this.state == MyPromise.PEDDING) {
      this.state = MyPromise.FULFILLED
      this.value = value
      this.callback.map((item) => {
        setTimeout(() => {

          item.fulled(value)

        }, 0);
      })
    }

  }

  reject (value) {

    if (this.state == MyPromise.PEDDING) {
      this.state = MyPromise.REJECTED
      this.value = value
      this.callback.map((item) => {
        setTimeout(() => {
          item.rejected(value)
        }, 0);
      })
    }
  }

  then (success, faill) {

    if (typeof success !== 'function') {
      success = () => { }
    }
    if (typeof faill !== 'function') {
      faill = () => { }
    }


    return new MyPromise((resolve, reject) => {


      if (this.state == MyPromise.PEDDING) {
        this.callback.push({
          fulled: (value) => {
            let result = success(value)

            if (result instanceof MyPromise) {

              result.then(value => {
                resolve(value)
              }, error => {
                reject(error)
              })
            } else {
              resolve(result)
            }

          },
          rejected: (reason) => {

            let result = faill(reason)

            if (result instanceof MyPromise) {

              result.then(value => {
                resolve(value)
              }, error => {
                reject(errors)
              })

            }



          }

        })
      }


      if (this.state == MyPromise.FULFILLED) {
        setTimeout(() => {

          var result = success(this.value)
          console.log('abd');
          resolve(result)
        }, 0);

      }

      if (this.state == MyPromise.REJECTED) {

        setTimeout(() => {
          var result = faill(this.value)
          reject(result)
        }, 0);

      }

    })

  }





}