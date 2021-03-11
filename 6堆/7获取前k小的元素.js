const buildHeap = (arr, k) => {

    if (k == 1) return
    for (let i = parseInt(k / 2); i >= 1; i--) {
        heapify(arr, k, i)
    }
}

let heapify = (arr, k, i) => {

    while (true) {

        let maxIndex = i
        if (2 * i <= k && arr[2 * i] > arr[i]) {
            maxIndex = 2 * i
        }
        if (2 * i + 1 <= k && arr[2 * i + 1] > arr[maxIndex]) {
            maxIndex = 2 * i + 1
        }
        if (maxIndex == i) break
        swap(arr, i, maxIndex)
        i = maxIndex

    }
}

function swap(items, i, j) {
    let temp = items[i]
    items[i] = items[j]
    items[j] = temp
}

let getLeastNumbers = function(arr, k) {

    let heap = [],
        i = 0
    while (i < k) {
        heap.push(arr[i++])
    }

    buildHeap(heap, k)
    for (let i = k; i < arr.length; i++) {

        if (arr[i] < heap[1]) {
            heap[1] = arr[i]
            heapify(heap, k, 1)
        }


    }
    return heap
}

var items = [1, 4, 5, 3, 6]
var res = getLeastNumbers(items, 3)
console.log(res);