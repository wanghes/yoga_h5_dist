(function(e){function n(n){for(var r,u,o=n[0],i=n[1],d=n[2],s=0,f=[];s<o.length;s++)u=o[s],Object.prototype.hasOwnProperty.call(c,u)&&c[u]&&f.push(c[u][0]),c[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);h&&h(n);while(f.length)f.shift()();return a.push.apply(a,d||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,u=1;u<t.length;u++){var o=t[u];0!==c[o]&&(r=!1)}r&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},u={app:0},c={app:0},a=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0cc8e2aa":"67ddf7aa","chunk-10f7afdb":"e3101357","chunk-13b1b564":"08cf0983","chunk-14716688":"939a452c","chunk-1602891a":"1ddcab53","chunk-18a7522f":"6aa0b636","chunk-21603cae":"1a392b59","chunk-44c12052":"180e5225","chunk-46038166":"c0290440","chunk-48913c2d":"3b510901","chunk-4abf707e":"954de264","chunk-55976296":"5306beaa","chunk-6482fdb6":"50070b53","chunk-6eb357e2":"9f283292","chunk-7600e335":"4d248d23","chunk-0f894dba":"5d898bce","chunk-78d4a58a":"7353aef1","chunk-7b53c01c":"47640678","chunk-7ee2f201":"67bd86a0","chunk-7f919ef0":"1e1b00e6","chunk-8e279abc":"53938b77","chunk-b3b8f2d0":"7d1bb579","chunk-bc1bc29e":"521c648d","chunk-f4443f36":"e8efa9e5"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-0cc8e2aa":1,"chunk-10f7afdb":1,"chunk-13b1b564":1,"chunk-14716688":1,"chunk-1602891a":1,"chunk-18a7522f":1,"chunk-21603cae":1,"chunk-44c12052":1,"chunk-46038166":1,"chunk-48913c2d":1,"chunk-4abf707e":1,"chunk-55976296":1,"chunk-6482fdb6":1,"chunk-6eb357e2":1,"chunk-0f894dba":1,"chunk-78d4a58a":1,"chunk-7b53c01c":1,"chunk-7ee2f201":1,"chunk-7f919ef0":1,"chunk-8e279abc":1,"chunk-b3b8f2d0":1,"chunk-bc1bc29e":1,"chunk-f4443f36":1};u[e]?n.push(u[e]):0!==u[e]&&t[e]&&n.push(u[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-0cc8e2aa":"a0ab984c","chunk-10f7afdb":"98ff00f9","chunk-13b1b564":"a48aaa34","chunk-14716688":"63cf982f","chunk-1602891a":"a94e78e8","chunk-18a7522f":"6c5ce257","chunk-21603cae":"51c78c0a","chunk-44c12052":"40ee4fab","chunk-46038166":"deb79976","chunk-48913c2d":"c0702f0a","chunk-4abf707e":"ee8e101a","chunk-55976296":"21ad450f","chunk-6482fdb6":"8cdfc728","chunk-6eb357e2":"5bbef474","chunk-7600e335":"31d6cfe0","chunk-0f894dba":"0be56fc5","chunk-78d4a58a":"a6c01845","chunk-7b53c01c":"c18e0432","chunk-7ee2f201":"28bed2ce","chunk-7f919ef0":"c502be17","chunk-8e279abc":"73b73091","chunk-b3b8f2d0":"30f704f9","chunk-bc1bc29e":"f6a92d8b","chunk-f4443f36":"0a071166"}[e]+".css",c=i.p+r,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var d=a[o],s=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(s===r||s===c))return n()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){d=f[o],s=d.getAttribute("data-href");if(s===r||s===c)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var r=n&&n.target&&n.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete u[e],h.parentNode.removeChild(h),t(a)},h.href=c;var l=document.getElementsByTagName("head")[0];l.appendChild(h)})).then((function(){u[e]=0})));var r=c[e];if(0!==r)if(r)n.push(r[2]);else{var a=new Promise((function(n,t){r=c[e]=[n,t]}));n.push(r[2]=a);var d,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=o(e);var f=new Error;d=function(n){s.onerror=s.onload=null,clearTimeout(h);var t=c[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+u+")",f.name="ChunkLoadError",f.type=r,f.request=u,t[1](f)}c[e]=void 0}};var h=setTimeout((function(){d({type:"timeout",target:s})}),12e4);s.onerror=s.onload=d,document.head.appendChild(s)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=n,d=d.slice();for(var f=0;f<d.length;f++)n(d[f]);var h=s;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);var r=t("60b5"),u=(t("6bfc"),t("59c7"),t("f54d"),t("9109"),t("6a61"),t("9065"),t("a336"),t("a593")),c=t("2e01"),a=(t("ec2b"),t("98b9"),t("a18c")),o=t("7d08"),i=t("7456"),d=t("cdbb"),s=t("ed08"),f=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[e.isRouterAlive?t("router-view"):e._e()],1)},h=[],l={name:"App",provide:function(){return{reload:this.reload}},data:function(){return{isRouterAlive:!0}},methods:{reload:function(){this.isRouterAlive=!1,this.$nextTick((function(){this.isRouterAlive=!0}))}}},p=l,b=t("5d22"),k=Object(b["a"])(p,f,h,!1,null,null,null),g=k.exports,m=t("7e70"),v=t("c24f");u["a"].use(c["a"]),u["a"].use(o["a"]),u["a"].use(d["a"]),u["a"].use(i["a"]),u["a"].config.productionTip=!1;var x=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(n){var t,r,u,c,o,i,d,f,h,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n){e.next=7;break}return e.next=3,m.getCode();case 3:t=e.sent,200==t.code&&t.data?location.href=t.data:console.log(t),e.next=35;break;case 7:return e.next=9,m.getAuth({code:n});case 9:if(r=e.sent,200!=r.code){e.next=35;break}return u=r.data.access_token,c=r.data.openid,e.next=15,v.getUser({openid:c});case 15:if(o=e.sent,console.log("userInfo = "+JSON.stringify(o)),200!=o.code||!o.data){e.next=24;break}s["a"].set("user_id",o.data.user_id),s["a"].set("user_token",o.data.token),s["a"].set("user_phone",o.data.phone),s["a"].set("user_head",o.data.head),e.next=35;break;case 24:return console.log("access_token = "+u),console.log("openid = "+c),e.next=28,m.getUser({openid:c,access_token:u});case 28:i=e.sent,d=i.data,f=d.nickname,h=d.headimgurl,l=d.openid,s["a"].set("weixin_openid",l),s["a"].set("weixin_nickname",f),s["a"].set("weixin_headimgurl",h),console.log(i),a["a"].replace({path:"/register"});case 35:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),y=Object(s["d"])(location.href);window.venues=y.aid,x(y.code),new u["a"]({router:a["a"],render:function(e){return e(g)}}).$mount("#app")},"7e70":function(e,n,t){"use strict";t.r(n),t.d(n,"getUser",(function(){return u})),t.d(n,"getCode",(function(){return c})),t.d(n,"getAuth",(function(){return a}));var r=t("b775");function u(e){return Object(r["a"])({url:"/index/weixin/userinfo",method:"get",params:e})}function c(e){return Object(r["a"])({url:"/index/weixin/code",method:"get",params:e})}function a(e){return Object(r["a"])({url:"/index/weixin/auth",method:"get",params:e})}},"98b9":function(e,n,t){},a18c:function(e,n,t){"use strict";t("16cc"),t("dc28"),t("f073");var r=t("a593"),u=t("8aaf"),c=u["a"].prototype.push;u["a"].prototype.push=function(e,n,t){return n||t?c.call(this,e,n,t):c.call(this,e).catch((function(e){return e}))},r["a"].use(u["a"]);var a=[{path:"/login",component:function(){return t.e("chunk-7b53c01c").then(t.bind(null,"dd7b"))}},{path:"/register",component:function(){return t.e("chunk-7f919ef0").then(t.bind(null,"7803"))}},{path:"/forget",component:function(){return t.e("chunk-0cc8e2aa").then(t.bind(null,"9135"))}},{path:"/findOk",component:function(){return t.e("chunk-13b1b564").then(t.bind(null,"b31c"))}},{path:"/",component:function(){return t.e("chunk-55976296").then(t.bind(null,"6511"))}},{path:"/book/:type",component:function(){return t.e("chunk-48913c2d").then(t.bind(null,"8a74"))}},{path:"/tiyan",component:function(){return t.e("chunk-44c12052").then(t.bind(null,"d851"))}},{path:"/my_course",component:function(){return t.e("chunk-7ee2f201").then(t.bind(null,"2bfb"))}},{path:"/my",component:function(){return Promise.all([t.e("chunk-7600e335"),t.e("chunk-0f894dba")]).then(t.bind(null,"0c6f"))}},{path:"/person",component:function(){return t.e("chunk-21603cae").then(t.bind(null,"244c"))}},{path:"/my_cards",component:function(){return Promise.all([t.e("chunk-7600e335"),t.e("chunk-78d4a58a")]).then(t.bind(null,"4cf4"))}},{path:"/detail",component:function(){return t.e("chunk-6eb357e2").then(t.bind(null,"1000"))}},{path:"/online/index",component:function(){return t.e("chunk-10f7afdb").then(t.bind(null,"68dc"))}},{path:"/online/series",component:function(){return t.e("chunk-46038166").then(t.bind(null,"c083"))}},{path:"/online/alones",component:function(){return t.e("chunk-bc1bc29e").then(t.bind(null,"f337"))}},{path:"/online/alones_detail/:id",component:function(){return t.e("chunk-f4443f36").then(t.bind(null,"7154"))}},{path:"/online/series_detail/:id",component:function(){return t.e("chunk-1602891a").then(t.bind(null,"7138"))}},{path:"/miaosha",component:function(){return t.e("chunk-6482fdb6").then(t.bind(null,"92bd"))}},{path:"/miaosha/:id",component:function(){return t.e("chunk-8e279abc").then(t.bind(null,"c826"))}},{path:"/tuangou",component:function(){return t.e("chunk-18a7522f").then(t.bind(null,"a421"))}},{path:"/tuangou/:id",component:function(){return t.e("chunk-b3b8f2d0").then(t.bind(null,"4be7"))}},{path:"/cards",component:function(){return t.e("chunk-4abf707e").then(t.bind(null,"db31"))}},{path:"/card/:id",component:function(){return t.e("chunk-14716688").then(t.bind(null,"982a"))}}],o=function(){return new u["a"]({scrollBehavior:function(){return{y:0}},routes:a})},i=o();n["a"]=i},b775:function(e,n,t){"use strict";t("16cc");var r=t("73ef"),u=t.n(r),c=t("ed08"),a="http://api.yogaguanjia.com",o=a,i=t("7d08"),d=t("a18c"),s=u.a.create({baseURL:o,timeout:5e3});s.interceptors.request.use((function(e){var n=c["a"].get("user_id"),t=c["a"].get("user_token");return t&&(e.headers["Authorization"]="bearer "+t),n&&(e.headers["UserId"]=n),e.headers["VenuesID"]=window.venues,e}),(function(e){return console.log(e),Promise.reject(e)})),s.interceptors.response.use((function(e){var n=e.data;return 200!==n.code?(401==n.code&&(Object(i["a"])({message:n.msg||"Error",type:"danger",duration:5e3}),c["a"].del("user_id"),c["a"].del("user_token"),setTimeout((function(){d["a"].push({path:"/login"})}),1500)),Object(i["a"])({message:n.msg||"Error",type:"danger",duration:5e3}),n):n}),(function(e){if(console.log(e),!e.response||500!=e.response.status)return Object(i["a"])({message:e.message,type:"danger",duration:5e3}),Promise.reject(e);var n=e.response.data;401===n.code&&(Object(i["a"])({message:"请先登录",type:"danger",duration:5e3}),c["a"].del("user_id"),c["a"].del("user_token"),setTimeout((function(){d["a"].push({path:"/login"})}),1500))}));n["a"]=s},c24f:function(e,n,t){"use strict";t.r(n),t.d(n,"login",(function(){return u})),t.d(n,"register",(function(){return c})),t.d(n,"updateInfo",(function(){return a})),t.d(n,"smsLogin",(function(){return o})),t.d(n,"getVcode",(function(){return i})),t.d(n,"editPassword",(function(){return d})),t.d(n,"getUser",(function(){return s}));var r=t("b775");function u(e){return Object(r["a"])({url:"/index/login",method:"post",data:e})}function c(e){return Object(r["a"])({url:"/index/register",method:"post",data:e})}function a(e){return Object(r["a"])({url:"/index/update/info",method:"put",data:e})}function o(e){return Object(r["a"])({url:"/index/sms/login",method:"post",data:e})}function i(e){return Object(r["a"])({url:"/index/get/vcode",method:"post",data:e})}function d(e){return Object(r["a"])({url:"/index/update/password",method:"put",data:e})}function s(e){return Object(r["a"])({url:"/index/member/query",method:"get",params:e})}},ed08:function(e,n,t){"use strict";t.d(n,"c",(function(){return r})),t.d(n,"e",(function(){return u})),t.d(n,"b",(function(){return c})),t.d(n,"a",(function(){return a})),t.d(n,"d",(function(){return o}));t("16cc"),t("29dd"),t("9065"),t("86be"),t("a336"),t("2684"),t("2991"),t("ca01"),t("2cde");function r(e){var n,t="YYYY-mm-dd",r={"Y+":e.getFullYear().toString(),"m+":(e.getMonth()+1).toString(),"d+":e.getDate().toString()};for(var u in r)n=new RegExp("("+u+")").exec(t),n&&(t=t.replace(n[1],1==n[1].length?r[u]:r[u].padStart(n[1].length,"0")));return t}function u(e){var n=["周日","周一","周二","周三","周四","周五","周六"],t=e.replace(/-/g,"/"),r=new Date(t);return{timeStamp:r.getTime(),weekDay:n[r.getDay()]}}function c(e,n){var t,r={"Y+":n.getFullYear().toString(),"m+":(n.getMonth()+1).toString(),"d+":n.getDate().toString(),"H+":n.getHours().toString(),"M+":n.getMinutes().toString(),"S+":n.getSeconds().toString()};for(var u in r)t=new RegExp("("+u+")").exec(e),t&&(e=e.replace(t[1],1==t[1].length?r[u]:r[u].padStart(t[1].length,"0")));return e}var a={set:function(e,n,t){t||(t=864e5);var r=new Date;r.setTime(r.getTime()+t),document.cookie=e+"="+escape(n)+";expires="+r.toGMTString()},get:function(e){var n,t=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(n=document.cookie.match(t))?unescape(n[2]):null},del:function(e){var n=new Date;n.setTime(n.getTime()-1);var t=this.get(e);null!=t&&(document.cookie=e+"="+t+";expires="+n.toGMTString())},updata:function(e,n,t,r){t||(t=864e5);var u=new Date;u.setTime(u.getTime()+t),document.cookie=e+"="+escape(n)+";expires="+u.toGMTString()+";path =/"}};function o(e){for(var n=new Object,t=e.substring(e.indexOf("?")+1),r=t.split("&"),u=0;u<r.length;u++){var c=r[u].indexOf("=");if(-1!=c){var a=r[u].substring(0,c),o=r[u].substring(c+1);n[a]=unescape(o)}}return n.home=e.split("?")[0],n}}});
//# sourceMappingURL=app.3ab14e6e.js.map