var obj1 = {
    a: {
        c: 5,
        b: [2, 3, 4]
    },
    d() {
        console.log(5);
    }
}
var obj2 = {

        a: {
            c: 4,
            b: [5]
        },
        d: 5
    }
    // 合并两个对象
function merger(obj1, obj2) {

    for (const key in obj2) {

        if (obj1[key] !== undefined) {
            var v1 = obj1[key]
            var v2 = obj2[key]
            var t1 = Object.prototype.toString.call(v1)
            var t2 = Object.prototype.toString.call(v2)
            if (t1 !== t2) {
                obj1[key] = obj2[key]
            } else {
                if (Array.isArray(v1) && Array.isArray(v2)) {
                    obj1[key] = [...v1, ...v2]
                } else {
                    if (typeof v2 == 'object') {
                        merger(v1, v2)
                    } else {
                        obj1[key] = obj2[key]
                    }
                }

            }

        } else {
            obj1[key] = obj2[key]
        }
    }
    return obj1
}

console.log(merger(obj1, obj2))