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

    console.log(map);
    console.log(degree);


}

findMinHeightTrees(4, [
    [1, 0],
    [1, 2],
    [1, 3]
])