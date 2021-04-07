var p = new Promise(function(resove, reject) {


    resove('小狗')





}).then(value => {

    console.log(value);
    return new Promise((resolve, reject) => {
        resolve("小狗1111111111")
    })

}).then(value => {

    console.log(value + '1');
})




console.log(p);