webpackJsonp([35],{oiPI:function(e,t){},uXJU:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o("lC5x"),r=o.n(a),i=o("J0Oq"),s=o.n(i),l=o("pIEA"),n=o.n(l),d=o("QmSG"),c=o("TIfe"),u=o("q7OS"),p=o("h0S9"),v=o("s067"),_={name:"CourseAloneDetail",components:{VueUeditorWrap:n.a},data:function(){return{activeName:"first",formLabelWidth:"130",course_cover:v,imageUrl:"",course_type_label:"",videoUploadPercent:0,videoList:[],videoFlag:!1,videoUpApi:d.c+"/course/upload_video",videoExtraData:{Authorization:"bearer "+Object(c.d)()},videoName:"",visible:!1,ueConfig:{autoHeightEnabled:!1,initialFrameHeight:640,initialFrameWidth:"100%",autoFloatEnabled:!1,serverUrl:d.b+"/upload/ue_upload",UEDITOR_HOME_URL:"/static/UEditor/"},form:{course_name:"",course_leader:"",leader_intro:"",course_cover:"",pay_type:"",pay_money:"",course_type:"",course_video:"",course_content:""},pickerOptions:{disabledDate:function(e){return e.getTime()<Date.now()-864e5}}}},mounted:function(){this.fetData()},methods:{fetData:function(){var e=this;return s()(r.a.mark(function t(){var o,a,i;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.$route.params.id,t.next=3,p.get_course({id:o});case 3:a=t.sent,e.form=a.data,e.form.course_video&&(i=e.form.course_video.split("/"),e.videoName=i[i.length-1]),e.setCourseType();case 7:case"end":return t.stop()}},t,e)}))()},saveData:function(){var e=this;return s()(r.a.mark(function t(){var o,a,i,s,l,n,d,c,v,_;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(o=e.$route.params.id,a=e.form,i=a.course_name,s=a.course_leader,l=a.leader_intro,n=a.course_cover,d=a.course_video,c=a.course_content,v=a.pay_type,_=a.pay_money,i){t.next=6;break}u.Message.error("课程主题不能为空"),t.next=26;break;case 6:if(n){t.next=10;break}u.Message.error("请上传课程封面"),t.next=26;break;case 10:if(d){t.next=14;break}u.Message.error("请上传课程视频"),t.next=26;break;case 14:if(c){t.next=18;break}u.Message.error("请填写课程内容"),t.next=26;break;case 18:if(1!=v||_){t.next=22;break}u.Message.error("请填写付费金额"),t.next=26;break;case 22:return t.next=24,p.done({id:o,course_name:i,course_leader:s,leader_intro:l,course_cover:n,course_video:d,course_content:c,pay_type:v,pay_money:parseFloat(_)});case 24:200==t.sent.code?(e.$store.dispatch("tagsView/delView",e.$route),e.form.pid?e.$router.replace({path:"/course/many_panel",query:{id:e.form.pid}}):e.$router.replace({path:"/course/index"})):u.Message.error("数据保存失败");case 26:case"end":return t.stop()}},t,e)}))()},cancel:function(){this.$store.dispatch("tagsView/delView",this.$route),this.$router.replace({path:"/course/index"})},setCourseType:function(){var e="";switch(this.form.course_type){case 1:e="视频录播-无互动模式";break;case 2:e="视频录播-互动模式";break;case 3:e="音频录播-无互动模式";break;case 4:e="音频录播-互动模式"}this.course_type_label=e},uploadSectionFile:function(e){var t=this;return s()(r.a.mark(function o(){var a,i,s;return r.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return a=e.file,(i=new FormData).append("file",a),o.next=5,p.uploadAloneCover(i);case 5:s=o.sent,t.form.course_cover=s.data.data.imagePath;case 7:case"end":return o.stop()}},o,t)}))()},beforeUploadVideo:function(e){var t=e.size/1024/1024<2048;return-1==["video/mp4","video/3gp","video/flv","video/avi","video/wmv","video/mpeg","video/rmvb","video/mov","video/asf","video/webm"].indexOf(e.type)?(u.Message.error("请上传正确的视频格式"),!1):t?void(this.isShowUploadVideo=!1):(u.Message.error("视频大小不能超过2GB"),!1)},uploadVideoFile:function(e){var t=e.file,o=new FormData;o.append("video",t),p.uploadVideo(o)},uploadVideoProcess:function(e,t,o){this.videoFlag=!0,this.videoUploadPercent=1*t.percentage.toFixed(0)},handleVideoSuccess:function(e,t){if(this.videoFlag=!1,this.videoUploadPercent=0,this.form.course_video="",200==e.code){if(this.form.course_video=e.data.videoPath,this.form.course_video){var o=this.form.course_video.split("/");this.videoName=o[o.length-1]}}else u.Message.error("视频上传失败，请重新上传！")},lookVideo:function(){this.visible=!0},addCustomUpload:function(){window.UE.Editor.prototype._bkGetActionUrl=UE.Editor.prototype.getActionUrl,window.UE.Editor.prototype.getActionUrl=function(e){return console.log(e),"uploadimage"==e||"uploadscrawl"==e||"uploadimage"==e?d.b+"/upload/ue_upload":"uploadvideo"==e?d.b+"/upload/ue_upload":this._bkGetActionUrl.call(this,e)}},deleteCourse:function(){var e=this;return s()(r.a.mark(function t(){var o,a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.$route.params.id,t.next=3,p.deleteCourse({id:o});case 3:a=t.sent,console.log(a);case 5:case"end":return t.stop()}},t,e)}))()}}},f={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"wrap"},[o("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[o("el-tab-pane",{attrs:{label:"课程编辑",name:"first"}},[o("el-form",{staticStyle:{"max-width":"1200px","padding-left":"30px"},attrs:{model:e.form,"label-position":"top"}},[o("el-form-item",{attrs:{required:"",label:"课程主题","label-width":e.formLabelWidth}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.course_name,callback:function(t){e.$set(e.form,"course_name",t)},expression:"form.course_name"}})],1),e._v(" "),o("el-form-item",{attrs:{required:"",label:"课程封面","label-width":e.formLabelWidth}},[e.form.course_cover?o("img",{attrs:{src:e.form.course_cover}}):o("div",{staticClass:"empty_pic"},[e._v("建议尺寸280×180，JPG、PNG、webp格式，图片小于5M。")]),e._v(" "),o("el-upload",{staticClass:"upload_box",attrs:{action:"fakeaction","show-file-list":!1,"auto-upload":!0,"http-request":e.uploadSectionFile}},[o("el-button",{attrs:{type:"danger"}},[e._v("点击上传")]),e._v(" "),o("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("建议尺寸280×180，JPG、PNG、webp格式，图片小于5M。")])],1)],1),e._v(" "),o("el-form-item",{attrs:{required:"",label:"课程形式","label-width":e.formLabelWidth}},[o("el-tag",{attrs:{type:"info"}},[e._v(e._s(e.course_type_label))])],1),e._v(" "),o("el-form-item",{attrs:{required:"",label:"收费类型","label-width":e.formLabelWidth}},[o("el-radio-group",{model:{value:e.form.pay_type,callback:function(t){e.$set(e.form,"pay_type",t)},expression:"form.pay_type"}},[0==e.form.pay_type?o("div",[o("el-radio",{attrs:{label:0}},[e._v("免费")]),e._v(" "),o("el-radio",{attrs:{label:1,disabled:""}},[e._v("付费")]),e._v(" "),o("el-radio",{attrs:{label:2,disabled:""}},[e._v("系列课")])],1):1==e.form.pay_type?o("div",[o("el-radio",{attrs:{label:0,disabled:""}},[e._v("免费")]),e._v(" "),o("el-radio",{attrs:{label:1}},[e._v("付费")]),e._v(" "),o("el-radio",{attrs:{label:2,disabled:""}},[e._v("系列课")])],1):o("div",[o("el-radio",{attrs:{label:0,disabled:""}},[e._v("免费")]),e._v(" "),o("el-radio",{attrs:{label:1,disabled:""}},[e._v("付费")]),e._v(" "),o("el-radio",{attrs:{label:2}},[e._v("系列课")])],1),e._v(" "),1==e.form.pay_type?o("div",{staticClass:"pay_money_input"},[o("el-input",{model:{value:e.form.pay_money,callback:function(t){e.$set(e.form,"pay_money",t)},expression:"form.pay_money"}}),e._v(" "),o("span",[e._v("元")])],1):e._e()])],1),e._v(" "),o("el-form-item",{staticClass:"video_wrap",attrs:{required:"",label:"上传视频","label-width":e.formLabelWidth}},[o("el-upload",{attrs:{action:e.videoUpApi,name:"video","auto-upload":!0,headers:e.videoExtraData,"on-progress":e.uploadVideoProcess,"before-upload":e.beforeUploadVideo,"show-file-list":!1,"file-list":e.videoList,"on-success":e.handleVideoSuccess}},[o("el-button",{attrs:{type:"danger"}},[e._v("点击上传视频")]),e._v(" "),o("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("最大单次可上传文件大小在3GB以内的视频文件，单日最高上传30GB媒体文件视频文件格式支持3gp、avi、 flv、 mp4、 mpg、asf、 wmv、 mkv、 mov、webm")]),e._v(" "),1==e.videoFlag?o("el-progress",{staticStyle:{"margin-top":"10px",width:"500px"},attrs:{type:"line","stroke-width":12,percentage:e.videoUploadPercent}}):e._e()],1),e._v(" "),e.form.course_video?o("div",{staticClass:"show_video"},[o("div",{staticClass:"v_inner",on:{click:e.lookVideo}},[o("i",{staticClass:"el-icon-caret-right icon"})]),e._v(" "),o("div",{staticClass:"s_right"},[o("span",[e._v(e._s(e.videoName))]),e._v(" "),o("el-link",{attrs:{type:"success"}},[e._v("已完成")])],1)]):e._e()],1),e._v(" "),o("el-form-item",{attrs:{label:"主讲人","label-width":e.formLabelWidth}},[o("el-input",{attrs:{placeholder:"填写主讲人",autocomplete:"off"},model:{value:e.form.course_leader,callback:function(t){e.$set(e.form,"course_leader",t)},expression:"form.course_leader"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"主讲人介绍","label-width":e.formLabelWidth}},[o("el-input",{attrs:{placeholder:"填写主讲人介绍",autocomplete:"off"},model:{value:e.form.leader_intro,callback:function(t){e.$set(e.form,"leader_intro",t)},expression:"form.leader_intro"}})],1),e._v(" "),o("el-form-item",{staticClass:"UEditor",attrs:{required:"",label:"课程内容","label-width":e.formLabelWidth}},[o("VueUeditorWrap",{attrs:{config:e.ueConfig},model:{value:e.form.course_content,callback:function(t){e.$set(e.form,"course_content",t)},expression:"form.course_content"}})],1),e._v(" "),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:e.saveData}},[e._v("保 存 数 据")]),e._v(" "),o("el-button",{attrs:{type:"danger"},on:{click:e.deleteCourse}},[e._v("删 除")]),e._v(" "),o("el-button",{attrs:{type:"info"},on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)],1),e._v(" "),o("el-dialog",{attrs:{title:"播放视频",visible:e.visible,width:"40%"},on:{"update:visible":function(t){e.visible=t}}},[o("video",{attrs:{src:e.form.course_video,controls:"",width:"100%",height:"100%",autoPlay:"","data-setup":"{}"}},[o("source",{attrs:{src:e.form.course_video}})]),e._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("关 闭")])],1)])],1)},staticRenderFns:[]};var m=o("C7Lr")(_,f,!1,function(e){o("oiPI")},"data-v-2ec54bd1",null);t.default=m.exports}});