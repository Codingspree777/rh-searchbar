(this["webpackJsonpsearch-bar"]=this["webpackJsonpsearch-bar"]||[]).push([[0],{11:function(e,a,t){},13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(4),l=t.n(r),s=(t(11),t(2)),i=t.n(s),o=t(5),u=t(1);function m(e){var a=e.data,t=(a||[]).map((function(e){return c.a.createElement("div",{key:e.id,className:"Table"},c.a.createElement("div",{className:"cell"},e.name),c.a.createElement("div",{className:"cell"},e.username),c.a.createElement("div",{className:"cell"},e.email),c.a.createElement("div",{className:"cell"},e.address.city),c.a.createElement("div",{className:"cell"},e.phone))}));return c.a.createElement("div",{className:"Table-Container"},c.a.createElement("div",{className:"Table-header"},c.a.createElement("div",{className:"cell"},"Name"),c.a.createElement("div",{className:"cell"},"User Name"),c.a.createElement("div",{className:"cell"},"Email"),c.a.createElement("div",{className:"cell"},"City"),c.a.createElement("div",{className:"cell"},"Phone")),t)}function d(){var e=Object(n.useState)("idle"),a=Object(u.a)(e,2),t=(a[0],a[1]),r=Object(n.useState)(),l=Object(u.a)(r,2),s=l[0],d=l[1],v=Object(n.useState)(),h=Object(u.a)(v,2),f=h[0],E=h[1];Object(n.useEffect)((function(){(function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t("fetching"),e.next=3,fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){d(e),E(e)})).then((function(){return t("fetched")})).catch((function(e){return alert(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return c.a.createElement("div",null,c.a.createElement("div",{className:"search-label"},"Search"),c.a.createElement("input",{onChange:function(e){e.preventDefault();var a=s.filter((function(a){return isNaN(e.target.value)?a.name.toLowerCase().includes(e.target.value.toLowerCase()):a.phone.toLowerCase().includes(e.target.value.toLowerCase())}));""===e.target.value?d(f):d(a)},type:"input",className:"search-input"}),c.a.createElement(m,{data:s}))}t(13);var v=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"Search-Container"},c.a.createElement(d,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,a,t){e.exports=t(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.474ec2da.chunk.js.map