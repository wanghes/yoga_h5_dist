webpackJsonp([39],{AdAE:function(e,t){},rNpw:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("KH7x"),n=a.n(r),s=a("lC5x"),o=a.n(s),i=a("J0Oq"),l=a.n(i),c=a("h0S9"),u=a("s067"),d={name:"manyPanel",inject:["reload"],data:function(){return{tableData:[],searchName:"",currentPage:1,pageSize:5,total:0,aloneCurrentPage:1,alonePageSize:5,allCoursesTotal:0,course_cover:u,dialogVisible:!1,pid:"",detail:{},cates:[],allCourses:[],multipleSelection:[],payTypes:[{id:1,name:"固定收费"},{id:2,name:"按天收费"},{id:3,name:"按月收费"},{id:4,name:"按年收费"}]}},mounted:function(){var e=this;return l()(o.a.mark(function t(){var a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a=e.$route.query.id,e.pid=a,e.fetdetail(),e.fetData();case 4:case"end":return t.stop()}},t,e)}))()},methods:{fetdetail:function(){var e=this;return l()(o.a.mark(function t(){var a,r,n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get_manycourse({id:e.pid});case 2:return a=t.sent,r=a.data,t.next=6,c.getCates();case 6:n=t.sent,e.cates=n.data,e.payTypes.forEach(function(e){r.pay_type==e.id&&(r.pay_type_name=e.name)}),e.cates.forEach(function(e){r.course_cate==e.id&&(r.course_cate_name=e.name)}),e.detail=r;case 11:case"end":return t.stop()}},t,e)}))()},fetData:function(){var e=this;return l()(o.a.mark(function t(){var a,r,n,s;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.listByPid({page:e.currentPage,pageSize:e.pageSize,course_name:e.searchName.trim(),id:e.pid});case 2:a=t.sent,r=a.data,n=r.list,s=r.total,n.forEach(function(e){e.orderVisible=!1}),e.setCourseType(n),e.tableData=n,e.total=s;case 8:case"end":return t.stop()}},t,e)}))()},statusChange:function(){this.currentPage=1,this.fetData()},nameChange:function(){this.fetData()},handleSizeChange:function(e){this.pageSize=e,this.fetData()},handleCurrentChange:function(e){this.currentPage=e,this.fetData()},toAddCourse:function(){this.$router.push({path:"/course/add",query:{pid:this.pid}})},setCourseType:function(e){e.map(function(e){var t="";switch(e.course_type){case 1:t="视频录播-无互动模式";break;case 2:t="视频录播-互动模式";break;case 3:t="音频录播-无互动模式";break;case 4:t="音频录播-互动模式"}e.course_type_name=t})},intoPlay:function(e){var t=e.id;this.$router.push({path:"/course/detail/"+t})},intoEdit:function(e){var t=e.id;this.$router.push({path:"/course/detail/"+t})},editCourse:function(e){this.$router.push({path:"/course/many_detail/"+e})},goLook:function(){},addHasCourse:function(){this.dialogVisible=!0,this.getAllAloneCourses()},getAllAloneCourses:function(){var e=this;return l()(o.a.mark(function t(){var a,r,n,s;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.list({page:e.aloneCurrentPage,pageSize:e.alonePageSize,status:""});case 2:a=t.sent,r=a.data,n=r.list,s=r.total,e.setCourseType(n),e.allCourses=n,e.allCoursesTotal=s;case 7:case"end":return t.stop()}},t,e)}))()},handleAloneCurrentChange:function(e){this.aloneCurrentPage=e,this.getAllAloneCourses()},handleSelectionChange:function(e){this.multipleSelection=e},okAdd:function(){var e=this;return l()(o.a.mark(function t(){var a,r,n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.multipleSelection,r=[],a.forEach(function(e){r.push(e.id)}),r.length){t.next=6;break}return e.$message.error("请选择要添加的课程"),t.abrupt("return");case 6:return t.next=8,c.batchPids({ids:r,pid:e.pid});case 8:n=t.sent,e.dialogVisible=!1,n&&e.reload();case 11:case"end":return t.stop()}},t,e)}))()},repairOrder:function(e,t){var a=this;c.updateOrder({id:e,order:parseInt(t)}).then(function(e){200==e.code&&a.reload()})},handleCommand:function(e){var t=this,a=e.split("|"),r=n()(a,2),s=r[0],o=r[1];switch(s){case"a":c.closeListen({id:o}).then(function(e){200==e.code&&t.reload()});break;case"b":c.removeCourseFromSeries({id:o}).then(function(e){200==e.code&&t.reload()});break;case"c":c.openListen({id:o}).then(function(e){200==e.code&&t.reload()})}}}},p={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrap"},[a("div",{staticClass:"detail_info"},[a("div",{staticClass:"d_left"},[a("img",{attrs:{src:e.detail.course_cover}}),e._v(" "),a("div",{staticClass:"info"},[a("h3",{staticClass:"info_title"},[e._v(e._s(e.detail.course_name))]),e._v(" "),a("div",{staticClass:"s_i"},[a("strong",[e._v("收费类型：")]),a("span",[e._v(e._s(e.detail.pay_type_name))]),e._v(" "),a("strong",[e._v("分类：")]),a("span",[e._v(e._s(e.detail.course_cate_name?e.detail.course_cate_name:"暂时还没有分类"))])]),e._v(" "),a("div",{staticClass:"money"},[1==e.detail.pay_type?a("div",e._l(e.detail.pay_money_type,function(t){return a("span",{key:t.id},[e._v("\n                                ￥"+e._s(t.price.toFixed(2))+"\n                            ")])}),0):2==e.detail.pay_type?a("div",{staticClass:"by_time"},e._l(e.detail.pay_money_type,function(t){return a("span",{key:t.id},[a("strong",[e._v(e._s(t.time))]),e._v("天收取"),a("strong",[e._v(e._s(t.price.toFixed(2)))]),e._v("元\n                            ")])}),0):3==e.detail.pay_type?a("div",{staticClass:"by_time"},e._l(e.detail.pay_money_type,function(t){return a("span",{key:t.id},[a("strong",[e._v(e._s(t.time))]),e._v("月收取"),a("strong",[e._v(e._s(t.price.toFixed(2)))]),e._v("元\n                            ")])}),0):4==e.detail.pay_type?a("div",{staticClass:"by_time"},e._l(e.detail.pay_money_type,function(t){return a("span",{key:t.id},[a("strong",[e._v(e._s(t.time))]),e._v("年收取"),a("strong",[e._v(e._s(t.price.toFixed(2)))]),e._v("元\n                            ")])}),0):e._e()])])]),e._v(" "),a("div",{staticClass:"d_right"},[a("el-button",{attrs:{type:"success"},on:{click:e.goLook}},[e._v("课程预览")]),e._v(" "),a("el-button",{attrs:{type:"success"},on:{click:function(t){return e.editCourse(e.detail.id)}}},[e._v("编辑课程")]),e._v(" "),a("el-button",{attrs:{type:"success"}},[e._v("报名管理")])],1)]),e._v(" "),a("div",{staticClass:"top_info"},[a("el-button-group",{staticClass:"btn_wrap"},[a("el-button",{attrs:{type:"primary"},on:{click:e.toAddCourse}},[e._v("新建单课")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.addHasCourse}},[e._v("添加已有单课")])],1),e._v(" "),a("div",{staticClass:"right_search"},[a("label",{staticClass:"label"},[e._v("填写课程名字查询")]),e._v(" "),a("el-input",{staticClass:"input_search",attrs:{placeholder:"请填写课程名称",clearable:""},on:{clear:e.nameChange},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.nameChange(t)}},model:{value:e.searchName,callback:function(t){e.searchName=t},expression:"searchName"}},[a("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"suffix"},on:{click:e.nameChange},slot:"suffix"})])],1)],1),e._v(" "),a("el-table",{attrs:{data:e.tableData,"header-cell-style":{"background-color":"#f9fbff",height:"80px",color:"rgba(43,57,64,.85)","border-bottom":"1px #f0f0f0 solid","border-top":"1px #f0f0f0 solid"}}},[a("el-table-column",{attrs:{prop:"course_cover",width:"150",label:"课程封面"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.course_cover?a("img",{staticClass:"cover",attrs:{src:t.row.course_cover}}):a("img",{staticClass:"cover",attrs:{src:e.course_cover}})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"course_name",label:"课程名称",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"course_name"},[e._v(e._s(t.row.course_name))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"open",label:"试听状态",fit:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(1==t.row.open?"已启用":"禁用中"))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"open",label:"课程排序",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-popover",{attrs:{placement:"top",trigger:"click",width:160}},[a("div",{staticStyle:{"margin-bottom":"10px"}},[a("el-input",{attrs:{width:"100",size:"mini"},model:{value:t.row.order,callback:function(a){e.$set(t.row,"order",a)},expression:"scope.row.order"}})],1),e._v(" "),a("div",{staticStyle:{"text-align":"right",margin:"0"}},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){return e.repairOrder(t.row.id,t.row.order)}}},[e._v("确定")])],1),e._v(" "),a("template",{slot:"reference"},[a("div",{staticClass:"edit_order"},[a("span",[e._v(e._s(t.row.order))]),e._v(" "),a("svg-icon",{attrs:{"icon-class":"edit"}})],1)])],2)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"course_type_name",label:"课程类型",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{label:"课程状态",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.course_video?a("el-tag",{attrs:{type:"success",effect:"dark"}},[e._v("正常")]):a("el-tag",{attrs:{type:"danger",effect:"dark"}},[e._v("还未上传资源")])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"create_time",label:"创建时间",width:"240"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",fixed:"right",width:"370"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-link",{staticStyle:{"margin-right":"10px"},attrs:{type:"success"},on:{click:function(a){return e.intoEdit(t.row)}}},[e._v("编辑课程")]),e._v(" "),a("el-button",{attrs:{type:"success"},on:{click:function(a){return e.intoPlay(t.row)}}},[e._v("查看链接")]),e._v(" "),a("el-dropdown",{staticStyle:{"margin-left":"10px"},attrs:{"split-button":!0,type:"info"},on:{command:e.handleCommand},scopedSlots:e._u([{key:"dropdown",fn:function(){return[a("el-dropdown-menu",[t.row.open?a("el-dropdown-item",{attrs:{command:"a|"+t.row.id}},[e._v("取消免费试听")]):a("el-dropdown-item",{attrs:{command:"c|"+t.row.id}},[e._v("开启免费试听")]),e._v(" "),a("el-dropdown-item",{attrs:{command:"b|"+t.row.id}},[e._v("移除系列课")])],1)]},proxy:!0}],null,!0)},[a("span",{staticClass:"el-dropdown-link"},[e._v("更多操作")])])]}}])})],1),e._v(" "),a("div",{staticStyle:{"text-align":"center",margin:"30px 0"}},[a("el-pagination",{attrs:{background:"",layout:"total, sizes, prev, pager, next, jumper","current-page":e.currentPage,"page-sizes":[5,10,20,30,40,50],"page-size":e.pageSize,total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),a("el-dialog",{attrs:{title:"添加已有单课",width:"60%",visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-table",{attrs:{data:e.allCourses,"header-cell-style":{"background-color":"#f9fbff",height:"50px",color:"rgba(43,57,64,.85)","border-bottom":"1px #f0f0f0 solid","border-top":"1px #f0f0f0 solid"}},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{type:"course_cover",label:"课程封面",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.course_cover?a("img",{staticClass:"cover",attrs:{width:"100",src:t.row.course_cover}}):a("img",{staticClass:"cover",attrs:{width:"100",src:e.course_cover}})]}}])}),e._v(" "),a("el-table-column",{attrs:{property:"course_name",label:"课程名称",fit:"",height:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.course_name.length>20?t.row.course_name.slice(0,20)+"...":t.row.course_name.slice(0,20)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{property:"course_type_name",label:"课程类型",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{property:"create_time",width:"180",label:"创建时间"}})],1),e._v(" "),a("div",{staticStyle:{"text-align":"center",margin:"20px 0 0"}},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next","current-page":e.aloneCurrentPage,total:e.allCoursesTotal,"page-size":e.alonePageSize},on:{"current-change":e.handleAloneCurrentChange}})],1),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.okAdd}},[e._v("确定添加")])],1)],1)},staticRenderFns:[]};var _=a("C7Lr")(d,p,!1,function(e){a("AdAE")},"data-v-089d5fa8",null);t.default=_.exports}});