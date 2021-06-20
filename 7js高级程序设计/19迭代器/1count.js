class Count {

  constructor(limit) {

    this.limit = limit

  }

  [Symbol.iterator] () {

    let count = 1

    let limit = this.limit

    return {

      next () {

        if (count < limit) {

          return {
            value: count++, done: false
          }

        } else {
          return {
            value: undefined, done: true
          }
        }




      }



    }















  }