(this.webpackJsonpsolid=this.webpackJsonpsolid||[]).push([[0],{108:function(e,t,n){},110:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(19),c=n.n(o),l=(n(67),n(13)),i=n(18),u=n(27),s=n.n(u),m=n(4),p=n(49),f=n.n(p),d=n(25),v=n.n(d),g=function(e){var t=e.isOpen,n=e.closeModal;return r.a.createElement(v.a,{isOpen:t,onRequestClose:n,contentLabel:"Codiv-19"},r.a.createElement("p",null,"Restez chez vous"))},E=function(){var e=Object(a.useState)(!1),t=Object(m.a)(e,2),n=t[0],o=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:f.a.warningButton,onClick:function(){return o(!0)}},r.a.createElement("span",{role:"img"},"\u26a0\ufe0f")),r.a.createElement(g,{isOpen:n,closeModal:function(){return o(!1)}}))},b=function(e){var t=e.leftIcon,n=e.children;return r.a.createElement("div",{className:s.a.title},t&&r.a.createElement("div",{className:s.a.leftIcon},t),r.a.createElement("div",{className:s.a.label},n),r.a.createElement(E,null))},h=n(50),O=n.n(h),_=function(e){var t=e.title,n=e.children;return r.a.createElement("div",{className:O.a.layout},r.a.createElement(b,t),n)},x=n(114);function j(e){var t=Object(a.useState)(JSON.parse(localStorage.getItem(e)||"null")),n=Object(m.a)(t,2),r=n[0],o=n[1];return Object(a.useEffect)((function(){localStorage.setItem(e,JSON.stringify(r))}),[r,e]),[r,o]}var w=n(33),k=n(3),y=n(54);w.a.use(k.a).init({resources:y,lng:"fr",keySeparator:!1,interpolation:{escapeValue:!1}});var C,I=w.a;!function(e){e.fr="fr",e.en="en"}(C||(C={}));var N,S={language:C.fr,toggleLanguage:function(){},browserSessionId:null,location:null,setLocation:function(){}},T=r.a.createContext(S),L=function(e){var t=e.children,n=j("language"),o=Object(m.a)(n,2),c=o[0],l=o[1],i=j("browser-session-id"),u=Object(m.a)(i,2),s=u[0],p=u[1],f=j("location"),d=Object(m.a)(f,2),v=d[0],g=d[1];return Object(a.useEffect)((function(){if(!s){var e=Object(x.a)();p(e)}}),[s,p]),Object(a.useEffect)((function(){I.changeLanguage(c||C.fr)}),[c]),r.a.createElement(T.Provider,{value:{language:c||C.fr,browserSessionId:s,location:v,setLocation:g,toggleLanguage:function(){var e=c===C.en?C.fr:C.en;l(e)}}},t)},B=function(){return Object(a.useContext)(T)},A=n(55),P=n.n(A);!function(e){e.en="\ud83c\uddeb\ud83c\uddf7",e.fr="\ud83c\uddec\ud83c\udde7"}(N||(N={}));var F,J=function(){var e=B(),t=e.language,n=e.toggleLanguage;return r.a.createElement("div",{className:P.a.languageToggleButton,onClick:n},N[t])},q=n(22),R=n(20),D=n.n(R);!function(e){e.blue="#3084ec",e.green="#12DD12",e.black="#222222",e.white="#FFFFFF",e.lightGrey="#EEEEEE"}(F||(F={}));var M=n(15),z=n.n(M),K=function(e){var t,n=e.children,a=e.color,o=e.backgroundColor,c=e.onClick,i=e.linkTo,u=e.leftIcon,s=e.onLeftIconClick,m=e.rightIcon,p=e.onRightIconClick,f=r.a.createElement("div",{className:D.a.button,style:{color:a||F.black,backgroundColor:o||F.lightGrey},onClick:c},u&&r.a.createElement("div",{className:D.a.left,onClick:function(e){s&&(e.stopPropagation(),s())}},u),r.a.createElement("div",{className:z()(D.a.main,(t={},Object(q.a)(t,D.a.center,!m),Object(q.a)(t,D.a.alignLeft,!!m),t))},n),m&&r.a.createElement("div",{className:D.a.right,onClick:function(e){p&&(e.stopPropagation(),p())}},m));return i?r.a.createElement(l.b,{to:i},f):f},W=n(2),G=n.n(W),H=n(6),Q=n(58),U=n.n(Q).a.create({baseURL:"http://localhost:5000",timeout:5e3}),V=function(){var e=Object(H.a)(G.a.mark((function e(t,n){var a;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.post("/login",{username:t,password:n});case 2:return a=e.sent,e.abrupt("return",a.data.token);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),X=function(){var e=Object(H.a)(G.a.mark((function e(){var t;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.get("/lists");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(H.a)(G.a.mark((function e(t){var n;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.get("/lists/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(H.a)(G.a.mark((function e(t,n){var a;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.post("/lists/".concat(n.id,"/items"),t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),$={isAuthenticated:!1,login:function(){return new Promise((function(){}))},logout:function(){},addItemToList:function(){}},ee=r.a.createContext($),te=function(e){var t=e.children,n=j("authenticated"),a=Object(m.a)(n,2),o=a[0],c=a[1],l=j("volunteer-lists"),i=Object(m.a)(l,2),u=i[0],s=i[1];return r.a.createElement(ee.Provider,{value:{isAuthenticated:o||!1,login:function(){var e=Object(H.a)(G.a.mark((function e(t,n){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V(t,n);case 2:e.sent,c(!0);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),logout:function(){c(!1)},addItemToList:function(e,t){s((u||[]).map((function(n){return n.id===t.id&&(n.items=t.items.concat(e)),n})))}}},t)},ne=function(){return Object(a.useContext)(ee)},ae=n(59),re=n.n(ae),oe=function(e){var t=e.to;return r.a.createElement(l.b,{to:t},r.a.createElement("div",{className:re.a.backButton},"\ud83d\udd19"))},ce=n(28),le=n.n(ce),ie=function(e){var t=e.value,n=e.placeholder,a=e.onAction,o=e.onChange,c=e.buttonLabel;return r.a.createElement("div",{className:le.a.input},r.a.createElement("input",{className:le.a.textInput,type:"text",value:t,placeholder:n,onChange:o}),c&&r.a.createElement("div",{className:le.a.button,onClick:a},c))},ue=n(16),se=n.n(ue),me=n(60),pe=function(e){var t=e.color,n=e.size,a=e.reverse,o="".concat(n||30,"px");return r.a.createElement("svg",{transform:a?"rotate(180)":"",width:o,height:o,xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",version:"1.1",viewBox:"0 0 512 512",xmlSpace:"preserve"},r.a.createElement("path",{fill:t||"black",d:"M506.157 132.386c-7.803-7.819-20.465-7.831-28.285-.029l-207.73 207.299c-7.799 7.798-20.486 7.797-28.299-.015L34.128 132.357c-7.819-7.803-20.481-7.79-28.285.029-7.802 7.819-7.789 20.482.029 28.284l207.701 207.27c11.701 11.699 27.066 17.547 42.433 17.547 15.358 0 30.719-5.846 42.405-17.533L506.128 160.67c7.818-7.802 7.831-20.465.029-28.284z"}))},fe=(n(108),[{title:"Pain",quantity:4,available:!0},{title:"Eau",quantity:3,available:!1},{title:"Vin",quantity:4,available:!0}]),de=function(e){e.volunteer,e.items;var t=Object(a.useState)(!1),n=Object(m.a)(t,2),o=n[0],c=n[1];return r.a.createElement("div",{className:se.a.order},r.a.createElement("div",{className:se.a.header},r.a.createElement("div",{className:se.a.name,onClick:function(){return c(!o)}},r.a.createElement("p",null,"volunteer.name"),r.a.createElement(pe,{color:F.white,reverse:o})),r.a.createElement(me.Collapse,{isOpened:o},r.a.createElement("p",{className:se.a.address},"volunteer.address"))),r.a.createElement("ul",{className:se.a.list},fe.map((function(e){return r.a.createElement("li",{key:e.title,className:se.a.item},r.a.createElement("div",{className:z()(se.a.itemContent,Object(q.a)({},se.a.available,!e.available))},r.a.createElement("span",null,e.title),r.a.createElement("span",null,"(X",e.quantity,")")))}))))},ve=n(24),ge=(n(109),n(61)),Ee=n.n(ge);ve.b.configure({position:ve.b.POSITION.TOP_CENTER,closeButton:!1,transition:ve.a,progressClassName:Ee.a.progressBar});var be=function(e){return Object(ve.b)(e)},he={home:function(){var e=Object(k.b)().t,t=ne().isAuthenticated;return r.a.createElement(_,{title:{leftIcon:r.a.createElement(J,null),children:"SOLID"}},r.a.createElement("p",null,e("welcome")),r.a.createElement("p",null,e("explanations")),r.a.createElement(K,{linkTo:"location"},e("i-go-shopping")),r.a.createElement("p",null,e("explanations2")),!t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(K,{linkTo:"signup"},e("i-become-volunteer")),r.a.createElement(K,{linkTo:"login"},e("i-am-already-volunteer"))),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(K,{linkTo:"volunteer"},e("access-my-volunteer-space"))),r.a.createElement(K,{linkTo:"cgu"},e("cgu")))},eula:function(){var e=Object(k.b)().t;return r.a.createElement(_,{title:{children:e("cgu"),leftIcon:r.a.createElement(oe,{to:"/"})}},r.a.createElement("p",null,e("conditions")))},location:function(){var e=Object(k.b)().t,t=B().setLocation,n=function(){var e=Object(H.a)(G.a.mark((function e(){var n;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise((function(e,t){navigator.geolocation.getCurrentPosition((function(t){var n=t.coords,a=n.latitude,r=n.longitude;e({latitude:a,longitude:r})}),(function(e){return t(e)}),{enableHighAccuracy:!0,timeout:3e4,maximumAge:5e3})}));case 3:n=e.sent,t(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(_,{title:{leftIcon:r.a.createElement(oe,{to:"/"}),children:e("my-address")}},r.a.createElement("p",null,e("explanations-location")),r.a.createElement(K,{onClick:n},e("locate-me")),r.a.createElement("p",null,e("or")),r.a.createElement(ie,{value:"",placeholder:e("street"),onChange:function(){}}),r.a.createElement(K,{linkTo:"orders"},"OK"))},orders:function(){var e=Object(k.b)().t,t=r.a.createElement("div",null,r.a.createElement("p",null,e("needs-around")),r.a.createElement("p",null,"5, rue du Poirier, 75014, PARIS"));return r.a.createElement(_,{title:{children:t,leftIcon:r.a.createElement(oe,{to:"location"})}},r.a.createElement(de,null),r.a.createElement(de,null),r.a.createElement(de,null))},login:function(){var e=Object(k.b)().t,t=Object(a.useState)(!1)[1],n=ne().login,o=Object(a.useState)(""),c=Object(m.a)(o,2),l=c[0],i=c[1],u=Object(a.useState)(""),s=Object(m.a)(u,2),p=s[0],f=s[1],d=function(){var a=Object(H.a)(G.a.mark((function a(){return G.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,n(l,p);case 3:t(!0),a.next=9;break;case 6:a.prev=6,a.t0=a.catch(0),be(e("wrong-login-credentials"));case 9:case"end":return a.stop()}}),a,null,[[0,6]])})));return function(){return a.apply(this,arguments)}}();return r.a.createElement(_,{title:{leftIcon:r.a.createElement(oe,{to:"/"}),children:e("login")}},r.a.createElement(ie,{value:l,placeholder:e("username-placeholder"),onChange:function(e){return i(e.target.value)}}),r.a.createElement(ie,{value:p,placeholder:e("password-placeholder"),onChange:function(e){return f(e.target.value)}}),r.a.createElement(K,{onClick:d},e("login")),r.a.createElement(K,null,e("forgotten-password")))},signup:function(){var e=Object(k.b)().t;return r.a.createElement(_,{title:{leftIcon:r.a.createElement(oe,{to:"/"}),children:e("signup-title")}},r.a.createElement("p",null,e("signup-explanations")),r.a.createElement(K,{linkTo:"login"},e("already-volunteer-button")),r.a.createElement("p",null,e("signup-explanations-2")),r.a.createElement(ie,{value:"",placeholder:e("firstname"),onChange:function(){}}),r.a.createElement(ie,{value:"",placeholder:e("lastname"),onChange:function(){}}),r.a.createElement(ie,{value:"",placeholder:e("phone"),onChange:function(){}}),r.a.createElement(ie,{value:"",placeholder:e("email"),onChange:function(){}}),r.a.createElement(ie,{value:"",placeholder:e("password"),onChange:function(){}}),r.a.createElement(ie,{value:"",placeholder:e("password-confirmation"),onChange:function(){}}),r.a.createElement(ie,{value:"",placeholder:e("address"),buttonLabel:e("locate-me"),onChange:function(){}}),r.a.createElement(K,{linkTo:"volunteer"},"OK"))},volunteer:function(){var e=Object(k.b)().t;return r.a.createElement(_,{title:{children:e("volunteer-space")}},r.a.createElement("p",null,e("epxplanations-volunteer")),r.a.createElement(K,{linkTo:"lists"},e("manage-my-needs")),r.a.createElement(K,{linkTo:"orders"},e("i-go-shopping")),r.a.createElement(K,{linkTo:"parameters"},e("parameters")))},lists:function(){var e=Object(k.b)().t,t=Object(a.useState)(),n=Object(m.a)(t,2),o=n[0],c=n[1];Object(a.useEffect)((function(){(function(){var t=Object(H.a)(G.a.mark((function t(){var n;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,X();case 3:n=t.sent,c(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),be(e("could-not-get-data"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}})()()}),[o,c]);var l=Object(a.useState)(""),i=Object(m.a)(l,2),u=i[0],s=i[1];return r.a.createElement(_,{title:{leftIcon:r.a.createElement(oe,{to:"volunteer"}),children:e("my-needs")}},r.a.createElement("p",null,e("needs-explanations")),r.a.createElement(ie,{value:u,placeholder:e("new-list"),buttonLabel:e("add-new-list"),onChange:function(e){return s(e.target.value)},onAction:function(){s("")}}))},listDetails:function(){var e=Object(i.h)().id,t=Object(k.b)().t,n=Object(a.useState)(),o=Object(m.a)(n,2),c=o[0],l=o[1],u=Object(a.useState)(""),s=Object(m.a)(u,2),p=s[0],f=s[1];return Object(a.useEffect)((function(){(function(){var n=Object(H.a)(G.a.mark((function n(){var a;return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=11;break}return n.prev=1,n.next=4,Y(e);case 4:a=n.sent,l(a),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),be(t("fetch-data-error"));case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(){return n.apply(this,arguments)}})()()}),[c,l]),r.a.createElement(_,{title:{children:c?c.title:t("list-not-found"),leftIcon:r.a.createElement(oe,{to:"/lists"})}},r.a.createElement("p",null,t("list-details-explanations")),c&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"List for id ",e),c.items.map((function(e){return r.a.createElement(K,{key:e.title},"".concat(e.title," X ").concat(e.quantity))})),r.a.createElement(ie,{value:p,placeholder:t("new-item"),buttonLabel:t("add-new-item"),onChange:function(e){return f(e.target.value)},onAction:Object(H.a)(G.a.mark((function e(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z({title:p,quantity:1},c);case 3:e.sent,f(""),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),be(t("new-item-error"));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))})),!c&&r.a.createElement("p",null,t("not-list-found-for-id")))},parameters:function(){var e=Object(k.b)().t,t=ne().logout,n=Object(i.g)();return r.a.createElement(_,{title:{leftIcon:r.a.createElement(oe,{to:"volunteer"}),children:e("parameters")}},r.a.createElement(ie,{value:"",placeholder:e("contact-information"),onChange:function(){}}),r.a.createElement(ie,{value:"",placeholder:e("message-to-shoppers"),onChange:function(){}}),r.a.createElement(K,null,e("save")),r.a.createElement(K,{onClick:function(){t(),n.push("/login")}},e("logout")))}},Oe=n(26),_e=function(e){var t=e.component,n=Object(Oe.a)(e,["component"]),a=ne().isAuthenticated;return r.a.createElement(i.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement(i.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},xe=function(e){var t=e.component,n=Object(Oe.a)(e,["component"]),a=ne().isAuthenticated,o=n.location?n.location.state:null,c=o?o.from:{pathname:"/volunteer"};return r.a.createElement(i.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(i.a,{to:c}):r.a.createElement(t,e)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));v.a.setAppElement("#root"),c.a.render(r.a.createElement((function(){return r.a.createElement(L,null,r.a.createElement(te,null,r.a.createElement(l.a,null,r.a.createElement(i.d,null,r.a.createElement(_e,{path:"/volunteer",exact:!0,component:he.volunteer}),r.a.createElement(_e,{path:"/lists/:id",exact:!0,component:he.listDetails}),r.a.createElement(_e,{path:"/lists",exact:!0,component:he.lists}),r.a.createElement(_e,{path:"/parameters",exact:!0,component:he.parameters}),r.a.createElement(i.b,{path:"/location",exact:!0,component:he.location}),r.a.createElement(i.b,{path:"/orders",exact:!0,component:he.orders}),r.a.createElement(xe,{path:"/signup",exact:!0,component:he.signup}),r.a.createElement(xe,{path:"/login",exact:!0,component:he.login}),r.a.createElement(i.b,{path:"/cgu",exact:!0,component:he.eula}),r.a.createElement(i.b,{path:"/",component:he.home})))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},16:function(e,t,n){e.exports={order:"order_order__JvLbv",header:"order_header__1176g",name:"order_name__1keby",address:"order_address__22Qhl",list:"order_list__1BSqh",item:"order_item__2Yt5a",itemContent:"order_itemContent__2flsZ",available:"order_available__2Qlr9"}},20:function(e,t,n){e.exports={button:"button_button__2FeG3",main:"button_main__3tPMK",center:"button_center__37HTt","align-left":"button_align-left__3IoQc",left:"button_left__2TUfn",right:"button_right__BoyjT"}},27:function(e,t,n){e.exports={title:"title_title__3DB2a",label:"title_label__PEKaW"}},28:function(e,t,n){e.exports={input:"input_input__2LmAj",textInput:"input_textInput__2idJR",button:"input_button__1-TFf"}},49:function(e,t,n){e.exports={warningButton:"warningButton_warningButton__7oO43"}},50:function(e,t,n){e.exports={layout:"layout_layout__1ibe5"}},54:function(e){e.exports=JSON.parse('{"en":{"translation":{"welcome":"Welcome to Solid","i-become-volunteer":"I enroll as a volunteer","i-am-already-volunteer":"I\'m already a volunteer","i-go-shopping":"I go shopping","cgu":"End-user license agreement","my-address":"My address"}},"fr":{"translation":{"welcome":"Bienvenue sur Solid","i-become-volunteer":"Je deviens volontaire","i-am-already-volunteer":"Je suis d\xe9j\xe0 volontaire","i-go-shopping":"Je fais les courses","cgu":"Conditions g\xe9n\xe9rales d\'utilisation","my-address":"Mon adresse"}}}')},55:function(e,t,n){e.exports={languageToggleButton:"languageToggleButton_languageToggleButton__1JyvA"}},59:function(e,t,n){},61:function(e,t,n){e.exports={progressBar:"toast_progressBar__3YHF-"}},62:function(e,t,n){e.exports=n(110)},67:function(e,t,n){}},[[62,1,2]]]);
//# sourceMappingURL=main.bed48b3f.chunk.js.map