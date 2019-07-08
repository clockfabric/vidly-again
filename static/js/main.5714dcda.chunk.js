(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(44)},35:function(e,t,a){},41:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(26),i=a.n(l),c=(a(35),a(10)),o=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light mb-4"},r.a.createElement(c.b,{to:"/",className:"navbar-brand"},"Vidly"),r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item nav-link"},r.a.createElement(c.c,{to:"/movies",className:"nav-link"},"Movies")),r.a.createElement("li",{className:"nav-item nav-link"},r.a.createElement(c.c,{to:"/customers",className:"nav-link"},"Customers")),r.a.createElement("li",{className:"nav-item nav-link"},r.a.createElement(c.c,{to:"/rentals",className:"nav-link"},"Rentals")),r.a.createElement("li",{className:"nav-item nav-link"},r.a.createElement(c.c,{to:"/login",className:"nav-link"},"Login")),r.a.createElement("li",{className:"nav-item nav-link"},r.a.createElement(c.c,{to:"/register",className:"nav-link"},"Register"))))},m=a(29),s=a(14),u=function(e){var t=e.numberOfItems,a=e.itemsPerPage,n=e.currentPage,l=e.handlePageChanges,i=Math.ceil(t/a);if(i<=1)return null;for(var c=[],o=1;o<=i;o++)c.push(o);return r.a.createElement("nav",{"aria-label":"Page navigation"},r.a.createElement("ul",{className:"pagination"},c.map(function(e){return r.a.createElement("li",{key:e,style:{cursor:"pointer"},className:e===n?"page-item active":"page-item",onClick:function(){return l(e)}},r.a.createElement("span",{className:"page-link"},e))})))},d=function(e){var t=e.genreList,a=e.currentGenre,n=e.handleGenreSelection;return r.a.createElement("ul",{className:"list-group mt-5"},t.map(function(e){return r.a.createElement("li",{key:e._id,style:{cursor:"pointer"},className:a===e.name?"list-group-item active":"list-group-item",onClick:function(){return n(e.name)}},e.name)}))},b=function(e){var t=e.sortDirection,a=e.sortCategoryIndex,n=e.movieTableHeadingsList,l=e.handleSort;return r.a.createElement("thead",null,r.a.createElement("tr",null,n.map(function(e,n){return r.a.createElement("th",{key:n,style:{cursor:"pointer"},onClick:function(){return l(n)}},r.a.createElement("span",null,e," ",a===n?r.a.createElement("i",{className:t?"fa fa-angle-double-up":"fa fa-angle-double-down"}):""))}),r.a.createElement("th",null),r.a.createElement("th",null)))},f=function(e){return r.a.createElement("i",{style:{cursor:"pointer"},className:e.liked?"fa fa-heart":"fa fa-heart-o",onClick:function(){return e.handleLike(e.id)}})},h=function(e){var t=e.id,a=e.title,n=e.genre,l=e.numMovieInGenre,i=e.stock,c=e.rate,o=e.deleteMovie,m=e.handleLike,s=e.liked;return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("a",{href:"/movies/".concat(t)},a)),r.a.createElement("td",null,n.name),r.a.createElement("td",null,i),r.a.createElement("td",null,c),r.a.createElement("td",null,r.a.createElement(f,{liked:s,handleLike:m,id:t})),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-outline-danger btn-sm",onClick:function(){return o(t,l)}},"Delete")))},v=function(e){var t=e.pagedMovies,a=e.length,n=e.handleDeleteMovie,l=e.handleLike;return r.a.createElement("tbody",null,t.map(function(e){return r.a.createElement(h,{key:e._id,id:e._id,title:e.title,genre:e.genre,numMovieInGenre:a,stock:e.numberInStock,rate:e.dailyRentalRate,liked:e.liked,deleteMovie:n,handleLike:l})}))},p=[{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"}];function g(){return p.filter(function(e){return e})}var E=[{_id:"5b21ca3eeb7f6fbccd471815",title:"Terminator",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:6,dailyRentalRate:2.5,publishDate:"2018-01-03T19:04:28.809Z",liked:!1},{_id:"5b21ca3eeb7f6fbccd471816",title:"Die Hard",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:5,dailyRentalRate:2.5,liked:!1},{_id:"5b21ca3eeb7f6fbccd471817",title:"Get Out",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:8,dailyRentalRate:3.5,liked:!1},{_id:"5b21ca3eeb7f6fbccd471819",title:"Trip to Italy",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5,liked:!1},{_id:"5b21ca3eeb7f6fbccd47181a",title:"Airplane",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5,liked:!1},{_id:"5b21ca3eeb7f6fbccd47181b",title:"Wedding Crashers",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5,liked:!1},{_id:"5b21ca3eeb7f6fbccd47181e",title:"Gone Girl",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:7,dailyRentalRate:4.5,liked:!1},{_id:"5b21ca3eeb7f6fbccd47181f",title:"The Sixth Sense",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:4,dailyRentalRate:3.5,liked:!1},{_id:"5b21ca3eeb7f6fbccd471821",title:"The Avengers",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:7,dailyRentalRate:3.5,liked:!1},{_id:"5b21ca3eeb7f6fbccd471822",title:"Infinity War",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:4,dailyRentalRate:5,liked:!1},{_id:"5b21ca3eeb7f6fbccd471823",title:"End Game",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:6,dailyRentalRate:4.9,liked:!1}];var k=a(16),y=a.n(k);var S=function(e){return r.a.createElement("input",{className:"mb-4 w-100",value:e.searchField,type:"text",placeholder:"Search...",onChange:function(t){return e.handleFilterChange(t)}})},O=function(e){var t=E,a=Object(n.useState)(t),l=Object(s.a)(a,2),i=l[0],o=l[1],f=Object(n.useState)(1),h=Object(s.a)(f,2),p=h[0],k=h[1],O=Object(n.useState)(""),j=Object(s.a)(O,2),R=j[0],N=j[1],I=g();I=[{_id:1,name:"All Genres"}].concat(Object(m.a)(I));var _=Object(n.useState)(I[0].name),w=Object(s.a)(_,2),C=w[0],T=w[1],G=["Title","Genre","Stock","Rate"],L=["title","genre.name","numberInStock","dailyRentalRate"],M=Object(n.useState)(!0),P=Object(s.a)(M,2),A=P[0],x=P[1],D=Object(n.useState)(0),q=Object(s.a)(D,2),F=q[0],B=q[1];Object(n.useEffect)(function(){V(p)});var W=function(e,t){var a=i.filter(function(t){return t._id!==e});p>1&&t-1===4*(p-1)&&k(p-1),o(a)},H=function(e){var t=i.map(function(t){return t._id===e&&(t.liked=!t.liked),t});o(t)},V=function(e){k(e)},J=function(e){B(e),x(!A)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container mt-4"},r.a.createElement("div",{className:"row justify-content-md-center"},r.a.createElement("div",{className:"col col-sm-12 col-md-12 col-lg-3 mb-4"},r.a.createElement(d,{currentGenre:C,genreList:I,handleGenreSelection:function(e){T(e),k(1)}})),r.a.createElement("div",{className:"col"},r.a.createElement(S,{searchField:R,handleFilterChange:function(e){var a=e.currentTarget.value;N(a);var n=t.filter(function(e){return e.title.toLowerCase().startsWith(a.toLowerCase())});k(1),o(n)}}),function(){var e,t,a=(e=i,"All Genres"===(t=C)?e:e.filter(function(e){return e.genre.name===t})),n=a.length,l=function(e,t,a){var n=(t-1)*a;return y()(e).slice(n).take(a).value()}(function(e,t,a){return a?y.a.orderBy(e,t,"asc"):y.a.orderBy(e,t,"desc")}(a,L[F],A),p,4);return n?r.a.createElement("div",null,r.a.createElement("h5",null,"Showing ".concat(n," movies in the database. (Category: ").concat(C,")")),r.a.createElement(c.b,{to:"/movies/new",className:"btn btn-primary mb-4"},"New Movie"),r.a.createElement("br",null),r.a.createElement("table",{className:"table table-striped"},r.a.createElement(b,{handleSort:J,sortCategoryIndex:F,movieTableHeadingsList:G,sortDirection:A}),r.a.createElement(v,{pagedMovies:l,length:n,handleDeleteMovie:W,handleLike:H})),r.a.createElement(u,{numberOfItems:n,itemsPerPage:4,handlePageChanges:V,currentPage:p})):r.a.createElement("h5",null,"No movies in the database!")}()))))},j=function(){return r.a.createElement("h1",null,"Customers")},R=function(){return r.a.createElement("h1",null,"Rentals")},N=function(){return r.a.createElement("h1",null,"Not Found")},I=a(4),_=a(5),w=a(7),C=a(6),T=a(8),G=a(2),L=a.n(G),M=a(23),P=a(17),A=a(18),x=function(e){function t(){return Object(I.a)(this,t),Object(w.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.label,n=e.error,l=Object(A.a)(e,["name","label","error"]);return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",Object.assign({},l,{name:t,id:t,className:"form-control"})),n&&r.a.createElement("div",{className:"alert alert-danger"},n))}}]),t}(n.Component),D=function(e){function t(){return Object(I.a)(this,t),Object(w.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.label,n=e.options,l=e.error,i=Object(A.a)(e,["name","label","options","error"]);return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("select",Object.assign({name:t,id:t},i,{className:"form-control"}),r.a.createElement("option",{value:""}),n.map(function(e){return r.a.createElement("option",{key:e._id,value:e._id},e.name)})),l&&r.a.createElement("div",{className:"alert alert-danger"},l))}}]),t}(n.Component),q=function(e){function t(){var e,a;Object(I.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(w.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).validate=function(){var e=a.state.data,t=L.a.validate(e,a.schema,{abortEarly:!1});if(!t.error)return null;var n={},r=!0,l=!1,i=void 0;try{for(var c,o=t.error.details[Symbol.iterator]();!(r=(c=o.next()).done);r=!0){var m=c.value;n[m.path[0]]=m.message}}catch(s){l=!0,i=s}finally{try{r||null==o.return||o.return()}finally{if(l)throw i}}return n},a.validateProperty=function(e){var t=e.name,n=e.value,r=Object(P.a)({},t,n),l=Object(P.a)({},t,a.schema[t]),i=L.a.validate(r,l,{abortEarly:!0}).error;return i?i.details[0].message:null},a.handleSubmit=function(e){e.preventDefault();var t=a.validate();a.setState({errors:t||{}}),t||a.doSubmit()},a.handleChange=function(e){var t=e.currentTarget,n=Object(M.a)({},a.state.errors),r=a.validateProperty(t);r?n[t.name]=r:delete n[t.name],a.setState({errors:n});var l=Object(M.a)({},a.state.data);l[t.name]=t.value,a.setState({data:l})},a}return Object(T.a)(t,e),Object(_.a)(t,[{key:"renderInput",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",n=this.state,l=n.data,i=n.errors;return r.a.createElement(x,{name:e,type:a,value:l[e],label:t,onChange:this.handleChange,error:i[e]})}},{key:"renderSelect",value:function(e,t,a){var n=this.state,l=n.data,i=n.errors;return r.a.createElement(D,{name:e,value:l[e],label:t,options:a,onChange:this.handleChange,error:i[e]})}},{key:"renderButton",value:function(e){return r.a.createElement("button",{disabled:this.validate(),className:"btn btn-primary"},e)}}]),t}(n.Component),F=function(e){function t(){var e,a;Object(I.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(w.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).state={data:{title:"",genreId:"",numberInStock:"",dailyRentalRate:""},genres:[],errors:{}},a.schema={_id:L.a.string(),title:L.a.string().required().label("Title"),genreId:L.a.string().required().label("Genre"),numberInStock:L.a.number().required().min(0).max(100).label("Number in Stock"),dailyRentalRate:L.a.number().required().min(0).max(10).label("Daily Rental Rate")},a.doSubmit=function(){!function(e){var t=E.find(function(t){return t._id===e._id})||{};t.title=e.title,t.genre=p.find(function(t){return t._id===e.genreId}),t.numberInStock=e.numberInStock,t.dailyRentalRate=e.dailyRentalRate,t._id||(t._id=Date.now().toString(),E.push(t))}(a.state.data),a.props.history.push("/movies")},a}return Object(T.a)(t,e),Object(_.a)(t,[{key:"componentDidMount",value:function(){var e=g();this.setState({genres:e}),console.log(this.props.match.params);var t=this.props.match.params.id;if(console.log(t),t){var a,n=(a=t,E.find(function(e){return e._id===a}));if(!n)return this.props.history.replace("/not-found");this.setState({data:this.mapToViewModel(n)})}}},{key:"mapToViewModel",value:function(e){return{_id:e._id,title:e.title,genreId:e.genre._id,numberInStock:e.numberInStock,dailyRentalRate:e.dailyRentalRate}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Movie Form"),r.a.createElement("form",{onSubmit:this.handleSubmit},this.renderInput("title","Title"),this.renderSelect("genreId","Genre",this.state.genres),this.renderInput("numberInStock","Number in Stock","number"),this.renderInput("dailyRentalRate","Rate"),this.renderButton("Save")))}}]),t}(q),B=function(e){function t(){var e,a;Object(I.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(w.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).state={data:{userName:"",password:""},errors:{}},a.schema={userName:L.a.string().required().label("Username"),password:L.a.string().required().label("Password")},a.doSubmit=function(){console.log("Submitted...")},a}return Object(T.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement("form",{onSubmit:this.handleSubmit},this.renderInput("userName","Username"),this.renderInput("password","Password","password"),this.renderButton("Login")))}}]),t}(q),W=function(e){function t(){var e,a;Object(I.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(w.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).state={data:{email:"",password:"",name:""},errors:{}},a.schema={email:L.a.string().required().email().label("Email"),password:L.a.string().required().min(5).label("Password"),name:L.a.string().required().label("Name")},a.doSubmit=function(){console.log("Registered...")},a}return Object(T.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Register"),r.a.createElement("form",{onSubmit:this.handleSubmit},this.renderInput("email","Email"),this.renderInput("password","Password","password"),this.renderInput("name","Name"),this.renderButton("Register")))}}]),t}(q),H=a(13);a(41);var V=function(){return r.a.createElement(c.a,null,r.a.createElement("main",{className:"container"},r.a.createElement(o,null),r.a.createElement(H.d,null,r.a.createElement(H.b,{path:"/movies/new",component:F}),r.a.createElement(H.b,{path:"/movies/:id",component:F}),r.a.createElement(H.b,{path:"/movies",component:O}),r.a.createElement(H.b,{path:"/login",component:B}),r.a.createElement(H.b,{path:"/register",component:W}),r.a.createElement(H.b,{path:"/rentals",component:R}),r.a.createElement(H.b,{path:"/customers",component:j}),r.a.createElement(H.b,{path:"/notfound",component:N}),r.a.createElement(H.a,{from:"/",exact:!0,to:"movies"}),r.a.createElement(H.a,{to:"/notfound"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(42),a(43);i.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.5714dcda.chunk.js.map