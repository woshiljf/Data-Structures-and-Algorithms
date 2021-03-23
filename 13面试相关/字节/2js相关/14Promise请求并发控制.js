// 串行的情况，从上到下，按照顺序执行

var p = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log("1000");
            resolve();
        }, 1000);
    });
};
var p1 = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log("2000");
            resolve();
        }, 2000);
    });
};
var p2 = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log("3000");
            resolve();
        }, 3000);
    });
};

p()
    .then(() => {
        return p1();
    })
    .then(() => {
        return p2();
    })
    .then(() => {
        console.log("end");
    });