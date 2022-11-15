### 手写一个promise 

1. 初始版本-无法支持链式调用
```javascript
const Pending = 'Pending', Fulfilled = 'Fulfilled', Rejected = 'Rejected'

class MyPromise {
  constructor (executor) {
    this.status = Pending;
    this.value = undefined;
    this.reason = undefined
    this.onFulfilledCallBack = []
    this.onRejectedCallBack = []
    const resolve = (value) => {
      if (this.status === Pending) {
        this.status = Fulfilled;
        this.value = value
        this.onFulfilledCallBack.forEach(fn => fn())
      }
    }
    const reject = (reason) => {
      if (this.status === Pending) {
        this.status = Rejected;
        this.reason = reason
        this.onRejectedCallBack.forEach(fn => fn())
      }
    }
    try {
      executor(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }
  then (onFulfilled, onRejected) {
    if (this.status === Fulfilled) {
      onFulfilled(this.value)
    }
    if (this.status === Rejected) {
      onRejected(this.reason)
    }
    if (this.status === Pending) {
      this.onFulfilledCallBack.push(() => {onFulfilled(this.value)})
      this.onRejectedCallBack.push(() => {onRejected(this.reason)})
    }
  }
}
```