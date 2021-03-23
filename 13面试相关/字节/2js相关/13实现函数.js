function asyncAdd(a, b, callback) {

    doAsyncWork(a, b).then(value => callback(value));

}

function asyncGetValue(a, b) {

}