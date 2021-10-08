## 简介
#### ECMAScript 6.0（以下简称 ES6）是 JavaScript 语言的下一代标准，已经在 2015 年 6 月正式发布了。它的目标，是使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言。

## 新特性

### let、const 新特性 `注意点let`

1. 不存在变量提升
2. 暂时性死区（块级作用域）
3. 不允许重复声明const声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用。 其只保证指针不发生改变，因此可以修改保存的对象的值

### 箭头函数
> 引用 MDN

箭头函数表达式的语法比函数表达式更短，并且不绑定自己的 this，arguments，super或 new.target。
这些函数表达式最适合用于非方法函数(non-method functions)，并且它们不能用作构造函

### 函数默认参数

> ES6中，函数形参可以直接赋值作为参数的默认值
```javascript
// ES6
function printText(text = 'default') {
    console.log(text);
}
printText('hello'); // hello
printText(); // default
```

### Promise

### Async

### 模版字符串

### 对象的简洁语法

1. 和变量 同名的属性可以省略不写

2. 对象中的方法中的 : function 可以省略不写
```javascript
// es5 
var studentES5 = {
    name: '小方哥',
    age: 20,
    sex: '男',
    getName: function () {
        return this.name;
    }
}

console.log('ES5', studentES5);
console.log('ES5', studentES5.getName());

// es6 
const name = 'Jack';
const age = 25;
const sex = '女';
const studentES6 = {
    name, // 同名的属性可以省略不写
    age,
    sex,
    getName() { // 可以省略方法中的 : function
        return this.name;
    }
};

console.log('ES6', studentES6);
console.log('ES6', studentES6.getName());
```

### 类和继承

### 展开运算符
> 引用 MDN

展开语法(Spread syntax), 可以在函数调用/数组构造时, 将数组表达式或者string在语法层面展开；还可以在构造字面量对象时, 将对象表达式按key-value的方式展开。(译者注: 字面量一般指 [1, 2, 3] 或者 {name: "mdn"} 这种简洁的构造方式)


1. 展开函数 参数
```javascript
let arr = [1, 2, 3]
function fn (a, b, c) {
    console.log(a, b ,c) // 1 2 3
}
fn(...arr) // 等价于 fn(1, 2, 3)
```

2. 展开数组
```javascript
const arr = [1, 2, 3];
const arr2 = [...arr, 6, 5];
console.log(arr2);  // [ 1, 2, 3, 6, 5 ]
```

3. 展开对象
```javascript
const obj = {
    name: "Jack",
    age: 18
};

const obj2 = {
    ...obj,
    gender: '男',
    age: 19
};
console.log(obj2);  // {name: "Jack", age: 19, gender: '男'}
```

### 解构赋值
> es6允许按照一定的模式,从数组和对象中提取值,对变量进行赋值,这被称为解构(Destructuring)

1. 数组解构赋值

```javascript
let [a, b, c] = [1, 2, 3];
console.log(a, b, c); // 1 2 3
```

2. 对象解构赋值

```javascript
let { a, b } = { a:1, b:2 };
console.log(a, b); //1 2
```
