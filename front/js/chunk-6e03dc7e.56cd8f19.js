(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e03dc7e"],{"1a2a":function(t,a,s){"use strict";s("b598")},"559b":function(t,a,s){"use strict";s.r(a);var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"wrap"},[t.list.length>0?s("div",{staticClass:"list"},t._l(t.list,(function(a){return s("div",{key:a.id,staticClass:"item",on:{click:function(s){return t.jump(a.id)}}},[s("div",{staticClass:"left"},[s("img",{staticClass:"left",attrs:{src:a.cover,alt:""}})]),s("div",{staticClass:"right"},[s("h3",[t._v(t._s(a.name))]),s("div",{staticClass:"info"},[t._v(t._s(a.intro))]),1==a.status?s("div",{staticClass:"bot ing"},[s("span",{staticClass:"status"},[t._v("进行中")]),s("span",{staticClass:"label"},[t._v("低至"+t._s(a.price&&a.now_price.toFixed(2))+"元")])]):s("div",{staticClass:"bot"},[s("span",{staticClass:"status"},[t._v("已结束")]),s("span",{staticClass:"label"},[t._v("低至"+t._s(a.price&&a.now_price.toFixed(2))+"元")])])])])})),0):s("div",[s("van-empty",{attrs:{description:"还没有数据"}})],1)])},e=[],i=s("cd6d"),r=(s("6a61"),s("d437")),c={data:function(){return{list:[]}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,r.allList();case 2:s=a.sent,200==s.code&&(t.list=s.data);case 4:case"end":return a.stop()}}),a)})))()},jump:function(t){this.$router.push({path:"/tuangou/"+t})}}},u=c,o=(s("1a2a"),s("4ac2")),l=Object(o["a"])(u,n,e,!1,null,"705c67ce",null);a["default"]=l.exports},b598:function(t,a,s){},d437:function(t,a,s){"use strict";s.r(a),s.d(a,"allList",(function(){return e})),s.d(a,"query",(function(){return i})),s.d(a,"listByCardId",(function(){return r}));var n=s("b775");function e(t){return Object(n["a"])({url:"/index/tuangou/all",method:"get",params:t})}function i(t){return Object(n["a"])({url:"/index/tuangou/query",method:"get",params:t})}function r(t){return Object(n["a"])({url:"/index/tuangou/list_by_card_id",method:"get",params:t})}}}]);
//# sourceMappingURL=chunk-6e03dc7e.56cd8f19.js.map