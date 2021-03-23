async function fn() {

    return await getData()


}

function getData() {

    return new Promise((resolve, reject) => {


        setTimeout(() => {
            // reject("这是小狗")
            throw new Error("adkfjs")
        }, 1000);


    })



}

try {
    fn().then(null, (eror) => {
        console.log(eror);
    })
} catch (error) {

    console.log(eror);

}