(this["webpackJsonptest-task-reactjs-lab"]=this["webpackJsonptest-task-reactjs-lab"]||[]).push([[0],{22:function(e,t,n){e.exports={container:"Container_container__1yQnt"}},27:function(e,t,n){},49:function(e,t,n){},5:function(e,t,n){e.exports={addInfoContainer:"AdditionalContactInfo_addInfoContainer__1awIy",addInfoList:"AdditionalContactInfo_addInfoList__ZxmJj",addInfoItem:"AdditionalContactInfo_addInfoItem__ZXFfI"}},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(19),i=n.n(s),r=(n(27),n(10)),o=n.n(r),l=n(20),d=n(4),j=n(21),u=n.n(j),b=n(22),f=n.n(b),m=n(0);function O(e){var t=e.children;return Object(m.jsx)("div",{className:f.a.container,children:t})}n(49);function h(e){var t=e.options,n=e.prompt,c=e.value,s=e.onChange,i=Object(a.useState)(!1),r=Object(d.a)(i,2),o=r[0],l=r[1],j=Object(a.useState)(""),u=Object(d.a)(j,2),b=u[0],f=u[1],O=Object(a.useRef)(null),h=t.map((function(e){return e.adress}));function p(e){l(e&&e.target===O.current)}return Object(a.useEffect)((function(){return document.addEventListener("click",p),function(){return document.removeEventListener("click",p)}}),[]),Object(m.jsxs)("div",{className:"dropdown",children:[Object(m.jsxs)("div",{className:"control",onClick:function(){return l((function(e){return!e}))},children:[Object(m.jsx)("div",{className:"selected-value",ref:O,children:c?c.state:n}),Object(m.jsx)("div",{className:"arrow ".concat(o?"open":null)})]}),Object(m.jsx)("div",{className:"options ".concat(o?"open":null),children:h.map((function(e,t){return Object(m.jsx)("div",{className:"option ".concat(b===h?"selected":null),onClick:function(e){s((function(){return f(e.target.value)})),l(!1)},children:e.state},e.zip)}))})]})}var p=function(e){var t=e.id,n=e.firstName,a=e.lastName,c=e.email,s=e.phone,i=e.adress;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("td",{children:t}),Object(m.jsx)("td",{children:n}),Object(m.jsx)("td",{children:a}),Object(m.jsx)("td",{children:c}),Object(m.jsx)("td",{children:s}),Object(m.jsx)("td",{children:i})]})},x=(n(50),n(3)),I=function(e){var t=e.items,n=e.sortData,a=e.sortingDirection,c=e.getAdditionalInfo;return Object(m.jsxs)("table",{className:"DataTable",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{className:"Header, FullWidth",children:[Object(m.jsxs)("th",{onClick:function(){n("id")},children:["Id",a?Object(m.jsx)(x.b,{}):Object(m.jsx)(x.a,{})]}),Object(m.jsxs)("th",{onClick:function(){n("firstName")},children:["First Name",a?Object(m.jsx)(x.b,{}):Object(m.jsx)(x.a,{})]}),Object(m.jsxs)("th",{onClick:function(){n("lastName")},children:["Last Name",a?Object(m.jsx)(x.b,{}):Object(m.jsx)(x.a,{})]}),Object(m.jsxs)("th",{onClick:function(){n("email")},children:["Email",a?Object(m.jsx)(x.b,{}):Object(m.jsx)(x.a,{})]}),Object(m.jsxs)("th",{onClick:function(){n("phone")},children:["Phone",a?Object(m.jsx)(x.b,{}):Object(m.jsx)(x.a,{})]}),Object(m.jsxs)("th",{onClick:function(){n("adress")},children:["State",a?Object(m.jsx)(x.b,{}):Object(m.jsx)(x.a,{})]})]})}),Object(m.jsx)("tbody",{children:t.map((function(e,t){return Object(m.jsx)("tr",{style:{backgroundColor:t%2?"#d2e2f7":"#f7e7d2"},onClick:function(){return c(e)},children:Object(m.jsx)(p,{id:e.id,firstName:e.firstName,lastName:e.lastName,email:e.email,phone:e.phone,adress:e.adress.state})},e.id+e.email)}))})]})},v=n(5),N=n.n(v);function g(e){var t=e.detailedItemData,n=t&&t.adress?t.adress.city:null,a=t&&t.adress?t.adress.streetAddress:null,c=t&&t.adress?t.adress.state:null,s=t&&t.adress?t.adress.zip:null;return Object(m.jsx)("div",{className:N.a.addInfoContainer,children:Object(m.jsxs)("ul",{className:N.a.addInfoList,children:[Object(m.jsx)("li",{className:N.a.addInfoItem,children:"Profile Info:"}),Object(m.jsxs)("li",{className:N.a.addInfoItem,children:["Selected profile: ",t.firstName," ",t.lastName]}),Object(m.jsxs)("li",{className:N.a.addInfoItem,children:["Decription: ",t.description,"..."]}),Object(m.jsxs)("li",{className:N.a.addInfoItem,children:["Address: ",a]}),Object(m.jsxs)("li",{className:N.a.addInfoItem,children:["City: ",n]}),Object(m.jsxs)("li",{className:N.a.addInfoItem,children:["State: ",c]}),Object(m.jsxs)("li",{className:N.a.addInfoItem,children:["Index: ",s]})]})})}var _=n(7),C=n.n(_);function k(e){for(var t=e.dataItemsPerPage,n=e.totalDataItems,a=e.paginate,c=[],s=1;s<=Math.ceil(n/t);s++)c.push(s);return Object(m.jsx)("div",{children:n>0&&Object(m.jsx)("ul",{className:C.a.pagination,children:c.map((function(e){return Object(m.jsx)("li",{className:C.a.paginationItem,children:Object(m.jsx)("a",{href:"!#",className:C.a.pageLink,onClick:function(){return a(e)},children:e})},e)}))})})}var A=n(6),y=n.n(A);function S(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),i=Object(d.a)(s,2),r=i[0],j=i[1],b=Object(a.useState)(1),f=Object(d.a)(b,2),p=f[0],x=f[1],v=Object(a.useState)(20),N=Object(d.a)(v,1)[0],_=Object(a.useState)(!0),C=Object(d.a)(_,2),A=C[0],S=C[1],L=Object(a.useState)(""),P=Object(d.a)(L,2),w=P[0],D=P[1],E=Object(a.useState)(null),B=Object(d.a)(E,2),F=B[0],J=B[1];Object(a.useEffect)((function(){var e=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json");case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var z,H=p*N,M=H-N,R=n.slice(M,H);return Object(m.jsxs)(O,{className:y.a.mainContiner,children:[Object(m.jsxs)("div",{className:y.a.filtersElemContainer,children:[Object(m.jsxs)("div",{className:y.a.searchContainer,children:[Object(m.jsx)("label",{className:y.a.searchLabel,children:"Search by name:"}),Object(m.jsx)("input",{type:"text",placeholder:"Enter name",value:r,onChange:function(e){return j(e.target.value)},className:y.a.searchInput})]}),Object(m.jsx)("div",{style:{width:200},children:Object(m.jsx)(h,{options:n,prompt:"Filter by state",value:F,onChange:function(e){return J(e)}})})]}),Object(m.jsx)(I,{items:(z=R,z.filter((function(e){return e.firstName.indexOf(r)>-1}))),sortData:function(e){var t,a=n.concat();t=A?a.sort((function(t,n){return t[e]>n[e]?1:-1})):a.reverse((function(t,n){return t[e]>n[e]?1:-1})),c(t),S(!A),console.log(!A)},sortingDirection:A,getAdditionalInfo:function(e){D(e)}}),Object(m.jsxs)("div",{className:y.a.paginationContainer,children:[Object(m.jsx)("button",{className:y.a.paginationBtn,onClick:function(){return x((function(e){return e-1}))},disabled:1===p,children:"Previous"}),Object(m.jsx)(k,{dataItemsPerPage:N,totalDataItems:n.length,paginate:function(e){return x(e)}}),Object(m.jsx)("button",{className:y.a.paginationBtn,onClick:function(){return x((function(e){return e+1}))},disabled:p>5,children:"Next"})]}),Object(m.jsx)(g,{detailedItemData:w})]})}i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(S,{})}),document.getElementById("root"))},6:function(e,t,n){e.exports={App:"App_App__3HyUd",filtersElemContainer:"App_filtersElemContainer__2Rd0B",searchContainer:"App_searchContainer__1U7Nv",searchInput:"App_searchInput__3ggpC",paginationContainer:"App_paginationContainer__30yGk",paginationBtn:"App_paginationBtn__3342l"}},7:function(e,t,n){e.exports={pagination:"Pagination_pagination__18d1L",paginationItem:"Pagination_paginationItem__Mr_gW",pageLink:"Pagination_pageLink__HjJwv",disabled:"Pagination_disabled__ofvxk"}}},[[51,1,2]]]);
//# sourceMappingURL=main.9ff6e117.chunk.js.map