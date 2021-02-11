(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t){},101:function(e,t){},102:function(e,t){},103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(44),o=a.n(r),l=a(4),s=a(6);function i(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Welcome to eBook Library"))}function u(){return c.a.createElement("div",{className:"component-container"},c.a.createElement("h2",{className:"not-found-msg"},"404"),c.a.createElement("p",null,"Sorry, the page is not found."))}var m=a(11),p=a.n(m),d=a(16),b=a(5),E=Object(n.createContext)(),v=function(e){var t=e.children,a=Object(n.useState)(null),r=Object(b.a)(a,2),o=r[0],l=r[1],s=Object(n.useState)(!1),i=Object(b.a)(s,2),u=i[0],m=i[1],p=Object(n.useState)(JSON.parse(localStorage.getItem("login"))),d=Object(b.a)(p,2),v=d[0],h=d[1],f=Object(n.useState)(!1),g=Object(b.a)(f,2),k=g[0],j=g[1],O=Object(n.useState)([]),N=Object(b.a)(O,2),x=N[0],C=N[1],S=Object(n.useState)(""),y=Object(b.a)(S,2),A=y[0],w=y[1];return c.a.createElement(E.Provider,{value:{token:o,setToken:l,cookies:u,setCookies:m,isAuth:v,setIsAuth:h,isAdmin:k,setIsAdmin:j,userData:A,setUserData:w,books:x,setBooks:C}},t)};a(28);function h(){var e=Object(n.useContext)(E),t=e.isAuth,a=e.setIsAuth,r=e.isAdmin,o=e.setIsAdmin,l=e.token,i=e.setToken,u=e.setCookies,m=(e.userData,e.setUserData),v=Object(n.useState)(""),h=Object(b.a)(v,2),f=h[0],g=h[1],k=Object(n.useState)(""),j=Object(b.a)(k,2),O=j[0],N=j[1],x=Object(n.useState)(""),C=Object(b.a)(x,2),S=C[0],y=C[1],A=function(){var e=Object(d.a)(p.a.mark((function e(t){var n,c,r,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={email:f,password:O},c={method:"POST",headers:{"Content-Type":"application/json","x-auth":l},body:JSON.stringify(n)},e.next=5,fetch("/users/login",c);case 5:return r=e.sent,e.next=8,r.json();case 8:(s=e.sent).user?"Admin"===s.user.role?o(!0):o(!1):(y("sorry, something went wrong"),g(""),N("")),s.success?(a(!0),u(!0),i(s.token),localStorage.setItem("login",!0),localStorage.setItem("id",s.user._id),m(s.user)):(y("wrong login data"),a(!1));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"login-container"},c.a.createElement("p",{className:"msg wrong"},S),t?r?c.a.createElement(s.a,{to:"/admin"}):c.a.createElement(s.a,{to:"/ebooks"}):c.a.createElement("div",{className:"form-container"},c.a.createElement("h2",null,"Login"),c.a.createElement("form",{onSubmit:A},c.a.createElement("input",{type:"text",name:"email",placeholder:"Enter Email",value:f,onChange:function(e){return g(e.target.value)},required:!0}),c.a.createElement("input",{type:"password",name:"password",placeholder:"Enter Password",value:O,onChange:function(e){return N(e.target.value)},required:!0}),c.a.createElement("button",{type:"submit"},"Login"))))}function f(){var e=Object(n.useContext)(E),t=e.isAuth,a=e.setIsAuth,r=e.token,o=e.setToken,l=e.setCookies,i=e.setUserData,u=Object(n.useState)(null),m=Object(b.a)(u,2),v=m[0],h=m[1],f=Object(n.useState)(null),g=Object(b.a)(f,2),k=g[0],j=g[1],O=Object(n.useState)(null),N=Object(b.a)(O,2),x=N[0],C=N[1],S=function(){var e=Object(d.a)(p.a.mark((function e(t){var n,c,s,u;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={userName:v,email:k,password:x},c={method:"POST",headers:{"Content-Type":"application/json","x-auth":r},body:JSON.stringify(n)},e.next=5,fetch("/users",c);case 5:return s=e.sent,e.next=8,s.json();case 8:u=e.sent,""!==v&&""!==k&&""!==x||alert("Please fill in all input fields."),(null==x||x.length<6)&&alert("The password should have at least 6 characters."),(null==k||k.indexOf("@")<1&&k.lastIndexOf(".")<2)&&alert("Please enter correct email."),u.success?(alert("Your account was created successful."),a(!0),l(!0),o(u.token),i(u.user),localStorage.setItem("login",!0),localStorage.setItem("id",u.user._id)):alert("Your account can not be created. Please check if all input data is correct.");case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"form-container"},c.a.createElement("h2",null,"Sign up"),t?c.a.createElement(s.a,{to:"/ebooks"}):c.a.createElement("form",{onSubmit:S},c.a.createElement("input",{type:"text",name:"userName",placeholder:"* Enter Name",required:!0,minLength:"2",maxLength:"15",onChange:function(e){return h(e.target.value)}}),c.a.createElement("input",{type:"email",name:"email",placeholder:"* Enter Email",required:!0,onChange:function(e){return j(e.target.value)}}),c.a.createElement("input",{type:"password",name:"password",placeholder:"* Enter Password",required:!0,minLength:"6",maxLength:"20",onChange:function(e){return C(e.target.value)}}),c.a.createElement("button",{type:"submit"},"Sign up")))}function g(){var e=Object(n.useContext)(E),t=e.isAuth,a=e.setIsAuth,r=e.setCookies;return Object(n.useEffect)((function(){fetch("/users/logout"),localStorage.clear(),r(!1),a(!1)}),[]),t?c.a.createElement("div",{className:"component-container"},c.a.createElement("p",null,"You are logged out.")):c.a.createElement(s.a,{to:"/login"})}function k(){return c.a.createElement("div",null,c.a.createElement("nav",{className:"admin-nav"},c.a.createElement("h3",null,"manage books"),c.a.createElement(l.c,{className:"main-nav-link",to:"/add-book",exact:!0,activeClassName:"active"},"add ebook"),c.a.createElement(l.c,{className:"main-nav-link",to:"/edit-book",exact:!0,activeClassName:"active"},"edit ebook"),c.a.createElement(l.c,{className:"main-nav-link",to:"/delete-book",exact:!0,activeClassName:"active"},"delete ebook"),c.a.createElement("h3",null,"manage users"),c.a.createElement(l.c,{className:"main-nav-link",to:"/users",activeClassName:"active"},"Users")))}a(59);function j(){var e=Object(n.useContext)(E),t=e.isAdmin,a=e.isAuth;return c.a.createElement("div",{className:"admin"},t&&a?c.a.createElement("div",null,c.a.createElement("h2",null,"hallo admin"),c.a.createElement(k,null)):c.a.createElement(s.a,{to:"/login"}))}function O(){var e=Object(n.useContext)(E),t=e.isAuth,a=e.userData;return t?c.a.createElement("div",{className:"component-container user-account"},c.a.createElement("h2",null,a.userName,", welcome to the ebook library"),c.a.createElement("h3",null,"User Data"),c.a.createElement("p",null,"User name: ",a.userName," "),c.a.createElement("p",null,"Email: ",a.email," ")):c.a.createElement(s.a,{to:"/login"})}function N(){var e=Object(n.useContext)(E),t=e.isAdmin,a=e.isAuth,r=e.token,o=Object(n.useState)(null),i=Object(b.a)(o,2),u=i[0],m=i[1];return fetch("/users",{headers:{"content-type":"application/json","x-auth":r}}).then((function(e){return e.json()})).then((function(e){m(e.users)})),c.a.createElement("div",{className:"component-container users"},c.a.createElement("h2",null,"Users"),t&&a?c.a.createElement(c.a.Fragment,null,u&&u.filter((function(e){return"Admin"!==e.role})).map((function(e){return c.a.createElement("div",{key:e._id,className:"user"},c.a.createElement("h3",null,e.userName),c.a.createElement("p",null,e.email))})),c.a.createElement(l.b,{to:"/admin",className:"link-btn"},"go back")):c.a.createElement(s.a,{to:"/login"}))}var x=a(46),C=a.n(x);a(60);var S=Object(s.g)((function(){var e=Object(n.useContext)(E),t=e.isAuth,a=e.books,r=e.setBooks;return fetch("/books").then((function(e){return e.json()})).then((function(e){r(e.books)})),c.a.createElement("div",{className:"book-container"},t?c.a.createElement("div",{className:"book-list"},a&&a.map((function(e){return c.a.createElement("div",{key:e._id,className:"book"},c.a.createElement("h3",null,e.title),c.a.createElement("div",{className:"img-div"},c.a.createElement("img",{src:e.cover?e.cover:C.a,alt:"Book cover",width:"170",height:"250"})),c.a.createElement("div",{className:"book-info"},c.a.createElement("p",null,e.description),c.a.createElement("p",null,e.author),c.a.createElement("p",null,e.year)),c.a.createElement(l.b,{to:{pathname:"/read-book/".concat(e._id),state:{bookpath:e.path}},className:"btn-read-book"},"open to read"))}))):c.a.createElement(s.a,{to:"/login"}))})),y=a(47),A=a.n(y);function w(){var e=Object(n.useContext)(E),t=e.isAdmin,a=e.isAuth,r=e.token,o=Object(n.useState)(""),l=Object(b.a)(o,2),i=l[0],u=l[1],m=Object(n.useState)(""),v=Object(b.a)(m,2),h=v[0],f=v[1],g=Object(n.useState)(""),k=Object(b.a)(g,2),j=k[0],O=k[1],N=Object(n.useState)(""),x=Object(b.a)(N,2),C=x[0],S=x[1],y=Object(n.useState)(""),w=Object(b.a)(y,2),I=w[0],D=w[1],L=Object(n.useState)(""),P=Object(b.a)(L,2),T=P[0],B=P[1],U=function(){var e=Object(d.a)(p.a.mark((function e(t){var a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(a=new FormData).append("title",i),a.append("description",h),a.append("author",j),a.append("year",C),a.append("file",I),a.append("cover",T),console.log("bookData:",a),e.prev=9,e.next=12,A.a.post("/books",a,{headers:{"Content-Type":"multipart/form-data","x-auth":r}});case 12:(n=e.sent).status&&console.log("server response:",n),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(9),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[9,16]])})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"component-container "},t&&a?c.a.createElement("div",null,c.a.createElement("form",{onSubmit:U,encType:"multipart/form-data",className:"add-book"},c.a.createElement("input",{type:"text",name:"title",onChange:function(e){return u(e.target.value)},placeholder:"title"}),c.a.createElement("input",{type:"text",name:"description",onChange:function(e){return f(e.target.value)},placeholder:"description"}),c.a.createElement("input",{type:"text",name:"author",onChange:function(e){return O(e.target.value)},placeholder:"author"}),c.a.createElement("input",{type:"text",name:"year",onChange:function(e){return S(e.target.value)},placeholder:"year"}),c.a.createElement("label",{htmlFor:"book-file"},"Book File"),c.a.createElement("input",{type:"file",name:"file",id:"book-file",placeholder:"Only .pdf",accept:"application/pdf",onChange:function(e){return D(e.target.files[0])}}),c.a.createElement("label",{htmlFor:"book-cover"},"Book Cover"),c.a.createElement("input",{type:"file",name:"cover",id:"book-cover",placeholder:"Only .png or .jpeg",accept:"image/png, image/jpeg image/jpg",onChange:function(e){return B(e.target.files[0])}}),c.a.createElement("button",{type:"submit",className:"btn btn-submit"},"add book"))):c.a.createElement(s.a,{to:"/login"}))}function I(){var e=Object(n.useContext)(E),t=e.isAdmin,a=e.isAuth;return c.a.createElement("div",{className:"component-container "},t&&a?c.a.createElement("h3",null,"edit book"):c.a.createElement(s.a,{to:"/login"}))}function D(){var e=Object(n.useContext)(E),t=e.isAdmin,a=e.isAuth;return c.a.createElement("div",{className:"component-container "},t&&a?c.a.createElement("h3",null,"delete book"):c.a.createElement(s.a,{to:"/login"}))}var L=a(17);function P(e){L.c.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(L.c.version,"/pdf.worker.js");var t=Object(n.useState)(null),a=Object(b.a)(t,2),r=a[0],o=a[1],l=Object(n.useState)(1),s=Object(b.a)(l,2),i=s[0],u=s[1],m=e.location.state.bookpath;return c.a.createElement("div",{className:"read-book"},c.a.createElement("button",{onClick:function(){return u((function(e){return e-1}))},className:"btn-book-read btn-prev"},"previous page"),c.a.createElement("button",{onClick:function(){return u((function(e){return e+1}))},className:"btn-book-read btn-next"},"Next page"),c.a.createElement(L.a,{file:m,onLoadSuccess:function(e){var t=e.numPages;o(t)},className:"book-doc"},c.a.createElement(L.b,{pageNumber:i}),c.a.createElement("p",null,"Page ",i," of ",r)))}function T(){return c.a.createElement(s.d,null,c.a.createElement(s.b,{exact:!0,path:"/",component:i}),c.a.createElement(s.b,{path:"/login",component:h}),c.a.createElement(s.b,{path:"/signup",component:f}),c.a.createElement(s.b,{path:"/logout",component:g}),c.a.createElement(s.b,{path:"/userAccount",component:O}),c.a.createElement(s.b,{path:"/admin",component:j}),c.a.createElement(s.b,{path:"/users",component:N}),c.a.createElement(s.b,{path:"/ebooks",component:S}),c.a.createElement(s.b,{path:"/read-book/:id",component:P}),c.a.createElement(s.b,{path:"/add-book",component:w}),c.a.createElement(s.b,{path:"/edit-book",component:I}),c.a.createElement(s.b,{path:"/delete-book",component:D}),c.a.createElement(s.b,{component:u}))}var B=a(49),U=a.n(B);a(103);function q(){var e=Object(n.useContext)(E).isAuth;return c.a.createElement("div",null,c.a.createElement("nav",{className:"main-nav"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(l.c,{className:"main-nav-link",to:"/",exact:!0,activeClassName:"active"},"Home")),e?c.a.createElement("div",{className:"nav-li-div"},c.a.createElement("li",null,c.a.createElement(l.c,{className:"main-nav-link",to:"/ebooks",activeClassName:"active"},"eBooks")),c.a.createElement("li",null,c.a.createElement(l.c,{className:"main-nav-link",to:"/userAccount",activeClassName:"active"},"My Account")),c.a.createElement("li",null,c.a.createElement(l.c,{className:"main-nav-link",to:"/logout",activeClassName:"active"},"Logout"))):c.a.createElement("div",{className:"nav-li-div"},c.a.createElement("li",null,c.a.createElement(l.c,{className:"main-nav-link",to:"/login",activeClassName:"active"},"Login")),c.a.createElement("li",null,c.a.createElement(l.c,{className:"main-nav-link",to:"/signup",activeClassName:"active"},"Sign up"))))))}function F(){return c.a.createElement("header",null,c.a.createElement("img",{src:U.a,className:"App-logo",alt:"logo"}),c.a.createElement(q,null))}a(104);var J=function(){return c.a.createElement(v,null,c.a.createElement(l.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(F,null),c.a.createElement("div",{className:"app-container"},c.a.createElement(T,null)))))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(J,null)),document.getElementById("root"))},28:function(e,t,a){},46:function(e,t,a){e.exports=a.p+"static/media/default-cover-book.d2850a53.png"},49:function(e,t,a){e.exports=a.p+"static/media/ebook.3c124085.svg"},50:function(e,t,a){e.exports=a(105)},59:function(e,t,a){},60:function(e,t,a){},98:function(e,t){},99:function(e,t){}},[[50,1,2]]]);
//# sourceMappingURL=main.1872d28a.chunk.js.map