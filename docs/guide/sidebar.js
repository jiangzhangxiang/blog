// const { title } = require("../.vuepress/config");

module.exports = [
  {
    title: "介绍",
    children: [
      { title: "介绍", path: "/guide/" }
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
      { title: "闭包的理解", path: "/guide/notes/js/closure" },
      { title: "js中的new做了什么", path: "/guide/notes/js/new" },
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
];

