(this["webpackJsonpChase Allen"]=this["webpackJsonpChase Allen"]||[]).push([[0],{36:function(e,t,n){},38:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(23),a=n.n(s),i=n(7),o=n(11),l=n(24),u=(n(33),l.a.initializeApp({apiKey:"AIzaSyAvG-7ZVqVni6cKvjBSqdzW778jvFKPwyo",authDomain:"chase-allen-b6d5f.firebaseapp.com",projectId:"chase-allen-b6d5f",storageBucket:"hase-allen-b6d5f.appspot.com",messagingSenderId:"882879254784",appId:"1:882879254784:web:e0cd56605dfe4ad1fee3e5",measurementId:"G-2KVG8VLM91"})),d=u.auth(),j=n(0),v=Object(c.createContext)();function h(){return Object(c.useContext)(v)}function b(e){var t=e.children,n=Object(c.useState)(!0),r=Object(o.a)(n,2),s=r[0],a=r[1],i=Object(c.useState)(null),l=Object(o.a)(i,2),u=l[0],h=l[1];Object(c.useEffect)((function(){return d.onAuthStateChanged((function(e){h(e),a(!1)}))}),[]);var b={userIsLoading:s,currentUser:u,signIn:function(e,t){return d.signInWithEmailAndPassword(e,t)},signUp:function(e,t){return d.createUserWithEmailAndPassword(e,t)},signOut:function(){return d.signOut()}};return Object(j.jsx)(v.Provider,{value:b,children:t})}n(36);var f=n(12),O=n.n(f),m=n(15),x=n(3);n(38);function p(e){return Object(j.jsx)("button",{className:"sign-in-out",onClick:e.onClick,children:e.text})}var g=function(){var e=Object(x.f)(),t=Object(x.g)(),n=h(),c=n.userIsLoading,r=n.currentUser,s=n.signOut;return Object(j.jsxs)("header",{className:"Header",children:[Object(j.jsx)("h1",{className:"Header-text",children:"Chase Allen"}),!c&&Object(j.jsx)("div",{className:"sign-in-out-container",children:r?Object(j.jsx)(p,{text:"Sign Out",onClick:Object(m.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s();case 2:case"end":return e.stop()}}),e)})))}):Object(j.jsx)(j.Fragment,{children:"/sign-in"!==t.pathname&&Object(j.jsx)(p,{text:"Sign In",onClick:Object(m.a)(O.a.mark((function t(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.push("/sign-in");case 1:case"end":return t.stop()}}),t)})))})})})]})};n(46);var w=function(){return Object(j.jsxs)("nav",{className:"component Nav",children:[Object(j.jsx)(i.b,{to:"/sign-in",activeClassName:"active-route",exact:!0,children:"Sign In"}),Object(j.jsx)(i.b,{to:"/",activeClassName:"active-route",exact:!0,children:"Home"}),Object(j.jsx)(i.b,{to:"/about",activeClassName:"active-route",exact:!0,children:"About"}),Object(j.jsx)(i.b,{to:"/games",activeClassName:"active-route",exact:!0,children:"Games"}),Object(j.jsx)(i.b,{to:"/restricted",activeClassName:"active-route",exact:!0,children:"Restricted"})]})};n(47);var k=function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),n=Object(c.useRef)(),r=h(),s=r.currentUser,a=r.userIsLoading,i=r.signIn,l=r.signUp,u=Object(c.useState)(!0),d=Object(o.a)(u,2),v=d[0],b=d[1],f=Object(c.useState)(""),x=Object(o.a)(f,2),p=x[0],g=x[1];function w(){[e,t,n].forEach((function(e){e.current&&(e.current.value="")}))}function k(){return(k=Object(m.a)(O.a.mark((function n(){return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,g(""),n.next=4,i(e.current.value,t.current.value);case 4:w(),n.next=11;break;case 7:n.prev=7,n.t0=n.catch(0),g(n.t0.message),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function N(){return(N=Object(m.a)(O.a.mark((function c(){return O.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(t.current.value===n.current.value){c.next=2;break}return c.abrupt("return",g("Passwords do not match"));case 2:return c.prev=2,g(""),c.next=6,l(e.current.value,t.current.value);case 6:w(),c.next=13;break;case 9:c.prev=9,c.t0=c.catch(2),g(c.t0.message),console.error(c.t0);case 13:case"end":return c.stop()}}),c,null,[[2,9]])})))).apply(this,arguments)}return Object(j.jsxs)("div",{className:"view SignIn",children:[Object(j.jsx)("h3",{className:"view-title",children:s?"Signed In As:":"Sign In"}),Object(j.jsx)("h5",{className:"current-user-email",children:null===s||void 0===s?void 0:s.email}),Object(j.jsxs)("form",{children:[p&&Object(j.jsx)("div",{style:{color:"red",marginBottom:"8px"},children:p}),Object(j.jsxs)("label",{children:[Object(j.jsx)("h5",{children:"Email"}),Object(j.jsx)("input",{ref:e,type:"email",required:!0})]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("h5",{children:"Password"}),Object(j.jsx)("input",{ref:t,type:"password",required:!0})]}),!v&&Object(j.jsxs)("label",{children:[Object(j.jsx)("h5",{children:"Confirm Password"}),Object(j.jsx)("input",{ref:n,type:"password",required:!0})]}),Object(j.jsx)("button",{className:"form-action",type:"button",onClick:v?function(){return k.apply(this,arguments)}:function(){return N.apply(this,arguments)},children:v?"Sign In":"Sign Up"})]}),Object(j.jsx)("button",{className:"switch",onClick:function(){return b(!v)},disabled:a,children:v?"Don't have account? Click here to Sign Up.":"Click here to Sign In."})]})},N=n(14),y=n(28),S={count:0,user:{name:"Chase"}};var C=Object(y.a)({reducer:{count:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;return"incrementCount"===t.type?Object(N.a)(Object(N.a)({},e),{},{count:e.count+1}):"decrementCount"===t.type?Object(N.a)(Object(N.a)({},e),{},{count:e.count-1}):e},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;return"setUser"===t.type?Object(N.a)(Object(N.a)({},e),{},{user:{name:t.payload||e.user.name}}):e}}});n(49);var I=function(){return console.log(C.getState()),C.dispatch({type:"incrementCount"}),C.dispatch({type:"setUser",payload:"Fake Chase"}),console.log(C.getState()),Object(j.jsxs)("div",{className:"view Home",children:[Object(j.jsx)("h3",{className:"view-title",children:"Home"}),Object(j.jsxs)("p",{className:"msg",children:[Object(j.jsx)("span",{className:"hand",children:"\ud83d\udc4b"})," Hey, I'm Chase!"]})]})},A=n.p+"static/media/chase.724f11d1.jpeg";n(50);var L=function(){return Object(j.jsxs)("div",{className:"view About",children:[Object(j.jsx)("h3",{className:"view-title",children:"About"}),Object(j.jsx)("img",{src:A,alt:"Chase Allen"})]})};n(51);var U=function(){var e,t;return Object(c.useEffect)((function(){var n,c,r=document.querySelector(".results"),s=200,a=15,i=1,o=!0,l=[],u=0,d=document.querySelectorAll(".grid div"),j=Array.from({length:38},(function(e,t){return t}));function v(){for(var e=0;e<j.length;e++){var t;if(!l.includes(e))null===(t=d[j[e]])||void 0===t||t.classList.add("invader")}}v(),null===(n=d[s])||void 0===n||n.classList.add("shooter"),e=function(e){var t,n;switch(null===(t=d[s])||void 0===t||t.classList.remove("shooter"),e.key){case"ArrowLeft":s%a!==0&&(s-=1);break;case"ArrowRight":s%a<14&&(s+=1)}null===(n=d[s])||void 0===n||n.classList.add("shooter")},document.addEventListener("keydown",e),c=setInterval((function(){var e,t=j[0]%a===0,n=j[j.length-1]%a===14;if(function(){for(var e=0;e<j.length;e++){var t;null===(t=d[j[e]])||void 0===t||t.classList.remove("invader")}}(),n&&o)for(var u=0;u<j.length;u++)j[u]+=16,i=-1,o=!1;if(t&&!o)for(var h=0;h<j.length;h++)j[h]+=14,i=1,o=!0;for(var b=0;b<j.length;b++)j[b]+=i;v(),r&&(null===(e=d[s])||void 0===e?void 0:e.classList.contains("invader"))&&(r.textContent="Game Over",clearInterval(c));for(var f=0;f<j.length;f++)r&&j[f]>d.length&&(r.textContent="Game Over",clearInterval(c));r&&l.length===j.length&&(r.textContent="You Win!",clearInterval(c))}),500),t=function(e){var t,n=s;switch(e.key){case"ArrowUp":t=setInterval((function(){var e,c,s;if(null===(e=d[n])||void 0===e||e.classList.remove("laser"),null===(c=d[n-=a])||void 0===c||c.classList.add("laser"),r&&(null===(s=d[n])||void 0===s?void 0:s.classList.contains("invader"))){var i,o,v;null===(i=d[n])||void 0===i||i.classList.remove("laser"),null===(o=d[n])||void 0===o||o.classList.remove("invader"),null===(v=d[n])||void 0===v||v.classList.add("boom"),setTimeout((function(){var e;return null===(e=d[n])||void 0===e?void 0:e.classList.remove("boom")}),100),clearInterval(t);var h=j.indexOf(n);l.push(h),u++,r.textContent=u.toString()}}),100)}},document.addEventListener("keydown",t)})),Object(j.jsxs)("div",{className:"game SpaceInvaders",children:[Object(j.jsx)("h4",{className:"game-title",children:"Space Invaders"}),Object(j.jsx)("h2",{className:"results",children:"0"}),Object(j.jsx)("div",{className:"grid",children:Array.from({length:225}).map((function(e,t){return Object(j.jsx)("div",{},t)}))}),Object(j.jsxs)("div",{className:"controls",children:[Object(j.jsxs)("div",{className:"left-right",children:[Object(j.jsx)("button",{onClick:function(){return e({key:"ArrowLeft"})},children:"<"}),Object(j.jsx)("button",{onClick:function(){return e({key:"ArrowRight"})},children:">"})]}),Object(j.jsx)("button",{onClick:function(){return t({key:"ArrowUp"})},children:"^"})]})]})};n(52);var W=function(){var e,t,n,r=Object(c.useRef)(),s=Object(c.useState)([]),a=Object(o.a)(s,2),i=a[0],l=a[1],u=Object(c.useState)(0),d=Object(o.a)(u,2),v=d[0],h=d[1],b=Object(c.useState)(0),f=Object(o.a)(b,2),O=f[0],m=f[1],x=Object(c.useState)(""),p=Object(o.a)(x,2),g=p[0],w=p[1];return Object(c.useEffect)((function(){fetch("https://opentdb.com/api.php?amount=10").then((function(e){return e.json()})).then((function(e){return l(e.results)}))}),[]),Object(j.jsxs)("div",{className:"game Trivia",children:[Object(j.jsx)("h4",{className:"game-title",children:"Trivia"}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:["Question Number: ",O+1]}),Object(j.jsxs)("p",{children:["Score: ",v]}),Object(j.jsx)("p",{className:"question",dangerouslySetInnerHTML:{__html:null===i||void 0===i||null===(e=i[O])||void 0===e?void 0:e.question}}),!g&&Object(j.jsx)("select",{ref:r,children:null===i||void 0===i||null===(t=i[O])||void 0===t?void 0:t.incorrect_answers.concat(null===i||void 0===i||null===(n=i[O])||void 0===n?void 0:n.correct_answer).sort((function(){return Math.random()-.5})).map((function(e,t){return Object(j.jsx)("option",{dangerouslySetInnerHTML:{__html:e}},t)}))}),Object(j.jsx)("p",{className:"msg",style:{color:"Correct!"===g?"limegreen":"red"},children:g}),Object(j.jsx)("button",{onClick:function(){var e,t;(null===i||void 0===i||null===(e=i[O])||void 0===e?void 0:e.correct_answer)===(null===r||void 0===r||null===(t=r.current)||void 0===t?void 0:t.value)?(w("Correct!"),h(v+1)):w("Wrong."),setTimeout((function(){w(""),m(O+1)}),2e3)},disabled:!!g,children:"Submit"})]})]})};n(53);var E=function(){return Object(j.jsxs)("div",{className:"view Games",children:[Object(j.jsx)("h3",{className:"view-title",children:"Games"}),Object(j.jsxs)("nav",{children:[Object(j.jsx)(i.b,{to:"/games/space-invaders",exact:!0,children:"Space Invaders"}),Object(j.jsx)(i.b,{to:"/games/trivia",exact:!0,children:"Trivia"})]}),Object(j.jsx)(x.a,{path:"/games/space-invaders",exact:!0,children:Object(j.jsx)(U,{})}),Object(j.jsx)(x.a,{path:"/games/trivia",exact:!0,children:Object(j.jsx)(W,{})})]})};var R=function(){var e=h().currentUser;return Object(j.jsxs)("div",{className:"view Restricted",children:[Object(j.jsx)("h3",{className:"view-title",children:"Restricted"}),e?Object(j.jsx)("p",{children:"You are viewing a restricted view! \ud83d\ude03"}):Object(j.jsx)("p",{children:"You must be signed in to view this. \ud83d\ude21"})]})};n(54);var q=function(){return Object(j.jsx)("div",{className:"view",children:Object(j.jsxs)(x.c,{children:[Object(j.jsx)(x.a,{path:"/sign-in",children:Object(j.jsx)(k,{})}),Object(j.jsx)(x.a,{path:"/about",children:Object(j.jsx)(L,{})}),Object(j.jsx)(x.a,{path:"/games",children:Object(j.jsx)(E,{})}),Object(j.jsx)(x.a,{path:"/restricted",children:Object(j.jsx)(R,{})}),Object(j.jsx)(x.a,{path:"/",children:Object(j.jsx)(I,{})})]})})};n(55);var P=function(){return h().userIsLoading?null:Object(j.jsxs)("div",{className:"App","data-testid":"App",children:[Object(j.jsx)(g,{}),Object(j.jsx)(w,{}),Object(j.jsx)(q,{})]})},T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function G(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(i.a,{children:Object(j.jsx)(b,{children:Object(j.jsx)(P,{})})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/chase-allen",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/chase-allen","/service-worker.js");T?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):G(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):G(t,e)}))}}()}},[[56,1,2]]]);
//# sourceMappingURL=main.b59a89bf.chunk.js.map