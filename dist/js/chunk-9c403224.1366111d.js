(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9c403224"],{"387d":function(a,t,e){},cd56:function(a,t,e){"use strict";e.r(t);var r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"main"},[e("div",[e("router-view")],1),e("van-tabbar",{on:{change:a.toggleTabBar},model:{value:a.tabBarName,callback:function(t){a.tabBarName=t},expression:"tabBarName"}},a._l(a.tabBarData,(function(t,r){return e("van-tabbar-item",{key:r,attrs:{icon:t.icon}},[a._v(a._s(t.title))])})),1)],1)},n=[],i=(e("77ad"),{data:function(){return{tabBarName:0,tabBarData:[{icon:"wap-home",title:"首页",routeName:"Home",url:"/main/home"},{icon:"qr",title:"分类",routeName:"Category",url:"/main/category"},{icon:"shopping-cart-o",title:"购物车",routeName:"Shopcart",url:"/main/shopcart"},{icon:"contact",title:"我",routeName:"My",url:"/main/my"}]}},created:function(){for(var a=location.hash.slice(1),t=0;t<this.tabBarData.length;t++)if(this.tabBarData[t].url==a){this.tabBarName=t;break}},updated:function(){for(var a=location.hash.slice(1),t=0;t<this.tabBarData.length;t++)if(this.tabBarData[t].url==a){this.tabBarName=t;break}},methods:{toggleTabBar:function(a){this.$router.push({name:this.tabBarData[a].routeName})}}}),o=i,c=(e("e583"),e("9ca4")),u=Object(c["a"])(o,r,n,!1,null,"3f761884",null);t["default"]=u.exports},e583:function(a,t,e){"use strict";var r=e("387d"),n=e.n(r);n.a}}]);
//# sourceMappingURL=chunk-9c403224.1366111d.js.map