(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24299799"],{"13bc":function(t,e,s){},"1d66":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"msg"},[s("app-header",[[s("div",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.title))]),s("div",{attrs:{slot:"right"},slot:"right"})]],2),s("div",{staticClass:"jh_messageDetail_cont"},[s("ul",t._l(t.list,(function(e,a){return s("li",{key:a},[s("p",[t._v(t._s(t._f("timeA")(1e3*e.created_at)))]),s("p",[t._v(" "+t._s(e.content)+" "),1===e.link_type?s("router-link",{attrs:{to:{path:"/orderDetail",query:{order_id:e.order_id}},tag:"span"}},[t._v("点击支付>>")]):t._e()],1)])})),0),s("p",[t._v("没有更多了")])])],1)},i=[],r=s("a4ce"),n=s("9870"),c={components:{appHeader:r["a"]},data(){return{title:"",message_classify:"",limit:10,page:1,list:[]}},created(){this.title=this.$route.query.title,this.message_classify=this.$route.query.message_classify},mounted(){this.getMessage()},methods:{async getMessage(){let t={message_classify:this.message_classify,limit:this.limit,page:this.page},{data:e}=await Object(n["r"])(t);console.log(e),this.list=e.data.list}}},l=c,o=(s("ef50"),s("c701")),u=Object(o["a"])(l,a,i,!1,null,"dfd1f344",null);e["default"]=u.exports},"827d":function(t,e,s){},a4ce:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"header"},[t._t("left",[s("van-icon",{attrs:{name:"arrow-left"},on:{click:function(e){return t.$router.go(-1)}}})]),t._t("title",[t._v("找回密码")]),t._t("right",[t._v("1")])],2)])},i=[],r={name:"",props:[],components:{},data(){return{}},computed:{},watch:{},methods:{},created(){},mounted(){}},n=r,c=(s("ae13"),s("c701")),l=Object(c["a"])(n,a,i,!1,null,"fca03c4e",null);e["a"]=l.exports},ae13:function(t,e,s){"use strict";s("827d")},ef50:function(t,e,s){"use strict";s("13bc")}}]);
//# sourceMappingURL=chunk-24299799.40c25644.js.map