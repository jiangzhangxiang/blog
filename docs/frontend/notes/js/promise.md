### 手写一个promise 

1. 初始版本-无法支持链式调用
```javascript
const Pending = 'Pending', Fulfilled = 'Fulfilled', Rejected = 'Rejected'

function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    return reject(new TypeError('TypeError'))
  }
  let called = false
  if ((typeof x === 'object' && x !== null) || (typeof x === 'function')) {
    try {
      let then = x.then
      if (typeof then === "function") {
        then.call(x, (y) => {
          if (called) return;
          called = true
          resolvePromise(promise2, y, resolve, reject)
        }, (r) => {
          if (called) return;
          called = true
          reject(r)
        })
      }
    } catch (e) {
      if (called) return;
      called = true
      reject(e)
    }
  } else {
    resolve(x)
  }
}
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
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function'? onRejected : reason => {throw reason}
    let promise2 = new MyPromise((resolve, reject) => {
      if (this.status === Fulfilled) {
        setTimeout(()=> {
          try {
            let x = onFulfilled(this.value)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        }, 0)
      }
      if (this.status === Rejected) {
        setTimeout(()=> {
          try {
            let x = onRejected(this.reason)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        }, 0)
      }
      if (this.status === Pending) {
        this.onFulfilledCallBack.push(() => {
          try {
            let x = onFulfilled(this.value)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        })
        this.onRejectedCallBack.push(() => {
          try {
            let x = onRejected(this.reason)
            resolvePromise(promise2, x, resolve, reject)
          } finally {
            reject(e)
          }
        })
      }
    })
    return promise2
  }
}
```