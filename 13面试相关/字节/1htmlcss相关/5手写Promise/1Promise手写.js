class MyPromise {
    //  定义Promsie的三种状态
    static PENDING = 'pending'
    static FULFILLED = 'fulfilled'
    static REJECTED = 'rejected'

    // promise传入的是一个执行器
    constructor(exec) {

            // 状态属性
            this.state = MyPromise.PENDING
            this.value = null
                // 定一个回调队列
            this.callback = []
            exec(this.resolve.bind(this, this.value), this.reject.bind(this, this.value))


        }
        // 成功执行的函数
    resolve(value) {
            if (this.state == 'pending') {

                this.state = MyPromise.FULFILLED
                this.value = value
                    //  执行
                this.callback.map(item => {

                    setTimeout(() => {
                        item.fulfilled(this.value)
                    }, 0);

                })
            }

        }
        // 拒绝执行的函数
    reject(reason) {

        if (this.state == 'pending') {
            this.state = MyPromise.REJECTED
            this.value = reason
            this.callback.map(item => {

                setTimeout(() => {
                    item.rejected(this.value)
                }, 0);

            })
        }

    }
    then(fulfilled, rejected) {

        if (typeof fulfilled !== 'function') {
            fulfilled = () => {}
        }

        if (typeof rejected !== 'function') {
            rejected = () => {}
        }

        return new MyPromise((resolve, reject) => {
            if (this.state == MyPromise.PENDING) {
                this.callback.push({

                    fulfilled,
                    rejected

                })
            }
            // 执行回调
            if (this.state == MyPromise.FULFILLED) {

                setTimeout(() => {

                    var result = fulfilled(this.value)
                    resolve(result)

                }, 0);

            }


            if (this.state == MyPromise.REJECTED) {
                setTimeout(() => {
                    var result = rejected(this.value)
                    resolve(result)
                }, 0);
            }












        })



    }

}