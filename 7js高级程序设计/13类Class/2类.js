class Person {
    constructor(name, age) {
        // 每个实例的实例属性
        this.name = name
        this.age = age
    }

    // 实例的共享属性
    sayName() {
        console.log(this.name);
    }
    static getAge() {
        console.log('静态属性');
    }


}

var p = new Person('gou', 19)
Person.getAge()