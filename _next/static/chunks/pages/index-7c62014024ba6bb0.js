(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5075)}])},5075:function(t,e,n){"use strict";n.r(e);var r=n(5666),a=n.n(r),o=n(5893),c=n(5988),s=n(9008),i=n(7294),u=n(4732),f=n(9446);function d(t,e,n,r,a,o,c){try{var s=t[o](c),i=s.value}catch(u){return void n(u)}s.done?e(i):Promise.resolve(i).then(r,a)}function l(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function c(t){d(o,r,a,c,s,"next",t)}function s(t){d(o,r,a,c,s,"throw",t)}c(void 0)}))}}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){h(t,e,n[e])}))}return t}var v=function(t){var e=t.data;return(0,o.jsx)(f.PieChart,{data:e,radius:5,center:[5,5],startAngle:270})};e.default=function(){var t=(0,i.useState)(void 0),e=t[0],n=t[1],r=(0,i.useState)([]),f=r[0],d=r[1],h=(0,i.useState)({width:"100vw",height:"100vh",longitude:139.52197653435175,latitude:35.7918012662416,zoom:9}),x=h[0],b=h[1];(0,i.useEffect)((function(){l(a().mark((function t(){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("./tokyo-opendata-dashboard/japan_tokyo.json");case 2:return e=t.sent,t.next=5,e.json();case 5:r=t.sent,n(r);case 7:case"end":return t.stop()}}),t)})))()}),[]);var j=(0,i.useCallback)(l(a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:b(e);case 1:case"end":return t.stop()}}),t)}))),[]);return(0,i.useEffect)((function(){l(a().mark((function t(){var e,n,r,o,c,s,i,u;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/tokyo-opendata-dashboard/opendata_status.csv");case 2:return e=t.sent,t.next=5,e.text();case 5:return n=t.sent,r=n.split("\n"),o=r.map((function(t){var e=t.split(",");return{code:e[1],exists:+e[2],none:+e[3],all:+e[2]+e[3]}})),t.next=10,fetch("/tokyo-opendata-dashboard/tokyo_office.csv");case 10:return c=t.sent,t.next=13,c.text();case 13:s=t.sent,i=s.split("\n"),u=i.map((function(t){var e=t.split(","),n={code:e[0],name:e[1],longitude:+e[2],latitude:+e[3],data:[]},r=o.filter((function(t){return t.code===n.code}));if(r.length>0){var a=r[0].exists,c=r[0].none;n.data=[{title:"exists",value:a,color:"#0000ff"},{title:"none",value:c,color:"#ff0000"}]}return n})),d(u);case 17:case"end":return t.stop()}}),t)})))()}),[]),(0,o.jsxs)("div",{className:"jsx-4d9b3c690f5df9ad container",children:[(0,o.jsxs)(s.default,{children:[(0,o.jsx)("title",{className:"jsx-4d9b3c690f5df9ad",children:"\u6771\u4eac\u90fd\u30aa\u30fc\u30d7\u30f3\u30c7\u30fc\u30bf\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico",className:"jsx-4d9b3c690f5df9ad"})]}),(0,o.jsx)("div",{id:"map",className:"jsx-4d9b3c690f5df9ad",children:(0,o.jsxs)(u.ZP,p({},x,{mapStyle:"https://raw.githubusercontent.com/geolonia/notebook/master/style.json",onViewportChange:j,children:[e&&!1,f.map((function(t,e){return(0,o.jsx)(u.Jx,{latitude:t.latitude,longitude:t.longitude,offsetLeft:-10,offsetTop:-10,children:(0,o.jsx)(v,{data:t.data})},e)}))]}))}),(0,o.jsx)(c.default,{id:"4d9b3c690f5df9ad",children:".container.jsx-4d9b3c690f5df9ad, #map.jsx-4d9b3c690f5df9ad {height:100vh;\nwidth:100vw;\nmargin:0;\npadding:0}"})]})}}},function(t){t.O(0,[644,777,173,774,888,179],(function(){return e=5301,t(t.s=e);var e}));var e=t.O();_N_E=e}]);