(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),i=n(7),r=n.n(i),s=n(8),o=n(2),u=n(3),l=n(5),b=n(4),j=(n(13),n(0)),d=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.title,n=t.children;return Object(j.jsxs)("div",{className:"Section",children:[Object(j.jsx)("p",{className:"Section__title",children:e}),Object(j.jsx)("div",{children:n})]})}}]),n}(c.Component),h=(n(15),function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.options,n=t.onLeaveFeedback;return e.map((function(t){return Object(j.jsx)("button",{type:"button",className:"button",name:t,onClick:n,children:t},t)}))}}]),n}(c.Component)),O=(n(16),function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={visible:!0},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props.message;return Object(j.jsx)("p",{className:"Notification",children:t})}}]),n}(c.Component)),p=(n(17),function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.good,n=t.neutral,c=t.bad,a=t.total,i=t.positivePercentage;return Object(j.jsxs)("div",{className:"Statistics",children:[Object(j.jsxs)("p",{className:"Statistics__item",children:["Good: ",e]}),Object(j.jsxs)("p",{className:"Statistics__item",children:["Neutral: ",n]}),Object(j.jsxs)("p",{className:"Statistics__item",children:["Bad: ",c]}),Object(j.jsxs)("p",{className:"Statistics__item",children:["Total: ",a]}),Object(j.jsxs)("p",{className:"Statistics__item",children:["Positive feedback: ",i,"%"]})]})}}]),n}(c.Component)),v=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={good:0,neutral:0,bad:0},t.handleButtonClick=function(e){var n=e.target.name;t.setState((function(t){return Object(s.a)({},n,t[n]+1)}))},t.countTotalFeedback=function(){return Object.values(t.state).reduce((function(t,e){return t+=e}),0)},t.countPositiveFeedbackPercentage=function(){var e=0,n=t.state.good,c=t.countTotalFeedback();return 0!==c&&(e=Math.round(n/c*100)),e},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.good,n=t.neutral,c=t.bad,a=this.countTotalFeedback(),i=this.countPositiveFeedbackPercentage();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d,{title:"Please leave feedback",children:Object(j.jsx)(h,{options:Object.keys(this.state),onLeaveFeedback:this.handleButtonClick})}),Object(j.jsx)(d,{title:"Statistics",children:0===a?Object(j.jsx)(O,{message:"No feedback given"}):Object(j.jsx)(p,{good:e,neutral:n,bad:c,total:a,positivePercentage:i})})]})}}]),n}(c.Component);n(18),n(19);r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.f6dce892.chunk.js.map