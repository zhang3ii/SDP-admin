(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65271592"],{"2cd8":function(e,t,r){},6499:function(e,t,r){"use strict";var s=r("2cd8"),a=r.n(s);a.a},77729:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("a-form",[e.isScreen?r("a-card",[r("div",{staticClass:"topHeader"},[r("div",[r("a-row",{attrs:{gutter:20}},[r("a-col",{attrs:{md:8,sm:24}},[r("a-form-item",{attrs:{label:"城市区域选择"}},[r("a-cascader",{staticStyle:{width:"200px"},attrs:{options:e.cityData,placeholder:"选择城市区域",changeOnSelect:""},model:{value:e.queryParam.store_citys,callback:function(t){e.$set(e.queryParam,"store_citys",t)},expression:"queryParam.store_citys"}})],1)],1),r("a-col",{attrs:{md:8,sm:24}},[r("a-form-item",{attrs:{label:"行业"}},[r("a-select",{staticStyle:{width:"200px"},attrs:{placeholder:"这里选择行业"},model:{value:e.queryParam.store_industry_name,callback:function(t){e.$set(e.queryParam,"store_industry_name",t)},expression:"queryParam.store_industry_name"}},e._l(e.industry_list,function(t,s){return r("a-select-option",{key:s,attrs:{value:t}},[e._v(e._s(t))])}),1)],1)],1),r("a-col",{attrs:{md:8,sm:24}},[r("a-form-item",{attrs:{label:"店铺"}},[r("a-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入店铺名称"},model:{value:e.queryParam.store_name,callback:function(t){e.$set(e.queryParam,"store_name",t)},expression:"queryParam.store_name"}})],1)],1)],1)],1),r("div",{staticStyle:{"margin-top":"20px"}},[r("a-row",{attrs:{gutter:20}},[r("a-col",{attrs:{md:8,sm:24}},[r("a-form-item",{attrs:{label:"合作状态"}},[r("a-select",{staticStyle:{width:"200px"},attrs:{mode:"multiple",placeholder:"这里选择合作状态"},model:{value:e.queryParam.statue,callback:function(t){e.$set(e.queryParam,"statue",t)},expression:"queryParam.statue"}},e._l(e.stateList,function(t,s){return r("a-select-option",{key:s,attrs:{value:s}},[e._v(e._s(t))])}),1)],1)],1),r("a-col",{attrs:{md:8,sm:24}},[r("a-form-item",{attrs:{label:"电话"}},[r("a-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入电话"},model:{value:e.queryParam.store_phone,callback:function(t){e.$set(e.queryParam,"store_phone",t)},expression:"queryParam.store_phone"}})],1)],1),r("a-col",{attrs:{md:8,sm:24}},[r("a-form-item",{attrs:{label:"是否关注"}},[r("a-radio-group",{attrs:{options:e.plainOptions},model:{value:e.queryParam.hasCollection,callback:function(t){e.$set(e.queryParam,"hasCollection",t)},expression:"queryParam.hasCollection"}})],1)],1)],1)],1)])]):e._e(),r("div",[r("div",{staticClass:"searchGroup"},[r("a-form-item",[r("a-input-search",{staticStyle:{width:"50%","vertical-align":"bottom"},attrs:{placeholder:"请输入商家名称，地址，联系电话等信息或者店铺id字符串进行检索",size:"large",enterButton:"搜索"},on:{search:function(t){return e.searchBtn(1)}},model:{value:e.queryParam.search,callback:function(t){e.$set(e.queryParam,"search",t)},expression:"queryParam.search"}}),r("a-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"large",type:"dashed"},on:{click:e.hasScreen}},[e._v(e._s(e.isScreen?"取消":"高级筛选"))])],1)],1)])],1),r("div",[e.hasSelected?[r("a-alert",{attrs:{type:"info",showIcon:""}},[r("template",{slot:"message"},[r("span",{staticStyle:{"margin-right":"12px"}},[e._v("已选择: "),r("a",{staticStyle:{"font-weight":"600"}},[e._v(e._s(this.selectedRowKeys.length))])]),r("span",[r("a",{attrs:{href:"javascript:;"},on:{click:e.hasFollowList}},[e._v("关注   ")])]),r("span",[r("a",{attrs:{href:"#"},on:{click:e.hasMonitorList}},[e._v("监控   ")])]),e.hasContrast?r("span",[r("a",{attrs:{href:"javascript:;"},on:{click:e.Contrast}},[e._v("对比   ")])]):r("span",[r("a",{attrs:{href:"javascript:;"},on:{click:e.cancelContrast}},[e._v("取消   ")])])])],2)]:e._e()],2),r("div",[r("a-table",{ref:"table",attrs:{columns:e.shopSearchColumns,dataSource:e.shopSearchData,rowSelection:e.rowSelection,loading:e.loading,pagination:e.pagination,rowKey:function(e){return e.unified_store_id}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"filterDropdown",fn:function(t){t.setSelectedKeys,t.selectedKeys,t.confirm,t.clearFilters,t.column;return r("div",{staticStyle:{padding:"8px"}},[r("a-checkbox-group",{attrs:{defaultValue:["店铺ID"]},on:{change:e.onChangeRows}},e._l(e.columnsList,function(t,s){return r("div",{key:s},[r("a-checkbox",{key:s,attrs:{value:t,disabled:"店铺ID"===t}},[e._v(e._s(t))])],1)}),0),r("div",{staticStyle:{"margin-top":"5px"}},[r("a-button",{staticStyle:{width:"50px","margin-right":"8px"},attrs:{size:"small",type:"primary"},on:{click:e.changeColumns}},[e._v("确定")])],1)],1)}},{key:"action",fn:function(t,s){return r("span",{},[r("a",{attrs:{href:"/shop/shopInfo/"+s.hbh_store_id,target:"_blank"}},[e._v("查看")]),r("a-divider",{attrs:{type:"vertical"}}),0===s.is_monitor?r("span",[r("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.hasMonitor(s.unified_store_id,s.store_name)}}},[e._v("监控")])]):r("span",[r("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.removeMonitor(s.unified_store_id,s.store_name)}}},[e._v("取消监控")])]),r("a-divider",{attrs:{type:"vertical"}}),0===s.is_follow?r("span",[r("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.hasFollow(s.unified_store_id,s.store_name)}}},[e._v("关注")])]):r("span",[r("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.removeFollow(s.unified_store_id,s.store_name)}}},[e._v("取消关注")])])],1)}}])})],1)],1)},a=[],o=(r("386d"),r("7514"),r("ac6a"),r("cebc")),n=r("322e"),i=r("d65b"),c=r("d4f3"),u=["YES","NO"],l=[{title:"店铺ID",dataIndex:"hbh_store_id",scopedSlots:{filterDropdown:"filterDropdown",filterIcon:"filter",customRender:"customRender"}},{title:"店铺",dataIndex:"store_name"},{title:"城市",dataIndex:"store_citys"},{title:"区域",dataIndex:"store_area"},{title:"行业",dataIndex:"store_industry_name"},{title:"电话",dataIndex:"store_phone"},{title:"活跃度",dataIndex:"active_degree",sorter:!0,scopedSlots:{customRender:"active_degree"}},{title:"意向度",dataIndex:"purpose_degree",sorter:!0,scopedSlots:{customRender:"purpose_degree"}},{title:"贡献度",dataIndex:"contribute_degree",sorter:!0,scopedSlots:{customRender:"contribute_degree"}},{title:"口碑",dataIndex:"public_praise",sorter:!0,scopedSlots:{customRender:"public_praise"}},{title:"热度",dataIndex:"hot_degree",sorter:!0,scopedSlots:{customRender:"hot_degree"}},{title:"90日访问人数",dataIndex:"total_user_count_90"},{title:"意向人数",dataIndex:"intention_user_num"},{title:"客资数",dataIndex:"demand_num"},{title:"操作",scopedSlots:{customRender:"action"}}],d={hlj_store_id:"婚礼纪",baihe_store_id:"百合婚礼",dianping_store_id:"大众点评"},h={name:"shopSearch",components:{AFormItem:n["a"],AForm:i["a"]},data:function(){return{value1:"是",queryParam:{},plainOptions:u,shopSearchData:[],shopSearchColumns:l,selectedRowKeys:[],hasContrast:!0,dataStorage:[],stateList:d,MonitorStatue:!0,cityData:[],columnsList:[],changeList:[],shopColumnsSet:[],isScreen:!1,industry_list:[],pagination:{},loading:!0,selectedShopList:{}}},methods:{Contrast:function(){this.hasContrast=!1;var e=[];for(var t in this.selectedShopList)for(var r in this.selectedShopList[t])e.push(this.selectedShopList[t][r]);this.shopSearchData=e;var s=Object(o["a"])({},this.pagination);this.pagination.current=1,s.total=this.shopSearchData.length},cancelContrast:function(){this.searchBtn(2),this.hasContrast=!0},hasFollow:function(e,t){var r=this,s={unified_store_id:e,store_name:t};Object(c["i"])(s).then(function(e){401!==e.code&&r.$message.success(e.message)}),this.searchBtn(2)},removeFollow:function(e,t){var r=this,s={unified_store_id:e,store_name:t};Object(c["j"])(s).then(function(e){401!==e.code&&r.$message.success(e.message)}),this.searchBtn(2)},hasMonitor:function(e,t){var r=this,s={unified_store_id:e,store_name:t};Object(c["g"])(s).then(function(e){401!==e.code&&r.$message.success(e.message)}),this.searchBtn(2)},removeMonitor:function(e,t){var r=this,s={unified_store_id:e,store_name:t};Object(c["h"])(s).then(function(e){401!==e.code&&r.$message.success(e.message)}),this.searchBtn(2)},columnsTitle:function(){var e,t=[],r=this.shopSearchColumns;for(e in r)t.push(r[e]["title"]);this.columnsList=t},onChangeRows:function(e){this.changeList=e},changeColumns:function(){var e=this.shopColumnsSet,t=[];this.changeList.forEach(function(r){var s=e.find(function(e){return e.title===r});s&&t.push(s)}),this.shopSearchColumns=t},hasScreen:function(){this.isScreen=!this.isScreen},query:function(){var e=this;Object(c["d"])().then(function(t){var r,s,a=t.data,o=[];for(r in a){var n={};for(s in n["value"]=r,n["label"]=r,n["children"]=[],a[r]){var i={};i["value"]=a[r][s],i["label"]=a[r][s],n["children"].push(i)}o.push(n)}e.cityData=o}),Object(c["f"])().then(function(t){e.industry_list=t.data.industry_names})},handleTableChange:function(e,t,r){var s=Object(o["a"])({},this.queryParam),a=Object(o["a"])({},this.pagination);if(a.current=e.current,this.pagination=a,"ascend"===r.order)var n=r.field;else n="-"+r.field;this.fetch({limit:e.pageSize,offset:10*(e.current-1),store_citys:s.store_citys,store_industry_name:s.store_industry_name,store_name:s.store_name,statue:s.statue,store_phone:s.store_phone,hasCollection:s.hasCollection,search:s.search,order:n})},fetch:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.limit=10,this.loading=!0,Object(c["b"])(t).then(function(t){var r=Object(o["a"])({},e.pagination);e.loading=!1,e.shopSearchData=t.data,e.pagination=r,r.total=t.count})},searchBtn:function(e){var t=this;this.loading=!0;var r=Object(o["a"])({},this.queryParam),s=Object(o["a"])({},this.pagination);if(1===e)var a=0,n=1;else a=10*(s.current-1),n=s.current;var i={limit:10,offset:a,store_citys:r.store_citys,store_industry_name:r.store_industry_name,store_name:r.store_name,statue:r.statue,store_phone:r.store_phone,hasCollection:r.hasCollection,search:r.search};Object(c["b"])(i).then(function(e){t.loading=!1,t.shopSearchData=e.data;var r=Object(o["a"])({},t.pagination);t.pagination=r,r.total=e.count,r.current=n})},hasFollowList:function(){var e=this,t=[];for(var r in this.selectedShopList)for(var s in this.selectedShopList[r]){var a=this.selectedShopList[r][s];t.push({unified_store_id:a.unified_store_id,store_name:a.store_name})}Object(c["i"])(t).then(function(t){401!==t.code&&e.$message.success(t.message)}),this.searchBtn(2)},hasMonitorList:function(){var e=this,t=[];for(var r in this.selectedShopList)for(var s in this.selectedShopList[r]){var a=this.selectedShopList[r][s];t.push({unified_store_id:a.unified_store_id,store_name:a.store_name})}Object(c["g"])(t).then(function(t){401!==t.code&&e.$message.success(t.message)}),this.searchBtn(2)}},mounted:function(){this.fetch()},computed:{hasSelected:function(){return this.selectedRowKeys.length>0},rowSelection:function(){var e=this;this.selectedRowKeys;return{onChange:function(t,r){var s=Object(o["a"])({},e.pagination);e.selectedRowKeys=t,s.current?e.selectedShopList[s.current]=r:e.selectedShopList[1]=r}}}},created:function(){this.columnsTitle(),this.shopColumnsSet=this.shopSearchColumns,this.query()}},m=h,p=(r("6499"),r("2877")),f=Object(p["a"])(m,s,a,!1,null,"d3a71d2a",null);t["default"]=f.exports},d4f3:function(e,t,r){"use strict";r.d(t,"b",function(){return o}),r.d(t,"a",function(){return n}),r.d(t,"c",function(){return i}),r.d(t,"n",function(){return c}),r.d(t,"p",function(){return u}),r.d(t,"k",function(){return l}),r.d(t,"o",function(){return d}),r.d(t,"m",function(){return h}),r.d(t,"l",function(){return m}),r.d(t,"d",function(){return p}),r.d(t,"f",function(){return f}),r.d(t,"g",function(){return _}),r.d(t,"i",function(){return v}),r.d(t,"j",function(){return b}),r.d(t,"h",function(){return g}),r.d(t,"e",function(){return y});var s=r("b775"),a={store:"/store/",shopDetail:"/storedetail/",shopHealth:"/storehealth/",UserResourcesFour:"/UserResourcesFour/",UserResourcesTable:"/UserResourcesTable/",UserResourcesStage:"/UserResourcesStage/",UserResourcesFlowFour:"/UserResourcesFlowFour/",UserResourcesFlowTop:"/UserResourcesFlowTop/",UserResourcesFlowTable:"/UserResourcesFlowTable/",StoreCityArea:"/StoreCityArea/",StoreIndustry:"/StoreIndustry/",StoreKpAdd:"/api/store/kp_add",StoreLkAdd:"/api/store/lk_add",StoreKpRemove:"/api/store/kp_remove",StoreLkRemove:"/api/store/lk_remove",StoreDynamic:"/StoreDynamic/"};function o(e){return Object(s["b"])({url:a.store,method:"get",params:e})}function n(e){return Object(s["b"])({url:a.shopDetail,method:"get",params:e})}function i(e){return Object(s["b"])({url:a.shopHealth,method:"get",params:e})}function c(e){return Object(s["b"])({url:a.UserResourcesFour,method:"get",params:e})}function u(e){return Object(s["b"])({url:a.UserResourcesTable,method:"get",params:e})}function l(e){return Object(s["b"])({url:a.UserResourcesFlowFour,method:"get",params:e})}function d(e){return Object(s["b"])({url:a.UserResourcesStage,method:"get",params:e})}function h(e){return Object(s["b"])({url:a.UserResourcesFlowTop,method:"get",params:e})}function m(e){return Object(s["b"])({url:a.UserResourcesFlowTable,method:"get",params:e})}function p(){return Object(s["b"])({url:a.StoreCityArea,method:"get"})}function f(){return Object(s["b"])({url:a.StoreIndustry,method:"get"})}function _(e){return Object(s["b"])({url:a.StoreKpAdd,method:"post",data:e})}function v(e){return Object(s["b"])({url:a.StoreLkAdd,method:"post",data:e})}function b(e){return Object(s["b"])({url:a.StoreLkRemove,method:"post",data:e})}function g(e){return Object(s["b"])({url:a.StoreKpRemove,method:"post",data:e})}function y(e){return Object(s["b"])({url:a.StoreDynamic,method:"get",params:e})}}}]);