webpackJsonp([30],{"9URQ":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("lC5x"),s=a.n(n),r=a("J0Oq"),o=a.n(r),l=a("ROkK"),c=a("39GG"),i={inject:["reload"],data:function(){return{head:c,status:[{value:1,label:"启用"},{value:0,label:"禁用"}],tableData:[],searchName:"",pageSize:10,currentPage:1,total:0,form:{status:1,name:"",phone:""}}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this;return o()(s.a.mark(function e(){var a,n,r,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.list({name:t.form.name.trim(),phone:t.form.phone,pageSize:t.pageSize,page:t.currentPage,status:t.form.status});case 2:a=e.sent,n=a.data,r=n.list,o=n.total,r.forEach(function(t){t.status=1==t.status}),t.tableData=r,t.total=o;case 7:case"end":return e.stop()}},e,t)}))()},changeSwitchStatus:function(t){var e=this;return o()(s.a.mark(function a(){return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l.updateStatus({id:t.id,status:t.status?1:0});case 2:a.sent.code&&e.$message.success("修改成功");case 4:case"end":return a.stop()}},a,e)}))()},statusChange:function(){this.fetchData()},nameChange:function(){this.fetchData()},phoneChange:function(){this.fetchData()},toAdd:function(){this.$router.push({path:"/offline/adviser/add"})},handleCurrentChange:function(t){this.currentPage=t,this.fetData()},manage:function(t){this.$router.push({path:"/offline/adviser/edit/"+t})},deleteItem:function(t){var e=this;return o()(s.a.mark(function a(){var n;return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return console.log(t),a.next=3,l.deleteItem({id:t});case 3:200==(n=a.sent).code?(e.$message.success("删除成功"),e.reload()):console.log(n);case 5:case"end":return a.stop()}},a,e)}))()}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"com_wrap"},[a("div",{staticClass:"top_info"},[a("el-button-group",{staticClass:"btn_wrap"},[a("el-button",{attrs:{type:"primary"},on:{click:t.toAdd}},[t._v("添加会籍")])],1),t._v(" "),a("div",{staticClass:"right_search"},[a("label",{staticClass:"label"},[t._v("选择状态：")]),t._v(" "),a("el-select",{attrs:{placeholder:"请选择",clearable:""},on:{change:t.statusChange},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},t._l(t.status,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1),t._v(" "),a("el-input",{staticClass:"input_search",attrs:{placeholder:"请填写会籍姓名",clearable:""},on:{clear:t.nameChange},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.nameChange(e)}},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}},[a("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"suffix"},on:{click:t.nameChange},slot:"suffix"})]),t._v(" "),a("el-input",{staticClass:"input_search",attrs:{placeholder:"请填写会籍电话",clearable:""},on:{clear:t.phoneChange},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.phoneChange(e)}},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}},[a("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"suffix"},on:{click:t.phoneChange},slot:"suffix"})])],1)],1),t._v(" "),a("el-table",{attrs:{data:t.tableData,"header-cell-style":{"background-color":"#f9fbff",height:"80px",color:"rgba(43,57,64,.85)","border-bottom":"1px #f0f0f0 solid","border-top":"1px #f0f0f0 solid"}}},[a("el-table-column",{attrs:{prop:"head",width:"150",label:"头像"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.head?a("img",{staticClass:"head",attrs:{src:e.row.head}}):a("img",{staticClass:"head",attrs:{src:t.head}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"会籍姓名",fit:"",prop:"name"}}),t._v(" "),a("el-table-column",{attrs:{label:"电话",fit:"",prop:"phone"}}),t._v(" "),a("el-table-column",{attrs:{label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{on:{change:function(a){return t.changeSwitchStatus(e.row)}},model:{value:e.row.status,callback:function(a){t.$set(e.row,"status",a)},expression:"scope.row.status"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"150",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"editbtn",attrs:{type:"success",size:"mini"},on:{click:function(a){return t.manage(e.row.id)}}},[t._v("管理")]),t._v(" "),a("el-popover",{attrs:{placement:"top",trigger:"click",width:200}},[a("div",{staticStyle:{"margin-bottom":"10px"}},[a("span",[t._v("你确定要删除会籍吗？")])]),t._v(" "),a("div",{staticStyle:{"text-align":"center",margin:"0"}},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){return t.deleteItem(e.row.id)}}},[t._v("确定")])],1),t._v(" "),a("template",{slot:"reference"},[a("el-button",{attrs:{size:"mini",type:"danger"}},[t._v("删除")])],1)],2)]}}])})],1),t._v(" "),a("div",{staticStyle:{"text-align":"center",margin:"30px 0"}},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next","current-page":t.currentPage,"page-size":t.pageSize,total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1)},staticRenderFns:[]};var f=a("C7Lr")(i,u,!1,function(t){a("T6vY")},"data-v-43e57bd5",null);e.default=f.exports},T6vY:function(t,e){}});