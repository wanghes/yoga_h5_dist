(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-191150ce"],{"2ac8":function(t,e,a){"use strict";a("df7f")},"5007d":function(t,e,a){"use strict";a("84ee")},"50d0":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap detail_box"},[a("div",{staticClass:"top"},[a("img",{staticClass:"theme",attrs:{src:t.detail.course_cover,alt:""}}),0!=t.detail.price&&!t.buyStatus&&t.buyQueryStatus?a("div",{staticClass:"bot_info"},[t.detail.cu_status?a("div",{staticClass:"left"},[a("span",[a("i",{staticClass:"bi"},[t._v("￥")]),t._v(t._s(t.detail.cu_price&&t.detail.cu_price.toFixed(2)))]),a("div",{staticClass:"old_p"},[a("del",[t._v("￥"+t._s(t.detail.price&&t.detail.price.toFixed(2)))]),a("span",[t._v("限时特价")])])]):a("div",{staticClass:"left"},[a("span",[a("i",{staticClass:"bi"},[t._v("￥")]),t._v(t._s(t.detail.price&&t.detail.price.toFixed(2)))])]),t.detail.cu_status?a("div",{staticClass:"right"},[a("span",[t._v("限时特价")])]):t._e()]):t._e(),a("div",{staticClass:"title"},[a("span",[t._v(t._s(t.detail.course_name))])]),a("div",{staticClass:"t_info"},[a("span",[a("van-icon",{attrs:{name:"points"}}),a("span",[t._v("已开课"+t._s(t.detail.has_count)+"节/共"+t._s(t.detail.course_num)+"节课")])],1),a("span",[a("van-icon",{attrs:{name:"replay"}}),a("span",[t._v("支持重播")])],1)])]),a("div",{staticClass:"content"},[a("van-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("van-tab",{attrs:{title:"课程介绍",name:"a"}},[a("div",{domProps:{innerHTML:t._s(t.detail.course_content)}})]),a("van-tab",{attrs:{title:"课程目录",name:"b"}},[a("h3",{staticClass:"class_title"},[a("span",[t._v("课程列表")]),a("span",[t._v("共有"+t._s(t.detail.course_num)+"节课")])]),a("div",{staticClass:"class_list"},t._l(t.list,(function(e,s){return a("div",{key:e.id,staticClass:"item"},[a("div",{staticClass:"item_top"},[1==e.status?a("div",{staticClass:"first"},[a("span",s<10?[t._v(t._s(s+1))]:[t._v(t._s(s+1)+"、")]),a("span",{staticClass:"text"},[t._v(t._s(e.course_name))])]):a("div",{staticClass:"first first2"},[a("span",s<10?[t._v(t._s(s+1))]:[t._v(t._s(s+1)+"、")]),a("span",{staticClass:"text"},[t._v(t._s(e.course_name))])]),a("div",{staticClass:"status"},[1==e.status?a("van-tag",{attrs:{type:"success"}},[t._v("已完课")]):a("van-tag",{attrs:{type:"default"}},[t._v("待开课")]),1==e.open?a("em",[t._v("试听")]):t._e()],1)]),a("div",{staticClass:"bot"},[a("span",[t._v(t._s(e.create_time&&e.create_time.slice(0,10)))])])])})),0)]),a("van-tab",{attrs:{title:"用户评价",name:"c"}})],1),t.buyQueryStatus&&!t.buyStatus?a("div",{staticClass:"btn"},[t.detail.cu_status?a("van-button",{attrs:{block:"",type:"info","native-type":"submit"},on:{click:t.sSubmit}},[a("img",{staticClass:"huo",attrs:{src:t.huo,alt:""}}),a("span",[t._v("立即抢购")]),0==t.detail.cu_price?a("span",{staticClass:"money"},[t._v("免费")]):a("span",{staticClass:"money"},[a("em",{staticClass:"bi"},[t._v("￥")]),t._v(t._s(t.detail.cu_price&&t.detail.cu_price.toFixed(2)))])]):a("van-button",{attrs:{block:"",type:"info","native-type":"submit"},on:{click:t.sSubmit}},[a("img",{staticClass:"huo",attrs:{src:t.huo,alt:""}}),a("span",[t._v("立即抢购")]),0==t.detail.price?a("span",{staticClass:"money"},[t._v("免费")]):a("span",{staticClass:"money"},[a("em",{staticClass:"bi"},[t._v("￥")]),t._v(t._s(t.detail.price&&t.detail.price.toFixed(2)))])])],1):a("div",{staticClass:"btn"},[a("van-button",{attrs:{block:"",type:"info","native-type":"submit"},on:{click:t.gotoClass}},[a("span",[t._v("进入课程")])])],1)],1)])},i=[],n=a("15f8"),r=a("cd6d"),c=(a("9896"),a("c34a"),a("6a61"),a("ba75")),u=a.n(c),o=a("ff2c"),l=a.n(o),d=a("ed08"),_=a("3b3c"),p=a("7e70"),v=a("444f"),m={data:function(){return{ke:u.a,huo:l.a,detail:{},list:[],activeName:"a",userId:d["a"].get("user_id"),buyStatus:!1,buyQueryStatus:!1}},mounted:function(){var t=this.$route.params.id;t?(this.fetchData(t),this.getSeriesListItem(t),this.executeWeixin()):this.$toast("参数缺失")},methods:{queryBuyStatus:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.detail.id,s=t.userId,e.next=4,_.query_series_buy_status({course_id:a,member_id:s});case 4:i=e.sent,200==i.code&&(t.buyStatus=i.data,t.buyQueryStatus=!0);case 6:case"end":return e.stop()}}),e)})))()},executeWeixin:function(){return Object(r["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p.jssdk_config({url:location.href.split("#")[0]});case 2:e=t.sent,200==e.code&&(a=e.data,v.error((function(t){console.log(t)})),v.config(Object(n["a"])(Object(n["a"])({},a),{},{debug:!1})));case 4:case"end":return t.stop()}}),t)})))()},fetchData:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,_.query_series_detail({id:t});case 2:s=a.sent,200==s.code&&(e.detail=s.data,e.queryBuyStatus());case 4:case"end":return a.stop()}}),a)})))()},getSeriesListItem:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,_.query_series_by_pid({pid:t});case 2:s=a.sent,200==s.code&&(e.list=s.data);case 4:case"end":return a.stop()}}),a)})))()},gotoClass:function(){var t=this.detail.id,e=this.list.length?this.list[0].id:"";e?this.$router.push({path:"/online/video/".concat(e),query:{type:2,pid:t}}):this.$toast("id参数缺失")},sSubmit:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,s,i,c,u,o,l,_,m,f,b;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t,s=d["a"].get("user_openid"),i=t.detail.course_name,c=t.detail.id,u=t.userId,o=1,l="【线上课程】购买线上课程",_="【线上课程】购买课程-".concat(t.detail.course_name),m=t.detail.price,1==t.detail.cu_status&&(m=t.detail.cu_price),s){e.next=14;break}return t.$toast("获取用户信息失败"),t.$router.push({path:"/login"}),e.abrupt("return");case 14:if(0!=m){e.next=20;break}return e.next=17,p.pay_free_online_Ok({name:i,course_type:1,course_id:c,member_id:u,amount:m,remark:_});case 17:return f=e.sent,200==f.code&&(a.$notify({message:f.msg,color:"#ffffff",background:"#00B76F"}),a.fetchData(c)),e.abrupt("return");case 20:return e.next=22,p.pay({openid:s,total_fee:Math.ceil(100*m)});case 22:b=e.sent,200==b.code?v.ready(Object(r["a"])(regeneratorRuntime.mark((function t(){var e,d,f;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=b.data,d=e.options,f=e.extra,d.success=Object(r["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p.pay_online_Ok(Object(n["a"])(Object(n["a"])({},f),{},{name:i,course_type:2,course_id:c,sell_type_name:l,openid:s,member_id:u,pay_type:o,amount:m,remark:_}));case 2:e=t.sent,200==e.code&&(a.$notify({message:e.msg,color:"#ffffff",background:"#00B76F"}),a.$router.push({path:"/pay/online_success"}));case 4:case"end":return t.stop()}}),t)}))),d.cancel=function(){console.log("已经取消")},d.fail=function(){console.log("支付失败")},v.chooseWXPay(d);case 7:case"end":return t.stop()}}),t)})))):console.log(b);case 24:case"end":return e.stop()}}),e)})))()}}},f=m,b=(a("2ac8"),a("5007d"),a("4ac2")),h=Object(b["a"])(f,s,i,!1,null,"7d977f84",null);e["default"]=h.exports},"84ee":function(t,e,a){},df7f:function(t,e,a){}}]);
//# sourceMappingURL=chunk-191150ce.d9f67899.js.map