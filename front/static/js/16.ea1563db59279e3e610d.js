webpackJsonp([16],{"1Wcz":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=t("lC5x"),n=t.n(r),s=t("J0Oq"),o=t.n(s),i=t("ROkK"),l=t("39GG"),c={data:function(){return{head:l,form:{head:"",name:"",phone:"",des:"",salary:0}}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var e=this;return o()(n.a.mark(function a(){var t,r;return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.$route.params.id,a.next=3,i.query({id:t});case 3:r=a.sent,e.form=r.data;case 5:case"end":return a.stop()}},a,e)}))()},uploadSectionFile:function(e){var a=this;return o()(n.a.mark(function t(){var r,s,o;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.file,(s=new FormData).append("file",r),t.next=5,i.uploadHead(s);case 5:o=t.sent,a.form.head=o.data.data.imagePath;case 7:case"end":return t.stop()}},t,a)}))()},saveData:function(){var e=this;return o()(n.a.mark(function a(){var t,r,s,o,l,c,u;return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(t=e.$route.params.id,r=e.form,s=r.head,o=r.name,l=r.phone,c=r.des,u=r.salary,o){a.next=6;break}e.$message.error("会籍姓名不能为空"),a.next=14;break;case 6:if(l){a.next=10;break}e.$message.error("会籍手机号不能为空"),a.next=14;break;case 10:return a.next=12,i.update({id:t,head:s,name:o,phone:l,des:c,salary:u});case 12:200==a.sent.code?(e.$store.dispatch("tagsView/delView",e.$route),e.$router.replace({path:"/offline/adviser"})):e.$message.error("数据保存失败");case 14:case"end":return a.stop()}},a,e)}))()}}},u={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"wrap"},[t("el-form",{staticStyle:{"max-width":"1200px","padding-left":"30px"},attrs:{model:e.form,"label-position":"top"}},[t("el-form-item",{attrs:{label:"会籍头像"}},[t("div",{staticClass:"head_wrap"},[t("div",{staticClass:"head"},[e.form.head?t("img",{attrs:{src:e.form.head}}):t("img",{attrs:{src:e.head}})]),e._v(" "),t("el-upload",{staticClass:"upload_box",attrs:{action:"fakeaction","show-file-list":!1,"auto-upload":!0,"http-request":e.uploadSectionFile}},[t("el-button",{attrs:{type:"danger"}},[e._v("点击上传")]),e._v(" "),t("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("建议尺寸200*200px，JPG、PNG、webp格式，图片小于5M。")])],1)],1)]),e._v(" "),t("el-form-item",{attrs:{required:"",label:"姓名"}},[t("el-input",{model:{value:e.form.name,callback:function(a){e.$set(e.form,"name",a)},expression:"form.name"}})],1),e._v(" "),t("el-form-item",{attrs:{required:"",label:"手机"}},[t("el-input",{model:{value:e.form.phone,callback:function(a){e.$set(e.form,"phone",a)},expression:"form.phone"}})],1),e._v(" "),t("el-form-item",{attrs:{required:"",label:"固定薪资"}},[t("el-input-number",{model:{value:e.form.salary,callback:function(a){e.$set(e.form,"salary",a)},expression:"form.salary"}})],1),e._v(" "),t("el-form-item",{attrs:{required:"",label:"一句话描述"}},[t("el-input",{model:{value:e.form.des,callback:function(a){e.$set(e.form,"des",a)},expression:"form.des"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.saveData}},[e._v("保 存 数 据")])],1)],1)],1)},staticRenderFns:[]};var d=t("C7Lr")(c,u,!1,function(e){t("t4qh")},"data-v-7bdb3268",null);a.default=d.exports},t4qh:function(e,a){}});