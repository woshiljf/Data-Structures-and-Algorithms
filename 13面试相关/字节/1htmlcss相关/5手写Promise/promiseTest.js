const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'


function PromiseTest(excutor) {

    this.status = PENDING
    this.callback = []
    this.value = null

    // 执行传递过来的执行函数


    this.resolve = function(value) {
        if (this.status == PENDING) {
            this.value = value
            this.status = FULFILLED

            this.callback.map(callback => {

                setTimeout(() => {
                    callback.onFulfilled(this.value)
                }, 0);


            })


        }



    }
    this.reject = function(reason) {


        if (this.status == PENDING) {
            this.value = reason
            this.status = REJECTED
            this.callback.map(callback => {

                setTimeout(() => {
                    callback.onRejected(this.value)
                }, 0);


            })
        }


    }

    try {
        excutor(this.resolve.bind(this), this.reject.bind(this))
    } catch (error) {
        this.reject(error)
    }

    this.then = function(onFulfilled, onRejected) {

        // 判断onFulfilled和onReject是否为函数
        if (typeof onFulfilled !== 'function') {
            onFulfilled = () => this.value
        }

        if (typeof onRejected !== 'function') {
            onRejected = () => this.value
        }

        let promise = new PromiseTest((resolve, reject) => {

            if (this.status == PENDING) {

                this.callback.push({

                    onFulfilled: (value) => {
                        // 优化一下
                        this.parse(promise, onFulfilled(value), resolve, reject)
                            // try {
                            //     let result = onFulfilled(value)
                            //         // 如果当前的then返回promise的情况
                            //     if (result instanceof PromiseTest) {


                        //         // result.then((value) => {

                        //         //     resolve(value)

                        //         // }, error => {
                        //         //     reject(error)
                        //         // })

                        //         result.then(resolve, reject)


                        //     } else {
                        //         resolve(result)
                        //     }
                        // } catch (error) {
                        //     reject(error)
                        // }

                    },
                    onRejected: (value) => {

                        this.parse(promise, onRejected(value), resolve, reject)
                            // try {
                            //     let result = onRejected(value)
                            //     if (result instanceof PromiseTest) {
                            //         // result.then((value) => {
                            //         //     resolve(value)
                            //         // }, error => {
                            //         //     reject(error)
                            //         // })
                            //         result.then(resolve, reject)

                        //     } else {
                        //         resolve(result)
                        //     }
                        // } catch (error) {
                        //     reject(error)
                        // }

                    }
                })


            }


            if (this.status == FULFILLED) {

                setTimeout(() => {

                    this.parse(promise, onFulfilled(this.value), resolve, reject)

                    // try {
                    //     let result = onFulfilled(this.value)

                    //     // console.log(result + "我");
                    //     if (result instanceof PromiseTest) {


                    //         // result.then((value) => {

                    //         //     resolve(value)

                    //         // }, error => {
                    //         //     reject(error)
                    //         // })

                    //         result.then(resolve, reject)


                    //     } else {
                    //         resolve(result)
                    //     }





                    // } catch (error) {
                    //     reject(error)
                    // }
                }, 0);
            }



            if (this.status == REJECTED) {

                setTimeout(() => {
                    this.parse(promise, onRejected(this.value), resolve, reject)
                        // try {

                    //     let result = onRejected(this.value)
                    //     if (result instanceof PromiseTest) {
                    //         // result.then((value) => {
                    //         //     resolve(value)
                    //         // }, error => {
                    //         //     reject(error)
                    //         // })
                    //         result.then(resolve, reject)

                    //     } else {
                    //         resolve(result)
                    //     }
                    // } catch (error) {
                    //     reject(error)
                    // }

                }, 0);
            }

        })

        return promise






    }

    this.myResolve = function(p) {

        // if (p instanceof PromiseTest) return p
        return new PromiseTest((resolve, reject) => {

            if (p instanceof PromiseTest) {
                p.then(resolve, reject)
            } else {
                resolve(p)
            }

        })
    }

    this.myReject = function(p) {
        if (p instanceof PromiseTest) return p

        return new PromiseTest((resolve, reject) => {

            if (p instanceof PromiseTest) {
                p.then(resolve, reject)
            } else {
                reject(p)

            }

        })
    }

    this.parse = function(promsie, result, resolve, reject) {

            if (promsie == result) {
                throw new Error("不能返回相同的promise")
            }

            try {
                // let result = onFulfilled(value)
                // 如果当前的then返回promise的情况
                if (result instanceof PromiseTest) {


                    // result.then((value) => {

                    //     resolve(value)

                    // }, error => {
                    //     reject(error)
                    // })

                    result.then(resolve, reject)


                } else {
                    resolve(result)
                }
            } catch (error) {
                reject(error)
            }
        },

        this.all = function(promises) {

            var result = []

            return new PromiseTest((resolve, reject) => {

                promises.forEach(p => {
                    p.then(value => {

                        result.push(value)

                        if (result.length == promises.length) {

                            resolve(result)

                        }
                    }, reason => {

                        reject(reason)
                    })

                });

            })

        }

    this.reace = function(promises) {
        return new PromiseTest((resolve, reject) => {
            promises.map(p => {

                p.then(value => {
                    resolve(value)
                }, reason => {
                    reject(reason)
                })



            })




        })
    }

}