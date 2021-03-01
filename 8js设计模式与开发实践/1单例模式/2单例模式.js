// 命名空间

var Myapp = {}
Myapp.namespace = function(name) {

    var parts = name.split('.')
    var current = Myapp
    for (let i in parts) {
        if (!current[parts[i]]) {
            current[parts[i]] = {}
        }
        current = current[parts[i]]
    }
}

Myapp.namespace('a.b.c')
Myapp.namespace('long.xiao.gou')

console.log(Myapp);