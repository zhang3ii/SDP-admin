(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c8bc6"],{"55c3":function(t,e,n){"use strict";n.r(e);n("7514");var i,o,r=n("c4ef"),a=n("160c"),c=n("fe2b"),s=n("a6b6"),l=n("ac0d"),h=s["a"].Meta,d={components:{AListItem:s["a"],AList:c["b"],ASwitch:a["a"],Meta:h},mixins:[l["b"]],data:function(){return{}},filters:{themeFilter:function(t){var e={dark:"暗色",light:"白色"};return e[t]}},methods:{colorFilter:function(t){var e=r["a"].find(function(e){return e.color===t});return e&&e.key},onChange:function(t){t?this.$store.dispatch("ToggleTheme","dark"):this.$store.dispatch("ToggleTheme","light")}},render:function(){var t=arguments[0];return t(c["b"],{attrs:{itemLayout:"horizontal"}},[t(s["a"],[t(h,[t("a",{slot:"title"},["风格配色"]),t("span",{slot:"description"},["整体风格配色设置"])]),t("div",{slot:"actions"},[t(a["a"],{attrs:{checkedChildren:"暗色",unCheckedChildren:"白色",defaultChecked:"dark"===this.navTheme},on:{change:this.onChange}})])]),t(s["a"],[t(h,[t("a",{slot:"title"},["主题色"]),t("span",{slot:"description"},["页面风格配色： ",t("a",{domProps:{innerHTML:this.colorFilter(this.primaryColor)}})])])])])}},u=d,p=n("2877"),f=Object(p["a"])(u,i,o,!1,null,"b8c3fd6c",null);e["default"]=f.exports}}]);