## Map 对象

* Map 继承自 Object 对象。
* set以RBTree作为底层容器
* 不允许键重复
* Map中的键值是有序的（FIFO 原则），而添加到对象中的键则不是。
* Map的键是不能修改的，但是其键对应的值是可以修改的

#### 和Object的区别
* 一个Object 的键只能是字符串或者 Symbols，但一个Map 的键可以是任意值。

新建实例:
```javascript
// Object
var obj = {...};
var obj = new Object();
var obj = Object.create(null);

// Map
var map = new Map([1, 2], [2, 3]); // map = {1 => 2, 2 => 3}
```

## Set 对象

* Set 继承自 Object 对象
* set以RBTree作为底层容器
* 所有得元素的只有key没有value，value就是key
* 不能通过迭代器来改变set的值，因为set的值就是键

#### 和Array的区别
* Array元素可重复，有序
* Set所有的元素都会被自动排序，不允许出现重复的值

新建实例:
```javascript
// Array
var arr = [1,2,3];
var arr = new Array();
var arr = new Set([1,2,3]);

// Set
var set = new Set([1,2,3]);
```

### Set 数组去重
```javascript
let arr = [5, 5, 3, 4, 5, 5, 2];
let item = new Set(arr);
let res = [...item]
console.log(res); // [ 5, 3, 4, 2 ]
```
