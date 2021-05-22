(this["webpackJsonpairbnb-clone"]=this["webpackJsonpairbnb-clone"]||[]).push([[0],{100:function(e,t,i){},101:function(e,t,i){},103:function(e,t,i){"use strict";i.r(t);var c=i(0),s=i.n(c),n=i(23),a=i.n(n),r=(i(67),i(68),i(1));var o=function(e){var t=e.src,i=e.title,c=e.description,s=e.price;return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("img",{src:t,alt:""}),Object(r.jsxs)("div",{className:"card__info",children:[Object(r.jsx)("h2",{children:i}),Object(r.jsx)("h4",{children:c}),Object(r.jsx)("h3",{children:s})]})]})},d=i(27),j=(i(70),i(117)),h=(i(71),i(72),i(73),i(46)),b=i(48),l=i.n(b),p=i(5);var m=function(){var e=Object(p.f)(),t=Object(c.useState)(new Date),i=Object(d.a)(t,2),s=i[0],n=i[1],a=Object(c.useState)(new Date),o=Object(d.a)(a,2),b=o[0],m=o[1],u={startDate:s,endDate:b,key:"selection"};return Object(r.jsxs)("div",{className:"search",children:[Object(r.jsx)(h.DateRangePicker,{ranges:[u],onChange:function(e){n(e.selection.startDate),m(e.selection.endDate)}}),Object(r.jsxs)("h2",{children:["Number of guests ",Object(r.jsx)(l.a,{})]}),Object(r.jsx)("input",{type:"number",min:0,defaultValue:2}),Object(r.jsx)(j.a,{onClick:function(){return e.push("/search")},children:"Search Airbnb"})]})};var u=function(){var e=Object(p.f)(),t=Object(c.useState)(!1),i=Object(d.a)(t,2),s=i[0],n=i[1];return Object(r.jsxs)("div",{className:"banner",children:[Object(r.jsxs)("div",{className:"banner__search",children:[Object(r.jsx)(j.a,{onClick:function(){return n(!s)},className:"banner__searchButton",variant:"outlined",children:s?"Hide":"Search Dates"}),s&&Object(r.jsx)(m,{})]}),Object(r.jsxs)("div",{className:"banner__info",children:[Object(r.jsx)("h1",{children:"Get out and stretch your imagination"}),Object(r.jsx)("h5",{children:"Plan a different kind of getaway to uncover the hidden gems near you."}),Object(r.jsx)(j.a,{onClick:function(){return e.push("/search")},variant:"outlined",children:"Explore Nearby"})]})]})};i(96);var x=function(){return Object(r.jsxs)("div",{className:"home",children:[Object(r.jsx)(u,{}),Object(r.jsxs)("div",{className:"home__section",children:[Object(r.jsx)(o,{src:"https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720",title:"Online Experiences",description:"Unique activities we can do together, led by a world of hosts."}),Object(r.jsx)(o,{src:"https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720",title:"Unique stays",description:"Spaces that are more than just a place to sleep."}),Object(r.jsx)(o,{src:"https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720",title:"Entire homes",description:"Comfortable private places, with room for friends or family."})]}),Object(r.jsxs)("div",{className:"home__section",children:[Object(r.jsx)(o,{src:"https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg",title:"3 Bedroom Flat in Bournemouth",description:"Superhost with a stunning view of the beachside in Sunny Bournemouth",price:"\xa3130/night"}),Object(r.jsx)(o,{src:"https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg",title:"Penthouse in London",description:"Enjoy the amazing sights of London with this stunning penthouse",price:"\xa3350/night"}),Object(r.jsx)(o,{src:"https://media.nomadicmatt.com/2018/apartment.jpg",title:"1 Bedroom apartment",description:"Superhost with great amenities and a fabolous shopping complex nearby",price:"\xa370/night"})]})]})},O=i(57),g=i.n(O),f=i(58),v=i.n(f),_=(i(97),i(56)),w=i.n(_),y=i(118),N=i(22);var P=function(){return Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)(N.b,{to:"/",children:Object(r.jsx)("img",{className:"header__icon",src:"https://promoaffiliates.com/wp-content/uploads/2017/02/Airbnb-Logo.png",alt:""})}),Object(r.jsxs)("div",{className:"header__center",children:[Object(r.jsx)("input",{type:"text"}),Object(r.jsx)(w.a,{})]}),Object(r.jsxs)("div",{className:"header__right",children:[Object(r.jsx)("p",{children:"Become a Host"}),Object(r.jsx)(g.a,{}),Object(r.jsx)(v.a,{}),Object(r.jsx)(y.a,{})]})]})};i(98);var S=function(){return Object(r.jsxs)("div",{className:"footer",children:[Object(r.jsx)("p",{children:"\xa9 2020 Airbnb clone! No rights reserved - this is a demo!"}),Object(r.jsx)("p",{children:"Privacy \xb7 Terms \xb7 Sitemap \xb7 Company Details"})]})},A=(i(99),i(100),i(59)),F=i.n(A),k=i(60),L=i.n(k);var B=function(e){var t=e.img,i=e.location,c=e.title,s=e.description,n=e.star,a=e.price,o=e.total;return Object(r.jsxs)("div",{className:"searchResult",children:[Object(r.jsx)("img",{src:t,alt:""}),Object(r.jsx)(F.a,{className:"searchResult__heart"}),Object(r.jsxs)("div",{className:"searchResult__info",children:[Object(r.jsxs)("div",{className:"searchResult__infoTop",children:[Object(r.jsx)("p",{children:i}),Object(r.jsx)("h3",{children:c}),Object(r.jsx)("p",{children:"____"}),Object(r.jsx)("p",{children:s})]}),Object(r.jsxs)("div",{className:"searchResult__infoBottom",children:[Object(r.jsxs)("div",{className:"searchResult__stars",children:[Object(r.jsx)(L.a,{className:"searchResult__star"}),Object(r.jsx)("p",{children:Object(r.jsx)("strong",{children:n})})]}),Object(r.jsxs)("div",{className:"searchResults__price",children:[Object(r.jsx)("h2",{children:a}),Object(r.jsx)("p",{children:o})]})]})]})]})};var C=function(){return Object(r.jsxs)("div",{className:"searchPage",children:[Object(r.jsxs)("div",{className:"searchPage__info",children:[Object(r.jsx)("p",{children:"62 stays \xb7 26 august to 30 august \xb7 2 guest"}),Object(r.jsx)("h1",{children:"Stays nearby"}),Object(r.jsx)(j.a,{variant:"outlined",children:"Cancellation Flexibility"}),Object(r.jsx)(j.a,{variant:"outlined",children:"Type of place"}),Object(r.jsx)(j.a,{variant:"outlined",children:"Price"}),Object(r.jsx)(j.a,{variant:"outlined",children:"Rooms and beds"}),Object(r.jsx)(j.a,{variant:"outlined",children:"More filters"})]}),Object(r.jsx)(B,{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU",location:"Private room in center of London",title:"Stay at this spacious Edwardian House",description:"1 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Kitchen \xb7 Free parking \xb7 Washing Machine",star:4.73,price:"\xa330 / night",total:"\xa3117 total"}),Object(r.jsx)(B,{img:"https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg",location:"Private room in center of London",title:"Independant luxury studio apartment",description:"2 guest \xb7 3 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Kitchen",star:4.3,price:"\xa340 / night",total:"\xa3157 total"}),Object(r.jsx)(B,{img:"https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp",location:"Private room in center of London",title:"London Studio Apartments",description:"4 guest \xb7 4 bedroom \xb7 4 bed \xb7 2 bathrooms \xb7 Free parking \xb7 Washing Machine",star:3.8,price:"\xa335 / night",total:"\xa3207 total"}),Object(r.jsx)(B,{img:"https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI",location:"Private room in center of London",title:"30 mins to Oxford Street, Excel London",description:"1 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Kitchen \xb7 Free parking \xb7 Washing Machine",star:4.1,price:"\xa355 / night",total:"\xa3320 total"}),Object(r.jsx)(B,{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU",location:"Private room in center of London",title:"Spacious Peaceful Modern Bedroom",description:"3 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Free parking \xb7 Dry Cleaning",star:5,price:"\xa360 / night",total:"\xa3450 total"}),Object(r.jsx)(B,{img:"https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937",location:"Private room in center of London",title:"The Blue Room In London",description:"2 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Washing Machine",star:4.23,price:"\xa365 / night",total:"\xa3480 total"}),Object(r.jsx)(B,{img:"https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp",location:"Private room in center of London",title:"5 Star Luxury Apartment",description:"3 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Kitchen \xb7 Free parking \xb7 Washing Machine",star:3.85,price:"\xa390 / night",total:"\xa3650 total"})]})};i(101);var R=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)(N.a,{children:[Object(r.jsx)(P,{}),Object(r.jsxs)(p.c,{children:[Object(r.jsx)(p.a,{path:"/search",children:Object(r.jsx)(C,{})}),Object(r.jsx)(p.a,{path:"/",children:Object(r.jsx)(x,{})})]}),Object(r.jsx)(S,{})]})})};a.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(R,{})}),document.getElementById("root"))},67:function(e,t,i){},68:function(e,t,i){},70:function(e,t,i){},71:function(e,t,i){},96:function(e,t,i){},97:function(e,t,i){},98:function(e,t,i){},99:function(e,t,i){}},[[103,1,2]]]);
//# sourceMappingURL=main.a5142760.chunk.js.map