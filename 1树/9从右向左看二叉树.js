function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var rightSideView = function(root) {

    if (!root) return []
    var result = []
    var queue = [root]
    while (queue.length) {

        var len = queue.length
        for (let i = 0; i < len; i++) {

            // 每次弹出一个。层次遍历，
            var node = queue.shift()
            if (i == 0) {
                // i ==0 ,向右看的第一层
                result.push(node.val)
            }
            node.right && queue.push(node.right)
            node.left && queue.push(node.left)

        }

    }
    console.log(result);
    return result


};

var root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.right = new TreeNode(5)
root.right.right = new TreeNode(4)

rightSideView(root)