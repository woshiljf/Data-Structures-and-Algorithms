function handle(strs, c1, c2) {


    var blod = c1 > c2 ? c2 : c1
    var arr = strs.split('')
    var count = 0
    var kill = 0
    for (let i = 0; i < arr.length; i++) {

        var s = arr[i]
        if (s == 'T') {
            kill = 0
        } else if (s == 'F') {
            kill++
            // kill等于2表示需要使用技能了
        }
        if (kill == 3) {

            arr[i] = 'T'
            count++
            kill = 0
        }
    }


    console.log(count * blod);


}

handle('FTFFFTFFFF', 7, 3)