(function(t){function e(e){for(var n,r,o=e[0],l=e[1],c=e[2],d=0,f=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,o=1;o<i.length;o++){var l=i[o];0!==s[l]&&(n=!1)}n&&(a.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},s={app:0},a=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"263d":function(t,e,i){},3714:function(t,e,i){"use strict";i("263d")},"569f":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),s=(i("d3b7"),i("bc3a")),a=i.n(s),r={},o=a.a.create(r);o.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),o.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t,e){t.axios=o,window.axios=o,Object.defineProperties(t.prototype,{axios:{get:function(){return o}},$axios:{get:function(){return o}}})},n["default"].use(Plugin);Plugin;var l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Header"),i("router-view")],1)},c=[],u=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"header"},[i("div",[t._v("Arabamcom Frontend Challenge")])])}],f={},g=f,p=(i("5a5a"),i("2877")),m=Object(p["a"])(g,u,d,!1,null,"552fde61",null),v=m.exports,b={components:{Header:v}},h=b,_=Object(p["a"])(h,l,c,!1,null,null,null),C=_.exports,y=i("8c4f"),x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("Sorting"),t.loading?i("b-spinner",{staticClass:"spinner",attrs:{variant:"primary"}}):i("div",[i("div",{staticClass:"listing row"},t._l(t.dataList,(function(e){return i("div",{key:e.id,staticClass:"listing__item col-lg-3"},[i("router-link",{staticClass:"align-items-center",attrs:{to:"details/"+e.id}},[i("div",{staticClass:"listing__photo ps-0"},[i("img",{staticClass:"w-100",attrs:{src:t.carPhoto(e.photo,"160x120"),alt:""}})]),i("div",{staticClass:"listing__model text-center py-1"},[i("b",[t._v(" "+t._s(e.modelName))])]),i("div",{staticClass:"listing__title"},[t._v(" "+t._s(e.title)+" ")]),i("div",{staticClass:"d-flex justify-content-between py-2"},[i("div",{staticClass:"listing__date"},[t._v(" ilan tarihi: "+t._s(e.dateFormatted)+" ")]),i("div",{staticClass:"listing__year"},[t._v(" "+t._s(t.carYear(e.properties))+" ")])]),i("div",{staticClass:"listing__price"},[t._v(" "+t._s(e.priceFormatted)+" ")]),i("div",{staticClass:"listing__location d-flex"},[i("div",{staticClass:"me-2"},[t._v(t._s(e.location.cityName)+" /")]),i("div",[t._v(t._s(e.location.townName))])]),i("div",{staticClass:"overlay"}),i("div",{staticClass:"see-more w-100 text-center"},[t._v("Daha fazla gör")])])],1)})),0),i("Pagination")],1)],1)},w=[],k=i("5530"),j=(i("ac1f"),i("5319"),i("b0c0"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"d--md-flex align-items-center justify-content-between mb-3"},[i("div",{staticClass:"d-flex align-items-center"},[i("div",{staticClass:"me-3 sorting-btn",on:{click:function(e){return t.showModal()}}},[i("b",[t._v("Sıralama")])]),i("div",{staticClass:"sorting-items d-md-block",class:t.toggleModal?"d-block":"d-none"},[i("b-tabs",{attrs:{pills:"","nav-wrapper-class":""}},[i("b-tab",{attrs:{title:"En ucuz"},on:{click:function(e){return t.sorting("0","0")}}}),i("b-tab",{attrs:{title:"En pahali"},on:{click:function(e){return t.sorting("0","1")}}}),i("b-tab",{attrs:{title:"En eski ilan"},on:{click:function(e){return t.sorting("1","0")}}}),i("b-tab",{attrs:{title:"En yeni ilan"},on:{click:function(e){return t.sorting("1","1")}}}),i("b-tab",{attrs:{title:"En yeni model"},on:{click:function(e){return t.sorting("2","1")}}}),i("b-tab",{attrs:{title:"En eski model"},on:{click:function(e){return t.sorting("2","0")}}})],1)],1)]),i("div",{staticClass:"d-flex align-items-center justify-content-md-end"},[i("h6",{staticClass:"me-3"},[t._v("Item per page")]),i("b-tabs",[i("b-tab",{staticClass:"change-perpage me-4",attrs:{title:"24"},on:{click:function(e){return t.changePerPage(24)}}}),i("b-tab",{staticClass:"change-perpage",attrs:{title:"12"},on:{click:function(e){return t.changePerPage(12)}}})],1)],1),i("div",{directives:[{name:"show",rawName:"v-show",value:t.toggleModal,expression:"toggleModal"}],staticClass:"overlay",on:{click:function(e){return t.showModal()}}})])}),P=[],O=i("2f62"),D={name:"Sorting",data:function(){return{toggleModal:!1}},computed:Object(k["a"])({},Object(O["b"])(["sortingDetails"])),methods:{sorting:function(t,e){var i={sort:t,sortDirection:e};this.$store.commit("sortingDetails",i),this.$store.dispatch("filterList"),this.toggleModal=!1},changePerPage:function(t){var e={take:t,skip:parseInt(this.sortingDetails.skip/t)*t};this.$store.commit("sortingDetails",e),this.$store.dispatch("filterList")},showModal:function(){this.toggleModal=!this.toggleModal}}},L=D,$=(i("8d8c"),Object(p["a"])(L,j,P,!1,null,null,null)),S=$.exports,E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"overflow-auto text-center my-3 list-pagination"},[i("div",{staticClass:"d-flex justify-content-center align-items-center"},[t.currentPage>1?i("div",{staticClass:"list-pagination__btn",on:{click:function(e){return t.prevPage()}}},[t._v(" Previous ")]):t._e(),i("p",{staticClass:"mt-3 mx-5"},[t._v("Current Page: "+t._s(t.currentPage))]),i("div",{staticClass:"list-pagination__btn",on:{click:function(e){return t.nextPage()}}},[t._v("Next")])])])},M=[],I={computed:Object(k["a"])({},Object(O["b"])(["currentPage","sortingDetails"])),methods:{nextPage:function(){var t={skip:parseInt(this.sortingDetails.skip)+parseInt(this.sortingDetails.take)};this.$store.commit("sortingDetails",t),this.$store.dispatch("filterList")},prevPage:function(){var t={skip:parseInt(this.sortingDetails.skip)-parseInt(this.sortingDetails.take)};this.$store.commit("sortingDetails",t),this.$store.dispatch("filterList")}}},N=I,A=(i("3714"),Object(p["a"])(N,E,M,!1,null,"f7f33e82",null)),F=A.exports,T={name:"List",components:{Sorting:S,Pagination:F},computed:Object(k["a"])({},Object(O["b"])(["dataList","loading","sortingDetails"])),methods:{carPhoto:function(t,e){return t.replace("{0}",e)},carYear:function(t){for(var e in t)if("year"==t[e].name)return t[e].value}},mounted:function(){var t={sort:"0",sortDirection:"0",take:"20",skip:"0"};this.$store.commit("sortingDetails",t),this.$store.dispatch("filterList",t),this.$store.commit("details",{})}},H=T,z=(i("8845"),Object(p["a"])(H,x,w,!1,null,"13c8f53c",null)),J=z.exports,Y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"details"},[t.loading?i("b-spinner",{staticClass:"spinner",attrs:{variant:"primary"}}):i("div",{staticClass:"container"},[i("h5",[i("router-link",{staticClass:"mb-4 d-inline-block bg-success text-white p-2 rounded",attrs:{to:"/"}},[t._v("Back to the list page")])],1),i("h5",{staticClass:"details__title mb-4 border-bottom pb-3"},[t._v(" "+t._s(t.details.title)+" ")]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-8"},[i("Carousel")],1),i("div",{staticClass:"col-lg-4 details__description"},[i("h3",{staticClass:"details__price mb-2"},[t._v(" "+t._s(t.details.priceFormatted)+" ")]),t.details.location?i("h5",{staticClass:"mb-3"},[t._v(" "+t._s(t.details.location.cityName)+" / "+t._s(t.details.location.townName)+" ")]):t._e(),i("div",{staticClass:"details__date d-flex justify-content-between mb-2"},[i("b",[t._v("ilan tarihi:")]),t._v(" "+t._s(t.details.dateFormatted)+" ")]),i("div",{staticClass:"details__model d-flex justify-content-between mb-2"},[i("b",[t._v("model:")]),t._v(" "+t._s(t.details.modelName)+" ")]),t._l(t.details.properties,(function(e,n){return i("div",{key:n,staticClass:"d-flex justify-content-between mb-2"},[i("b",[t._v(t._s(e.name)+": ")]),i("span",[t._v(t._s(e.value))])])})),t.details.userInfo?i("div",{staticClass:"col-12 border-top py-3"},[i("b",[t._v(" "+t._s(t.details.userInfo.nameSurname)+" "),i("div",[t._v("Telefon: "+t._s(t.details.userInfo.phoneFormatted))])])]):t._e()],2),t.details.text?i("div",{staticClass:"col-12 my-3"},[i("h5",{staticClass:"pb-3"},[t._v("AÇIKLAMA")]),i("div",{staticClass:"details__description",domProps:{innerHTML:t._s(t.details.text)}})]):t._e()])])],1)},q=[],B=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("b-carousel",{attrs:{id:"carousel-1",controls:"",indicators:""},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},t._l(t.details.photos,(function(e,n){return i("b-carousel-slide",{key:n,scopedSlots:t._u([{key:"img",fn:function(){return[i("img",{staticClass:"d-block img-fluid w-100",attrs:{width:"1024",height:"480",src:t.carouselImage(e,"580x435"),alt:"image slot"},on:{click:function(e){t.index=n}}}),i("vue-gallery-slideshow",{attrs:{images:t.galleryImages("800x600"),index:t.index},on:{close:function(e){t.index=null}}})]},proxy:!0}],null,!0)})})),1)],1)},G=[],K=(i("d81d"),i("b417")),R=i.n(K),U={components:{VueGallerySlideshow:R.a},data:function(){return{slide:0,sliding:null,index:null}},methods:{onSlideStart:function(){this.sliding=!0},onSlideEnd:function(){this.sliding=!1},carouselImage:function(t,e){return t.replace("{0}",e)},galleryImages:function(t){var e=this,i=[];return this.details.photos.map((function(n){i.push(e.carouselImage(n,t))})),i}},computed:Object(k["a"])({},Object(O["b"])(["details"]))},V=U,Q=(i("ab2f"),Object(p["a"])(V,B,G,!1,null,"4e45f938",null)),W=Q.exports,X={name:"carDetails",components:{Carousel:W},mounted:function(){var t={id:this.$route.params.id};this.$store.dispatch("getDetails",t)},computed:Object(k["a"])({},Object(O["b"])(["details","loading"]))},Z=X,tt=(i("5943"),Object(p["a"])(Z,Y,q,!1,null,null,null)),et=tt.exports;n["default"].use(y["a"]);var it=[{path:"/",name:"List",component:J},{path:"/details/:id",name:"Details",component:et}],nt=new y["a"]({routes:it}),st=nt,at=a.a.create({baseURL:"https://sandbox.arabamd.com/api/v1/",headers:{"Access-Control-Allow-Origin":"*"}});at.interceptors.response.use((function(t){return 200==t.status&&lt.commit("showLoading",!1),t}),(function(t){return Promise.reject(t)}));var rt=function(t){return at.get("listing",{params:t})},ot=function(t){return at.get("detail",{params:t})};n["default"].use(O["a"]);var lt=new O["a"].Store({state:{dataList:[],details:{},sortingDetails:{},loading:!1,currentPage:1},mutations:{setList:function(t,e){t.dataList=e},details:function(t,e){t.details=e},showLoading:function(t,e){t.loading=e},sortingDetails:function(t,e){t.sortingDetails=Object(k["a"])(Object(k["a"])({},t.sortingDetails),e),t.currentPage=t.sortingDetails.skip?t.sortingDetails.skip/t.sortingDetails.take+1:1}},actions:{filterList:function(t){var e=t.state,i=t.commit;i("showLoading",!0),rt(e.sortingDetails).then((function(t){var e=t.data;i("setList",e)})).catch((function(t){console.log(t)}))},getDetails:function(t,e){var i=t.commit;i("showLoading",!0),ot(e).then((function(t){i("details",t.data)})).catch((function(t){console.log(t)}))}},getters:{dataList:function(t){return t.dataList},loading:function(t){return t.loading},details:function(t){return t.details},currentPage:function(t){return t.currentPage},sortingDetails:function(t){return t.sortingDetails}}}),ct=i("5f5b"),ut=i("b1e0");i("f9e3"),i("2dd8");n["default"].use(ct["a"]),n["default"].use(ut["a"]),n["default"].config.productionTip=!1,new n["default"]({router:st,store:lt,render:function(t){return t(C)}}).$mount("#app")},5943:function(t,e,i){"use strict";i("c9d9")},"5a5a":function(t,e,i){"use strict";i("a86d")},"6f6b":function(t,e,i){},8845:function(t,e,i){"use strict";i("569f")},"8d8c":function(t,e,i){"use strict";i("a3fc")},a3fc:function(t,e,i){},a86d:function(t,e,i){},ab2f:function(t,e,i){"use strict";i("6f6b")},c9d9:function(t,e,i){}});
//# sourceMappingURL=app.30d2cf04.js.map