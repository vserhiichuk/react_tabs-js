(this["webpackJsonpreact_tabs-js"]=this["webpackJsonpreact_tabs-js"]||[]).push([[0],{12:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(3),a=c.n(n),i=c(5),s=c(1),d=(c(10),c(11),c(12),c(4)),b=c.n(d),o=function(t,e){return t.find((function(t){return t.id===e}))},r=c(0),l=function(t){var e=t.tabs,c=t.selectedTabId,n=t.onTabSelected,a=o(e,c)||e[0];return Object(r.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(r.jsx)("div",{className:"tabs is-boxed",children:Object(r.jsx)("ul",{children:e.map((function(t){var e=t.id,c=t.title;return Object(r.jsx)("li",{className:b()({"is-active":a.id===e}),"data-cy":"Tab",children:Object(r.jsx)("a",{href:"#".concat(t.id),"data-cy":"TabLink",onClick:function(){e!==a.id&&n(t)},children:c})},t.id)}))})}),Object(r.jsx)("div",{className:"block","data-cy":"TabContent",children:a.content})]})},j=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],u=function(){var t=Object(s.useState)(j[0].id),e=Object(i.a)(t,2),c=e[0],n=e[1],a=o(j,c);return Object(r.jsxs)("div",{className:"section",children:[Object(r.jsx)("h1",{className:"title",children:"Selected tab is ".concat(a.title)}),Object(r.jsx)(l,{tabs:j,selectedTabId:c,onTabSelected:function(t){var e=t.id;n(e)}})]})};a.a.render(Object(r.jsx)(u,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.374c6f9b.chunk.js.map