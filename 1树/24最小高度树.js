var findMinHeightTrees = function(n, edges) {
    if (n === 1) return [0]; // special case
    // map for adjacency lists
    const map = new Map();
    // each vertex's degree
    const degree = new Array(n).fill(0);

    // init map and degree
    for (let e of edges.values()) { // 2d array need .values() to use for..of..
        if (!map.has(e[0])) {
            map.set(e[0], []);
        }
        if (!map.has(e[1])) {
            map.set(e[1], []);
        }
        map.get(e[0]).push(e[1]);
        map.get(e[1]).push(e[0]);
        ++degree[e[0]];
        ++degree[e[1]];
    }

    // initially, put all leaf into queue
    let queue = [];
    for (let i = 0; i < n; i++) {
        if (degree[i] === 1) {
            queue.push(i);
        }
    }

    // bfs
    let res;
    while (queue.length) {
        /* 这个地方注意，我们每层循环都要一个新的 res，
        这样最后保存的就是最终的最小高度树了 */
        res = [];
        // 注意这里要获取 queue size，因为下面 loop 中 queue 会变化
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let u = queue.shift();
            res.push(u); // 为什么当前只是叶子节点为什么要加入结果集呢?
            /* 因为我们每次循环都会新建一个list，所以最后保存的就是最后一个状态下的叶子节点，
            这也是很多题解里面所说的剪掉叶子节点的部分，你可以想象一下图，每层遍历完，
            都会把该层（也就是叶子节点层）这一层从队列中移除掉，
            不就相当于把原来的图给剪掉一圈叶子节点，形成一个缩小的新的图吗 */
            let neighbors = map.get(u);
            /* 这里就是经典的bfs了，把当前节点的相邻接点都拿出来，
             * 把它们的出度都减1，因为当前节点已经不存在了，所以，
             * 它的相邻节点们就有可能变成叶子节点 */
            for (let neighbor of neighbors) {
                degree[neighbor]--;
                if (degree[neighbor] === 1) {
                    /* 如果是叶子节点我们就入队 */
                    queue.push(neighbor);
                }
            }
        }
    }

    return res;
}