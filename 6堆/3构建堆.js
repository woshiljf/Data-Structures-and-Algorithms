// 构建堆的方式
// 1 插入节点
// 构建大根堆

var item = []

function insert(key) {

    item.push(key)

    let i = item.length - 1
        // 如果插入的节点，大于父节点 item[i/2],则进行交换
    while (i / 2 > 0 && item[i] > item[parseInt(i / 2)]) {
        swap(item, i, parseInt(i / 2))
            // 交换完成，继续到父节点比较
        i = parseInt(i / 2)
    }
}

function swap(item, i, j) {

    [item[i], item[j]] = [item[j], item[i]]
}

var arr = [1, 4, 5, 3, 6]
for (let i = 0; i < arr.length; i++) {

    insert(arr[i])
}

console.log(item);