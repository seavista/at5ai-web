(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7378:(e,t,a)=>{Promise.resolve().then(a.bind(a,2590))},2590:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>x});var i=a(7437),s=a(8059),o=a.n(s);a(5214);var l=a(2532),n=a.n(l),r=a(2265),c=a(8606),m=a(4446),d=a(8472);function x(){let[e,t]=(0,r.useState)("home"),a=e=>{let{isHome:a}=e;return a?(0,i.jsx)(c.E.div,{className:n()["logo-container"],initial:{opacity:1},animate:{opacity:1},children:(0,i.jsx)("img",{src:"/images/at5ai-logo.png",alt:"AT5AI Logo",className:n().logo,style:{opacity:1}})}):(0,i.jsx)("div",{className:"fixed left-0 top-0 w-20 h-20 flex items-center justify-center border-b border-white/10 z-[51] cursor-pointer",onClick:()=>t("home"),children:(0,i.jsx)("img",{src:"/images/at5ai-logo.png",style:a?{width:"100%",maxWidth:"200px",opacity:1}:{width:"40px",transition:"all 0.3s ease",opacity:1},alt:"AT5AI Logo",className:"hover:scale-110 transition-transform duration-300"})})},s=()=>(0,i.jsx)(c.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},className:"min-h-screen bg-black text-white flex flex-col justify-center p-12",children:(0,i.jsxs)("div",{className:"max-w-4xl mx-auto",children:["home"===e&&(0,i.jsx)(a,{isHome:!0}),(0,i.jsxs)("h1",{className:"text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase tracking-tighter leading-none",children:[(0,i.jsx)("span",{className:"block overflow-hidden",children:(0,i.jsx)(c.E.span,{initial:{y:"100%"},animate:{y:0},transition:{duration:.8,delay:.2},className:"block",children:"FUTURE"})}),(0,i.jsx)("span",{className:"block overflow-hidden",children:(0,i.jsx)(c.E.span,{initial:{y:"100%"},animate:{y:0},transition:{duration:.8,delay:.4},className:"block",children:"PROOF"})})]}),(0,i.jsxs)(c.E.p,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.8,delay:.6},className:"mt-6 text-base sm:text-lg md:text-xl font-mono tracking-wide opacity-70",children:["High-Signal, AI News and Tech. No Fluff.",(0,i.jsx)("span",{className:"block mt-2 text-sm opacity-50",children:"Breaking down the latest AI in minutes"})]})]})},"home"),l=()=>{let[e,t]=(0,r.useState)(!0);return((0,r.useEffect)(()=>{let e=setTimeout(()=>t(!1),500);return()=>clearTimeout(e)},[]),e)?(0,i.jsx)(c.E.div,{initial:{opacity:0},animate:{opacity:1},className:"min-h-screen bg-black text-white p-12 flex items-center justify-center",children:(0,i.jsx)("div",{className:"text-xl font-mono",children:"Loading videos..."})},"videos-loading"):(0,i.jsx)(c.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"min-h-screen bg-black text-white p-12",children:(0,i.jsx)("div",{className:"aspect-video w-full max-w-6xl mx-auto",children:(0,i.jsx)("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/videoseries?list=".concat("PLUtqq-ngYy83Z9uohILgaO6kWYVJRsx1l"),title:"AT5AI YouTube Playlist",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})},"videos")},x=()=>{let[e,t]=(0,r.useState)([]),[a,s]=(0,r.useState)(!0),[o,l]=(0,r.useState)(null);return((0,r.useEffect)(()=>{(async()=>{try{let e=await d.Z.get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jhawgood");t(e.data.items),s(!1)}catch(e){console.error("Error fetching Medium posts:",e),l("Failed to load blog posts"),s(!1)}})()},[]),a)?(0,i.jsx)(c.E.div,{initial:{opacity:0},animate:{opacity:1},className:"min-h-screen bg-black text-white p-12 flex items-center justify-center",children:(0,i.jsx)("div",{className:"text-xl font-mono",children:"Loading posts..."})},"blog-loading"):o?(0,i.jsx)(c.E.div,{initial:{opacity:0},animate:{opacity:1},className:"min-h-screen bg-black text-white p-12 flex items-center justify-center",children:(0,i.jsx)("div",{className:"text-xl font-mono text-red-500",children:o})},"blog-error"):(0,i.jsx)(c.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"min-h-screen bg-black text-white p-12",children:e.map((e,t)=>(0,i.jsxs)(c.E.article,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.5,delay:.3*t},className:"border-b border-white/10 pb-8 mb-8 group cursor-pointer",onClick:()=>window.open(e.link,"_blank"),children:[(0,i.jsxs)("div",{className:"flex items-center justify-between",children:[(0,i.jsx)("h2",{className:"text-4xl font-black uppercase tracking-tighter",children:e.title}),(0,i.jsx)("span",{className:"text-sm font-mono text-white/50 group-hover:text-white transition-colors",children:"READ MORE →"})]}),(0,i.jsxs)("p",{className:"mt-4 text-white/70 font-mono tracking-wide",children:[e.description.replace(/<[^>]*>/g,"").substring(0,200),"..."]}),(0,i.jsx)("div",{className:"mt-2 text-sm font-mono text-white/50",children:new Date(e.pubDate).toLocaleDateString()})]},e.guid))},"blog")};return(0,i.jsxs)("div",{className:"jsx-57fca9f6ac5e0bfc bg-black text-white",children:[(0,i.jsx)(o(),{id:"57fca9f6ac5e0bfc",children:'body{background-color:black;color:white;font-family:"Helvetica Neue",Arial,sans-serif}@-webkit-keyframes pulse{0%,100%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.5);transform:scale(1.5)}}@-moz-keyframes pulse{0%,100%{-moz-transform:scale(1);transform:scale(1)}50%{-moz-transform:scale(1.5);transform:scale(1.5)}}@-o-keyframes pulse{0%,100%{-o-transform:scale(1);transform:scale(1)}50%{-o-transform:scale(1.5);transform:scale(1.5)}}@keyframes pulse{0%,100%{-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.5);-moz-transform:scale(1.5);-o-transform:scale(1.5);transform:scale(1.5)}}'}),(0,i.jsx)(()=>(0,i.jsxs)(i.Fragment,{children:["home"!==e&&(0,i.jsx)(a,{isHome:!1}),(0,i.jsxs)("nav",{className:"fixed left-0 top-0 h-full w-20 bg-black text-white flex flex-col items-center justify-between py-8 z-50 border-r border-white/10",children:[(0,i.jsx)("div",{className:"flex flex-col items-center space-y-8 mt-24",children:[{id:"home",label:"HOME",icon:"01"},{id:"videos",label:"VIDEOS",icon:"02"},{id:"blog",label:"BLOG",icon:"03"}].map(a=>(0,i.jsx)("button",{onClick:()=>{console.log("Clicked:",a.id),t(a.id)},className:"transform transition-all duration-300 hover:scale-110 ".concat(e===a.id?"text-white":"text-gray-500"),children:(0,i.jsxs)("div",{className:"flex flex-col items-center",children:[(0,i.jsx)("span",{className:"text-[10px] uppercase tracking-[0.2em] rotate-90",children:a.label}),(0,i.jsx)("span",{className:"text-xs font-mono tracking-widest mt-6",children:a.icon})]})},a.id))}),(0,i.jsx)("div",{className:"flex flex-col space-y-4",children:[{href:"https://youtube.com/@at5ai",icon:"YouTube",ariaLabel:"Visit AT5AI on YouTube"},{href:"https://tiktok.com/@at5.ai",icon:"TikTok",ariaLabel:"Visit AT5AI on TikTok"},{href:"https://x.com/at5ai",icon:"X",ariaLabel:"Visit AT5AI on X"}].map(e=>{let{href:t,icon:a,ariaLabel:s}=e;return(0,i.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer","aria-label":s,className:"text-gray-500 hover:text-white transform transition-all duration-300 hover:scale-110",children:(0,i.jsx)("span",{className:"text-[10px] uppercase tracking-[0.2em]",children:a})},a)})})]})]}),{className:"jsx-57fca9f6ac5e0bfc"}),(0,i.jsx)("main",{className:"jsx-57fca9f6ac5e0bfc ml-20",children:(0,i.jsx)(m.M,{mode:"wait",initial:!1,children:(()=>{switch(e){case"home":default:return(0,i.jsx)(s,{});case"videos":return(0,i.jsx)(l,{});case"blog":return(0,i.jsx)(x,{})}})()})})]})}},5214:()=>{},2532:e=>{e.exports={main:"home_main__8RW0a",hr:"home_hr__fAP7X",body:"home_body__ghSpj","logo-container":"home_logo-container__pHfNh",logoIntro:"home_logoIntro__M4SvR","video-container":"home_video-container__GnKXx",video:"home_video___Yfzf",logo:"home_logo__M2pme"}}},e=>{var t=t=>e(e.s=t);e.O(0,[69,169,130,215,744],()=>t(7378)),_N_E=e.O()}]);