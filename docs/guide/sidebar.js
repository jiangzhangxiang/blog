// const { title } = require("../.vuepress/config");

module.exports = [
  {
    title: "前端概念",
    collapsable: true,
    children: [
      { title: "路由模式", path: "/guide/notes/web/router.md" },
    ],
  },
  {
    title: "HTML5",
    collapsable: true,
    children: [
      { title: "语义化", path: "/guide/notes/html/semantic" }
    ],
  },
  {
    title: "CSS",
    collapsable: true,
    children: [
      { title: "BFC", path: "/guide/notes/css/BFC" },
      { title: "盒子模型", path: "/guide/notes/css/boxSizing" },
      { title: "居中", path: "/guide/notes/css/center" },
      { title: "Flex布局", path: "/guide/notes/css/flex" }
    ],
  },
  {
    title: "JavaScript",
    collapsable: true,
    children: [
      { title: "数据类型", path: "/guide/notes/js/dataType" },
      { title: "Map和Set", path: "/guide/notes/js/mapset" },
      { title: "深拷贝和浅拷贝", path: "/guide/notes/js/deepCopyShallowCopy" },
      { title: "原型和原型链", path: "/guide/notes/js/prototype" },
      { title: "this的理解", path: "/guide/notes/js/this" },
      { title: "call apply bind", path: "/guide/notes/js/call_apply_bind" },
      { title: "闭包的理解", path: "/guide/notes/js/closure" },
      { title: "js中的new做了什么", path: "/guide/notes/js/new" },
      { title: "es6", path: "/guide/notes/js/Es6.md" },
      { title: "数组迭代", path: "/guide/notes/js/Iterator.md" },
      { title: "数组、字符串的截取", path: "/guide/notes/js/array.md" },
    ],
  },
  {
    title: "浏览器",
    collapsable: true,
    children: [
      { title: "从输入URL到页面呈现发生了什么", path: "/guide/notes/browser/render01" },
      { title: "浏览器缓存", path: "/guide/notes/browser/render02" },
      { title: "Http和Https区别", path: "/guide/notes/browser/render03" },
      { title: "GET和POST区别", path: "/guide/notes/browser/render04" }
    ],
  },
  {
    title: "Linux",
    collapsable: true,
    children: [
      { title: "环境配置", path: "/guide/notes/linux/ssh" }
    ],
  },
  {
    title: "Vue3",
    collapsable: true,
    children: [
      { title: "学习笔记", path: "/guide/notes/vue3/01" }
    ],
  },
  {
    title: "工程化",
    collapsable: true,
    children: [
      { title: "Git账号设置", path: "/guide/notes/Engineering/git" },
      { title: "CICD", path: "/guide/notes/Engineering/CICD" },
      { title: "webpack", path: "/guide/notes/Engineering/webpack" }
    ],
  },
];

