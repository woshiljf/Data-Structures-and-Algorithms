var obj = {

    a_cmd: {
        b_f: 1
    },
    b_m: [1, 2, 3, 4],
    c_f: {
        m_n: {
            x_t: [1, 2, 3, 4]
        }
    }

}

var o = depCopy(obj, {})

console.log(o);

function transformKey(obj) {

    const help = function(obj) {


        for (const key in obj) {
            if (Object.hasOwnProperty.call(obj, key)) {
                const element = obj[key];
                var str = ''
                var f = false
                for (let i = 0; i < key.length; i++) {

                    var s = key[i]
                    if (s == '_') {
                        f = true
                        continue
                    } else {
                        if (f) {
                            s = s.toUpperCase()
                            f = false
                        }
                        str += s
                    }
                }
                obj[str] = element
                delete obj[key]
                if (typeof element == 'object') {
                    help(element)
                }
            }
        }

    }
    help(obj)
    return obj

}

function depCopy(obj1, obj2) {

    var obj2 = obj2 || {}
    for (const key in obj1) {
        if (Object.hasOwnProperty.call(obj1, key)) {
            let value = obj1[key];
            var newKey = tranformkey(key)
            if (typeof value == 'object') {
                // 去掉key
                obj2[newKey] = value.constructor == Array ? [] : {}
                depCopy(value, obj2[newKey])
            } else {
                obj2[newKey] = value
            }
        }
    }
    return obj2
}

function tranformkey(key) {
    var str = ''
    var f = false
    for (let i = 0; i < key.length; i++) {
        var s = key[i]
        if (s == '_') {
            f = true
            continue
        } else {
            if (f) {
                s = s.toUpperCase()
                f = false
            }
            str += s
        }
    }
    return str
}