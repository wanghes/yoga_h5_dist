webpackJsonp([9],{ZHjz:function(t,e){},gzhu:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("lC5x"),r=i.n(a),s=i("J0Oq"),n=i.n(s),l=i("pIEA"),o=i.n(l),m=i("QmSG"),u=i("ZumN"),c=i("s067"),v={components:{VueUeditorWrap:o.a},data:function(){return{cover:c,showLimit:!0,ueConfig:{autoHeightEnabled:!1,initialFrameHeight:640,initialFrameWidth:"100%",autoFloatEnabled:!1,serverUrl:m.b+"/upload/ue_upload",UEDITOR_HOME_URL:"/static/UEditor/"},form:{name:"",tiyan:0,cover:"",des:"",content:"",order_limit_status:1,order_limit_type:1,cancle_limit_hour:"",order_limit_hour:""},limits:{tian:"",prev:"",next:""},type1:!0,type2:!1,type3:!1}},mounted:function(){},methods:{changeLimit:function(t){this.showLimit=1==t},changeLimitType:function(t){this.type1=!1,this.type2=!1,this.type3=!1,1==t?this.type1=!0:2==t?this.type2=!0:3==t&&(this.type3=!0)},uploadSectionFile:function(t){var e=this;return n()(r.a.mark(function i(){var a,s,n;return r.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return a=t.file,(s=new FormData).append("file",a),i.next=5,u.uploadTuankeCover(s);case 5:n=i.sent,e.form.cover=n.data.data.imagePath;case 7:case"end":return i.stop()}},i,e)}))()},saveData:function(){var t=this;return n()(r.a.mark(function e(){var i,a,s,n,l,o,m,c,v,_,p;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.form,a=i.name,s=i.tiyan,n=i.cover,l=i.des,o=i.content,m=i.order_limit_status,c=i.order_limit_type,v=i.cancle_limit_hour,_=i.order_limit_hour,p="",a){e.next=5;break}return t.$message.error("团课名字不能为空"),e.abrupt("return");case 5:if(1!=m){e.next=34;break}if(1!=c){e.next=13;break}if(t.limits.tian&&t.limits.prev&&t.limits.next){e.next=10;break}return t.$message.error("限制预约时间必填"),e.abrupt("return");case 10:p=[t.limits.tian,t.limits.prev,t.limits.next].join(":"),e.next=25;break;case 13:if(2!=c){e.next=20;break}if(t.limits.tian&&t.limits.next){e.next=17;break}return t.$message.error("限制预约时间必填"),e.abrupt("return");case 17:p=[t.limits.tian,t.limits.next].join(":"),e.next=25;break;case 20:if(3!=c){e.next=25;break}if(t.limits.prev){e.next=24;break}return t.$message.error("限制预约时间必填"),e.abrupt("return");case 24:p=[t.limits.prev].join(":");case 25:if(v){e.next=28;break}return t.$message.error("取消预约必填"),e.abrupt("return");case 28:if(_){e.next=31;break}return t.$message.error("预约截止必填"),e.abrupt("return");case 31:if(!(3==c&&_>t.limits.prev)){e.next=34;break}return t.$message.error("预约截止时间必须小于预约时间"),e.abrupt("return");case 34:return e.next=36,u.add({name:a,tiyan:s,cover:n,des:l,content:o,date_time_limit:p,order_limit_status:m,cancle_limit_hour:v,order_limit_hour:_,order_limit_type:c});case 36:200==e.sent.code?(t.$store.dispatch("tagsView/delView",t.$route),t.$router.replace({path:"/offline/index"})):Message.error("数据保存失败");case 38:case"end":return e.stop()}},e,t)}))()}}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap"},[i("el-form",{staticStyle:{"max-width":"1200px","padding-left":"30px"},attrs:{model:t.form,"label-position":"top"}},[i("el-form-item",{attrs:{required:"",label:"团课项目名称"}},[i("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"限制预约时间"}},[i("el-radio-group",{on:{change:t.changeLimit},model:{value:t.form.order_limit_status,callback:function(e){t.$set(t.form,"order_limit_status",e)},expression:"form.order_limit_status"}},[i("el-radio",{attrs:{label:1}},[t._v("限制预约时间")]),t._v(" "),i("el-radio",{attrs:{label:0}},[t._v("不限制预约时间")])],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showLimit,expression:"showLimit"}],staticClass:"limit_box"},[i("h5",{staticClass:"tit"},[t._v("预约时间:")]),t._v(" "),i("el-radio-group",{attrs:{size:"mini"},on:{change:t.changeLimitType},model:{value:t.form.order_limit_type,callback:function(e){t.$set(t.form,"order_limit_type",e)},expression:"form.order_limit_type"}},[i("el-radio",{attrs:{label:1,border:""}},[t._v("方案一")]),t._v(" "),i("el-radio",{attrs:{label:2,border:""}},[t._v("方案二")]),t._v(" "),i("el-radio",{attrs:{label:3,border:""}},[t._v("方案三")])],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.type1,expression:"type1"}],staticClass:"d_box"},[i("div",{staticClass:"item"},[i("span",[t._v("提前")]),t._v(" "),i("el-input",{staticClass:"duan_input",model:{value:t.limits.tian,callback:function(e){t.$set(t.limits,"tian",e)},expression:"limits.tian"}}),t._v(" "),i("span",[t._v("天")])],1),t._v(" "),i("div",{staticClass:"item"},[i("span",[t._v("从")]),t._v(" "),i("el-input",{staticClass:"duan_input",model:{value:t.limits.prev,callback:function(e){t.$set(t.limits,"prev",e)},expression:"limits.prev"}}),t._v(" "),i("span",[t._v("点到")]),t._v(" "),i("el-input",{staticClass:"duan_input",model:{value:t.limits.next,callback:function(e){t.$set(t.limits,"next",e)},expression:"limits.next"}}),t._v(" "),i("span",[t._v("点接受预约")])],1)]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.type2,expression:"type2"}],staticClass:"d_box"},[i("div",{staticClass:"item"},[i("span",[t._v("提前")]),t._v(" "),i("el-input",{staticClass:"duan_input",model:{value:t.limits.tian,callback:function(e){t.$set(t.limits,"tian",e)},expression:"limits.tian"}}),t._v(" "),i("span",[t._v("天")])],1),t._v(" "),i("div",{staticClass:"item"},[i("span",[t._v("从")]),t._v(" "),i("el-input",{staticClass:"duan_input",model:{value:t.limits.next,callback:function(e){t.$set(t.limits,"next",e)},expression:"limits.next"}}),t._v(" "),i("span",[t._v("点后接受预约")])],1)]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.type3,expression:"type3"}],staticClass:"d_box"},[i("div",{staticClass:"item"},[i("span",[t._v("开课前")]),t._v(" "),i("el-input",{staticClass:"duan_input",model:{value:t.limits.prev,callback:function(e){t.$set(t.limits,"prev",e)},expression:"limits.prev"}}),t._v(" "),i("span",[t._v("小时接受预约")])],1)]),t._v(" "),i("h5",{staticClass:"tit"},[t._v("取消预约:")]),t._v(" "),i("div",{staticClass:"d_box"},[i("span",[t._v("开课前")]),t._v(" "),i("el-input",{staticClass:"duan_input",model:{value:t.form.cancle_limit_hour,callback:function(e){t.$set(t.form,"cancle_limit_hour",e)},expression:"form.cancle_limit_hour"}}),t._v(" "),i("span",[t._v("个小时可取消")])],1),t._v(" "),i("h5",{staticClass:"tit"},[t._v("预约截止:")]),t._v(" "),i("div",{staticClass:"d_box"},[i("span",[t._v("开课前")]),t._v(" "),i("el-input",{staticClass:"duan_input",model:{value:t.form.order_limit_hour,callback:function(e){t.$set(t.form,"order_limit_hour",e)},expression:"form.order_limit_hour"}}),t._v(" "),i("span",[t._v("个小时截止")])],1)],1)],1),t._v(" "),i("el-form-item",{attrs:{required:"",label:"是否支持体验课"}},[i("el-radio-group",{model:{value:t.form.tiyan,callback:function(e){t.$set(t.form,"tiyan",e)},expression:"form.tiyan"}},[i("el-radio",{attrs:{label:0}},[t._v("不支持")]),t._v(" "),i("el-radio",{attrs:{label:1}},[t._v("支持")])],1)],1),t._v(" "),i("el-form-item",{attrs:{required:"",label:"团课封面"}},[t.form.cover?i("img",{attrs:{src:t.form.cover}}):i("img",{attrs:{src:t.cover}}),t._v(" "),i("el-upload",{staticClass:"upload_box",attrs:{action:"fakeaction","show-file-list":!1,"auto-upload":!0,"http-request":t.uploadSectionFile}},[i("el-button",{attrs:{type:"danger"}},[t._v("点击上传")]),t._v(" "),i("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("建议尺寸800*500px，JPG、PNG、webp格式，图片小于5M。")])],1)],1),t._v(" "),i("el-form-item",{attrs:{required:"",label:"团课描述"}},[i("el-input",{model:{value:t.form.des,callback:function(e){t.$set(t.form,"des",e)},expression:"form.des"}})],1),t._v(" "),i("el-form-item",{attrs:{required:"",label:"团课内容"}},[i("VueUeditorWrap",{staticClass:"UEditor",attrs:{config:t.ueConfig},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),t._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:t.saveData}},[t._v("保 存 数 据")])],1)],1)],1)},staticRenderFns:[]};var p=i("C7Lr")(v,_,!1,function(t){i("ZHjz")},"data-v-e65ab156",null);e.default=p.exports}});