(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e13e95f"],{"49b9":function(t,e,r){"use strict";var n=r("90a2"),s=r.n(n);s.a},"4b0a":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("shop-header"),r("a-card",[r("div",{staticStyle:{margin:"30px"}},[r("a-timeline",t._l(t.timeLineItem,function(e,n){return r("a-timeline-item",{key:n},[t._v(t._s(e["msg"]))])}),1)],1)])],1)},s=[],a=r("f4c0"),o=r("d4f3"),i={name:"shopDynamic",components:{shopHeader:a["a"]},data:function(){return{timeLineItem:[],num:0}},methods:{query:function(){var t=this,e={hbh_store_id:this.num};Object(o["e"])(e).then(function(e){t.timeLineItem=e.data})}},created:function(){this.num=this.$route.params.hbh_store_id,this.query()}},u=i,c=r("2877"),l=Object(c["a"])(u,n,s,!1,null,"5bd76171",null);e["default"]=l.exports},"90a2":function(t,e,r){},c16f:function(t,e,r){"use strict";var n,s,a=r("fa43"),o=a["a"],i=o,u=r("2877"),c=Object(u["a"])(i,n,s,!1,null,null,null);e["a"]=c.exports},d4f3:function(t,e,r){"use strict";r.d(e,"b",function(){return a}),r.d(e,"a",function(){return o}),r.d(e,"c",function(){return i}),r.d(e,"n",function(){return u}),r.d(e,"p",function(){return c}),r.d(e,"k",function(){return l}),r.d(e,"o",function(){return d}),r.d(e,"m",function(){return h}),r.d(e,"l",function(){return _}),r.d(e,"d",function(){return m}),r.d(e,"f",function(){return p}),r.d(e,"g",function(){return b}),r.d(e,"i",function(){return f}),r.d(e,"j",function(){return v}),r.d(e,"h",function(){return y}),r.d(e,"e",function(){return g});var n=r("b775"),s={store:"/store/",shopDetail:"/storedetail/",shopHealth:"/storehealth/",UserResourcesFour:"/UserResourcesFour/",UserResourcesTable:"/UserResourcesTable/",UserResourcesStage:"/UserResourcesStage/",UserResourcesFlowFour:"/UserResourcesFlowFour/",UserResourcesFlowTop:"/UserResourcesFlowTop/",UserResourcesFlowTable:"/UserResourcesFlowTable/",StoreCityArea:"/StoreCityArea/",StoreIndustry:"/StoreIndustry/",StoreKpAdd:"/api/store/kp_add",StoreLkAdd:"/api/store/lk_add",StoreKpRemove:"/api/store/kp_remove",StoreLkRemove:"/api/store/lk_remove",StoreDynamic:"/StoreDynamic/"};function a(t){return Object(n["b"])({url:s.store,method:"get",params:t})}function o(t){return Object(n["b"])({url:s.shopDetail,method:"get",params:t})}function i(t){return Object(n["b"])({url:s.shopHealth,method:"get",params:t})}function u(t){return Object(n["b"])({url:s.UserResourcesFour,method:"get",params:t})}function c(t){return Object(n["b"])({url:s.UserResourcesTable,method:"get",params:t})}function l(t){return Object(n["b"])({url:s.UserResourcesFlowFour,method:"get",params:t})}function d(t){return Object(n["b"])({url:s.UserResourcesStage,method:"get",params:t})}function h(t){return Object(n["b"])({url:s.UserResourcesFlowTop,method:"get",params:t})}function _(t){return Object(n["b"])({url:s.UserResourcesFlowTable,method:"get",params:t})}function m(){return Object(n["b"])({url:s.StoreCityArea,method:"get"})}function p(){return Object(n["b"])({url:s.StoreIndustry,method:"get"})}function b(t){return Object(n["b"])({url:s.StoreKpAdd,method:"post",data:t})}function f(t){return Object(n["b"])({url:s.StoreLkAdd,method:"post",data:t})}function v(t){return Object(n["b"])({url:s.StoreLkRemove,method:"post",data:t})}function y(t){return Object(n["b"])({url:s.StoreKpRemove,method:"post",data:t})}function g(t){return Object(n["b"])({url:s.StoreDynamic,method:"get",params:t})}},f4c0:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("page-view",{attrs:{title:t.store_title,logo:"https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png"}},[r("detail-list",{staticClass:"detail-layout",attrs:{slot:"headerContent",size:"small",col:3},slot:"headerContent"},[r("detail-list-item",{attrs:{term:"店铺名称"}},[t._v(t._s(t.store_name))]),r("detail-list-item",{attrs:{term:"主营行业"}},[t._v(t._s(t.store_industry_name))]),r("detail-list-item",{attrs:{term:"服务城市"}},[t._v(t._s(t.store_citys))]),r("detail-list-item",{attrs:{term:"商家主页"}},[t.dianping?r("a",{attrs:{href:t.dianping_url,target:"_blank"}},[t._v("大众点评")]):t._e(),t._v("  \n        "),t.baihe?r("a",{attrs:{href:t.baihe_url,target:"_blank"}},[t._v("百合婚礼")]):t._e(),t._v("  \n        "),t.hunliji?r("a",{attrs:{href:t.hunliji_url,target:"_blank"}},[t._v("婚礼纪")]):t._e(),t._v("  \n      ")]),r("detail-list-item",{attrs:{term:"店铺地址"}},[t._v(t._s(t.store_address))]),r("detail-list-item",{attrs:{term:"合作状态"}},[t._v(t._s(t.store_relationship))]),r("detail-list-item",{attrs:{term:"创建时间"}},[t._v(t._s(t.created_at))]),r("detail-list-item",{attrs:{term:"联系电话"}},[t._v(t._s(t.store_phone))])],1),r("a-row",{staticClass:"status-list",attrs:{slot:"extra"},slot:"extra"},[r("a-col",{attrs:{xs:12,sm:12}},[r("div",{staticClass:"text"},[t._v("意向用户数")]),r("div",{staticClass:"heading"},[t._v(t._s(t.intention_user_num))])]),r("a-col",{attrs:{xs:12,sm:12}},[r("div",{staticClass:"text"},[t._v("访问用户数")]),r("div",{staticClass:"heading"},[t._v(t._s(t.total_user_count))])])],1),r("template",{slot:"action"},[r("a-button",{staticStyle:{"margin-left":"10px"},on:{click:t.showModal}},[t._v("数据定义")]),r("a-modal",{attrs:{title:"数据定义"},on:{ok:t.handleOk},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[r("p",[t._v("1.店铺ID: 四平台(婚博会，大众点评，婚礼纪，百合婚礼)的商家通过名称，地理位置和运营勾选确认行程的商家的唯一ID")]),r("p",[t._v("2.婚博会店铺ID: 婚博会平台下自己生成的店铺的唯一ID")]),r("p",[t._v("3.店铺名称: 店铺的定义名称(数据优先级 婚博会>婚礼纪>大众点评>百合婚礼)")]),r("p",[t._v("4.城市: 婚博会平台业务下展会城市(北上广杭武成天)+线上城市站城市(37个)")]),r("p",[t._v("5.区域: 店铺所属的城市地理位置下的区域，如余杭区")]),r("P",[t._v("6.行业: 以婚博会平台业务下14个行业为主，其他平台通过转换关系对应。喜宴酒店,婿纱摄影,婚礼服务,婚纱礼服,婿嫁首饰,结婚百货,四大金刚，旅拍,海外婚礼,蜜月旅游,婚车租赁,新娘造型,新房装修,时尚写真")]),r("p",[t._v("7.店铺地址: 店铺的实际营业地址(优先级 婚博会>婚礼纪>大众点评>百合婚礼)")]),r("p",[t._v("8.店铺创建时间: 店铺在平台的创建时间(只有婚博会平台下有)")]),r("p",[t._v("9.合作状态: 店铺跟四大平台的合作关系(合作中，未合作，曾经合作) 合作中指的是该店铺在该平台有主页并可以访问，曾经合作只在该平台曾经有主页并可以访问，未合作只历史记录中未曾有找到过该店铺")])],1)],1),r("div",{attrs:{slot:"headerContent"},slot:"headerContent"},[r("a-menu",{attrs:{mode:"horizontal",selectedKeys:t.currentKeys},on:{openChange:t.onOpenChange}},[r("a-menu-item",{key:"/shop/shopInfo/"},[r("router-link",{attrs:{to:{name:"shopInfo",params:{hbh_store_id:this.num}}}},[r("a-icon",{attrs:{type:"heat-map"}}),t._v("\n            店铺概览\n          ")],1)],1),r("a-menu-item",{key:"/shop/userData/"},[r("router-link",{attrs:{to:{name:"userData",params:{hbh_store_id:this.num}}}},[r("a-icon",{attrs:{type:"team"}}),t._v("\n            用户资源\n          ")],1)],1),r("a-menu-item",{key:"/shop/wapFlow/"},[r("router-link",{attrs:{to:{name:"wapFlow",params:{hbh_store_id:this.num}}}},[r("a-icon",{attrs:{type:"database"}}),t._v("\n            访问流量\n          ")],1)],1),r("a-menu-item",{key:"/shop/shopDynamic/"},[r("router-link",{attrs:{to:{name:"shopDynamic",params:{hbh_store_id:this.num}}}},[r("a-icon",{attrs:{type:"exception"}}),t._v("\n            店铺动态\n          ")],1)],1)],1)],1)],2)},s=[],a=(r("4917"),r("680a")),o=r("c16f"),i=r("d4f3"),u=o["a"].Item,c={components:{PageView:a["b"],DetailList:o["a"],DetailListItem:u},data:function(){return{openKeys:[],selectedKeys:[],visible:!1,store_title:"",store_name:"",store_industry_name:"",store_citys:"",store_address:"",store_phone:"",created_at:"",dianping_url:"",baihe_url:"",hunliji_url:"",store_relationship:"",intention_user_num:0,total_user_count:0,demand_user_count:0,num:0,queryParam:{},currentKeys:[],dianping:!0,baihe:!0,hunliji:!0}},created:function(){this.num=this.$route.params.hbh_store_id,this.queryParam={hbh_store_id:this.num},this.queryShop(),this.updateMenu()},methods:{onOpenChange:function(t){this.openKeys=t},updateMenu:function(){var t=this.$route.matched.concat(),e=t.pop().path,r=/(.+):/,n=e.match(r)[1];this.currentKeys=[n]},showModal:function(){this.visible=!0},handleOk:function(t){this.visible=!1},queryShop:function(){var t=this;Object(i["b"])(this.queryParam).then(function(e){t.store_name=e.data[0].store_name,t.store_industry_name=e.data[0].store_industry_name,t.store_citys=e.data[0].store_citys,t.store_address=e.data[0].store_address,t.store_phone=e.data[0].store_phone,t.created_at=e.data[0].created_at,t.total_user_count=e.data[0].total_user_count,t.intention_user_num=e.data[0].intention_user_num,t.store_title="店铺商家ID:"+e.data[0].unified_store_id+" | 婚博会商家ID:"+e.data[0].hbh_store_id;var r=e.data[0].dianping_store_id,n=e.data[0].hlj_store_id,s=e.data[0].baihe_store_id;t.dianping_url="http://www.dianping.com/shop/"+r,t.hunliji_url="https://www.hunliji.com/merchant/detail_"+n,t.baihe_url="http://m.hunli.baihe.com/sh/phb/shop"+s+".html";var a="";0!=r?a+="点评-合作中 ":t.dianping=!1,0!=n?a+="婚礼纪-合作中 ":t.hunliji=!1,0!=s?a+="百合婚礼-合作中 ":t.baihe=!1,t.store_relationship=a})}},watch:{$route:function(t){this.updateMenu()}}},l=c,d=(r("49b9"),r("2877")),h=Object(d["a"])(l,n,s,!1,null,"0afe07f8",null);e["a"]=h.exports}}]);