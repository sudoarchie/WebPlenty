(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[547],{8024:function(e,a,r){Promise.resolve().then(r.bind(r,9121))},9121:function(e,a,r){"use strict";r.r(a);var l=r(4357),n=r(6439),t=r(9337),s=r(7712),c=r(5333),d=r(9720),o=r(9462);a.default=function(){let[e,a]=(0,n.useState)(null),[r,i]=(0,n.useState)(!0),[u,x]=(0,n.useState)(null),[b,m]=(0,n.useState)(null),[h,g]=(0,n.useState)(!0),[p,f]=(0,n.useState)(!1),{control:j,handleSubmit:y,watch:w}=(0,d.cI)(),k=w("mundalId");return((0,n.useEffect)(()=>{(async function(){try{i(!0),await c.h.get("/mundal").then(e=>{console.log(e.data.data),a(e.data.data),i(!1)}).catch(e=>{x(e)})}catch(e){x(e),i(!1)}})()},[]),(0,n.useEffect)(()=>{async function e(e){try{i(!0),await c.h.get("/karykarta?mundalId=".concat(e,"&&role=karyakarta")).then(e=>{console.log(e.data.data),m(e.data.data),g(!1),i(!1)}).catch(e=>{f(e)})}catch(e){f(e),g(!1),i(!1)}}k&&e(k)},[k]),console.log(b),p)?(0,l.jsx)("div",{children:"Error fuck us"}):u?(0,l.jsx)("div",{children:"error !!!!!"}):r?(0,l.jsx)("div",{children:"Loading !!!"}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"w-[100vw]  z-10",children:(0,l.jsx)(t.NavbarLogout,{})}),(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.Y,{})}),(0,l.jsx)("div",{className:"absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]",children:(0,l.jsxs)("form",{className:"w-full max-w-lg",onSubmit:y(function(e){return console.log(e),c.h.post("/sector",{...e}).then(function(e){(0,o.ZP)(e.data.message,{icon:"\uD83D\uDC4F",style:{borderRadius:"10px",background:"#333",color:"#fff"}})}).catch(function(e){o.ZP.error(e.response.data.message)})}),children:[(0,l.jsx)("h1",{className:"text-2xl",children:"Sector Master Form"}),(0,l.jsxs)("div",{className:"flex flex-wrap -mx-3 mb-6 mt-5",children:[(0,l.jsxs)("div",{className:"w-full md:w-1/2 px-3 mb-6 md:mb-0",children:[(0,l.jsx)("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",children:"Sector Name"}),(0,l.jsx)(d.Qr,{name:"name",control:j,render:e=>{let{field:a}=e;return(0,l.jsx)("input",{...a,className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",type:"text",placeholder:"Jane"})}})]}),(0,l.jsxs)("div",{className:"w-full md:w-1/2 px-3",children:[(0,l.jsx)("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",children:"Mundal"}),(0,l.jsx)(d.Qr,{name:"mundalId",control:j,rules:{required:!0},render:a=>{let{field:n}=a;return(0,l.jsxs)("select",{...n,className:"block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",children:[(0,l.jsx)("option",{value:"",children:"Select mandal "}),r?(0,l.jsx)("div",{children:"LOading ......"}):e.map(e=>(0,l.jsx)("option",{value:e.id,children:e.name},e.id))]})}})]})]}),(0,l.jsxs)("div",{className:"flex flex-wrap -mx-3 mb-6",children:[(0,l.jsxs)("div",{className:"w-full px-3",children:[(0,l.jsx)("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",children:"SECTOR SANYOJAK"}),(0,l.jsx)(d.Qr,{name:"sanyojakId",control:j,rules:{required:!0},render:e=>{let{field:a}=e;return(0,l.jsxs)("select",{...a,className:"block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",disabled:!k,children:[(0,l.jsx)("option",{value:"",children:"Select Karykarta "}),h?(0,l.jsx)("div",{children:"LOading ......"}):b.map(e=>(0,l.jsx)("option",{value:e.id,children:e.name},e.id))]})}})]}),(0,l.jsxs)("div",{className:"w-full px-3",children:[(0,l.jsx)("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",children:"SECTOR PRABHARI"}),(0,l.jsx)(d.Qr,{name:"prabhariID",control:j,render:e=>{let{field:a}=e;return(0,l.jsxs)("select",{...a,className:"block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",disabled:!k,children:[(0,l.jsx)("option",{value:"",children:"Select Karykarta "}),h?(0,l.jsx)("div",{children:"LOading ......"}):b.map(e=>(0,l.jsx)("option",{value:e.id,children:e.name},e.id))]})}})]})]}),(0,l.jsx)("button",{className:"appearance-none block w-full bg-orange-600 text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",type:"submit",disabled:!k,children:"Submit"}),(0,l.jsx)(o.x7,{})]})})]})]})}}},function(e){e.O(0,[265,158,75,234,702,431,744],function(){return e(e.s=8024)}),_N_E=e.O()}]);