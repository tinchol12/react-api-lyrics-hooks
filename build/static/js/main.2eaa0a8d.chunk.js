(this["webpackJsonplyrics-api"]=this["webpackJsonplyrics-api"]||[]).push([[0],{17:function(e,a,t){e.exports=t(41)},22:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(15),l=t.n(c),s=(t(22),t(3)),o=t.n(s),m=t(2),i=t(4),u=t(16);var d=function(e){var a=e.consultarAPILetra,t=Object(r.useState)({artista:"",cancion:""}),c=Object(m.a)(t,2),l=c[0],s=c[1],o=function(e){s(Object(u.a)({},l,Object(i.a)({},e.target.name,e.target.value)))};return n.a.createElement("div",{className:"bg-info"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(l)},className:"col card text-white bg-transparent  mb-5 pt-5 pb-2"},n.a.createElement("fieldset",null,n.a.createElement("legend",{className:"text-center"},"Buscador Letras Canciones"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Artista"),n.a.createElement("input",{type:"text",className:"form-control",name:"artista",placeholder:"Nombre Artista",onChange:o,required:!0}))),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Canci\xf3n"),n.a.createElement("input",{type:"text",className:"form-control",name:"cancion",placeholder:"Nombre Canci\xf3n",onChange:o,required:!0})))),n.a.createElement("button",{type:"submit",className:"btn btn-primary float-right"},"Buscar"))))))},f=t(5),p=t.n(f);var E=function(e){var a=e.letra;return 0===a.length?null:n.a.createElement(r.Fragment,null,n.a.createElement("h2",null," Lyrics "),n.a.createElement("p",{className:"letra"}," ",a," "))};var b=function(e){var a=e.info;return 0===Object.keys(a).length?null:n.a.createElement("div",{className:"card border-light"},n.a.createElement("div",{className:"card-header bg-primary text-light font-weight-bold"},"Informaci\xf3n Artista"),n.a.createElement("div",{className:"card-body"},n.a.createElement("img",{src:a.strArtistThumb,alt:"Logo Artista"}),n.a.createElement("p",{className:"card-text"},"G\xe9nero: ",a.strGenre),n.a.createElement("h2",{className:"card-text text-center"},"Biograf\xeda"),n.a.createElement("p",{className:"card-text"},a.strBiographyES),n.a.createElement("p",{className:"card-text"},n.a.createElement("a",{href:"https://".concat(a.strFacebook),target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"fab fa-facebook"})),n.a.createElement("a",{href:"https://".concat(a.strTwitter),target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"fab fa-twitter"})),n.a.createElement("a",{href:"".concat(a.strLastFMChart),target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"fab fa-lastfm"})))))};var h=function(){var e=Object(r.useState)(""),a=Object(m.a)(e,2),t=a[0],c=a[1],l=Object(r.useState)([]),s=Object(m.a)(l,2),i=s[0],u=s[1],f=Object(r.useState)({}),h=Object(m.a)(f,2),v=h[0],N=h[1];return Object(r.useEffect)((function(){!function(){var e,a;o.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t){r.next=6;break}return e="https://theaudiodb.com/api/v1/json/1/search.php?s=".concat(t),r.next=4,o.a.awrap(p()(e));case 4:a=r.sent,N(a.data.artists[0]);case 6:case"end":return r.stop()}}))}()}),[t]),n.a.createElement(r.Fragment,null,n.a.createElement(d,{consultarAPILetra:function(e){var a,t,r,n;return o.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return a=e.artista,t=e.cancion,r="https://api.lyrics.ovh/v1/".concat(a,"/").concat(t),l.next=4,o.a.awrap(p()(r));case 4:n=l.sent,c(a),u(n.data.lyrics);case 7:case"end":return l.stop()}}))}}),n.a.createElement("div",{className:"container mt-5"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement(b,{info:v})),n.a.createElement("div",{className:"col-md-6"},n.a.createElement(E,{letra:i})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.2eaa0a8d.chunk.js.map