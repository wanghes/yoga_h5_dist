webpackJsonp([10],{VpTj:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("lC5x"),r=a.n(s),i=a("J0Oq"),o=a.n(i),l=a("h0S9"),n={name:"CourseAdd",data:function(){return{activeName:"2",visible:!1,formLabelWidth:"120px",showMoney:!1,pid:0,showXilie:!1,seriesCourses:[],course_type:"",form:{course_name:"",pay_type:"0",pay_money:"",pid:""}}},mounted:function(){this.$route.query.pid&&(this.pid=this.$route.query.pid,this.form.pid=parseInt(this.pid),this.form.pay_type=2,this.getSeriesCourses(),this.showXilie=!0)},methods:{getSeriesCourses:function(){var e=this;return o()(r.a.mark(function t(){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.getSeriesCourses();case 2:a=t.sent,e.seriesCourses=a.data;case 4:case"end":return t.stop()}},t,e)}))()},openCreateBox:function(){this.course_type?this.visible=!0:this.$message.error("请选择课程类型")},createCourse:function(){var e=this;return o()(r.a.mark(function t(){var a,s,i,o,n,c,d,p,u;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.course_type,s=e.form,i=s.pay_type,o=s.course_name,n=s.pay_money,c=s.pid,d={course_type:a,course_name:o,pay_type:parseInt(i),pay_money:n,pid:c},0==i&&(d.pay_money=0),2!=i||c){t.next=7;break}return e.$message.error("请选择系列课"),t.abrupt("return");case 7:return e.pid&&(d.pid=e.pid),t.next=10,l.add(d);case 10:p=t.sent,e.visible=!1,u=p.data.insertId,e.$alert("新建单课成功",{confirmButtonText:"去优化",callback:function(t){e.$store.dispatch("tagsView/delView",e.$route),e.$router.push({path:"/course/detail/"+u})}});case 14:case"end":return t.stop()}},t,e)}))()},changeRadio:function(e){this.course_type=e},handleClick:function(){this.course_type=""},changePayType:function(e){e=parseInt(e);this.showMoney=!1,this.showXilie=!1,1==e?this.showMoney=!0:2==e&&(this.showXilie=!0,this.getSeriesCourses())}}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrap",staticStyle:{height:"600px"}},[a("el-tabs",{staticStyle:{height:"100%"},attrs:{"tab-position":"top",type:"card"},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"视频录播",name:"2"}},[a("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("适用特点")])]),e._v(" "),a("div",{staticClass:"text item"},[e._v("1、以录制为主的上课模式")]),e._v(" "),a("div",{staticClass:"text item"},[e._v("2、适合专业性强内容")]),e._v(" "),a("div",{staticClass:"text item"},[e._v("3、支持免费试听")]),e._v(" "),a("div",{staticClass:"text item"},[e._v("4、课程重复利用率高")]),e._v(" "),a("div",{staticClass:"text item"},[e._v("5、支持单课、系列课、打卡")])]),e._v(" "),a("el-radio-group",{staticClass:"group",on:{change:e.changeRadio},model:{value:e.course_type,callback:function(t){e.course_type=t},expression:"course_type"}},[a("el-radio",{attrs:{label:1,border:""}},[e._v("无互动模式")]),e._v(" "),a("el-radio",{attrs:{label:2,border:"",disabled:""}},[e._v("互动模式")])],1),e._v(" "),a("div",{staticClass:"btn_wrap"},[a("el-button",{attrs:{type:"primary"},on:{click:e.openCreateBox}},[e._v("创建课程")])],1)],1),e._v(" "),a("el-tab-pane",{attrs:{label:"音频录播",name:"3"}},[a("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("适用特点")])]),e._v(" "),a("div",{staticClass:"text item"},[e._v("1、以录制为主的上课模式")]),e._v(" "),a("div",{staticClass:"text item"},[e._v("2、配合语音多媒体教学")]),e._v(" "),a("div",{staticClass:"text item"},[e._v("3、知识直达效率更高")]),e._v(" "),a("div",{staticClass:"text item"},[e._v("4、支持单课、系列课、打卡课程")])]),e._v(" "),a("el-radio-group",{staticClass:"group",on:{change:e.changeRadio},model:{value:e.course_type,callback:function(t){e.course_type=t},expression:"course_type"}},[a("el-radio",{attrs:{label:3,border:""}},[e._v("无互动模式")]),e._v(" "),a("el-radio",{attrs:{label:4,border:"",disabled:""}},[e._v("互动模式")])],1),e._v(" "),a("div",{staticClass:"btn_wrap"},[a("el-button",{attrs:{type:"primary"},on:{click:e.openCreateBox}},[e._v("创建课程")])],1)],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"一步创建课程",visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[a("el-form",{attrs:{model:e.form}},[a("el-form-item",{attrs:{required:"",label:"课程名称","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.course_name,callback:function(t){e.$set(e.form,"course_name",t)},expression:"form.course_name"}})],1),e._v(" "),a("el-form-item",{attrs:{required:"",label:"收费类型","label-width":e.formLabelWidth}},[a("el-radio-group",{on:{change:e.changePayType},model:{value:e.form.pay_type,callback:function(t){e.$set(e.form,"pay_type",t)},expression:"form.pay_type"}},[a("el-radio",{attrs:{label:0,disabled:0!=e.pid,border:""}},[e._v("免费")]),e._v(" "),a("el-radio",{attrs:{label:1,disabled:0!=e.pid,border:""}},[e._v("付费")]),e._v(" "),a("el-radio",{attrs:{label:2,border:""}},[e._v("系列课")])],1)],1),e._v(" "),e.showMoney?a("el-form-item",{attrs:{required:"",label:"金额","label-width":e.formLabelWidth}},[a("el-input",{model:{value:e.form.pay_money,callback:function(t){e.$set(e.form,"pay_money",t)},expression:"form.pay_money"}})],1):e._e(),e._v(" "),e.showXilie?a("el-form-item",{attrs:{required:"",label:"选择系列课","label-width":e.formLabelWidth}},[a("el-select",{attrs:{disabled:0!=e.pid,placeholder:"请选择系列课"},model:{value:e.form.pid,callback:function(t){e.$set(e.form,"pid",t)},expression:"form.pid"}},e._l(e.seriesCourses,function(e){return a("el-option",{key:e.id,attrs:{label:e.course_name,value:e.id}})}),1)],1):e._e()],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.createCourse}},[e._v("完 成")])],1)],1)],1)},staticRenderFns:[]};var d=a("C7Lr")(n,c,!1,function(e){a("qjOe")},"data-v-0b23dc10",null);t.default=d.exports},qjOe:function(e,t){}});