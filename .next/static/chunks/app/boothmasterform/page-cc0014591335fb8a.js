(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[147],{6652:function(e,s,a){Promise.resolve().then(a.bind(a,9854))},9854:function(e,s,a){"use strict";a.r(s);var t=a(4357),r=a(6439),n=a(9337),l=a(7712),i=a(9720),o=a(5333),c=a(9462);s.default=function(){let{handleSubmit:e,control:s,watch:a}=(0,i.cI)(),d=a("sectorId"),[x,m]=(0,r.useState)([]),[u,h]=(0,r.useState)(!0),[g,A]=(0,r.useState)(null),[f,b]=(0,r.useState)([]),[p,j]=(0,r.useState)(!0),[y,v]=(0,r.useState)(!1);return((0,r.useEffect)(()=>{(async function(){try{h(!0);let e=await o.h.get("/sector");m(e.data.data),h(!1)}catch(e){A(e),h(!1)}})()},[]),(0,r.useEffect)(()=>{async function e(e){o.h.get("/sector/".concat(e)).then(e=>{o.h.get("/karykarta?mundalId=".concat(e.data.data.mundalId,"&&role=karyakarta")).then(e=>{b(e.data.data),j(!1),h(!1)}).catch(e=>{v(e),j(!1),h(!1)})}).catch(e=>{v(e),j(!1),h(!1)})}d&&e(d)},[d]),y||g)?(0,t.jsx)("div",{children:"Error occurred"}):u?(0,t.jsx)("div",{children:"Loading..."}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"w-[100vw]  z-10",children:(0,t.jsx)(n.NavbarLogout,{})}),(0,t.jsxs)("div",{className:"flex",children:[(0,t.jsx)("div",{children:(0,t.jsx)(l.Y,{})}),(0,t.jsx)("div",{className:"absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]",children:(0,t.jsxs)("form",{className:"w-full max-w-lg",onSubmit:e(e=>(console.log(e),o.h.post("/poolingBooth",{...e}).then(function(e){(0,c.ZP)(e.data.message,{icon:"\uD83D\uDC4F",style:{borderRadius:"10px",background:"#333",color:"#fff"}})}).catch(function(e){console.log(e),c.ZP.error(e.response.data.message)}))),children:[(0,t.jsx)("h1",{className:"text-2xl",children:"Booth Master Form"}),(0,t.jsx)("div",{className:"flex flex-wrap -mx-3 mb-6 mt-5",children:(0,t.jsxs)("div",{className:"w-full px-3",children:[(0,t.jsx)("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",children:"Booth Name"}),(0,t.jsx)(i.Qr,{name:"name",control:s,defaultValue:"",render:e=>{let{field:s}=e;return(0,t.jsx)("input",{...s,className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",type:"text",placeholder:"Booth Name"})}}),(0,t.jsx)("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",children:"Sector Name"}),(0,t.jsx)(i.Qr,{name:"sectorId",control:s,defaultValue:"",render:e=>{let{field:s}=e;return(0,t.jsxs)("select",{...s,className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",children:[(0,t.jsx)("option",{value:"",disabled:!0,children:"Select a sector"}),x.map(e=>(0,t.jsx)("option",{value:e.id,children:e.name},e.id))]})}}),(0,t.jsx)("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",children:"Karykarta"}),(0,t.jsx)(i.Qr,{name:"karykartadId",control:s,defaultValue:"",render:e=>{let{field:s}=e;return(0,t.jsxs)("select",{...s,className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",disabled:!d,children:[(0,t.jsx)("option",{value:"",disabled:!0,children:"Select a Karykarta"}),f.map(e=>(0,t.jsx)("option",{value:e.id,children:e.name},e.id))]})}})]})}),(0,t.jsx)("button",{type:"submit",className:"appearance-none block w-full bg-orange-600 text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",disabled:!d,children:"Submit"})]})})]}),(0,t.jsx)(c.x7,{})]})}},9337:function(e,s,a){"use strict";a.r(s),a.d(s,{NavbarLogout:function(){return u}});var t=a(4357),r=a(6439),n=a(111),l=a.n(n),i=a(4562),o=a(6367),c=a(3372),d=a.n(c),x=a(9077);let m=[{name:"Home",href:"#"},{name:"बाँसडीह",href:"#"},{name:"बेरुआरबारी",href:"#"},{name:"मनियर",href:"#"},{name:"सहतवार",href:"#"},{name:"रेवती",href:"#"}];function u(){let[e,s]=r.useState(!1),a=()=>{s(!e)};return(0,t.jsx)("div",{className:"relative w-full bg-white",children:(0,t.jsxs)("div",{className:"mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8 ",children:[(0,t.jsxs)("div",{className:"inline-flex items-center space-x-2",children:[(0,t.jsx)("span",{children:(0,t.jsx)(d(),{src:x.Z,className:" w-full rounded-lg bg-gray-50 object-cover lg:aspect-auto lg:h-[50px] sm:h-[30px]",alt:"BJP"})}),(0,t.jsx)("span",{className:"font-bold",children:"BJP"})]}),(0,t.jsx)("div",{className:"hidden lg:block",children:(0,t.jsx)("ul",{className:"inline-flex space-x-8",children:m.map(e=>(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:e.href,className:"text-sm font-semibold text-gray-800 hover:text-gray-900",children:e.name})},e.name))})}),(0,t.jsx)("div",{className:"hidden lg:block",children:(0,t.jsx)("button",{type:"button",className:"rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:(0,t.jsx)(l(),{href:"/  n",children:"Logout"})})}),(0,t.jsx)("div",{className:"lg:hidden",children:(0,t.jsx)(i.Z,{onClick:a,className:"h-6 w-6 cursor-pointer"})}),e&&(0,t.jsx)("div",{className:"absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden",children:(0,t.jsx)("div",{className:"divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5",children:(0,t.jsxs)("div",{className:"px-5 pb-6 pt-5",children:[(0,t.jsx)("div",{className:"flex items-center justify-between",children:(0,t.jsx)("div",{className:"-mr-2",children:(0,t.jsxs)("button",{type:"button",onClick:a,className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:[(0,t.jsx)("span",{className:"sr-only",children:"Close menu"}),(0,t.jsx)(o.Z,{className:"h-6 w-6","aria-hidden":"true"})]})})}),(0,t.jsx)("div",{className:"mt-6",children:(0,t.jsx)("nav",{className:"grid gap-y-4",children:m.map(e=>(0,t.jsx)("a",{href:e.href,className:"-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50",children:(0,t.jsx)("span",{className:"ml-3 text-base font-medium text-gray-900",children:e.name})},e.name))})}),(0,t.jsx)("button",{type:"button",className:"mt-4 w-full rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:(0,t.jsx)(l(),{href:"/",children:"Logout"})})]})})})]})})}},7712:function(e,s,a){"use strict";a.d(s,{Y:function(){return d}});var t=a(4357);a(6439);var r=a(1460),n=a(5147),l=a(8988),i=a(7850),o=a(111),c=a.n(o);function d(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("aside",{className:"flex h-screen w-64 flex-col overflow-y-auto border-r bg-white px-5 py-8  max-[890px]:hidden",children:(0,t.jsx)("div",{className:"mt-8 flex flex-1 flex-col justify-between",children:(0,t.jsxs)("nav",{className:"-mx-3 space-y-6 ",children:[(0,t.jsxs)("div",{className:"space-y-3 ",children:[(0,t.jsx)("label",{className:"px-3 text-xs font-semibold uppercase text-gray-900",children:"Navigate"}),(0,t.jsxs)(c(),{className:"flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700",href:"../form",children:[(0,t.jsx)(r.Z,{className:"h-5 w-5","aria-hidden":"true"}),(0,t.jsx)("span",{className:"mx-2 text-sm font-medium",children:"Registration"})]}),(0,t.jsxs)(c(),{className:"flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700",href:"../karykarta",children:[(0,t.jsx)(l.Z,{className:"h-5 w-5","aria-hidden":"true"}),(0,t.jsx)("span",{className:"mx-2 text-sm font-medium",children:"Karyakarta"})]}),(0,t.jsxs)(c(),{className:"flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700",href:"../mundalmaster",children:[(0,t.jsx)(i.Z,{className:"h-5 w-5","aria-hidden":"true"}),(0,t.jsx)("span",{className:"mx-2 text-sm font-medium",children:"मंडल मास्टर"})]}),(0,t.jsxs)(c(),{className:"flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700",href:"/sectormaster",children:[(0,t.jsx)(i.Z,{className:"h-5 w-5","aria-hidden":"true"}),(0,t.jsx)("span",{className:"mx-2 text-sm font-medium",children:"सेक्टर मास्टर"})]}),(0,t.jsxs)(c(),{className:"flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700",href:"../boothmaster",children:[(0,t.jsx)(i.Z,{className:"h-5 w-5","aria-hidden":"true"}),(0,t.jsx)("span",{className:"mx-2 text-sm font-medium",children:"बूथ मास्टर"})]})]}),(0,t.jsxs)("div",{className:"space-y-3 ",children:[(0,t.jsx)("label",{className:"px-3 text-xs font-semibold uppercase text-gray-900",children:"content"}),(0,t.jsxs)(c(),{className:"flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700",href:"#",children:[(0,t.jsx)(n.Z,{className:"h-5 w-5","aria-hidden":"true"}),(0,t.jsx)("span",{className:"mx-2 text-sm font-medium",children:"Send SMS"})]})]})]})})})})}},5333:function(e,s,a){"use strict";a.d(s,{h:function(){return n},v:function(){return r}});var t=a(3695);let r="http://3.110.162.38:5000/api",n=t.Z.create({baseURL:r,headers:{"Content-Type":"application/json"}})},9077:function(e,s){"use strict";s.Z={src:"/_next/static/media/bjplogo.274d306e.jpg",height:80,width:80,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAKgRL//EAB4QAAEBCQAAAAAAAAAAAAAAABITAAMEERQVQVJy/9oACAEBAAE/AKiIVBJ9c1hzItuW/8QAHREAAQIHAAAAAAAAAAAAAAAAEQECAAMSEyIjYf/aAAgBAgEBPwBkq4dj20qMVB6sf//EAB0RAAEEAgMAAAAAAAAAAAAAAAMBAhESAAUTImH/2gAIAQMBAT8ADsCryWEF3dYs2Y8TP//Z",blurWidth:8,blurHeight:8}}},function(e){e.O(0,[265,158,75,702,431,744],function(){return e(e.s=6652)}),_N_E=e.O()}]);