#### 使用关键字new创建新实例对象经过了以下几步：

1. 创建一个新的临时对象
2. 将临时对象的_proto_（原型链）指向构造函数的 prototype（原型对象）
3. 将构造函数的作用域赋值给新对象 （也就是[this](./this.md)指向临时对象）
4. 执行构造函数中的代码（为这个新对象添加属性）
5. 返回临时对象

```javascript
function Person (name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
 
    this.sayName = function () {
        return this.name;
    };
}
 
var person = new Person("tom", 21, "man");
 
console.log(person.name);
```

