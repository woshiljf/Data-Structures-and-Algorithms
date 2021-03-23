function panlie(arr) {

    var result = []
    const track = function(arr, temp, index) {
        result.push(temp.slice())
        for (let i = index; i < arr.length; i++) {
            if (temp.indexOf(arr[i]) == -1) {
                temp.push(arr[i])
                track(arr, temp, i + 1)
                temp.pop()
            }
        }
    }
    track(arr, [], 0)
    console.log(result);
}


function zuhe(arr) {

    var result = []
    const track = function(arr, temp) {

        if (temp.length == arr.length) {
            result.push(temp.slice())
        }
        for (let i = 0; i < arr.length; i++) {
            if (temp.indexOf(arr[i]) == -1) {
                temp.push(arr[i])
                track(arr, temp)
                temp.pop()
            }
        }
    }
    track(arr, [], 0)
    console.log(result);
}



zuhe([1, 2, 3])