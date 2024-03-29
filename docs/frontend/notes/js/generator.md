
## 什么是？
生成器(Generator)是 ES6 中的新语法，相对于之前的异步语法，上手的难度还是比较大的。因此这里我们先来好好熟悉一下 Generator 语法。

### 生成器执行流程
上面是生成器函数？ 

生成器是一个带`星号`的"函数"(注意：它并不是真正的函数)，可以通过`yield`关键字`暂停执行`和`恢复执行`的

举个例子:
```js
function* gen() {
  console.log("enter");
  let a = yield 1;
  let b = yield (function () {return 2})();
  return 3;
}
var g = gen() // 阻塞住，不会执行任何语句
console.log(typeof g)  // object  看到了吗？不是"function"

console.log(g.next())  
console.log(g.next())  
console.log(g.next())  
console.log(g.next()) 


// enter
// { value: 1, done: false }

// { value: 2, done: false }
// { value: 3, done: true }
// { value: undefined, done: true }
```
由此可以看到，生成器的执行有这样几个关键点:
1. 调用 gen() 后，程序会阻塞住，不会执行任何语句。 
2. 调用 g.next() 后，程序继续执行，直到遇到 yield 程序暂停。
3. next 方法返回一个对象， 有两个属性: `value` 和 `done`。value 为`当前 yield 后面的结果`，done 表示`是否执行完`，遇到了`return` 后，`done` 会由`false`变为`true`。

## yield*
当一个生成器要调用另一个生成器时，使用 yield* 就变得十分方便。比如下面的例子:
```js
function* gen1() {
    yield 1;
    yield 4;
}
function* gen2() {
    yield 2;
    yield 3;
}
```
我们想要按照`1234`的顺序执行，如何来做呢？

在 `gen1` 中，修改如下:
```js
function* gen1() {
    yield 1;
    yield* gen2();
    yield 4;
}
```
这样修改之后，之后依次调用`next`即可。

### 生成器实现机制——协程
可能你会比较好奇，生成器究竟是如何让函数暂停, 又会如何恢复的呢？接下来我们就来对其中的执行机制——`协程`一探究竟。

#### 什么是协程？
协程是一种比线程更加轻量级的存在，协程处在线程的环境中，`一个线程可以存在多个协程`，可以将协程理解为线程中的一个个任务。不像进程和线程，协程并不受操作系统的管理，而是被具体的应用程序代码所控制。 

#### 协程的运作过程
那你可能要问了，JS 不是单线程执行的吗，开这么多协程难道可以一起执行吗？

答案是：并不能。一个线程一次只能执行一个协程。比如当前执行 A 协程，另外还有一个 B 协程，如果想要执行 B 的任务，就必须在 A 协程中将` JS 线程的控制权转交给 B协程`，那么现在 B 执行，A 就相当于处于暂停的状态。

举个具体的例子:
```js
function* A() {
  console.log("我是A");
  yield B(); // A停住，在这里转交线程执行权给B
  console.log("结束了");
}
function B() {
  console.log("我是B");
  return 100;// 返回，并且将线程执行权还给A
}
let gen = A();
gen.next();
gen.next();

// 我是A
// 我是B
// 结束了
```
在这个过程中，A 将执行权交给 B，也就是 `A 启动 B`，我们也称 A 是 B 的**父协程**。因此 B 当中最后`return 100`其实是将 100 传给了父协程。

需要强调的是，对于协程来说，它并不受操作系统的控制，完全由用户自定义切换，因此并没有进程/线程`上下文切换`的开销，这是`高性能`的重要原因。

OK, 原理就说到这里。可能你还会有疑问: 这个生成器不就暂停-恢复、暂停-恢复这样执行的吗？它和异步有什么关系？而且，每次执行都要调用next，能不能让它一次性执行完毕呢？下一节我们就来仔细拆解这些问题。



