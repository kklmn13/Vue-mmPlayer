webpackJsonp([7],{"+YtT":function(t,e){},"3uZ1":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Dd8w"),s=a.n(i),n=a("NYxO"),l=a("gyMJ"),c=a("6Pj+"),o=a("kvay"),d=a("G3uJ"),m={name:"detail",mixins:[a("5jRo").a],components:{MmLoading:c.a,MusicList:o.a},data:function(){return{list:[]}},created:function(){var t=this;Object(l.e)(this.$route.params.id).then(function(e){200===e.data.code&&(t.list=Object(d.c)(e.data.playlist.tracks),document.title=e.data.playlist.name+" - mmPlayer在线音乐播放器",t._hideLoad())})},methods:s()({selectItem:function(t,e){this.selectPlay({list:this.list,index:e})}},Object(n.b)(["selectPlay"]))},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"details"},[a("mm-loading",{model:{value:t.mmLoadShow,callback:function(e){t.mmLoadShow=e},expression:"mmLoadShow"}}),t._v(" "),a("music-list",{attrs:{list:t.list},on:{select:t.selectItem}})],1)},staticRenderFns:[]};var u=a("VU/8")(m,r,!1,function(t){a("+YtT")},"data-v-5b9a0df1",null);e.default=u.exports}});