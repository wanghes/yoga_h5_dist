webpackJsonp([16],{M5xX:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r("lC5x"),a=r.n(i),n=r("J0Oq"),o=r.n(n),l=r("pIEA"),s=r.n(l),c=r("bzuE"),u=r("0xDb"),d=r("aSh4"),p=r("s067"),m={components:{VueUeditorWrap:s.a},data:function(){return{cover:p,ueConfig:{autoHeightEnabled:!1,initialFrameHeight:640,initialFrameWidth:"100%",autoFloatEnabled:!1,serverUrl:c.b+"/upload/ue_upload",UEDITOR_HOME_URL:"/static/UEditor/"},form:{name:"",if_online:1,cover:"",des:"",content:""},dialogVisible:!1,bundle:{id:"",price:1,online_price:1,num:1},prices:[]}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var e=this;return o()(a.a.mark(function t(){var r,i,n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$route.params.id,t.next=3,d.query({id:r});case 3:return i=t.sent,e.form=i.data,t.next=7,d.queryPrice({class_id:e.form.id});case 7:n=t.sent,e.prices=n.data;case 9:case"end":return t.stop()}},t,e)}))()},uploadSectionFile:function(e){var t=this;return o()(a.a.mark(function r(){var i,n,o;return a.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return i=e.file,(n=new FormData).append("file",i),r.next=5,d.uploadBankeCover(n);case 5:o=r.sent,t.form.cover=o.data.data.imagePath;case 7:case"end":return r.stop()}},r,t)}))()},doAddEditPrice:function(){var e=this,t=!1,r=this.bundle,i=r.price,a=r.online_price,n=r.num,o=r.id;o?t=!0:o=Object(u.d)(),n?i?a?(t?this.prices.forEach(function(t){t.id==o&&(t=e.bundle)}):this.prices.push({id:o,price:i,online_price:a,num:n}),this.bundle={id:"",price:1,online_price:1,num:1},this.dialogVisible=!1):this.$message.error("请填写在线售价"):this.$message.error("请填写店内售价"):this.$message.error("请填写课时数")},saveData:function(){var e=this;return o()(a.a.mark(function t(){var r,i,n,o,l,s,c,u,p;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.$route.params.id,i=e.form,n=i.cover,o=i.name,l=i.if_online,s=i.des,c=i.content,u=e.prices,r){t.next=6;break}return e.$message.error("class_id参数错误"),t.abrupt("return");case 6:if(o){t.next=10;break}e.$message.error("班课名称不能为空"),t.next=23;break;case 10:if(n){t.next=14;break}e.$message.error("班课项目图片不能为空"),t.next=23;break;case 14:if(u.length){t.next=18;break}e.$message.error("请填写售价信息"),t.next=23;break;case 18:return p={id:r,cover:n,name:o,if_online:l,des:s,content:c,prices:u},t.next=21,d.update(p);case 21:200==t.sent.code?(e.$store.dispatch("tagsView/delView",e.$route),e.$router.replace({path:"/offline/index",query:{name:"banke"}})):Message.error("数据保存失败");case 23:case"end":return t.stop()}},t,e)}))()},editPrice:function(e){var t=this;this.prices.forEach(function(r,i){r.id==e&&(t.bundle=r)}),this.dialogVisible=!0},deletePrice:function(e){var t="";this.prices.forEach(function(r,i){r.id==e&&(t=i)}),this.prices.splice(t,1)}}},f={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrap"},[r("el-form",{staticStyle:{"max-width":"1200px","padding-left":"30px"},attrs:{model:e.form,"label-position":"top"}},[r("el-form-item",{attrs:{required:"",label:"班课名称"}},[r("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"班课项目图片"}},[e.form.cover?r("img",{attrs:{src:e.form.cover}}):r("img",{attrs:{src:e.cover}}),e._v(" "),r("el-upload",{staticClass:"upload_box",attrs:{action:"fakeaction","show-file-list":!1,"auto-upload":!0,"http-request":e.uploadSectionFile}},[r("el-button",{attrs:{type:"danger"}},[e._v("点击上传")]),e._v(" "),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("建议尺寸800*500px，JPG、PNG、webp格式，图片小于5M。")])],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"是否支持在线购课"}},[r("el-radio-group",{model:{value:e.form.if_online,callback:function(t){e.$set(e.form,"if_online",t)},expression:"form.if_online"}},[r("el-radio",{attrs:{label:0}},[e._v("不支持")]),e._v(" "),r("el-radio",{attrs:{label:1}},[e._v("支持")])],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"是否支持在线购课"}},[r("el-table",{staticStyle:{width:"100%"},attrs:{border:"",size:"small",data:e.prices}},[r("el-table-column",{attrs:{prop:"num",label:"课时数"}}),e._v(" "),r("el-table-column",{attrs:{prop:"price",label:"店内价格（元）"}}),e._v(" "),r("el-table-column",{attrs:{prop:"online_price",label:"在线售价（元）"}}),e._v(" "),r("el-table-column",{attrs:{width:"180",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{size:"mini"},on:{click:function(r){return e.editPrice(t.row.id)}}},[e._v("修改")]),e._v(" "),r("el-button",{attrs:{size:"mini"},on:{click:function(r){return e.deletePrice(t.row.id)}}},[e._v("删除")])]}}])})],1),e._v(" "),r("el-button",{attrs:{size:"mini",type:"info"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("添加价格")])],1),e._v(" "),r("el-form-item",{attrs:{required:"",label:"一句话描述"}},[r("el-input",{model:{value:e.form.des,callback:function(t){e.$set(e.form,"des",t)},expression:"form.des"}})],1),e._v(" "),r("el-form-item",{attrs:{required:"",label:"详细介绍"}},[r("VueUeditorWrap",{staticClass:"UEditor",attrs:{config:e.ueConfig},model:{value:e.form.content,callback:function(t){e.$set(e.form,"content",t)},expression:"form.content"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.saveData}},[e._v("保 存 数 据")])],1)],1),e._v(" "),r("el-dialog",{attrs:{title:"添加已有单课",width:"20%",visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("el-form",{attrs:{model:e.bundle,"label-position":"top"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.bundle.id,expression:"bundle.id"}],attrs:{type:"hidden"},domProps:{value:e.bundle.id},on:{input:function(t){t.target.composing||e.$set(e.bundle,"id",t.target.value)}}}),e._v(" "),r("el-form-item",{attrs:{required:"",label:"课时数"}},[r("el-input-number",{attrs:{min:1,"controls-position":"right"},model:{value:e.bundle.num,callback:function(t){e.$set(e.bundle,"num",t)},expression:"bundle.num"}})],1),e._v(" "),r("el-form-item",{attrs:{required:"",label:"店内售价"}},[r("el-input-number",{attrs:{min:1,"controls-position":"right"},model:{value:e.bundle.price,callback:function(t){e.$set(e.bundle,"price",t)},expression:"bundle.price"}})],1),e._v(" "),r("el-form-item",{attrs:{required:"",label:"在线售价"}},[r("el-input-number",{attrs:{min:1,"controls-position":"right"},model:{value:e.bundle.online_price,callback:function(t){e.$set(e.bundle,"online_price",t)},expression:"bundle.online_price"}})],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.doAddEditPrice}},[e._v("保 存")])],1)],1)],1)},staticRenderFns:[]};var b=r("C7Lr")(m,f,!1,function(e){r("ifl6")},"data-v-04d51bad",null);t.default=b.exports},aSh4:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.list=function(e){return Object(i.a)({url:"/admin/classcourse/list",method:"get",params:e})},t.add=function(e){return Object(i.a)({url:"/admin/classcourse/add",method:"post",data:e})},t.update=function(e){return Object(i.a)({url:"/admin/classcourse/update",method:"put",data:e})},t.updateStatus=function(e){return Object(i.a)({url:"/admin/classcourse/status",method:"put",data:e})},t.query=function(e){return Object(i.a)({url:"/admin/classcourse/query",method:"get",params:e})},t.queryPrice=function(e){return Object(i.a)({url:"/admin/classcourse/price",method:"get",params:e})},t.uploadBankeCover=function(e){return n.a.post(o.c+"/upload/upload_banke_cover",e,{headers:{"Content-Type":"multipart/form-data"}})};var i=r("vLgD"),a=r("I29D"),n=r.n(a),o=r("bzuE")},ifl6:function(e,t){}});