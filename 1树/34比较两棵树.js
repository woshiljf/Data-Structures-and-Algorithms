function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var r1 = new TreeNode(1)



var r2 = new TreeNode(1)

var isSubtree = function(s, t) {


    const dfs = function(s, t) {

        if (s == null) return false

        return compare(s, t) || dfs(s.left, t) || dfs(s.right, t)

    }

    return dfs(s, t)

};


var fl = isSubtree(r1, r2)

console.log(fl);

function compare(root1, root2) {
    // 表示这两棵树的根节点相等开始比较
    const help = function(node1, node2) {

        if (node1 == null && node2) return false
        if (node2 == null && node1) return false

        if (node1 == null && node2 == null) return true

        if (node2.val !== node1.val) return false

        return help(node1.left, node2.left) && help(node1.right, node2.right)

    }

    return help(root1, root2)

}