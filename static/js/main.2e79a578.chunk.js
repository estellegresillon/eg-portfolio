(this["webpackJsonpeg-portfolio"]=this["webpackJsonpeg-portfolio"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){e.exports=n(32)},,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(7),c=n.n(l),i=n(1),s=n(4),o=(n(24),n(25),n(8)),m=function(e){return{type:"TOGGLE_THEME",payload:e}},u=(n(26),Object(i.b)((function(e){return{showLightTheme:e.showLightTheme}}),(function(e){return Object(s.a)({toggleTheme:m},e)}))((function(e){var t=e.showLightTheme,n=e.toggleTheme,l=Object(a.useState)("CREATIVE DEVELOPER"),c=Object(o.a)(l,2),i=c[0],s=c[1];return r.a.createElement("header",{className:"App-header",style:{color:t?"#0e0e0e":"#fff"}},r.a.createElement("div",{className:"logo",onClick:function(){return window.scrollTo(0,0)}},"ESTELLE GRESILLON"),r.a.createElement("div",{className:"profession",onMouseEnter:function(){return s("\ud83d\udc99\ud83d\udc99\ud83d\udc99")},onMouseLeave:function(){return s("CREATIVE DEVELOPER")}},i),r.a.createElement("div",{className:"theme",onClick:function(){return n(t)}},t?"DARK THEME":"LIGHT THEME"))}))),f=(n(27),Object(i.b)((function(e){return{showLightTheme:e.showLightTheme}}))((function(e){var t=e.showLightTheme,n=Object(a.useRef)(null),l=Object(a.useRef)(null),c=Object(a.useRef)(null),i=Object(a.useRef)(null),s=Object(a.useRef)(null),o=Object(a.useRef)(null),m=function(e,t,n,a){var r=e.pageX-t.offsetLeft-a,l=e.pageY-t.offsetTop-a;n.style.left=r+"px",n.style.top=l+"px"},u=function(e){var t=l.current.offsetTop,n=window.pageYOffset;c.current.style.transform="matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(.5*(n-t),",0,0,1)"),i.current.style.transform="matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(-.5*(n-t),",0,0,1)"),s.current.style.transform="matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(.5*(n-t),",0,0,1)"),o.current.style.transform="matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(-.5*(n-t),",0,0,1)")};return Object(a.useEffect)((function(){var e=l.current,t=n.current;return e.addEventListener("mousemove",(function(n){m(n,e,t,280)}),!1),function(){return e.removeEventListener("mousemove",(function(n){m(n,e,t,280)}),!1)}}),[]),Object(a.useEffect)((function(){return window.addEventListener("scroll",u,!1),function(){return window.removeEventListener("scroll",u,!1)}}),[]),r.a.createElement("section",{className:"hero-scene",ref:l,style:{color:t?"#0e0e0e":"#fff",background:t?"#fff":"#0e0e0e"}},r.a.createElement("div",{className:"hero-cursor",ref:n,style:{mixBlendMode:t?"screen":"darken"}}),r.a.createElement("h1",{className:"first",ref:c},r.a.createElement("span",{className:"title-stroke"},"DESIGNER"),r.a.createElement("span",{className:"title-plain"},"UX"),r.a.createElement("span",{className:"title-stroke"},"DESIGNER"),r.a.createElement("span",{className:"title-plain"},"UI"),r.a.createElement("span",{className:"title-stroke"},"DESIGNER")),r.a.createElement("h1",{ref:i},r.a.createElement("span",{className:"title-stroke"},"FRONTEND"),r.a.createElement("span",{className:"title-plain"},"DEVELOPER"),r.a.createElement("span",{className:"title-stroke"},"FRONTEND"),r.a.createElement("span",{className:"title-plain"},"DEVELOPER")),r.a.createElement("h1",{className:"first mobile-only",ref:s},r.a.createElement("span",{className:"title-stroke"},"DESIGNER"),r.a.createElement("span",{className:"title-plain"},"UI"),r.a.createElement("span",{className:"title-stroke"},"DESIGNER"),r.a.createElement("span",{className:"title-plain"},"UX"),r.a.createElement("span",{className:"title-stroke"},"DESIGNER")),r.a.createElement("h1",{className:"mobile-only",ref:o},r.a.createElement("span",{className:"title-stroke"},"FRONTEND"),r.a.createElement("span",{className:"title-plain"},"DEVELOPER"),r.a.createElement("span",{className:"title-stroke"},"FRONTEND")),r.a.createElement("ul",{className:"skillset"},r.a.createElement("li",null,"D\xe9VELOPPEMENT FRONT-END"),r.a.createElement("li",{className:"tools"},"REACT.JS - NEXTJS - REDUX - CONTEXT REACT"),r.a.createElement("br",null),r.a.createElement("li",null,"UI/UX DESIGN"),r.a.createElement("li",{className:"tools"},"SKETCH - ADOBE - INVISION - ZEPLIN")),r.a.createElement("p",{className:"availability"},"Disponible en Avril 2020"))}))),E=(n(28),[{name:"Rafael Bolano",year:2020,img:"rafaelbolano",url:"http://rafaelbolano.estellegresillon.fr"},{name:"Zest",year:2020,img:"zest",url:"http://zest.estellegresillon.fr"},{name:"Foodlab",year:2019,img:"foodlab",url:"http://foodlab.estellegresillon.fr"},{name:"Dive In Santorini",year:2019,img:"santorini",url:"http://santorini.estellegresillon.fr"},{name:"Otaku Market",year:2018,img:"otaku",url:"https://www.otaku-market.com"},{name:"That's My Rock",year:2018,img:"thatsmyrock",url:"http://www.thatsmyrock.com/"}]),d=n(5),p=(n(29),function(e){var t=e.project,n=function(){var e="object"===typeof window,t=function(){return{width:e?window.innerWidth:void 0,height:e?window.innerHeight:void 0}},n=Object(a.useState)(t),r=Object(o.a)(n,2),l=r[0],c=r[1];return Object(a.useEffect)((function(){if(!e)return!1;var n=function(){c(t())};return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[]),l}(),l=Object(a.useRef)(null),c=Object(a.useRef)(null),i=Object(a.useRef)(null),s=function(e){var t=window.innerWidth/2,n=window.innerHeight/2,a=e.clientX-t,r=e.clientY-n;c.current.style.transform="matrix3d(1,0,0.00,".concat(1e-7*a,",0.00,1,0.00,0,0,0,1,0,").concat(-.1*a,",").concat(-.1*r,",0,1)")},m=function(e){var n=l.current.offsetTop,a=window.pageYOffset;"rafaelbolano"===t.img||"foodlab"===t.img||"otaku"===t.img?i.current.style.transform="matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(-.6*(a-n),",0,0,1)"):i.current.style.transform="matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(.6*(a-n),",0,0,1)")};return Object(a.useEffect)((function(){if(n.width>728){var e=l.current;return e.addEventListener("mousemove",s,!1),function(){return e.removeEventListener("mousemove",s,!1)}}}),[]),Object(a.useEffect)((function(){if(n.width>728)return window.addEventListener("scroll",m,!1),function(){return window.removeEventListener("scroll",m,!1)}}),[]),r.a.createElement("div",{className:"project-card ".concat(t.img),ref:l,onClick:function(){return window.open(t.url,"_blank")}},r.a.createElement("h3",{ref:i,className:"title-stroke"},t.name),r.a.createElement("h4",{className:"title-stroke"},t.year,r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-external-link-alt"}))),r.a.createElement(d.a,{onEnter:function(){c.current.classList.add("transition-project-on")},onLeave:function(){c.current.classList.remove("transition-project-on")}},r.a.createElement("img",{ref:c,src:"".concat(t.img,".jpg"),alt:t.img})))}),h=Object(i.b)((function(e){return{showLightTheme:e.showLightTheme}}))((function(e){var t=e.showLightTheme;return r.a.createElement("section",{className:"projects",style:{color:t?"#0e0e0e":"#fff",background:t?"#fff":"#0e0e0e"}},E.map((function(e){return r.a.createElement(p,{key:e.name,project:e})})))})),v=(n(30),Object(i.b)((function(e){return{showLightTheme:e.showLightTheme}}))((function(e){var t=e.showLightTheme,n=Object(a.useRef)(null);return r.a.createElement("section",{className:"about",style:{color:t?"#0e0e0e":"#fff",background:t?"#fff6f6":"#ef3d3d"}},r.a.createElement(d.a,{onEnter:function(){n.current.classList.add("transition-on")},onLeave:function(){n.current.classList.remove("transition-on")}},r.a.createElement("div",{className:"about-container",ref:n},r.a.createElement("div",{className:"about-column presentation"},r.a.createElement("p",null,r.a.createElement("span",{className:"intro"},"Hello"),", je suis d\xe9veloppeur front-end et designer."),r.a.createElement("p",null,"Passionn\xe9e de design et d'interaction, mon objectif est de cr\xe9er des produits \xe0 l'exp\xe9rience utilisateur unique et au design hautement qualitatif. Je me suis sp\xe9cialis\xe9e dans le d\xe9veloppement front-end sur React.js durant diverses exp\xe9riences sur Paris (magazine, op\xe9rateur t\xe9l\xe9com, site e-commerce) pendant 2 ans, et \xe9galement via des projets personnels."),r.a.createElement("p",null,"Je recherche actuellement \xe0 participer \xe0 la conception et \xe0 la direction artistique de sites vitrines ou d'application desktop (d\xe9veloppement from scratch, maintenance \xe9volutive, ou int\xe9gration).")),r.a.createElement("div",{className:"about-column skills"},r.a.createElement("h5",null,r.a.createElement("span",{"aria-label":"emoji-worker",role:"img"},"\ud83d\udcbb")," D\xc9VELOPPEMENT FRONT-END"),r.a.createElement("ul",null,r.a.createElement("li",{className:"bolder"},"React.js / Redux / Nextjs / Context React"),r.a.createElement("li",null,"D\xe9veloppement d'app from scratch / Sites vitrines"),r.a.createElement("li",null,"Int\xe9gration CSS3 / Responsive design"),r.a.createElement("li",null,"Animations CSS et transitions, parallax")),r.a.createElement("h5",null,r.a.createElement("span",{"aria-label":"emoji-worker",role:"img"},"\ud83c\udfa8")," DESIGN"),r.a.createElement("ul",null,r.a.createElement("li",{className:"bolder"},"Sketch / Suite Adobe / Invision / Zeplin"),r.a.createElement("li",null,"Design d'interface, prototypage, maquettage"),r.a.createElement("li",null,"Conception d'identit\xe9/branding de marques"),r.a.createElement("li",null,"Design d'interaction, conception de parcours utilisateurs"))))))}))),g=(n(31),["An exciting web project ?","A friendly question ?","A sexy static website ?","A remote mission ?","... or a mission onsite ?","Looking for a brand new identity concept ?","Looking for a designer that can code ?","Looking for a coder that can design ?","Need a React.Js webapp ?","A coffee meeting ?"]),b=function(e,t){var n=0,a=setInterval((function(){e?(e.innerHTML+=t.charAt(n),++n===t.length&&(clearInterval(a),setTimeout((function(){N(e,t)}),1e3))):clearInterval(a)}),50)},N=function(e,t){var n=g.indexOf(t)+1,a=t.length-1,r=setInterval((function(){e?(e.innerHTML=t.substring(0,a-1),0===--a&&(clearInterval(r),setTimeout((function(){n===g.length?b(e,g[0]):b(e,g[n])}),500))):clearInterval(r)}),20)},w=Object(i.b)((function(e){return{showLightTheme:e.showLightTheme}}))((function(e){var t=e.showLightTheme,n=Object(a.useRef)(null),l=Object(a.useRef)(null);return Object(a.useEffect)((function(){return b(l.current,g[0]),function(){return b(null,null)}}),[]),r.a.createElement("section",{className:"contact",style:{color:t?"#0e0e0e":"#fff",background:t?"#fff6f6":"#ef3d3d"}},r.a.createElement(d.a,{onEnter:function(){n.current.classList.add("transition-on")},onLeave:function(){n.current.classList.remove("transition-on")}},r.a.createElement("div",{className:"contact-container",ref:n},r.a.createElement("div",{className:"contact-infos"},r.a.createElement("div",{className:"text-wrapper"},r.a.createElement("div",{id:"text-container",ref:l})),r.a.createElement("div",{className:"mail-wrapper"},r.a.createElement("img",{src:"profile-pic.jpg",height:"100px",width:"auto",alt:"shiny-uniorn"}),r.a.createElement("div",{className:"column-right"},r.a.createElement("p",{className:"send-email"},"Envoyez-moi un e-mail :"),r.a.createElement("a",{href:"mailto:estelle.gresillon@gmail.com",alt:"mail",style:{color:t?"#0e0e0e":"#fff"}},"estelle.gresillon@gmail.com"))),r.a.createElement("p",{className:"disponibility"},r.a.createElement("span",{"aria-label":"emoji-worker",role:"img"},"\ud83d\udc69\u200d\ud83d\udcbc")," Disponible en Avril 2020 pour des missions freelance")),r.a.createElement("div",{className:"social-icons"},r.a.createElement("a",{style:{color:t?"#0e0e0e":"#fff"},href:"https://www.linkedin.com/in/estellegresillon/",alt:"linkedin"},r.a.createElement("i",{className:"fab fa-linkedin"})),r.a.createElement("a",{href:"https://dribbble.com/estellegresillon",style:{color:t?"#0e0e0e":"#fff"},alt:"dribbble"},r.a.createElement("i",{className:"fab fa-dribbble"})),r.a.createElement("a",{href:"https://github.com/estellegresillon",style:{color:t?"#0e0e0e":"#fff"},alt:"github"},r.a.createElement("i",{className:"fab fa-github-alt"})),r.a.createElement("a",{href:"mailto:estelle.gresillon@gmail.com",style:{color:t?"#0e0e0e":"#fff"},alt:"mail"},r.a.createElement("i",{className:"far fa-paper-plane"}))))))})),L=function(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),n=function(e,n,a){var r=e.clientX-a,l=e.clientY-a;t.current=l,n.style.left=r+"px",n.style.top=l+"px"},l=function(e){e.style.top=t.current+"px"};return Object(a.useEffect)((function(){var t=e.current;return window.addEventListener("mousemove",(function(e){n(e,t,5)}),!1),function(){return window.removeEventListener("mousemove",(function(e){n(e,t,5)}),!1)}}),[]),Object(a.useEffect)((function(){var t=e.current;return window.addEventListener("scroll",(function(){l(t)})),function(){return window.removeEventListener("scroll",(function(){l(t)}))}}),[]),r.a.createElement("div",{className:"estelle-gresillon"},r.a.createElement("div",{className:"cursor-small",ref:e}),r.a.createElement(u,null),r.a.createElement(f,null),r.a.createElement(v,null),r.a.createElement(h,null),r.a.createElement(w,null))},O=Object(s.b)({showLightTheme:function(e,t){if(void 0===e)return!1;switch(t.type){case"TOGGLE_THEME":return!t.payload;default:return e}}});c.a.render(r.a.createElement(i.a,{store:Object(s.c)(O)},r.a.createElement(L,null)),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.2e79a578.chunk.js.map