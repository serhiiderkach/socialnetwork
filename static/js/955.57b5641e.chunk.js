"use strict";(self.webpackChunkreact_way_of_samurai=self.webpackChunkreact_way_of_samurai||[]).push([[955],{3955:function(e,s,n){n.r(s),n.d(s,{default:function(){return v}});var a=n(1413),i=n(8281),r="Dialogs_dialogs__lgABt",t="Dialogs_dialogsItems__uVcGp",d="Dialogs_active__jYZNB",o="Dialogs_messages__dvpTA",c=(n(2791),n(184)),l=function(e){return(0,c.jsx)("div",{className:r,children:e.message})},u=n(3504),g=function(e){var s="/dialogs/"+e.id;return(0,c.jsx)("div",{className:"".concat(t," ").concat(d),children:(0,c.jsx)(u.OL,{to:s,children:e.name})})},h=n(132),m=h.Ry().shape({newMessageBody:h.Z_().min(2,"Must be longer than 2 characters").max(50,"More than 50 symbols").required("Field is Required")}),x=n(5705),j=function(e){var s=e.dialogsPage,n=s.dialogs.map((function(e){return(0,c.jsx)(g,{name:e.name,id:e.id},e.id)})),a=s.messages.map((function(e){return(0,c.jsx)(l,{message:e.message},e.id)}));return(0,c.jsxs)("div",{className:r,children:[(0,c.jsx)("div",{className:t,children:n}),(0,c.jsxs)("div",{className:o,children:[(0,c.jsx)("div",{children:a}),(0,c.jsx)("div",{children:(0,c.jsx)(x.J9,{initialValues:{newMessageBody:""},onSubmit:function(s){e.sendMessage(s.newMessageBody),console.log(s)},validationSchema:m,children:function(e){var s=e.errors,n=e.touched;return(0,c.jsxs)(x.l0,{children:[(0,c.jsx)("div",{children:(0,c.jsx)(x.gN,{type:"textarea",name:"newMessageBody",placeholder:"Enter your message body"})}),s.newMessageBody&&n.newMessageBody&&(0,c.jsx)("span",{style:{color:"red",fontSize:"18px",border:"1px solid red"},children:s.newMessageBody}),(0,c.jsx)("div",{children:(0,c.jsx)("button",{type:"submit",children:"Send"})})]})}})})]})]})},f=n(8687),_=n(2932),v=(0,n(7781).qC)((0,f.$j)((function(e){return{dialogsPage:e.dialogsPage}}),(0,a.Z)({},i.N)),_.D)(j)},2932:function(e,s,n){n.d(s,{D:function(){return l}});var a=n(1413),i=n(5987),r=(n(2791),n(6871)),t=n(8687),d=n(184),o=["isAuth"],c=function(e){return{isAuth:e.auth.isAuth}};function l(e){return(0,t.$j)(c,{})((function(s){var n=s.isAuth,t=(0,i.Z)(s,o);return n?(0,d.jsx)(e,(0,a.Z)({},t)):(0,d.jsx)(r.Fg,{to:"/login"})}))}}}]);
//# sourceMappingURL=955.57b5641e.chunk.js.map