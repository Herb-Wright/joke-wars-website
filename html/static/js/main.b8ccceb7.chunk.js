(this.webpackJsonpjoke_war_react=this.webpackJsonpjoke_war_react||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(6),a=c.n(s),o=(c(11),c(2)),i=(c(12),c(0)),l=function(e){return Object(i.jsx)("div",{onClick:function(){return e.onButton("Home")},className:e.color+" logo color2 click-color1",children:Object(i.jsx)("div",{className:"hover-spin logo",children:Object(i.jsx)("h3",{children:"J"})})})},j=function(e){var t=Object(n.useState)(["Fight","Create","Rankings"]),c=Object(o.a)(t,2),r=c[0];c[1];return Object(i.jsxs)("div",{className:"navbar color2 shadow"+(e.showSideBar?"":"-alt"),children:[e.showSideBar||Object(i.jsx)(l,{color:"hover-color2 color2",onButton:e.onButton}),r.map((function(t){return Object(i.jsx)("div",{onClick:function(){return e.onButton(t)},className:"navbar-item  hover-color3 click-color1",children:Object(i.jsx)("span",{className:"disappear2",children:t})})}))]})},u=function(){return Object(i.jsxs)("div",{className:"text-center",children:[Object(i.jsx)("h1",{children:"Joke Wars"}),Object(i.jsx)("h3",{children:"where the most popular joke wins."})]})},h=c(3),d=c.n(h),b=c(4),x=function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(!1),a=Object(o.a)(s,2),l=a[0],j=a[1],u=function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("hello"),e.next=4,fetch("http://localhost:5000/war/jokes");case 4:return t=e.sent,console.log("hello1"),e.t0=r,e.next=9,t.json();case 9:e.t1=e.sent,(0,e.t0)(e.t1),console.log("hello2"),j(!0),e.next=18;break;case 15:e.prev=15,e.t2=e.catch(0),console.log("error occurred: "+e.t2);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!1),e.prev=1,e.next=4,fetch("http://localhost:5000/war/winner",{headers:{"Content-Type":"application/json"},mode:"cors",method:"POST",body:JSON.stringify(c[t])});case 4:e.sent,console.log("we made it"),u(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("error occurred while posting winner");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){u()}),[]),Object(i.jsxs)("div",{className:"text-center body",children:[Object(i.jsx)("h2",{children:"Fight"}),Object(i.jsxs)("div",{className:"card-section color2-grad",children:[l&&Object(i.jsxs)("div",{className:"wrapper-1500 card-row",children:[Object(i.jsxs)("div",{className:"card-square color1 hover-outline2 round",children:[Object(i.jsxs)("div",{className:"top-three",children:[Object(i.jsx)("h2",{className:"text-center",children:"Joke 1:"}),c[0].joke,Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsxs)("p",{className:"text-center",children:["By ",c[0].name]})]}),Object(i.jsx)("div",{className:"bottom-one text-center",children:Object(i.jsx)("button",{className:"btn-med hover-outline2 round color3 hover-color2 click-color1",onClick:function(){return h(0)},children:"Pick this one"})})]}),Object(i.jsx)("div",{className:"color1 round wrapper-flex-center card-normal text-center wrapper-flex card-mini",children:Object(i.jsx)("h1",{children:"VS"})}),Object(i.jsxs)("div",{className:"card-square color1 hover-outline2 round",children:[Object(i.jsxs)("div",{className:"top-three",children:[Object(i.jsx)("h2",{className:"text-center",children:"Joke 2:"}),c[1].joke,Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsxs)("p",{class:"text-center",children:["By ",c[1].name]})]}),Object(i.jsx)("div",{className:"bottom-one text-center",children:Object(i.jsx)("button",{className:"btn-med color3 hover-outline2 hover-color2 click-color1 round",onClick:function(){return h(1)},children:"Pick this one"})})]})]}),l||Object(i.jsxs)("h3",{className:"text-center",children:["Loading ",Object(i.jsx)("div",{className:"spin text-center",children:"."})]})]})]})},O=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(""),a=Object(o.a)(s,2),l=a[0],j=a[1],u=function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=JSON.stringify({name:c,joke:l}),j(""),e.next=5,fetch("http://localhost:5000/post",{headers:{"Content-Type":"application/json"},mode:"cors",method:"POST",body:t});case 5:e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("error occurred");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(i.jsxs)("div",{className:"text-center",children:[Object(i.jsx)("h2",{children:"Create"}),Object(i.jsx)("div",{className:"section",children:Object(i.jsx)("div",{className:"section text-left",children:Object(i.jsxs)("form",{className:"wrapper-700",children:[Object(i.jsx)("p",{className:"form-text",children:"Joke:"}),Object(i.jsx)("textarea",{value:l,onChange:function(e){return j(e.target.value)},type:"text",placeholder:"type joke here...",rows:"4",className:"round hover-outline"}),Object(i.jsx)("p",{className:"form-text",children:"Name: "}),Object(i.jsx)("input",{value:c,onChange:function(e){return r(e.target.value)},type:"text",placeholder:"enter name...",className:"round stretch hover-outline"}),Object(i.jsx)("div",{className:"wrapper-mtop text-center",children:Object(i.jsx)("button",{onClick:function(){return u()},type:"button",className:"round btn-med text-center hover-color3 click-color1 color2",children:"submit"})})]})})})]})},m=function(e){return console.log(e.items),Object(i.jsx)("div",{className:"navbar shadow wrapper-flex fade color2",children:e.items.map((function(t){return Object(i.jsxs)("div",{onClick:function(){return e.onButton(t)},className:"navbar-item hover-color3 click-color1",children:["\xa0",Object(i.jsx)("span",{className:"disappear",children:t})]})}))})},p=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(!1),a=Object(o.a)(s,2),l=a[0],j=a[1];return Object(n.useEffect)((function(){(function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:5000/rankings/names");case 3:return t=e.sent,e.t0=r,e.next=7,t.json();case 7:e.t1=e.sent,(0,e.t0)(e.t1),e.next=14;break;case 11:e.prev=11,e.t2=e.catch(0),console.log("an error occured while fetching rankings");case 14:j(!0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(i.jsxs)("div",{className:"wrapper-700 text-left",children:[Object(i.jsx)("h4",{className:"text-center",children:"By Names"}),l&&Object(i.jsx)("ol",{children:c.map((function(e){return Object(i.jsx)("li",{children:Object(i.jsxs)("div",{className:"sections",children:[Object(i.jsx)("div",{className:"section",children:e.name}),Object(i.jsx)("div",{className:"section text-center",children:e.wins})]})})}))}),l||Object(i.jsxs)("h3",{className:"text-center",children:["Loading ",Object(i.jsx)("div",{className:"spin text-center",children:"."})]})]})},v=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(!1),a=Object(o.a)(s,2),l=a[0],j=a[1];return Object(n.useEffect)((function(){(function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:5000/rankings/jokes");case 3:return t=e.sent,e.t0=r,e.next=7,t.json();case 7:e.t1=e.sent,(0,e.t0)(e.t1),e.next=14;break;case 11:e.prev=11,e.t2=e.catch(0),console.log("an error occured while fetching rankings");case 14:j(!0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(i.jsxs)("div",{className:"wrapper-700 text-left",children:[Object(i.jsx)("h4",{className:"text-center",children:"By Jokes"}),l&&Object(i.jsx)("ol",{children:c.map((function(e){return Object(i.jsx)("li",{children:Object(i.jsxs)("div",{className:"sections",children:[Object(i.jsx)("div",{className:"section",children:e.joke}),Object(i.jsx)("div",{className:"section text-center",children:e.wins})]})})}))}),l||Object(i.jsxs)("h3",{className:"text-center",children:["Loading ",Object(i.jsx)("div",{className:"spin text-center",children:"."})]})]})},f=function(){var e=Object(n.useState)("Names"),t=Object(o.a)(e,2),c=t[0],r=t[1];return Object(i.jsxs)(n.Fragment,{children:[Object(i.jsx)(m,{items:["Names","Jokes"],onButton:function(e){r(e)}}),Object(i.jsxs)("div",{className:"text-center",children:[Object(i.jsx)("h2",{children:"Rankings"}),"Names"===c&&Object(i.jsx)(p,{}),"Jokes"===c&&Object(i.jsx)(v,{})]})]})};var N=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(!1),a=Object(o.a)(s,2),h=a[0],d=(a[1],Object(n.useState)("Home")),b=Object(o.a)(d,2),m=b[0],p=b[1],v=function(e){r("Rankings"===e),p(e)};return Object(i.jsxs)("div",{className:"has-top-bar color1 "+(c&&"has-side-bar"),children:[c&&Object(i.jsx)("div",{className:"wrapper color2",children:Object(i.jsx)(l,{color:"fade color3 hover-color3 shadow ",onButton:v})}),Object(i.jsx)(j,{onButton:v,isLoggedIn:h,showSideBar:c}),"Home"===m&&Object(i.jsx)(u,{}),"Fight"===m&&Object(i.jsx)(x,{}),"Create"===m&&Object(i.jsx)(O,{}),"Rankings"===m&&Object(i.jsx)(f,{})]})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))};a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(N,{})}),document.getElementById("root")),k()}},[[15,1,2]]]);
//# sourceMappingURL=main.b8ccceb7.chunk.js.map