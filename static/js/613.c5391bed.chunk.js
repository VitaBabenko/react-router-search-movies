"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[613],{909:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(9439),a=n(7689),c=n(2791),s=n(5861),u=n(7757),i=n.n(u),o=n(1243),d=function(){var e=(0,s.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3","2ec93d095b3f7dd7321ac567053c0ad5",e.next=4,o.Z.get("".concat("https://api.themoviedb.org/3","/movie/").concat(t,"/reviews?api_key=").concat("2ec93d095b3f7dd7321ac567053c0ad5","&language=en-US&page=1"));case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=d,l=n(184),f=function(e){var t=e.reviews;return(0,l.jsx)("ul",{children:t.map((function(e){return(0,l.jsxs)("li",{children:[(0,l.jsx)("h3",{children:e.author}),(0,l.jsx)("p",{children:e.content})]},e.id)}))})},p=n(1737),v=function(){var e=(0,a.UO)().movieId,t=(0,c.useState)([]),n=(0,r.Z)(t,2),s=n[0],u=n[1],i=(0,c.useState)(!1),o=(0,r.Z)(i,2),d=o[0],v=o[1],m=(0,c.useState)(null),w=(0,r.Z)(m,2),g=w[0],x=w[1];return(0,c.useEffect)((function(){v(!0),u([]),h(e).then((function(e){return console.log(e.data.results),0===e.data.results.length?Promise.reject(new Error("We don`t have any reviews for this movie.")):u(e.data.results)})).catch((function(e){return x(e)})).finally((function(){return v(!1)}))}),[e]),(0,l.jsxs)(l.Fragment,{children:[d&&(0,l.jsx)(p.Z,{}),g&&(0,l.jsx)("h2",{children:g.message}),(0,l.jsx)(f,{reviews:s})]})}}}]);
//# sourceMappingURL=613.c5391bed.chunk.js.map