webpackJsonp([2],{"3cXf":function(e,t,n){e.exports={default:n("VWiu"),__esModule:!0}},QzEB:function(e,t){},VWiu:function(e,t,n){var r=n("DH3n"),a=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return a.stringify.apply(a,arguments)}},hUSH:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.menuCreate=function(e){return Object(r.a)({url:"/wx/menu/create",method:"post",data:e})},t.getMenu=function(e){return Object(r.a)({url:"/wx/menu/get",method:"post",data:e})};var r=n("vLgD")},vFYK:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("lC5x"),a=n.n(r),u=n("3cXf"),o=n.n(u),s=n("J0Oq"),c=n.n(s),i=n("hUSH"),f={data:function(){return{form:{menus:""}}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var e=this;return c()(a.a.mark(function t(){var n,r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.getMenu();case 2:200==(n=t.sent).code&&(r=n.data.menu,e.form.menus=o()(r));case 4:case"end":return t.stop()}},t,e)}))()},onSubmit:function(){var e=this;return c()(a.a.mark(function t(){var n,r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.form.menus,t.next=3,i.menuCreate({menus:n});case 3:200==(r=t.sent).code&&console.log(r);case 5:case"end":return t.stop()}},t,e)}))()}}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrap"},[n("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[n("el-form-item",{attrs:{"label-width":"180",label:"微信菜单配置"}},[n("el-input",{attrs:{type:"textarea",rows:30},model:{value:e.form.menus,callback:function(t){e.$set(e.form,"menus",t)},expression:"form.menus"}})],1),e._v(" "),n("el-form-item",{attrs:{"label-width":"180"}},[n("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("保存并修改")])],1)],1)],1)},staticRenderFns:[]};var m=n("C7Lr")(f,l,!1,function(e){n("QzEB")},"data-v-4c4253f2",null);t.default=m.exports}});