(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,,,function(t,e,n){t.exports={section:"Section_section__dZbRI",title:"Section_title__3y4k9"}},,function(t,e,n){t.exports={button:"FeedbackOptions_button__1leT-"}},function(t,e,n){t.exports={item:"Statistics_item__2XAVA"}},function(t,e,n){t.exports={title:"Notification_title__1e5vV"}},,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),a=n(5),o=n.n(a),s=(n(13),n(2)),r=(n(14),n(6)),l=n.n(r),b=n(0),u=function(t){var e=t.options,n=t.onLeaveFeedback;return Object(b.jsx)("div",{children:e.map((function(t){return Object(b.jsx)("button",{type:"button",onClick:function(){return n(t)},className:l.a.button,children:t},t)}))})},d=n(4),j=n.n(d),h=function(t){var e=t.title,n=t.children;return Object(b.jsxs)("div",{className:j.a.section,children:[Object(b.jsx)("h2",{className:j.a.title,children:e}),n]})},f=n(7),O=n.n(f),x=function(t){var e=t.good,n=t.neutral,c=t.bad,i=t.total,a=t.positivePercentage,o=O.a.item;return Object(b.jsxs)("ul",{children:[Object(b.jsxs)("li",{className:o,children:["Good: ",e]}),Object(b.jsxs)("li",{className:o,children:["Neutral: ",n]}),Object(b.jsxs)("li",{className:o,children:["Bad: ",c]}),Object(b.jsxs)("li",{className:o,children:["Total: ",i]}),Object(b.jsxs)("li",{className:o,children:["Positive Feedback: ",a,"%"]})]})},v=n(8),p=n.n(v),g=function(t){var e=t.notification;return Object(b.jsx)("h2",{className:p.a.title,children:e})};var m=function(){var t=Object(c.useState)(0),e=Object(s.a)(t,2),n=e[0],i=e[1],a=Object(c.useState)(0),o=Object(s.a)(a,2),r=o[0],l=o[1],d=Object(c.useState)(0),j=Object(s.a)(d,2),f=j[0],O=j[1],v=n+r+f,p=Math.round(n/v*100);return Object(b.jsxs)("div",{children:[Object(b.jsx)(h,{title:"Please, leave feedback",children:Object(b.jsx)(u,{options:["good","neutral","bad"],onLeaveFeedback:function(t){({good:i,neutral:l,bad:O})[t]((function(t){return t+1}))}})}),Object(b.jsx)(h,{title:"Statistics",children:v?Object(b.jsx)(x,{good:n,neutral:r,bad:f,total:v,positivePercentage:p}):Object(b.jsx)(g,{notification:"No feedback given"})})]})},_=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),c(t),i(t),a(t),o(t)}))};o.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root")),_()}],[[16,1,2]]]);
//# sourceMappingURL=main.f17ccb08.chunk.js.map