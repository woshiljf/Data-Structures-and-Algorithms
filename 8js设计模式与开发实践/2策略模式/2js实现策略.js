var strateges = {

    S: function(salary) {
        return salary * 4
    },
    B: function(salary) {
        return salary * 3
    },
    A: function(salary) {
        return salary * 2
    },

}

var caculateBonus = function(level, salary) {
    return strateges[level](salary)
}