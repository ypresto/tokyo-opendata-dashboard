(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[456],{4883:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/deckgl",function(){return n(7542)}])},7542:function(e,t,n){"use strict";n.r(t);var r=n(5666),o=n.n(r),i=n(5893),a=n(7294),u=n(3545),c=n(2708),s=n(5619),f=n(3863);function l(e,t,n,r,o,i,a){try{var u=e[i](a),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(r,o)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(e){var t=e.data;return[[],new s.Z({data:"https://c.tile.openstreetmap.org/{z}/{x}/{y}.png",minZoom:0,maxZoom:19,tileSize:256,renderSubLayers:function(e){var t=e.tile.bbox,n=t.west,r=t.south,o=t.east,i=t.north;return new f.Z(e,{data:null,image:e.data,bounds:[n,r,o,i]})}}),new c.Z({data:"./japan_tokyo.json",filled:!0,stroked:!0,getLineWidth:30,getLineColor:[0,0,0,100],getFillColor:function(e){var n=t.filter((function(t){return!!e.properties.code&&t.code===e.properties.code.toString().slice(0,-1)}));if(n.length>0){var r=n[0].exists+n[0].none,o=255-Math.floor(r/(3500/255));return[o,o,255,100]}return[255,255,255,100]}})]};t.default=function(){var e=(0,a.useState)({}),t=e[0],n=e[1];(0,a.useEffect)((function(){var e;(e=o().mark((function e(){var t,r,i,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("./opendata_status.csv");case 2:return t=e.sent,e.next=5,t.text();case 5:r=e.sent,i=r.split("\n"),a=i.map((function(e){var t=e.split(",");return{code:t[1],exists:+t[2],none:+t[3]}})),n(a);case 9:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){l(i,r,o,a,u,"next",e)}function u(e){l(i,r,o,a,u,"throw",e)}a(void 0)}))})()}),[]);var r=(0,a.useState)({width:"100vw",height:"100vh",longitude:139.521976,latitude:35.791801,zoom:10,maxZoom:16,pitch:30,bearing:0}),c=r[0],s=r[1];return(0,a.useEffect)((function(){var e=function(){s((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){d(e,t,n[t])}))}return e}({},e,{width:"100vw",height:"100vh"})}))};return e(),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),(0,i.jsxs)("div",{className:"App",children:[(0,i.jsx)(u.Z,{layers:p({data:t}),controller:{dragRotate:!1},initialViewState:c}),(0,i.jsx)("div",{className:"attribution",children:(0,i.jsx)("a",{href:"http://www.openstreetmap.org/about/",target:"_blank",rel:"noopener noreferrer",children:"\xa9 OpenStreetMap"})})]})}},643:function(){},9214:function(){}},function(e){e.O(0,[777,196,774,888,179],(function(){return t=4883,e(e.s=t);var t}));var t=e.O();_N_E=t}]);