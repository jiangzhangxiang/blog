## 实现一个 请求队列

```javascript
function taskQueue(fetchList, max = 6, allCallback = () => {}) {
  const fetchCount = fetchList.length;
  const requestsQueue = [];
  const results = [];
  let i = 0;
  const taskFinally = ({value, callback}) => {
    callback(value)
    const len = results.push(value);
    if (len < fetchCount && i + 1 < fetchCount) {
      requestsQueue.shift();
      taskRequest(fetchList[++i])
    } else if (len === fetchCount) {
      'function' === typeof allCallback && allCallback(results)
    }
  }
  const taskRequest = (task) => {
    if (task) {
      const req = task.fetch.then((value) => {
        taskFinally({value, callback: task.callback})
      }).catch((reason) => {
        taskFinally({value: reason, callback: task.callback})
      })
      if (requestsQueue.push(req) < max) {
        taskRequest(fetchList[++i])
      }
    }
  };
  taskRequest(fetchList[i])
}


const urls = Array.from({length: 10}, (v, k) => k);
const fetch = function (idx) {
  return new Promise((resolve, reject) => {
    const timeout = parseInt(Math.random() * 1e4);
    setTimeout(() => {
      if (idx %2 === 0) {
        reject(idx)
      } else {
        resolve(idx)
      }
    }, timeout)
  })
};

const fetchList = urls.map(m => {
  return {
    fetch: fetch(m),
    callback: (value) => {
      console.log('callback', value);
    }
  }
})



export default () => taskQueue(fetchList, 6);

```
