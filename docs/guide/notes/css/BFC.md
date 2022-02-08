###  BFC是什么

是什么：[块级格式化上下文]

怎么做：

- 浮动元素（元素的float不是none）
- 绝对定位元素（元素的position 为 absolute 或 fixed）
- 行内块元素 inline-block
- overflow 值不为 visible 的快元素
- 弹性元素（display 为 flex 或 inline-flex 的直接子元素）

解决了什么问题：

- 清楚浮动
- 防止垂直方向的margin 合并
- 某些古老的布局中方式会使用到