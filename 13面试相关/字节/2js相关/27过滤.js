var arr = [{
        id: 1,
        name: '小狗',
        type: 1
    },

    {
        id: 2,
        name: '小fdf',
        type: 2
    },
    {
        id: 3,
        name: 'ffdfds',
        type: 1
    },
    {
        id: 4,
        name: '小狗fsdf',
        type: 2
    },
    {
        id: 5,
        name: '小狗fdfsdfsd',
        type: 3
    },
    {
        id: 6,
        name: '小鸡fdfsdfsd',
        type: 3
    },

]


var temp = arr.filter(item => {

    if (item.type == 2) {
        return {
            id: item.id,
            name: item.name
        }
    }

})
console.log(temp);