(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0df029"],{"87a5":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"page"},[s("p",{staticClass:"text-left page__title"},[e._v("SET UP")]),s("SetOption")],1)},a=[],n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container text-center"},[s("div",{staticClass:"set__box ds-inline-block mt-50"},[s("span",{staticClass:"ds-inline-block mr-20"},[e._v("Work Time : ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.setTime.work,expression:"setTime.work"}],staticClass:"ds-inline-block set__input text-center mr-20",attrs:{type:"text"},domProps:{value:e.setTime.work},on:{input:function(t){t.target.composing||e.$set(e.setTime,"work",t.target.value)}}}),s("span",{staticClass:"ds-inline-block mr-20"},[e._v("Minutes")]),s("button",{staticClass:"btn set__btn mr-5",on:{click:function(t){return e.editTime("work")}}},[e._v(" save ")]),"work"===e.isSave?s("i",{staticClass:"fas fa-spinner fa-spin"}):e._e()]),s("div",{staticClass:"set__box ds-inline-block mt-20"},[s("span",{staticClass:"ds-inline-block mr-20"},[e._v("Break Time : ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.setTime.break,expression:"setTime.break"}],staticClass:"ds-inline-block set__input text-center mr-20",attrs:{type:"text"},domProps:{value:e.setTime.break},on:{input:function(t){t.target.composing||e.$set(e.setTime,"break",t.target.value)}}}),s("span",{staticClass:"ds-inline-block mr-20"},[e._v("Minutes")]),s("button",{staticClass:"btn set__btn mr-5",on:{click:function(t){return e.editTime("break")}}},[e._v(" save ")]),"break"===e.isSave?s("i",{staticClass:"fas fa-spinner fa-spin"}):e._e()]),s("Message")],1)},o=[],r=s("5530"),m=s("2f62"),l=s("0f7d"),c={components:{Message:l["a"]},data:function(){return{setTime:{work:0,break:0},isSave:""}},computed:Object(r["a"])({},Object(m["b"])(["nowTask","isDoing","time"])),mounted:function(){this.getTime(),this.setTime.work=this.time.work,this.setTime.break=this.time.break},methods:{getTime:function(){this.$store.dispatch("getTime")},messageDisplay:function(e,t){this.$store.dispatch("messageDisplay",{message:e,display:t})},editTime:function(e){var t=this,s="";return""!==this.nowTask?(s="請完成或取消任務後在進行修改",void this.messageDisplay(s,!0)):this.setTime.work<=0||this.setTime.work>99||""===this.setTime.work?(s="Work Time 不得等於 0 或大於 99",void this.messageDisplay(s,!0)):this.setTime.break<=0||this.setTime.break>99||""===this.setTime.break?(s="Break Time 不得等於 0 或大於 99",void this.messageDisplay(s,!0)):(this.isSave=e,void setTimeout((function(){var e={work:t.setTime.work,break:t.setTime.break};localStorage.setItem("time",JSON.stringify(e)),t.getTime(),t.isSave="",s="修改成功",t.messageDisplay(s,!0)}),500))}}},u=c,k=s("2877"),p=Object(k["a"])(u,n,o,!1,null,null,null),d=p.exports,b={components:{SetOption:d}},v=b,T=Object(k["a"])(v,i,a,!1,null,null,null);t["default"]=T.exports}}]);
//# sourceMappingURL=chunk-2d0df029.dad85113.js.map