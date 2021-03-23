function jumpFloorII(number) {
    // write code here

    if (number == 1) return 1
    if (number == 2) return 2
    var arr = []
    arr[0] = 0
    arr[1] = 1
    arr[2] = 2
    for (var i = 3; i <= number; i++) {
        var sum = 0
        for (let j = 0; j <= i - 1; j++) {
            sum += arr[j]
        }
        arr[i] = sum + 1

    }
    console.log(arr)
    return arr[i - 1]

}