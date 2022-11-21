### 手写一个promise 

1. promise A+
```javascript
const Pending = 'Pending', Fulfilled = 'Fulfilled', Rejected = 'Rejected'

// 对 then 函数的返回值的处理
function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    return reject(new TypeError('Chaining cycle detected for promise'))
  }
  let called = false
  if ((typeof x === 'object' && x != null) || (typeof x === 'function')) {
    try {
      let then = x.then
      if (typeof then === "function") {
        then.call(x, (y) => {
          if (called) return;
          called = true
          // 如果返回了一个 新的 promise 就递归 resolvePromise
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
    // 其他值 直接走resolve
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
    // 如果没有传入onFulfilled，onFulfilled 就使用默认函数
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function'? onRejected : reason => {throw reason}
    // 返回一个 新的promise 支持链式调用
    let promise2 = new MyPromise((resolve, reject) => {
      if (this.status === Fulfilled) {
        // setTimeout 模拟异步任务
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
        setTimeout(() => {
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
          } catch (e) {
            reject(e)
          }
        })
      }
    })
    return promise2
  }
  catch (errorCallback) {
    return this.then(null, errorCallback)
  }
}
```