(this["webpackJsonpeg-portfolio"]=this["webpackJsonpeg-portfolio"]||[]).push([[0],{24:function(e){e.exports=JSON.parse('{"hero-scene":{"front-end":"D\xe9veloppement Front-End","availability":"Disponible en Avril 2020"},"about":{"intro":"je suis d\xe9veloppeur front-end et designer UI/UX.","first-paragraph":"Passionn\xe9e de design et d\'interaction, mon objectif est de cr\xe9er des produits \xe0 l\'exp\xe9rience utilisateur unique et au design hautement qualitatif. Je me suis sp\xe9cialis\xe9e dans le d\xe9veloppement front-end sur React.js durant diverses exp\xe9riences sur Paris (magazine, op\xe9rateur t\xe9l\xe9com, site e-commerce) pendant 2 ans, et \xe9galement via des projets personnels.","second-paragraph":"Je recherche actuellement \xe0 participer \xe0 la conception et \xe0 la direction artistique de sites vitrines ou d\'application desktop (d\xe9veloppement from scratch, maintenance \xe9volutive, ou int\xe9gration).","dev-title":" D\xc9VELOPPEMENT FRONT-END","dev-first":"D\xe9veloppement d\'app from scratch / Sites vitrines","dev-second":"Int\xe9gration CSS3 / Responsive design","dev-third":"Animations CSS et transitions, parallax","design-first":"Design d\'interface, prototypage, maquettage","design-second":"Conception d\'identit\xe9/branding de marques","design-third":"Design d\'interaction, conception de parcours utilisateurs"},"contact":{"send-mail":"Envoyez-moi un e-mail :","availability":"Disponible en Avril 2020 pour des missions freelance"},"footer":{"credits":"Design et d\xe9veloppement par Estelle Gr\xe9sillon \xa92020 - Tous droits r\xe9serv\xe9s","techno":"Site r\xe9alis\xe9 avec ReactJS / Redux / NextJS / i18next"}}')},25:function(e){e.exports=JSON.parse('{"hero-scene":{"front-end":"Front-End Development","availability":"Available in April 2020"},"about":{"intro":"I am a front-end developer and a UI/UX designer.","first-paragraph":"With a passion for design and interaction, my goal is to create whole products with a high quality design and user experience. I started front-end development 2 years ago with React.js in Paris (magazine, telephone operator, e-commerce website).","second-paragraph":"I am looking for missions that could bring me the opportunity to act on the technical conception and also the artistic direction of an app or a static website.","dev-title":" FRONT-END DEVELOPMENT","dev-first":"Development from scratch / Static websites","dev-second":"CSS3 integration / Responsive design","dev-third":"CSS animations and transitions, parallax","design-first":"Interface design, prototyping","design-second":"Branding and indenity design","design-third":"Interaction design, user journey"},"contact":{"send-mail":"Send me an e-mail :","availability":"Available in April 2020 for freelance missions"},"footer":{"credits":"Designed and developed by Estelle Gr\xe9sillon \xa92020 - All rights reserved","techno":"Website made with ReactJS / Redux / NextJS / i18next"}}')},26:function(e,t,n){e.exports=n(52)},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(14),l=n.n(i),o=n(1),c=n(8),s=n(3),u=(n(43),n(44),n(4)),m=n(11),f=function(e){return{type:"TOGGLE_THEME",payload:e}},d=(n(45),Object(o.b)((function(e){return{showLightTheme:e.showLightTheme}}),(function(e){return Object(c.a)({toggleTheme:f},e)}))((function(e){var t=e.showLightTheme,n=e.toggleTheme,i=function(e){var t=Object(a.useState)(e),n=Object(u.a)(t,2),r=n[0],i=n[1],l=Object(a.useRef)(null),o=function(e){l.current&&!l.current.contains(e.target)&&i(!1)};return Object(a.useEffect)((function(){return document.addEventListener("click",o,!0),function(){document.removeEventListener("click",o,!0)}})),{ref:l,isComponentVisible:r,setIsComponentVisible:i}}(!1),l=i.ref,o=i.isComponentVisible,c=i.setIsComponentVisible,s=Object(a.useState)("ESTELLE GRESILLON"),f=Object(u.a)(s,2),d=f[0],E=f[1],p=Object(a.useState)(""),h=Object(u.a)(p,2),b=h[0],v=h[1],g=function(){var e=window.innerHeight,t=window.pageYOffset,n=document.body.scrollHeight;E(t+2*e>=n?"CLICK HERE TO SCROLL TO TOP":t>5*e?"\ud83c\udf70\ud83c\udf70\ud83c\udf70":t>4*e?"\ud83c\udf70\ud83c\udf70":t>3*e?"\ud83c\udf70":t>2*e?"HELLO ?":t>e?"\ud83d\udda4\ud83d\udda4\ud83d\udda4":"ESTELLE GRESILLON")},w=function(e){m.a.changeLanguage(e),v(e)};return Object(a.useEffect)((function(){return window.addEventListener("scroll",g,!1),function(){return window.removeEventListener("scroll",g,!1)}}),[]),Object(a.useEffect)((function(){var e=m.a.language;v(e)}),[]),r.a.createElement("header",{className:"App-header",style:{color:t?"#000":"#fff"}},r.a.createElement("div",{className:"logo","aria-label":"Estelle Gr\xe9sillon","aria-hidden":"true",onClick:function(){return window.scrollTo(0,0)}},d),r.a.createElement("div",{className:"center-menu"},r.a.createElement("div",{"aria-hidden":"true",className:"theme",onClick:function(){return n(t)}},t?r.a.createElement("i",{className:"fas fa-sun"}):r.a.createElement("i",{className:"fas fa-moon"})),r.a.createElement("div",{className:"language-menu",style:{borderLeft:"1px solid ".concat(t?"#000":"#fff")}},r.a.createElement("span",{className:"fr"===b?"bolder":"",onClick:function(){return w("fr")}},"FR"),r.a.createElement("span",{className:"en"===b?"bolder":"",onClick:function(){return w("en")}},"EN"))),r.a.createElement("nav",{onClick:function(){return c(!0)}},"MENU ",r.a.createElement("i",{className:"fas fa-bars"})),o&&r.a.createElement("ul",{onClick:function(){return c(!1)},ref:l},r.a.createElement("li",null,r.a.createElement("a",{href:"#about"},"ABOUT")),r.a.createElement("li",null,r.a.createElement("a",{href:"#projects"},"PROJECTS")),r.a.createElement("li",null,r.a.createElement("a",{href:"#contact"},"CONTACT")),r.a.createElement("li",{className:"mobile-only"},r.a.createElement("span",{className:"fr"===b?"bolder":"",onClick:function(){return w("fr")}},"FR"),r.a.createElement("span",{className:"en"===b?"bolder":"",onClick:function(){return w("en")}},"EN"))))}))),E=(n(46),Object(s.b)()(Object(o.b)((function(e){return{showLightTheme:e.showLightTheme}}))((function(e){var t=e.showLightTheme,n=e.t,i=Object(a.useRef)(null),l=Object(a.useRef)(null),o=Object(a.useRef)(null),c=Object(a.useRef)(null),s=Object(a.useRef)(null),u=Object(a.useRef)(null),m=function(e,t,n,a){var r=e.pageX-t.offsetLeft-a,i=e.pageY-t.offsetTop-a;n.style.left=r+"px",n.style.top=i+"px"},f=function(e){var t=l.current.offsetTop,n=window.pageYOffset;o.current.style.transform="matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(.5*(n-t),",0,0,1)"),c.current.style.transform="matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(-.5*(n-t),",0,0,1)"),s.current.style.transform="matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(.5*(n-t),",0,0,1)"),u.current.style.transform="matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(-.5*(n-t),",0,0,1)")};return Object(a.useEffect)((function(){var e=l.current,t=i.current;return e.addEventListener("mousemove",(function(n){m(n,e,t,280)}),!1),function(){return e.removeEventListener("mousemove",(function(n){m(n,e,t,280)}),!1)}}),[]),Object(a.useEffect)((function(){return window.addEventListener("scroll",f,!1),function(){return window.removeEventListener("scroll",f,!1)}}),[]),r.a.createElement("section",{className:"hero-scene",ref:l,"aria-hidden":"true",style:{color:t?"#000":"#fff",background:t?"#fff":"#000"}},r.a.createElement("div",{className:"hero-cursor",ref:i,style:{mixBlendMode:t?"screen":"darken"}}),r.a.createElement("h1",{className:"first",ref:o},r.a.createElement("span",{className:"title-stroke"},"DESIGNER"),r.a.createElement("span",{className:"title-plain"},"UX"),r.a.createElement("span",{className:"title-stroke"},"DESIGNER"),r.a.createElement("span",{className:"title-plain"},"UI"),r.a.createElement("span",{className:"title-stroke"},"DESIGNER")),r.a.createElement("h1",{ref:c},r.a.createElement("span",{className:"title-stroke"},"FRONTEND"),r.a.createElement("span",{className:"title-plain"},"DEVELOPER"),r.a.createElement("span",{className:"title-stroke"},"FRONTEND"),r.a.createElement("span",{className:"title-plain"},"DEVELOPER")),r.a.createElement("h1",{className:"first mobile-only",ref:s},r.a.createElement("span",{className:"title-stroke"},"DESIGNER"),r.a.createElement("span",{className:"title-plain"},"UI"),r.a.createElement("span",{className:"title-stroke"},"DESIGNER"),r.a.createElement("span",{className:"title-plain"},"UX"),r.a.createElement("span",{className:"title-stroke"},"DESIGNER")),r.a.createElement("h1",{className:"mobile-only",ref:u},r.a.createElement("span",{className:"title-stroke"},"FRONTEND"),r.a.createElement("span",{className:"title-plain"},"DEVELOPER"),r.a.createElement("span",{className:"title-stroke"},"FRONTEND")),r.a.createElement("ul",{className:"skillset"},r.a.createElement("li",null,n("hero-scene.front-end")),r.a.createElement("li",{className:"tools"},"REACT.JS - NEXTJS - REDUX - CONTEXT REACT"),r.a.createElement("br",null),r.a.createElement("li",null,"UI/UX DESIGN"),r.a.createElement("li",{className:"tools"},"SKETCH - ADOBE - INVISION - ZEPLIN")),r.a.createElement("p",{className:"availability"},n("hero-scene.availability")))})))),p=(n(47),[{name:"Rafael Bolano",year:2020,img:"rafaelbolano",url:"http://rafaelbolano.estellegresillon.fr"},{name:"Zest",year:2020,img:"zest",url:"http://zest.estellegresillon.fr"},{name:"Foodlab",year:2019,img:"foodlab",url:"http://foodlab.estellegresillon.fr"},{name:"Dive In Santorini",year:2019,img:"santorini",url:"http://santorini.estellegresillon.fr"},{name:"Otaku Market",year:2018,img:"otaku",url:"https://www.otaku-market.com"},{name:"That's My Rock",year:2018,img:"thatsmyrock",url:"http://www.thatsmyrock.com/"}]),h=n(10),b=(n(48),function(){var e="object"===typeof window,t=function(){return{width:e?window.innerWidth:void 0,height:e?window.innerHeight:void 0}},n=Object(a.useState)(t),r=Object(u.a)(n,2),i=r[0],l=r[1];return Object(a.useEffect)((function(){if(!e)return!1;var n=function(){l(t())};return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[]),i}),v=function(e){var t=e.project,n=b(),i=Object(a.useRef)(null),l=Object(a.useRef)(null),o=Object(a.useRef)(null),c=function(e){var t=window.innerWidth/2,n=window.innerHeight/2,a=e.clientX-t,r=e.clientY-n;l.current.style.transform="matrix3d(1,0,0.00,".concat(1e-7*a,",0.00,1,0.00,0,0,0,1,0,").concat(-.1*a,",").concat(-.1*r,",0,1)")},s=function(){var e=i.current.offsetTop,n=window.pageYOffset;"rafaelbolano"===t.img||"foodlab"===t.img||"otaku"===t.img?o.current.style.transform="matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(-.6*(n-e),",0,0,1)"):o.current.style.transform="matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(.6*(n-e),",0,0,1)")};return Object(a.useEffect)((function(){if(n.width>728){var e=i.current;return e.addEventListener("mousemove",c,!1),function(){return e.removeEventListener("mousemove",c,!1)}}}),[]),Object(a.useEffect)((function(){if(n.width>728)return window.addEventListener("scroll",s,!1),function(){return window.removeEventListener("scroll",s,!1)}}),[]),r.a.createElement("div",{className:"project-card ".concat(t.img),ref:i,onClick:function(){return window.open(t.url,"_blank")}},r.a.createElement("h3",{ref:o,className:"title-stroke"},t.name),r.a.createElement("h4",{className:"title-stroke"},t.year,r.a.createElement("span",{"aria-label":"External link"},r.a.createElement("i",{"aria-hidden":"true",className:"fas fa-external-link-alt"}))),r.a.createElement(h.a,{onEnter:function(){l.current.classList.add("transition-project-on")},onLeave:function(){l.current.classList.remove("transition-project-on")}},r.a.createElement("img",{ref:l,src:"".concat(t.img,".jpg"),alt:"".concat(t.name," website preview")})))},g=Object(o.b)((function(e){return{showLightTheme:e.showLightTheme}}))((function(e){var t=e.showLightTheme;return r.a.createElement("section",{id:"projects",style:{color:t?"#000":"#fff",background:t?"#fff":"#000"}},p.map((function(e){return r.a.createElement(v,{key:e.name,project:e})})))})),w=(n(49),Object(s.b)()(Object(o.b)((function(e){return{showLightTheme:e.showLightTheme}}))((function(e){var t=e.showLightTheme,n=e.t,i=b(),l=Object(a.useRef)(null),o=Object(a.useRef)(null),c=Object(a.useRef)(null),s=function(){var e=l.current.offsetTop,t=window.pageYOffset;o.current.style.transform="matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(-.2*(t-e),",0,0,1)"),c.current.style.transform="matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(.2*(t-e),",0,0,1)")};return Object(a.useEffect)((function(){if(i.width>728)return window.addEventListener("scroll",s,!1),function(){return window.removeEventListener("scroll",s,!1)}}),[]),r.a.createElement("section",{id:"about",style:{color:t?"#000":"#fff",background:t?"#fff":"#000"}},r.a.createElement(h.a,{onEnter:function(){l.current.classList.add("transition-on")},onLeave:function(){l.current.classList.remove("transition-on")}},r.a.createElement("div",{className:"about-container",ref:l},r.a.createElement("div",{className:"about-column presentation",ref:o},r.a.createElement("p",null,r.a.createElement("span",{className:"intro"},"Hello"),", ",n("about.intro")),r.a.createElement("p",null,n("about.first-paragraph")),r.a.createElement("p",null,n("about.second-paragraph"))),r.a.createElement("div",{className:"about-column skills",ref:c},r.a.createElement("h5",null,r.a.createElement("span",{"aria-label":"emoji-worker",role:"img"},"\ud83d\udcbb"),n("about.dev-title")),r.a.createElement("ul",null,r.a.createElement("li",{className:"bolder"},"React.js / Redux / Nextjs / Context React"),r.a.createElement("li",null,n("about.dev-first")),r.a.createElement("li",null,n("about.dev-second")),r.a.createElement("li",null,n("about.dev-third"))),r.a.createElement("h5",null,r.a.createElement("span",{"aria-label":"emoji-worker",role:"img"},"\ud83c\udfa8")," DESIGN UX/UI"),r.a.createElement("ul",null,r.a.createElement("li",{className:"bolder"},"Sketch / Adobe / Invision / Zeplin"),r.a.createElement("li",null,n("about.design-first")),r.a.createElement("li",null,n("about.design-second")),r.a.createElement("li",null,n("about.design-third")))))))})))),N=(n(50),["An exciting web project ?","A friendly question ?","A sexy static website ?","A remote mission ?","... or a mission onsite ?","Looking for a brand new identity concept ?","Looking for a designer that can code ?","Looking for a coder that can design ?","Need a React.Js webapp ?","A coffee meeting ?"]),O=function(e,t){var n=0,a=setInterval((function(){e?(e.innerHTML+=t.charAt(n),++n===t.length&&(clearInterval(a),setTimeout((function(){L(e,t)}),1e3))):clearInterval(a)}),50)},L=function(e,t){var n=N.indexOf(t)+1,a=t.length-1,r=setInterval((function(){e?(e.innerHTML=t.substring(0,a-1),0===--a&&(clearInterval(r),setTimeout((function(){n===N.length?O(e,N[0]):O(e,N[n])}),500))):clearInterval(r)}),20)},j=Object(s.b)()(Object(o.b)((function(e){return{showLightTheme:e.showLightTheme}}))((function(e){var t=e.showLightTheme,n=e.t,i=b(),l=Object(a.useRef)(null),o=Object(a.useRef)(null),c=function(){var e=l.current.offsetTop,t=window.pageYOffset;l.current.style.transform="matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(-.8*(t-e),",0,0,1)")};return Object(a.useEffect)((function(){if(i.width>728)return window.addEventListener("scroll",c,!1),function(){return window.removeEventListener("scroll",c,!1)}}),[]),Object(a.useEffect)((function(){return O(o.current,N[0]),function(){return O(null,null)}}),[]),r.a.createElement("section",{id:"contact",style:{color:t?"#000":"#fff",background:t?"#fff":"#000"}},r.a.createElement(h.a,{onEnter:function(){l.current.classList.add("transition-on")},onLeave:function(){l.current.classList.remove("transition-on")}},r.a.createElement("div",{className:"contact-container",ref:l},r.a.createElement("div",{className:"contact-infos"},r.a.createElement("div",{"aria-hidden":"true",className:"text-wrapper"},r.a.createElement("div",{id:"text-container",ref:o})),r.a.createElement("div",{className:"mail-wrapper"},r.a.createElement("img",{src:"profile-pic.jpg",height:"100px",width:"auto",alt:"Author portrait"}),r.a.createElement("div",{className:"column-right"},r.a.createElement("p",{className:"send-email"},n("contact.send-mail")),r.a.createElement("a",{href:"mailto:estelle.gresillon@gmail.com",title:"Mail link",style:{color:t?"#0e0e0e":"#fff"}},"estelle.gresillon@gmail.com"))),r.a.createElement("p",{className:"disponibility"},r.a.createElement("span",{"aria-label":"Emoji businesswoman",role:"img"},"\ud83d\udc69\u200d\ud83d\udcbc")," ",n("contact.availability"))),r.a.createElement("div",{className:"social-icons"},r.a.createElement("a",{style:{color:t?"#0e0e0e":"#fff"},href:"https://www.linkedin.com/in/estellegresillon/","aria-label":"LinkedIn link"},r.a.createElement("i",{"aria-hidden":"true",className:"fab fa-linkedin"})),r.a.createElement("a",{href:"https://dribbble.com/estellegresillon",style:{color:t?"#0e0e0e":"#fff"},"aria-label":"Dribbble link"},r.a.createElement("i",{"aria-hidden":"true",className:"fab fa-dribbble"})),r.a.createElement("a",{href:"https://github.com/estellegresillon",style:{color:t?"#0e0e0e":"#fff"},"aria-label":"GitHub link"},r.a.createElement("i",{"aria-hidden":"true",className:"fab fa-github-alt"})),r.a.createElement("a",{href:"mailto:estelle.gresillon@gmail.com",style:{color:t?"#0e0e0e":"#fff"},"aria-label":"Mail link"},r.a.createElement("i",{"aria-hidden":"true",className:"far fa-paper-plane"}))))))}))),y=(n(51),Object(s.b)()(Object(o.b)((function(e){return{showLightTheme:e.showLightTheme}}))((function(e){var t=e.showLightTheme,n=e.t;return r.a.createElement("footer",{style:{color:t?"#000":"#fff",background:t?"#fff":"#000"}},r.a.createElement("p",null,n("footer.credits")),r.a.createElement("p",null,n("footer.techno")))})))),k=function(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),n=function(e,n,a){var r=e.clientX-a,i=e.clientY-a;t.current=i,n.style.left=r+"px",n.style.top=i+"px"},i=function(e){e.style.top=t.current+"px"};return Object(a.useEffect)((function(){var t=e.current;return window.addEventListener("mousemove",(function(e){n(e,t,5)}),!1),function(){return window.removeEventListener("mousemove",(function(e){n(e,t,5)}),!1)}}),[]),Object(a.useEffect)((function(){var t=e.current;return window.addEventListener("scroll",(function(){i(t)})),function(){return window.removeEventListener("scroll",(function(){i(t)}))}}),[]),r.a.createElement("div",{className:"app"},r.a.createElement("div",{"aria-hidden":"true",className:"cursor-small",ref:e}),r.a.createElement(d,null),r.a.createElement(E,null),r.a.createElement(w,null),r.a.createElement(g,null),r.a.createElement(j,null),r.a.createElement(y,null))},T={fr:n(24),en:n(25)};m.a.init({resources:function(){var e={};return Object.keys(T).forEach((function(t){e[t]={translation:T[t]}})),e}(),fallbackLng:"en",lng:"en",load:"languageOnly"});var R=m.a,x=Object(c.b)({showLightTheme:function(e,t){if(void 0===e)return!1;switch(t.type){case"TOGGLE_THEME":return!t.payload;default:return e}}});l.a.render(r.a.createElement(s.a,{i18n:R},r.a.createElement(o.a,{store:Object(c.c)(x)},r.a.createElement(k,null))),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.2b497be1.chunk.js.map