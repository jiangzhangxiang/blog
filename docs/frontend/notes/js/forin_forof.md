### for in 和 for of

#### 有什么区别
    for...in 遍历得到 key
    for...of 遍历得到 value 

##### for in 的原理
    for in 会迭代对象原型链上一切 可以枚举的属性。
    1. for in 有可能会乱序
    2. 返回索引 为字符串型
    3. 会遍历 原型属性和索引

#### for of 的原理
    for of 是基于Iterator(遍历器的) 只要拥有Iterator 机制的数据结构都能用for of 循环（数组对象/字符串/map/set等）
    1. 不会遍历 原型属性和索引