var isValidBST = function(root, min = -Infinity, max = Infinity) {
    return root === null || root.val < max && root.val > min && isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max)
};