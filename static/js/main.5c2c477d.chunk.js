(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(2),r=n.n(i),l=(n(14),n(3)),c=n(4),s=n(6),u=n(5),d=n(7),m=(n(15),n(16),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={color:"Merah",img:"merah2.jpg",title:"Ma-Merah"},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"clicked",value:function(e){this.setState({color:e.color,img:e.img,title:e.title})}},{key:"info",value:function(e){return"Calculator"==e?o.a.createElement("div",null,o.a.createElement("span",{className:"selected"+this.state.color},this.state.title),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("input",{type:"number",placeholder:"1"}),"+",o.a.createElement("input",{type:"number",placeholder:"2"}),"=",o.a.createElement("span",null," ..."),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("button",null," hitung ")):o.a.createElement("div",null,"Ini adalah ",o.a.createElement("span",{className:"selected "+this.state.color},this.state.title)," ",o.a.createElement("br",null)," ",o.a.createElement("br",null),o.a.createElement("img",{src:this.state.img,width:"200"}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:"app"},o.a.createElement("nav",{className:"nav"},this.props.items.map(function(t,n){var a="menu";return e.state.color===t.color&&(a="".concat(a," is-active")),o.a.createElement("a",{className:a+" "+t.color,onClick:e.clicked.bind(e,t),key:n},t.title)})),o.a.createElement("div",{className:"info "},this.info(this.state.title)))}}]),t}(a.Component)),h=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(o.a.createElement(m,{items:[{color:"Merah",img:"merah2.jpg",title:"Ma-Merah"},{color:"Kuning",img:"kuning1.jpg",title:"Ma-Kuning"},{color:"Hijau",img:"hijau1.jpg",title:"Ma-Hijau"},{color:"Biru",img:"biru.jpg",title:"Ma-Biru"},{color:"Gray",title:"Calculator"}]}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/duadelapan",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/duadelapan","/service-worker.js");h?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):g(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):g(t,e)})}}()}],[[8,1,2]]]);
//# sourceMappingURL=main.5c2c477d.chunk.js.map