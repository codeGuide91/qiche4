(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qiche/detail"],{1680:function(e,t,n){"use strict";(function(e){n("48e8");a(n("66fd"));var t=a(n("a131"));function a(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},"4fbe":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n,a,r,i,c){try{var u=e[i](c),o=u.value}catch(s){return void n(s)}u.done?t(o):Promise.resolve(o).then(a,r)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var c=e.apply(t,n);function u(e){i(c,a,r,u,o,"next",e)}function o(e){i(c,a,r,u,o,"throw",e)}u(void 0)}))}}var u={data:function(){return{autoplaySwiper:!1,intervalSwiper:5e3,btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},collectionFlag:0}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(e){var t=this;return c(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.id=e.id;case 1:case"end":return n.stop()}}),n)})))()},onShow:function(t){var n=this;return c(a.default.mark((function t(){var r,i,c;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n.init(),r=e.getStorageSync("nowTable"),t.next=4,n.$api.session(r);case 4:i=t.sent,n.user=i.data,n.btnColor=n.btnColor.sort((function(){return.5-Math.random()})),c=e.getStorageSync("pingluenStateState"),c&&(e.removeStorageSync("pingluenStateState"),n.mescroll.num=1,n.upCallback(n.mescroll));case 9:case"end":return t.stop()}}),t)})))()},destroyed:function(){},methods:{download:function(t){var n=this;e.downloadFile({url:t,success:function(e){200===e.statusCode&&(n.$utils.msg("下载成功"),window.open(t))}})},init:function(){var e=this;return c(a.default.mark((function t(){var n;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$api.info("qiche",e.id);case 2:n=t.sent,e.detail=n.data,e.swiperList=e.detail.qichePhoto?e.detail.qichePhoto.split(","):[];case 5:case"end":return t.stop()}}),t)})))()},onCartTap:function(){var e=this;return c(a.default.mark((function t(){var n;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$api.page("cart",{page:1,limit:9999,qicheId:e.id});case 2:if(n=t.sent,!(n.data.list.length>0)){t.next=6;break}return e.$utils.msg("商品已添加到购物车"),t.abrupt("return");case 6:return t.next=8,e.$api.save("cart",{qicheId:e.detail.id,buyNumber:1,yonghuId:e.user.id});case 8:e.$utils.msg("添加到购物车成功");case 9:case"end":return t.stop()}}),t)})))()},onSubmit:function(){e.setStorageSync("orderGoods",[{qicheId:this.detail.id,qicheName:this.detail.qicheName,qichePhoto:this.swiperList[0],buyNumber:1,qicheNewMoney:this.detail.qicheNewMoney}]),this.$utils.jump("../qicheOrder/confirm")},mescrollInit:function(e){this.mescroll=e},downCallback:function(e){this.hasNext=!0,e.resetUpScroll()},upCallback:function(e){var t=this;return c(a.default.mark((function n(){var r;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$api.list("qicheCommentback",{page:e.num,limit:e.size,qicheId:t.id});case 2:r=n.sent,1==e.num&&(t.commentList=[]),t.commentList=t.commentList.concat(r.data.list),0==r.data.list.length&&(t.hasNext=!1),e.endSuccess(e.size,t.hasNext);case 7:case"end":return n.stop()}}),n)})))()},onCommentTap:function(){var e=this;return c(a.default.mark((function t(){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$utils.jump("../qicheCommentback/add-or-update?qicheId=".concat(e.id));case 1:case"end":return t.stop()}}),t)})))()}}};t.default=u}).call(this,n("543d")["default"])},a131:function(e,t,n){"use strict";n.r(t);var a=n("e684"),r=n("b0e7");for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);n("a5b3");var c,u=n("f0c5"),o=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],c);t["default"]=o.exports},a5b3:function(e,t,n){"use strict";var a=n("cf84"),r=n.n(a);r.a},b0e7:function(e,t,n){"use strict";n.r(t);var a=n("4fbe"),r=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=r.a},cf84:function(e,t,n){},e684:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}));var a={mescrollUni:function(){return Promise.all([n.e("common/vendor"),n.e("components/mescroll-uni/mescroll-uni")]).then(n.bind(null,"aa08"))}},r=function(){var e=this,t=e.$createElement;e._self._c},i=[]}},[["1680","common/runtime","common/vendor"]]]);