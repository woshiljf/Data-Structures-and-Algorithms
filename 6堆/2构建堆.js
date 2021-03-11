/**
 * 从 index 开始检查并保持大顶堆性质
 * @arr 待排序数组
 * @index 检查的起始下标
 * @heapSize 堆大小
 **/
var maxHeapify = function(arr, index, heapSize) {
    // 计算某节点与其左右子节点在位置上的关系
    // 上一节讲过
    var iMax = index,
        iLeft = 2 * index + 1,
        iRight = 2 * (index + 1);

    // 是否左子节点比当前节点的值更大
    if (iLeft < heapSize && arr[index] < arr[iLeft]) {
        iMax = iLeft;
    }
    // 是否右子节点比当前更大节点的值更大
    if (iRight < heapSize && arr[iMax] < arr[iRight]) {
        iMax = iRight;
    }

    // 如果三者中，当前节点值不是最大的
    if (iMax != index) {
        swap(arr, iMax, index);
        maxHeapify(arr, iMax, heapSize); // 递归调整
    }
};
var swap = function(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

var arr = [7, 5, 1, 8, 4, 2]

maxHeapify(arr, 5, arr.length)
console.log(arr);