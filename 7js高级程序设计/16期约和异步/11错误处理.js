var p = new Promise((resolve, reject) => {


    reject(3)




})

p.catch(eror => {
    console.log(eror);
})