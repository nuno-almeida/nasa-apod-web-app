"use strict";(self.webpackChunknasa_apod_web_app=self.webpackChunknasa_apod_web_app||[]).push([[337],{6337:(e,s,a)=>{a.r(s),a.d(s,{default:()=>u});var t=a(2791),n=a(8967),r=a(3575),l=a(5291),d=a(9546),o=a(3781),c=a(184);const i={pending:!1,ok:!0,message:"",done:!1},p=(e,s)=>{const{type:a}=s;if("PENDING"===a)return{...e,pending:!0};if("FULFILLED"===a){const{message:a}=s.payload;return{...e,pending:!1,ok:!0,message:a,done:!0}}if("REJECTED"===a){const{message:a}=s.payload;return{...e,pending:!1,ok:!1,message:a,done:!0}}return e},u=()=>{const[e,s]=(0,t.useState)(""),[a,u]=(0,t.useState)(""),[g,h]=(0,t.useState)(""),[m,x]=(0,t.useState)(!1),[j,f]=(0,t.useState)(!1),[y,v]=(0,t.useState)(!1),{register:w}=(0,t.useContext)(r.Z),[b,C]=(0,t.useReducer)(p,i),{pending:k,ok:E,message:N,done:Z}=b;return(0,c.jsx)(d.Z,{children:(0,c.jsxs)("form",{onSubmit:s=>{s.preventDefault(),e.length<3?x(!0):a.length<6?f(!0):a!==g?v(!0):(C({type:"PENDING"}),w({user:e,pass:a}).then((()=>{C({type:"FULFILLED",payload:{message:"User registration succeeded"}})})).catch((()=>{C({type:"REJECTED",payload:{message:"User registration failed"}})})))},className:"d-flex flex-column gap-1",children:[(0,c.jsx)("label",{children:(0,c.jsx)("strong",{children:"User Id"})}),(0,c.jsx)("input",{type:"text",value:e,onChange:e=>{x(!1),s(e.target.value)}}),m&&(0,c.jsx)("p",{className:"text-danger small",children:"User Id should have at least 3 characters"}),(0,c.jsx)("label",{children:(0,c.jsx)("strong",{children:"Password"})}),(0,c.jsx)("input",{type:"password",value:a,autoComplete:"off",onChange:e=>{f(!1),u(e.target.value)}}),j&&(0,c.jsx)("p",{className:"text-danger small",children:"Password should have at least 6 characters"}),(0,c.jsx)("label",{children:(0,c.jsx)("strong",{children:"Confirm Password"})}),(0,c.jsx)("input",{type:"password",value:g,autoComplete:"off",onChange:e=>{v(!1),h(e.target.value)}}),y&&(0,c.jsx)("p",{className:"text-danger small",children:"Passwords not match"}),(0,c.jsx)(o.Z,{type:"submit",classes:"btn-primary my-2",disabled:k||Z&&E,children:k?(0,c.jsx)(l.Z,{}):"Register"}),Z&&(0,c.jsx)(n.Z,{ok:E,message:N})]})})}},8967:(e,s,a)=>{a.d(s,{Z:()=>n});var t=a(184);const n=e=>{let{ok:s,message:a}=e;const n=s?"info":"danger";return(0,t.jsx)("div",{className:"alert alert-".concat(n),children:a})}},9546:(e,s,a)=>{a.d(s,{Z:()=>l});var t=a(1300),n=a(184);const r=e=>"lg"===e?"w-25":"md"===e?"w-50":"w-100",l=e=>{let{children:s}=e;const a=(0,t.Z)();return(0,n.jsx)("div",{className:"container py-4 ".concat(r(a)),children:s})}}}]);
//# sourceMappingURL=337.444b010b.chunk.js.map