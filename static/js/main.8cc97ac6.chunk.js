(this.webpackJsonptodoist=this.webpackJsonptodoist||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var n=c(4),a=c.n(n),s=c(21),i=c.n(s),j=(c(28),c.p,c(29),c(0));var r=function(){return Object(j.jsx)("header",{className:"header",children:Object(j.jsx)("nav",{children:Object(j.jsx)("div",{className:"logo",children:Object(j.jsx)("img",{src:"",alt:"Todoist logo"})})})})},d=c(6),l=c(15),o=c(16);var b=function(e){var t=e.selectedTab,c=e.setSelectedTab;return console.log({selectedTab:t}),Object(j.jsxs)("div",{className:"sidebar",children:[Object(j.jsxs)("div",{className:"INBOX"===t?"active":"",onClick:function(){return c("INBOX")},children:[Object(j.jsx)(l.a,{icon:o.c}),"Inbox"]}),Object(j.jsxs)("div",{className:"TODAY"===t?"active":"",onClick:function(){return c("TODAY")},children:[Object(j.jsx)(l.a,{icon:o.a}),"Today"]}),Object(j.jsxs)("div",{className:"NEXT7"===t?"active":"",onClick:function(){return c("NEXT7")},children:[Object(j.jsx)(l.a,{icon:o.b}),"Next 7 Days"]})]})},O=c(23),u=c(22),x=c.n(u),h=(c(44),c(8)),v=c(47),f=c(48),N=c(49),m=c(50),T="dd/MM/yyyy";function p(e,t,c){return Object(h.a)(e,t,{locale:c})}var D=function(e){var t=e.onAddTask,c=e.onCancel,a=Object(n.useState)(""),s=Object(d.a)(a,2),i=s[0],r=s[1],l=Object(n.useState)(null),o=Object(d.a)(l,2),b=o[0],O=o[1];return Object(j.jsxs)("div",{className:"add-task-dialog",children:[Object(j.jsx)("input",{value:i,onChange:function(e){return r(e.target.value)}}),Object(j.jsxs)("div",{className:"add-task-actions",children:[Object(j.jsxs)("div",{className:"btns-container",children:[Object(j.jsx)("button",{disabled:!i,className:"add-btn",onClick:function(){t(i,b),r("")},children:"ADD"}),Object(j.jsx)("button",{className:"cancel-btn",onClick:function(){c(),r("")},children:"CANCEL"})]}),Object(j.jsx)("div",{className:"icons-container",children:Object(j.jsx)(x.a,{onDayChange:function(e){return O(e)},placeholder:"".concat(Object(h.a)(new Date,T)),formatDate:p,format:T,dayPickerProps:{modifiers:{disabled:[{before:new Date}]}}})})]})]})},g={INBOX:"Inbox",TODAY:"Today",NEXT7:"Next 7 Days"},k=function(e){var t=e.selectedTab,c=e.tasks;return console.log(t),console.log(c),"INBOX"===t?c.length>0?c.map((function(e){return Object(j.jsxs)("div",{className:"inbx",children:[Object(j.jsx)("span",{id:"spn1",children:e.text}),"   ",Object(j.jsx)("span",{children:Object(h.a)(new Date(e.date),T)})]})})):Object(j.jsx)("p",{children:"NO TASKS YET"}):"NEXT7"===t?c.filter((function(e){return Object(v.a)(e.date,new Date)&&Object(f.a)(e.date,Object(N.a)(new Date,7))})).map((function(e){return Object(j.jsxs)("p",{children:[e.text,"  ",Object(h.a)(new Date(e.date),T)," "," "]})})):"TODAY"===t?c.filter((function(e){return Object(m.a)(e.date)})).map((function(e){return Object(j.jsxs)("div",{className:"tdy",children:[Object(j.jsx)("span",{id:"spn1",children:e.text}),"   ",Object(j.jsx)("span",{children:Object(h.a)(new Date(e.date),T)})]})})):void 0};var C=function(e){var t=e.selectedTab,c=Object(n.useState)(!1),a=Object(d.a)(c,2),s=a[0],i=a[1],r=Object(n.useState)([]),l=Object(d.a)(r,2),o=l[0],b=l[1];return Object(j.jsxs)("div",{className:"task",children:[Object(j.jsx)("h2",{children:g[t]}),Object(j.jsxs)("div",{className:"add-task-btn",onClick:function(){return i(!s)},children:[Object(j.jsx)("span",{className:"plus",children:"+"}),Object(j.jsx)("span",{className:"add-task-text",children:" ADD TASK"})]}),s&&Object(j.jsx)(D,{onAddTask:function(e,t){console.log("text :"+e),console.log("date: "+t);var c={text:e,date:t||new Date};b([].concat(Object(O.a)(o),[c]))},onCancel:function(){return i(!1)}}),o.length>0?Object(j.jsx)(k,{tasks:o,selectedTab:t}):Object(j.jsx)("p",{children:"NO TASKS"})]})};var S=function(){var e=Object(n.useState)("INBOX"),t=Object(d.a)(e,2),c=t[0],a=t[1];return Object(j.jsxs)("section",{className:"content",children:[Object(j.jsx)(b,{selectedTab:c,setSelectedTab:a}),Object(j.jsx)(C,{selectedTab:c})]})};var y=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(r,{}),Object(j.jsx)(S,{}),"this is div"]})},A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,51)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),A()}},[[45,1,2]]]);
//# sourceMappingURL=main.8cc97ac6.chunk.js.map