(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{416:function(t,a,e){"use strict";e.r(a);var r=e(23),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"迭代器是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#迭代器是什么"}},[t._v("#")]),t._v(" 迭代器是什么")]),t._v(" "),e("p",[e("code",[t._v("迭代：从一个数据集合中按照一定的顺序，不断地取数据的过程")])]),t._v(" "),e("p",[t._v("在 JavaScript 中，迭代器是一个对象，它定义一个序列，并在终止时可能返回一个返回值。更具体地说，迭代器是通过使用 next() 方法实现 迭代协议 的任何一个对象，该方法返回具有两个属性的对象： value，这是序列中的 next 值；和 done ，如果已经迭代到序列中的最后一个值，则它为 true 。如果 value 和 done 一起存在，则它是迭代器的返回值")]),t._v(" "),e("h2",{attrs:{id:"有哪些数据可以迭代"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#有哪些数据可以迭代"}},[t._v("#")]),t._v(" 有哪些数据可以迭代")]),t._v(" "),e("h3",{attrs:{id:"内置可迭代对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内置可迭代对象"}},[t._v("#")]),t._v(" 内置可迭代对象")]),t._v(" "),e("p",[t._v("String、Array、TypedArray、Map 和 Set 都是内置可迭代对象，因为它们的原型对象都拥有一个 [Symbol.iterator] 方法。")]),t._v(" "),e("h4",{attrs:{id:"用于可迭代对象的语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用于可迭代对象的语法"}},[t._v("#")]),t._v(" 用于可迭代对象的语法")]),t._v(" "),e("p",[t._v("一些语句和表达式专用于可迭代对象，例如 for-of 循环，展开语法，yield* 和 解构赋值。")]),t._v(" "),e("h2",{attrs:{id:"迭代协议"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#迭代协议"}},[t._v("#")]),t._v(" 迭代协议")]),t._v(" "),e("h3",{attrs:{id:"可迭代协议"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可迭代协议"}},[t._v("#")]),t._v(" 可迭代协议")]),t._v(" "),e("p",[t._v("可迭代协议允许 JavaScript 对象定义或定制它们的迭代行为，例如，在一个 for..of 结构中，哪些值可以被遍历到。一些内置类型同时是内置可迭代对象，并且有默认的迭代行为，比如 Array 或者 Map，而其他内置类型则不是（比如 Object）。")]),t._v(" "),e("p",[t._v("要成为可迭代对象，该对象必须实现 @@iterator 方法，这意味着对象（或者它原型链上的某个对象）必须有一个键为 @@iterator 的属性，可通过常量 Symbol.iterator 访问该属性：")]),t._v(" "),e("h3",{attrs:{id:"迭代器协议"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#迭代器协议"}},[t._v("#")]),t._v(" 迭代器协议")]),t._v(" "),e("p",[t._v("迭代器协议定义了产生一系列值（无论是有限个还是无限个）的标准方式，当值为有限个时，所有的值都被迭代完毕后，则会返回一个默认返回值。")]),t._v(" "),e("p",[t._v("只有实现了一个拥有以下语义（semantic）的 next() 方法，一个对象才能成为迭代器")]),t._v(" "),e("p",[e("code",[t._v("next()")])]),t._v(" "),e("p",[t._v('无参数或者接受一个参数的函数，并返回符合 IteratorResult 接口的对象（见下文）。如果在使用迭代器内置的语言特征（例如 for...of）时，得到一个非对象返回值（例如 false 或 undefined），将会抛出 TypeError（"iterator.next() returned a non-object value"）。\n所有迭代器协议的方法（next()、return() 和 throw()）都应返回实现 IteratorResult 接口的对象。它必须有以下属性：')]),t._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IteratorResult")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    value"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" any"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    done"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" boolean"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("p",[e("code",[t._v("done 可选")])]),t._v(" "),e("p",[t._v("如果迭代器能够生成序列中的下一个值，则返回 false 布尔值。（这等价于没有指定 done 这个属性。）\n如果迭代器已将序列迭代完毕，则为 true。这种情况下，value 是可选的，如果它依然存在，即为迭代结束之后的默认返回值。")]),t._v(" "),e("p",[e("code",[t._v("value 可选")])]),t._v(" "),e("p",[t._v("迭代器返回的任何 JavaScript 值。done 为 true 时可省略。")])])}),[],!1,null,null,null);a.default=s.exports}}]);