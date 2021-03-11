// 构建堆：原地建堆

// 原地建堆
function buildHeap(items, heapSize) {
    while (heapSize < items.length - 1) {
        heapSize++
        heapify(items, heapSize)
    }
}

function heapify(items, i) {
    // 自下而上式堆化
    while (Math.floor(i / 2) > 0 && items[i] < items[Math.floor(i / 2)]) {
        swap(items, i, Math.floor(i / 2)); // 交换 
        i = Math.floor(i / 2);
    }
}

function swap(items, i, j) {
    let temp = items[i]
    items[i] = items[j]
    items[j] = temp
}

var arr = [1, 4, 5, 3, 6]

buildHeap(arr, 1)
console.log(arr);