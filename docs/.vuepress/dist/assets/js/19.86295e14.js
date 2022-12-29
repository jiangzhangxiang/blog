(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{394:function(v,_,t){"use strict";t.r(_);var e=t(23),r=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"渲染过程篇"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#渲染过程篇"}},[v._v("#")]),v._v(" 渲染过程篇")]),v._v(" "),t("p",[v._v("上一节介绍了浏览器"),t("code",[v._v("解析")]),v._v("的过程,其中包含"),t("code",[v._v("构建DOM")]),v._v("、"),t("code",[v._v("样式计算")]),v._v("和"),t("code",[v._v("构建布局树")]),v._v("。")]),v._v(" "),t("p",[v._v("接下来就来拆解下一个过程——"),t("code",[v._v("渲染")]),v._v("。分为以下几个步骤:")]),v._v(" "),t("ul",[t("li",[v._v("建立"),t("code",[v._v("图层树")]),v._v("("),t("code",[v._v("Layer Tree")]),v._v(")")]),v._v(" "),t("li",[v._v("生成"),t("code",[v._v("绘制列表")])]),v._v(" "),t("li",[v._v("生成"),t("code",[v._v("图块")]),v._v("并"),t("code",[v._v("栅格化")])]),v._v(" "),t("li",[v._v("显示器显示内容")])]),v._v(" "),t("h2",{attrs:{id:"一、建图层树"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、建图层树"}},[v._v("#")]),v._v(" 一、建图层树")]),v._v(" "),t("p",[v._v("如果你觉得现在"),t("code",[v._v("DOM节点")]),v._v("也有了，样式和位置信息也都有了，可以开始绘制页面了，那你就错了。")]),v._v(" "),t("p",[v._v("因为你考虑掉了另外一些复杂的场景，比如3D动画如何呈现出变换效果，当元素含有层叠上下文时如何控制显示和隐藏等等。")]),v._v(" "),t("p",[v._v("为了解决如上所述的问题，浏览器在构建完"),t("code",[v._v("布局树")]),v._v("之后，还会对特定的节点进行分层，构建一棵"),t("code",[v._v("图层树")]),v._v("("),t("code",[v._v("Layer Tree")]),v._v(")。")]),v._v(" "),t("p",[v._v("那这棵图层树是根据什么来构建的呢？")]),v._v(" "),t("p",[v._v("一般情况下，节点的图层会默认属于父亲节点的图层(这些图层也称为"),t("strong",[v._v("合成层")]),v._v(")。那什么时候会提升为一个单独的合成层呢？")]),v._v(" "),t("p",[v._v("有两种情况需要分别讨论，一种是"),t("strong",[v._v("显式合成")]),v._v("，一种是"),t("strong",[v._v("隐式合成")]),v._v("。")]),v._v(" "),t("h3",{attrs:{id:"显式合成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#显式合成"}},[v._v("#")]),v._v(" 显式合成")]),v._v(" "),t("p",[v._v("下面是"),t("code",[v._v("显式合成")]),v._v("的情况:")]),v._v(" "),t("p",[v._v("一、 拥有"),t("strong",[v._v("层叠上下文")]),v._v("的节点。")]),v._v(" "),t("p",[v._v("层叠上下文也基本上是有一些特定的CSS属性创建的，一般有以下情况:")]),v._v(" "),t("ol",[t("li",[v._v("HTML根元素本身就具有层叠上下文。")]),v._v(" "),t("li",[v._v("普通元素设置"),t("strong",[v._v("position不为static")]),v._v("并且"),t("strong",[v._v("设置了z-index属性")]),v._v("，会产生层叠上下文。")]),v._v(" "),t("li",[v._v("元素的 "),t("strong",[v._v("opacity")]),v._v(" 值不是 1")]),v._v(" "),t("li",[v._v("元素的 "),t("strong",[v._v("transform")]),v._v(" 值不是 none")]),v._v(" "),t("li",[v._v("元素的 "),t("strong",[v._v("filter")]),v._v(" 值不是 none")]),v._v(" "),t("li",[v._v("元素的 "),t("strong",[v._v("isolation")]),v._v(" 值是isolate")]),v._v(" "),t("li",[t("strong",[v._v("will-change")]),v._v("指定的属性值为上面任意一个。(will-change的作用后面会详细介绍)")])]),v._v(" "),t("p",[v._v("二、需要"),t("strong",[v._v("剪裁")]),v._v("的地方。")]),v._v(" "),t("p",[v._v("比如一个div，你只给他设置 100 * 100 像素的大小，而你在里面放了非常多的文字，那么超出的文字部分就需要被剪裁。当然如果出现了滚动条，那么滚动条会被单独提升为一个图层。")]),v._v(" "),t("h3",{attrs:{id:"隐式合成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#隐式合成"}},[v._v("#")]),v._v(" 隐式合成")]),v._v(" "),t("p",[v._v("接下来是"),t("code",[v._v("隐式合成")]),v._v("，简单来说就是"),t("code",[v._v("层叠等级低")]),v._v("的节点被提升为单独的图层之后，那么"),t("code",[v._v("所有层叠等级比它高")]),v._v("的节点"),t("strong",[v._v("都会")]),v._v("成为一个单独的图层。")]),v._v(" "),t("p",[v._v("这个隐式合成其实隐藏着巨大的风险，如果在一个大型应用中，当一个"),t("code",[v._v("z-index")]),v._v("比较低的元素被提升为单独图层之后，层叠在它上面的的元素统统都会被提升为单独的图层，可能会增加上千个图层，大大增加内存的压力，甚至直接让页面崩溃。这就是"),t("strong",[v._v("层爆炸")]),v._v("的原理。这里有一个具体的例子，"),t("a",{attrs:{href:"https://segmentfault.com/a/1190000014520786",target:"_blank",rel:"noopener noreferrer"}},[v._v("点击打开"),t("OutboundLink")],1),v._v("。")]),v._v(" "),t("p",[v._v("值得注意的是，当需要"),t("code",[v._v("repaint")]),v._v("时，只需要"),t("code",[v._v("repaint")]),v._v("本身，而不会影响到其他的层。")]),v._v(" "),t("h2",{attrs:{id:"二、生成绘制列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、生成绘制列表"}},[v._v("#")]),v._v(" 二、生成绘制列表")]),v._v(" "),t("p",[v._v("接下来渲染引擎会将图层的绘制拆分成一个个绘制指令，比如先画背景、再描绘边框......然后将这些指令按顺序组合成一个待绘制列表，相当于给后面的绘制操作做了一波计划。")]),v._v(" "),t("p",[v._v("这里我以百度首页为例，大家可以在 Chrome 开发者工具中在设置栏中展开 "),t("code",[v._v("more tools")]),v._v(", 然后选择"),t("code",[v._v("Layers")]),v._v("面板，就能看到绘制列表")]),v._v(" "),t("h2",{attrs:{id:"三、生成图块和生成位图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、生成图块和生成位图"}},[v._v("#")]),v._v(" 三、生成图块和生成位图")]),v._v(" "),t("p",[v._v("现在开始绘制操作，实际上在渲染进程中绘制操作是由专门的线程来完成的，这个线程叫"),t("strong",[v._v("合成线程")]),v._v("。")]),v._v(" "),t("p",[v._v("绘制列表准备好了之后，渲染进程的主线程会给"),t("code",[v._v("合成线程")]),v._v("发送"),t("code",[v._v("commit")]),v._v("消息，把绘制列表提交给合成线程。接下来就是合成线程一展宏图的时候啦。")]),v._v(" "),t("p",[v._v("首先，考虑到视口就这么大，当页面非常大的时候，要滑很长时间才能滑到底，如果要一口气全部绘制出来是相当浪费性能的。因此，合成线程要做的第一件事情就是将图层"),t("strong",[v._v("分块")]),v._v("。这些块的大小一般不会特别大，通常是 256 * 256 或者 512 * 512 这个规格。这样可以大大加速页面的首屏展示。")]),v._v(" "),t("p",[v._v("因为后面图块数据要进入 GPU 内存，考虑到浏览器内存上传到 GPU 内存的操作比较慢，即使是绘制一部分图块，也可能会耗费大量时间。针对这个问题，Chrome 采用了一个策略: 在首次合成图块时只采用一个"),t("strong",[v._v("低分辨率")]),v._v("的图片，这样首屏展示的时候只是展示出低分辨率的图片，这个时候继续进行合成操作，当正常的图块内容绘制完毕后，会将当前低分辨率的图块内容替换。这也是 Chrome 底层优化首屏加载速度的一个手段。")]),v._v(" "),t("p",[v._v("顺便提醒一点，渲染进程中专门维护了一个"),t("strong",[v._v("栅格化线程池")]),v._v("，专门负责把"),t("strong",[v._v("图块")]),v._v("转换为"),t("strong",[v._v("位图数据")]),v._v("。")]),v._v(" "),t("p",[v._v("然后合成线程会选择视口附近的"),t("strong",[v._v("图块")]),v._v("，把它交给"),t("strong",[v._v("栅格化线程池")]),v._v("生成位图。")]),v._v(" "),t("p",[v._v("生成位图的过程实际上都会使用 GPU 进行加速，生成的位图最后发送给"),t("code",[v._v("合成线程")]),v._v("。")]),v._v(" "),t("h2",{attrs:{id:"四、显示器显示内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、显示器显示内容"}},[v._v("#")]),v._v(" 四、显示器显示内容")]),v._v(" "),t("p",[v._v("栅格化操作完成后，"),t("strong",[v._v("合成线程")]),v._v('会生成一个绘制命令，即"DrawQuad"，并发送给浏览器进程。')]),v._v(" "),t("p",[v._v("浏览器进程中的"),t("code",[v._v("viz组件")]),v._v("接收到这个命令，根据这个命令，把页面内容绘制到内存，也就是生成了页面，然后把这部分内存发送给显卡。为什么发给显卡呢？我想有必要先聊一聊显示器显示图像的原理。")]),v._v(" "),t("p",[v._v("无论是 PC 显示器还是手机屏幕，都有一个固定的刷新频率，一般是 60 HZ，即 60 帧，也就是一秒更新 60 张图片，一张图片停留的时间约为 16.7 ms。而每次更新的图片都来自显卡的"),t("strong",[v._v("前缓冲区")]),v._v("。而显卡接收到浏览器进程传来的页面后，会合成相应的图像，并将图像保存到"),t("strong",[v._v("后缓冲区")]),v._v("，然后系统自动将"),t("code",[v._v("前缓冲区")]),v._v("和"),t("code",[v._v("后缓冲区")]),v._v("对换位置，如此循环更新。")]),v._v(" "),t("p",[v._v("看到这里你也就是明白，当某个动画大量占用内存的时候，浏览器生成图像的时候会变慢，图像传送给显卡就会不及时，而显示器还是以不变的频率刷新，因此会出现卡顿，也就是明显的掉帧现象。")]),v._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),t("p",[v._v("到这里，我们算是把整个过程给走通了，现在重新来梳理一下页面渲染的流程。")]),v._v(" "),t("p",[t("img",{attrs:{src:v.$withBase("/week10/4.jpg"),alt:"project"}})])])}),[],!1,null,null,null);_.default=r.exports}}]);