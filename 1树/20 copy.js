function Tree(val) {
    this.val = val
    this.left = null
    this.right = null
}

var root = new Tree(1)
root.left = new Tree(2)
root.right = new Tree(3)
root.right.left = new Tree(4)
root.right.right = new Tree(4)


var map = {}

function calcuSum(node) {
    if (!node) return 0;
    let left = calcuSum(node.left);
    let right = calcuSum(node.right);
    let sum = node.val + left + right;
    node.val = sum;
    if (map[sum] === undefined) {
        map[sum] = 1;
    } else {
        map[sum]++;
    }
    return node.val;
}
calcuSum(root);

console.log(map);