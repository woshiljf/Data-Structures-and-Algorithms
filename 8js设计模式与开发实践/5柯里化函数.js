var cost = (function() {

    var args = []
    return function() {

        if (arguments.length == 0) {
            var moneny = 0
            for (let i = 0; i < args.length; i++) {
                moneny += args[i]
            }
            return moneny

        } else {
            [].push.apply(args, arguments)
        }
    }
})()

cost(1)
cost(2)
cost(3)
var mount = cost()
console.log(mount);