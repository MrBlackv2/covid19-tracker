(this["webpackJsonpcovid19-tracker"]=this["webpackJsonpcovid19-tracker"]||[]).push([[0],{258:function(e,t,a){e.exports=a(446)},263:function(e,t,a){},446:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(15),c=a.n(l),o=(a(263),a(35)),i=a(16),s=a(114),u=a(49),m=a(516),d=a(517),p=a(226),f=a(492),h=a(520),g=a(513),E=a(115),b=a(116),v=a(495),C=a(497),y=a(88),O=a(498),j=a(448),w=a(209),k=a.n(w),x=a(208),S=a.n(x);function P(e){var t=e.darkMode,a=e.handleDarkModeChange,n=e.handleDrawerToggle,l=e.drawerWidth,c=Object(f.a)((function(e){return Object(h.a)({title:{flexGrow:1},darkSwitch:{marginLeft:e.spacing(2)},appBar:Object(o.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(l,"px)"),marginLeft:l}),menuButton:Object(o.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"})})}))();return r.a.createElement(v.a,{position:"sticky",className:c.appBar},r.a.createElement(C.a,null,r.a.createElement(j.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:n,className:c.menuButton},r.a.createElement(S.a,null)),r.a.createElement(y.a,{variant:"h6",className:c.title},"Corona Tracker"),r.a.createElement(O.a,{className:c.darkSwitch,checked:t,onChange:function(e){return a(e.target.checked)}}),r.a.createElement(k.a,null)))}var N=a(501),D=a(506),M=a(507),I=a(505),T=a(500),R=a(518),H=a(515),W=a(504),B=a(447),K=a(11),L=a(522),V=a(210),z=a.n(V),A=a(211),U=a.n(A),G=a(499),q=a(523);function J(e){var t=e.headCells,a=e.classes,n=e.order,l=e.orderBy,c=e.onRequestSort;return r.a.createElement(G.a,null,r.a.createElement(T.a,null,t.map((function(e){return r.a.createElement(N.a,{key:e.id,align:e.numeric?"right":"left",padding:"default",sortDirection:l===e.id&&n},r.a.createElement(q.a,{active:l===e.id,direction:l===e.id?n:"asc",onClick:(t=e.id,function(e){c(e,t)})},e.label,l===e.id?r.a.createElement("span",{className:a.visuallyHidden},"desc"===n?"sorted descending":"sorted ascending"):null));var t}))))}var F=a(110),$=a.n(F),Q=Object(f.a)((function(e){return{paper:{position:"absolute",minWidth:300,maxWidth:"95%",backgroundColor:e.palette.background.paper,color:e.palette.text.primary,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),top:"50%",left:"50%",transform:"translate(-50%, -50%)"},header:{display:"flex",justifyContent:"space-between"}}}));function X(e){var t=e.data,a=e.allProps,n=e.idKey,l=e.closeModal,c=Q();return r.a.createElement("div",{className:c.paper},r.a.createElement("div",{className:c.header},r.a.createElement("h2",null,t[n]," Details"),r.a.createElement(j.a,{onClick:function(){return l()}},r.a.createElement($.a,null))),r.a.createElement("div",null,a.map((function(e){return r.a.createElement("div",{key:e.id},e.name,": ",t[e.id])}))))}var Y=a(502),Z=a(519),_=a(503),ee=Object(f.a)((function(e){return{paper:{position:"absolute",minWidth:300,maxWidth:"95%",backgroundColor:e.palette.background.paper,color:e.palette.text.primary,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),top:"50%",left:"50%",transform:"translate(-50%, -50%)",display:"flex",flexDirection:"column"},header:{display:"flex",justifyContent:"space-between"}}}));function te(e){var t=e.activeProps,a=e.setActiveProps,n=e.allProps,l=e.closeModal,c=ee(),o=function(e){e.target.checked?a(t.concat([e.target.name])):a(t.filter((function(t){return t!==e.target.name})))};return r.a.createElement("div",{className:c.paper},r.a.createElement("div",{className:c.header},r.a.createElement("h2",null,"Add/Remove Columns"),r.a.createElement(j.a,{onClick:function(){return l()}},r.a.createElement($.a,null))),r.a.createElement(Y.a,{control:r.a.createElement(Z.a,{checked:t.length===n.length,onChange:function(e){e.target.checked?a(n.map((function(e){return e.id}))):a([])},name:"all"}),label:"All"}),r.a.createElement(_.a,null),n.map((function(e){return r.a.createElement(Y.a,{key:e.id,control:r.a.createElement(Z.a,{checked:t.includes(e.id),onChange:o,name:e.id}),label:e.name})})))}function ae(e){var t=e.row,a=e.activeProps,n=e.setDetailsOpen,l=e.headCell;return r.a.createElement(T.a,{hover:!0,tabIndex:-1,key:t.country,onClick:function(){return n(t)}},l(t),a.map((function(e){return r.a.createElement(N.a,{key:e,align:"right"},t[e])})))}var ne=Object(f.a)((function(e){return{tableRoot:{display:"flex",flexDirection:"column",maxHeight:"100%"},paper:{overflow:"auto",maxHeight:"100%",width:"100%"},toolbar:{display:"flex",alignItems:"center",padding:e.spacing(1)},container:{maxHeight:"calc(100% - 52px)"},table:{minWidth:750},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1},search:{position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(K.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(K.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(o.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"})}}));function re(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}function le(e){var t=e.rows,a=e.headCells,l=e.allProps,c=e.search,o=e.idKey,s=e.headCell,u=ne(),m=Object(n.useState)("asc"),d=Object(i.a)(m,2),p=d[0],f=d[1],h=Object(n.useState)(o),g=Object(i.a)(h,2),E=g[0],b=g[1],v=Object(n.useState)(0),C=Object(i.a)(v,2),y=C[0],O=C[1],j=Object(n.useState)(10),w=Object(i.a)(j,2),k=w[0],x=w[1],S=Object(n.useState)(null),P=Object(i.a)(S,2),K=P[0],V=P[1],A=Object(n.useState)(""),G=Object(i.a)(A,2),q=G[0],F=G[1],$=Object(n.useState)(!1),Q=Object(i.a)($,2),Y=Q[0],Z=Q[1],_=Object(n.useState)(l.map((function(e){return e.id}))),ee=Object(i.a)(_,2),le=ee[0],ce=ee[1],oe=q.length<1?t:c(t,q),ie=k-Math.min(k,oe.length-y*k);return r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,{className:u.tableRoot},r.a.createElement("div",{className:u.toolbar},r.a.createElement("div",{className:u.search},r.a.createElement("div",{className:u.searchIcon},r.a.createElement(z.a,null)),r.a.createElement(L.a,{placeholder:"Search...",classes:{root:u.inputRoot,input:u.inputInput},onChange:function(e){return F(e.target.value)}})),r.a.createElement(W.a,{onClick:function(){return Z(!0)}},r.a.createElement(U.a,null))),r.a.createElement(I.a,{className:u.container},r.a.createElement(D.a,{stickyHeader:!0,className:u.table,"aria-labelledby":"tableTitle","aria-label":"table"},r.a.createElement(J,{headCells:a.filter((function(e){return le.includes(e.id)||e.id===o})),classes:u,order:p,orderBy:E,onRequestSort:function(e,t){f(E===t&&"desc"===p?"asc":"desc"),b(t)}}),r.a.createElement(M.a,null,function(e,t){var a=e.map((function(e,t){return[e,t]}));return a.sort((function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]=a[1]})),a.map((function(e){return e[0]}))}(oe,function(e,t){return"desc"===e?function(e,a){return re(e,a,t)}:function(e,a){return-re(e,a,t)}}(p,E)).slice(y*k,y*k+k).map((function(e,t){return r.a.createElement(ae,{key:e[o],row:e,activeProps:le,setDetailsOpen:V,headCell:s})})),ie>0&&r.a.createElement(T.a,{style:{height:53*ie}},r.a.createElement(N.a,{colSpan:5}))))),r.a.createElement(R.a,{rowsPerPageOptions:[5,10,25],component:"div",count:oe.length,rowsPerPage:k,page:y,onChangePage:function(e,t){O(t)},onChangeRowsPerPage:function(e){x(parseInt(e.target.value,10)),O(0)}})),r.a.createElement(H.a,{open:null!==K,onClose:function(){return V(null)}},r.a.createElement("div",null,r.a.createElement(X,{data:K,allProps:l,idKey:o,closeModal:function(){return V(null)}}))),r.a.createElement(H.a,{open:Y,onClose:function(){return Z(!1)}},r.a.createElement("div",null,r.a.createElement(te,{activeProps:le,setActiveProps:ce,allProps:l,closeModal:function(){return Z(!1)}}))))}var ce=Object(f.a)((function(e){return{worldPage:{padding:e.spacing(1),position:"absolute",top:0,left:0,bottom:0,right:0},tableHolder:{height:"100%",width:"100%",position:"relative"}}})),oe=[{id:"cases",name:"Cases"},{id:"todayCases",name:"Cases (Today)"},{id:"casesPerOneMillion",name:"Cases per Million"},{id:"deaths",name:"Deaths"},{id:"todayDeaths",name:"Deaths (Today)"},{id:"deathsPerOneMillion",name:"Deaths per Million"},{id:"recovered",name:"Recovered"},{id:"active",name:"Active"},{id:"critical",name:"Critical"},{id:"tests",name:"Tests"},{id:"testsPerOneMillion",name:"Tests per Million"}],ie=[{id:"country",label:"Country",numeric:!1}].concat(oe.map((function(e){return{id:e.id,label:e.name,numeric:!0}})));function se(e,t){return e.filter((function(e){return e.country.toLowerCase().includes(t.toLowerCase())}))}var ue=function(e){return r.a.createElement(N.a,{align:"left",style:{display:"flex",alignItems:"center"}},r.a.createElement("img",{style:{height:20,marginRight:10},src:e.countryInfo.flag,alt:e.country}),e.country)};function me(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1],c=ce(),o=function(){fetch("https://corona.lmao.ninja/v2/countries?sort=cases").then((function(e){return e.json()})).then((function(e){return l(e)})).catch((function(e){return console.error(e)}))};return Object(n.useEffect)((function(){o(),setInterval((function(){o()}),6e4)}),[]),r.a.createElement("div",{className:c.worldPage},r.a.createElement("div",{className:c.tableHolder},r.a.createElement(le,{idKey:"country",rows:a,headCells:ie,allProps:oe,search:se,headCell:ue})))}var de=a(510),pe=a(521),fe=a(514),he=a(508),ge=a(20),Ee=[{id:"cases",name:"Cases"},{id:"todayCases",name:"Cases (Today)"},{id:"casesPerOneMillion",name:"Cases per Million"},{id:"deaths",name:"Deaths"},{id:"todayDeaths",name:"Deaths (Today)"},{id:"deathsPerOneMillion",name:"Deaths per Million"},{id:"recovered",name:"Recovered"},{id:"active",name:"Active"},{id:"critical",name:"Critical"},{id:"tests",name:"Tests"},{id:"testsPerOneMillion",name:"Tests per Million"}],be=Object(f.a)((function(e){return{formControl:{margin:e.spacing(2),minWidth:120},selectEmpty:{marginTop:e.spacing(2)},paper:{position:"absolute",top:e.spacing(1),left:e.spacing(1),right:e.spacing(1),bottom:e.spacing(1),display:"flex",flexDirection:"column",overflow:"hidden"},chart:{flex:"1 1 auto",padding:10}}}));function ve(){var e=be(),t=Object(n.useState)(null),a=Object(i.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(Ee[0].id),s=Object(i.a)(o,2),u=s[0],m=s[1],d=Object(n.useState)(10),p=Object(i.a)(d,2),f=p[0],h=p[1],g=Object(n.useState)([]),E=Object(i.a)(g,2),b=E[0],v=E[1],C=Ee.find((function(e){return e.id===u})),y=C?C.name:u,O=function(){fetch("https://corona.lmao.ninja/v2/countries?sort=cases").then((function(e){return e.json()})).then((function(e){return v(e)})).catch((function(e){return console.error(e)}))};Object(n.useEffect)((function(){O(),setInterval((function(){O()}),6e4)}),[]);var j=b.slice().sort((function(e,t){return e[u]<t[u]?1:e[u]>t[u]?-1:0})).filter((function(e,t){return f>0?t<f:t>=b.length+f}));return r.a.createElement(B.a,{className:e.paper},r.a.createElement("div",null,r.a.createElement(de.a,{className:e.formControl},r.a.createElement(pe.a,null,"Metric"),r.a.createElement(fe.a,{value:u,onChange:function(e){return m(e.target.value)}},Ee.map((function(e){return r.a.createElement(he.a,{value:e.id,key:e.id},e.name)})))),r.a.createElement(de.a,{className:e.formControl},r.a.createElement(pe.a,null,"View"),r.a.createElement(fe.a,{value:f,onChange:function(e){return h(e.target.value)}},r.a.createElement(he.a,{value:10},"Top 10"),r.a.createElement(he.a,{value:20},"Top 25"),r.a.createElement(he.a,{value:50},"Top 50"),r.a.createElement(he.a,{value:-10},"Bottom 10"),r.a.createElement(he.a,{value:-25},"Bottom 25"),r.a.createElement(he.a,{value:-50},"Bottom 50"),r.a.createElement(he.a,{value:1e3},"All")))),r.a.createElement("div",{className:e.chart},r.a.createElement(ge.f,null,r.a.createElement(ge.b,{data:j,margin:{top:5,right:20,left:20,bottom:5}},r.a.createElement(ge.c,{strokeDasharray:"3 3"}),r.a.createElement(ge.h,{dataKey:"country"}),r.a.createElement(ge.i,null),r.a.createElement(ge.g,{labelStyle:{color:"black"},formatter:function(e,t,a){return[a.value,y]}}),r.a.createElement(ge.a,{dataKey:u,fill:"#8884d8",onClick:function(e){return c(e)}})))),r.a.createElement(H.a,{open:null!==l,onClose:function(){return c(null)}},r.a.createElement("div",null,r.a.createElement(X,{data:l,allProps:Ee,idKey:"country",closeModal:function(){return c(null)}}))))}var Ce=Object(f.a)((function(e){return{statesPage:{padding:e.spacing(1),position:"absolute",top:0,left:0,bottom:0,right:0},tableHolder:{height:"100%",width:"100%",position:"relative"}}})),ye=[{id:"positive",name:"Positive"},{id:"negative",name:"Negative"},{id:"grade",name:"Grade"},{id:"hospitalizedCurrently",name:"Hospitalized (Current)"},{id:"hospitalizedCumulative",name:"Hospitalized (Cum.)"},{id:"inIcuCurrently",name:"In ICU (Current)"},{id:"inIcuCumulative",name:"In ICU (Cum.)"},{id:"onVentilatorCurrently",name:"On Ventilator (Current)"},{id:"onVentilatorCumulative",name:"On Ventilator (Cum.)"},{id:"recovered",name:"Recovered"},{id:"death",name:"Deaths"},{id:"totalTestResults",name:"Total Tests"}],Oe=[{id:"state",label:"State",numeric:!1}].concat(ye.map((function(e){return{id:e.id,label:e.name,numeric:!0}})));function je(e,t){return e.filter((function(e){return e.state.toLowerCase().includes(t.toLowerCase())}))}var we=function(e){return r.a.createElement(N.a,{align:"left",style:{display:"flex",alignItems:"center"}},e.state)};function ke(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Ce(),o=function(){fetch("https://covidtracking.com/api/v1/states/current.json").then((function(e){return e.json()})).then((function(e){return l(e)})).catch((function(e){return console.error(e)}))};return Object(n.useEffect)((function(){o(),setInterval((function(){o()}),6e4)}),[]),r.a.createElement("div",{className:c.statesPage},r.a.createElement("div",{className:c.tableHolder},r.a.createElement(le,{idKey:"state",rows:a,headCells:Oe,allProps:ye,search:je,headCell:we})))}var xe=a(509),Se=a(449),Pe=a(512),Ne=a(511),De=a(222),Me=a.n(De),Ie=a(225),Te=a.n(Ie),Re=a(224),He=a.n(Re),We=a(223),Be=a.n(We);function Ke(e){var t=e.icon,a=e.primary,l=e.to,c=Object(n.useMemo)((function(){return r.a.forwardRef((function(e,t){return r.a.createElement(s.b,Object.assign({to:l,ref:t},e))}))}),[l]);return r.a.createElement("li",null,r.a.createElement(Se.a,{button:!0,component:c},t?r.a.createElement(Ne.a,null,t):null,r.a.createElement(Pe.a,{primary:a})))}function Le(){return r.a.createElement("div",null,r.a.createElement(v.a,{position:"sticky"},r.a.createElement(C.a,null)),r.a.createElement(xe.a,null,r.a.createElement(Ke,{to:"/states",primary:"U.S. Data",icon:r.a.createElement(Me.a,null)}),r.a.createElement(Ke,{to:"/statecharts",primary:"U.S. Charts",icon:r.a.createElement(Be.a,null)}),r.a.createElement(Ke,{to:"/world",primary:"World Data",icon:r.a.createElement(He.a,null)}),r.a.createElement(Ke,{to:"/worldcharts",primary:"World Charts",icon:r.a.createElement(Te.a,null)})))}var Ve=a(149);var ze=Object(f.a)((function(e){return{formControl:{margin:e.spacing(2),minWidth:120},selectEmpty:{marginTop:e.spacing(2)},paper:{position:"absolute",top:e.spacing(1),left:e.spacing(1),right:e.spacing(1),bottom:e.spacing(1),display:"flex",flexDirection:"column",overflow:"hidden"},chart:{flex:"1 1 auto",padding:10}}})),Ae=[{id:"positive",name:"Positive"},{id:"negative",name:"Negative"},{id:"grade",name:"Grade"},{id:"hospitalizedCurrently",name:"Hospitalized (Current)"},{id:"hospitalizedCumulative",name:"Hospitalized (Cum.)"},{id:"inIcuCurrently",name:"In ICU (Current)"},{id:"inIcuCumulative",name:"In ICU (Cum.)"},{id:"onVentilatorCurrently",name:"On Ventilator (Current)"},{id:"onVentilatorCumulative",name:"On Ventilator (Cum.)"},{id:"recovered",name:"Recovered"},{id:"death",name:"Deaths"},{id:"totalTestResults",name:"Total Tests"}];function Ue(){var e=ze(),t=Object(n.useState)(""),a=Object(i.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)("positive"),s=Object(i.a)(o,2),u=s[0],m=s[1],d=Object(n.useState)([]),p=Object(i.a)(d,2),f=p[0],h=p[1],g=Ae.find((function(e){return e.id===u})),E=g?g.name:u,b=f.reduce((function(e,t){return e.add(t.state),e}),new Set),v=Array.from(b),C=function(){fetch("https://covidtracking.com/api/v1/states/daily.json").then((function(e){return e.json()})).then((function(e){return function(e){return e.map((function(e){var t=e.date.toString(),a=t.substr(0,4),n=t.substr(4,2),r=t.substr(6,2);return Object(Ve.a)({},e,{date:new Date(+a,+n-1,+r)})}))}(e)})).then((function(e){h(e),c(e[0].state)})).catch((function(e){return console.error(e)}))};Object(n.useEffect)((function(){C()}),[]);var y=f.slice().filter((function(e){return e.state===l})).sort((function(e,t){return e.date<t.date?-1:e.date>t.date?1:0})).map((function(e){return Object(Ve.a)({},e,{date:e.date.toLocaleDateString()})}));return r.a.createElement(B.a,{className:e.paper},r.a.createElement("div",null,r.a.createElement(de.a,{className:e.formControl},r.a.createElement(pe.a,null,"State"),r.a.createElement(fe.a,{value:l,onChange:function(e){return c(e.target.value)}},v.map((function(e){return r.a.createElement(he.a,{value:e,key:e},e)})))),r.a.createElement(de.a,{className:e.formControl},r.a.createElement(pe.a,null,"Metric"),r.a.createElement(fe.a,{value:u,onChange:function(e){return m(e.target.value)}},Ae.map((function(e){return r.a.createElement(he.a,{value:e.id,key:e.id},e.name)}))))),r.a.createElement("div",{className:e.chart},r.a.createElement(ge.f,null,r.a.createElement(ge.e,{data:y,margin:{top:5,right:20,left:20,bottom:5}},r.a.createElement(ge.c,{strokeDasharray:"3 3"}),r.a.createElement(ge.h,{dataKey:"date"}),r.a.createElement(ge.i,null),r.a.createElement(ge.g,{labelStyle:{color:"black"},formatter:function(e,t,a){return[a.value,E]}}),r.a.createElement(ge.d,{type:"monotone",dataKey:u,stroke:"#8884d8"})))))}var Ge=function(){var e=Object(n.useState)("true"===localStorage.getItem("darkMode")),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),v=Object(i.a)(c,2),C=v[0],y=v[1],O=Object(p.a)({palette:{primary:E.a,secondary:b.a,type:a?"dark":"light"}}),j=Object(f.a)(Object(h.a)({root:{background:O.palette.background.default,position:"absolute",top:0,left:0,right:0,bottom:0,display:"flex",flexDirection:"column"},container:Object(o.a)({flex:"1 1 auto",position:"relative"},O.breakpoints.up("sm"),{width:"calc(100% - ".concat(220,"px)"),marginLeft:220}),drawer:Object(o.a)({},O.breakpoints.up("sm"),{width:220,flexShrink:0}),drawerPaper:{width:220}}))(),w=function(){y(!C)};return r.a.createElement(g.a,{theme:O},r.a.createElement(s.a,null,r.a.createElement("div",{className:j.root},r.a.createElement(P,{darkMode:a,handleDarkModeChange:function(e){l(e),localStorage.setItem("darkMode",e?"true":"false")},handleDrawerToggle:w,drawerWidth:220}),r.a.createElement("nav",{className:j.drawer,"aria-label":"side nav"},r.a.createElement(m.a,{smUp:!0,implementation:"css"},r.a.createElement(d.a,{variant:"temporary",anchor:"left",open:C,onClose:w,onClick:w,classes:{paper:j.drawerPaper},ModalProps:{keepMounted:!0}},r.a.createElement(Le,null))),r.a.createElement(m.a,{xsDown:!0,implementation:"css"},r.a.createElement(d.a,{classes:{paper:j.drawerPaper},variant:"permanent",open:!0},r.a.createElement(Le,null)))),r.a.createElement("div",{className:j.container},r.a.createElement(u.d,null,r.a.createElement(u.a,{exact:!0,path:"/",to:"/states"}),r.a.createElement(u.b,{path:"/world",component:me}),r.a.createElement(u.b,{path:"/worldcharts",component:ve}),r.a.createElement(u.b,{path:"/states",component:ke}),r.a.createElement(u.b,{path:"/statecharts",component:Ue}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[258,1,2]]]);
//# sourceMappingURL=main.02bce219.chunk.js.map