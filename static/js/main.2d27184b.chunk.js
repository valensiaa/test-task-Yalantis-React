(this["webpackJsonpyalantis-test-task"]=this["webpackJsonpyalantis-test-task"]||[]).push([[0],{12:function(e,t,r){e.exports={birthdayBlock:"EmployeesBirthday_birthdayBlock__twVXH",birthdaysBlock:"EmployeesBirthday_birthdaysBlock__1GK5C",listUsers:"EmployeesBirthday_listUsers__2evgN",monthsBlock:"EmployeesBirthday_monthsBlock__1X3UJ"}},38:function(e,t,r){},39:function(e,t,r){},68:function(e,t,r){"use strict";r.r(t);var s=r(0),a=r.n(s),c=r(15),n=r.n(c),i=(r(38),r(7)),o=(r(39),r(2)),u=r(10),l=r(20),d=r.n(l),h=r(31),y=r(8),b=r.n(y),j=r(32),p=r.n(j),f=r(1),m=function(e){var t=function(){var t=Object(h.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://yalantis-react-school-api.yalantis.com/api/task0/users").then((function(t){e.setUsers(t.data),e.setNotActiveUser(),e.sortUsers()})).catch((function(e){return console.error("Error: ".concat(e))}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(s.useEffect)((function(){e.users.length||t()}));var r=function(t){var r=t.target.value,s=t.target.name;e.setActiveUser(r,s),e.sortUsers()};return Object(f.jsxs)("div",{className:b.a.employeesBlock,children:[Object(f.jsx)("h1",{children:"Employees"}),Object(f.jsx)("div",{className:b.a.employeesBlockData,children:e.sortedUsersByAlphabet.map((function(e){return Object.entries(e).map((function(e){return Object(f.jsxs)("div",{className:b.a.usersBlockByLetter,children:[Object(f.jsx)("h2",{children:e[0]}),"string"===typeof e[1]?Object(f.jsx)("h3",{children:e[1]}):e[1].map((function(e){return Object(f.jsxs)("div",{className:b.a.userBlock,children:[Object(f.jsxs)("h3",{className:"true"===e.radioValue?b.a.activeUser:"",children:[e.firstName," ",e.lastName]}),Object(f.jsxs)("div",{className:b.a.radioButtons,children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("input",{type:"radio",value:"false",name:e.id,onChange:r,checked:"false"===e.radioValue}),"not active"]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("input",{type:"radio",value:"true",name:e.id,onChange:r,checked:"true"===e.radioValue}),"active"]})]})]},e.id)}))]})}))}))})]})},v=r(16),O=r(3),B="SET_NOT_ACTIVE_USER",U="SET_ACTIVE_USER",g="SET_USERS",_="SORT_USERS",x={users:[],sortedUsersByAlphabet:[]},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return Object(O.a)(Object(O.a)({},e),{},{users:e.users.map((function(e){return Object(O.a)(Object(O.a)({},e),{},{radioValue:"false"})}))});case U:return Object(O.a)(Object(O.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(O.a)(Object(O.a)({},e),{},{radioValue:t.value}):e}))});case g:return Object(O.a)(Object(O.a)({},e),{},{users:t.users});case _:e.sortedUsersByAlphabet=[];var r=Array.from(Array(26)).map((function(e,t){return t+65})),s=r.map((function(e){return String.fromCharCode(e)}));return s.forEach((function(t){var r=t,s={};s[r]=[],e.users.forEach((function(e){r===e.firstName[0]&&s[r].push(e)})),0===s[r].length&&(s[r]="No employees"),e.sortedUsersByAlphabet.push(s)})),Object(O.a)(Object(O.a)({},e),{},{sortedUsersByAlphabet:Object(v.a)(e.sortedUsersByAlphabet)});default:return e}},A=Object(u.b)((function(e){return{users:e.employeesPage.users,sortedUsersByAlphabet:e.employeesPage.sortedUsersByAlphabet}}),(function(e){return{setUsers:function(t){e(function(e){return{type:g,users:e}}(t))},setActiveUser:function(t,r){e(function(e,t){return{type:U,value:e,userId:t}}(t,r))},sortUsers:function(){var t;e({type:_,users:t})},setNotActiveUser:function(){e({type:B})}}}))(m),k=r(12),S=r.n(k),N=function(e){var t=e.users;Object(s.useEffect)((function(){var r;r=t,e.setActiveBirthdayUSers(r),e.sortActiveBirthdayUsers()}),[t]);var r=function(e){var t=new Date(e),r=t.getDate(),s=t.getFullYear(),a=t.getMonth();return 12===a&&(a=0),"".concat(r," ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][a],", ").concat(s," year")};return Object(f.jsxs)("div",{className:S.a.birthdayBlock,children:[Object(f.jsx)("h1",{children:"Employees birthday"}),Object(f.jsx)("div",{className:S.a.birthdaysBlock,children:0===e.activeUsersBirthday.length?Object(f.jsx)("p",{children:"Employees List is empty"}):e.sortedActiveUsersBirthday.map((function(e){return Object.entries(e).map((function(e){return Object(f.jsxs)("div",{className:S.a.monthsBlock,children:[Object(f.jsx)("h3",{children:e[0]}),"string"===typeof e[1]?Object(f.jsx)("p",{children:e[1]}):Object(f.jsx)("ul",{children:e[1].sort((function(e,t){return e.lastName.localeCompare(t.lastName)})).map((function(e){return Object(f.jsxs)("li",{className:S.a.listUsers,children:[e.lastName," ",e.firstName," - ",r(e.dob)]},e.id)}))},e.id)]},e.id)}))}))})]})},T="SET_ACTIVE_BIRTHDAY_USERS",C="SORT_ACTIVE_BIRTHDAY_USERS",D=["January","February","March","April","May","June","July","August","September","October","November","December"],w={activeUsersBirthday:[],sortedActiveUsersBirthday:[]},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(O.a)(Object(O.a)({},e),{},{activeUsersBirthday:t.users.filter((function(e){return"true"===e.radioValue}))});case C:var r,s=new Date,a=s.getMonth(),c=[];return D.forEach((function(e,t){D[a]!==e?c.push(e):r=D.slice(t).concat(c)})),e.sortedActiveUsersBirthday=[],r.forEach((function(t){var r={};r[t]=[],e.activeUsersBirthday.sort((function(e,t){return new Date(e.dob)-new Date(t.dob)})).forEach((function(e){var s=new Date(e.dob).getMonth();t===D[s]&&r[t].push(e)})),0===r[t].length&&(r[t]="No employees"),e.sortedActiveUsersBirthday.push(r)})),Object(O.a)(Object(O.a)({},e),{},{sortedActiveUsersBirthday:Object(v.a)(e.sortedActiveUsersBirthday)});default:return e}},R=Object(u.b)((function(e){return{users:e.employeesPage.users,activeUsersBirthday:e.employeesBirthdayPage.activeUsersBirthday,sortedActiveUsersBirthday:e.employeesBirthdayPage.sortedActiveUsersBirthday}}),(function(e){return{setActiveBirthdayUSers:function(t){e(function(e){return{type:T,users:e}}(t))},sortActiveBirthdayUsers:function(){e({type:C})}}}))(N);var J=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),r=t[0],a=t[1],c=Object(o.f)();return Object(s.useEffect)((function(){c("/employees"),r||a(!0)}),[r,c]),Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(A,{}),Object(f.jsx)(R,{})]})},P=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,69)).then((function(t){var r=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,n=t.getTTFB;r(e),s(e),a(e),c(e),n(e)}))},V=r(18),M=r(33),F=r(21),L=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),Y=Object(F.a)({employeesPage:E,employeesBirthdayPage:I}),H=Object(F.b)(Y,L);H.subscribe(Object(M.throttle)((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(r){}}({employeesPage:H.getState().employeesPage})}),1e3));var X=H;n.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(V.a,{basename:"/test-task-Yalantis-React",children:Object(f.jsx)(u.a,{store:X,children:Object(f.jsxs)(o.c,{children:[Object(f.jsx)(o.a,{path:"/",element:Object(f.jsx)(J,{})}),Object(f.jsx)(o.a,{exact:!0,path:"/employees",element:Object(f.jsx)(J,{})})]})})})}),document.getElementById("root")),P()},8:function(e,t,r){e.exports={usersBlockByLetter:"Employees_usersBlockByLetter__RpSKh",activeUser:"Employees_activeUser__155q8",userBlock:"Employees_userBlock__vj1n8",employeesBlockData:"Employees_employeesBlockData__2ZEtl",employeesBlock:"Employees_employeesBlock__2pn7W",radioButtons:"Employees_radioButtons__2XCZw"}}},[[68,1,2]]]);
//# sourceMappingURL=main.2d27184b.chunk.js.map