(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52927128"],{"2dc7":function(t,a,i){t.exports=i.p+"img/header.50fd5a93.png"},3426:function(t,a,i){"use strict";var s=i("671a"),e=i.n(s);e.a},"671a":function(t,a,i){},"84af":function(t,a,i){"use strict";var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"banner clearfix"},[i("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3e3,"indicator-color":"white"}},t._l(t.bannerDeta,(function(t,a){return i("van-swipe-item",{key:a},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.image_src,expression:"item.image_src"}],staticClass:"auto-img",attrs:{alt:""}})])})),1)],1)},e=[],n={data:function(){return{bannerDeta:[]}},created:function(){this.Banner()},methods:{Banner:function(){var t=this;this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({methods:"GET",url:"/home/swiperdata"}).then((function(a){t.$toast.clear(),(a.data.meta.status=200)&&(t.bannerDeta=a.data.message)})).catch((function(a){t.$toast.clear()}))}}},c=n,r=(i("3426"),i("9ca4")),o=Object(r["a"])(c,s,e,!1,null,"8c50115e",null);a["a"]=o.exports},a02e:function(t,a,i){"use strict";var s=i("f77b"),e=i.n(s);e.a},aca1:function(t,a){t.exports="data:image/png;base64,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"},b288:function(t,a,i){"use strict";i.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"home"},[s("div",{staticClass:"header"},[s("div",{staticClass:"header_top"},[s("div",{staticClass:"header_top_title fl",on:{click:function(a){return t.goPage("Category")}}},[s("van-icon",{attrs:{name:"qr",size:"20px"}}),s("span",[t._v("分类")])],1),t._m(0),s("div",{staticClass:"header_top_title fr"},[s("van-icon",{attrs:{name:"manager-o",size:"20px"},on:{click:function(a){return t.goPage("Account")}}}),s("span",[t._v("用户")])],1)]),s("div",{staticClass:"header_bottom"},[s("van-search",{attrs:{"left-icon":"","right-icon":"search",shape:"round",placeholder:"请搜索商品",background:"rgb(50,150,248)"},on:{focus:function(a){return t.goPage("Search")}}})],1),t._m(1)]),s("Banner"),s("div",{staticClass:"navigation clearfix"},[s("ul",t._l(t.navigation,(function(a,i){return s("li",{key:i},[s("img",{attrs:{src:a.img}}),s("div",[t._v(t._s(a.name))])])})),0)]),s("div",{staticClass:"noticeBar"},[s("van-notice-bar",{attrs:{background:"rgb(255,254,250)",color:"rgb(113,113,113)",scrollable:!1},scopedSlots:t._u([{key:"left-icon",fn:function(){return[s("img",{attrs:{src:i("aca1")}})]},proxy:!0}])},[s("van-swipe",{staticClass:"notice-swipe",attrs:{vertical:"",autoplay:3e3,"show-indicators":!1}},[s("van-swipe-item",[t._v("吉林省物流通知")]),s("van-swipe-item",[t._v("2020年7月北京物流通知")]),s("van-swipe-item",[t._v("2020年7月新疆物流通知")])],1)],1)],1),s("Spike"),t._l(t.floordata,(function(t,a){return s("div",{key:a,staticClass:"floordata"},[s("div",{staticClass:"floordata_title"},[s("img",{attrs:{src:t.floor_title.image_src,alt:""}})]),s("div",{staticClass:"product_list clearfix"},[s("div",{staticClass:"product_list_left fl"},[s("img",{attrs:{src:t.product_list[0].image_src,alt:"",srcset:""}})]),s("div",{staticClass:"product_list_right fl"},[s("img",{staticClass:"auto-img fl",attrs:{src:t.product_list[1].image_src,alt:"",srcset:""}}),s("img",{staticClass:"auto-img fl",attrs:{src:t.product_list[2].image_src,alt:"",srcset:""}}),s("img",{staticClass:"auto-img fl",attrs:{src:t.product_list[3].image_src,alt:"",srcset:""}}),s("img",{staticClass:"auto-img fl",attrs:{src:t.product_list[4].image_src,alt:"",srcset:""}})])])])})),s("Recommend")],2)},e=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"header_gif fl"},[i("img",{staticClass:"auto-img",attrs:{src:"https://image2.suning.cn/uimg/cms/img/159645596551816272.gif",alt:""}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"header_img"},[s("img",{attrs:{src:i("2dc7"),alt:""}})])}],n=i("f410"),c=i("84af"),r=i("db7e"),o={data:function(){return{navigation:[{img:"https://image2.suning.cn/uimg/cms/img/158140198536389245.png?from=mobile",name:"天天低价"},{img:"https://image1.suning.cn/uimg/cms/img/158225094251284751.png?from=mobile",name:"小鹅超市"},{img:"https://image2.suning.cn/uimg/cms/img/158225098618947382.png?from=mobile",name:"小鹅拼购"},{img:"https://image1.suning.cn/uimg/cms/img/158225102941495158.png?from=mobile",name:"5G手机"},{img:"https://image1.suning.cn/uimg/cms/img/158225106790473382.png?from=mobile",name:"小鹅家电"},{img:"https://image1.suning.cn/uimg/cms/img/158225110605546246.png?from=mobile",name:"免费水果"},{img:"https://image3.suning.cn/uimg/cms/img/158225119197911173.png?from=mobile",name:"赚钱消消乐"},{img:"https://image3.suning.cn/uimg/cms/img/158225123358512204.png?from=mobile",name:"签到有礼"},{img:"https://image1.suning.cn/uimg/cms/img/158225129991255185.png?from=mobile",name:"领劵中心"},{img:"https://image2.suning.cn/uimg/cms/img/158225135374622745.png?from=mobile",name:"更多频道"}],floordata:[]}},created:function(){this.Floordata()},methods:{Navigation:function(){var t=this;this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({methods:"GET",url:"/home/catitems"}).then((function(a){t.$toast.clear(),(a.data.meta.status=200)&&(t.navigation=a.data.message)})).catch((function(a){t.$toast.clear()}))},Floordata:function(){var t=this;this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({methods:"GET",url:"/home/floordata"}).then((function(a){t.$toast.clear(),(a.data.meta.status=200)&&(t.floordata=a.data.message)})).catch((function(a){t.$toast.clear()}))},goPage:function(t){localStorage.getItem("__Tk")?this.$router.push({name:t}):this.$toast("请先登录")}},components:{Recommend:n["a"],Banner:c["a"],Spike:r["a"]}},m=o,g=(i("a02e"),i("9ca4")),l=Object(g["a"])(m,s,e,!1,null,"cc406b28",null);a["default"]=l.exports},f77b:function(t,a,i){}}]);
//# sourceMappingURL=chunk-52927128.2f357e18.js.map