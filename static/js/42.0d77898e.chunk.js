"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[42],{3042:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var r,a,o,i,c,s,d,l,u,p,x,m,h,v,b=t(6907),f=t(2791),g=t(5705),Z=t(5984),j=t(6727),w=t(9434),y=t(168),k=t(7686),C=t(8213),z=(0,k.Z)(g.l0)(r||(r=(0,y.Z)(["\n  margin-top: 30px;\n"]))),q=(0,k.Z)(C.z)(a||(a=(0,y.Z)(["\n  font-size: 20px;\n  padding: 10px 20px;\n  border-radius: 20px;\n  margin-bottom: 20px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),A=k.Z.label(o||(o=(0,y.Z)(["\n  color: var(--section);\n\n  &:hover,\n  &:focus {\n    color: var(--accent);\n  }\n"]))),N=(0,k.Z)(g.Bc)(i||(i=(0,y.Z)(["\n  color: var(--accent);\n  font-weight: 600;\n  background-color: var(--section);\n  border-radius: 20px;\n  padding: 5px;\n  margin-bottom: 10px;\n"]))),F=(0,k.Z)(g.gN)(c||(c=(0,y.Z)(["\n  display: block;\n  width: inherit;\n  margin-bottom: 10px;\n  margin-top: 7px;\n  margin-right: auto;\n  margin-left: auto;\n  font-size: 20px;\n  color: var(--text);\n  border: var(--text);\n  background-color: var(--section);\n  outline: transparent;\n  border-radius: 20px;\n  padding: 10px 20px;\n\n  &:hover,\n  &:focus {\n    outline: 2px solid var(--accent);\n    box-shadow: 1px 1px 1px var(--accent);\n  }\n"]))),_=t(8361),B=function(n){return n.contacts.items},I=function(n){return n.contacts.isLoading},J=function(n){return n.filter},L=t(184),P={name:"",number:""},S=j.Ry({name:j.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required("Name is required"),number:j.Z_().matches(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required("Phone number is required")}),M=function(){var n=(0,Z.x0)(),e=(0,Z.x0)(),t=(0,w.I0)();return(0,L.jsx)(g.J9,{initialValues:P,validationSchema:S,onSubmit:function(n,e){var r=e.resetForm;t(_.addContact(n)),r()},children:(0,L.jsxs)(z,{children:[(0,L.jsxs)(A,{htmlFor:n,children:["Name",(0,L.jsx)(F,{name:"name",id:n,type:"text",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,L.jsx)(N,{name:"name",component:"div"})]}),(0,L.jsxs)(A,{htmlFor:e,children:["Number",(0,L.jsx)(F,{name:"number",id:e,type:"tel",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,L.jsx)(N,{name:"number",component:"div"})]}),(0,L.jsx)(q,{type:"submit",children:"Add contact"})]})})},R=k.Z.div(s||(s=(0,y.Z)(["\n  color: var(--text);\n  font-weight: 600;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),$=k.Z.li(d||(d=(0,y.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: inherit;\n  background-color: var(--section);\n  border: 1px solid var(--section);\n  border-radius: 20px;\n  padding: 10px 20px;\n  min-width: fit-content;\n"]))),D=function(){var n=(0,w.v9)(B),e=(0,w.v9)(J),t=(0,w.I0)(),r=function(n,e){if(e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))}return n}(n,e);return r.map((function(n){var e=n.id,r=n.name,a=n.number;return(0,L.jsxs)($,{children:[(0,L.jsxs)(R,{children:[r," : ",a]}),(0,L.jsx)(C.z,{type:"button",onClick:function(){return t(_.deleteContact(e))},children:"Delete"})]},e)}))},E=k.Z.ul(l||(l=(0,y.Z)(["\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),T=function(){return(0,L.jsx)(E,{children:(0,L.jsx)(D,{})})},V=t(9439),Y=k.Z.div(u||(u=(0,y.Z)(["\n  margin: 10px 0 20px;\n"]))),G=k.Z.label(p||(p=(0,y.Z)(["\n  color: var(--section);\n\n  &:hover,\n  &:focus {\n    color: var(--accent);\n  }\n"]))),H=k.Z.input(x||(x=(0,y.Z)(["\n  display: block;\n  width: inherit;\n  margin: 0 auto;\n\n  margin-top: 10px;\n  color: var(--text);\n  font-weight: 600;\n  outline: transparent;\n  border: var(--text);\n  border-radius: 20px;\n  padding: 10px 20px;\n  background-color: var(--section);\n\n  &:hover,\n  &:focus {\n    outline: 2px solid var(--accent);\n    box-shadow: 1px 1px 1px var(--accent);\n  }\n"]))),K=t(4808),O=function(){var n=(0,w.v9)(J),e=(0,f.useState)(null!==n&&void 0!==n?n:""),t=(0,V.Z)(e,2),r=t[0],a=t[1],o=(0,w.I0)();return(0,L.jsx)(Y,{children:(0,L.jsxs)(G,{children:["Find contacts by name",(0,L.jsx)(H,{type:"text",value:r,onChange:function(n){var e=n.currentTarget.value;a(e),o((0,K.h)(e))}})]})})},Q=(k.Z.h2(m||(m=(0,y.Z)(["\n  text-align: center;\n  font-size: 30px;\n  padding: 20px;\n  border: 1px solid var(--section);\n  border-radius: 20px;\n  background-color: var(--section);\n  color: var(--text);\n  min-width: fit-content;\n"]))),k.Z.h2(h||(h=(0,y.Z)(["\n  text-align: center;\n  padding: 20px;\n  font-size: 30px;\n  border: 1px solid var(--section);\n  border-radius: 20px;\n  background-color: var(--section);\n  color: var(--text);\n  min-width: fit-content;\n"]))),k.Z.p(v||(v=(0,y.Z)(["\n  margin-top: 20px;\n  display: inline-block;\n  text-align: center;\n  font-weight: 700;\n  padding: 20px;\n  border: 1px solid var(--section);\n  border-radius: 20px;\n  background-color: var(--section);\n  color: var(--text);\n"]))));function U(){var n=(0,w.I0)(),e=(0,w.v9)(I),t=(0,w.v9)(B);return(0,f.useEffect)((function(){n((0,_.fetchContacts)())}),[n]),(0,L.jsxs)(b.B6,{children:[(0,L.jsx)(b.ql,{children:(0,L.jsx)("title",{children:"Your contacts"})}),(0,L.jsx)(M,{}),e&&(0,L.jsx)("p",{children:"Request in progress..."}),(0,L.jsx)(O,{}),(0,L.jsx)(T,{}),(0,L.jsxs)(Q,{children:["Number of contacts: ",t.length]})]})}}}]);
//# sourceMappingURL=42.0d77898e.chunk.js.map