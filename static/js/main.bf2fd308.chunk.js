(this["webpackJsonplearn-by-quiz"]=this["webpackJsonplearn-by-quiz"]||[]).push([[0],{175:function(e,t,s){},177:function(e,t,s){},178:function(e,t,s){},184:function(e,t,s){var n={"./amplify-amazon-button_5.entry.js":[265,16],"./amplify-auth-container.entry.js":[266,17],"./amplify-auth-fields_9.entry.js":[267,18],"./amplify-authenticator.entry.js":[268,5],"./amplify-button_3.entry.js":[269,19],"./amplify-chatbot.entry.js":[270,4],"./amplify-checkbox.entry.js":[271,20],"./amplify-confirm-sign-in_7.entry.js":[272,6],"./amplify-container.entry.js":[273,21],"./amplify-federated-buttons_2.entry.js":[274,22],"./amplify-federated-sign-in.entry.js":[275,23],"./amplify-form-field_4.entry.js":[276,24],"./amplify-greetings.entry.js":[277,25],"./amplify-icon-button.entry.js":[278,26],"./amplify-icon.entry.js":[279,7],"./amplify-link.entry.js":[280,27],"./amplify-nav_2.entry.js":[281,28],"./amplify-photo-picker.entry.js":[282,29],"./amplify-picker.entry.js":[283,30],"./amplify-radio-button_3.entry.js":[284,8],"./amplify-s3-album.entry.js":[285,9],"./amplify-s3-image-picker.entry.js":[286,10],"./amplify-s3-image.entry.js":[287,11],"./amplify-s3-text-picker.entry.js":[288,12],"./amplify-s3-text.entry.js":[289,13],"./amplify-select-mfa-type.entry.js":[290,31],"./amplify-sign-in-button.entry.js":[291,14],"./amplify-tooltip.entry.js":[292,32]};function a(e){if(!s.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],a=t[0];return s.e(t[1]).then((function(){return s(a)}))}a.keys=function(){return Object.keys(n)},a.id=184,e.exports=a},185:function(e,t,s){},186:function(e,t,s){},187:function(e,t,s){},208:function(e,t){},261:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s(17),c=s.n(a),r=(s(175),s(106)),i=s.n(r),l=s(144),o=s(29),j=s(15),u=s(91),d=(s(177),s(178),s(354)),b=s(159),m=s(5);var h=function(e){var t=Object(n.useState)(!1),s=Object(o.a)(t,2),a=s[0],c=s[1];return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("nav",{className:"main-nav",children:[Object(m.jsx)(u.b,{className:"logo",children:Object(m.jsxs)("h2",{children:[Object(m.jsx)("span",{children:"L"}),"earn",Object(m.jsx)("span",{children:"F"}),"rom",Object(m.jsx)("span",{children:"Q"}),"uiz"]})}),Object(m.jsx)("div",{className:a?"menu-link mobile-menu-link":"menu-link",children:Object(m.jsx)("ul",{children:Object(m.jsx)("li",{children:Object(m.jsx)(d.d,{className:"sign-out"})})})}),Object(m.jsx)("div",{className:"social-media",children:Object(m.jsx)("div",{className:"hamburger-menu",children:Object(m.jsx)("a",{href:"#",onClick:function(){return c(!a)},children:Object(m.jsx)(b.a,{})})})})]})})};var O=function(){return Object(m.jsx)("div",{style:{textAlign:"center",marginBottom:10},children:"Made by Ankit Singh"})},y=(s(185),s(352)),f=s(356),x=s(349),g=[{category:"BASH",value:0},{category:"Linux",value:1},{category:"HTML",value:2},{category:"PHP",value:3},{category:"MYSQL",value:4},{category:"Docker",value:5},{category:"WordPress",value:6},{category:"JavaScript",value:7},{category:"Kubernetes",value:8},{category:"DevOps",value:9}];var p=function(e){var t=e.fetchQuestions,s=Object(n.useState)(""),a=Object(o.a)(s,2),c=a[0],r=a[1],i=Object(n.useState)(""),l=Object(o.a)(i,2),u=l[0],d=l[1],b=Object(n.useState)(!1),h=Object(o.a)(b,2),O=h[0],p=h[1],v=Object(j.f)();return localStorage.removeItem("newQuestions"),Object(m.jsxs)("div",{className:"home-content",children:[Object(m.jsxs)("div",{className:"home-settings",children:[Object(m.jsx)("span",{style:{fontSize:30},children:"Quiz Setting"}),Object(m.jsxs)("div",{className:"settings__select",children:[O&&Object(m.jsx)("div",{className:"error",children:"Field Should not be Empty"}),Object(m.jsx)(y.a,{select:!0,label:"Select Category",value:c,onChange:function(e){return r(e.target.value)},variant:"outlined",style:{marginBottom:30},children:g.map((function(e){return Object(m.jsx)(f.a,{value:e.category,children:e.category},e.value)}))}),Object(m.jsxs)(y.a,{select:!0,style:{marginBottom:30},label:"Dificulty",variant:"outlined",onChange:function(e){return d(e.target.value)},value:u,children:[Object(m.jsx)(f.a,{value:"easy",children:" Easy "},"Easy"),Object(m.jsx)(f.a,{value:"medium",children:" Medium "},"Medium"),Object(m.jsx)(f.a,{value:"hard",children:" Hard "},"Hard")]}),Object(m.jsx)(x.a,{variant:"contained",size:"large",color:"secondary",onClick:function(){c?(p(!1),t(c,u),v.push("/quiz")):p(!0)},children:"Start Quiz"})]})]}),Object(m.jsx)("img",{src:"/quizimg.svg",className:"banner",alt:"quiz img"})]})},v=s(350),_=(s(186),function(e){var t=e.currQues,s=e.questions,a=e.id,c=e.setQuestions,r=e.allQuestion,i=Object(n.useState)(),l=Object(o.a)(i,2),j=(l[0],l[1]),u=function(e){j(e.target.value),s.chooseAns=e.target.value,r[a-1]=s,c(r),localStorage.setItem("newQuestions",JSON.stringify(r))};return Object(m.jsx)("div",{className:"container mt-5",children:Object(m.jsx)("div",{className:"d-flex justify-content-center row",children:Object(m.jsx)("div",{className:"col-md-10 col-lg-10",children:Object(m.jsx)("div",{className:"border",children:Object(m.jsxs)("div",{className:"question bg-white p-3 border-bottom",children:[Object(m.jsxs)("div",{className:"d-flex flex-row align-items-center question-title",children:[Object(m.jsxs)("h3",{className:"text-danger",children:["Q.",a]}),Object(m.jsxs)("h5",{className:"mt-1 ml-2",children:[t,"?"]})]}),Object(m.jsxs)("fieldset",{children:[Object(m.jsx)("div",{className:"ans ml-2",children:s.answers.answer_a?Object(m.jsxs)("label",{className:"radio",children:[" ",Object(m.jsx)("input",{type:"radio",name:a,value:s.answers.answer_a,checked:s.chooseAns===s.answers.answer_a,onChange:u})," ",Object(m.jsx)("span",{children:s.answers.answer_a})]}):null}),Object(m.jsx)("div",{className:"ans ml-2",children:s.answers.answer_b?Object(m.jsxs)("label",{className:"radio",children:[" ",Object(m.jsx)("input",{type:"radio",name:a,value:s.answers.answer_b,checked:s.chooseAns===s.answers.answer_b,onChange:u})," ",Object(m.jsx)("span",{children:s.answers.answer_b})]}):null}),Object(m.jsx)("div",{className:"ans ml-2",children:s.answers.answer_c?Object(m.jsxs)("label",{className:"radio",children:[" ",Object(m.jsx)("input",{type:"radio",name:a,value:s.answers.answer_c,checked:s.chooseAns===s.answers.answer_c,onChange:u})," ",Object(m.jsx)("span",{children:s.answers.answer_c})]}):null}),Object(m.jsx)("div",{className:"ans ml-2",children:s.answers.answer_d?Object(m.jsxs)("label",{className:"radio",children:[" ",Object(m.jsx)("input",{type:"radio",name:a,value:s.answers.answer_d,checked:s.chooseAns===s.answers.answer_d,onChange:u})," ",Object(m.jsx)("span",{children:s.answers.answer_d})]}):null})]})]})})})})})});var w=function(e){var t=e.score,s=e.setScore,a=e.questions,c=e.setQuestions,r=Object(n.useState)(),i=Object(o.a)(r,2),l=i[0],u=i[1],d=Object(j.f)();return Object(n.useEffect)((function(){a.length<1&&(a=JSON.parse(localStorage.getItem("newQuestions"))),u(a||[])}),[a]),Object(m.jsx)("div",{className:"quiz",children:l?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"quizInfo",children:Object(m.jsx)("span",{children:a.category})}),l.map((function(e,t){return Object(m.jsx)(_,{id:t+1,currQues:e.question,questions:e,setQuestions:c,allQuestion:l},e.id)})),a.length>0?Object(m.jsx)("div",{children:Object(m.jsx)(x.a,{variant:"contained",size:"large",color:"secondary",onClick:function(){a.forEach((function(e){e.answers[e.correct_answer]===e.chooseAns&&s(t+=1)})),c([]),localStorage.removeItem("newQuestions"),d.push("/result")},children:"Result"})}):Object(m.jsx)("div",{className:"lmContainer",children:Object(m.jsx)("h1",{className:"lastMessage",children:"Sorry !, Taking time or Still need to Update "})})]}):Object(m.jsx)(v.a,{style:{margin:100},color:"inherit",size:150,thickness:1})})},N=(s(187),function(e){e.name;var t=e.score,s=Object(j.f)();return Object(m.jsxs)("div",{className:"result",children:[Object(m.jsxs)("span",{className:"title",children:["Final Score : ",t]}),Object(m.jsx)(x.a,{onClick:function(){s.push("/")},variant:"contained",color:"secondary",size:"large",style:{alignSelf:"center",marginTop:20},href:"/",children:"Go to homepage"})]})}),S=s(105),k=s(77),Q={aws_project_region:"us-east-2",aws_cognito_identity_pool_id:"us-east-2:5dbac64e-ecb6-41d8-9053-420b7dc11603",aws_cognito_region:"us-east-2",aws_user_pools_id:"us-east-2_xK7eZTN8s",aws_user_pools_web_client_id:"5clfd1tuk2imc5fv156oa2ral5",oauth:{},aws_cognito_login_mechanisms:["PREFERRED_USERNAME"],aws_cognito_signup_attributes:["EMAIL"],aws_cognito_mfa_configuration:"OFF",aws_cognito_mfa_types:["SMS"],aws_cognito_password_protection_settings:{passwordPolicyMinLength:8,passwordPolicyCharacters:[]},aws_cognito_verification_mechanisms:["EMAIL"]},z=s(355),q=s(150),E=s.n(q),C=s(71);S.default.configure(Q);var A=Object(z.a)((function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),s=t[0],a=t[1],c=Object(n.useState)(""),r=Object(o.a)(c,2),d=r[0],b=r[1],y=Object(n.useState)(0),f=Object(o.a)(y,2),x=f[0],g=f[1],v=Object(j.f)(),_=function(){var e=Object(l.a)(i.a.mark((function e(){var t,s,n,a,c=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",s=c.length>1&&void 0!==c[1]?c[1]:"",b([]),e.next=5,E.a.get("https://quizapi.io/api/v1/questions?apiKey=x9NWMxSEigECwx9goxX11Y5AscrsAFU5JsBxzW28".concat("&category=".concat(t,"&difficulty=").concat(s),"&limit=10"));case 5:n=e.sent,(a=n.data)&&localStorage.setItem("newQuestions",JSON.stringify(a)),b(a);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=Object(n.useState)(),Q=Object(o.a)(S,2),z=Q[0],q=Q[1];return k.a.listen("auth",(function(){v.push("/")})),C.a.currentSession().then((function(e){q(e.accessToken.payload.username)})).catch((function(e){return console.log(e)})),Object(m.jsxs)(u.a,{children:[Object(m.jsxs)("div",{className:"app",style:{backgroundImage:"url(./ques1.png)"},children:[Object(m.jsx)(h,{name:z}),Object(m.jsxs)(j.c,{children:[Object(m.jsx)(j.a,{path:"/",exact:!0,children:Object(m.jsx)(p,{name:z,setname:a,fetchQuestions:_})}),Object(m.jsx)(j.a,{path:"/quiz",exact:!0,children:Object(m.jsx)(w,{name:s,score:x,setScore:g,questions:d,setQuestions:b})}),Object(m.jsx)(j.a,{path:"/result",exact:!0,children:Object(m.jsx)(N,{name:s,score:x})})]})]}),Object(m.jsx)(O,{})]})}));c.a.render(Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(A,{})}),document.getElementById("root"))}},[[261,2,3]]]);
//# sourceMappingURL=main.bf2fd308.chunk.js.map