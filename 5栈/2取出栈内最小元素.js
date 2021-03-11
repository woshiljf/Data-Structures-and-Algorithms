/**
 * initialize your data structure here.
 */
var MinStack = function() {

    this.data = []
    this.minStack = [Infinity]



};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {

    this.data.push(x)
    this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], x))

};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.minStack.pop()
    return this.data.pop()

};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {

    return this.data[this.data.length - 1]

};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {

    return this.minStack[this.minStack.length - 1]

};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */