## 深拷贝

* 深拷贝会拷贝所有的属性，并拷贝属性指向的动态分配的内存。当对象和它所引用的对象一起拷贝时即发生深拷贝。深拷贝相比于浅拷贝速度较慢并且花销较大。拷贝前后两个对象互不影响。

实现深拷贝的方法：

1、JSON.parse(JSON.stringify(object))

缺点：

会忽略undefined

会忽略symbol

不能序列化函数

不能解决循环引用的对象

2、采用递归去拷贝所有层级属性
3、lodash函数库实现深拷贝,lodash很热门的函数库，提供了 lodash.cloneDeep()实现深拷贝。Lodash.js

## 浅拷贝

* 简单来说可以理解为浅拷贝只解决了第一层的问题，拷贝第一层的基本类型值，以及第一层的引用类型地址。

实现浅拷贝的方法：
对象
* 1、Object.assign()
* 2、…(ES6扩展运算符)

数组
* 1、Array.prototype.slice()
* 2、Array.prototype.concat()
* 3、Array.from()
* 4、…(ES6扩展运算符)
