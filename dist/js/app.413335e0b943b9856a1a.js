(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{152:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),c=n(14),u=n.n(c),a=n(85),i=n(58),l=n(15),s=n(83),f=n(38),d={count:0};var p=n(39);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach(function(t){b(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g={isLoading:!1,userInfo:{},errorMsg:""};var h,O=Object(l.combineReducers)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;switch((arguments.length>1?arguments[1]:void 0).type){case f.b:return{count:e.count+1};case f.a:return{count:e.count-1};case f.c:return{count:0};default:return e}},userInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.b:return E({},e,{isLoading:!0,userInfo:{},errorMsg:""});case p.c:return E({},e,{isLoading:!1,userInfo:t.userInfo,errorMsg:""});case p.a:return E({},e,{isLoading:!1,userInfo:{},errorMsg:"请求错误"});default:return e}}}),v=Object(l.createStore)(O,Object(l.applyMiddleware)(s.a)),y=(n(102),n(21)),j=n(16),I=n(31),w=n(84),P=n.n(w),S=Object(I.a)(function(){return Promise.all([n.e(0),n.e(1),n.e(6)]).then(n.bind(null,286))}),L=Object(I.a)(function(){return Promise.all([n.e(0),n.e(1),n.e(7)]).then(n.bind(null,287))}),R=Object(I.a)(function(){return Promise.all([n.e(0),n.e(1),n.e(4)]).then(n.bind(null,288))}),_=Object(I.a)(function(){return Promise.all([n.e(0),n.e(1),n.e(5)]).then(n.bind(null,289))}),C=function(){return o.a.createElement(y.BrowserRouter,null,o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("img",{src:P.a})),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(y.Link,{to:"/"},"首页")),o.a.createElement("li",null,o.a.createElement(y.Link,{to:"/page1"},"Page1")),o.a.createElement("li",null,o.a.createElement(y.Link,{to:"/Counter"},"Counter")),o.a.createElement("li",null,o.a.createElement(y.Link,{to:"/UserInfo"},"UserInfo"))),o.a.createElement(j.d,{exact:!0,path:"/",component:S}),o.a.createElement(j.d,{path:"/page1",component:L}),o.a.createElement(j.d,{path:"/counter",component:R}),o.a.createElement(j.d,{path:"/userInfo",component:_})))},k=document.createElement("div");k.setAttribute("id","root"),document.body.appendChild(k),h=C(),u.a.render(o.a.createElement(a.AppContainer,null,o.a.createElement(i.Provider,{store:v},h)),document.getElementById("root"))},38:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return o}),n.d(t,"c",function(){return c});var r="counter/INCREMENT",o="counter/DECREMENT",c="counter/RESET"},39:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return c}),n.d(t,"d",function(){return u});var r="userInfo/GET_USER_INFO_REQUEST",o="userInfo/GET_USER_INFO_SUCCESS",c="userInfo/GET_USER_INFO_FAIL";function u(){return function(e){return e({type:r}),fetch("http://localhost:7777/static/user.json").then(function(e){return e.json()}).then(function(t){e({type:o})}).catch(function(){e({type:c})})}}},84:function(e,t){e.exports="/images/logo192.png"},92:function(e,t,n){n(93),e.exports=n(152)}},[[92,3,0,1]]]);