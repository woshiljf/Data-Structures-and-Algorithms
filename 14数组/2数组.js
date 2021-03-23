/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {

    var temp = []
    var i = 0;
    var j = 0
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            temp.push(nums1[i])
            i++
        } else {
            temp.push(nums2[j])
            j++
        }
    }

    if (i == nums1.length) {
        temp = temp.concat(nums2.slice(j))
    }
    if (j == nums2.length) {
        temp = temp.concat(nums1.slice(i))
    }
    var len = temp.length
    var mod = len % 2
    var mid = len / 2
    if (mod !== 0) return temp[parseInt(mid)]

    return (temp[mid - 1] + temp[mid]) / 2

};

var res = findMedianSortedArrays([1, 2], [3, 4, 8])
console.log(res);