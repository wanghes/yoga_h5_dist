webpackJsonp([22],{ZXGf:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("lC5x"),s=a.n(n),r=a("J0Oq"),l=a.n(r),c=a("VLUi"),o={inject:["reload"],data:function(){return{head:"",activeName:"first",status:[{value:1,label:"启用"},{value:0,label:"禁用"}],tableData:[],searchName:"",pageSize:5,currentPage:1,total:0,visible:!1,status_selected:""}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this;return l()(s.a.mark(function e(){var a,n,r,l;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.list({name:t.searchName.trim(),pageSize:t.pageSize,page:t.currentPage,status:t.status_selected});case 2:a=e.sent,n=a.data,r=n.list,l=n.total,r.forEach(function(t){t.status=1==t.status}),t.tableData=r,t.total=l;case 7:case"end":return e.stop()}},e,t)}))()},statusChange:function(){this.fetchData()},changeSwitchStatus:function(t){var e=this;return l()(s.a.mark(function a(){return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,c.updateStatus({id:t.id,status:t.status?1:0});case 2:a.sent.code&&e.$message.success("修改成功");case 4:case"end":return a.stop()}},a,e)}))()},nameChange:function(){this.fetchData()},toAdd:function(){this.$router.push({path:"/offline/teacher/add"})},handleCurrentChange:function(t){this.currentPage=t,this.fetData()},manage:function(t){this.$router.push({path:"/offline/teacher/detail/"+t})},deleteItem:function(t){var e=this;return l()(s.a.mark(function a(){var n;return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return console.log(t),a.next=3,c.deleteTeacher({id:t});case 3:200==(n=a.sent).code?(e.$message.success("删除成功"),e.reload()):console.log(n);case 5:case"end":return a.stop()}},a,e)}))()}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"com_wrap"},[a("div",{staticClass:"top_info"},[a("el-button-group",{staticClass:"btn_wrap"},[a("el-button",{attrs:{type:"primary"},on:{click:t.toAdd}},[t._v("添加老师")])],1),t._v(" "),a("div",{staticClass:"right_search"},[a("label",{staticClass:"label"},[t._v("选择状态：")]),t._v(" "),a("el-select",{attrs:{placeholder:"请选择",clearable:""},on:{change:t.statusChange},model:{value:t.status_selected,callback:function(e){t.status_selected=e},expression:"status_selected"}},t._l(t.status,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1),t._v(" "),a("el-input",{staticClass:"input_search",attrs:{placeholder:"请填写老师 姓名/手机号",clearable:""},on:{clear:t.nameChange},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.nameChange(e)}},model:{value:t.searchName,callback:function(e){t.searchName=e},expression:"searchName"}},[a("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"suffix"},on:{click:t.nameChange},slot:"suffix"})])],1)],1),t._v(" "),a("el-table",{attrs:{data:t.tableData,"header-cell-style":{"background-color":"#f9fbff",height:"80px",color:"rgba(43,57,64,.85)","border-bottom":"1px #f0f0f0 solid","border-top":"1px #f0f0f0 solid"}}},[a("el-table-column",{attrs:{prop:"head",width:"150",label:"头像"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.head?a("img",{staticClass:"head",attrs:{src:e.row.head}}):a("img",{staticClass:"head",attrs:{src:t.head}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"老师姓名",fit:"",prop:"name"}}),t._v(" "),a("el-table-column",{attrs:{label:"老师昵称",fit:"",prop:"nickname"}}),t._v(" "),a("el-table-column",{attrs:{label:"电话",fit:"",prop:"phone"}}),t._v(" "),a("el-table-column",{attrs:{label:"生日",width:"130",prop:"birthday"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.birthday.slice(0,10)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"私教"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.can_alone?a("span",[t._v("支持")]):a("span",[t._v("不支持")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{on:{change:function(a){return t.changeSwitchStatus(e.row)}},model:{value:e.row.status,callback:function(a){t.$set(e.row,"status",a)},expression:"scope.row.status"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"order",width:"100",label:"显示顺序"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"150",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"editbtn",attrs:{type:"success",size:"mini"},on:{click:function(a){return t.manage(e.row.id)}}},[t._v("管理")]),t._v(" "),a("el-popover",{attrs:{placement:"top",trigger:"click",width:160}},[a("div",{staticStyle:{"margin-bottom":"10px"}},[a("span",[t._v("你确定要删除老师吗？删除了也会删除老师关联的信息。")])]),t._v(" "),a("div",{staticStyle:{"text-align":"center",margin:"0"}},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){return t.deleteItem(e.row.id)}}},[t._v("确定")])],1),t._v(" "),a("template",{slot:"reference"},[a("el-button",{attrs:{size:"mini",type:"danger"}},[t._v("删除")])],1)],2)]}}])})],1),t._v(" "),a("div",{staticStyle:{"text-align":"center",margin:"30px 0"}},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next","current-page":t.currentPage,"page-size":t.pageSize,total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1)},staticRenderFns:[]};var u=a("C7Lr")(o,i,!1,function(t){a("nSDr")},"data-v-9eb5c394",null);e.default=u.exports},nSDr:function(t,e){}});