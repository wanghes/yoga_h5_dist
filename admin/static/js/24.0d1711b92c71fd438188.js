webpackJsonp([24],{D5DS:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("lC5x"),o=a.n(r),n=a("J0Oq"),i=a.n(n),l=a("pIEA"),s=a.n(l),c=a("QmSG"),d=a("0xDb"),m=a("VLUi"),u=a("H4hu"),f={components:{VueUeditorWrap:s.a},data:function(){return{cover:u,ueConfig:{autoHeightEnabled:!1,initialFrameHeight:640,initialFrameWidth:"100%",autoFloatEnabled:!1,serverUrl:c.b+"/upload/ue_upload",UEDITOR_HOME_URL:"/static/UEditor/"},form:{avatar:"",name:"",nickname:"",phone:"",jingyan:"",join_date:"",birthday:"",order:0,sijiao:0,id_card:"",des:"",jinyan:"",content:""}}},mounted:function(){},methods:{uploadSectionFile:function(e){var t=this;return i()(o.a.mark(function a(){var r,n,i;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return r=e.file,(n=new FormData).append("file",r),a.next=5,m.uploadHead(n);case 5:i=a.sent,t.form.avatar=i.data.data.imagePath;case 7:case"end":return a.stop()}},a,t)}))()},uploadIdSectionFile:function(e){var t=this;return i()(o.a.mark(function a(){var r,n,i;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return r=e.file,(n=new FormData).append("idcard",r),a.next=5,m.uploadIdCard(n);case 5:i=a.sent,t.form.id_card=i.data.data.imagePath;case 7:case"end":return a.stop()}},a,t)}))()},saveData:function(){var e=this;return i()(o.a.mark(function t(){var a,r,n,i,l,s,c,u,f,p,v,b,_;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.form,r=a.avatar,n=a.name,i=a.nickname,l=a.phone,s=a.jingyan,c=a.join_date,u=a.birthday,f=a.order,p=a.sijiao,v=a.id_card,b=a.des,_=a.content,n){t.next=5;break}e.$message.error("老师姓名不能为空"),t.next=15;break;case 5:if(l){t.next=9;break}e.$message.error("老师手机号不能为空"),t.next=15;break;case 9:return c&&(c=Object(d.b)("YYYY-mm-dd HH:MM:SS",new Date(c))),u&&(u=Object(d.b)("YYYY-mm-dd HH:MM:SS",new Date(u))),t.next=13,m.add({avatar:r,name:n,nickname:i,phone:l,jingyan:s,join_date:c,birthday:u,order:f,sijiao:p,id_card:v,des:b,content:_});case 13:200==t.sent.code?(e.$store.dispatch("tagsView/delView",e.$route),e.$router.replace({path:"/offline/teacher"})):Message.error("数据保存失败");case 15:case"end":return t.stop()}},t,e)}))()}}},p={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrap"},[a("el-form",{staticStyle:{"max-width":"1200px","padding-left":"30px"},attrs:{model:e.form,"label-position":"top"}},[a("el-form-item",{attrs:{label:"老师头像"}},[e.form.avatar?a("img",{staticClass:"avatar",attrs:{src:e.form.avatar}}):a("img",{staticClass:"avatar",attrs:{src:e.cover}}),e._v(" "),a("el-upload",{staticClass:"upload_box",attrs:{action:"fakeaction","show-file-list":!1,"auto-upload":!0,"http-request":e.uploadSectionFile}},[a("el-button",{attrs:{type:"danger"}},[e._v("点击上传")]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("建议尺寸200*200px，JPG、PNG、webp格式，图片小于5M。")])],1)],1),e._v(" "),a("el-form-item",{attrs:{required:"",label:"姓名"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"昵称"}},[a("el-input",{model:{value:e.form.nickname,callback:function(t){e.$set(e.form,"nickname",t)},expression:"form.nickname"}})],1),e._v(" "),a("el-form-item",{attrs:{required:"",label:"手机"}},[a("el-input",{model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"入职时间"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.form.join_date,callback:function(t){e.$set(e.form,"join_date",t)},expression:"form.join_date"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"生日"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.form.birthday,callback:function(t){e.$set(e.form,"birthday",t)},expression:"form.birthday"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"显示顺序"}},[a("el-input-number",{model:{value:e.form.order,callback:function(t){e.$set(e.form,"order",t)},expression:"form.order"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"是否支持私教"}},[a("el-radio-group",{model:{value:e.form.sijiao,callback:function(t){e.$set(e.form,"sijiao",t)},expression:"form.sijiao"}},[a("el-radio",{attrs:{label:0}},[e._v("不支持")]),e._v(" "),a("el-radio",{attrs:{label:1}},[e._v("支持")])],1)],1),e._v(" "),a("el-form-item",{attrs:{required:"",label:"教学经验"}},[a("el-input",{attrs:{type:"textarea",placeholder:"填写教学经验",maxlength:"255"},model:{value:e.form.jingyan,callback:function(t){e.$set(e.form,"jingyan",t)},expression:"form.jingyan"}})],1),e._v(" "),a("el-form-item",{attrs:{required:"",label:"一句话描述"}},[a("el-input",{attrs:{type:"textarea",placeholder:"填写一句话描述",maxlength:"100"},model:{value:e.form.des,callback:function(t){e.$set(e.form,"des",t)},expression:"form.des"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"身份证照"}},[e.form.id_card?a("img",{attrs:{src:e.form.id_card}}):a("div",{staticClass:"empty_pic"},[e._v("建议尺寸400×250，JPG、PNG、webp格式，图片小于5M。")]),e._v(" "),a("el-upload",{staticClass:"upload_box",attrs:{action:"action","show-file-list":!1,"auto-upload":!0,"http-request":e.uploadIdSectionFile}},[a("el-button",{attrs:{type:"danger"}},[e._v("点击上传")]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("建议尺寸400×250，JPG、PNG图片小于5M。")])],1)],1),e._v(" "),a("el-form-item",{attrs:{required:"",label:"详细介绍"}},[a("VueUeditorWrap",{staticClass:"UEditor",attrs:{config:e.ueConfig},model:{value:e.form.content,callback:function(t){e.$set(e.form,"content",t)},expression:"form.content"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.saveData}},[e._v("保 存 数 据")])],1)],1)],1)},staticRenderFns:[]};var v=a("C7Lr")(f,p,!1,function(e){a("mt1t")},"data-v-7fca59ca",null);t.default=v.exports},mt1t:function(e,t){}});