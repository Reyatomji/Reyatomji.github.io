(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{26:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(9),i=n(3),s=n(1),a=n(0),l=Object(s.createContext)(),r=function(e){var t=e.children,n=Object(s.useState)("light"),c=Object(i.a)(n,2),r=c[0],o=c[1];Object(s.useEffect)((function(){}),[]);return Object(a.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://Reyatomji.github.io",j="Reya Tomji.",b={name:"Reya Tomji",role:"Software Engineer",description:"I'm a Software Engineer currently pursuing B.Tech in Computer Science and Engineering with Specialization in Cloud Computing from SRM Institute of Science and Technology, KTR.",social:{github:"https://github.com/Reyatomji"}},u=[{name:"Software Design",description:"In this project, I created programs using Object Oriented Design and Programming.",stack:["OODP","C++"],sourceCode:"https://github.com/Reyatomji/OODP"},{name:"Software Development",description:"In this project, I created optimized algorithms using Data Structures and Algorithms.",stack:["C","DSA"]}],h=["C/C++","Object Oriented Design and Programming","Data Structures and Algorithm","Computer Organization and Architecture","JavaScript","Python","HTML","CSS","Git"],d="rt4575@srmist.edu.in",m=n(16),O=n.n(m),x=n(14),f=n.n(x),p=(n(26),function(){var e=Object(s.useContext)(l),t=Object(i.a)(e,1)[0],n=(t.themeName,t.toggleTheme,Object(s.useState)(!1)),c=Object(i.a)(n,2),r=c[0],o=c[1],j=function(){return o(!r)};return Object(a.jsxs)("nav",{className:"center nav",children:[Object(a.jsxs)("ul",{style:{display:r?"flex":null},className:"nav__list",children:[u.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#projects",onClick:j,className:"link link--nav",children:"Projects"})}):null,h.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#skills",onClick:j,className:"link link--nav",children:"Skills"})}):null,d?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#contact",onClick:j,className:"link link--nav",children:"Contact"})}):null]}),Object(a.jsx)("button",{type:"button",onClick:j,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:r?Object(a.jsx)(f.a,{}):Object(a.jsx)(O.a,{})})]})}),g=(n(30),function(){var e=o,t=j;return Object(a.jsxs)("header",{className:"header center",children:[Object(a.jsx)("h3",{children:e?Object(a.jsx)("a",{href:e,className:"link",children:t}):t}),Object(a.jsx)(p,{})]})}),k=n(11),_=n.n(k),N=n(17),v=n.n(N),C=(n(31),function(){var e=b.name,t=b.role,n=b.description,c=b.resume,i=b.social;return Object(a.jsxs)("div",{className:"about center",children:[e&&Object(a.jsxs)("h1",{children:["Hi, I am ",Object(a.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(a.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(a.jsx)("p",{className:"about__desc",children:n&&n}),Object(a.jsxs)("div",{className:"about__contact center",children:[c&&Object(a.jsx)("a",{href:c,target:"_blank",children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),i&&Object(a.jsxs)(a.Fragment,{children:[i.github&&Object(a.jsx)("a",{href:i.github,"aria-label":"github",className:"link link--icon",target:"_blank",children:Object(a.jsx)(_.a,{})}),i.linkedin&&Object(a.jsx)("a",{href:i.linkedin,"aria-label":"linkedin",className:"link link--icon",target:"_blank",children:Object(a.jsx)(v.a,{})})]})]})]})}),S=n(7),w=n.n(S),y=n(18),P=n.n(y),R=(n(33),function(e){var t=e.project;return Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(a.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(a.jsx)("li",{className:"project__stack-item",children:e},w()())}))}),t.sourceCode&&Object(a.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",target:"_blank",children:Object(a.jsx)(_.a,{})}),t.livePreview&&Object(a.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",target:"_blank",children:Object(a.jsx)(P.a,{})})]})}),D=(n(34),function(){return u.length?Object(a.jsxs)("section",{id:"projects",className:"section projects",children:[Object(a.jsx)("h2",{className:"section__title",children:"Projects"}),Object(a.jsx)("div",{className:"projects__grid",children:u.map((function(e){return Object(a.jsx)(R,{project:e},w()())}))})]}):null}),E=(n(35),function(){return h.length?Object(a.jsxs)("section",{className:"section skills",id:"skills",children:[Object(a.jsx)("h2",{className:"section__title",children:"Skills"}),Object(a.jsx)("ul",{className:"skills__list",children:h.map((function(e){return Object(a.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},w()())}))})]}):null}),I=n(19),T=n.n(I),A=(n(36),function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(s.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(a.jsx)("div",{className:"scroll-top",children:Object(a.jsx)("a",{href:"#top",children:Object(a.jsx)(T.a,{fontSize:"large"})})}):null}),z=(n(37),function(){return d?Object(a.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(a.jsx)("h2",{className:"section__title",children:"Contact"}),Object(a.jsx)("a",{href:"mailto:".concat(d),children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),J=(n(38),function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("a",{href:"https://github.com/Reyatomji",className:"link footer__link",target:"_blank",children:"\xa9 2022 Reya Tomji"})})}),L=(n(39),function(){var e=Object(s.useContext)(l),t=Object(i.a)(e,1)[0].themeName;return Object(a.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(a.jsx)(g,{}),Object(a.jsxs)("main",{children:[Object(a.jsx)(C,{}),Object(a.jsx)(D,{}),Object(a.jsx)(E,{}),Object(a.jsx)(z,{})]}),Object(a.jsx)(A,{}),Object(a.jsx)(J,{})]})});n(40);Object(c.render)(Object(a.jsx)(r,{children:Object(a.jsx)(L,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.9cc65603.chunk.js.map