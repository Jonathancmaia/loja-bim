/*! For license information please see 6.0f825c6e.chunk.js.LICENSE.txt */
(this["webpackJsonploja-bim"]=this["webpackJsonploja-bim"]||[]).push([[6],{241:function(e,t,c){"use strict";c.d(t,"a",(function(){return i}));var a=c(102),n=(c(0),c(301)),r=c(20),s=(c(65),c(245),c(2));function i(e){var t,c=Object(r.c)((function(e){return e.Items})),i=null;i=e.cart?"carousel-cart":"carousel";var j=c.PHOTO[0].filter((function(t){return t.id===e.id})).map((function(e){var t;return Object(s.jsx)(n.a.Item,{className:i,children:Object(s.jsx)("img",(t={className:"d-block"},Object(a.a)(t,"className",i),Object(a.a)(t,"src","http://nozestrump.com/api-lojabim.test".concat([e.img])),Object(a.a)(t,"alt","First slide"),t))})}));return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(n.a,(t={className:"carousel"},Object(a.a)(t,"className",i),Object(a.a)(t,"indicators",!1),Object(a.a)(t,"children",j),t))})}},245:function(e,t,c){},246:function(e,t,c){},247:function(e,t,c){},248:function(e,t,c){"use strict";c.d(t,"a",(function(){return G}));var a=c(56),n=(c(246),c(257)),r=c.n(n),s=c(258),i=c.n(s),j=c(91),o=c(20),d=c(0),l=c(224),b=c(189),O=c(54),u=c(37),h=c(30),x=c(101),m=c(292),f=c(57),p=c(254),v=c.n(p),g=c(255),C=c.n(g),y=(c(247),c(241)),S=c(102),N=c(107),k=c(298),E=c(31),I=c(92),F=c.n(I),L=c(21),w=c(2);function z(e){var t,c=Object(o.b)(),n=(Object(o.c)((function(e){return e.Me})),Object(d.useState)(!1)),r=Object(a.a)(n,2),s=r[0],i=r[1],j=Object(d.useState)(1),b=Object(a.a)(j,2),f=b[0],p=b[1],v=Object(d.useState)({rua:"",numero:"",complemento:"",bairro:"",cep:"",cidade:"",estado:""}),g=Object(a.a)(v,2),C=g[0],y=g[1],I=Object(d.useState)(""),z=Object(a.a)(I,2),B=z[0],T=z[1],A=Object(d.useState)(""),M=Object(a.a)(A,2),H=M[0],J=M[1],R=Object(d.useState)(""),P=Object(a.a)(R,2),q=P[0],V=P[1],D=Object(d.useState)(""),G=Object(a.a)(D,2),Q=G[0],_=G[1],U=Object(d.useState)(""),$=Object(a.a)(U,2),K=$[0],W=$[1],X=Object(d.useState)(""),Y=Object(a.a)(X,2),Z=Y[0],ee=Y[1],te=Object(d.useState)(""),ce=Object(a.a)(te,2),ae=ce[0],ne=ce[1],re=Object(d.useState)(""),se=Object(a.a)(re,2),ie=se[0],je=se[1],oe=Object(d.useState)(!1),de=Object(a.a)(oe,2),le=de[0],be=de[1],Oe=Object(d.useState)(!1),ue=Object(a.a)(Oe,2),he=ue[0],xe=ue[1],me=Object(d.useState)(!0),fe=Object(a.a)(me,2),pe=fe[0],ve=fe[1],ge=Object(d.useState)(void 0),Ce=Object(a.a)(ge,2),ye=Ce[0],Se=Ce[1],Ne=Object(d.useState)(void 0),ke=Object(a.a)(Ne,2),Ee=ke[0],Ie=ke[1],Fe=Object(d.useState)({rua:void 0,bairro:void 0,cidade:void 0,estado:void 0}),Le=Object(a.a)(Fe,2),we=Le[0],ze=Le[1],Be=void 0,Te=void 0,Ae=void 0,Me=void 0,He=Object(d.useState)(0),Je=Object(a.a)(He,2),Re=Je[0],Pe=Je[1],qe=Object(d.useState)(0),Ve=Object(a.a)(qe,2),De=Ve[0],Ge=Ve[1],Qe=Object(d.useState)("pac"),_e=Object(a.a)(Qe,2),Ue=_e[0],$e=_e[1],Ke=Object(d.useState)(!0),We=Object(a.a)(Ke,2),Xe=We[0],Ye=We[1];Object(d.useEffect)((function(){T(C.rua),J(C.numero),V(C.complemento),_(C.bairro),W(C.cep),ee(C.cidade),ne(C.estado),je(C.referencia)}),[C]);return Object(d.useEffect)((function(){!0===le&&J("")}),[le]),Object(d.useEffect)((function(){e.open&&(i(!0),E.b.get("cliente/"+e.id+"/endereco").then((function(e){e.data.length>0||void 0!==e.data?(p(e.data.length),y({rua:B,numero:e.data[f-1].numero,complemento:e.data[f-1].complemento,bairro:Q,cep:e.data[f-1].cep,cidade:Z,estado:ae,referencia:e.data[f-1].referencia})):ve(!1)})))}),[e.open]),Object(d.useEffect)((function(){Se(void 0),Ie(void 0),void 0!==K&&8===K.length&&(ve(!0),F.a.get("https://viacep.com.br/ws/"+K+"/json/unicode/").then((function(e){void 0===e.data.cep?Ie(!0):(Se(!0),y({rua:e.data.logradouro,numero:H,complemento:q,bairro:e.data.bairro,cep:K,cidade:e.data.localidade,estado:e.data.uf,referencia:ie}),Be=void 0!==e.data.logradouro||""!==e.data.logradouro,Te=void 0!==e.data.bairro||""!==e.data.bairro,Ae=void 0!==e.data.localidade||""!==e.data.localidade,Me=void 0!==e.data.uf||""!==e.data.uf,ze({rua:Be,bairro:Te,cidade:Ae,estado:Me}),Ye(!0),E.b.post("frete",{cep:C.cep}).then((function(e){void 0===e||""===e||e===[]||(Ge(e.data[0]),Pe(e.data[1]),Ye(!1))}))),ve(!1)})))}),[K]),Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(O.a,{show:s,onHide:function(){i(!1)},size:"xl",children:[Object(w.jsx)(O.a.Header,{closeButton:!0,children:Object(w.jsx)("h2",{children:"Endere\xe7o de entrega"})}),Object(w.jsx)(O.a.Body,{children:Object(w.jsx)(x.a,{children:Object(w.jsx)(u.a,{children:Object(w.jsx)(h.a,{children:Object(w.jsx)(k.a,{children:Object(w.jsxs)(k.a.Group,{controlId:"endereco",children:[Object(w.jsxs)(u.a,{children:[Object(w.jsxs)(h.a,{md:"6",children:[Object(w.jsx)(k.a.Label,{children:"Cep"}),Object(w.jsx)(k.a.Control,{size:"sm",type:"text",placeholder:"12345123",value:K,onChange:function(e){return W(e.target.value)},disabled:pe&&!0,isValid:ye,isInvalid:Ee}),pe?Object(w.jsx)(l.a,{}):Object(w.jsxs)(k.a.Text,{className:"text-muted",children:["Caso n\xe3o saiba seu cep:",Object(w.jsx)("a",{href:"https://buscacepinter.correios.com.br/app/endereco/index.php",children:"Pesquise seu cep"})]})]}),Object(w.jsxs)(h.a,{md:"6",children:[Object(w.jsx)(k.a.Label,{children:"Rua"}),Object(w.jsx)(k.a.Control,{size:"sm",type:"text",placeholder:"Rua ciclano da silva",value:B,onChange:function(e){return T(e.target.value)},disabled:we.rua}),Object(w.jsx)(k.a.Label,{children:"N\xfamero"}),Object(w.jsx)(k.a.Control,{size:"sm",type:"number",placeholder:"10",value:H,onChange:function(e){return J(e.target.value)},disabled:le}),Object(w.jsx)(k.a.Check,{type:"switch",id:"isSemNumero",label:"s/n",value:le,onClick:function(e){be(!1===le)}})]})]}),Object(w.jsx)(k.a.Label,{children:"Complemento"}),Object(w.jsx)(k.a.Control,{size:"sm",type:"text",placeholder:"Ap 1001",value:q,onChange:function(e){return V(e.target.value)}}),Object(w.jsx)(k.a.Label,{children:"Bairro"}),Object(w.jsx)(k.a.Control,{size:"sm",type:"text",placeholder:"Bairro das flores",value:Q,onChange:function(e){return _(e.target.value)},disabled:we.bairro}),Object(w.jsx)(k.a.Label,{children:"Cidade"}),Object(w.jsx)(k.a.Control,{size:"sm",type:"text",placeholder:"Cidade dos Anjos",value:Z,onChange:function(e){return ee(e.target.value)},disabled:we.cidade}),Object(w.jsx)(k.a.Label,{children:"Estado / UF"}),Object(w.jsx)(k.a.Control,{size:"sm",type:"text",placeholder:"BA",value:ae,onChange:function(e){return ne(e.target.value)},disabled:we.estado}),Object(w.jsx)(k.a.Label,{children:"Referencia"}),Object(w.jsx)(k.a.Control,{size:"sm",type:"text",placeholder:"Pr\xf3ximo \xe0 pra\xe7a",value:ie,onChange:function(e){return je(e.target.value)}})]})})})})})}),Object(w.jsx)(O.a.Footer,{children:Object(w.jsx)(x.a,{children:Object(w.jsx)(u.a,{children:Object(w.jsxs)(h.a,{children:[Object(w.jsx)(k.a,{children:Object(w.jsxs)(u.a,{children:[Object(w.jsx)(h.a,{className:"d-flex justify-content-center align-items-center",children:Object(w.jsx)("div",{className:"mb-3",children:Object(w.jsx)(k.a.Check,{type:"radio",name:"tipoEnvio",onClick:function(e){return $e("pac")},checked:"pac"===Ue})},"tipoEnvio")}),Object(w.jsxs)(h.a,{children:[Object(w.jsx)(u.a,{children:Object(w.jsxs)(h.a,{children:["PAC: ",Xe?Object(w.jsx)(l.a,{}):Object(w.jsx)(w.Fragment,{children:Re.price.toLocaleString("pt-br",{style:"currency",currency:"BRL"})})]})}),Object(w.jsx)(u.a,{children:Object(w.jsx)(h.a,{children:Object(w.jsxs)("small",{children:["Entregue em ",Re.deadline," dia(s)."]})})})]}),Object(w.jsx)(h.a,{className:"d-flex justify-content-center align-items-center",children:Object(w.jsx)("div",{className:"mb-3",children:Object(w.jsx)(k.a.Check,{type:"radio",name:"tipoEnvio",onClick:function(e){return $e("sedex")},checked:"sedex"===Ue})},"tipoEnvio")}),Object(w.jsxs)(h.a,{children:[Object(w.jsx)(u.a,{children:Object(w.jsxs)(h.a,{children:["Sedex: ",Xe?Object(w.jsx)(l.a,{}):Object(w.jsx)(w.Fragment,{children:De.price.toLocaleString("pt-br",{style:"currency",currency:"BRL"})})]})}),Object(w.jsx)(u.a,{children:Object(w.jsx)(h.a,{children:Object(w.jsxs)("small",{children:["Entregue em ",De.deadline," dia(s)."]})})})]})]})}),Object(w.jsx)("hr",{}),Object(w.jsx)(u.a,{children:Object(w.jsx)(h.a,{className:"d-flex justify-content-center",children:Object(w.jsx)(m.a,(t={variant:"success",onClick:function(e){!function(){xe(!0);var e=localStorage.getItem("storeCart");if("undefined"!==typeof e||""!==e||e!==[]){for(var t=[],a=0;a<JSON.parse(e).length;a++)t=[].concat(Object(N.a)(t),[{itemId:JSON.parse(e)[a].id,itemQuantity:JSON.parse(e)[a].qtd,itemTam:JSON.parse(e)[a].tamanho}]);var n={rua:B,numero:H,complemento:q,bairro:Q,cep:K,cidade:Z,estado:ae,referencia:ie,tipo:Ue};localStorage.removeItem("storeCart");var r={items:JSON.stringify(t),endereco:JSON.stringify(n)};E.b.post("checkout",r).then((function(e){window.location=e.data}))}else c(Object(L.b)({open:!0,class:"error",msg:"Seu carrinho est\xe1 vazio."}))}()},disabled:he,size:"lg"},Object(S.a)(t,"disabled",Xe),Object(S.a)(t,"children","Confirmar endere\xe7o e iniciar pagamento"),t))})})]})})})})]})})}var B=Object(b.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center",overflow:"auto",maxHeight:"80%",paddingTop:"34%",paddingBottom:"1%",marginTop:"5%"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));function T(e){var t=Object(o.c)((function(e){return e.Items})),c=Object(o.c)((function(e){return e.Me})),n=0,r=Object(o.c)((function(e){return e.Cart})),s=Object(o.b)();Object(d.useEffect)((function(){s(Object(f.c)())}),[]);B();var i=Object(d.useState)(!1),j=Object(a.a)(i,2),b=j[0],p=j[1],g=function(){p(!1),!0===r.ACTIVE&&s(Object(f.e)(!1))};Object(d.useEffect)((function(){!0===r.ACTIVE?p(!0):!1===r.ACTIVE&&g()}),[r.ACTIVE]);var S=0;function N(e){if(++S<e)return Object(w.jsx)("hr",{})}var k,E=Object(d.useState)(!1),I=Object(a.a)(E,2),F=I[0],T=I[1];return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(z,{id:c.ID,open:F}),Object(w.jsxs)(O.a,{show:b,onHide:g,size:"xl",className:"modal-content-cart",children:[Object(w.jsx)(O.a.Header,{closeButton:!0,children:Object(w.jsx)("h2",{children:"Carrinho"})}),Object(w.jsx)(O.a.Body,{children:Object(w.jsx)(u.a,{children:Object(w.jsxs)(h.a,{children:[r.ITEMS.map((function(e){return Object(w.jsxs)("div",{children:[Object(w.jsxs)(u.a,{children:[Object(w.jsx)(h.a,{className:"d-flex justify-content-center",children:t.LOADING_PHOTO?Object(w.jsx)(l.a,{}):Object(w.jsx)(y.a,{id:e.id,cart:"true"})}),Object(w.jsx)(h.a,{children:Object(w.jsxs)("div",{className:"namePrice-container",children:[Object(w.jsx)("div",{className:"name-container",children:Object(w.jsx)("h4",{children:e.nome})}),Object(w.jsx)(u.a,{className:"name-container",children:Object(w.jsx)(h.a,{className:"pt-3",children:Object(w.jsxs)("small",{children:["Tamanho: ",e.tamanho]})})}),Object(w.jsx)(u.a,{className:"priceQtd-container",children:Object(w.jsx)(h.a,{children:Object(w.jsxs)("span",{children:[Object(w.jsx)(v.a,{className:"addButton",onClick:function(t){return s(Object(f.b)(e.id,e.qtd,e.img,e.desc,e.preco,e.tamanho))}}),e.qtd,Object(w.jsx)(C.a,{className:"removeButton",onClick:function(t){return s(Object(f.d)(e.id,e.tamanho))}})]})})}),Object(w.jsx)(u.a,{children:Object(w.jsx)(h.a,{children:Object(w.jsx)("h3",{children:Object(w.jsxs)("span",{className:"itemPreco",children:["R$ ",e.preco]})})})})]})})]}),(c=e.preco,a=e.qtd,void(n+=parseFloat(c)*parseFloat(a))),N(r.ITEMS.length)]},e.id);var c,a})),0===n&&Object(w.jsx)("div",{className:"row d-flex",children:Object(w.jsx)("div",{className:"col-12 d-flex justify-content-center",children:Object(w.jsx)("h6",{children:"Carrinho vazio"})})})]})})}),Object(w.jsx)(O.a.Footer,{children:0!==n&&Object(w.jsx)(x.a,{children:Object(w.jsxs)(u.a,{children:[Object(w.jsx)(h.a,{className:"d-flex justify-content-center align-items-center",children:Object(w.jsx)("span",{children:Object(w.jsx)("h3",{children:(k=n,k.toLocaleString("pt-BR",{style:"currency",currency:"BRL"}))})})}),Object(w.jsx)(h.a,{className:"d-flex justify-content-center",children:Object(w.jsx)("span",{children:Object(w.jsx)(m.a,{variant:"success",size:"lg",onClick:function(e){c.NAME?T(!0):s(Object(L.b)({open:!0,class:"error",msg:"Fa\xe7a o login para concluir a sua compra."}))},children:"Confirmar endere\xe7o de entrega"})})})]})})})]})]})}var A=c(103),M=c(304),H=c(307),J=c(297),R=c(302),P=c(303),q=c(294);function V(e){var t=Object(d.useState)(!0),c=Object(a.a)(t,2),n=c[0],r=c[1],s=Object(d.useState)(null),i=Object(a.a)(s,2),j=i[0],o=i[1],b=Object(d.useState)(null),O=Object(a.a)(b,2),u=O[0],h=O[1];return Object(d.useEffect)((function(){E.b.get("/consultaEncomenda/"+e.token).then((function(e){if(void 0!==typeof e||""===typeof e){switch(h(e),e.data.status){case"1":o("Completo");break;case"2":o("Aprovado");break;case"3":o("Em an\xe1lise");break;case"4":o("Devolvido");break;case"5":o("Cancelado")}r(!1)}}))}),[]),Object(w.jsx)("tr",{children:n?Object(w.jsx)(l.a,{}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("td",{children:u.data.grossAmount}),Object(w.jsx)("td",{children:Object(w.jsx)(q.a,{striped:!0,bordered:!0,hover:!0,children:u.data.items.item.map((function(e){return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:e.description}),Object(w.jsx)("td",{children:e.quantity}),Object(w.jsx)("td",{children:e.amount})]})})}))})}),Object(w.jsx)("td",{children:j})]})})}function D(){var e=Object(d.useState)(!1),t=Object(a.a)(e,2),c=t[0],n=t[1],r=Object(d.useState)(!0),s=Object(a.a)(r,2),i=s[0],j=s[1],o=Object(d.useState)(!1),b=Object(a.a)(o,2),u=b[0],h=b[1];return Object(d.useEffect)((function(){E.b.get("/encomenda").then((function(e){void 0===typeof e&&""!==typeof e||(h(e.data),j(!1))}))}),[]),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(H.a.Item,{action:!0,onClick:function(){return n(!0)},children:"Meus pedidos"}),Object(w.jsxs)(O.a,{show:c,onHide:function(){return n(!1)},children:[Object(w.jsx)(O.a.Header,{closeButton:!0,children:Object(w.jsx)("h2",{children:"Encomendas"})}),Object(w.jsx)(O.a.Body,{children:i?Object(w.jsx)(l.a,{}):""===u||!1===u?Object(w.jsx)(w.Fragment,{children:"N\xe3o h\xe1 pedidos"}):Object(w.jsxs)(q.a,{striped:!0,bordered:!0,hover:!0,children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:"Valor"}),Object(w.jsx)("td",{children:"Itens"}),Object(w.jsx)("td",{children:"Status"})]})}),Object(w.jsx)("tbody",{children:u.map((function(e){return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(V,{token:e.transaction_code})})}))})]})})]})]})}function G(){var e=Object(o.c)((function(e){return e.Me})),t=(Object(o.c)((function(e){return e.Cart})),Object(o.b)());Object(d.useEffect)((function(){t(Object(j.a)())}),[e.NAME]);var c=Object(d.useState)(),n=Object(a.a)(c,2),s=n[0],b=n[1],O=Object(w.jsxs)(M.a,{id:"popover-basic",children:[Object(w.jsx)(M.a.Title,{as:"h3",children:"Op\xe7\xf5es"}),Object(w.jsx)(M.a.Content,{children:Object(w.jsxs)(H.a,{children:[Object(w.jsx)(D,{}),Object(w.jsx)(H.a.Item,{children:"Mudar senha"}),Object(w.jsx)(H.a.Item,{action:!0,onClick:function(){localStorage.clear(),window.location.reload()},children:"Logout"})]})})]}),u=function(){return Object(w.jsx)(J.a,{trigger:"click",placement:"bottom",overlay:O,children:Object(w.jsxs)(m.a,{variant:"outline-secondary",children:["Ol\xe1, ",e.NAME]})})};return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(T,{}),Object(w.jsx)(A.default,{opened:s}),Object(w.jsxs)(R.a,{bg:"dark",variant:"dark",expand:"md",className:"navbar",children:[Object(w.jsx)(R.a.Brand,{className:"logo",children:Object(w.jsx)("h3",{children:"Nozes Trump"})}),Object(w.jsx)(R.a.Toggle,{"aria-controls":"navbar"}),Object(w.jsx)(R.a.Collapse,{id:"navbar",className:"justify-content-end",children:Object(w.jsxs)(P.a,{children:[Object(w.jsx)(P.a.Link,{href:"#",children:e.LOADING?Object(w.jsx)("div",{className:"d-flex jultify-content-center",children:Object(w.jsx)(m.a,{variant:"outline-secondary",children:Object(w.jsx)(l.a,{})})}):Object(w.jsx)(w.Fragment,{children:e.NAME?Object(w.jsx)(u,{}):Object(w.jsxs)(m.a,{variant:"outline-secondary",className:"loginButton",onClick:function(e){b(!0),setTimeout((function(){b()}),3e3)},children:[Object(w.jsx)(r.a,{fontSize:"default"}),"Login"]})})}),Object(w.jsx)(P.a.Link,{href:"#",children:Object(w.jsxs)(m.a,{variant:"outline-secondary",onClick:function(e){t(Object(f.e)(!0))},children:[Object(w.jsx)(i.a,{fontSize:"default"})," Carrinho"]})})]})})]})]})}},295:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return O}));var a=c(59),n=c.n(a),r=c(77),s=c(56),i=c(0),j=c(248),o=c(65),d=c(20),l=c(224),b=c(2);function O(e){var t=Object(d.c)((function(e){return e.Items})),c=Object(i.useState)(!0),a=Object(s.a)(c,2),O=a[0],u=a[1],h=Object(d.b)();function x(){return(x=Object(r.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(Object(o.b)());case 2:return e.next=4,u(!1);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(i.useEffect)((function(){!function(){x.apply(this,arguments)}()}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j.a,{}),O?Object(b.jsx)("div",{className:"d-flex jultify-content-center mt-5 pt-5",children:Object(b.jsx)(l.a,{})}):Object(b.jsx)(b.Fragment,{children:t})]})}}}]);
//# sourceMappingURL=6.0f825c6e.chunk.js.map