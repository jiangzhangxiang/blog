## Map 对象 
### 一个带键的数据项的集合
* Map 继承自 Object 对象。
* set以RBTree作为底层容器
* 不允许key重复
* Map的键是不能修改的，但是其键对应的值是可以修改的
#### 和Object的区别
* 一个Object 的键只能是字符串或者 Symbols，但一个Map 的键可以是任意值。
* Map中的键值是有序的（FIFO 原则），而添加到Object中的键则不是。
#### 和WeakMap之间的区别？
WeakMap只能以复杂数据类型（对象）作为key，并且key值是弱引用，对于垃圾回收更加友好。
新建实例:
```javascript
// Object
var obj = {...};
var obj = new Object();
var obj = Object.create(null);

// Map
var map = new Map([[1, 2], [2, 3]]); // map = {1 => 2, 2 => 3}
```
## Set 对象
### 是一组唯一值的集合
* Set 继承自 Object 对象
* set以RBTree作为底层容器
* 不允许key重复
* 所有得元素的只有key没有value，value就是key
* 不能通过迭代器来改变set的值，因为set的值就是键
#### 和Array的区别
* Array元素可重复，Set不允许重复

#### 和WeakSet之间的区别？
WeakSet 的成员只能是复杂数据类型（对象），而不能是其他类型的值。WeakSet中的成员都是弱引用，对于垃圾回收更加友好。
新建实例:
```javascript
// Array
var arr = [1,2,3];
var arr = new Array();
var arr = new Set([1,2,3]);

// Set
var set = new Set([1,2,3]) //set = { 1, 2, 3 }
```
### 例子
Set 数组去重: 
```javascript
var arr = [5, 5, 3, 4, 5, 5, 2];
var item = new Set(arr);
var res = [...item]
console.log(res); // [ 5, 3, 4, 2 ]
```

