### 宏任务
> 由宿主发起的

可以理解是每次执行栈执行的代码就是一个宏任务（包括每次从事件队列中获取一个事件回调并放到执行栈中执行）。
浏览器为了能够使得JS内部宏任务与DOM任务能够有序的执行，会在一个宏任务执行结束后，在下一个宏任务 执行开始前，对页面进行重新渲染。

| 宏任务 |
| ----- |
| js脚本执行(可以理解为外层同步代码) |
| UI rendering/ UI事件 |
| postMessage，MessageChannel |
| I/O |
| setTimeout/ setInterval |
| setImmediate（浏览器暂时不支持，只有IE10支持，具体可见MDN）|


### 微任务
> 由JavaScript自身发起

微任务,可以理解是在当前 task 执行结束后立即执行的任务。
也就是说，在当前task任务后，下一个task之前，在渲染之前。
所以它的响应速度相比setTimeout（setTimeout是task）会更快，因为无需等渲染。
也就是说，在某一个宏任务执行完后，就会将在它执行期间产生的所有微任务都执行完毕（在渲染前）。
| 微任务| 
| ---- | 
| MutationObserver| 
| Promise.then(或.reject)| 
| Object.observe（已废弃；Proxy 对象替代) |
| Process.nextTick（Node独有）|