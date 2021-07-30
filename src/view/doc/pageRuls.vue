<template>
  <div class="text-left page-ruls">
    <h1 class="mt-0">ga360埋点及部分规范</h1>
    <section>
      <p>一个规范的页面，包含且仅有：一个header标签，一个footer标签，一个body标签，一个main标签。</p>
      <p>一个header标签由若干个nav块组成，一个main标签由若干个section块组成</p>
    </section>
    <section>
      <ul>
        <li>
          <h2>header部分</h2>
          <p class="pb-3">按照现有结构：整个导航放在header标签内部，ws主导航和子产品导航分别带固定类名</p>
          <p class="pb-3">header导航部分分为两块，分别置于nav块内：<strong>wondershare主导航</strong> 和 <strong>子产品导航</strong></p>
          <div class="pb-3 pl-3">
            <p class="pb-1">1.wondershare主导航</p>
            <p class="pl-3">固定两个类名：① wsc-header2020-navbar-master（主导航标记为master） ② wsc-header2020-navbar-wondershare （主导航产品标记为wondershare）</p>
          </div>
          <div class="pb-3 pl-3">
            <p class="pb-1">2.子产品导航</p>
            <p class="pl-3">固定两个类名：① wsc-header2020-navbar-main（子产品导航标记为main） ② wsc-header2020-navbar-** （子产品名称标记,例如：wsc-header2020-navbar-filmora，wsc-header2020-navbar-pdfelement）</p>
          </div>
          <img src="/images/pageRuls/header-1.png" alt=""/>
        </li>
        <li>
          <h2>body部分</h2>
          <p class="pb-3">所有主体内容部分必须放在body标签内部，body内部的一级块分为 header块，footer块，main块</p>
          <p class="pb-3">body标签需携带固定属性，具体如下表：</p>
          <table>
            <thead>
              <tr>
                <td>属性名</td>
                <td>属性值</td>
                <td>描述</td>
                <td>作用场景</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>* data-pro</td>
                <td>filmora，filmroa9，filmroapro，pdfelement，famisafe-so，recoverit</td>
                <td>产品名称</td>
                <td></td>
              </tr>
              <tr>
                <td>* data-cat</td>
                <td><span style="color:red;">product（产品页）</span>，template，article，home（首页），<span style="color:red;">pay-success（支付页成功跳转页）</span>，<span style="color:red;">search-rusult（搜索结果页）</span> </td>
                <td>页面类型</td>
                <td style="color:red;">用于ga360参数传递</td>
              </tr>
              <tr>
                <td>* data-dev</td>
                <td>desktop，mobile</td>
                <td>终端类型</td>
                <td>判断当前是桌面端或移动端</td>
              </tr>
              <tr>
                <td>* data-sys</td>
                <td>win，mac，ios，android</td>
                <td>页面默认系统</td>
                <td></td>
              </tr>
              <tr>
                <td>data-nav</td>
                <td>home，page</td>
                <td>页面导航类型</td>
                <td></td>
              </tr>
              <tr style="color:red">
                <td>data-pro-id（产品页特有）</td>
                <td>4578，5564</td>
                <td>页面产品cbsid</td>
                <td>用于ga360参数传递</td>
              </tr>
              <tr style="color:red">
                <td>data-pro-category（产品页特有）</td>
                <td>annual_plan，lifetime_plan，annual_bundle_plan</td>
                <td>产品期限类型</td>
                <td>用于ga360参数传递</td>
              </tr>
              <tr style="color:red">
                <td>data-pro-variant（产品页特有）</td>
                <td>1 user，5 users</td>
                <td>产品用户类型</td>
                <td>用于ga360参数传递</td>
              </tr>
              <tr style="color:red">
                <td>data-pro-price（产品页特有）</td>
                <td>45，90</td>
                <td>页面产品价格</td>
                <td>用于ga360参数传递</td>
              </tr>
            </tbody>
          </table>
          <p class="text-center pt-1">表（2-1-1）</p>
        </li>

        <li>
          <h2>main部分</h2>
          <p class="pb-3">所有主体内容部分必须放在main标签内部，main标签需携带 必要类名 wsc-main</p>
          <img src="/images/pageRuls/main-1.png" alt=""/>
          <p class="pb-3 mt-4">main标签内部 由多个section标签组成</p>
          <img src="/images/pageRuls/main-2.png" alt=""/>
          <!-- <p class="pb-3">header导航部分分为两块，分别置于nav块内：<strong>wondershare主导航</strong> 和 <strong>子产品导航</strong></p>
          <div class="pb-3 pl-3">
            <p class="pb-1">1.wondershare主导航</p>
            <p class="pl-3">固定两个类名：① wsc-header2020-navbar-master（主导航标记为master） ② wsc-header2020-navbar-wondershare （主导航产品标记为wondershare）</p>
          </div>
          <div class="pb-3 pl-3">
            <p class="pb-1">2.子产品导航</p>
            <p class="pl-3">固定两个类名：① wsc-header2020-navbar-main（子产品导航标记为main） ② wsc-header2020-navbar-** （子产品名称标记,例如：wsc-header2020-navbar-filmora，wsc-header2020-navbar-pdfelement）</p>
          </div> -->
          <!-- <img src="/images/pageRuls/header-1.png" alt=""/> -->
        </li>

        <li>
          <h2>footer部分</h2>
          <p class="pb-3">按照现有结构：整个导航放在footer标签内部</p>
          <img src="/images/pageRuls/footer-1.png" alt=""/>
        </li>

        <li>
          <h2>页面初始化部分</h2>
          <h3>页面加载完成就执行，主要包括：首页，产品页，</h3>
          <ul>
            <li>
              <h4>参数说明</h4>
                <table>
                    <thead>
                      <tr>
                        <td>页面</td>
                        <td>参数说明</td>
                        <td>示例</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>所有页面</td>
                        <td>
                          <pre class="m-0"><code>
window.dataLayer.push({
        "domain": "$domain",//主域名
        "product": "$productBrand",//产品线 body[data-pro]
        "hitTimeStamp": "$hitTimeStamp",//时间戳
        "siteLanguange": "$siteLanguange",//站点语言 html[lang]
        "userAgent": "$userAgent",//用户代理
        "userId": "$userId"//用户id，未登录状态传空值
})

</code></pre>
                        </td>
                        <td class="text-center"><img src="/images/pageRuls/exe-1.png" /></td>
                      </tr>
                      <tr>
                        <td>搜索结果页</td>
                        <td>
                          <pre class="m-0"><code>
window.dataLayer.push({
	"cat55": "$siteSearchCategory",
	"hitTimeStamp": "$hitTimeStamp",
	"kw55": "$siteSearchKeyword"
})

</code></pre>
                        </td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>产品页面</td>
                        <td>
                          <pre class="m-0"><code>
window.dataLayer.push({
        "eeAction": "eeProductDetail",
        "hitTimeStamp": "$hitTimeStamp",
        "productIds"：["$productIDs"],
        "productNames":["$productNames"],
        "productPrice":["$productPrice"],
        "productOs":["$productOs"],
        "proBrand":["$proBrand"],
        "proQuantity":["$proQuantity"],
        "productVariant":["$productVariant"],
        "productCategory":["$productCategory"],
})

</code></pre>
                        </td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>购买页面</td>
                        <td>
                          <pre class="m-0"><code>
window.dataLayer.push({
      "eeAction": "eeCheckout",
      "checkoutStep": "1",
        "productIds"：["$productIDs"],
        "productNames":["$productNames"],
        "productPrice":["$productPrice"],
        "productOs":["$productOs"],
        "proBrand":["$proBrand"],
        "proQuantity":["$proQuantity"],
        "productVariant":["$productVariant"],
        "productCategory":["$productCategory"],
       "userType":["$userType"],
       "licenseExpireDate":["$licenseExpireDate],
})

</code></pre>
                        </td>
                        <td>/</td>
                      </tr>
                      <tr>
                        <td>支付成功(回调)</td>
                        <td>
                          <pre class="m-0"><code>
window.dataLayer.push({
        "currencyCode": "$currencyCode",
        "hitTimeStamp": "$hitTimeStamp",
        "transactionId": "$transactionId",
        "transactionTotal": "$transactionTotal",
        "transactionCoupon": "$transactionCoupon",
        "paymentMethod": "$paymentMethod",
        "productIds"：["$productIDs"],
        "productNames":["$productNames"],
        "productPrice":["$productPrice"],
        "productOs":["$productOs"],
        "proBrand":["$proBrand"],
        "proQuantity":["$proQuantity"],
        "productVariant":["$productVariant"],
        "productCategory":["$productCategory"],
       "userType":["$userType"],
       "licenseExpireDate":["$licenseExpireDate],
})

</code></pre>
                        </td>
                        <td>/</td>
                      </tr>
                    </tbody>
              </table>
            </li>
          </ul>
        </li>

        <li>
          <h2>其他重点部分</h2>
          <h3>将其他 细节交互部分 按照埋点需求分为3大类: 纯跳转页面交互、触发事件交互、表单提交交互</h3>
          <ul>
            <li>
              <h4>纯跳转页面交互，主要涉及：下载，购买，登录（点击跳转页面），注册（点击跳转页面），页面跳转链接，语言，社交账号，新闻列表等页面列表跳转）又有事件又跳转以跳转为准   
                  此类包含所有带href跳转的a标签（不包含#或javascript：；等未跳转页面情况）。event：buttonLink。按照dom结构主要分成三类，如下表：</h4>
              <table>
                    <thead>
                      <tr>
                        <td>类型</td>
                        <td>代码示例</td>
                        <td>展示</td>
                        <td>说明</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>简单按钮</td>
                        <td>
                          <pre class="m-0"><code>&lt;a href="" class="btn btn-lg btn-primary">
  TRY IT FREE
&lt;/a></code></pre>
                        </td>
                        <td class="text-center">
                          <img src="/images/pageRuls/btn-1.png" />
                        </td>
                        <td rowspan="3">
                          <p>1、后续按钮类型严格按照实例结构</p>
                          <p>2、普通内部跳转 按钮不需要标记type，type默认为jump类型。有特殊含义(如注册、登录、购买等)跳转需要标记type，具体值参照表（5-1-2）</p>
                          <p>3、列表结构需标记每个item名称</p>
                        </td>
                      </tr>
                      <tr>
                        <td>复杂按钮</td>
                        <td>
                          <pre class="m-0"><code>&lt;a href="" class="btn btn-lg btn-primary" <span style="color:red">ga360Type="download"</span>>
  TRY IT FREE
  &lt;i class="wsc-icon wsc-icon-font wsc-icon-thick" data-icon="symbol-import">&lt;/i>
&lt;/a></code></pre>
                        </td>
                        <td class="text-center"><img src="/images/pageRuls/btn-2.png" /></td>
                      </tr>
                      <tr>
                        <td>复杂结构跳转（列表等）</td>
                        <td>
                          <pre class="m-0"><code>&lt;div class="row pt-3"<span style="color:red"> ga360ListName="newList"</span>>
  &lt;div class="col-lg-4">
    &lt;a href="" class="d-block" <span style="color:red"> ga360Name="标题一"</span>>
      &lt;img src="https://images.wondershare.com/filmora/images/user-story/index-get.png" alt="" class="w-100">
      &lt;p class="p-3 mb-0">我是标题...&lt;/p>
    &lt;/a>
  &lt;/div>
  &lt;div class="col-lg-4">
    &lt;a href="" class="d-block" <span style="color:red"> ga360Name="标题二"</span>>
      &lt;img src="https://images.wondershare.com/filmora/images/user-story/index-get.png" alt="" class="w-100">
      &lt;p class="p-3 mb-0">我是标题...&lt;/p>
    &lt;/a>
  &lt;/div>
  &lt;div class="col-lg-4">
    &lt;a href="" class="d-block" <span style="color:red"> ga360Name="标题三"</span>>
      &lt;img src="https://images.wondershare.com/filmora/images/user-story/index-get.png" alt="" class="w-100">
      &lt;p class="p-3 mb-0">我是标题...&lt;/p>
    &lt;/a>
  &lt;/div>
&lt;/div></code></pre>
                        </td>
                        <td class="text-center"><img src="/images/pageRuls/btn-3.png" /></td>
                      </tr>
                    </tbody>
              </table>
              <p class="text-center pt-1">表（5-1-1）</p>
              <h4>参数说明：</h4>
              <table>
                <thead>
                  <tr>
                    <td>参数名</td>
                    <td>参数值</td>
                    <td>作用场景解释</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>ga360ListName</td>
                    <td>Learn（子产品下拉导航，以此下拉导航父级按钮名称为准），newList（新闻列表），proList（产品列表），</td>
                    <td>交互元素所在列表名称，作用于<strong> 所有列表交互元素 。</strong>具体命名规则详见 <a href="">word 点击下载</a></td>
                  </tr>
                  <tr style="color:red">
                    <td>ga360Name</td>
                    <td>自定义标题名称</td>
                    <td>交互元素名称，作用于<strong> 复杂列表 </strong></td>
                  </tr>
                  <tr>
                    <td>ga360Type</td>
                    <td><span style="color:#00d800">默认为jump</span>，purchase intention（点击购买按钮，进入account支付页面），buy now（点击购买按钮，进入购物车，购买意向），banner，review（更多评论），covid（主站顶部COVID红色条），
                        prd download（产品下载），doc download（文档下载），app download（app下载），share（分享），language（语言选择），social（社交账号），login-link（登录），register（注册），campaign click（点击促销广告），support（support页面）
                        </td>
                    <td>交互元素类型，作用于<strong> 有特殊含义跳转元素 </strong></td>
                  </tr>
                  <tr>
                    <td>productIds</td>
                    <td>[7632]，[4536，2354]</td>
                    <td>产品id集合，数组，作用于<strong> 购买（组合）类型按钮 </strong></td>
                  </tr>
                  <tr>
                    <td>productNames</td>
                    <td>[filmroa]，[filmora,filmroa9]</td>
                    <td>产品名称集合，数组，作用于<strong> 购买（组合）类型按钮 </strong></td>
                  </tr>
                  <tr>
                    <td>productPrice</td>
                    <td>[263]，[263，299]</td>
                    <td>产品价格集合，数组，作用于<strong> 购买（组合）类型按钮 </strong></td>
                  </tr>
                  <tr>
                    <td>proBrand</td>
                    <td>[filmroa]，[filmroa,pdfelement]</td>
                    <td>产品线名称集合，数组，作用于<strong> 购买（组合）类型按钮 </strong></td>
                  </tr>
                  <tr>
                    <td>proQuantity</td>
                    <td>[1]，[2,3]</td>
                    <td>产品数量集合，数组，作用于<strong> 购买（组合）类型按钮 </strong></td>
                  </tr>
                  <tr>
                    <td>productVariant</td>
                    <td>[ 2users]，[1-3users,1user]</td>
                    <td>购买产品适用用户类型集合，数组，作用于<strong> 购买（组合）类型按钮 </strong></td>
                  </tr>
                  <tr>
                    <td>productCategory</td>
                    <td>[ annual_plan]，[annual_plan,lifetime_plan]</td>
                    <td>购买的产品类型集合，数组，作用于<strong> 购买（组合）类型按钮 </strong></td>
                  </tr>
                  <tr>
                    <td>licenseExpireDate</td>
                    <td>[447],[445,234]</td>
                    <td>产品licenseid 集合，作用于<strong> 购买（组合）类型按钮 </strong></td>
                  </tr>
                  <tr>
                    <td>productOs</td>
                    <td>mac，win，ios，android</td>
                    <td>产品价格集合，数组，作用于<strong> 购买（组合）类型按钮 </strong></td>
                  </tr>
                  <tr>
                    <td>currentLanguage</td>
                    <td>Portuguese，english</td>
                    <td>产品当前语言，作用于<strong> 购买（组合）类型按钮 </strong></td>
                  </tr>
                  

                  <tr>
                    <td>docName</td>
                    <td>filmora_full846.exe</td>
                    <td>文件名称，作用于<strong> 下载按钮 </strong></td>
                  </tr>
                  <tr>
                    <td>userType</td>
                    <td>1，2</td>
                    <td>用户类型，作用于<strong> 登录回调 </strong></td>
                  </tr>
                  
                  


                </tbody>
              </table>
              <p class="text-center pt-1">表（5-1-2）</p>
            </li>
            <li>
              <h4>触发事件交互，主要涉及：弹框，登录（点击弹框），注册（点击弹框），下拉选择，系统切换，tab切换，banner轮播）event：event_interaction。此类包含所有触发事件按钮（不包含表单内部事件及提交事件），具体实例说明如下表（5-2-1）：</h4>
              <table class="w-100">
                    <thead>
                      <tr>
                        <td>类型</td>
                        <td>代码示例</td>
                        <td>展示</td>
                        <td>说明</td>
                      </tr>
                    </thead>
                    <tbody>
                      <!-- <tr>
                        <td>简单按钮</td>
                        <td>
                          <pre class="m-0"><code>&lt;a href="" class="btn btn-lg btn-primary" <span style="color:red">ga360Location="nav_1"</span>>
  TRY IT FREE
&lt;/a></code></pre>
                        </td>
                        <td class="text-center">
                          <img src="/images/pageRuls/btn-1.png" />
                        </td>
                        <td rowspan="3">
                          <p>1、按钮类型的文案统一放在span标签内部</p>
                          <p>2、普通内部跳转 按钮不需要标记type，type默认为jump类型。有特殊含义(如注册、登录、购买等)跳转需要标记type，具体值参照表（5-1-2）</p>
                          <p>3、列表结构需标记每个item名称</p>
                        </td>
                      </tr> -->
                     
                    </tbody>
              </table>
              <p class="text-center pt-1">表（5-2-1）</p>

              <h4>参数说明如下表（5-2-2）：</h4>
              <table>
                <thead>
                  <tr>
                    <td>参数名</td>
                    <td>参数值</td>
                    <td>作用场景解释</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>ga360Location</td>
                    <td>同上</td>
                    <td>同上</td>
                  </tr>
                  <tr>
                    <td>ga360Name</td>
                    <td>触发事件的按钮名称按钮（内容）名称</td>
                    <td>交互元素名称，作用于<strong> 所有事件按钮 </strong></td>
                  </tr>
                  <tr style="color:red">
                    <td>gaevent</td>
                    <td>eventInt（普通点击事件）</td>
                    <td>账户类型，作用于<strong> 登录、注册回调 </strong></td>
                  </tr>
                  <tr>
                    <td>ga360Type</td>
                    <td>languageChoose（语言选择），bottomPromotClose（关闭广告），proQuantityChoose（产品数量选择），sysChange（系统切换选择），showMoreNews（展示更多新闻），scroll（返回顶部 ），campaign view（底部广告初始化）<span style="color:red;">login（点击登录），account（account页面按钮）</span></td>
                    <td>当前点击的按钮类型，作用于<strong> 所有事件按钮 </strong></td>
                  </tr>
                  
                
                </tbody>
              </table>
              <p class="text-center pt-1">表（5-2-2）</p>
            </li>
            <li>
              <h4>表单提交,主要涉及 注册（提交表单注册），登录（提交表单登录），购买，信息收集）event：form_success。具体实例说明如下表（5-3-1）</h4>
              <table class="w-100">
                    <thead>
                      <tr>
                        <td>类型</td>
                        <td>代码示例</td>
                        <td>展示</td>
                        <td>说明</td>
                      </tr>
                    </thead>
                    <tbody>
                      <!-- <tr>
                        <td>简单按钮</td>
                        <td>
                          <pre class="m-0"><code>&lt;a href="" class="btn btn-lg btn-primary" <span style="color:red">ga360Location="nav_1"</span>>
  TRY IT FREE
&lt;/a></code></pre>
                        </td>
                        <td class="text-center">
                          <img src="/images/pageRuls/btn-1.png" />
                        </td>
                        <td rowspan="3">
                          <p>1、按钮类型的文案统一放在span标签内部</p>
                          <p>2、普通内部跳转 按钮不需要标记type，type默认为jump类型。有特殊含义(如注册、登录、购买等)跳转需要标记type，具体值参照表（5-1-2）</p>
                          <p>3、列表结构需标记每个item名称</p>
                        </td>
                      </tr> -->
                    </tbody>
              </table>
              <p class="text-center pt-1">表（5-3-1）</p>

              <h4>参数说明如下表（5-2-2）：</h4>
              <table>
                <thead>
                  <tr>
                    <td>参数名</td>
                    <td>参数值</td>
                    <td>作用场景解释</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>ga360Location</td>
                    <td>同上</td>
                    <td>同上</td>
                  </tr>
                  <tr>
                    <td>事件名称</td>
                    <td>formSubmit</td>
                    <td>表单提交</td>
                  </tr>
                  <tr>
                    <td>ga360Name</td>
                    <td>collectEmail，login</td>
                    <td>表单名称，作用于<strong> 所有表单 </strong></td>
                  </tr>
                  <!-- <tr style="color:red">
                    <td>accountType</td>
                    <td>social、regular</td>
                    <td>账户类型，作用于<strong> 所有表单 </strong></td>
                  </tr> -->
                  <tr>
                    <td>ga360Type</td>
                    <td>redeem（兑换码提交回调）、contact sales（政企表单提交回调），support form（提交订单号或邮箱回调），email（提交邮箱回调），notification（网页通知点击）</td>
                    <td>当前点击的按钮类型，作用于<strong> 所有表单 </strong></td>
                  </tr>
                  <!-- <tr>
                    <td>ga360FormData</td>
                    <td>{"name":"olivia","email":"zhouli@wondershare.cn"}</td>
                    <td>需要收集记录的表单数据，作用于<strong> 所有表单 </strong></td>
                  </tr> -->
                  
                
                </tbody>
              </table>
              <p class="text-center pt-1">表（5-3-2）</p>
            </li>
           


          </ul>
          
          
         
        </li>



      </ul>
    </section>
    



  </div>
</template>

<script>

export default {
  name: 'pageRuls',
  props: {
    msg: String,
    // htmlEncode:""
  },
  created(){
  },
  methods(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.page-ruls{
  .w-100{width: 100%;}
  .gray{
    color: #14c78b;
  }
  ul,li{
    list-style: trad-chinese-informal;
  }
  ul{
    padding-left: 50px;
  }
  li{
    margin: 2rem 0;
    ul,li{
      list-style: decimal;
    }
    ul{padding-left: 20px;}
    li{
      margin-top: 0;
    }
  }
  textarea{
    width: 100%;
    background: transparent;
    border: 0;
    resize: none;
  }
  table{
    border: 1px solid #d2d2d2;
    border-spacing:0;
    tr,thead{
      border-bottom: 1px solid #d2d2d2;
    }
    thead{
      background: #f3f3f3;
      font-weight: bold;
    }
    tbody{
      tr{
        &:last-child{
          td{
            border-bottom: 0;
          }
        }
      }
    }
    td{
      border-left: 1px solid #d2d2d2;
      padding: 4px 10px;
      border-bottom: 1px solid #d2d2d2;
      &:first-child{
        border-left: 0;
      }
    }
    
  }
}

</style>
