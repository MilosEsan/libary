(function(t){function e(e){for(var s,a,i=e[0],l=e[1],c=e[2],d=0,p=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&p.push(n[a][0]),n[a]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],s=!0,i=1;i<o.length;i++){var l=o[i];0!==n[l]&&(s=!1)}s&&(r.splice(e--,1),t=a(a.s=o[0]))}return t}var s={},n={app:0},r=[];function a(e){if(s[e])return s[e].exports;var o=s[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=s,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(o,s,function(e){return t[e]}.bind(null,s));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var s=o("85ec"),n=o.n(s);n.a},"0cd6":function(t,e,o){"use strict";var s=o("2218"),n=o.n(s);n.a},2218:function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var s=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},r=[],a=(o("034f"),o("2877")),i={},l=Object(a["a"])(i,n,r,!1,null,null,null),c=l.exports,u=(o("4989"),o("ab8b"),o("8c4f")),d=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("Container")],1)},p=[],f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"content-holder"},[o("nav",{staticClass:"navbar navbar-light bg-light",staticStyle:{top:"0"}},[o("div",{staticClass:"container"},[t._m(0),o("button",{staticClass:"btn btn-primary navbar-brand bg-light",staticStyle:{padding:"5px","font-size":"12px",border:"5px solid #c7bde2",right:"10px",position:"absolute","box-shadow":"0px 4px 25px rgba(0, 0, 0, 0.05)"},attrs:{type:"button"},on:{click:function(e){t.showSidebarMain=!t.showSidebarMain}}},[this.showSidebarMain?o("p",{staticStyle:{color:"green","font-weight":"bolder","margin-bottom":"0"}},[t._v("SHOW CONTENT")]):o("p",{staticStyle:{color:"#c7bde2","font-weight":"bolder","margin-bottom":"0"}},[t._v("HIDE CONTENT")])])])]),o("BookCard",{attrs:{books:t.bookData},on:{valueChanged:t.setRentedValue}}),t.showSidebarMain?t._e():o("div",[o("Booklist",{staticStyle:{transition:"all 0.5s ease-in-out"},attrs:{rentedValue:t.rentedValue,books:t.bookData}})],1)],1)},h=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h1",[o("i",{staticStyle:{"font-weight":"bold",color:"rgb(221, 214, 204)",left:"10px"}},[t._v("Coding-School-Library")])])}],b=(o("a4d3"),o("e01a"),o("d3b7"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"container",class:{show:t.showSidebar}},[o("center",[o("div",{staticClass:"control"},[o("i",{staticClass:"fas fa-angle-double-left",attrs:{id:"pic"},on:{click:function(e){return t.expand()}}},[o("p",[t._v("show list")])]),o("br")]),o("form",{staticClass:"form-inline my-2 my-lg-0"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control mr-sm-2",attrs:{placeholder:"Search Titles...",type:"text"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),o("ul",{staticClass:"list-group"},[o("p",{staticStyle:{border:"0px","max-width":"200px","box-shadow":"none"}},[t._v("Click to view description:")]),t._l(t.filteredBooks,(function(e,s){return o("section",{key:s},[e.showButton?o("p",{staticClass:"list-group-item",staticStyle:{"max-width":"500px"},on:{click:function(t){e.showButton=!e.showButton}}},[t._v(" "+t._s(e.title)+" "),o("br"),e.title==t.rentedValue?o("small",{staticClass:"rented"},[t._v("TEMPORARY UNAVAILABLE! Recently rented.")]):t._e()]):t._e(),e.showButton?t._e():o("div",{staticClass:"list-group-item",attrs:{id:"description-showed"},on:{click:function(t){e.showButton=!0}}},[o("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"}},[o("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),o("br"),o("h1",{staticStyle:{color:"white"}},[o("b",[t._v("DESCRIPTION:")])]),o("br"),o("h1",[o("i",[o("b",[t._v(t._s(e.title))])])]),o("br"),o("h2",[t._v(t._s(e.description))])])])}))],2)])],1)}),v=[],m=(o("4de4"),o("ac1f"),o("466d"),o("841c"),{props:{books:Array,rentedValue:String},data:function(){return{hidden:!0,showSidebar:!1,rentClass:"false",search:""}},methods:{expand:function(){this.showSidebar=!this.showSidebar}},computed:{filteredBooks:function(){var t=this;return this.books.filter((function(e){return e.title.toUpperCase().match(t.search.toUpperCase())}))}}}),_=m,g=(o("7c96"),Object(a["a"])(_,b,v,!1,null,"92dcf07e",null)),w=g.exports,k=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("main",{staticClass:"custom-card"},[o("h3",[t._v("To rent the book, fill out the form:")]),o("form",[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Book Title:")]),o("br"),o("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedBook,expression:"selectedBook"}],on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedBook=e.target.multiple?o:o[0]}}},[o("option",{attrs:{value:"",disabled:""}},[t._v("--Select--")]),t._l(t.books,(function(e,s){return o("option",{key:s,domProps:{value:e.title}},[t._v(t._s(e.title))])}))],2)]),o("div",{staticClass:"form-group"},[o("label",[t._v("User Name:")]),o("input",{ref:"userName",staticClass:"form-control"}),o("label",[t._v("Password:")]),o("input",{ref:"passwd",staticClass:"form-control",attrs:{type:"password"}})]),this.user.user_name&&this.user.password&&this.selectedBook?o("section",{staticClass:"rent_info"},[o("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){return t.closeTheReport()}}},[o("span",{attrs:{"aria-hidden":"true"},on:{click:function(e){return t.closeTheReport()}}},[t._v("×")])]),o("p",{staticStyle:{"margin-top":"30px","text-decoration":"underline",color:"black"}},[t._v("NEW REPORTS:")]),t._v("Book: "),o("h2",[t._v(t._s(this.selectedBook))]),t._v("assigned for: "),o("h2",[t._v(t._s(this.user.user_name))]),t._v("at: "),o("h2",[t._v(t._s(t.x.getMonth()+"."+t.x.getDate()+"."+t.x.getFullYear()))])]):t._e(),o("button",{staticClass:"btn btn-primary bg-dark",attrs:{type:"submit"},on:{click:function(e){t.rent(),t.passTheSelection()}}},[t._v("Submit")]),o("div",{staticClass:"list-group"})])])},y=[],x=(o("99af"),{props:{books:Array},data:function(){return{user:{user_name:"",password:""},showInfo:!1,selectedBook:"",x:new Date}},methods:{rent:function(){this.user.password=this.$refs["passwd"].value,this.user.user_name=this.$refs["userName"].value,this.$refs["passwd"].value&&this.$refs["userName"].value&&this.selectedBook?alert("Book '".concat(this.selectedBook,"' rented by ").concat(this.user.user_name," at ")+"<<"+this.x.getMonth()+"."+this.x.getDate()+"."+this.x.getFullYear()+">>"):alert("Selected opotion, User Name or Password is missing! Please, check your input.")},passTheSelection:function(){this.$refs["userName"].value="",this.$refs["passwd"].value="",this.$emit("valueChanged",this.selectedBook)},closeTheReport:function(){this.$refs["userName"].value="",this.$refs["passwd"].value="",this.selectedBook=""}}}),C=x,S=(o("e19f"),Object(a["a"])(C,k,y,!1,null,"44711313",null)),B=S.exports,O={props:{books:Array},data:function(){return{bookData:[],rentedValue:"",showSidebarMain:!1}},mounted:function(){var t=this;fetch("https://www.googleapis.com/books/v1/volumes?q=%22coding%22",{method:"get"}).then((function(t){return t.json()})).then((function(e){for(var o,s,n,r=0;r<e.items.length;r++)o=e.items[r].volumeInfo.title,s=e.items[r].volumeInfo.description,n=e.items[r].id,t.bookData.push({title:o,id:n,description:s,showButton:!0})}))},methods:{setRentedValue:function(t){this.rentedValue=t}},components:{Booklist:w,BookCard:B}},T=O,N=(o("0cd6"),Object(a["a"])(T,f,h,!1,null,"412f400e",null)),$=N.exports,j={name:"Home",components:{Container:$}},E=j,P=Object(a["a"])(E,d,p,!1,null,null,null),M=P.exports;s["a"].use(u["a"]);var R=[{path:"/",name:"Home",component:M}],D=new u["a"]({routes:R}),V=D;s["a"].config.productionTip=!1,s["a"].config.devtools=!1,new s["a"]({router:V,render:function(t){return t(c)}}).$mount("#app")},"7c96":function(t,e,o){"use strict";var s=o("a24b"),n=o.n(s);n.a},"85ec":function(t,e,o){},a24b:function(t,e,o){},dcce:function(t,e,o){},e19f:function(t,e,o){"use strict";var s=o("dcce"),n=o.n(s);n.a}});
//# sourceMappingURL=app.d59512e9.js.map