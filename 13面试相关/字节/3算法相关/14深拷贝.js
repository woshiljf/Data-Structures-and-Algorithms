var obj1 = {

    a: 1,
    b: {
        name: '小狗',
        age: 19,
        like: [1, 2, 3, 4],
        work: {
            it: 'mm',
            m: 1
        }
    },
    c: 'c',
    d: [4, 5, 6, 7],
    fn: function() {
        console.log('fsfjls');
    }

}

function deepCopy(obj) {

    const help = function(obj, obj2) {
        obj2 = obj2 || {}
        for (const key in obj) {
            var value = obj[key]
            if (typeof value == 'object') {
                if (Array.isArray(value)) {
                    obj2[key] = []
                    help(value, obj2[key])
                } else {
                    obj2[key] = {}
                    help(value, obj2[key])
                }
            } else {
                obj2[key] = value
            }
        }

        return obj2

    }

    return help(obj)

}

var res = deepCopy(obj1)

obj1.fn = '12243434'
obj1.b.name = "的房间偶素"

console.log(res);