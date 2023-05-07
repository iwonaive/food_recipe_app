/*! For license information please see index.js.LICENSE.txt */
(()=>{"use strict";var e={313:(e,r,n)=>{n.d(r,{Z:()=>p});var t=n(537),o=n.n(t),i=n(879),a=n.n(i),c=n(667),s=n.n(c),A=new URL(n(687),n.b),l=a()(o()),d=s()(A);l.push([e.id,'body{font-family:"Lato",sans-serif;font-weight:400;font-size:16px;background-color:#add8e6;margin:0;padding:0}body *{box-sizing:border-box}#app-container{display:flex;justify-content:center;align-items:center;position:relative;border:5px solid green;min-height:100vh}#app-container img{border-radius:8;box-shadow:0 0 2px 2px #fff}#app-container h1,#app-container h2,#app-container h3,#app-container h4{margin:0;padding:0}#app-container h1{font-size:40px}#app-container h2{font-size:32px}#app-container h3{font-size:24}#app-container h3{font-size:20}#modal-container{position:absolute;top:0;left:0;display:flex;flex-direction:column;justify-content:center;width:100%;border:2px solid red;box-sizing:border-box}#modal-container>#close-modal-container{background-color:#ff0;display:flex;justify-content:end}#modal-container>#close-modal-container>#close-modal{background-image:url('+d+");background-repeat:no-repeat;padding-left:5px;width:50px;height:50px;cursor:pointer}.inactive *{display:none}.active{display:block}#recipes-container{display:flex;flex-direction:column;justify-content:center;align-items:center;width:80%;padding:10px;background-color:blue;box-shadow:0 0 2px 2px #d3d3d3;box-sizing:border-box}#recipes-container>h1{padding-bottom:20px}#recipes-container>#search-form{display:flex;flex-direction:row;justify-content:center;width:100%;background-color:green}#recipes-container>#search-form>#search-input{width:50%;height:30px;line-height:30px}#recipes-container>#search-form>#search-icon{transform:translate(-25px, 7px)}#recipes-container>#search-form>#search-icon:hover{cursor:pointer}#recipes-container>#search-results{display:flex;flex-direction:column;justify-content:center;margin-top:20px;width:100%;border:3px dotted #ff0}#recipes-container>#search-results>.recipe{display:flex;justify-content:space-between;padding:20px;border:2px solid red}#recipes-container>#search-results>.recipe:hover{cursor:pointer}#recipes-container>#search-results>.recipe>*{display:block;width:50%}#recipes-container>#search-results>.recipe>.recipe-label{font-size:20px;border:1px solid #000}@media only screen and (max-width: 960px){#recipes-container{width:100%}}#recipe-details-container{background-color:orange;min-height:100vh}#recipe-details-container>.recipe>.recipe-header{display:flex;flex-direction:row;border:5px solid #90ee90;margin-top:10px}#recipe-details-container>.recipe>.recipe-header>.text-container{display:flex;flex-direction:column;width:50%;border:2px solid red}#recipe-details-container>.recipe>.recipe-header>.image-container{display:flex;flex-direction:row;justify-content:end;width:50%;border:2px dotted red}#recipe-details-container>.recipe>.recipe-detail{display:flex;flex-direction:row;height:100px;border:5px solid green;margin-top:10px}#recipe-details-container>.recipe>.recipe-detail>.image-container{display:flex;flex-direction:start;width:30%;border:2px dotted blue}#recipe-details-container>.recipe>.recipe-detail>.text-container{display:flex;flex-direction:row;justify-content:end;align-items:flex-start;text-align:right;width:70%;border:2px solid blue}","",{version:3,sources:["webpack://./src/assets/scss/main.scss","webpack://./src/assets/scss/modal-container.scss","webpack://./src/assets/scss/recipes-container.scss","webpack://./src/assets/scss/recipe-details-container.scss"],names:[],mappings:"AAAA,KACI,6BAAA,CACA,eAAA,CACA,cAAA,CACA,wBAAA,CACA,QAAA,CACA,SAAA,CAEA,OACI,qBAAA,CAIR,eACI,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,iBAAA,CACA,sBAAA,CACA,gBAAA,CAEA,mBACI,eAAA,CACA,2BAAA,CAGH,wEACG,QAAA,CACA,SAAA,CAGJ,kBACI,cAAA,CAGJ,kBACI,cAAA,CAGJ,kBACI,YAAA,CAGJ,kBACI,YAAA,CC5CR,iBACI,iBAAA,CACA,KAAA,CACA,MAAA,CACA,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,UAAA,CACA,oBAAA,CACA,qBAAA,CAEA,wCACI,qBAAA,CACA,YAAA,CACA,mBAAA,CAEA,qDACI,wDAAA,CACA,2BAAA,CACA,gBAAA,CACA,UAAA,CACA,WAAA,CACA,cAAA,CAMZ,YACI,YAAA,CAIJ,QACI,aAAA,CClCJ,mBACI,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,kBAAA,CACA,SAAA,CACA,YAAA,CACA,qBAAA,CACA,8BAAA,CACA,qBAAA,CAEA,sBACI,mBAAA,CAIJ,gCACI,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,UAAA,CACA,sBAAA,CAEA,8CACI,SAAA,CACA,WAAA,CACA,gBAAA,CAGJ,6CACI,+BAAA,CAEA,mDACI,cAAA,CAMZ,mCACI,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,eAAA,CACA,UAAA,CACA,sBAAA,CAEA,2CACI,YAAA,CACA,6BAAA,CACA,YAAA,CACA,oBAAA,CAEA,iDACI,cAAA,CAGJ,6CACI,aAAA,CACA,SAAA,CAGJ,yDACI,cAAA,CACA,qBAAA,CAMhB,0CACI,mBACI,UAAA,CAAA,CCxER,0BACI,uBAAA,CACA,gBAAA,CAII,iDACI,YAAA,CACA,kBAAA,CACA,wBAAA,CACA,eAAA,CAEA,iEACI,YAAA,CACA,qBAAA,CACA,SAAA,CACA,oBAAA,CAGJ,kEACI,YAAA,CACA,kBAAA,CACA,mBAAA,CACA,SAAA,CACA,qBAAA,CAIR,iDACI,YAAA,CACA,kBAAA,CACA,YAAA,CACA,sBAAA,CACA,eAAA,CAEA,kEACI,YAAA,CACA,oBAAA,CACA,SAAA,CACA,sBAAA,CAGJ,iEACI,YAAA,CACA,kBAAA,CACA,mBAAA,CACA,sBAAA,CACA,gBAAA,CACA,SAAA,CACA,qBAAA",sourcesContent:["body {\r\n    font-family: 'Lato', sans-serif;\r\n    font-weight: 400;\r\n    font-size: 16px;\r\n    background-color: lightblue;\r\n    margin: 0;\r\n    padding: 0;\r\n    \r\n    & * {\r\n        box-sizing: border-box;\r\n    }\r\n}\r\n\r\n#app-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: relative;\r\n    border: 5px solid green;\r\n    min-height: 100vh;\r\n\r\n    & img {\r\n        border-radius: 8;\r\n        box-shadow: 0 0 2px 2px white;\r\n    }\r\n\r\n     & h1, h2, h3, h4 {\r\n        margin: 0;\r\n        padding: 0;\r\n     }\r\n\r\n    & h1 {\r\n        font-size: 40px;\r\n    }\r\n\r\n    & h2 {\r\n        font-size: 32px;\r\n    }\r\n\r\n    & h3 {\r\n        font-size: 24;\r\n    }\r\n\r\n    & h3 {\r\n        font-size: 20;\r\n    }\r\n}","#modal-container {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    width: 100%;\r\n    border: 2px solid red;\r\n    box-sizing: border-box;\r\n\r\n    & > #close-modal-container {\r\n        background-color: yellow;\r\n        display: flex;\r\n        justify-content: end;\r\n\r\n        & > #close-modal {\r\n            background-image: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='53.7' height='53.7' viewBox='0 0 53.7 53.7'><path opacity='.6' fill='%23666E6E' d='M35.6 34.4L28 26.8l7.6-7.6c.2-.2.2-.5 0-.7l-.5-.5c-.2-.2-.5-.2-.7 0l-7.6 7.6-7.5-7.6c-.2-.2-.5-.2-.7 0l-.6.6c-.2.2-.2.5 0 .7l7.6 7.6-7.6 7.5c-.2.2-.2.5 0 .7l.5.5c.2.2.5.2.7 0l7.6-7.6 7.6 7.6c.2.2.5.2.7 0l.5-.5c.2-.2.2-.5 0-.7z'/></svg>\");\r\n            background-repeat: no-repeat;\r\n            padding-left: 5px;\r\n            width: 50px;\r\n            height: 50px;\r\n            cursor: pointer;\r\n        }\r\n    }\r\n}\r\n\r\n\r\n.inactive * {\r\n    display: none;\r\n}\r\n\r\n\r\n.active {\r\n    display: block;\r\n}","#recipes-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 80%;\r\n    padding: 10px;\r\n    background-color: blue;\r\n    box-shadow: 0 0 2px 2px lightgray;\r\n    box-sizing: border-box;\r\n    \r\n    & >  h1 {\r\n        padding-bottom: 20px;\r\n    }\r\n\r\n    // search-form\r\n    & > #search-form {\r\n        display: flex;\r\n        flex-direction: row;\r\n        justify-content: center;\r\n        width: 100%;\r\n        background-color: green;\r\n        \r\n        & > #search-input {\r\n            width: 50%;\r\n            height: 30px;\r\n            line-height: 30px;\r\n        }\r\n\r\n        & > #search-icon {\r\n            transform: translate(-25px, 7px);\r\n\r\n            &:hover {\r\n                cursor: pointer;\r\n            }\r\n        }\r\n    }\r\n\r\n    // search-results\r\n    & > #search-results {\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        margin-top: 20px;\r\n        width: 100%;\r\n        border: 3px dotted yellow;\r\n\r\n        & > .recipe {\r\n            display: flex;\r\n            justify-content: space-between;\r\n            padding: 20px;\r\n            border: 2px solid red;\r\n\r\n            &:hover {\r\n                cursor: pointer;\r\n            }\r\n\r\n            & > * {\r\n                display: block;\r\n                width: 50%;\r\n            }\r\n\r\n            & > .recipe-label {\r\n                font-size: 20px;\r\n                border: 1px solid black;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 960px) {\r\n    #recipes-container {\r\n        width: 100%;\r\n    }\r\n}\r\n","#recipe-details-container {\r\n    background-color: orange;\r\n    min-height: 100vh;\r\n\r\n    & > .recipe {\r\n\r\n        & > .recipe-header {\r\n            display: flex;\r\n            flex-direction: row;\r\n            border: 5px solid lightgreen;\r\n            margin-top: 10px;\r\n\r\n            & > .text-container {\r\n                display: flex;\r\n                flex-direction: column;\r\n                width: 50%;\r\n                border: 2px solid red;\r\n            }\r\n    \r\n            & > .image-container {\r\n                display: flex;\r\n                flex-direction: row;\r\n                justify-content: end;\r\n                width: 50%;\r\n                border: 2px dotted red;\r\n            }\r\n        }\r\n\r\n        & > .recipe-detail {\r\n            display: flex;\r\n            flex-direction: row;\r\n            height: 100px;\r\n            border: 5px solid green;\r\n            margin-top: 10px;\r\n\r\n            & > .image-container {\r\n                display: flex;\r\n                flex-direction: start;\r\n                width: 30%;\r\n                border: 2px dotted blue;\r\n            }\r\n\r\n            & > .text-container {\r\n                display: flex;\r\n                flex-direction: row;\r\n                justify-content: end;\r\n                align-items: flex-start;\r\n                text-align: right;\r\n                width: 70%;\r\n                border: 2px solid blue;\r\n            }\r\n        }\r\n    }\r\n}"],sourceRoot:""}]);const p=l},879:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var n="",t=void 0!==r[5];return r[4]&&(n+="@supports (".concat(r[4],") {")),r[2]&&(n+="@media ".concat(r[2]," {")),t&&(n+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),n+=e(r),t&&(n+="}"),r[2]&&(n+="}"),r[4]&&(n+="}"),n})).join("")},r.i=function(e,n,t,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var A=0;A<e.length;A++){var l=[].concat(e[A]);t&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},667:e=>{e.exports=function(e,r){return r||(r={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),r.hash&&(e+=r.hash),/["'() \t\n]|(%20)/.test(e)||r.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},537:e=>{e.exports=function(e){var r=e[1],n=e[3];if(!n)return r;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),i="/*# ".concat(o," */");return[r].concat([i]).join("\n")}return[r].join("\n")}},379:e=>{var r=[];function n(e){for(var n=-1,t=0;t<r.length;t++)if(r[t].identifier===e){n=t;break}return n}function t(e,t){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],A=t.base?s[0]+t.base:s[0],l=i[A]||0,d="".concat(A," ").concat(l);i[A]=l+1;var p=n(d),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)r[p].references++,r[p].updater(u);else{var f=o(u,t);t.byIndex=c,r.splice(c,0,{identifier:d,updater:f,references:1})}a.push(d)}return a}function o(e,r){var n=r.domAPI(r);return n.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;n.update(e=r)}else n.remove()}}e.exports=function(e,o){var i=t(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);r[c].references--}for(var s=t(e,o),A=0;A<i.length;A++){var l=n(i[A]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}i=s}}},569:e=>{var r={};e.exports=function(e,n){var t=function(e){if(void 0===r[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}r[e]=n}return r[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}},216:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:(e,r,n)=>{e.exports=function(e){var r=n.nc;r&&e.setAttribute("nonce",r)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=e.insertStyleElement(e);return{update:function(n){!function(e,r,n){var t="";n.supports&&(t+="@supports (".concat(n.supports,") {")),n.media&&(t+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(t+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),t+=n.css,o&&(t+="}"),n.media&&(t+="}"),n.supports&&(t+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,e,r.options)}(r,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}},687:e=>{e.exports="data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 width=%2753.7%27 height=%2753.7%27 viewBox=%270 0 53.7 53.7%27><path opacity=%27.6%27 fill=%27%23666E6E%27 d=%27M35.6 34.4L28 26.8l7.6-7.6c.2-.2.2-.5 0-.7l-.5-.5c-.2-.2-.5-.2-.7 0l-7.6 7.6-7.5-7.6c-.2-.2-.5-.2-.7 0l-.6.6c-.2.2-.2.5 0 .7l7.6 7.6-7.6 7.5c-.2.2-.2.5 0 .7l.5.5c.2.2.5.2.7 0l7.6-7.6 7.6 7.6c.2.2.5.2.7 0l.5-.5c.2-.2.2-.5 0-.7z%27/></svg>"}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return e[t](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),r=n.n(e),t=n(795),o=n.n(t),i=n(569),a=n.n(i),c=n(565),s=n.n(c),A=n(216),l=n.n(A),d=n(589),p=n.n(d),u=n(313),f={};function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function C(){C=function(){return e};var e={},r=Object.prototype,n=r.hasOwnProperty,t=Object.defineProperty||function(e,r,n){e[r]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(e,r,n){return Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[r]}try{s({},"")}catch(e){s=function(e,r,n){return e[r]=n}}function A(e,r,n,o){var i=r&&r.prototype instanceof p?r:p,a=Object.create(i.prototype),c=new k(o||[]);return t(a,"_invoke",{value:w(e,n,c)}),a}function l(e,r,n){try{return{type:"normal",arg:e.call(r,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=A;var d={};function p(){}function u(){}function f(){}var m={};s(m,i,(function(){return this}));var g=Object.getPrototypeOf,v=g&&g(g(L([])));v&&v!==r&&n.call(v,i)&&(m=v);var y=f.prototype=p.prototype=Object.create(m);function x(e){["next","throw","return"].forEach((function(r){s(e,r,(function(e){return this._invoke(r,e)}))}))}function b(e,r){function o(t,i,a,c){var s=l(e[t],e,i);if("throw"!==s.type){var A=s.arg,d=A.value;return d&&"object"==h(d)&&n.call(d,"__await")?r.resolve(d.__await).then((function(e){o("next",e,a,c)}),(function(e){o("throw",e,a,c)})):r.resolve(d).then((function(e){A.value=e,a(A)}),(function(e){return o("throw",e,a,c)}))}c(s.arg)}var i;t(this,"_invoke",{value:function(e,n){function t(){return new r((function(r,t){o(e,n,r,t)}))}return i=i?i.then(t,t):t()}})}function w(e,r,n){var t="suspendedStart";return function(o,i){if("executing"===t)throw new Error("Generator is already running");if("completed"===t){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=B(a,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===t)throw t="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);t="executing";var s=l(e,r,n);if("normal"===s.type){if(t=n.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(t="completed",n.method="throw",n.arg=s.arg)}}}function B(e,r){var n=r.method,t=e.iterator[n];if(void 0===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=void 0,B(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var o=l(t,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function E(e){var r={tryLoc:e[0]};1 in e&&(r.catchLoc=e[1]),2 in e&&(r.finallyLoc=e[2],r.afterLoc=e[3]),this.tryEntries.push(r)}function I(e){var r=e.completion||{};r.type="normal",delete r.arg,e.completion=r}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function L(e){if(e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var t=-1,o=function r(){for(;++t<e.length;)if(n.call(e,t))return r.value=e[t],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return u.prototype=f,t(y,"constructor",{value:f,configurable:!0}),t(f,"constructor",{value:u,configurable:!0}),u.displayName=s(f,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var r="function"==typeof e&&e.constructor;return!!r&&(r===u||"GeneratorFunction"===(r.displayName||r.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,s(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},x(b.prototype),s(b.prototype,a,(function(){return this})),e.AsyncIterator=b,e.async=function(r,n,t,o,i){void 0===i&&(i=Promise);var a=new b(A(r,n,t,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},x(y),s(y,c,"Generator"),s(y,i,(function(){return this})),s(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var r=Object(e),n=[];for(var t in r)n.push(t);return n.reverse(),function e(){for(;n.length;){var t=n.pop();if(t in r)return e.value=t,e.done=!1,e}return e.done=!0,e}},e.values=L,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(I),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function t(n,t){return a.type="throw",a.arg=e,r.next=n,t&&(r.method="next",r.arg=void 0),!!t}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return t("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return t(i.catchLoc,!0);if(this.prev<i.finallyLoc)return t(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return t(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return t(i.finallyLoc)}}}},abrupt:function(e,r){for(var t=this.tryEntries.length-1;t>=0;--t){var o=this.tryEntries[t];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(e,r){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&r&&(this.next=r),d},finish:function(e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),I(n),d}},catch:function(e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc===e){var t=n.completion;if("throw"===t.type){var o=t.arg;I(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:L(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}function m(e,r,n,t,o,i,a){try{var c=e[i](a),s=c.value}catch(e){return void n(e)}c.done?r(s):Promise.resolve(s).then(t,o)}f.styleTagTransform=p(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),r()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals;var g,v=document.getElementById("search-form"),y=document.getElementById("search-input"),x=document.getElementById("search-icon"),b=document.getElementById("search-results"),w=document.getElementById("close-modal"),B="2af2771c",E="eac9b2f1efd13715519350a0208a1a46",I="";window.onload=function(){k()};var k=function(){v.addEventListener("submit",(function(e){e.preventDefault(),I=e.target.querySelector("input").value,L()})),x.addEventListener("click",(function(e){e.preventDefault(),""!==(I=y.value)&&L()})),w.addEventListener("click",(function(){_()}))};function L(){return j.apply(this,arguments)}function j(){var e;return e=C().mark((function e(){var r,n,t;return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("searchQuery: ",I),r="https://api.edamam.com/search?q=".concat(I,"&app_id=").concat(B,"&app_key=").concat(E,"&from=0&to=6"),e.next=4,fetch(r);case 4:return n=e.sent,e.next=7,n.json();case 7:t=e.sent,g=t.hits,console.log("searchResults: ",g),S(g);case 11:case"end":return e.stop()}}),e)})),j=function(){var r=this,n=arguments;return new Promise((function(t,o){var i=e.apply(r,n);function a(e){m(i,t,o,a,c,"next",e)}function c(e){m(i,t,o,a,c,"throw",e)}a(void 0)}))},j.apply(this,arguments)}var S=function(e){e.forEach((function(e,r){var n=document.createElement("div");n.classList.add("recipe");var t=document.createElement("div");t.classList.add("recipe-label"),t.innerHTML=e.recipe.label,n.appendChild(t);var o=document.createElement("img");o.src=e.recipe.image,o.alt="recipe image",o.classList.add("recipe-image"),n.appendChild(o),n.addEventListener("click",(function(){Y(r)})),b.appendChild(n)}))},Y=function(e){g[e].recipe,document.getElementById("modal-container").classList.replace("inactive","active"),document.getElementById("recipe-details-container").innerHTML=z(e)},_=function(){document.getElementById("modal-container").classList.replace("active","inactive")},z=function(e){var r=g[e].recipe,n='<div class="recipe">';return n+='\n        <div class="recipe-header">\n          <div class="text-container">\n            <h2 class="title">'.concat(r.label,'</h2>\n            <h3 class="title">calories: ').concat(Math.floor(r.calories),'</h3>\n          </div>\n          <div class="image-container">\n            <img src="').concat(r.image,'" alt="img">\n          </div>\n        </div>\n        '),r.ingredients.forEach((function(e,r){n+='\n            <div class="recipe-detail">\n              <div class="image-container">\n                <img src="'.concat(e.image,'" alt="img">\n              </div>\n              <div class="text-container">\n                <h4 class="title">').concat(e.text,"</h4>\n              </div>\n            </div>\n            ")})),n+="</div>"}})()})();
//# sourceMappingURL=index.js.map