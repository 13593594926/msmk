(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-411c644e"],{a3b6:function(t,e,a){"use strict";a("a739")},a739:function(t,e,a){},e864:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("header",[a("van-nav-bar",{attrs:{title:"错题记录","left-text":"","left-arrow":""},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight},scopedSlots:t._u([{key:"right",fn:function(){return[a("van-icon",{attrs:{name:"search",size:"18"}})]},proxy:!0}])})],1),a("van-dropdown-menu",[a("van-dropdown-item",{attrs:{title:"类型不限",options:t.option1},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}}),a("van-dropdown-item",{attrs:{disabled:"",title:""},on:{click:t.dian}}),a("van-dropdown-item",{attrs:{disabled:"",title:""}}),a("div",{staticClass:"cxy_top"},[a("van-icon",{attrs:{name:"notes-o"},on:{click:function(e){return t.$router.push("/error-list")}}},[t._v("巩固错题 ")]),a("van-icon",{attrs:{name:"todo-list-o"},on:{click:function(e){return t.Dialog()}}},[t._v("移出错题 ")])],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.flag,expression:"flag"}],staticClass:"cen"},[a("img",{attrs:{src:"https://wap.365msmk.com/img/empty.0d284c2e.png",alt:""}}),a("p",[t._v("请稍候，套卷正在赶来的路上啦")])]),a("el-card",{directives:[{name:"show",rawName:"v-show",value:!t.flag,expression:"!flag"}]},[a("div",{staticClass:"cxy_one"},[a("p",[t._v("物理学史")]),a("span",[t._v("7道错题")])]),a("div",{staticClass:"cxy_two"},[a("p",[t._v("提交时间：2020/10/28 15:16:53")])]),a("div",{staticClass:"cxy_three"},[a("van-button",{attrs:{color:"#7232dd",round:"",plain:"",size:"small"},on:{click:function(e){return t.$router.push("/error-list")}}},[t._v("巩固错题")])],1)]),a("p",{staticClass:"mei"},[t._v("没有更多了")])],1)},o=[],i={name:"demo",props:{},components:{},data(){return{flag:!1,value1:0,option1:[{text:"全部",value:0},{text:"考卷练习",value:1},{text:"考点专练",value:2},{text:"仿真模考",value:2}]}},computed:{},watch:{},methods:{onClickLeft(){this.$router.back()},onClickRight(){this.$router.push("/search")},onConfirm(){this.$refs.item.toggle()},dian(){console.log(1111)},Dialog(){this.$dialog.confirm({message:"是否做对题目后自动移出该错题"}).then(()=>{}).catch(()=>{})}}},s=i,r=(a("a3b6"),a("c701")),c=Object(r["a"])(s,n,o,!1,null,"97521604",null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-411c644e.e7b44618.js.map