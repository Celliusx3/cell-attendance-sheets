(this["webpackJsonpcell-sheets"]=this["webpackJsonpcell-sheets"]||[]).push([[0],{51:function(e,a,t){e.exports=t(61)},56:function(e,a,t){},57:function(e,a,t){},61:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(7),c=t.n(s),o=(t(56),t(57),t(30)),i=t(92),l=t(95),m=t(97),u=t(104),g=t(101),p=t(105),d=t(106),f=t(102),b=t(100),v=t(103),h=Object(i.a)((function(e){return{base:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center"},form:{padding:e.spacing(2),display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},formControl:{margin:e.spacing(2),minWidth:300},name:{minWidth:300},paper:{paddingTop:e.spacing(2),paddingBottom:e.spacing(2),display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",color:e.palette.primary.main},message:{marginTop:e.spacing(2),marginLeft:e.spacing(2),marginRight:e.spacing(2),minWidth:300,maxWidth:300,display:"flex",flexDirection:"column"},messageSuccess:{color:e.palette.primary.main,backgroundColor:"#c2cff1"},messageError:{color:"#dd2114",backgroundColor:"#fbd1ce"},messageText:{padding:e.spacing(2)},wrapper:{margin:e.spacing(1),position:"relative"},buttonProgress:{position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12}}}));function y(){var e=h(),a=Object(n.useState)(""),t=Object(o.a)(a,2),s=t[0],c=t[1],i=Object(n.useState)(""),y=Object(o.a)(i,2),E=y[0],S=y[1],w=Object(n.useState)(!1),j=Object(o.a)(w,2),x=j[0],N=j[1],O=Object(n.useState)({success:!0,message:""}),C=Object(o.a)(O,2),I=C[0],T=C[1],W=function(e,a){var t=a,n=new RegExp("[?&]"+e+"=([^&#]*)","i").exec(t);return n?n[1]:null};return r.a.createElement("div",{className:e.base},r.a.createElement(l.a,{variant:"outlined",className:"".concat(e.paper)},r.a.createElement(m.a,{variant:"h6"},"Welcome!!"),""!=I.message&&null!=I.message&&r.a.createElement(l.a,{elevation:0,className:"".concat(e.message," ").concat(I.success?e.messageSuccess:e.messageError)},r.a.createElement(m.a,{variant:"body1",className:e.messageText},I.message)),r.a.createElement("div",{className:e.form},r.a.createElement(u.a,{id:"name",label:"Name",variant:"outlined",className:e.name,onChange:function(e){return function(e){var a=e.target.value;c(a)}(e)}}),r.a.createElement(b.a,{variant:"outlined",className:e.formControl},r.a.createElement(p.a,{id:"type-input-label"},"Sign In Type"),r.a.createElement(v.a,{labelId:"type-selector",id:"type-selector",value:E,onChange:function(e){return function(e){var a=e.target.value;S(a)}(e)},label:"Sign In Type"},r.a.createElement(d.a,{value:"SIGN_IN"},"Sign In"),r.a.createElement(d.a,{value:"SIGN_OUT"},"Sign Out"))),r.a.createElement("div",{className:e.wrapper},r.a.createElement(g.a,{variant:"contained",color:"primary",style:{cursor:"pointer"},disableElevation:!0,onClick:function(e){return function(e){var a=window.location.search,t=W("query",a);if(null!=t&&""!=t){N(!0);var n={name:s,type:E},r="".concat(t);fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){N(!1),T({success:!0,message:"Successfully recorded."})}),(function(e){N(!1),T({success:!1,message:"Something went wrong. Please try again!"})}))}else T({success:!1,message:"Something went wrong. Please try again!"})}()},disabled:null==s||""==s||null==E||""==E||x},"Submit"),x&&r.a.createElement(f.a,{size:24,className:e.buttonProgress})))))}var E=function(){return r.a.createElement(y,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.5bc3fe1a.chunk.js.map