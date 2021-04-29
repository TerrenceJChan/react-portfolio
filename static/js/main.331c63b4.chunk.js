(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{337:function(e,t,n){"use strict";n.r(t);var c=n(9),i=n.n(c),a=n(83),s=n.n(a),r=(n(50),n(84)),o=n.n(r),l=n(22),j=n(2),d=function(e){return Object(j.jsx)("nav",{children:Object(j.jsx)("ul",{children:["About Me","Portfolio","Contact","Resume"].map((function(t){return Object(j.jsx)("li",{className:e.currentSection===t?"activeSection":"",children:Object(j.jsx)("span",{onClick:function(){return e.setCurrentSection(t)},children:t})},t)}))})})},h=n.p+"static/media/terrence.846c7b89.jpg",b=function(){return Object(j.jsxs)("section",{className:"section",children:[Object(j.jsx)("h1",{children:"Terrence Chan"}),Object(j.jsx)("img",{src:h,className:"profilePicture",alt:"Terrence"}),Object(j.jsxs)("p",{className:"text-regular",children:["Based in ",Object(j.jsx)("span",{className:"highlight-text",children:"Waterloo, Ontario"}),", I'm a recent graduate of the ",Object(j.jsx)("span",{className:"highlight-text",children:"University of Waterloo"})," as of 2020. My academic foci were ",Object(j.jsx)("span",{className:"highlight-text",children:"business, political science, and economics"}),". Inspired by the fast-paced world being driven in Canada's fastest growing tech hub, ",Object(j.jsx)("span",{className:"highlight-text",children:"I decided to study code"})," as well. With additional education from the ",Object(j.jsx)("span",{className:"highlight-text",children:"University of Toronto's Coding Boot Camp"}),", I extensively studied both ",Object(j.jsx)("span",{className:"highlight-text",children:"front-end and back-end development"}),", making me a competent ",Object(j.jsx)("span",{className:"highlight-text",children:"full-stack developer"}),". I am always looking for new adventures. Below are some of my past projects."]})]})},u=function(e){return Object(j.jsxs)("li",{className:"project",children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:"/react-portfolio"+"/images/portfolio/".concat(e.item.file),alt:"Thumbnail of ".concat(e.item.title)})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:e.item.title}),Object(j.jsx)("p",{children:e.item.description}),Object(j.jsx)("p",{children:Object(j.jsx)("a",{href:e.item.github,children:"GitHub Repository"})}),Object(j.jsx)("p",{children:Object(j.jsx)("a",{href:e.item.deployment,children:"Deployment"})})]})]})},m=n(85),p=function(){var e=Object(c.useState)(m),t=Object(l.a)(e,1)[0];return Object(j.jsxs)("section",{children:[Object(j.jsx)("h1",{children:"Portfolio"}),Object(j.jsx)("div",{className:"portfolio-wrapper",children:Object(j.jsx)("ul",{className:"portfolio-projects-wrapper",children:t.map((function(e){return Object(j.jsx)(u,{item:e},e.key)}))})})]})},x=n(13),O=n(16),g=n(36),f=n(86),v=n.p+"static/media/resume-thumbnail.ca510fc1.png";O.b.add(g.a),O.b.add(f.a);var y=function(){return Object(j.jsxs)("section",{children:[Object(j.jsx)("h1",{children:"Resume"}),Object(j.jsxs)("div",{className:"container-resume",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Front-End"}),Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:[Object(j.jsx)(x.a,{icon:["fab","html5"]})," HTML"]}),Object(j.jsxs)("li",{children:[Object(j.jsx)(x.a,{icon:["fab","css3-alt"]})," CSS"]}),Object(j.jsxs)("li",{children:[Object(j.jsx)(x.a,{icon:["fab","js"]})," JavaScript"]}),Object(j.jsxs)("li",{children:[Object(j.jsx)(x.a,{icon:["fab","react"]})," React"]})]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Back-End"}),Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:[Object(j.jsx)(x.a,{icon:["fab","node-js"]})," Node"]}),Object(j.jsxs)("li",{children:[Object(j.jsx)(x.a,{icon:["fas","database"]})," MySQL, Mongoose"]})]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Other"}),Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:[Object(j.jsx)(x.a,{icon:["fab","github"]})," Git, GitHub"]}),Object(j.jsxs)("li",{children:[Object(j.jsx)(x.a,{icon:["fab","wordpress"]})," WordPress"]}),Object(j.jsxs)("li",{children:[Object(j.jsx)(x.a,{icon:["fas","copy"]})," SEO"]})]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Resume"}),Object(j.jsx)("a",{href:"/react-portfolio/documents/terrence-chan-resume-2021.pdf",download:!0,target:"_blank",rel:"noreferrer",children:Object(j.jsx)("img",{src:v,alt:"Download Terrence's resume",id:"img-resume"})})]})]})]})},k=n(37),w=n(49);var N=function(){var e=Object(c.useState)({name:"",email:"",message:""}),t=Object(l.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(""),s=Object(l.a)(a,2),r=s[0],o=s[1],d=n.name,h=n.email,b=n.message,u=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);o(t?"":"Your email is invalid.")}else e.target.value.length?o(""):o("Name is required.");r||(i(Object(w.a)(Object(w.a)({},n),{},Object(k.a)({},e.target.name,e.target.value))),console.log("Handle Form",n))};return Object(j.jsxs)("section",{children:[Object(j.jsx)("h1",{children:"Contact"}),Object(j.jsxs)("form",{className:"card",autoComplete:"off",onSubmit:function(e){e.preventDefault(),r||console.log("Submit Form",n)},children:[Object(j.jsxs)("label",{htmlFor:"name",children:[Object(j.jsx)("input",{type:"text",name:"name",defaultValue:d,onBlur:u,required:!0}),Object(j.jsx)("span",{className:"label-text",children:"Name"})]}),Object(j.jsxs)("label",{htmlFor:"email",children:[Object(j.jsx)("input",{type:"email",name:"email",defaultValue:h,onBlur:u,required:!0}),Object(j.jsx)("span",{className:"label-text",children:"Email"})]}),Object(j.jsxs)("label",{htmlFor:"message",children:[Object(j.jsx)("input",{type:"text",name:"message",defaultValue:b,onBlur:u,required:!0}),Object(j.jsx)("span",{className:"label-text",children:"Message"})]}),r&&Object(j.jsx)("div",{children:Object(j.jsx)("p",{className:"error-text",children:r})}),Object(j.jsx)("button",{"data-testid":"button",type:"submit",children:"Submit"})]})]})},S=function(){var e=Object(c.useState)("About Me"),t=Object(l.a)(e,2),n=t[0],i=t[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("header",{children:Object(j.jsx)(d,{currentSection:n,setCurrentSection:i})}),Object(j.jsx)("main",{children:function(){switch(n){default:return Object(j.jsx)(b,{});case"Portfolio":return Object(j.jsx)(p,{});case"Contact":return Object(j.jsx)(N,{});case"Resume":return Object(j.jsx)(y,{})}}()})]})};O.b.add(g.a);var C=function(){return Object(j.jsx)("footer",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://github.com/TerrenceJChan","aria-label":"Link to GitHub profile",children:Object(j.jsx)(x.a,{icon:["fab","github-square"]})})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://www.linkedin.com/in/terrencejchan/","aria-label":"Link to LinkedIn profile",children:Object(j.jsx)(x.a,{icon:["fab","linkedin"]})})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://steamcommunity.com/profiles/76561198067404706/","aria-label":"Link to Steam profile",children:Object(j.jsx)(x.a,{icon:["fab","steam-square"]})})})]})})};var F=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(o.a,{params:{particles:{number:{value:100,density:{enable:!0,value_area:800}},color:{value:"#950740"},shape:{type:"circle",stroke:{width:0,color:"#ff0000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:2,opacity_min:0,sync:!1}},size:{value:2,random:!0,anim:{enable:!0,speed:.01,size_min:0,sync:!1}},line_linked:{enable:!0,distance:100,color:"#C3073F",opacity:1,width:1},move:{enable:!0,speed:.5,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:3e3,rotateY:3e3}},array:[]},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"repulse"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:1}},bubble:{distance:200,size:80,duration:.4},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}},mouse:{}},retina_detect:!1,fn:{interact:{},modes:{},vendors:{}},tmp:{}}}),Object(j.jsx)("span",{className:"hamburger",children:"\u2630 Menu"}),Object(j.jsx)(S,{}),Object(j.jsx)(C,{})]})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,338)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};s.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(F,{})}),document.getElementById("root")),T()},50:function(e,t,n){},85:function(e){e.exports=JSON.parse('[{"key":0,"title":"Budget Tracker","file":"budget-tracker.png","description":"Conveniently track your income and expenses with this PWA.","github":"https://github.com/TerrenceJChan/budget-tracker","deployment":"https://ancient-ravine-50926.herokuapp.com/"},{"key":1,"title":"Dangles Fantasy Sports","file":"dangles.png","description":"Fantasy NHL simulator.","github":"https://github.com/uoft-project2-group7/project","deployment":"https://intense-headland-44008.herokuapp.com/"},{"key":2,"title":"JavaScript Coding Quiz","file":"javascript-coding-quiz.png","description":"Demo featuring timers and localstorage manipulation.","github":"https://github.com/TerrenceJChan/coding-quiz","deployment":"https://terrencejchan.github.io/coding-quiz/"},{"key":3,"title":"Note Taker","file":"note-taker.png","description":"Save notes to the web with this Heroku app.","github":"https://github.com/TerrenceJChan/note-taker","deployment":"https://young-fjord-40430.herokuapp.com/"},{"key":4,"title":"Online Barkeep","file":"online-barkeep.png","description":"Discover new mixes and drinks.","github":"https://github.com/uoft-project1-group5/cocktail-map","deployment":"https://uoft-project1-group5.github.io/cocktail-map/index.html##"},{"key":5,"title":"Weather Dashboard","file":"weather-dashboard.png","description":"Find the weather of towns and cities around the world.","github":"https://github.com/TerrenceJChan/weather-dashboard","deployment":"https://terrencejchan.github.io/weather-dashboard/"}]')}},[[337,1,2]]]);
//# sourceMappingURL=main.331c63b4.chunk.js.map