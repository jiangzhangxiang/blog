### 一、简述区别
在 ES6 之前，社区制定了一些模块加载方案，最主要的有 CommonJS 和 AMD 两种。前者用于服务器，后者用于浏览器。ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单，完全可以取代 CommonJS 和 AMD 规范，成为浏览器和服务器通用的模块解决方案。
ES6 模块的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。CommonJS 和 AMD 模块，都只能在运行时确定这些东西。

#### 1.语法差异
CommonJS 模块是 Node.js 专用的，与 ES6 模块不兼容。而ES6模块化在浏览器和node.js中都可以用。
语法上面，两者最明显的差异是，CommonJS 模块使用require()和module.exports，ES6 模块使用import和export。
在node.js使用模块化，需要将 CommonJS 脚本的后缀名都改成.cjs，ES6 模块采用.mjs后缀文件名。或者修改package.son里面的文件，type字段为module或commonjs。

#### 2.什么是运行时加载呢？
```javascript
// CommonJS模块
let { stat, exists, readfile } = require('fs');

// 等同于
let _fs = require('fs');
let stat = _fs.stat;
let exists = _fs.exists;
let readfile = _fs.readfile;
```
