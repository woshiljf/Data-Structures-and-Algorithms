function Tree(val) {
    this.val = val
    this.left = null
    this.right = null
}

var root = new Tree(1)
root.left = new Tree(2)
root.right = new Tree(3)
root.right.left = new Tree(4)
root.right.right = new Tree(5)

var serialize = function(root) {

    var str = ''
    const help = function(root) {
        if (root == null) {
            str += 'None,'
        } else {
            str += root.val + ','
            help(root.left)
            help(root.right)
        }
    }
    help(root)
    return str

};

// 记录路径

var traversal = function(root) {

    var str = ''
    var arr = []
    const dfs = function(root) {

        if (!root) {
            return '#'
        }
        const left = traversal(root.left)
        const right = traversal(root.right)
        const subtree = `${left},${right},${root.val}`
        console.log(subtree);
        return subtree
    }
    dfs(root)
    return arr

}

var s = traversal(root)
console.log(s);