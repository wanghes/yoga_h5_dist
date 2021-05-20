webpackJsonp([17],{ZnMK:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.list=function(t){return Object(n.a)({url:"/admin/flash_sale/list",method:"get",params:t})},e.add=function(t){return Object(n.a)({url:"/admin/flash_sale/add",method:"post",data:t})},e.edit=function(t){return Object(n.a)({url:"/admin/flash_sale/edit",method:"put",data:t})},e.query=function(t){return Object(n.a)({url:"/admin/flash_sale/query",method:"get",params:t})},e.deleteItem=function(t){return Object(n.a)({url:"/admin/flash_sale/delete",method:"delete",params:t})},e.updateStatus=function(t){return Object(n.a)({url:"/admin/flash_sale/status",method:"put",data:t})},e.uploadCover=function(t){return s.a.post(l.c+"/upload/upload_flash_sale_cover",t,{headers:{"Content-Type":"multipart/form-data"}})};var n=a("vLgD"),r=a("I29D"),s=a.n(r),l=a("QmSG")},g5CG:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("lC5x"),r=a.n(n),s=a("J0Oq"),l=a.n(s),o=a("ZnMK"),u={data:function(){return{list:[],currentPage:1,pageSize:15,total:0,status:[{value:1,label:"启用"},{value:0,label:"禁用"}],searchForm:{status:""}}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this;return l()(r.a.mark(function e(){var a,n,s,l,u;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.searchForm.status,e.next=3,o.list({pageSize:t.pageSize,page:t.currentPage,status:a});case 3:n=e.sent,s=n.data,l=s.list,u=s.total,l.forEach(function(t){t.status=1==t.status}),t.list=l,t.total=u;case 8:case"end":return e.stop()}},e,t)}))()},toAdd:function(){this.$router.push({path:"/actives/flash_sale/operate"})},editItem:function(t){this.$router.push({path:"/actives/flash_sale/operate",query:{id:t}})},deleteItem:function(t){var e=this;return l()(r.a.mark(function a(){var n;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.deleteItem({id:t});case 2:200==(n=a.sent).code&&(e.$message.success(n.msg),e.fetchData());case 4:case"end":return a.stop()}},a,e)}))()},handleCurrentChange:function(t){this.currentPage=t,this.fetchData()},handleSizeChange:function(t){this.pageSize=t,this.fetchData()},changeSwitchStatus:function(t){var e=this;return l()(r.a.mark(function a(){return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.updateStatus({id:t.id,status:t.status?1:0});case 2:a.sent.code&&e.$message.success("修改成功");case 4:case"end":return a.stop()}},a,e)}))()},statusChange:function(){this.fetchData()}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap"},[a("div",{staticClass:"top_info"},[a("div",{staticClass:"left_search"},[a("el-select",{attrs:{clearable:!0,placeholder:"秒杀卡可售状态"},on:{change:t.statusChange},model:{value:t.searchForm.status,callback:function(e){t.$set(t.searchForm,"status",e)},expression:"searchForm.status"}},t._l(t.status,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),t._v(" "),a("el-button-group",{staticClass:"btn_wrap"},[a("el-button",{attrs:{type:"primary"},on:{click:t.toAdd}},[t._v("新建秒杀项")])],1)],1),t._v(" "),a("el-table",{attrs:{data:t.list,"header-cell-style":{color:"#333","background-color":"#f5f5f5"}}},[a("el-table-column",{attrs:{label:"秒杀图片",width:"170"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{attrs:{width:"150",src:t.row.cover}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"name",width:"200",label:"秒杀名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"people",width:"120",label:"已秒杀的人数"}}),t._v(" "),a("el-table-column",{attrs:{prop:"limit",width:"180",label:"总共限制秒杀的人数"}}),t._v(" "),a("el-table-column",{attrs:{width:"150",label:"旧价格(元)"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v("￥"+t._s(e.row.old_price.toFixed(2)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"150",label:"新价格(元)"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v("￥"+t._s(e.row.old_price.toFixed(2)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"120",label:"卡内余额"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.type?a("span",[t._v(t._s(e.row.times)+"次")]):6==e.row.type?a("span",[t._v(t._s(e.row.price)+"元")]):7==e.row.type?a("span",[t._v(t._s(e.row.hours)+"小时")]):a("span",[t._v(t._s(e.row.expire_date)+"天")])]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"120",label:"卡有效期(天)"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.expire_date_on?a("span",[t._v(t._s(e.row.expire_date))]):a("span",[t._v("不限")])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"over_time",width:"180",label:"秒杀截止日期"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",fit:"",label:"秒杀可售状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{on:{change:function(a){return t.changeSwitchStatus(e.row)}},model:{value:e.row.status,callback:function(a){t.$set(e.row,"status",a)},expression:"scope.row.status"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",fixed:"right",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(a){return t.editItem(e.row.id)}}},[t._v("编辑")]),t._v(" "),a("el-popover",{attrs:{placement:"top",trigger:"click",width:160}},[a("div",{staticStyle:{"margin-bottom":"10px"}},[a("span",[t._v("你确定要删除该秒杀吗？")])]),t._v(" "),a("div",{staticStyle:{"text-align":"center",margin:"0"}},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){return t.deleteItem(e.row.id)}}},[t._v("确定")])],1),t._v(" "),a("template",{slot:"reference"},[a("el-button",{attrs:{size:"mini",type:"danger"}},[t._v("删除")])],1)],2)]}}])})],1),t._v(" "),a("div",{staticStyle:{"text-align":"center",margin:"30px 0"}},[a("el-pagination",{attrs:{background:"",layout:"total, sizes, prev, pager, next, jumper","current-page":t.currentPage,"page-sizes":[15,30,50],"page-size":t.pageSize,total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},staticRenderFns:[]};var c=a("C7Lr")(u,i,!1,function(t){a("wJLN")},"data-v-ce8b272a",null);e.default=c.exports},wJLN:function(t,e){}});