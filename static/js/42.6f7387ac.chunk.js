"use strict";(self.webpackChunkreact_way_of_samurai=self.webpackChunkreact_way_of_samurai||[]).push([[42],{3042:function(e,t,s){s.r(t),s.d(t,{default:function(){return I}});var i=s(1413),r=s(5671),n=s(3144),o=s(136),a=s(7277),u=s(2791),l=s(885),c="ProfileInfo_descriptionBlock__uqh++",p="ProfileInfo_userPhoto__gbEjN",d="ProfileInfo_contact__epl1x",A=s(7996),h=s(184),x=function(e){var t=(0,u.useState)(!1),s=(0,l.Z)(t,2),i=s[0],r=s[1],n=(0,u.useState)(e.status),o=(0,l.Z)(n,2),a=o[0],c=o[1];(0,u.useEffect)((function(){c(e.status)}),[e.status]);return(0,h.jsxs)("div",{children:[!i&&(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"Status: "}),(0,h.jsx)("span",{onDoubleClick:function(){r(!0)},children:e.status||"----"})]}),i&&(0,h.jsx)("div",{children:(0,h.jsx)("input",{onChange:function(e){c(e.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),e.updateStatus(a)},value:a})})]})},j=s(4353),f=s(5705),g=function(e){var t=e.initialValues,s=e.profile,i=e.handleSubmit;return(0,h.jsx)(f.J9,{initialValues:t,onSubmit:function(e,t){var s=t.setSubmitting;i(e),s(!0)},children:function(e){e.errors,e.touched;var t=e.status,i=e.isSubmitting;return(0,h.jsxs)(f.l0,{children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"Full name"}),": ",(0,h.jsx)(f.gN,{type:"input",name:"fullName",placeholder:"Full Name"})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"Looking for a job"}),": ",(0,h.jsx)(f.gN,{type:"checkbox",name:"lookingForAJob",placeholder:""})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"My professional skills"}),":",(0,h.jsx)(f.gN,{type:"textarea",name:"lookingForAJobDescription",placeholder:"My professional skills"})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"About me"}),":",(0,h.jsx)(f.gN,{type:"textarea",name:"aboutMe",placeholder:"About me"})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"Contacts"}),": ",Object.keys(s.contacts).map((function(e){return(0,h.jsx)("div",{className:d,children:(0,h.jsxs)("b",{children:[e,":",(0,h.jsx)(f.gN,{type:"input",name:"contacts."+e,placeholder:e})]})},e)})),t&&(0,h.jsx)("span",{style:{color:"green",fontSize:"18px",border:"1px solid red"},children:t})]}),(0,h.jsx)("div",{children:(0,h.jsx)("button",{type:"submit",disabled:i,children:"Save"})})]})}})},S=function(e){var t=e.profile,s=e.isOwner,i=e.goToEditMode;return(0,h.jsxs)("div",{children:[s&&(0,h.jsx)("div",{children:(0,h.jsx)("button",{onClick:i,children:"Edit"})}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"Full name"}),": ",t.fullName]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"Looking for a job"}),": ",t.lookingForAJob?"yes":"no"]}),t.lookingForAJob&&(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"My professional skills"}),": ",t.lookingForAJobDescription]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"About me"}),": ",t.aboutMe]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"Contacts"}),": ",Object.keys(t.contacts).map((function(e){return(0,h.jsx)(B,{contactTitle:e,contactValue:t.contacts[e]},e)}))]})]})},B=function(e){var t=e.contactTitle,s=e.contactValue;return(0,h.jsxs)("div",{className:d,children:[(0,h.jsx)("b",{children:t}),": ",s]})},N=function(e){var t=e.profile,s=e.status,i=e.updateStatus,r=e.isOwner,n=e.savePhoto,o=e.saveProfile,a=(0,u.useState)(!1),d=(0,l.Z)(a,2),f=d[0],B=d[1];if(!t)return(0,h.jsx)(A.Z,{});return(0,h.jsx)("div",{children:(0,h.jsxs)("div",{className:c,children:[(0,h.jsx)("img",{src:t.photos.large||j,className:p,alt:""}),r&&(0,h.jsx)("input",{type:"file",onChange:function(e){var t;null!==(t=e.target.files)&&void 0!==t&&t.length&&n(e.target.files[0])}}),f?(0,h.jsx)(g,{initialValues:t,profile:t,handleSubmit:function(e){o(e).then((function(){B(!1)}))}}):(0,h.jsx)(S,{goToEditMode:function(){B(!0)},profile:t,isOwner:r}),(0,h.jsx)(x,{status:s,updateStatus:i})]})})},m="MyPosts_postsBlock__9UrtH",w="MyPosts_posts__QGFOu",D=s(4294),k="Post_item__1XyIe",J=function(e){return(0,h.jsxs)("div",{className:k,children:[(0,h.jsx)("img",{src:"data:image/jpeg;base64,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",alt:"avatar"}),e.message,(0,h.jsxs)("div",{children:[(0,h.jsx)("span",{children:"Like"})," ",e.likesCount]})]})},P=s(132),b=P.Ry().shape({newPostText:P.Z_().min(2,"Must be longer than 2 characters").max(30,"Nice try, nobody has a first name that long").required("Field is Required")}),C=function(e){return(0,h.jsx)(f.J9,{initialValues:{newPostText:""},onSubmit:function(t){e.addNewPost(t.newPostText)},validationSchema:b,children:function(e){var t=e.errors,s=e.touched;return(0,h.jsxs)(f.l0,{children:[(0,h.jsx)("div",{children:(0,h.jsx)(f.gN,{type:"textarea",name:"newPostText",placeholder:"Enter post"})}),t.newPostText&&s.newPostText&&(0,h.jsx)("span",{style:{color:"red",fontSize:"18px",border:"1px solid red"},children:t.newPostText}),(0,h.jsx)("div",{children:(0,h.jsx)("button",{type:"submit",children:"Add post"})})]})}})},E=function(e){var t=e.posts.map((function(e){return(0,h.jsx)(J,{message:e.message,likesCount:e.likesCount},e.id)}));return(0,h.jsxs)("div",{className:m,children:[(0,h.jsx)("h3",{children:"My posts"}),(0,h.jsx)("div",{children:(0,h.jsx)(C,{addNewPost:function(t){e.addPost(t)}})}),(0,h.jsx)("div",{className:w,children:t})]})},G=s(8687),v=(0,G.$j)((function(e){return{posts:e.profilePage.posts}}),{addPost:D.Nw.addPostActionCreator})(E),y=function(e){return(0,h.jsxs)("div",{children:[(0,h.jsx)(N,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,saveProfile:e.saveProfile,updateStatus:e.updateStatus}),(0,h.jsx)(v,{})]})},F=s(6871),Q=s(2932),U=s(7781),M=function(e){(0,o.Z)(s,e);var t=(0,a.Z)(s);function s(){return(0,r.Z)(this,s),t.apply(this,arguments)}return(0,n.Z)(s,[{key:"refreshProfile",value:function(){var e=this.props.router.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),e?(this.props.getUserProfile(e),this.props.getStatus(e)):console.error("ID should exists in URI params or in state ('authorizedUserId')")}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t){this.props.router.params.userId!==e.router.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,h.jsx)(y,(0,i.Z)((0,i.Z)({},this.props),{},{isOwner:!this.props.router.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile}))}}]),s}(u.Component);var I=(0,U.qC)((0,G.$j)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:D.et,getStatus:D.lR,updateStatus:D.Nf,savePhoto:D.Ju,saveProfile:D.Ii}),(function(e){return function(t){var s=(0,F.TH)(),r=(0,F.s0)(),n=(0,F.UO)();return(0,h.jsx)(e,(0,i.Z)((0,i.Z)({},t),{},{router:{location:s,navigate:r,params:n}}))}}),Q.D)(M)},2932:function(e,t,s){s.d(t,{D:function(){return c}});var i=s(1413),r=s(5987),n=(s(2791),s(6871)),o=s(8687),a=s(184),u=["isAuth"],l=function(e){return{isAuth:e.auth.isAuth}};function c(e){return(0,o.$j)(l,{})((function(t){var s=t.isAuth,o=(0,r.Z)(t,u);return s?(0,a.jsx)(e,(0,i.Z)({},o)):(0,a.jsx)(n.Fg,{to:"/login"})}))}}}]);
//# sourceMappingURL=42.6f7387ac.chunk.js.map