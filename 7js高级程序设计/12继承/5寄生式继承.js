function createAnother(orignObj) {
    var obj = Object.create(orignObj)
    obj.sayHi = function() {
        console.log('hi');
    }
    return obj
}