var promises = function() {
    return [1000, 2000, 3000].map((current) => {
        return new Promise(function(resolve, reject) {
            setTimeout(() => {
                console.log(current);
                resolve(current)
            }, current);
        });
    });
};

Promise.all(promises()).then((value) => {

    console.log(value);

});