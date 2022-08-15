// const { title } = require("../.vuepress/config");

module.exports = [
  {
    title: "前端综合",
    children: [
      { title: "路由模式", path: "/frontend/notes/comprehensive/router.md" },
      { title: "大文件上传", path: "/frontend/notes/comprehensive/bigFile.md" },
    ],
  },
  {
    title: "HTML5",
    children: [
      { title: "语义化", path: "/frontend/notes/html/semantic" }
    ],
  },
  {
    title: "CSS",
    children: [
      { title: "BFC", path: "/frontend/notes/css/BFC" },
      { title: "盒子模型", path: "/frontend/notes/css/boxSizing" },
      { title: "居中", path: "/frontend/notes/css/center" },
      { title: "Flex布局", path: "/frontend/notes/css/flex" }
    ],
  },
  {
    title: "JavaScript",
    
    children: [
      { title: "数据类型", path: "/frontend/notes/js/dataType" },
      { title: "Map和Set", path: "/frontend/notes/js/mapset" },
      { title: "深拷贝和浅拷贝", path: "/frontend/notes/js/deepCopyShallowCopy" },
      { title: "原型和原型链", path: "/frontend/notes/js/prototype" },
      { title: "this的理解", path: "/frontend/notes/js/this" },
      { title: "call apply bind", path: "/frontend/notes/js/call_apply_bind" },
      { title: "闭包的理解", path: "/frontend/notes/js/closure" },
      { title: "js中的new做了什么", path: "/frontend/notes/js/new" },
      { title: "es6", path: "/frontend/notes/js/Es6.md" },
      { title: "数组迭代", path: "/frontend/notes/js/Iterator.md" },
      { title: "数组、字符串的截取", path: "/frontend/notes/js/array.md" },
      { title: "commonJS和ES6模块化的区别", path: "/frontend/notes/js/modul.md" },
    ],
  },
  {
    title: "浏览器",
    children: [
      { title: "从输入URL到页面呈现发生了什么", path: "/frontend/notes/browser/render01" },
      { title: "浏览器缓存", path: "/frontend/notes/browser/render02" },
      { title: "Http和Https区别", path: "/frontend/notes/browser/render03" },
      { title: "GET和POST区别", path: "/frontend/notes/browser/render04" }
    ],
  },
  {
    title: "Linux",
    
    children: [
      { title: "环境配置", path: "/frontend/notes/linux/ssh" }
    ],
  },
  {
    title: "Vue3",
    children: [
      { title: "学习笔记", path: "/frontend/notes/vue3/01" }
    ],
  },
  {
    title: "工程化",
    children: [
      { title: "Git账号设置", path: "/frontend/notes/Engineering/git" },
      { title: "CICD", path: "/frontend/notes/Engineering/CICD" },
      { title: "webpack", path: "/frontend/notes/Engineering/webpack" }
    ],
  },
];

