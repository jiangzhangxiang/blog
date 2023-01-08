(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{390:function(v,_,a){"use strict";a.r(_);var e=a(23),t=Object(e.a)({},(function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h2",{attrs:{id:"缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存"}},[v._v("#")]),v._v(" 缓存")]),v._v(" "),a("p",[v._v("缓存是性能优化中非常重要的一环，浏览器的缓存机制对开发也是非常重要的知识点。接下来以三个部分来把浏览器的缓存机制说清楚：")]),v._v(" "),a("ul",[a("li",[v._v("强缓存")]),v._v(" "),a("li",[v._v("协商缓存")]),v._v(" "),a("li",[v._v("缓存位置")])]),v._v(" "),a("h2",{attrs:{id:"强缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#强缓存"}},[v._v("#")]),v._v(" 强缓存")]),v._v(" "),a("p",[v._v("浏览器中的缓存作用分为两种情况，一种是需要发送"),a("code",[v._v("HTTP")]),v._v("请求，一种是不需要发送。")]),v._v(" "),a("p",[v._v("首先是检查强缓存，这个阶段"),a("code",[v._v("不需要")]),v._v("发送HTTP请求。")]),v._v(" "),a("p",[v._v("如何来检查呢？通过相应的字段来进行，但是说起这个字段就有点门道了。")]),v._v(" "),a("p",[v._v("在"),a("code",[v._v("HTTP/1.0")]),v._v("和"),a("code",[v._v("HTTP/1.1")]),v._v("当中，这个字段是不一样的。在早期，也就是"),a("code",[v._v("HTTP/1.0")]),v._v("时期，使用的是"),a("strong",[v._v("Expires")]),v._v("，而"),a("code",[v._v("HTTP/1.1")]),v._v("使用的是"),a("strong",[v._v("Cache-Control")]),v._v("。让我们首先来看看Expires。")]),v._v(" "),a("h4",{attrs:{id:"expires"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#expires"}},[v._v("#")]),v._v(" Expires")]),v._v(" "),a("p",[v._v("Expires即过期时间，存在于服务端返回的响应头中，告诉浏览器在这个过期时间之前可以直接从缓存里面获取数据，无需再次请求。比如下面这样:")]),v._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[v._v(" Expires"),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v(":")]),v._v(" Wed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(",")]),v._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[v._v("22")]),v._v(" Nov "),a("span",{pre:!0,attrs:{class:"token number"}},[v._v("2019")]),v._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[v._v("08")]),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[v._v("41")]),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[v._v("00")]),v._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[v._v("GMT")]),v._v("\n")])]),v._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[v._v("1")]),a("br")])]),a("p",[v._v("表示资源在"),a("code",[v._v("2019年11月22号8点41")]),v._v("分过期，过期了就得向服务端发请求。")]),v._v(" "),a("p",[v._v("这个方式看上去没什么问题，合情合理，但其实潜藏了一个坑，"),a("strong",[v._v("那就是服务器的时间和浏览器的时间可能并不一致")]),v._v("，那服务器返回的这个过期时间可能就是不准确的。因此这种方式很快在后来的HTTP1.1版本中被抛弃了。")]),v._v(" "),a("h4",{attrs:{id:"cache-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cache-control"}},[v._v("#")]),v._v(" Cache-Control")]),v._v(" "),a("p",[v._v("在HTTP1.1中，采用了一个非常关键的字段："),a("code",[v._v("Cache-Control")]),v._v("。这个字段也是存在于")]),v._v(" "),a("p",[v._v("它和"),a("code",[v._v("Expires")]),v._v("本质的不同在于它并没有采用"),a("code",[v._v("具体的过期时间点")]),v._v("这个方式，而是采用过期时长来控制缓存，对应的字段是"),a("strong",[v._v("max-age")]),v._v("。比如这个例子:")]),v._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[v._v(" Cache"),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v("-")]),v._v("Control"),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v(":")]),v._v("max"),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v("-")]),v._v("age"),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[v._v("3600")]),v._v("\n")])]),v._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[v._v("1")]),a("br")])]),a("p",[v._v("代表这个响应返回后在 3600 秒，也就是一个小时之内可以直接使用缓存。")]),v._v(" "),a("p",[v._v("如果你觉得它只有"),a("code",[v._v("max-age")]),v._v("一个属性的话，那就大错特错了。")]),v._v(" "),a("p",[v._v("它其实可以组合非常多的指令，完成更多场景的缓存判断, 将一些关键的属性列举如下: "),a("strong",[v._v("public")]),v._v(": 客户端和代理服务器都可以缓存。因为一个请求可能要经过不同的"),a("code",[v._v("代理服务器")]),v._v("最后才到达目标服务器，那么结果就是不仅仅浏览器可以缓存数据，中间的任何代理节点都可以进行缓存。")]),v._v(" "),a("p",[v._v("private： 这种情况就是只有浏览器能缓存了，中间的代理服务器不能缓存。")]),v._v(" "),a("p",[v._v("no-cache: 跳过当前的强缓存，发送HTTP请求，即直接进入"),a("code",[v._v("协商缓存阶段")]),v._v("。")]),v._v(" "),a("p",[v._v("no-store：非常粗暴，不进行任何形式的缓存。")]),v._v(" "),a("p",[v._v("s-maxage：这和"),a("code",[v._v("max-age")]),v._v("长得比较像，但是区别在于s-maxage是针对代理服务器的缓存时间。")]),v._v(" "),a("p",[v._v("must-revalidate: 是缓存就会有过期的时候，加上这个字段一旦缓存过期，就必须回到源服务器验证。")]),v._v(" "),a("p",[v._v("值得注意的是，当"),a("strong",[v._v("Expires")]),v._v("和"),a("strong",[v._v("Cache-Control")]),v._v("同时存在的时候，"),a("strong",[v._v("Cache-Control")]),v._v("会优先考虑。")]),v._v(" "),a("p",[v._v("当然，还存在一种情况，当资源缓存时间超时了，也就是强缓存失效了，接下来怎么办？没错，这样就进入到第二级屏障——"),a("strong",[v._v("协商缓存")]),v._v("了。")]),v._v(" "),a("h2",{attrs:{id:"协商缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[v._v("#")]),v._v(" 协商缓存")]),v._v(" "),a("p",[v._v("强缓存失效之后，浏览器在请求头中携带相应的缓存tag来向服务器发请求，由服务器根据这个tag，来决定是否使用缓存，这就是"),a("strong",[v._v("协商缓存")]),v._v("。")]),v._v(" "),a("p",[v._v("具体来说，这样的缓存tag分为两种: "),a("strong",[v._v("Last-Modified")]),v._v(" 和 "),a("strong",[v._v("ETag")]),v._v("。这两者各有优劣，并不存在谁对谁有"),a("code",[v._v("绝对的优势")]),v._v("，跟上面强缓存的两个 tag 不一样。")]),v._v(" "),a("h4",{attrs:{id:"last-modified"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#last-modified"}},[v._v("#")]),v._v(" Last-Modified")]),v._v(" "),a("p",[v._v("即最后修改时间。在浏览器第一次给服务器发送请求后，服务器会在响应头中加上这个字段。")]),v._v(" "),a("p",[v._v("浏览器接收到后，如果再次请求，会在请求头中携带"),a("code",[v._v("If-Modified-Since")]),v._v("字段，这个字段的值也就是服务器传来的最后修改时间。")]),v._v(" "),a("p",[v._v("服务器拿到请求头中的"),a("code",[v._v("If-Modified-Since")]),v._v("的字段后，其实会和这个服务器中"),a("code",[v._v("该资源的最后修改时间")]),v._v("对比:")]),v._v(" "),a("ul",[a("li",[v._v("如果请求头中的这个值小于最后修改时间，说明是时候更新了。返回新的资源，跟常规的HTTP请求响应的流程一样。")]),v._v(" "),a("li",[v._v("否则返回304，告诉浏览器直接用缓存。")])]),v._v(" "),a("h4",{attrs:{id:"etag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#etag"}},[v._v("#")]),v._v(" ETag")]),v._v(" "),a("p",[a("code",[v._v("ETag")]),v._v(" 是服务器根据当前文件的内容，给文件生成的唯一标识，只要里面的内容有改动，这个值就会变。服务器通过响应头把这个值给浏览器。")]),v._v(" "),a("p",[v._v("浏览器接收到"),a("code",[v._v("ETag")]),v._v("的值，会在下次请求时，将这个值作为"),a("strong",[v._v("If-None-Match")]),v._v("这个字段的内容，并放到请求头中，然后发给服务器。")]),v._v(" "),a("p",[v._v("服务器接收到"),a("strong",[v._v("If-None-Match")]),v._v("后，会跟服务器上该资源的"),a("strong",[v._v("ETag")]),v._v("进行比对:")]),v._v(" "),a("ul",[a("li",[v._v("如果两者不一样，说明要更新了。返回新的资源，跟常规的HTTP请求响应的流程一样。")]),v._v(" "),a("li",[v._v("否则返回304，告诉浏览器直接用缓存。")])]),v._v(" "),a("h4",{attrs:{id:"两者对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#两者对比"}},[v._v("#")]),v._v(" 两者对比")]),v._v(" "),a("ol",[a("li",[v._v("在"),a("code",[v._v("精准度上")]),v._v("，"),a("code",[v._v("ETag")]),v._v("优于"),a("code",[v._v("Last-Modified")]),v._v("。由于 ETag 是按照内容给资源上标识，因此能准确感知资源的变化。而 Last-Modified 就不一样了，它在一些特殊的情况并不能准确感知资源变化，主要有两种情况:")])]),v._v(" "),a("ul",[a("li",[a("p",[v._v("编辑了资源文件，但是文件内容并没有更改，这样也会造成缓存失效。")])]),v._v(" "),a("li",[a("p",[v._v("Last-Modified 能够感知的单位时间是秒，如果文件在 1 秒内改变了多次，那么这时候的 Last-Modified 并没有体现出修改了。")])])]),v._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[v._v("在性能上，"),a("code",[v._v("Last-Modified")]),v._v("优于"),a("code",[v._v("ETag")]),v._v("，也很简单理解，"),a("code",[v._v("Last-Modified")]),v._v("仅仅只是记录一个时间点，而 "),a("code",[v._v("Etag")]),v._v("需要根据文件的具体内容生成哈希值。")])]),v._v(" "),a("p",[v._v("另外，如果两种方式都支持的话，服务器会优先考虑"),a("code",[v._v("ETag")]),v._v("。")]),v._v(" "),a("h2",{attrs:{id:"缓存位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存位置"}},[v._v("#")]),v._v(" 缓存位置")]),v._v(" "),a("p",[v._v("前面我们已经提到，当"),a("code",[v._v("强缓存")]),v._v("命中或者协商缓存中服务器返回304的时候，我们直接从缓存中获取资源。那这些资源究竟缓存在什么位置呢？")]),v._v(" "),a("p",[v._v("浏览器中的缓存位置一共有四种，按优先级从高到低排列分别是：")]),v._v(" "),a("ul",[a("li",[v._v("Service Worker")]),v._v(" "),a("li",[v._v("Memory Cache")]),v._v(" "),a("li",[v._v("Disk Cache")]),v._v(" "),a("li",[v._v("Push Cache")])]),v._v(" "),a("h4",{attrs:{id:"service-worker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service-worker"}},[v._v("#")]),v._v(" Service Worker")]),v._v(" "),a("p",[v._v("Service Worker 借鉴了 Web Worker的 思路，即让 JS 运行在主线程之外，由于它脱离了浏览器的窗体，因此无法直接访问"),a("code",[v._v("DOM")]),v._v("。虽然如此，但它仍然能帮助我们完成很多有用的功能，比如"),a("code",[v._v("离线缓存")]),v._v("、"),a("code",[v._v("消息推送")]),v._v("和"),a("code",[v._v("网络代理")]),v._v("等功能。其中的"),a("code",[v._v("离线缓存")]),v._v("就是 "),a("strong",[v._v("Service Worker Cache")]),v._v("。")]),v._v(" "),a("p",[v._v("Service Worker 同时也是 PWA 的重要实现机制，关于它的细节和特性，我们将会在后面的 PWA 的分享中详细介绍。")]),v._v(" "),a("h4",{attrs:{id:"memory-cache-和-disk-cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#memory-cache-和-disk-cache"}},[v._v("#")]),v._v(" Memory Cache 和 Disk Cache")]),v._v(" "),a("p",[a("strong",[v._v("Memory Cache")]),v._v("指的是内存缓存，从效率上讲它是最快的。但是从存活时间来讲又是最短的，当渲染进程结束后，内存缓存也就不存在了。")]),v._v(" "),a("p",[v._v("Disk Cache就是存储在磁盘中的缓存，从存取效率上讲是比内存缓存慢的，但是他的优势在于存储容量和存储时长。稍微有些计算机基础的应该很好理解，就不展开了。")]),v._v(" "),a("p",[v._v("好，现在问题来了，既然两者各有优劣，那浏览器如何决定将资源放进内存还是硬盘呢？主要策略如下：")]),v._v(" "),a("p",[v._v("比较大的JS、CSS文件会直接被丢进磁盘，反之丢进内存\n内存使用率比较高的时候，文件优先进入磁盘")]),v._v(" "),a("h4",{attrs:{id:"push-cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#push-cache"}},[v._v("#")]),v._v(" Push Cache")]),v._v(" "),a("p",[v._v("即推送缓存，这是浏览器缓存的最后一道防线。它是 HTTP/2 中的内容，虽然现在应用的并不广泛，但随着 HTTP/2 的推广，它的应用越来越广泛。关于 Push Cache，有非常多的内容可以挖掘。")]),v._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),a("p",[v._v("对浏览器的缓存机制来做个简要的总结:")]),v._v(" "),a("p",[v._v("首先通过 Cache-Control 验证强缓存是否可用")]),v._v(" "),a("ol",[a("li",[v._v("如果强缓存可用，直接使用")]),v._v(" "),a("li",[v._v("否则进入协商缓存，即发送 HTTP 请求，服务器通过请求头中的If-Modified-Since或者If-None-Match这些条件请求字段检查资源是否更新")])]),v._v(" "),a("ul",[a("li",[v._v("若资源更新，返回资源和200状态码")]),v._v(" "),a("li",[v._v("否则，返回304，告诉浏览器直接从缓存获取资源")])])])}),[],!1,null,null,null);_.default=t.exports}}]);