(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{419:function(t,e,r){"use strict";r.r(e);var s=r(23),v=Object(s.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h3",{attrs:{id:"宏任务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#宏任务"}},[t._v("#")]),t._v(" 宏任务")]),t._v(" "),r("blockquote",[r("p",[t._v("由宿主发起的")])]),t._v(" "),r("p",[t._v("可以理解是每次执行栈执行的代码就是一个宏任务（包括每次从事件队列中获取一个事件回调并放到执行栈中执行）。\n浏览器为了能够使得JS内部宏任务与DOM任务能够有序的执行，会在一个宏任务执行结束后，在下一个宏任务 执行开始前，对页面进行重新渲染。")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("宏任务")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("js脚本执行(可以理解为外层同步代码)")])]),t._v(" "),r("tr",[r("td",[t._v("UI rendering/ UI事件")])]),t._v(" "),r("tr",[r("td",[t._v("postMessage，MessageChannel")])]),t._v(" "),r("tr",[r("td",[t._v("I/O")])]),t._v(" "),r("tr",[r("td",[t._v("setTimeout/ setInterval")])]),t._v(" "),r("tr",[r("td",[t._v("setImmediate（浏览器暂时不支持，只有IE10支持，具体可见MDN）")])])])]),t._v(" "),r("h3",{attrs:{id:"微任务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#微任务"}},[t._v("#")]),t._v(" 微任务")]),t._v(" "),r("blockquote",[r("p",[t._v("由JavaScript自身发起")])]),t._v(" "),r("p",[t._v("微任务,可以理解是在当前 task 执行结束后立即执行的任务。\n也就是说，在当前task任务后，下一个task之前，在渲染之前。\n所以它的响应速度相比setTimeout（setTimeout是task）会更快，因为无需等渲染。\n也就是说，在某一个宏任务执行完后，就会将在它执行期间产生的所有微任务都执行完毕（在渲染前）。")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("微任务")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("MutationObserver")])]),t._v(" "),r("tr",[r("td",[t._v("Promise.then(或.reject)")])]),t._v(" "),r("tr",[r("td",[t._v("Object.observe（已废弃；Proxy 对象替代)")])]),t._v(" "),r("tr",[r("td",[t._v("Process.nextTick（Node独有）")])])])])])}),[],!1,null,null,null);e.default=v.exports}}]);