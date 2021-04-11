function getTime(arr1) {

    var arr = arr1.sort((a, b) => a[0] - b[0])

    var time = 0
    var len = arr.length

    for (let i = 0; i < len; i++) {

        if (arr.length == 0) break

        // 先执行时间准备比较少的
        var a1 = arr.shift()
        time = a1[0] + a1[1]
        var len1 = arr.length
        for (let j = 0; j < len1; j++) {
            var a2 = arr[j]
            if (arr.length == 0) break
            if (a2[0] <= time) {
                time += a2[1]
                arr.splice(j, 1)
            }
        }
    }

    return time
}

var arr = [
    [5, 1],
    [2, 4]
]

var time = getTime(arr)

console.log(time);

// 优秀的操作系统离不开优秀的任务调度算法。 现在， 有一台计算机即将执行n个任务，
// 每个任务都有一个准备阶段和执行阶段。 只有在准备阶段完成后， 执行阶段才可以开始。
// 同一时间， 计算机只能执行一个任务的执行阶段， 同时可以执行任意多个任务的准备阶段。
// 请你设计一个算法， 合理分配任务执行顺序， 并输出完成所有任务的最少时间。