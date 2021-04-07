class MyPromise {

    static PENDING = 'pending'
    static FULFILLED = 'fulfilled'
    static REJECTED = 'rejected'


    constructor(executor) {

        this.status = MyPromise.PENDING
        this.value = null
        this.callback = []
            // 捕获错误，如果发生错误，直接进入拒绝状态
        try {
            // 执行我们的执行者
            executor(this.resolve.bind(this), this.reject.bind(this))
        } catch (error) {
            this.reject(error)
        }


    }

    resolve(value1) {
        if (this.status == MyPromise.PENDING) {
            // 修改状态
            this.value = value1

            this.status = MyPromise.FULFILLED

            this.callback.map(callack => {

                setTimeout(() => {

                    callack.onfulfulled(this.value)

                }, 0);
            })



        }
    }
    reject(reason) {
        if (this.status == MyPromise.PENDING) {

            this.value = reason
            this.status = MyPromise.REJECTED
                // 把压入函数队列中的函数拿出来执行
            this.callback.map(callack => {

                // 这里的代码也要异步执行

                setTimeout(() => {

                    callack.onrejected(this.value)
                }, 0);

            })


        }
    }

    then(onfulfulled, onrejected) {
        // 注意，then是可以链式调用的，意味着是必须返回一个Promise
        // 当onfulfulled和onrejected不是函数，也就是可以不传递（null，或者undfined的时候)

        if (typeof onfulfulled !== 'function') {
            onfulfulled = () => this.value
        }

        if (typeof onrejected !== 'function') {
            onrejected = () => this.value
        }
        return new MyPromise((resolve, reject) => {

            // 在状态为等待的时候，把要执行的函数，压入执行队列
            if (this.status == MyPromise.PENDING) {

                this.callback.push({

                    onfulfulled: value => {

                        // 这里也要进行错误捕获
                        try {
                            let result = onfulfulled(value)
                            resolve(result)
                        } catch (error) {

                            reject(error)

                        }

                    },
                    onrejected: reason => {
                        try {
                            let result = onrejected(reason)
                            resolve(result)
                        } catch (error) {
                            // 当前的then返回的错误，交给下一个promise的reject去处理
                            reject(error)
                        }
                    }
                })
            }



            if (this.status == MyPromise.FULFILLED) {

                setTimeout(() => {
                    try {
                        // 先取到函数的返回值
                        let result = onfulfulled(this.value)

                        resolve(result)


                    } catch (error) {
                        // 当前的then返回的错误，交给下一个promise的reject去处理
                        reject(error)
                    }
                }, 0);




            }

            if (this.status == MyPromise.REJECTED) {

                setTimeout(() => {
                    try {
                        let reason = onrejected(this.value)

                        // 这里注意，then返回的状态默认是成功的
                        resolve(reason)

                        // resolve(reason)

                    } catch (error) {

                        reject(error)

                    }
                }, 0);
            }







        })





    }















}