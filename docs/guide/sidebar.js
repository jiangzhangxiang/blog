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
  }
];
