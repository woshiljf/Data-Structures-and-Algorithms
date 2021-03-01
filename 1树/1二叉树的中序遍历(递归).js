var inorderTraversal = function(root) {

    if (!root) return []
    var result = []

    function dfp(node) {

        if (!node) return
        dfp(node.left)
        result.push(node.val)
        dfp(node.right)


    }
    dfp(root)
    return result



};