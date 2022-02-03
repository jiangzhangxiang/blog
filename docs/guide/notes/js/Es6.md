## 简介
#### ECMAScript 6.0（以下简称 ES6）是 JavaScript 语言的下一代标准，已经在 2015 年 6 月正式发布了。它的目标，是使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言。


## let、const 新特性 `注意点let`

1. 不存在变量提升
2. 暂时性死区（块级作用域）
3. 不允许重复声明const声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用。 其只保证指针不发生改变，因此可以修改保存的对象的值

## 模版字符串

> 引用 MDN： 模板字面量 是允许嵌入表达式的字符串字面量。你可以使用多行字符串和字符串插值功能。它们在ES2015规范的先前版本中被称为“模板字符串”。

1. 语法：模板字符串使用反引号 (\` \`) 来代替普通字符串中的用双引号和单引号。
2. 模板字符串可以包含特定语法（${expression}）的占位符 // expression 为 js表达式

```javascript
let msg = 'World';
let message = `Hello ${msg}`;
console.log(message); // Hello World
```

## 箭头函数

> 引用 MDN： 箭头函数表达式的语法比函数表达式更短，并且不绑定自己的 this，arguments，super或 new.target。这些函数表达式最适合用于非方法函数(non-method functions)，并且它们不能用作构造函

```javascript
let func = function (value) {
    return value;
};

// es6 箭头函数 简写
let func = value => value;
```

## 函数默认参数

> ES6中，函数形参可以直接赋值作为参数的默认值

```javascript
// ES6
function printText(text = 'default') {
    console.log(text);
}
printText('hello'); // hello
printText(); // default
```
## Generator
> 引用 MDN：生成器对象是由一个 generator function 返回的,并且它符合可迭代协议和迭代器协议。

```javascript
function* idMaker(){
    let index = 0;
    while(true)
        yield index++;
}

let gen = idMaker(); // "Generator { }"

console.log(gen.next().value);
// 0
console.log(gen.next().value);
// 1
console.log(gen.next().value);
// 2
// ...
```

## Promise

1. Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。它由社区最早提出和实现，ES6 将其写进了语言标准，统一了用法，原生提供了Promise对象。

2. 所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。

```javascript
const promise = new Promise((resolve, reject) => {
  if (expression){ // expression 为 js表达式
    resolve('异步操作成功');
  } else {
    reject('异步操作失败');
  }
});

promise.then(res => {
    console.log(res); // '异步操作成功'
}).catch(err => {
    console.log(err); // '异步操作失败'
})
```

## 对象的简洁语法

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

## 展开运算符

> 引用 MDN： 展开语法(Spread syntax), 可以在函数调用/数组构造时, 将数组表达式或者string在语法层面展开；还可以在构造字面量对象时, 将对象表达式按key-value的方式展开。(译者注: 字面量一般指 [1, 2, 3] 或者 {name: "mdn"} 这种简洁的构造方式)

1. 展开函数 参数
```javascript
let arr = [1, 2, 3]
function fn (a, b, c) {
    console.log(a, b ,c) // 1 2 3
}
fn(...arr); // 等价于 fn(1, 2, 3)
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
    age: 18,
};

const obj2 = {
    ...obj,
    gender: '男',
    age: 19,
};
console.log(obj2);  // {name: "Jack", gender: '男', age: 19}
```

## 解构赋值

> es6允许按照一定的模式,从数组和对象中提取值,对变量进行赋值,这被称为解构(Destructuring)

1. 数组解构赋值

```javascript
let [a, b, c] = [1, 2, 3];
console.log(a, b, c); // 1 2 3
```

2. 对象解构赋值

```javascript
let { a, b } = { a: 1, b: 2 };
console.log(a, b); //1 2
```
