/**
 * Object
 * 1 如何创建对象：1Object创建，2字面量创建
 * 2 对象属性：1 数据属性；2访问器属性
 * 常用的设置属性的方法：Object.defineProperty；Object.defineProperties
 * 访问属性描述：Object.getOwnPropertyDescriptor
 * 
 * 
 * 
 * 
 * 
 */

var o = {}
    // 同时定义多个属性Object.defineProperties
Object.defineProperties(o, {
    // 数据属性
    name: {
        value: '小狗'
    },
    age: {
        value: 18
    },
    year_: {
        value: 2021
    },
    // 访问器属性
    year: {

        get(value) {
            console.log('huo');
            return this.year_
        },
        set(newValue) {
            this.year_ = newValue
        }


    }




})

console.log(Object.getOwnPropertyDescriptors(o));