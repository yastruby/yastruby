(function(t){function e(e){for(var r,s,i=e[0],u=e[1],c=e[2],l=0,f=[];l<i.length;l++)s=i[l],a[s]&&f.push(a[s][0]),a[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var i=n[s];0!==a[i]&&(r=!1)}r&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},s={app:0},a={app:0},o=[];function i(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"97956793"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={about:1};s[t]?e.push(s[t]):0!==s[t]&&n[t]&&e.push(s[t]=new Promise(function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"4b77b275"}[t]+".css",a=u.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var c=o[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){c=f[i],l=c.getAttribute("data-href");if(l===r||l===a)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||a,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.request=r,delete s[t],d.parentNode.removeChild(d),n(o)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){s[t]=0}));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise(function(e,n){r=a[t]=[e,n]});e.push(r[2]=o);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(t),c=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+r+": "+s+")");o.type=r,o.request=s,n[1](o)}a[t]=void 0}};var f=setTimeout(function(){c({type:"timeout",target:l})},12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var f=0;f<c.length;f++)e(c[f]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1:function(t,e){},2:function(t,e){},3:function(t,e){},4:function(t,e){},5:function(t,e){},"512f":function(t,e,n){"use strict";var r=n("9fb9"),s=n.n(r);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Гурток Яструби")])],1),n("div",{staticClass:"content"},[n("router-view")],1)])},a=[],o=(n("5c0b"),n("2877")),i={},u=Object(o["a"])(i,s,a,!1,null,null,null),c=u.exports,l=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("RatingList",{staticClass:"rating"})],1)},d=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isLoading?n("div",{staticClass:"spinner-wrapper"},[n("i",{staticClass:"fas fa-spinner spinner"})]):t._e(),n("div",{staticClass:"block"},t._l(t.getUsers(),function(e,r){return n("li",{key:e.id},[n("router-link",{staticClass:"user-link",attrs:{to:{name:"user",params:{id:e.id}}}},[n("div",[t._v("\n                "+t._s(r+1)+"."+t._s(e.name)+"\n                "),2===parseInt(e.job.split("-")[1])?n("i",{staticClass:"fas fa-grip-lines-vertical rank"}):t._e(),1===parseInt(e.job.split("-")[1])?n("span",{staticClass:"fas fa-minus rank-single"}):t._e()]),n("div",{staticClass:"total"},[n("div",[t._v(t._s(e.total))]),n("div",[1==e.vector?n("i",{staticClass:"fas fa-caret-up green"}):-1==e.vector?n("i",{staticClass:"fas fa-caret-down red"}):t._e()])])])],1)}),0),n("div",[n("h3",[t._v("Проба гуртка: "+t._s(t.getTotalTestsPassed/2)+" / 567")]),n("progress",{attrs:{max:"567"},domProps:{value:t.getTotalTestsPassed/2}})])])},g=[],m=n("795b"),v=n.n(m),h=(n("96cf"),n("3b8d")),b=n("fe83");function y(){return w.apply(this,arguments)}function w(){return w=Object(h["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new v.a(function(t,e){b.init({key:"https://docs.google.com/spreadsheets/d/1v6LSaDAhwCnCjPc7RAjK6DnXOvqwTp2h3RofxIErma8/edit?usp=sharing",callback:function(e,n){t(e)},simpleSheet:!0})}));case 1:case"end":return t.stop()}},t)})),w.apply(this,arguments)}var T={name:"RatingList",methods:{getUsers:function(){return this.$store.getters.users}},computed:{isLoading:function(){return this.$store.getters.isLoading},getTotalTestsPassed:function(){return this.$store.getters.totalTestPassed}},mounted:function(){this.$store.dispatch("fetchUsers")}},P=T,_=Object(o["a"])(P,p,g,!1,null,null,null),O=_.exports,j={name:"rating",components:{RatingList:O}},k=j,L=(n("512f"),Object(o["a"])(k,f,d,!1,null,null,null)),C=L.exports;r["a"].use(l["a"]);var x=new l["a"]({routes:[{path:"/",name:"rating",component:C},{path:"/user/:id",name:"user",component:function(){return n.e("about").then(n.bind(null,"1511"))}}]}),E=(n("55dd"),n("a4bb")),S=n.n(E),R=n("e814"),U=n.n(R),$=n("2f62");r["a"].use($["a"]);var A=new $["a"].Store({state:{users:[],loading:!0,totalTestsPassed:0,tests:[]},getters:{users:function(t){return t.users},getUserById:function(t){return function(e){return t.users.filter(function(t){return t.id==U()(e)})}},isLoading:function(t){return t.loading},totalTestPassed:function(t){return t.totalTestsPassed},getTestByUserId:function(t){return function(e){return t.tests.filter(function(t){return t.userId==U()(e)})}}},mutations:{turnOnLoading:function(t){r["a"].set(t,"loading",!0)},turnOffLoading:function(t){console.log(t.loading),r["a"].set(t,"loading",!1)},fetchUsers:function(t,e){r["a"].set(t,"users",e)},countTotalTestsPassed:function(t,e){var n=t.users.reduce(function(t,e){return U()(t)+U()(e.testPassed)},0);r["a"].set(t,"totalTestsPassed",n)},getUserData:function(t,e){r["a"].set(t,"tests",e)}},actions:{turnOnLoading:function(t){t.commit("turnOnLoading")},turnOffLoading:function(t){t.commit("turnOffLoading")},countTotalTestsPassed:function(t){t.commit("countTotalTestsPassed")},fetchUsers:function(){var t=Object(h["a"])(regeneratorRuntime.mark(function t(e){var n,r,s,a,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,r=e.dispatch,s={id:"id","імя":"name","проба здано":"testPassed","присутність":"presence","вмілості":"skills","однострій":"uniform","загальна кількість":"total","вектор":"vector","діловодство":"job","завдання до сходин":"tasks"},r("turnOnLoading"),t.next=5,y();case 5:a=t.sent,console.log(a),o=a.map(function(t){var e={};return S()(t).map(function(n){e[s[n]]=t[n]}),e}),o.sort(function(t,e){return U()(t.total)>U()(e.total)?-1:U()(t.total)<U()(e.total)?1:0}),r("turnOffLoading"),n("fetchUsers",o),r("countTotalTestsPassed");case 12:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}()}});r["a"].config.productionTip=!1,new r["a"]({router:x,store:A,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("5e27"),s=n.n(r);s.a},"5e27":function(t,e,n){},"9fb9":function(t,e,n){}});
//# sourceMappingURL=app.ced6fcb7.js.map