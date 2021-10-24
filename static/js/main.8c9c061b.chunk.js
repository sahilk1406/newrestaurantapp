(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__1ZzqP",total:"Cart_total__30ErW",actions:"Cart_actions__3alHm","button--alt":"Cart_button--alt__tHVxy",button:"Cart_button__3nRX2"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1dC01",summary:"CartItem_summary__11CWh",price:"CartItem_price__2Y00K",amount:"CartItem_amount__1k0Is",actions:"CartItem_actions__2HsfZ"}},,,,function(e,t,n){e.exports={button:"HeaderCartButton_button__2MFyQ",icon:"HeaderCartButton_icon__izK24",badge:"HeaderCartButton_badge__2db8V",bump:"HeaderCartButton_bump__3-Uay"}},function(e,t,n){e.exports={meal:"MealItem_meal__5kQ_r",description:"MealItem_description__34wVl",price:"MealItem_price__2L84W"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__2jTTx",modal:"Modal_modal__3YzwD","slide-down":"Modal_slide-down__38Rcd"}},,function(e,t,n){e.exports={header:"Header_header__2cKHt","main-image":"Header_main-image__1uwnM"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__34VIn"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__1A_PT","meals-appear":"AvailableMeals_meals-appear__9S6os"}},function(e,t,n){e.exports={form:"MealItemForm_form__Q2kvG"}},function(e,t,n){e.exports={input:"input_input__cCYxs"}},function(e,t,n){e.exports={card:"Card_card__OZx7g"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(6),c=n.n(a),i=(n(24),n(3)),r=n(1),s=n.n(r),o=n(13),l=n.n(o),m=n.p+"static/media/meals.2971f633.jpg",d=n(0),u=function(){return Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(d.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},j=n(9),b=n.n(j),x=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),O=function(e){var t=Object(r.useContext)(x).items.reduce((function(e,t){return e+t.amount}),0);return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("button",{className:b.a.button,onClick:e.onClick,children:[Object(d.jsx)("span",{className:b.a.icon,children:Object(d.jsx)(u,{})}),Object(d.jsx)("span",{children:"Your Cart"}),Object(d.jsxs)("span",{className:b.a.badge,children:[" ",t," "]})]})})},h=function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("header",{className:l.a.header,children:[Object(d.jsx)("h1",{children:"Awesome Meals"}),Object(d.jsx)(O,{onClick:e.onCartShown})]}),Object(d.jsx)("div",{className:l.a["main-image"],children:Object(d.jsx)("img",{src:m,alt:"Mealsimg"})})]})},p=n(15),_=n.n(p),f=function(){return Object(d.jsxs)("section",{className:_.a.summary,children:[Object(d.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(d.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(d.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(16),C=n.n(v),g=n(10),A=n.n(g),N=n(17),y=n.n(N),I=n(2),w=n(18),M=n.n(w),H=s.a.forwardRef((function(e,t){return Object(d.jsxs)("div",{className:M.a.input,children:[Object(d.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(d.jsx)("input",Object(I.a)({ref:t},e.input))]})})),k=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useRef)();return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("form",{className:y.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=+n;0===n.trim().length||a>5||a<1?c(!1):e.onAddToCart(a)},children:[Object(d.jsx)(H,{ref:s,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(d.jsx)("button",{children:"+ Add"}),!a&&Object(d.jsx)("p",{children:"Please enter a valid amount (1-5) "})]})})},F=function(e){var t=Object(r.useContext)(x),n="\u20b9".concat(e.price.toFixed(2));return Object(d.jsxs)("li",{className:A.a.meal,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:e.name}),Object(d.jsx)("div",{className:A.a.description,children:e.description}),Object(d.jsx)("div",{className:A.a.price,children:n})]}),Object(d.jsx)("div",{children:Object(d.jsx)(k,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},B=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],R=n(19),S=n.n(R),D=function(e){return Object(d.jsx)("div",{className:S.a.card,children:e.children})},z=function(){var e=B.map((function(e){return Object(d.jsx)(F,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(d.jsx)("section",{className:C.a.meals,children:Object(d.jsx)(D,{children:Object(d.jsx)("ul",{children:e})})})},E=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(f,{}),Object(d.jsx)(z,{})]})},T=n(11),V=n.n(T),P=function(e){return Object(d.jsx)("div",{className:V.a.backdrop})},Y=function(e){return Object(d.jsx)("div",{className:V.a.modal,children:Object(d.jsx)("div",{className:V.a.content,children:e.children})})},K=document.getElementById("overlays"),Q=function(e){return Object(d.jsxs)(d.Fragment,{children:[c.a.createPortal(Object(d.jsx)(P,{}),K),c.a.createPortal(Object(d.jsx)(Y,{children:e.children}),K)]})},W=n(4),Z=n.n(W),q=n(5),G=n.n(q),J=function(e){var t="\u20b9".concat(e.price.toFixed(2));return Object(d.jsxs)("li",{className:G.a["cart-item"],children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:e.name}),Object(d.jsxs)("div",{className:G.a.summary,children:[Object(d.jsx)("span",{className:G.a.price,children:t}),Object(d.jsxs)("span",{className:G.a.amount,children:["x ",e.amount]})]})]}),Object(d.jsxs)("div",{className:G.a.actions,children:[Object(d.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(d.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},L=function(e){var t=Object(r.useContext)(x),n="\u20b9".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,c=function(e){t.removeItem(e)},i=function(e){t.addItem(Object(I.a)(Object(I.a)({},e),{},{amount:1}))},s=Object(d.jsx)("ul",{className:Z.a["cart-items"],children:t.items.map((function(e){return Object(d.jsx)(J,{name:e.name,price:e.price,amount:e.amount,onRemove:c.bind(null,e.id),onAdd:i.bind(null,e)},e.id)}))});return Object(d.jsxs)(Q,{children:[s,Object(d.jsxs)("div",{className:Z.a.total,children:[Object(d.jsx)("span",{children:"Total Amount"}),Object(d.jsx)("span",{children:n})]}),Object(d.jsxs)("div",{className:Z.a.actions,children:[Object(d.jsx)("button",{className:Z.a["button--alt"],onClick:e.onClose,children:"Close"}),a&&Object(d.jsx)("button",{className:Z.a.button,children:"Order"})]})]})},U=n(14),X={items:[],totalAmount:0},$=function(e,t){if("ADD"===t.type){var n,a=e.items.findIndex((function(e){return e.id===t.item.id})),c=e.items[a];if(c){var i=Object(I.a)(Object(I.a)({},c),{},{amount:c.amount+t.item.amount});(n=Object(U.a)(e.items))[a]=i}else n=e.items.concat(t.item);return{items:n,totalAmount:e.totalAmount+t.item.price*t.item.amount}}if("REMOVE"===t.type){var r,s=e.items.findIndex((function(e){return e.id===t.id})),o=e.items[s],l=e.totalAmount-o.price;if(1===o.amount)r=e.items.filter((function(e){return e.id!==t.id}));else{var m=Object(I.a)(Object(I.a)({},o),{},{amount:o.amount-1});(r=Object(U.a)(e.items))[s]=m}return{items:r,totalAmount:l}}return X},ee=function(e){var t=Object(r.useReducer)($,X),n=Object(i.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})}};return Object(d.jsx)(x.Provider,{value:s,children:e.children})};var te=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)(ee,{children:[n&&Object(d.jsx)(L,{onClose:function(){a(!1)}}),Object(d.jsx)(h,{onCartShown:function(){a(!0)}}),Object(d.jsx)("main",{children:Object(d.jsx)(E,{})})]})};c.a.render(Object(d.jsx)(te,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.8c9c061b.chunk.js.map