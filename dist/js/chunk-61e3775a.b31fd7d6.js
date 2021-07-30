(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61e3775a"],{"5d44":function(d,t,a){},d1e2:function(d,t,a){"use strict";a("5d44")},f6a5:function(d,t,a){"use strict";a.r(t);var e=a("12d5"),o=Object(e["fb"])("data-v-05d9fd5e");Object(e["H"])("data-v-05d9fd5e");var r={class:"text-left page-ruls"},f=Object(e["l"])('<h1 class="mt-0" data-v-05d9fd5e>ga360埋点及部分规范</h1><section data-v-05d9fd5e><p data-v-05d9fd5e>一个规范的页面，包含且仅有：一个header标签，一个footer标签，一个body标签，一个main标签。</p><p data-v-05d9fd5e>一个header标签由若干个nav块组成，一个main标签由若干个section块组成</p></section><section data-v-05d9fd5e><ul data-v-05d9fd5e><li data-v-05d9fd5e><h2 data-v-05d9fd5e>header部分</h2><p class="pb-3" data-v-05d9fd5e>按照现有结构：整个导航放在header标签内部，ws主导航和子产品导航分别带固定类名</p><p class="pb-3" data-v-05d9fd5e>header导航部分分为两块，分别置于nav块内：<strong data-v-05d9fd5e>wondershare主导航</strong> 和 <strong data-v-05d9fd5e>子产品导航</strong></p><div class="pb-3 pl-3" data-v-05d9fd5e><p class="pb-1" data-v-05d9fd5e>1.wondershare主导航</p><p class="pl-3" data-v-05d9fd5e>固定两个类名：① wsc-header2020-navbar-master（主导航标记为master） ② wsc-header2020-navbar-wondershare （主导航产品标记为wondershare）</p></div><div class="pb-3 pl-3" data-v-05d9fd5e><p class="pb-1" data-v-05d9fd5e>2.子产品导航</p><p class="pl-3" data-v-05d9fd5e>固定两个类名：① wsc-header2020-navbar-main（子产品导航标记为main） ② wsc-header2020-navbar-** （子产品名称标记,例如：wsc-header2020-navbar-filmora，wsc-header2020-navbar-pdfelement）</p></div><img src="/images/pageRuls/header-1.png" alt="" data-v-05d9fd5e></li><li data-v-05d9fd5e><h2 data-v-05d9fd5e>body部分</h2><p class="pb-3" data-v-05d9fd5e>所有主体内容部分必须放在body标签内部，body内部的一级块分为 header块，footer块，main块</p><p class="pb-3" data-v-05d9fd5e>body标签需携带固定属性，具体如下表：</p><table data-v-05d9fd5e><thead data-v-05d9fd5e><tr data-v-05d9fd5e><td data-v-05d9fd5e>属性名</td><td data-v-05d9fd5e>属性值</td><td data-v-05d9fd5e>描述</td><td data-v-05d9fd5e>作用场景</td></tr></thead><tbody data-v-05d9fd5e><tr data-v-05d9fd5e><td data-v-05d9fd5e>* data-pro</td><td data-v-05d9fd5e>filmora，filmroa9，filmroapro，pdfelement，famisafe-so，recoverit</td><td data-v-05d9fd5e>产品名称</td><td data-v-05d9fd5e></td></tr><tr data-v-05d9fd5e><td data-v-05d9fd5e>* data-cat</td><td data-v-05d9fd5e><span style="color:red;" data-v-05d9fd5e>product（产品页）</span>，template，article，home（首页），<span style="color:red;" data-v-05d9fd5e>pay-success（支付页成功跳转页）</span>，<span style="color:red;" data-v-05d9fd5e>search-rusult（搜索结果页）</span></td><td data-v-05d9fd5e>页面类型</td><td style="color:red;" data-v-05d9fd5e>用于ga360参数传递</td></tr><tr data-v-05d9fd5e><td data-v-05d9fd5e>* data-dev</td><td data-v-05d9fd5e>desktop，mobile</td><td data-v-05d9fd5e>终端类型</td><td data-v-05d9fd5e>判断当前是桌面端或移动端</td></tr><tr data-v-05d9fd5e><td data-v-05d9fd5e>* data-sys</td><td data-v-05d9fd5e>win，mac，ios，android</td><td data-v-05d9fd5e>页面默认系统</td><td data-v-05d9fd5e></td></tr><tr data-v-05d9fd5e><td data-v-05d9fd5e>data-nav</td><td data-v-05d9fd5e>home，page</td><td data-v-05d9fd5e>页面导航类型</td><td data-v-05d9fd5e></td></tr><tr style="color:red;" data-v-05d9fd5e><td data-v-05d9fd5e>data-pro-id（产品页特有）</td><td data-v-05d9fd5e>4578，5564</td><td data-v-05d9fd5e>页面产品cbsid</td><td data-v-05d9fd5e>用于ga360参数传递</td></tr><tr style="color:red;" data-v-05d9fd5e><td data-v-05d9fd5e>data-pro-category（产品页特有）</td><td data-v-05d9fd5e>annual_plan，lifetime_plan，annual_bundle_plan</td><td data-v-05d9fd5e>产品期限类型</td><td data-v-05d9fd5e>用于ga360参数传递</td></tr><tr style="color:red;" data-v-05d9fd5e><td data-v-05d9fd5e>data-pro-variant（产品页特有）</td><td data-v-05d9fd5e>1 user，5 users</td><td data-v-05d9fd5e>产品用户类型</td><td data-v-05d9fd5e>用于ga360参数传递</td></tr><tr style="color:red;" data-v-05d9fd5e><td data-v-05d9fd5e>data-pro-price（产品页特有）</td><td data-v-05d9fd5e>45，90</td><td data-v-05d9fd5e>页面产品价格</td><td data-v-05d9fd5e>用于ga360参数传递</td></tr></tbody></table><p class="text-center pt-1" data-v-05d9fd5e>表（2-1-1）</p></li><li data-v-05d9fd5e><h2 data-v-05d9fd5e>main部分</h2><p class="pb-3" data-v-05d9fd5e>所有主体内容部分必须放在main标签内部，main标签需携带 必要类名 wsc-main</p><img src="/images/pageRuls/main-1.png" alt="" data-v-05d9fd5e><p class="pb-3 mt-4" data-v-05d9fd5e>main标签内部 由多个section标签组成</p><img src="/images/pageRuls/main-2.png" alt="" data-v-05d9fd5e></li><li data-v-05d9fd5e><h2 data-v-05d9fd5e>footer部分</h2><p class="pb-3" data-v-05d9fd5e>按照现有结构：整个导航放在footer标签内部</p><img src="/images/pageRuls/footer-1.png" alt="" data-v-05d9fd5e></li><li data-v-05d9fd5e><h2 data-v-05d9fd5e>页面初始化部分</h2><h3 data-v-05d9fd5e>页面加载完成就执行，主要包括：首页，产品页，</h3><ul data-v-05d9fd5e><li data-v-05d9fd5e><h4 data-v-05d9fd5e>参数说明</h4><table data-v-05d9fd5e><thead data-v-05d9fd5e><tr data-v-05d9fd5e><td data-v-05d9fd5e>页面</td><td data-v-05d9fd5e>参数说明</td><td data-v-05d9fd5e>示例</td></tr></thead><tbody data-v-05d9fd5e><tr data-v-05d9fd5e><td data-v-05d9fd5e>所有页面</td><td data-v-05d9fd5e><pre class="m-0" data-v-05d9fd5e><code data-v-05d9fd5e>\nwindow.dataLayer.push({\n        &quot;domain&quot;: &quot;$domain&quot;,//主域名\n        &quot;product&quot;: &quot;$productBrand&quot;,//产品线 body[data-pro]\n        &quot;hitTimeStamp&quot;: &quot;$hitTimeStamp&quot;,//时间戳\n        &quot;siteLanguange&quot;: &quot;$siteLanguange&quot;,//站点语言 html[lang]\n        &quot;userAgent&quot;: &quot;$userAgent&quot;,//用户代理\n        &quot;userId&quot;: &quot;$userId&quot;//用户id，未登录状态传空值\n})\n\n</code></pre></td><td class="text-center" data-v-05d9fd5e><img src="/images/pageRuls/exe-1.png" data-v-05d9fd5e></td></tr><tr data-v-05d9fd5e><td data-v-05d9fd5e>搜索结果页</td><td data-v-05d9fd5e><pre class="m-0" data-v-05d9fd5e><code data-v-05d9fd5e>\nwindow.dataLayer.push({\n\t&quot;cat55&quot;: &quot;$siteSearchCategory&quot;,\n\t&quot;hitTimeStamp&quot;: &quot;$hitTimeStamp&quot;,\n\t&quot;kw55&quot;: &quot;$siteSearchKeyword&quot;\n})\n\n</code></pre></td><td data-v-05d9fd5e></td></tr><tr data-v-05d9fd5e><td data-v-05d9fd5e>产品页面</td><td data-v-05d9fd5e><pre class="m-0" data-v-05d9fd5e><code data-v-05d9fd5e>\nwindow.dataLayer.push({\n        &quot;eeAction&quot;: &quot;eeProductDetail&quot;,\n        &quot;hitTimeStamp&quot;: &quot;$hitTimeStamp&quot;,\n        &quot;productIds&quot;：[&quot;$productIDs&quot;],\n        &quot;productNames&quot;:[&quot;$productNames&quot;],\n        &quot;productPrice&quot;:[&quot;$productPrice&quot;],\n        &quot;productOs&quot;:[&quot;$productOs&quot;],\n        &quot;proBrand&quot;:[&quot;$proBrand&quot;],\n        &quot;proQuantity&quot;:[&quot;$proQuantity&quot;],\n        &quot;productVariant&quot;:[&quot;$productVariant&quot;],\n        &quot;productCategory&quot;:[&quot;$productCategory&quot;],\n})\n\n</code></pre></td><td data-v-05d9fd5e></td></tr><tr data-v-05d9fd5e><td data-v-05d9fd5e>购买页面</td><td data-v-05d9fd5e><pre class="m-0" data-v-05d9fd5e><code data-v-05d9fd5e>\nwindow.dataLayer.push({\n      &quot;eeAction&quot;: &quot;eeCheckout&quot;,\n      &quot;checkoutStep&quot;: &quot;1&quot;,\n        &quot;productIds&quot;：[&quot;$productIDs&quot;],\n        &quot;productNames&quot;:[&quot;$productNames&quot;],\n        &quot;productPrice&quot;:[&quot;$productPrice&quot;],\n        &quot;productOs&quot;:[&quot;$productOs&quot;],\n        &quot;proBrand&quot;:[&quot;$proBrand&quot;],\n        &quot;proQuantity&quot;:[&quot;$proQuantity&quot;],\n        &quot;productVariant&quot;:[&quot;$productVariant&quot;],\n        &quot;productCategory&quot;:[&quot;$productCategory&quot;],\n       &quot;userType&quot;:[&quot;$userType&quot;],\n       &quot;licenseExpireDate&quot;:[&quot;$licenseExpireDate],\n})\n\n</code></pre></td><td data-v-05d9fd5e>/</td></tr><tr data-v-05d9fd5e><td data-v-05d9fd5e>支付成功(回调)</td><td data-v-05d9fd5e><pre class="m-0" data-v-05d9fd5e><code data-v-05d9fd5e>\nwindow.dataLayer.push({\n        &quot;currencyCode&quot;: &quot;$currencyCode&quot;,\n        &quot;hitTimeStamp&quot;: &quot;$hitTimeStamp&quot;,\n        &quot;transactionId&quot;: &quot;$transactionId&quot;,\n        &quot;transactionTotal&quot;: &quot;$transactionTotal&quot;,\n        &quot;transactionCoupon&quot;: &quot;$transactionCoupon&quot;,\n        &quot;paymentMethod&quot;: &quot;$paymentMethod&quot;,\n        &quot;productIds&quot;：[&quot;$productIDs&quot;],\n        &quot;productNames&quot;:[&quot;$productNames&quot;],\n        &quot;productPrice&quot;:[&quot;$productPrice&quot;],\n        &quot;productOs&quot;:[&quot;$productOs&quot;],\n        &quot;proBrand&quot;:[&quot;$proBrand&quot;],\n        &quot;proQuantity&quot;:[&quot;$proQuantity&quot;],\n        &quot;productVariant&quot;:[&quot;$productVariant&quot;],\n        &quot;productCategory&quot;:[&quot;$productCategory&quot;],\n       &quot;userType&quot;:[&quot;$userType&quot;],\n       &quot;licenseExpireDate&quot;:[&quot;$licenseExpireDate],\n})\n\n</code></pre></td><td data-v-05d9fd5e>/</td></tr></tbody></table></li></ul></li><li data-v-05d9fd5e><h2 data-v-05d9fd5e>其他重点部分</h2><h3 data-v-05d9fd5e>将其他 细节交互部分 按照埋点需求分为3大类: 纯跳转页面交互、触发事件交互、表单提交交互</h3><ul data-v-05d9fd5e><li data-v-05d9fd5e><h4 data-v-05d9fd5e>纯跳转页面交互，主要涉及：下载，购买，登录（点击跳转页面），注册（点击跳转页面），页面跳转链接，语言，社交账号，新闻列表等页面列表跳转）又有事件又跳转以跳转为准 此类包含所有带href跳转的a标签（不包含#或javascript：；等未跳转页面情况）。event：buttonLink。按照dom结构主要分成三类，如下表：</h4><table data-v-05d9fd5e><thead data-v-05d9fd5e><tr data-v-05d9fd5e><td data-v-05d9fd5e>类型</td><td data-v-05d9fd5e>代码示例</td><td data-v-05d9fd5e>展示</td><td data-v-05d9fd5e>说明</td></tr></thead><tbody data-v-05d9fd5e><tr data-v-05d9fd5e><td data-v-05d9fd5e>简单按钮</td><td data-v-05d9fd5e><pre class="m-0" data-v-05d9fd5e><code data-v-05d9fd5e>&lt;a href=&quot;&quot; class=&quot;btn btn-lg btn-primary&quot;&gt;\n  TRY IT FREE\n&lt;/a&gt;</code></pre></td><td class="text-center" data-v-05d9fd5e><img src="/images/pageRuls/btn-1.png" data-v-05d9fd5e></td><td rowspan="3" data-v-05d9fd5e><p data-v-05d9fd5e>1、后续按钮类型严格按照实例结构</p><p data-v-05d9fd5e>2、普通内部跳转 按钮不需要标记type，type默认为jump类型。有特殊含义(如注册、登录、购买等)跳转需要标记type，具体值参照表（5-1-2）</p><p data-v-05d9fd5e>3、列表结构需标记每个item名称</p></td></tr><tr data-v-05d9fd5e><td data-v-05d9fd5e>复杂按钮</td><td data-v-05d9fd5e><pre class="m-0" data-v-05d9fd5e><code data-v-05d9fd5e>&lt;a href=&quot;&quot; class=&quot;btn btn-lg btn-primary&quot; <span style="color:red;" data-v-05d9fd5e>ga360Type=&quot;download&quot;</span>&gt;\n  TRY IT FREE\n  &lt;i class=&quot;wsc-icon wsc-icon-font wsc-icon-thick&quot; data-icon=&quot;symbol-import&quot;&gt;&lt;/i&gt;\n&lt;/a&gt;</code></pre></td><td class="text-center" data-v-05d9fd5e><img src="/images/pageRuls/btn-2.png" data-v-05d9fd5e></td></tr><tr data-v-05d9fd5e><td data-v-05d9fd5e>复杂结构跳转（列表等）</td><td data-v-05d9fd5e><pre class="m-0" data-v-05d9fd5e><code data-v-05d9fd5e>&lt;div class=&quot;row pt-3&quot;<span style="color:red;" data-v-05d9fd5e> ga360ListName=&quot;newList&quot;</span>&gt;\n  &lt;div class=&quot;col-lg-4&quot;&gt;\n    &lt;a href=&quot;&quot; class=&quot;d-block&quot; <span style="color:red;" data-v-05d9fd5e> ga360Name=&quot;标题一&quot;</span>&gt;\n      &lt;img src=&quot;https://images.wondershare.com/filmora/images/user-story/index-get.png&quot; alt=&quot;&quot; class=&quot;w-100&quot;&gt;\n      &lt;p class=&quot;p-3 mb-0&quot;&gt;我是标题...&lt;/p&gt;\n    &lt;/a&gt;\n  &lt;/div&gt;\n  &lt;div class=&quot;col-lg-4&quot;&gt;\n    &lt;a href=&quot;&quot; class=&quot;d-block&quot; <span style="color:red;" data-v-05d9fd5e> ga360Name=&quot;标题二&quot;</span>&gt;\n      &lt;img src=&quot;https://images.wondershare.com/filmora/images/user-story/index-get.png&quot; alt=&quot;&quot; class=&quot;w-100&quot;&gt;\n      &lt;p class=&quot;p-3 mb-0&quot;&gt;我是标题...&lt;/p&gt;\n    &lt;/a&gt;\n  &lt;/div&gt;\n  &lt;div class=&quot;col-lg-4&quot;&gt;\n    &lt;a href=&quot;&quot; class=&quot;d-block&quot; <span style="color:red;" data-v-05d9fd5e> ga360Name=&quot;标题三&quot;</span>&gt;\n      &lt;img src=&quot;https://images.wondershare.com/filmora/images/user-story/index-get.png&quot; alt=&quot;&quot; class=&quot;w-100&quot;&gt;\n      &lt;p class=&quot;p-3 mb-0&quot;&gt;我是标题...&lt;/p&gt;\n    &lt;/a&gt;\n  &lt;/div&gt;\n&lt;/div&gt;</code></pre></td><td class="text-center" data-v-05d9fd5e><img src="/images/pageRuls/btn-3.png" data-v-05d9fd5e></td></tr></tbody></table><p class="text-center pt-1" data-v-05d9fd5e>表（5-1-1）</p><h4 data-v-05d9fd5e>参数说明：</h4><table data-v-05d9fd5e><thead data-v-05d9fd5e><tr data-v-05d9fd5e><td data-v-05d9fd5e>参数名</td><td data-v-05d9fd5e>参数值</td><td data-v-05d9fd5e>作用场景解释</td></tr></thead><tbody data-v-05d9fd5e><tr data-v-05d9fd5e><td data-v-05d9fd5e>ga360ListName</td><td data-v-05d9fd5e>Learn（子产品下拉导航，以此下拉导航父级按钮名称为准），newList（新闻列表），proList（产品列表），</td><td data-v-05d9fd5e>交互元素所在列表名称，作用于<strong data-v-05d9fd5e> 所有列表交互元素 。</strong>具体命名规则详见 <a href="" data-v-05d9fd5e>word 点击下载</a></td></tr><tr style="color:red;" data-v-05d9fd5e><td data-v-05d9fd5e>ga360Name</td><td data-v-05d9fd5e>自定义标题名称</td><td data-v-05d9fd5e>交互元素名称，作用于<strong data-v-05d9fd5e> 复杂列表 </strong></td></tr><tr data-v-05d9fd5e><td data-v-05d9fd5e>ga360Type</td><td data-v-05d9fd5e><span style="color:#00d800;" data-v-05d9fd5e>默认为jump</span>，purchase intention（点击购买按钮，进入account支付页面），buy now（点击购买按钮，进入购物车，购买意向），banner，review（更多评论），covid（主站顶部COVID红色条）， prd download（产品下载），doc download（文档下载），app download（app下载），share（分享），language（语言选择），social（社交账号），login-link（登录），register（注册），campaign click（点击促销广告），support（support页面） </td><td data-v-05d9fd5e>交互元素类型，作用于<strong data-v-05d9fd5e> 有特殊含义跳转元素 </strong></td></tr><tr data-v-05d9fd5e><td data-v-05d9fd5e>productIds</td><td data-v-05d9fd5e>[7632]，[4536，2354]</td><td data-v-05d9fd5e>产品id集合，数组，作用于<strong data-v-05d9fd5e> 购买（组合）类型按钮 </strong></td></tr><tr data-v-05d9fd5e><td data-v-05d9fd5e>productNames</td><td data-v-05d9fd5e>[filmroa]，[filmora,filmroa9]</td><td data-v-05d9fd5e>产品名称集合，数组，作用于<strong data-v-05d9fd5e> 购买（组合）类型按钮 </strong></td></tr><tr data-v-05d9fd5e><td data-v-05d9fd5e>productPrice</td><td data-v-05d9fd5e>[263]，[263，299]</td><td data-v-05d9fd5e>产品价格集合，数组，作用于<strong data-v-05d9fd5e> 购买（组合）类型按钮 </strong></td></tr><tr data-v-05d9fd5e><td data-v-05d9fd5e>proBrand</td><td data-v-05d9fd5e>[filmroa]，[filmroa,pdfelement]</td><td data-v-05d9fd5e>产品线名称集合，数组，作用于<strong data-v-05d9fd5e> 购买（组合）类型按钮 </strong></td></tr><tr data-v-05d9fd5e><td data-v-05d9fd5e>proQuantity</td><td data-v-05d9fd5e>[1]，[2,3]</td><td data-v-05d9fd5e>产品数量集合，数组，作用于<strong data-v-05d9fd5e> 购买（组合）类型按钮 </strong></td></tr><tr data-v-05d9fd5e><td data-v-05d9fd5e>productVariant</td><td data-v-05d9fd5e>[ 2users]，[1-3users,1user]</td><td data-v-05d9fd5e>购买产品适用用户类型集合，数组，作用于<strong data-v-05d9fd5e> 购买（组合）类型按钮 </strong></td></tr><tr data-v-05d9fd5e><td data-v-05d9fd5e>productCategory</td><td data-v-05d9fd5e>[ annual_plan]，[annual_plan,lifetime_plan]</td><td data-v-05d9fd5e>购买的产品类型集合，数组，作用于<strong data-v-05d9fd5e> 购买（组合）类型按钮 </strong></td></tr><tr data-v-05d9fd5e><td data-v-05d9fd5e>licenseExpireDate</td><td data-v-05d9fd5e>[447],[445,234]</td><td data-v-05d9fd5e>产品licenseid 集合，作用于<strong data-v-05d9fd5e> 购买（组合）类型按钮 </strong></td></tr><tr data-v-05d9fd5e><td data-v-05d9fd5e>productOs</td><td data-v-05d9fd5e>mac，win，ios，android</td><td data-v-05d9fd5e>产品价格集合，数组，作用于<strong data-v-05d9fd5e> 购买（组合）类型按钮 </strong></td></tr><tr data-v-05d9fd5e><td data-v-05d9fd5e>currentLanguage</td><td data-v-05d9fd5e>Portuguese，english</td><td data-v-05d9fd5e>产品当前语言，作用于<strong data-v-05d9fd5e> 购买（组合）类型按钮 </strong></td></tr><tr data-v-05d9fd5e><td data-v-05d9fd5e>docName</td><td data-v-05d9fd5e>filmora_full846.exe</td><td data-v-05d9fd5e>文件名称，作用于<strong data-v-05d9fd5e> 下载按钮 </strong></td></tr><tr data-v-05d9fd5e><td data-v-05d9fd5e>userType</td><td data-v-05d9fd5e>1，2</td><td data-v-05d9fd5e>用户类型，作用于<strong data-v-05d9fd5e> 登录回调 </strong></td></tr></tbody></table><p class="text-center pt-1" data-v-05d9fd5e>表（5-1-2）</p></li><li data-v-05d9fd5e><h4 data-v-05d9fd5e>触发事件交互，主要涉及：弹框，登录（点击弹框），注册（点击弹框），下拉选择，系统切换，tab切换，banner轮播）event：event_interaction。此类包含所有触发事件按钮（不包含表单内部事件及提交事件），具体实例说明如下表（5-2-1）：</h4><table class="w-100" data-v-05d9fd5e><thead data-v-05d9fd5e><tr data-v-05d9fd5e><td data-v-05d9fd5e>类型</td><td data-v-05d9fd5e>代码示例</td><td data-v-05d9fd5e>展示</td><td data-v-05d9fd5e>说明</td></tr></thead><tbody data-v-05d9fd5e></tbody></table><p class="text-center pt-1" data-v-05d9fd5e>表（5-2-1）</p><h4 data-v-05d9fd5e>参数说明如下表（5-2-2）：</h4><table data-v-05d9fd5e><thead data-v-05d9fd5e><tr data-v-05d9fd5e><td data-v-05d9fd5e>参数名</td><td data-v-05d9fd5e>参数值</td><td data-v-05d9fd5e>作用场景解释</td></tr></thead><tbody data-v-05d9fd5e><tr data-v-05d9fd5e><td data-v-05d9fd5e>ga360Location</td><td data-v-05d9fd5e>同上</td><td data-v-05d9fd5e>同上</td></tr><tr data-v-05d9fd5e><td data-v-05d9fd5e>ga360Name</td><td data-v-05d9fd5e>触发事件的按钮名称按钮（内容）名称</td><td data-v-05d9fd5e>交互元素名称，作用于<strong data-v-05d9fd5e> 所有事件按钮 </strong></td></tr><tr style="color:red;" data-v-05d9fd5e><td data-v-05d9fd5e>gaevent</td><td data-v-05d9fd5e>eventInt（普通点击事件）</td><td data-v-05d9fd5e>账户类型，作用于<strong data-v-05d9fd5e> 登录、注册回调 </strong></td></tr><tr data-v-05d9fd5e><td data-v-05d9fd5e>ga360Type</td><td data-v-05d9fd5e>languageChoose（语言选择），bottomPromotClose（关闭广告），proQuantityChoose（产品数量选择），sysChange（系统切换选择），showMoreNews（展示更多新闻），scroll（返回顶部 ），campaign view（底部广告初始化）<span style="color:red;" data-v-05d9fd5e>login（点击登录），account（account页面按钮）</span></td><td data-v-05d9fd5e>当前点击的按钮类型，作用于<strong data-v-05d9fd5e> 所有事件按钮 </strong></td></tr></tbody></table><p class="text-center pt-1" data-v-05d9fd5e>表（5-2-2）</p></li><li data-v-05d9fd5e><h4 data-v-05d9fd5e>表单提交,主要涉及 注册（提交表单注册），登录（提交表单登录），购买，信息收集）event：form_success。具体实例说明如下表（5-3-1）</h4><table class="w-100" data-v-05d9fd5e><thead data-v-05d9fd5e><tr data-v-05d9fd5e><td data-v-05d9fd5e>类型</td><td data-v-05d9fd5e>代码示例</td><td data-v-05d9fd5e>展示</td><td data-v-05d9fd5e>说明</td></tr></thead><tbody data-v-05d9fd5e></tbody></table><p class="text-center pt-1" data-v-05d9fd5e>表（5-3-1）</p><h4 data-v-05d9fd5e>参数说明如下表（5-2-2）：</h4><table data-v-05d9fd5e><thead data-v-05d9fd5e><tr data-v-05d9fd5e><td data-v-05d9fd5e>参数名</td><td data-v-05d9fd5e>参数值</td><td data-v-05d9fd5e>作用场景解释</td></tr></thead><tbody data-v-05d9fd5e><tr data-v-05d9fd5e><td data-v-05d9fd5e>ga360Location</td><td data-v-05d9fd5e>同上</td><td data-v-05d9fd5e>同上</td></tr><tr data-v-05d9fd5e><td data-v-05d9fd5e>事件名称</td><td data-v-05d9fd5e>formSubmit</td><td data-v-05d9fd5e>表单提交</td></tr><tr data-v-05d9fd5e><td data-v-05d9fd5e>ga360Name</td><td data-v-05d9fd5e>collectEmail，login</td><td data-v-05d9fd5e>表单名称，作用于<strong data-v-05d9fd5e> 所有表单 </strong></td></tr><tr data-v-05d9fd5e><td data-v-05d9fd5e>ga360Type</td><td data-v-05d9fd5e>redeem（兑换码提交回调）、contact sales（政企表单提交回调），support form（提交订单号或邮箱回调），email（提交邮箱回调），notification（网页通知点击）</td><td data-v-05d9fd5e>当前点击的按钮类型，作用于<strong data-v-05d9fd5e> 所有表单 </strong></td></tr></tbody></table><p class="text-center pt-1" data-v-05d9fd5e>表（5-3-2）</p></li></ul></li></ul></section>',3);Object(e["F"])();var u=o((function(d,t,a,o,u,v){return Object(e["E"])(),Object(e["i"])("div",r,[f])})),v={name:"pageRuls",props:{msg:String},created:function(){},methods:function(){}};a("d1e2");v.render=u,v.__scopeId="data-v-05d9fd5e";t["default"]=v}}]);
//# sourceMappingURL=chunk-61e3775a.b31fd7d6.js.map