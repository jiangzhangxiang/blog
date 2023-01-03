(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{424:function(s,a,e){"use strict";e.r(a);var t=e(23),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"mac配置ssh密钥登录linux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mac配置ssh密钥登录linux"}},[s._v("#")]),s._v(" Mac配置ssh密钥登录Linux")]),s._v(" "),e("h4",{attrs:{id:"ssh登录linux通常有两种方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ssh登录linux通常有两种方法"}},[s._v("#")]),s._v(" ssh登录Linux通常有两种方法：")]),s._v(" "),e("ol",[e("li",[s._v("用户名、密码 登录（使用用户名密码登录每次都要输入密码，相当麻烦）")]),s._v(" "),e("li",[s._v("用户名、密钥 登录（不需要输入秘密）")])]),s._v(" "),e("h2",{attrs:{id:"创建密钥对文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建密钥对文件"}},[s._v("#")]),s._v(" 创建密钥对文件")]),s._v(" "),e("p",[s._v("打开本地终端，执行 "),e("code",[s._v("ssh-keygen")]),s._v(" 命令创建密钥对：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("ssh-keygen -t rsa -C  'your email@domain.com'\n\n-t 指定密钥类型，默认即 rsa ，可以省略\n-C 设置注释文字，比如你的邮箱，可以省略\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("生成过程中会提示输入密码两次，如果不想在使用公钥的时候输入密码，可以回车跳过；\n密钥默认保存位置在 "),e("code",[s._v("~/.ssh")]),s._v(" 目录下，打开后会看到私钥文件 "),e("code",[s._v("id_rsa")]),s._v(" 和公钥文件 "),e("code",[s._v("id_rsa.pub")])]),s._v(" "),e("h2",{attrs:{id:"复制公钥至服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#复制公钥至服务器"}},[s._v("#")]),s._v(" 复制公钥至服务器")]),s._v(" "),e("p",[s._v("使用 scp 命令将本地的公钥文件 "),e("code",[s._v("id_rsa.pub")]),s._v(" 复制到需要连接的Linux服务器：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("scp ~/.ssh/id_rsa.pub <用户名>@<ip地址>:/home/id_rsa.pub\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("如果修改了ssh默认连接端口的话，需要加上端口信息：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("scp -P <端口号> ~/.ssh/id_rsa.pub <用户名>@<ip地址>:/home/id_rsa.pub\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("把公钥追加到服务器ssh认证文件中：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cat /home/id_rsa.pub >> ~/.ssh/authorized_keys\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("blockquote",[e("p",[s._v("做以上步骤 就是为了将本地的 ~/.ssh/id_rsa.pub 内容 追加到 远程服务器 的 ~/.ssh/authorized_keys 中")])]),s._v(" "),e("p",[s._v("这时候在本地终端中使用用户名和ip登录就不需要密码了：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("ssh <用户名>@<ip>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("如果修改了ssh默认连接端口的话，需要加上端口信息：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("ssh -p <端口号> <用户名>@<ip地址>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"配置快捷登录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置快捷登录"}},[s._v("#")]),s._v(" 配置快捷登录")]),s._v(" "),e("p",[s._v("即使不用输入密码，这样每次登录还要输入用户名ip端口信息还是有点麻烦，我们可以配置ssh快捷登录更方便的登录Linux；\n在本地 "),e("code",[s._v("~/.ssh/config")]),s._v(" 配置文件中添加ssh服务器信息，格式：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Host            alias            #自定义别名\nHostName        hostname         #替换为你的ssh服务器ip或domain\nPort            port             #ssh服务器端口，默认为22\nUser            user             #ssh服务器用户名\nIdentityFile    ~/.ssh/id_rsa    #第一个步骤生成的公钥文件对应的私钥文件\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("这时候就可以使用配置文件中自定义的别名来登录了")])])}),[],!1,null,null,null);a.default=n.exports}}]);