(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-efa7ead4"],{1466:function(e,t,a){var n=a("3eba"),i=a("2306"),r=a("6d8b"),o=a("a15a");function s(e){return r.isArray(e)||(e=[+e,+e]),e}var l=n.extendChartView({type:"radar",render:function(e,t,a){var n=e.coordinateSystem,l=this.group,c=e.getData(),d=this._data;function u(e,t){var a=e.getItemVisual(t,"symbol")||"circle",n=e.getItemVisual(t,"color");if("none"!==a){var i=s(e.getItemVisual(t,"symbolSize")),r=o.createSymbol(a,-1,-1,2,2,n);return r.attr({style:{strokeNoScale:!0},z2:100,scale:[i[0]/2,i[1]/2]}),r}}function h(t,a,n,r,o,s){n.removeAll();for(var l=0;l<a.length-1;l++){var c=u(r,o);c&&(c.__dimIdx=l,t[l]?(c.attr("position",t[l]),i[s?"initProps":"updateProps"](c,{position:a[l]},e,o)):c.attr("position",a[l]),n.add(c))}}function p(e){return r.map(e,function(e){return[n.cx,n.cy]})}c.diff(d).add(function(t){var a=c.getItemLayout(t);if(a){var n=new i.Polygon,r=new i.Polyline,o={shape:{points:a}};n.shape.points=p(a),r.shape.points=p(a),i.initProps(n,o,e,t),i.initProps(r,o,e,t);var s=new i.Group,l=new i.Group;s.add(r),s.add(n),s.add(l),h(r.shape.points,a,l,c,t,!0),c.setItemGraphicEl(t,s)}}).update(function(t,a){var n=d.getItemGraphicEl(a),r=n.childAt(0),o=n.childAt(1),s=n.childAt(2),l={shape:{points:c.getItemLayout(t)}};l.shape.points&&(h(r.shape.points,l.shape.points,s,c,t,!1),i.updateProps(r,l,e),i.updateProps(o,l,e),c.setItemGraphicEl(t,n))}).remove(function(e){l.remove(d.getItemGraphicEl(e))}).execute(),c.eachItemGraphicEl(function(e,t){var a=c.getItemModel(t),n=e.childAt(0),o=e.childAt(1),s=e.childAt(2),d=c.getItemVisual(t,"color");l.add(e),n.useStyle(r.defaults(a.getModel("lineStyle").getLineStyle(),{fill:"none",stroke:d})),n.hoverStyle=a.getModel("emphasis.lineStyle").getLineStyle();var u=a.getModel("areaStyle"),h=a.getModel("emphasis.areaStyle"),p=u.isEmpty()&&u.parentModel.isEmpty(),m=h.isEmpty()&&h.parentModel.isEmpty();m=m&&p,o.ignore=p,o.useStyle(r.defaults(u.getAreaStyle(),{fill:d,opacity:.7})),o.hoverStyle=h.getAreaStyle();var f=a.getModel("itemStyle").getItemStyle(["color"]),g=a.getModel("emphasis.itemStyle").getItemStyle(),v=a.getModel("label"),y=a.getModel("emphasis.label");s.eachChild(function(e){e.setStyle(f),e.hoverStyle=r.clone(g);var a=c.get(c.dimensions[e.__dimIdx],t);(null==a||isNaN(a))&&(a=""),i.setLabelStyle(e.style,e.hoverStyle,v,y,{labelFetcher:c.hostModel,labelDataIndex:t,labelDimIndex:e.__dimIdx,defaultText:a,autoColor:d,isRectText:!0})}),e.highDownOnUpdate=function(e,t){o.attr("ignore","emphasis"===t?m:p)},i.setHoverStyle(e)}),this._data=c},remove:function(){this.group.removeAll(),this._data=null},dispose:function(){}});e.exports=l},1748:function(e,t,a){var n=a("3eba"),i=a("6d8b"),r=a("71ad"),o=a("4319"),s=a("2023"),l=r.valueAxis;function c(e,t){return i.defaults({show:t},e)}var d=n.extendComponentModel({type:"radar",optionUpdated:function(){var e=this.get("boundaryGap"),t=this.get("splitNumber"),a=this.get("scale"),n=this.get("axisLine"),r=this.get("axisTick"),l=this.get("axisLabel"),c=this.get("name"),d=this.get("name.show"),u=this.get("name.formatter"),h=this.get("nameGap"),p=this.get("triggerEvent"),m=i.map(this.get("indicator")||[],function(m){null!=m.max&&m.max>0&&!m.min?m.min=0:null!=m.min&&m.min<0&&!m.max&&(m.max=0);var f=c;if(null!=m.color&&(f=i.defaults({color:m.color},c)),m=i.merge(i.clone(m),{boundaryGap:e,splitNumber:t,scale:a,axisLine:n,axisTick:r,axisLabel:l,name:m.text,nameLocation:"end",nameGap:h,nameTextStyle:f,triggerEvent:p},!1),d||(m.name=""),"string"===typeof u){var g=m.name;m.name=u.replace("{value}",null!=g?g:"")}else"function"===typeof u&&(m.name=u(m.name,m));var v=i.extend(new o(m,null,this.ecModel),s);return v.mainType="radar",v.componentIndex=this.componentIndex,v},this);this.getIndicatorModels=function(){return m}},defaultOption:{zlevel:0,z:0,center:["50%","50%"],radius:"75%",startAngle:90,name:{show:!0},boundaryGap:[0,0],splitNumber:5,nameGap:15,scale:!1,shape:"polygon",axisLine:i.merge({lineStyle:{color:"#bbb"}},l.axisLine),axisLabel:c(l.axisLabel,!1),axisTick:c(l.axisTick,!1),splitLine:c(l.splitLine,!0),splitArea:c(l.splitArea,!0),indicator:[]}}),u=d;e.exports=u},"23e0":function(e,t,a){var n=a("6d8b"),i=a("7887"),r=a("89e3"),o=a("3842"),s=a("697e"),l=s.getScaleExtent,c=s.niceScaleExtent,d=a("2039");function u(e,t,a){this._model=e,this.dimensions=[],this._indicatorAxes=n.map(e.getIndicatorModels(),function(e,t){var a="indicator_"+t,n=new i(a,new r);return n.name=e.get("name"),n.model=e,e.axis=n,this.dimensions.push(a),n},this),this.resize(e,a),this.cx,this.cy,this.r,this.r0,this.startAngle}u.prototype.getIndicatorAxes=function(){return this._indicatorAxes},u.prototype.dataToPoint=function(e,t){var a=this._indicatorAxes[t];return this.coordToPoint(a.dataToCoord(e),t)},u.prototype.coordToPoint=function(e,t){var a=this._indicatorAxes[t],n=a.angle,i=this.cx+e*Math.cos(n),r=this.cy-e*Math.sin(n);return[i,r]},u.prototype.pointToData=function(e){var t=e[0]-this.cx,a=e[1]-this.cy,n=Math.sqrt(t*t+a*a);t/=n,a/=n;for(var i,r=Math.atan2(-a,t),o=1/0,s=-1,l=0;l<this._indicatorAxes.length;l++){var c=this._indicatorAxes[l],d=Math.abs(r-c.angle);d<o&&(i=c,s=l,o=d)}return[s,+(i&&i.coordToData(n))]},u.prototype.resize=function(e,t){var a=e.get("center"),i=t.getWidth(),r=t.getHeight(),s=Math.min(i,r)/2;this.cx=o.parsePercent(a[0],i),this.cy=o.parsePercent(a[1],r),this.startAngle=e.get("startAngle")*Math.PI/180;var l=e.get("radius");"string"!==typeof l&&"number"!==typeof l||(l=[0,l]),this.r0=o.parsePercent(l[0],s),this.r=o.parsePercent(l[1],s),n.each(this._indicatorAxes,function(e,t){e.setExtent(this.r0,this.r);var a=this.startAngle+t*Math.PI*2/this._indicatorAxes.length;a=Math.atan2(Math.sin(a),Math.cos(a)),e.angle=a},this)},u.prototype.update=function(e,t){var a=this._indicatorAxes,i=this._model;n.each(a,function(e){e.scale.setExtent(1/0,-1/0)}),e.eachSeriesByType("radar",function(t,r){if("radar"===t.get("coordinateSystem")&&e.getComponent("radar",t.get("radarIndex"))===i){var o=t.getData();n.each(a,function(e){e.scale.unionExtentFromData(o,o.mapDimension(e.dim))})}},this);var r=i.get("splitNumber");function s(e){var t=Math.pow(10,Math.floor(Math.log(e)/Math.LN10)),a=e/t;return 2===a?a=5:a*=2,a*t}n.each(a,function(e,t){var a=l(e.scale,e.model);c(e.scale,e.model);var n=e.model,i=e.scale,d=n.getMin(),u=n.getMax(),h=i.getInterval();if(null!=d&&null!=u)i.setExtent(+d,+u),i.setInterval((u-d)/r);else if(null!=d){var p;do{p=d+h*r,i.setExtent(+d,p),i.setInterval(h),h=s(h)}while(p<a[1]&&isFinite(p)&&isFinite(a[1]))}else if(null!=u){var m;do{m=u-h*r,i.setExtent(m,+u),i.setInterval(h),h=s(h)}while(m>a[0]&&isFinite(m)&&isFinite(a[0]))}else{var f=i.getTicks().length-1;f>r&&(h=s(h));var g=Math.round((a[0]+a[1])/2/h)*h,v=Math.round(r/2);i.setExtent(o.round(g-v*h),o.round(g+(r-v)*h)),i.setInterval(h)}})},u.dimensions=[],u.create=function(e,t){var a=[];return e.eachComponent("radar",function(n){var i=new u(n,e,t);a.push(i),n.coordinateSystem=i}),e.eachSeriesByType("radar",function(e){"radar"===e.get("coordinateSystem")&&(e.coordinateSystem=a[e.get("radarIndex")||0])}),a},d.register("radar",u);var h=u;e.exports=h},5522:function(e,t,a){a("23e0"),a("1748"),a("6c12")},"6c12":function(e,t,a){var n=a("4e08"),i=(n.__DEV__,a("3eba")),r=a("6d8b"),o=a("fab22"),s=a("2306"),l=["axisLine","axisTickLabel","axisName"],c=i.extendComponentView({type:"radar",render:function(e,t,a){var n=this.group;n.removeAll(),this._buildAxes(e),this._buildSplitLineAndArea(e)},_buildAxes:function(e){var t=e.coordinateSystem,a=t.getIndicatorAxes(),n=r.map(a,function(e){var a=new o(e.model,{position:[t.cx,t.cy],rotation:e.angle,labelDirection:-1,tickDirection:-1,nameDirection:1});return a});r.each(n,function(e){r.each(l,e.add,e),this.group.add(e.getGroup())},this)},_buildSplitLineAndArea:function(e){var t=e.coordinateSystem,a=t.getIndicatorAxes();if(a.length){var n=e.get("shape"),i=e.getModel("splitLine"),o=e.getModel("splitArea"),l=i.getModel("lineStyle"),c=o.getModel("areaStyle"),d=i.get("show"),u=o.get("show"),h=l.get("color"),p=c.get("color");h=r.isArray(h)?h:[h],p=r.isArray(p)?p:[p];var m=[],f=[];if("circle"===n)for(var g=a[0].getTicksCoords(),v=t.cx,y=t.cy,x=0;x<g.length;x++){if(d){var b=P(m,h,x);m[b].push(new s.Circle({shape:{cx:v,cy:y,r:g[x].coord}}))}if(u&&x<g.length-1){b=P(f,p,x);f[b].push(new s.Ring({shape:{cx:v,cy:y,r0:g[x].coord,r:g[x+1].coord}}))}}else{var _,S=r.map(a,function(e,a){var n=e.getTicksCoords();return _=null==_?n.length-1:Math.min(n.length-1,_),r.map(n,function(e){return t.coordToPoint(e.coord,a)})}),w=[];for(x=0;x<=_;x++){for(var A=[],I=0;I<a.length;I++)A.push(S[I][x]);if(A[0]&&A.push(A[0].slice()),d){b=P(m,h,x);m[b].push(new s.Polyline({shape:{points:A}}))}if(u&&w){b=P(f,p,x-1);f[b].push(new s.Polygon({shape:{points:A.concat(w)}}))}w=A.slice().reverse()}}var M=l.getLineStyle(),D=c.getAreaStyle();r.each(f,function(e,t){this.group.add(s.mergePath(e,{style:r.defaults({stroke:"none",fill:p[t%p.length]},D),silent:!0}))},this),r.each(m,function(e,t){this.group.add(s.mergePath(e,{style:r.defaults({fill:"none",stroke:h[t%h.length]},M),silent:!0}))},this)}function P(e,t,a){var n=a%t.length;return e[n]=e[n]||[],n}}});e.exports=c},7887:function(e,t,a){var n=a("6d8b"),i=a("84ce");function r(e,t,a){i.call(this,e,t,a),this.type="value",this.angle=0,this.name="",this.model}n.inherits(r,i);var o=r;e.exports=o},7891:function(e,t,a){var n=a("6d8b");function i(e){var t=e.polar;if(t){n.isArray(t)||(t=[t]);var a=[];n.each(t,function(t,i){t.indicator?(t.type&&!t.shape&&(t.shape=t.type),e.radar=e.radar||[],n.isArray(e.radar)||(e.radar=[e.radar]),e.radar.push(t)):a.push(t)}),e.polar=a}n.each(e.series,function(e){e&&"radar"===e.type&&e.polarIndex&&(e.radarIndex=e.polarIndex)})}e.exports=i},"870e":function(e,t,a){var n=a("6d8b");function i(e){e.eachSeriesByType("radar",function(e){var t=e.getData(),a=[],i=e.coordinateSystem;if(i){var s=i.getIndicatorAxes();n.each(s,function(e,n){t.each(t.mapDimension(s[n].dim),function(e,t){a[t]=a[t]||[];var s=i.dataToPoint(e,n);a[t][n]=r(s)?s:o(i)})}),t.each(function(e){var s=n.find(a[e],function(e){return r(e)})||o(i);a[e].push(s.slice()),t.setItemLayout(e,a[e])})}})}function r(e){return!isNaN(e[0])&&!isNaN(e[1])}function o(e){return[e.cx,e.cy]}e.exports=i},"8deb":function(e,t,a){var n=a("3eba");a("5522"),a("a016"),a("1466");var i=a("98e7"),r=a("7f96"),o=a("870e"),s=a("d3f47"),l=a("7891");n.registerVisual(i("radar")),n.registerVisual(r("radar","circle")),n.registerLayout(o),n.registerProcessor(s("radar")),n.registerPreprocessor(l)},"8deb8":function(e,t,a){"use strict";var n=a("ab8f"),i=a.n(n);i.a},a016:function(e,t,a){var n=a("4f85"),i=a("e46b"),r=a("6d8b"),o=a("eda2"),s=o.encodeHTML,l=n.extend({type:"series.radar",dependencies:["radar"],init:function(e){l.superApply(this,"init",arguments),this.legendDataProvider=function(){return this.getRawData()}},getInitialData:function(e,t){return i(this,{generateCoord:"indicator_",generateCoordCount:1/0})},formatTooltip:function(e){var t=this.getData(),a=this.coordinateSystem,n=a.getIndicatorAxes(),i=this.getData().getName(e);return s(""===i?this.name:i)+"<br/>"+r.map(n,function(a,n){var i=t.get(t.mapDimension(a.dim),e);return s(a.name+" : "+i)}).join("<br />")},defaultOption:{zlevel:0,z:2,coordinateSystem:"radar",legendHoverLink:!0,radarIndex:0,lineStyle:{width:2,type:"solid"},label:{position:"top"},symbol:"emptyCircle",symbolSize:4}}),c=l;e.exports=c},ab8f:function(e,t,a){},cf7b:function(e,t,a){"use strict";function n(e){return e&&"object"===typeof e&&"default"in e?e["default"]:e}var i=a("89d6"),r=a("6f0c");a("8deb");var o=n(a("6521"));function s(e,t,a){var n=e.map(function(e){return e[t]});return{data:n,formatter:function(e){return null!=a[e]?a[e]:e}}}function l(e,t,a){var n=[],o=[];return t.indicator.map(function(t,a){n[a]=e[t.name],o[a]=t.name}),{formatter:function(e){var t=[];return t.push(i.itemPoint(e.color)),t.push(e.name+"<br />"),e.data.value.forEach(function(e,i){t.push(o[i]+": "),t.push(r.getFormated(e,n[i],a)+"<br />")}),t.join("")}}}function c(e,t,a){var n={indicator:[],shape:"circle",splitNumber:5},i={};return e.forEach(function(e){t.forEach(function(t){var n=null!=a[t]?a[t]:t;i[n]?i[n].push(e[t]):i[n]=[e[t]]})}),n.indicator=Object.keys(i).map(function(e){return{name:e,max:Math.max.apply(null,i[e])}}),n}function d(e){var t=e.rows,a=e.dimension,n=e.metrics,i=e.radar,r=e.label,o=e.itemStyle,s=e.lineStyle,l=e.labelMap,c=e.areaStyle,d={};i.indicator.forEach(function(e,t){var a=e.name;d[a]=t});var u=t.map(function(e){var t={value:[],name:e[a]};return Object.keys(e).forEach(function(a){if(~n.indexOf(a)){var i=null!=l[a]?d[l[a]]:d[a];t.value[i]=e[a]}}),t}),h={name:a,type:"radar",data:u};return r&&(h.label=r),o&&(h.itemStyle=o),s&&(h.lineStyle=s),c&&(h.areaStyle=c),[h]}var u=function(e,t,a,n){var i=a.dataType,r=void 0===i?{}:i,o=a.legendName,u=void 0===o?{}:o,h=a.labelMap,p=void 0===h?{}:h,m=a.dimension,f=void 0===m?e[0]:m,g=a.digit,v=void 0===g?2:g,y=a.label,x=a.itemStyle,b=a.lineStyle,_=a.areaStyle,S=n.tooltipVisible,w=n.legendVisible,A=e.slice();a.metrics?A=a.metrics:A.splice(e.indexOf(f),1);var I=w&&s(t,f,u),M=c(t,A,p),D=S&&l(r,M,v),P=d({rows:t,dimension:f,metrics:A,radar:M,label:y,itemStyle:x,lineStyle:b,labelMap:p,areaStyle:_}),k={legend:I,tooltip:D,radar:M,series:P};return k},h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},p=h({},o,{name:"VeRadar",data:function(){return this.chartHandler=u,{}}});e.exports=p},f9e9:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("shop-header"),a("div",[a("a-row",[a("a-col",{attrs:{xl:16,lg:24,md:24,sm:24,xs:24}},[a("a-card",{attrs:{title:"店铺数据详情"}},[a("div",{staticClass:"shop_data"},[a("a-row",[a("a-col",{attrs:{span:8}},[a("div",[e._v("访问量")]),a("div",{staticClass:"heading"},[e._v(e._s(e.total_view_num_week))])]),a("a-col",{attrs:{span:8}},[a("div",[e._v("意向用户数")]),a("div",{staticClass:"heading"},[e._v(e._s(e.intention_user_num_week))])]),a("a-col",{attrs:{span:8}},[a("div",[e._v("访问人数")]),a("div",{staticClass:"heading"},[e._v(e._s(e.total_user_count_week))])])],1)],1),a("div",{staticStyle:{width:"80%",margin:"20px"}},[a("ve-line",{attrs:{data:e.shopData,settings:e.shopDataSettings}})],1)])],1),a("a-col",{staticStyle:{padding:"0 12px"},attrs:{xl:8,lg:24,md:24,sm:24,xs:24}},[a("a-card",{staticStyle:{"margin-bottom":"24px"},attrs:{title:"商家健康指数",bordered:!1,"body-style":{padding:0}}},[a("div",{staticStyle:{"min-height":"400px"}},[a("ve-radar",{attrs:{data:e.ShopHealthData}})],1)])],1)],1)],1)],1)},i=[],r=a("7e21"),o=a("680a"),s=a("c16f"),l=a("2af9"),c=a("c3da"),d=a.n(c),u=a("cf7b"),h=a.n(u),p=a("d4f3"),m=s["a"].Item,f={stack:{"用户":["访问用户","下单用户"]},area:!0},g={name:"shopInfo",components:{PageView:o["b"],DetailList:s["a"],DetailListItem:m,Radar:l["m"],VeLine:d.a,shopHeader:r["a"],veRadar:h.a},data:function(){return this.shopDataSettings=f,{chartdata:{},total_view_num_week:"",intention_user_num_week:"",total_user_count_week:"",shopData:{},ShopHealthData:{},num:0,queryParam:{}}},methods:{shopDetailChart:function(){var e=this;Object(p["a"])(this.queryParam).then(function(t){e.total_user_count_week=t.data.total_user_count_week,e.total_view_num_week=t.data.total_view_num_week,e.intention_user_num_week=t.data.intention_user_num_week;var a=t.data.table;e.chartData(a)}),Object(p["c"])(this.queryParam).then(function(t){e.healthChart(t)})},chartData:function(e){var t,a={columns:["日期","访问量"],rows:[]};for(t in e)a.rows.push({"日期":t,"访问量":e[t]});this.shopData=a},healthChart:function(e){var t={columns:["店铺","店铺活跃","意向","贡献","热度","口碑"],rows:[]};t.rows.push({"店铺":"当前店铺","店铺活跃":e.data.store.active_degree,"热度":e.data.store.hot_degree,"贡献":e.data.store.contribute_degree,"意向":e.data.store.purpose_degree,"口碑":e.data.store.public_praise},{"店铺":"店铺行业","店铺活跃":e.data.industry.active_degree,"热度":e.data.industry.hot_degree,"贡献":e.data.industry.contribute_degree,"意向":e.data.industry.purpose_degree,"口碑":e.data.industry.public_praise}),this.ShopHealthData=t}},mounted:function(){},created:function(){this.num=this.$route.params.hbh_store_id,this.queryParam={hbh_store_id:this.num},this.shopDetailChart()}},v=g,y=(a("8deb8"),a("2877")),x=Object(y["a"])(v,n,i,!1,null,"b242faa0",null);t["default"]=x.exports}}]);