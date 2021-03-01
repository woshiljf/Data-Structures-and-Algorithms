const inorder = (root, nums) => {
    if (root === null) {
        return;
    }
    inorder(root.left, nums);
    nums.push(root.val);
    inorder(root.right, nums);
}

const findTwoSwapped = (nums) => {
    const n = nums.length;
    let x = -1,
        y = -1;
    for (let i = 0; i < n - 1; ++i) {
        if (nums[i + 1] < nums[i]) {
            y = nums[i + 1];
            if (x === -1) {
                x = nums[i];
            } else break;
        }
    }
    return [x, y];
}

const recover = (r, count, x, y) => {
    if (r !== null) {
        if (r.val === x || r.val === y) {
            r.val = r.val === x ? y : x;
            if (--count === 0) {
                return;
            }
        }
        recover(r.left, count, x, y);
        recover(r.right, count, x, y);
    }
}

var recoverTree = function(root) {
    const nums = [];
    inorder(root, nums);
    const [first, second] = findTwoSwapped(nums);
    recover(root, 2, first, second);
};