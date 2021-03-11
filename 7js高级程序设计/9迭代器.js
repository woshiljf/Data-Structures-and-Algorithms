class Count {

    constructor(limit) {
            this.limit = limit
        }
        [Symbol.iterator]() {

            var count = 1
            var limit = this.limit
            return {

                next() {

                    if (count < limit) {
                        return { done: false, value: count++ }
                    } else {
                        return { done: true, value: undefined }
                    }
                }
            }
        }
}

var count = new Count(10)

for (const c of count) {
    console.log(c);
}

for (const c of count) {
    console.log(c);
}