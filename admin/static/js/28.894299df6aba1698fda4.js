webpackJsonp([28],{"5ME5":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("lC5x"),r=n.n(a),o=n("J0Oq"),u=n.n(o),s=n("QmSG"),c=n("DEcC"),i={name:"lookMode",data:function(){return{value:!1,look:0,src:""}},mounted:function(){this.getLook()},methods:{getLook:function(){var e=this;return u()(r.a.mark(function t(){var n;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.queryLook();case 2:200==(n=t.sent).code&&(e.look=n.data.is_look,1==e.look?(e.value=!0,e.src=s.a+"/Tools/getQrCode?venues="+window.venues):e.value=!1);case 4:case"end":return t.stop()}},t,e)}))()},changeValue:function(e){var t=this;return u()(r.a.mark(function n(){var a;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.updateLook({is_look:e?1:0});case 2:200==(a=n.sent).code?(t.$message.success(a.msg),t.src=s.a+"/Tools/getQrCode?venues="+window.venues):t.$message.error(a.msg);case 4:case"end":return n.stop()}},n,t)}))()}}},d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrap"},[n("h3",[e._v("切换预览模式")]),e._v(" "),n("el-alert",{attrs:{title:"查看手机端后台管理，请务必关闭预览模式",type:"warning"}}),e._v(" "),n("el-divider"),e._v(" "),n("el-switch",{attrs:{"active-text":"开启预览","inactive-text":"关闭预览"},on:{change:e.changeValue},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),e._v(" "),n("el-divider"),e._v(" "),1==e.look?n("img",{attrs:{src:e.src}}):e._e()],1)},staticRenderFns:[]};var l=n("C7Lr")(i,d,!1,function(e){n("gXyG")},"data-v-2503be02",null);t.default=l.exports},DEcC:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.query=function(e){return Object(a.a)({url:"/admin/venues/query",method:"get",params:e})},t.add=function(e){return Object(a.a)({url:"/admin/venues/add",method:"post",data:e})},t.update=function(e){return Object(a.a)({url:"/admin/venues/edit",method:"put",data:e})},t.uploadAloneCover=function(e){return o.a.post(u.c+"/upload/venues",e,{headers:{"Content-Type":"multipart/form-data"}})},t.queryLook=function(e){return Object(a.a)({url:"/admin/manager/getlook",method:"get",params:e})},t.updateLook=function(e){return Object(a.a)({url:"/admin/manager/look",method:"put",data:e})};var a=n("vLgD"),r=n("I29D"),o=n.n(r),u=n("QmSG")},gXyG:function(e,t){}});