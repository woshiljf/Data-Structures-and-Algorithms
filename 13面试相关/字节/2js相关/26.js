var p = new Promise((resolve, reject) => {
        reject('拒绝')
    }).then((value) => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })