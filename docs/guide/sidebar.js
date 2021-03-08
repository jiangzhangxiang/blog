// const { title } = require("../.vuepress/config");

module.exports = [
  {
    title: "指南",
    children: [
      { title: "介绍", path: "/guide/" }
    ],
  },
  {
    title: "HTML5",
    collapsable: true,
    children: [
      { title: "语义化", path: "/guide/notes/html/语义化" }
    ],
  },
  {
    title: "CSS",
    collapsable: true,
    children: [
      { title: "Flex布局", path: "/guide/notes/css/Flex布局" }
    ],
  },
  {
    title: "JavaScript",
    collapsable: true,
    children: [
      { title: "JS-数据类型", path: "/guide/notes/js/数据类型" },
      { title: "JS-深拷贝和浅拷贝", path: "/guide/notes/js/深拷贝和浅拷贝" },
    ],
  }
];
