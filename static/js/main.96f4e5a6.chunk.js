(this.webpackJsonpform=this.webpackJsonpform||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var i=n(2),s=n.n(i),c=n(3),r=n.n(c),a=(n(20),n(15)),o=n(5),u=(n(21),n(14)),l=n.n(u),d=n(0),j=function(){var e=Object(i.useState)(""),t=Object(o.a)(e,2),n=t[0],s=t[1],c=Object(i.useState)({name:"",preparation_time:"00:00:00",type:"",no_of_slices:"",diameter:"",spiciness_scale:"",slices_of_bread:""}),r=Object(o.a)(c,2),u=r[0],j=r[1],p=["pizza","soup","sandwich"];function b(e){var t=Object(a.a)({},u);t[e.target.id]=e.target.value,j(t),console.log(t)}return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),l.a.post("https://frosty-wood-6558.getsandbox.com:443/dishes",{name:u.name,preparation_time:u.preparation_time,type:u.type,no_of_slices:parseInt(u.no_of_slices),diameter:parseInt(u.diameter),spiciness_scale:parseInt(u.spiciness_scale),slices_of_bread:parseInt(u.slices_of_bread)}).then((function(e){console.log(e.value)})).catch((function(e){console.log(e)}))}(e)},children:[Object(d.jsx)("div",{children:Object(d.jsx)("input",{type:"text",name:"name",required:!0,onChange:function(e){return b(e)},id:"name",value:u.name})}),Object(d.jsx)("div",{children:Object(d.jsx)("input",{type:"text",required:!0,onChange:function(e){return b(e)},id:"preparation_time",value:u.preparation_time})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Select dish type:"}),Object(d.jsxs)("select",{name:"dishes",required:!0,onChange:function(e){s(e.target.value),b(e)},id:"type",value:u.type,children:[Object(d.jsx)("option",{value:"",children:"None"}),Object(d.jsx)("option",{value:"pizza",children:"pizza"}),Object(d.jsx)("option",{value:"soup",children:"soup"}),Object(d.jsx)("option",{value:"sandwich",children:"sandwich"})]}),n===p[0]&&Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"quantity",children:"no_of_slices:"}),Object(d.jsx)("input",{type:"number",name:"quantity",required:!0,onChange:function(e){return b(e)},id:"no_of_slices",value:u.no_of_slices}),Object(d.jsx)("label",{htmlFor:"quantity",children:"diameter:"}),Object(d.jsx)("input",{type:"number",step:"0.01",required:!0,onChange:function(e){return b(e)},id:"diameter",value:u.diameter})]}),n===p[1]&&Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"quantity",children:"spiciness_scale:"}),Object(d.jsx)("input",{type:"number",name:"quantity",min:"1",max:"10",required:!0,onChange:function(e){return b(e)},id:"spiciness_scale",value:u.spiciness_scale})]}),n===p[2]&&Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"quantity",children:"slices_of_bread:"}),Object(d.jsx)("input",{type:"number",name:"quantity",required:!0,onChange:function(e){return b(e)},id:"slices_of_bread",value:u.slices_of_bread})]}),Object(d.jsx)("button",{type:"submit",children:"Submit"})]})]})})};r.a.render(Object(d.jsx)("div",{children:Object(d.jsx)(j,{})}),document.getElementById("root"));var p=j,b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),i(e),s(e),c(e),r(e)}))};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),b()}},[[41,1,2]]]);
//# sourceMappingURL=main.96f4e5a6.chunk.js.map