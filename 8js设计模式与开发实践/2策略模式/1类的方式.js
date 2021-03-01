// 根据不同的评分等级，获得对应的奖励

// 等级S
var performanceS = function() {}
performanceS.prototype.caculate = function(salary) {

        return salary * 4

    }
    // 等级S
var performanceB = function() {}
performanceB.prototype.caculate = function(salary) {

    return salary * 3

}

// 等级S
var performanceA = function() {}
performanceA.prototype.caculate = function(salary) {

    return salary * 2

}

// 定义一个奖金类

var Bonus = function() {

    this.salary = null
    this.strategy = null


}

Bonus.prototype.setSalary = function(salary) {
    this.salary = salary
}
Bonus.prototype.setStrategy = function(strategy) {
    this.strategy = strategy
}

Bonus.prototype.getBonus = function() {
    return this.strategy.caculate(this.salary)
}

var bonus = new Bonus()
bonus.setSalary(1000)
bonus.setStrategy(new performanceS)
var moneny = bonus.getBonus()
console.log(moneny);