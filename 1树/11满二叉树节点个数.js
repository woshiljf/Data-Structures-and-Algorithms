var countNodes = function(root, dfs = n => n ? 1 + dfs(n.left) : 0, l, r) {

    return root ? (l = dfs(root.left)) === (r = dfs(root.right)) ? (1 << l) + countNodes(root.right) :
        countNodes(root.left) + (1 << r) : 0
};