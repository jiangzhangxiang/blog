// const { title } = require("../.vuepress/config");

module.exports = [
  {
    title: "笔记",
    children: [
      { title: "浏览器", path: "/guide/" }
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
      { title: "JS-数据类型", path: "/guide/notes/js/dataType" },
      { title: "JS-深拷贝和浅拷贝", path: "/guide/notes/js/deepCopyShallowCopy" },
    ],
  }
];
