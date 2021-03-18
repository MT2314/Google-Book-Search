(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{49:function(e,t,a){e.exports=a(89)},54:function(e,t,a){},55:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(20),o=a.n(l),c=(a(54),a(22)),i=a(7),s=(a(55),a(56),a(92)),m=a(93),u=a(91),d=function(){return r.a.createElement("div",null,r.a.createElement(s.a,{collapseOnSelect:!0,expand:"lg"},r.a.createElement("h1",{href:"/",style:{textAlign:"center",fontSize:"5em",width:"100%",marginTop:"4%"}},"Book Search"),r.a.createElement(s.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(s.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(m.a,{className:"mt-3 ml-3",style:{position:"absolute",top:0,left:0}},r.a.createElement(c.b,{className:"navlink mr-2",to:"/"},r.a.createElement(u.a,{variant:"outline-primary",size:"lg"}," Search ")),r.a.createElement(c.b,{className:"navlink",to:"/saved"},r.a.createElement(u.a,{variant:"outline-primary",size:"lg"},"Saved")," ")))))},f=a(18),v=a(14),h=a.n(v),E=a(94),p=function(){return h.a.get("/api/books")},g=function(e){return h.a.delete("/api/books/"+e)},b=function(e){return h.a.post("/api/books",e)},k=function(e,t){return h.a.put("/api/books/"+e,{read:!0})},y=function(e,t){return h.a.put("/api/books/"+e,t,{favourite:t})},N=a(48),w=a(0),x=function(e){var t=e.handleChange,a=e.handleSubmit;return r.a.createElement("form",{onSubmit:a,style:{marginLeft:"10%"}},r.a.createElement("div",{className:"card-header main-search ml-5"},r.a.createElement("div",{className:"row"},r.a.createElement("input",{type:"submit",value:"Search",className:"btn btn-primary search-btn",style:{display:"inline-block",width:"8em"}}),r.a.createElement("input",{onChange:t,style:{height:"3em",width:"60%"},className:"AutoFocus form-control ml-2",placeholder:"Search by Author or Book Title...",type:"text"}))))};var S=function(){var e=Object(n.useState)(""),t=Object(f.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)([]),c=Object(f.a)(o,2),i=c[0],s=c[1],m=Object(n.useState)("AIzaSyB_V20DDr3fhU_BPr1kxQ8Y8TLIRSzdqh8"),d=Object(f.a)(m,2),v=d[0],p=(d[1],Object(n.useState)("Best Seller List -- New York Times")),g=Object(f.a)(p,2),k=g[0],y=g[1];function S(e){return Object.keys(e>0)?Object.values(e).map((function(e){return r.a.createElement("p",{style:{marginBottom:0}},e)})):r.a.createElement("p",null,"No Listed Authors")}return Object(n.useEffect)((function(){h.a.get("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=694MbzN7OXrK12FTyAjrN8Zoih4ay72d").then((function(e){var t=JSON.parse(e.request.response).results.books;console.log(t);var a=[];t.map((function(e){a.push({id:Math.floor(1e3*Math.random()),saveIcon:"0.15",volumeInfo:{authors:[e.author],description:e.description,imageLinks:{thumbnail:e.book_image},link:e.book_uri,title:e.title}})})),s(a),console.log(a)}))}),[]),r.a.createElement("div",null,r.a.createElement(x,{handleChange:function(e){var t=e.target.value;l(t)},handleSubmit:function(e){e.preventDefault(),h.a.get("https://www.googleapis.com/books/v1/volumes?q="+a+"&key="+v+"&maxResults=40").then((function(e){y(a),s(e.data.items)}))}}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 col-md-12 col-xl-12"},r.a.createElement("h2",{style:{textAlign:"center",marginTop:50}},k),r.a.createElement("div",{className:"container mt-5"},i.map((function(e){return r.a.createElement(E.a,{style:{marginTop:"10px",marginLeft:"30px",marginRight:"10px"}},r.a.createElement(w.b.Provider,{value:{color:"green",size:"3em",className:"global-class-name mr-3 mt-3"}},r.a.createElement("div",null,r.a.createElement(N.a,{style:{float:"right",opacity:0}}))),r.a.createElement(E.a.Body,null,r.a.createElement(E.a.Title,{style:{fontSize:34}},e.volumeInfo.title),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(E.a.Text,null,r.a.createElement("p",null,e.volumeInfo.description?e.volumeInfo.description.substring(0,250):"No Description has been found"),r.a.createElement("h4",null,"Authors"),r.a.createElement(S,e.volumeInfo.authors)),r.a.createElement("img",{style:{marginLeft:"100px",marginRight:"50px",height:"35vh"},src:void 0!==e.volumeInfo.imageLinks?e.volumeInfo.imageLinks.thumbnail:"",alt:e.title})),r.a.createElement(u.a,{variant:"primary",onClick:function(){return function(e){console.log(i);var t=i.filter((function(t){return t.id===e}));console.log(t);var a=t[0].volumeInfo,n=a.authors,r=a.description,l=a.imageLinks,o=a.previewLink,c=a.title;a.saveIcon,console.log(t[0].volumeInfo),b({authors:n,description:r,image:l.thumbnail,link:o,title:c})}(e.id)}},"Save")))}))))))},j=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null))};a(88);function O(e){var t=e.children;return r.a.createElement("div",{className:""},r.a.createElement("ul",{className:"list-group"},t))}function I(e){var t=e.children;return r.a.createElement("li",{className:"list-group-item"},t)}var L=a(33),z=a(32),B=function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(),c=Object(f.a)(o,2);c[0],c[1];function i(){p().then((function(e){return l(e.data)})).catch((function(e){return console.log(e)}))}function s(e,t){y(e,{favourite:!t}).then((function(){return i()})).catch((function(e){return console.log(e)}))}function m(e){return Object.keys(e>0)?Object.values(e).map((function(e){return r.a.createElement("p",{style:{marginBottom:0}},e)})):r.a.createElement("p",null,"No Listed Authors")}return Object(n.useEffect)((function(){i()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:{textAlign:"center"}},"Your Saved Books"),r.a.createElement("div",{className:"row ml-4 mt-5"},r.a.createElement("div",{className:"col-sm-5 col-md-5 col-xl-5"},r.a.createElement("div",{className:"container mt-2"},r.a.createElement("h3",{className:"mt-3"},"Books I Want To Read"),a.map((function(e){return!1===e.read&&r.a.createElement("div",null,r.a.createElement(w.b.Provider,{value:{color:"red",size:"1.5em",className:"global-class-name",style:{position:"relative",marginLeft:"98%",top:15,zIndex:2}}},r.a.createElement("div",null,r.a.createElement(z.a,{onClick:function(){return t=e._id,void g(t).then((function(){return i()})).catch((function(e){return console.log(e)}));var t}}))),r.a.createElement(I,{key:e._id},r.a.createElement(E.a,null,r.a.createElement("div",{className:"d-inline"},r.a.createElement("img",{style:{marginLeft:"100px",width:100,float:"right"},src:e.image?e.image:null,alt:e.title}),r.a.createElement("h2",null,e.title),r.a.createElement(m,e.authors),r.a.createElement(u.a,{style:{marginTop:20,width:"100%",color:"white",fontSize:20},size:"sm",variant:"success",onClick:function(){return t=e._id,void k(t,{read:!0}).then((function(){return i()})).catch((function(e){return console.log(e)}));var t}},"Mark Read")))))})))),r.a.createElement("div",{className:"col-sm-3 col-md-3 col-xl-3"},r.a.createElement("div",{className:"container mt-3"},r.a.createElement("div",{className:"container mt-3",style:{marginBottom:"20%"}},r.a.createElement(O,null,r.a.createElement("h4",{className:"mt-3"},"My Favourites      ",r.a.createElement(L.a,{style:{color:"red"}})," "),a.map((function(e){return!0===e.favourite&&r.a.createElement(I,{key:e._id},r.a.createElement("strong",null,e.title))})))))),r.a.createElement("div",{className:"col-sm-3 col-md-3 col-xl-3"},r.a.createElement("div",{className:"container mt-3"},r.a.createElement(O,null,r.a.createElement("h4",{className:"mt-3"},"Books I Have Read"),a.map((function(e){return!0===e.read&&r.a.createElement("div",null,r.a.createElement(w.b.Provider,{value:{color:"red",size:"1.5em",className:"global-class-name",style:{position:"relative",marginLeft:"98%",top:15,zIndex:2}}},!1===e.favourite?r.a.createElement("div",null,r.a.createElement(z.b,{onClick:function(){return s(e._id,e.favourite)}})):r.a.createElement("div",null,r.a.createElement(L.a,{onClick:function(){return s(e._id,e.favourite)}}))),r.a.createElement(I,{key:e._id},r.a.createElement("strong",null,e.title)))})))))))};var T=function(){return r.a.createElement("div",null,r.a.createElement(c.a,null,r.a.createElement(d,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:j}),r.a.createElement(i.a,{exact:!0,path:"/saved",component:B}))))},A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(T,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");A?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):_(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):_(e)}))}}()}},[[49,1,2]]]);
//# sourceMappingURL=main.742c36cf.chunk.js.map