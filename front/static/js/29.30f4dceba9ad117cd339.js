webpackJsonp([29],{"7VA7":function(e,t){},i7HS:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("lC5x"),o=r.n(a),i=r("J0Oq"),n=r.n(i),s=r("GKtG"),u=r("uqvW"),l={name:"flaseSaleDetail",data:function(){return{form:{name:"",des:"",cover:"",over_time:"",limit:1,bind_card_id:"",now_price:0,old_price:0,intro:"",share_img:"",people:0},cards:[],editStatus:!1}},mounted:function(){var e=this.$route.query.id;e&&(this.editStatus=!0,this.fetchDetail(e)),this.fetchCards()},methods:{fetchCards:function(){var e=this;return n()(o.a.mark(function t(){var r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.all();case 2:200==(r=t.sent).code&&(e.cards=r.data);case 4:case"end":return t.stop()}},t,e)}))()},fetchDetail:function(e){var t=this;return n()(o.a.mark(function r(){var a;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.query({id:e});case 2:200==(a=r.sent).code&&(t.form=a.data);case 4:case"end":return r.stop()}},r,t)}))()},cardChange:function(){},uploadSectionFile:function(e){var t=this;return n()(o.a.mark(function r(){var a,i,n;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return a=e.file,(i=new FormData).append("file",a),r.next=5,u.uploadCover(i);case 5:n=r.sent,t.form.cover=n.data.data.imagePath;case 7:case"end":return r.stop()}},r,t)}))()},uploadSectionFile2:function(e){var t=this;return n()(o.a.mark(function r(){var a,i,n;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return a=e.file,(i=new FormData).append("file",a),r.next=5,u.uploadCover(i);case 5:n=r.sent,t.form.share_img=n.data.data.imagePath;case 7:case"end":return r.stop()}},r,t)}))()},saveData:function(){var e=this;return n()(o.a.mark(function t(){var r,a,i,n,s,l,c,d,m,p,f,_,v,b;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.$route.query.id,a=e.form,i=a.name,n=a.cover,s=a.limit,l=a.bind_card_id,c=a.over_time,d=a.des,m=a.intro,p=a.now_price,f=a.old_price,_=a.people,v=a.share_img,i){t.next=5;break}return e.$message.error("请填写拼团活动名称"),t.abrupt("return");case 5:if(n){t.next=8;break}return e.$message.error("请上传拼团封面"),t.abrupt("return");case 8:if(m){t.next=11;break}return e.$message.error("请填写拼团活动简单描述"),t.abrupt("return");case 11:if(0!=s){t.next=14;break}return e.$message.error("请填写拼团活动每人限制次数"),t.abrupt("return");case 14:if(0!=p){t.next=17;break}return e.$message.error("请填写拼团活动价格"),t.abrupt("return");case 17:if(0!=f){t.next=20;break}return e.$message.error("请填写拼团活动之前的价格"),t.abrupt("return");case 20:if(l){t.next=23;break}return e.$message.error("请选择活动卡"),t.abrupt("return");case 23:if(c){t.next=26;break}return e.$message.error("请设置活动截止时间"),t.abrupt("return");case 26:if(d){t.next=29;break}return e.$message.error("请填写活动卡使用说明"),t.abrupt("return");case 29:if(b={},!e.editStatus){t.next=36;break}return t.next=33,u.edit({id:r,name:i,cover:n,limit:s,bind_card_id:l,over_time:c,des:d,now_price:p,old_price:f,intro:m,share_img:v,people:_});case 33:b=t.sent,t.next=39;break;case 36:return t.next=38,u.add({name:i,cover:n,limit:s,bind_card_id:l,over_time:c,des:d,share_img:v,now_price:p,old_price:f,intro:m,people:_});case 38:b=t.sent;case 39:200==b.code&&(e.$store.dispatch("tagsView/delView",e.$route),e.$router.push({path:"/actives/group_purchase"}));case 40:case"end":return t.stop()}},t,e)}))()}}},c={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrap"},[r("el-form",{staticStyle:{"max-width":"1000px","padding-left":"30px"},attrs:{model:e.form,"label-position":"top"}},[r("el-form-item",{attrs:{required:"",label:"拼团活动名称"}},[r("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),r("el-form-item",{attrs:{required:"",label:"拼团封面"}},[e.form.cover?r("img",{staticClass:"img_cover",attrs:{src:e.form.cover}}):r("div",{staticClass:"empty_pic"},[e._v("建议尺寸280×180，JPG、PNG、webp格式，图片小于5M。")]),e._v(" "),r("el-upload",{staticClass:"upload_box",attrs:{action:"fakeaction","show-file-list":!1,"auto-upload":!0,"http-request":e.uploadSectionFile}},[r("el-button",{attrs:{type:"info"}},[e._v("点击上传")]),e._v(" "),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("建议尺寸280×180，JPG、PNG、webp格式，图片小于5M。")])],1)],1),e._v(" "),r("el-form-item",{attrs:{required:"",label:"分享的封面"}},[e.form.share_img?r("img",{staticClass:"img_cover",attrs:{src:e.form.share_img}}):r("div",{staticClass:"empty_pic"},[e._v("建议尺寸960×1700，JPG、PNG、webp格式，图片小于5M。")]),e._v(" "),r("el-upload",{staticClass:"upload_box",attrs:{action:"fakeaction2","show-file-list":!1,"auto-upload":!0,"http-request":e.uploadSectionFile2}},[r("el-button",{attrs:{type:"info"}},[e._v("点击上传")]),e._v(" "),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("建议尺寸960×1700，JPG、PNG、webp格式，图片小于5M。")])],1)],1),e._v(" "),r("el-form-item",{attrs:{required:"",label:"活动简单描述（50字）"}},[r("el-input",{attrs:{type:"textarea",placeholder:"填写活动简单描述（50字）",maxlength:"50","show-word-limit":""},model:{value:e.form.intro,callback:function(t){e.$set(e.form,"intro",t)},expression:"form.intro"}})],1),e._v(" "),r("el-form-item",{attrs:{required:"",label:"团购活动每人限制次数"}},[e._v("\b\n            "),r("el-input-number",{model:{value:e.form.limit,callback:function(t){e.$set(e.form,"limit",t)},expression:"form.limit"}})],1),e._v(" "),r("el-form-item",{attrs:{required:"",label:"团购价格"}},[r("el-input-number",{model:{value:e.form.now_price,callback:function(t){e.$set(e.form,"now_price",t)},expression:"form.now_price"}})],1),e._v(" "),r("el-form-item",{attrs:{required:"",label:"团购之前价格"}},[r("el-input-number",{model:{value:e.form.old_price,callback:function(t){e.$set(e.form,"old_price",t)},expression:"form.old_price"}})],1),e._v(" "),r("el-form-item",{attrs:{required:"",label:"已拼团数"}},[r("el-input-number",{model:{value:e.form.people,callback:function(t){e.$set(e.form,"people",t)},expression:"form.people"}})],1),e._v(" "),r("el-form-item",{attrs:{required:"",label:"选择活动卡"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"选择活动卡"},on:{change:e.cardChange},model:{value:e.form.bind_card_id,callback:function(t){e.$set(e.form,"bind_card_id",t)},expression:"form.bind_card_id"}},e._l(e.cards,function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),e._v(" "),r("el-form-item",{attrs:{required:"",label:"活动截止时间"}},[r("el-date-picker",{attrs:{type:"datetime",placeholder:"选择活动截止时间"},model:{value:e.form.over_time,callback:function(t){e.$set(e.form,"over_time",t)},expression:"form.over_time"}})],1),e._v(" "),r("el-form-item",{attrs:{required:"",label:"活动卡使用说明"}},[r("el-input",{attrs:{type:"textarea",placeholder:"填写活动卡使用说明",rows:"8",maxlength:"255","show-word-limit":""},model:{value:e.form.des,callback:function(t){e.$set(e.form,"des",t)},expression:"form.des"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.saveData}},[e._v("保 存 数 据")])],1)],1)],1)},staticRenderFns:[]};var d=r("C7Lr")(l,c,!1,function(e){r("7VA7")},"data-v-3675e950",null);t.default=d.exports},uqvW:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.list=function(e){return Object(a.a)({url:"/admin/group_purchase/list",method:"get",params:e})},t.add=function(e){return Object(a.a)({url:"/admin/group_purchase/add",method:"post",data:e})},t.edit=function(e){return Object(a.a)({url:"/admin/group_purchase/edit",method:"put",data:e})},t.query=function(e){return Object(a.a)({url:"/admin/group_purchase/query",method:"get",params:e})},t.deleteItem=function(e){return Object(a.a)({url:"/admin/group_purchase/delete",method:"delete",params:e})},t.updateStatus=function(e){return Object(a.a)({url:"/admin/group_purchase/status",method:"put",data:e})},t.uploadCover=function(e){return i.a.post(n.c+"/upload/upload_group_purchase_cover",e,{headers:{"Content-Type":"multipart/form-data"}})};var a=r("vLgD"),o=r("I29D"),i=r.n(o),n=r("QmSG")}});