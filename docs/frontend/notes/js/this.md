## 什么是 this?
#### 面向对象语言中 this 表示当前对象的一个引用。

#### 但在 JavaScript 中 this 不是固定不变的，它会随着执行环境的改变而改变。

## this的指向
> 核心 哪个对象调用函数，函数里面的this指向哪个对象。

1. 全局上下文
  默认this指向全局对象, 严格模式下指向undefined。

2. 在函数中，this 表示全局对象。
```javascript
function func() {
  console.log(this)
}

func() // this = 全局对象
```

3. 在方对象.方法中，this 表示该方法所属的对象。
```javascript
let obj = {
  a: function() {
    console.log(this)
  }
}
obj.a() // this = obj
```

4. new 构造函数 中的this指向实例对象

new关键字会在内存中开辟一块空间，这个空间在设置好值后会把地址交给 b 这个变量，
所以 b 就是创建出来的对象的“代言人”，而空间存在的“this”，也就指向了 b 
```javascript
function Obj() {
  this.a = function() {
    console.log(this)
  }
}
const b = new Obj()
b.a() // Obj 里的 this 指向实例对象 b
```

5. 在事DOM件中，this 表示接收事件的元素。

IE比较奇异，使用attachEvent，里面的this默认指向window。
```html
<button onclick="this.style.display='none'">
  点我后我就消失了 // this = button
</button>
```

6. 箭头函数

箭头函数没有this, 因此也不能绑定。里面的this会指向当前最近的非箭头函数的this，找不到就是window(严格模式是undefined)。比如
```javascript
let obj = {
  a: function() {
    let d = () => {
      console.log(this)
    }
    d()
  }
}
obj.a() // 找到最近的非箭头函数a，a现在绑定着obj, 因此箭头函数中的this是obj
```
优先级: new > call、apply、bind > 对象.方法 > 直接调用。 

## 改变this指向的三种方法
[call、apply、bind](./call_apply_bind.md)三者为改变this指向的方法。
