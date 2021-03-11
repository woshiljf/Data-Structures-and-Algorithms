/**
 * 堆排序：有大根堆(升序)和小根堆(降序)
 * 
 * https://github.com/sisterAn/JavaScript-Algorithms/issues/60
 * 
 * js里，堆（完全二叉树,可以用数组表示。任意一个数组下标i对于的数值的节点，左节点为2*i，右节点为2*i+1,
 * 父节点为：arr[i/2]
 * 
 */


var arr = [1, 4, 5, 3, 6]

function heapSort(arr) {
    let len = arr.length;

    function maxHeapify(i) {
        // 
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        let largest = i;

        if (left < len && arr[left] > arr[largest]) {
            largest = left;
        }
        if (right < len && arr[right] > arr[largest]) {
            largest = right;
        }
        if (largest != i) {
            swap(i, largest);
            maxHeapify(largest);
        }
    }

    function swap(i, j) {
        let t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    }
    // 构建堆
    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
        maxHeapify(i);
    }
    console.log(arr);
    // 大-> 小
    for (let i = arr.length - 1; i > 0; i--) {
        swap(0, i);
        len--;
        maxHeapify(0);
    }
    /* 小->大

  */
    // for (let i = 0; i < len; i++) {
    //     maxHeapify(i);
    // }
    return arr;
}

console.log(heapSort(arr));