var maxcount = 0
var ele = null
var map = {}

function dfsgetEleMaxCount(nodeList) {
    console.log(nodeList);
    for (let i = 0; i < nodeList.length; i++) {
        var nodeName = nodeList[i].nodeName
        var node = nodeList[i]
        if (map[nodeName] == undefined) {
            map[nodeName] = 0
            map[nodeName]++
        } else {
            map[nodeName]++
                if (maxcount < map[nodeName]) {
                    maxcount = map[nodeName]
                    ele = nodeName
                }
        }

        if (node.children.length !== 0) {
            dfsgetEleMaxCount(node.children)
        }

    }
}