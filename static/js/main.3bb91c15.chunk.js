(this.webpackJsonpsum_array_front=this.webpackJsonpsum_array_front||[]).push([[0],{100:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(9),i=r.n(a),o=(r(73),r(74),r(40)),c=r(24),s=r.n(c),l=r(32),u=r(37),d=r(128),j=r(133),h=r(136),b=r(132),m=r(135),x=r(134),f=r(41),p=r(52),O=r.n(p),y=function(){var e=Object(l.a)(s.a.mark((function e(t){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.patch("https://sumarray.herokuapp.com/equilibrium",t);case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=r(137),g=r(4),w=Object(d.a)((function(){return{container:{maxWidth:400}}})),N=function(e){var t=e.error,r=e.result,n=w();return t||r||0===r?Object(g.jsx)(v.a,{className:n.container,severity:t?"error":-1===r?"warning":r||0===r?"success":void 0,children:t?"Oops! Something wrong happened.\n      Error status: ".concat(t):-1===r?"Your array doesn't have an equilibrium index":r||0===r?"The equilibrium index is at position ".concat(r):void 0}):null},C=Object(d.a)((function(){return{bold:{fontWeight:"bold"}}})),S=function(){var e=C();return Object(g.jsxs)(h.a,{marginTop:4,marginLeft:1,marginRight:1,children:[Object(g.jsx)(h.a,{marginBottom:2,children:Object(g.jsx)(b.a,{variant:"h2",children:"How is it done?"})}),Object(g.jsxs)(v.a,{icon:!1,severity:"info",style:{justifyContent:"center"},children:[Object(g.jsx)(b.a,{children:"First, we sum all the elements of the array"}),Object(g.jsx)(b.a,{children:"Secondly, we start an paralel sum starting at 0"}),Object(g.jsx)(b.a,{children:"Now, starting from the beginning, we iterate each element of the array"}),Object(g.jsx)(b.a,{children:"The element is subtracted from the total sum and the result is checked if equal to paralel sum"}),Object(g.jsx)(b.a,{className:e.bold,children:"If they are equal, we did it! The current position is the equilibrium index."}),Object(g.jsx)(b.a,{children:"Otherwise, we add the element to the paralel sum and iterate to the next element, until an index is found. The total sum will decrease in each iteration."}),Object(g.jsx)(b.a,{className:e.bold,children:"If the array is over, there's no equilibrium index."})]})]})},k=Object(d.a)((function(){return{root:{flex:1,alignSelf:"center",marginTop:64,marginBottom:64},wrapper:{justifyContent:"center",margin:1,position:"relative"}}})),q=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),r=t[0],a=t[1],i=Object(n.useState)(),c=Object(u.a)(i,2),d=c[0],p=c[1],O=Object(n.useState)(""),v=Object(u.a)(O,2),w=v[0],C=v[1],q=function(){var e=Object(l.a)(s.a.mark((function e(t){var r,n,i,o,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.prev=1,r=JSON.parse(t.arrayContent),e.next=5,y({arr:r});case 5:n=e.sent,p(n.index),C(""),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),c=(null===e.t0||void 0===e.t0||null===(i=e.t0.response)||void 0===i||null===(o=i.data)||void 0===o?void 0:o.error)||"An unexpected error happened",C(c),p(void 0);case 15:return e.prev=15,a(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[1,10,15,18]])})));return function(t){return e.apply(this,arguments)}}(),T=k();return Object(g.jsx)(j.a,{container:!0,className:T.root,children:Object(g.jsxs)(j.a,{item:!0,xs:12,children:[Object(g.jsxs)(h.a,{marginBottom:4,children:[Object(g.jsx)(h.a,{marginBottom:4,children:Object(g.jsx)(b.a,{variant:"h5",children:"With this amazing tool you can check out if an array has an equilibrium index. Try it now!"})}),Object(g.jsx)(f.b,{validate:function(e){var t={};try{JSON.parse(e.arrayContent).some(isNaN)&&(t.arrayContent="Please, insert only numbers")}catch(r){t.arrayContent="Please, insert an valid array."}finally{return t}},validateOnBlur:!0,onSubmit:q,render:function(e){var t=e.handleSubmit,n=e.form;return Object(g.jsxs)("form",{onSubmit:t,children:[Object(g.jsx)(h.a,{marginBottom:4,children:Object(g.jsx)(f.a,{name:"arrayContent",render:function(e){var t=e.input,n=e.meta;return Object(g.jsx)(m.a,Object(o.a)(Object(o.a)({},t),{},{label:"Array",disabled:r,error:n.error&&n.touched,helperText:n.error&&n.touched?n.error:null,multiline:!0,placeholder:"[1,2,3,4,6]",rows:4,size:"medium",variant:"outlined"}))}})}),Object(g.jsx)(h.a,{className:T.wrapper,children:Object(g.jsx)(x.a,{variant:"contained",color:"primary",disabled:r,onClick:n.submit,children:r?"Loading":"Try it"})})]})}})]}),Object(g.jsx)(h.a,{display:"flex",justifyContent:"center",children:Object(g.jsx)(N,{result:d,error:w})}),Object(g.jsx)(S,{})]})})},T=Object(d.a)((function(){return{topbar:{position:"fixed",top:0,display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",height:40,opacity:1,backgroundColor:"#3f51b5",color:"white",fontWeight:"bold",padding:"0px 20px",boxSizing:"border-box"}}})),B=function(){var e=T();return Object(g.jsx)(h.a,{className:e.topbar,children:"Array Equilibrium Algorithm"})},A=Object(d.a)((function(){return{footer:{display:"flex",alignItems:"stretch",width:"100%",height:50,backgroundColor:"#333",color:"white",position:"fixed",bottom:0},footerCenter:{display:"flex",alignItems:"center",justifyContent:"center",flex:1},text:{fontSize:24}}})),I=function(){var e=A();return Object(g.jsx)("footer",{className:e.footer,children:Object(g.jsx)("div",{className:e.footerCenter,children:Object(g.jsxs)(b.a,{className:e.text,children:["\ud83d\udcbb"," Made by Paulo Viana"]})})})};var z=function(){return Object(g.jsx)("div",{className:"App",children:Object(g.jsxs)("header",{className:"App-header",children:[Object(g.jsx)(B,{}),Object(g.jsx)(q,{}),Object(g.jsx)(I,{})]})})};i.a.render(Object(g.jsx)(z,{}),document.getElementById("root"))},73:function(e,t,r){},74:function(e,t,r){}},[[100,1,2]]]);
//# sourceMappingURL=main.3bb91c15.chunk.js.map