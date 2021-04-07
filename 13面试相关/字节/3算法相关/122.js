async function fn() {

    var key = await fn1()

    console.log(key);



}
fn()

function fn1() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(1)
        }, 1500);


    })


}

"MUSIC_U=19ccf5d2020aa9fbb447798ebe9c26cca516e6c5535f6044cd38da0149afdcc5f8eba1d7ed3f0aca; Max-Age=15552000; Expires=Fri, 1 Oct 2021 09:28:49 GMT; Path=/; HTTPOnly;__csrf=5ea45feecde957a9b8defeffeb5bbfd5; Max-Age=1296010; Expires=Mon, 19 Apr 2021 09:28:59 GMT; Path=/;"