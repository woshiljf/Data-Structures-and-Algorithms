class Person {
    constructor(name, age) {
        this.name = name
        this.age = age

    }

    getName() {
        console.log(this.name);
    }

}

// 实现继承

class Son extends Person {
    constructor(name, age, like) {
        super(name, age);
        this.like = like

    }

}

var s1 = new Son('小狗', 19, '猪')
s1.getName()