(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-220e6b0a"],{"54f7":function(e,t,s){"use strict";s("64fb")},"64fb":function(e,t,s){},"71a8":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"wrap login_box"},[s("div",{staticClass:"tab_menu"},[s("span",{class:e.tab_02_show?"active":"",on:{click:function(t){return e.tabClick(2)}}},[e._v("短信登录")]),s("span",{class:e.tab_01_show?"active":"",on:{click:function(t){return e.tabClick(1)}}},[e._v("密码登录")])]),s("div",{staticClass:"tab_content"},[e.tab_01_show?s("div",{staticClass:"tab_01"},[s("div",{staticClass:"form"},[s("div",{staticClass:"form_item"},[s("span",{staticClass:"pre"},[e._v("+86 >")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{placeholder:"请填写用户手机",type:"text"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})]),s("div",{staticClass:"form_item"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{placeholder:"请填写密码",type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e.init_password?s("van-notice-bar",{attrs:{wrapable:""}},[e._v("尊敬的用户您的初始密码是："+e._s(e.init_password)+"，请登录后尽快修改您的密码")]):e._e(),s("div",{staticStyle:{"margin-top":"50px"}},[s("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"},on:{click:e.onSubmit}},[e._v("提交")])],1)],1)]):e._e(),e.tab_02_show?s("div",{staticClass:"tab_02"},[s("div",{staticClass:"form"},[s("div",{staticClass:"form_item"},[s("span",{staticClass:"pre"},[e._v("+86 >")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{placeholder:"请填写用户手机",type:"text"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})]),s("div",{staticClass:"form_item"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.vcode,expression:"vcode"}],attrs:{placeholder:"请输入验证码",type:"text"},domProps:{value:e.vcode},on:{input:function(t){t.target.composing||(e.vcode=t.target.value)}}}),e.sending?s("span",{staticClass:"last"},[e._v("还剩 "+e._s(e.seconds)+" 秒")]):s("span",{staticClass:"last",on:{click:e.fetchVcode}},[e._v("获取验证码")])]),s("div",{staticStyle:{"margin-top":"50px"}},[s("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"},on:{click:e.smsSubmit}},[e._v("提交")])],1)])]):e._e()]),s("van-divider"),s("van-button",{attrs:{round:"",block:""},on:{click:e.toHome}},[e._v("随便看看")]),e.tab_01_show?s("div",{staticClass:"bot_f"},[s("span",{on:{click:e.toForget}},[e._v("忘记密码")]),s("span",{on:{click:e.toRegister}},[e._v("立即注册")])]):e._e(),e.tab_02_show?s("div",{staticClass:"bot_f"},[s("span",{on:{click:e.toRegister}},[e._v("立即注册")])]):e._e()],1)},n=[],o=s("cd6d"),i=(s("6a61"),s("389c"),s("9896"),s("f416"),s("ed08")),r=s("c24f"),c={data:function(){return{phone:"",password:"",vcode:"",verification_key:"",tab_01_show:!0,tab_02_show:!1,init_password:"",sending:!1,seconds:60}},mounted:function(){var e=this.$route.query.init_password;e&&(this.init_password=e),this.verification_key=i["a"].get("verification_key")},methods:{onSubmit:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var s,a,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=e.phone,a=e.password,t.next=4,r.login({phone:s,password:a});case 4:n=t.sent,200==n.code&&(o=n.data,i["a"].set("user_id",o.user_id),i["a"].set("user_token",o.token),i["a"].set("user_phone",o.phone),i["a"].set("user_head",o.head),i["a"].set("user_name",o.name),i["a"].set("user_openid",o.openid),window.AuthType="user",e.$router.push({path:"/"}));case 6:case"end":return t.stop()}}),t)})))()},smsSubmit:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var s,a,n,o,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=e.phone,a=e.vcode,n=e.verification_key,t.next=5,r.smsLogin({phone:s,vcode:a,verification_key:n});case 5:o=t.sent,200==o.code?(c=o.data,i["a"].set("user_id",c.user_id),i["a"].set("user_token",c.token),i["a"].set("user_phone",c.phone),i["a"].set("user_head",c.head),i["a"].set("user_openid",c.openid),i["a"].set("user_name",c.name),e.$router.push({path:"/"})):1e3==o.code&&e.$router.push({path:"/register"});case 7:case"end":return t.stop()}}),t)})))()},toHome:function(){this.$router.replace({path:"/"})},toForget:function(){this.$router.push({path:"/forget"})},fetchVcode:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(s=e.phone,s){t.next=4;break}return e.$notify({message:"请填写手机号",color:"#ffffff"}),t.abrupt("return");case 4:return e.startReadSeconds(),t.next=7,r.getVcode({phone:s});case 7:a=t.sent,200==a.code&&(i["a"].set("verification_key",a.data.verification_key),e.verification_key=a.data.verification_key);case 9:case"end":return t.stop()}}),t)})))()},startReadSeconds:function(){var e=this;this.sending=!0;var t=setInterval((function(){if(0==e.seconds)return clearInterval(t),t=null,e.sending=!1,void(e.seconds=60);e.seconds=e.seconds-1}),1e3)},tabClick:function(e){1==e?(this.tab_01_show=!0,this.tab_02_show=!1):(this.tab_01_show=!1,this.tab_02_show=!0)},toRegister:function(){this.$router.push({path:"/register"})}}},u=c,p=(s("939a"),s("54f7"),s("4ac2")),d=Object(p["a"])(u,a,n,!1,null,"31c21cfa",null);t["default"]=d.exports},"939a":function(e,t,s){"use strict";s("9423")},9423:function(e,t,s){}}]);
//# sourceMappingURL=chunk-220e6b0a.32504f5e.js.map