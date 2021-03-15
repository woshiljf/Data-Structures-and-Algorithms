const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("小猫");
        resolve(1)
    }, 0);
})

setTimeout(() => {
    console.log('小姑');
}, 0);