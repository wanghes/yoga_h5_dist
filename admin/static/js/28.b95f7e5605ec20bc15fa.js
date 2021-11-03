webpackJsonp([28],{ASIB:function(e,t){},DEcC:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.query=function(e){return Object(a.a)({url:"/admin/venues/query",method:"get",params:e})},t.add=function(e){return Object(a.a)({url:"/admin/venues/add",method:"post",data:e})},t.update=function(e){return Object(a.a)({url:"/admin/venues/edit",method:"put",data:e})},t.uploadAloneCover=function(e){return s.a.post(o.c+"/upload/venues",e,{headers:{"Content-Type":"multipart/form-data"}})},t.queryLook=function(e){return Object(a.a)({url:"/admin/manager/getlook",method:"get",params:e})},t.updateLook=function(e){return Object(a.a)({url:"/admin/manager/look",method:"put",data:e})};var a=r("vLgD"),n=r("I29D"),s=r.n(n),o=r("QmSG")},kiOM:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("lC5x"),n=r.n(a),s=r("J0Oq"),o=r.n(s),i=r("pIEA"),u=r.n(i),c=r("QmSG"),l=r("DEcC"),d={components:{VueUeditorWrap:u.a},data:function(){return{cover:"",checkedEnvs:[],envs:[{id:1,name:"沙发座"},{id:2,name:"免费WIFI"},{id:3,name:"有停车场"},{id:4,name:"储物柜"},{id:5,name:"更衣室"},{id:6,name:"淋浴房"}],form:{name:"",env:"",des:"",time:"",cover:"",adress:"",traffic:""},ueConfig:{autoHeightEnabled:!1,initialFrameHeight:640,initialFrameWidth:"100%",autoFloatEnabled:!1,serverUrl:c.b+"/upload/ue_upload",UEDITOR_HOME_URL:"/static/UEditor/"},editStatus:!1}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var e=this;return o()(n.a.mark(function t(){var r;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.query();case 2:200==(r=t.sent).code&&(r.data?(e.form=r.data,e.editStatus=!0,e.setCheckedEnvs(r.data.env)):(e.editStatus=!1,e.$message.error("你还没有设置场馆的信息，恐怕用户不能找到您的位置，立即设置吧")));case 4:case"end":return t.stop()}},t,e)}))()},setCheckedEnvs:function(e){if(e){var t=e.split(",").map(function(e){return parseInt(e)});this.checkedEnvs=t}},uploadSectionFile:function(e){var t=this;return o()(n.a.mark(function r(){var a,s,o;return n.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return a=e.file,(s=new FormData).append("file",a),r.next=5,l.uploadAloneCover(s);case 5:if(200!=(o=r.sent).status||200==o.data.code){r.next=9;break}return t.$message.error(o.data.msg),r.abrupt("return");case 9:t.form.cover=o.data.data.imagePath;case 10:case"end":return r.stop()}},r,t)}))()},saveData:function(){var e=this;return o()(n.a.mark(function t(){var r,a,s,o,i,u,c,d,m;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.form,a=r.name,s=r.env,o=r.time,i=r.cover,u=r.adress,c=r.traffic,d=r.des,a){t.next=4;break}return e.$message.error("请填写场馆名称"),t.abrupt("return");case 4:if(i){t.next=7;break}return e.$message.error("请设置场馆主题图片"),t.abrupt("return");case 7:if(o){t.next=10;break}return e.$message.error("请填写营业时间"),t.abrupt("return");case 10:if(s){t.next=13;break}return e.$message.error("请选择环境设施"),t.abrupt("return");case 13:if(u){t.next=16;break}return e.$message.error("请填写场馆地址"),t.abrupt("return");case 16:if(c){t.next=19;break}return e.$message.error("请填写场馆处交通说明"),t.abrupt("return");case 19:if(m=null,e.editStatus){t.next=26;break}return t.next=23,l.add({name:a,des:d,time:o,cover:i,adress:u,traffic:c,env:s});case 23:m=t.sent,t.next=29;break;case 26:return t.next=28,l.update({name:a,des:d,time:o,cover:i,adress:u,traffic:c,env:s});case 28:m=t.sent;case 29:200==m.code?(e.editStatus=!0,e.$message.success("数据保存成功")):e.$message.error("数据保存失败");case 30:case"end":return t.stop()}},t,e)}))()},handleEnvsChange:function(e){e.length;this.form.env=e.join(",")}}},m={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrap"},[r("el-form",{staticStyle:{"max-width":"1000px",padding:"20px 0 0 20px"},attrs:{model:e.form,"label-position":"top"}},[r("el-form-item",{attrs:{required:"",label:"场馆名称"}},[r("el-input",{attrs:{placeholder:"场馆名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),r("el-form-item",{attrs:{required:"",label:"场馆主题图片"}},[e.form.cover?r("img",{staticClass:"cover",attrs:{src:e.form.cover}}):r("div",{staticClass:"empty_pic"},[e._v("建议尺寸850×350，gif、jpg、jpeg、png格式，图片小于5M。")]),e._v(" "),r("el-upload",{staticClass:"upload_box",attrs:{action:"fakeaction","show-file-list":!1,"auto-upload":!0,"http-request":e.uploadSectionFile}},[r("el-button",{attrs:{type:"info"}},[e._v("点击上传")]),e._v(" "),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("建议尺寸850×350，gif、jpg、jpeg、png格式，图片小于5M。")])],1)],1),e._v(" "),r("el-form-item",{attrs:{required:"",label:"营业时间"}},[r("el-input",{attrs:{placeholder:"例如：周一至周日 09:30-18:30"},model:{value:e.form.time,callback:function(t){e.$set(e.form,"time",t)},expression:"form.time"}})],1),e._v(" "),r("el-form-item",{attrs:{required:"",label:"环境设施"}},[r("el-checkbox-group",{on:{change:e.handleEnvsChange},model:{value:e.checkedEnvs,callback:function(t){e.checkedEnvs=t},expression:"checkedEnvs"}},e._l(e.envs,function(t){return r("el-checkbox",{key:t.id,attrs:{label:t.id}},[e._v(e._s(t.name))])}),1)],1),e._v(" "),r("el-form-item",{attrs:{required:"",label:"场馆地址"}},[r("el-input",{attrs:{placeholder:"场馆地址"},model:{value:e.form.adress,callback:function(t){e.$set(e.form,"adress",t)},expression:"form.adress"}})],1),e._v(" "),r("el-form-item",{attrs:{required:"",label:"交通说明"}},[r("el-input",{attrs:{placeholder:"例如：距离566公交站300米即到"},model:{value:e.form.traffic,callback:function(t){e.$set(e.form,"traffic",t)},expression:"form.traffic"}})],1),e._v(" "),r("el-form-item",{staticClass:"UEditor",attrs:{required:"",label:"描述内容"}},[r("VueUeditorWrap",{attrs:{config:e.ueConfig},model:{value:e.form.des,callback:function(t){e.$set(e.form,"des",t)},expression:"form.des"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.saveData}},[e._v("保 存 数 据")])],1)],1)],1)},staticRenderFns:[]};var f=r("C7Lr")(d,m,!1,function(e){r("ASIB")},"data-v-49879071",null);t.default=f.exports}});