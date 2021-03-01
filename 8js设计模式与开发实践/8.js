setTimeout(function() {
    new Promise(function(resolve, reject) {
        console.log(1);
    })
}, 5)

new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log(2);
    }, 0)
})