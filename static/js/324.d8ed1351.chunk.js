"use strict";(self.webpackChunkschooltechsystem=self.webpackChunkschooltechsystem||[]).push([[324],{4209:function(e,n,t){t.d(n,{Ex:function(){return o},rS:function(){return l}});var s=t(1413),r=t(2062),c=t.n(r),a=t(5448),i=t(1620),o=function(e,n,t,r){return fetch("".concat(i.l,"/activation/add"),{method:"POST",headers:{"content-type":"application/json",authorization:"bearer ".concat(t)},body:JSON.stringify((0,s.Z)((0,s.Z)({},e),{},{softwareId:n}))}).then((function(e){return e.json()})).then((function(e){201===e.status?(r((0,a.Gk)(e.active)),c()({title:"Success, Activation will be reviewed within 6 hrs",text:"You can come here and check progress",icon:"success"})):403===e.status?c()({title:"Spam noticed",text:"Retry after one month",icon:"error"}):c()({title:"Failed to connect",icon:"warning",timer:3e3})})).catch((function(){c()({title:"Failed to connect",icon:"warning",timer:3e3})}))},l=function(e,n,t,s){fetch("".concat(i.l,"/activation/get"),{method:"POST",headers:{"content-type":"application/json",authorization:"bearer ".concat(e)},body:JSON.stringify({online:t,softwareId:n})}).then((function(e){return e.json()})).then((function(e){200===e.status&&s((0,a.OH)(e.actives))})).catch((function(){}))}},7227:function(e,n,t){t.d(n,{Z:function(){return j}});var s=t(4165),r=t(5861),c=t(9439),a=t(2791),i=(t(1620),t(2062)),o=t.n(i),l=t(7689),d=t(9434),h=(t(4801),t(4209)),u=t(184),x=function(e){var n=e.softwareId,t=(0,d.I0)(),i=(0,a.useState)(""),l=(0,c.Z)(i,2),x=l[0],j=l[1],m=(0,a.useState)(""),f=(0,c.Z)(m,2),p=f[0],v=f[1],b=(0,a.useState)(!1),y=(0,c.Z)(b,2),g=y[0],N=y[1],w=(0,d.v9)((function(e){return e.active.actives}));(0,a.useEffect)((function(){(0,h.rS)("",n,0,t)}),[]);var C=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),e.next=3,(0,h.Ex)({transaction:x},n,"",t);case 3:N(!1),j(""),v("");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,u.jsxs)("div",{className:"card my-2",children:[w.length>0?(0,u.jsxs)("table",{className:"table table-sm",children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{children:"Transaction Code"}),(0,u.jsx)("th",{children:"Status"}),(0,u.jsx)("th",{children:"Activation Code"})]})}),(0,u.jsx)("tbody",{children:w.map((function(e){return(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:e.transaction}),(0,u.jsx)("td",{children:0!=e.deleted?(0,u.jsx)("span",{className:"text-danger",children:"Deleted"}):0==e.status?(0,u.jsx)("span",{className:"text-info",children:"In Review"}):2==e.status?(0,u.jsx)("span",{className:"text-danger",children:"Rejected"}):1==e.status?(0,u.jsx)("span",{className:"text-danger",children:"Verified"}):""}),(0,u.jsx)("td",{children:0==e.status?"Check Later":e.activation})]},e.linker)}))})]}):null,(0,u.jsxs)("div",{className:"card-header",children:[(0,u.jsx)("p",{className:"h6 text-decoration-underline",children:(0,u.jsx)("strong",{children:"You can Pay and enter the transaction code below."})}),(0,u.jsxs)("ul",{children:[(0,u.jsxs)("li",{children:[(0,u.jsx)("strong",{children:" Paypal To : "}),(0,u.jsx)("em",{className:"btn-link",children:"contact.techsystems@gmail.com"})," "]})," ",(0,u.jsxs)("li",{children:[(0,u.jsxs)("strong",{children:[" Bank Transfer ","{Local & International}"," :"]}),(0,u.jsx)("br",{}),(0,u.jsxs)("span",{children:[(0,u.jsx)("strong",{children:"Country :"})," ",(0,u.jsx)("em",{children:"Kenya"})]})," ",(0,u.jsx)("br",{}),(0,u.jsxs)("span",{children:[(0,u.jsx)("strong",{children:"City/Region :"})," ",(0,u.jsx)("em",{children:"Nairobi"})]})," ",(0,u.jsx)("br",{}),(0,u.jsxs)("span",{children:[(0,u.jsx)("strong",{children:"Bank :"})," ",(0,u.jsx)("em",{children:"Equity Bank"})]})," ",(0,u.jsx)("br",{}),(0,u.jsxs)("span",{children:[(0,u.jsx)("strong",{children:"Account Name :"})," ",(0,u.jsx)("em",{children:"Dazila Systems"})]})," ",(0,u.jsx)("br",{}),(0,u.jsxs)("span",{children:[(0,u.jsx)("strong",{children:"Account No :"})," ",(0,u.jsx)("em",{children:"0340185179998"})]})," ",(0,u.jsx)("br",{}),(0,u.jsxs)("span",{children:[(0,u.jsx)("strong",{children:"Purpose :"})," ",(0,u.jsx)("em",{children:"School Techsystem"})]})," "]})]}),(0,u.jsx)("p",{className:"h6 text-decoration-underline",children:(0,u.jsx)("strong",{children:"In Case You need help :"})}),(0,u.jsxs)("ul",{children:[(0,u.jsxs)("li",{children:[(0,u.jsx)("strong",{children:"Email : "}),(0,u.jsx)("em",{children:"contact.techsystems@gmail.com"})]}),(0,u.jsxs)("li",{children:[(0,u.jsx)("strong",{children:"Whatsapp : "}),(0,u.jsx)("em",{children:"+254 703535116"})]}),(0,u.jsxs)("li",{children:[(0,u.jsx)("strong",{children:"Facebook : "}),(0,u.jsx)("em",{children:"www.facebook.com/techsystems.world"})]})]})]}),(0,u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!=x&&x==p&&o()({title:"Warning!, To avoid spammers we only allow activation code request per institution once in a month.",text:"Please confirm the payment transaction code and then continue ".concat(x),icon:"warning",buttons:!0}).then((function(e){e&&C()})).catch((function(e){return console.log(e)}))},children:[(0,u.jsxs)("div",{className:"card-body",children:[(0,u.jsxs)("div",{className:"form-group",children:[(0,u.jsx)("label",{children:"Transaction Code:"}),(0,u.jsx)("input",{className:"rounded form-control",placeholder:"Enter Transaction Code",value:x,onChange:function(e){return j(e.target.value)},required:!0})]}),(0,u.jsx)("hr",{}),(0,u.jsxs)("div",{className:"form-group",children:[(0,u.jsxs)("label",{children:["Confirm Transaction Code:"," ",(0,u.jsx)("small",{className:"text-danger",children:""!=x&&x!=p?"Not Matching":""})]}),(0,u.jsx)("input",{className:"rounded form-control",placeholder:"Confirm Transaction Code",value:p,onChange:function(e){return v(e.target.value)},required:!0})]})]}),(0,u.jsx)("div",{className:"card-footer",children:(0,u.jsx)("div",{className:"d-flex justify-content-around",children:g?(0,u.jsx)("span",{className:"spinner-border text-primary"}):(0,u.jsx)("button",{type:"submit",className:"btn btn-outline-primary rounded",children:"Submit"})})})]})]})},j=function(e){var n=e.softwareId,t=(e.amount,e.from);(0,a.useEffect)((function(){}),[]);var s=(0,a.useState)(!1),r=(0,c.Z)(s,2),i=r[0],o=(r[1],(0,a.useState)("")),h=(0,c.Z)(o,2),j=h[0];h[1],(0,d.v9)((function(e){return e.inst.activeInst})),(0,l.s0)(),(0,d.I0)();return(0,u.jsxs)("div",{children:[i?(0,u.jsxs)("p",{className:"text-center",onClick:function(){},children:[(0,u.jsx)("span",{className:"spinner-border text-primary"})," "]}):""!==j&&"software"===t?(0,u.jsxs)("p",{className:"text-center",children:["Activation Code is ",(0,u.jsx)("strong",{children:j})]}):null,(0,u.jsx)("div",{id:"paypal-buttons-container"}),(0,u.jsx)(x,{softwareId:n})]})}},3324:function(e,n,t){t.r(n);t(2791);var s=t(7689),r=t(9434),c=t(248),a=t(7227),i=t(184);n.default=function(){var e=(0,s.s0)(),n=(0,r.v9)((function(e){return e.inst.activeInst})),t=(0,r.v9)((function(e){return e.sub.subs}));return(0,i.jsxs)("div",{children:[" ",(0,i.jsx)("div",{className:" row d-flex justify-content-center",style:{marginTop:"40px"},children:(0,i.jsx)("div",{className:"col-md-6 d-flex justify-content-around",children:(0,i.jsxs)("h6",{className:"text-center",children:["Get ",n.name," ",t.length>0?"Maintenance And Update Code At 29$ only":"Activation Code at 99$ only"]})})}),(0,i.jsx)("div",{className:"row d-flex justify-content-center",children:(0,i.jsx)("div",{className:"col-md-6 justify-content-center",children:t.length>0?(0,i.jsx)(a.Z,{softwareId:n.clientId,amount:"29.0",from:"web"}):(0,i.jsx)(a.Z,{softwareId:n.clientId,amount:"99.0",from:"web"})})}),(0,i.jsx)("div",{className:" row d-flex justify-content-center",children:(0,i.jsx)("div",{className:"col-md-8 d-flex justify-content-around",children:(0,i.jsxs)("button",{className:"btn btn-sm btn-outline-secondary",onClick:function(){return e(-1)},children:[(0,i.jsx)(c.Z,{})," Go Back"]})})})]})}}}]);
//# sourceMappingURL=324.d8ed1351.chunk.js.map