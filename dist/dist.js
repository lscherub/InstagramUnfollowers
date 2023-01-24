(()=>{"use strict";var e={99:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"html{background-color:#222 !important}html .iu{margin-bottom:10rem;font-family:system-ui}html .iu .overlay{background-color:#222;color:#fff;height:100%}html .iu header.top-bar{position:fixed;top:0;left:0;right:0;display:flex;align-items:center;justify-content:space-between;padding:1rem;height:2.5rem;background-color:#333;z-index:1}html .iu header .logo{font-family:monospace;font-size:1.5em;cursor:pointer}html .iu footer.bottom-bar{position:fixed;bottom:0;left:0;right:0;display:flex;align-items:center;justify-content:space-between;padding:1rem;background-color:#000;font-weight:bold;z-index:1}html .iu label{cursor:pointer}html .iu input[type=checkbox]{height:1.1rem;width:1.1rem}html .iu a{color:inherit;text-decoration-color:rgba(0,0,0,0);transition:text-decoration-color .1s;cursor:pointer}html .iu a:hover{text-decoration-color:inherit}html .iu button{background:none;border:none;padding:0;cursor:pointer}html .iu button.copy-list{color:#fff;font-size:1rem}html .iu button.run-scan{position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);font-size:2em;color:#fff;border:1px solid #fff;height:160px;width:160px;border-radius:50%}html .iu .progressbar-container{width:175px;height:30px;border-radius:5px;position:relative;border:1px solid #7b7777}html .iu .progressbar-bar{width:0;height:100%;background-color:#7b7777}html .iu .progressbar-text{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}html .iu .results-container{transform:translateY(75px)}html .iu .results-container .alphabet-character{margin:1rem;padding:1rem;font-size:2em;border-bottom:1px solid #333}html .iu .results-container .result-item{display:flex;align-items:center;padding:1rem;border-radius:3px;cursor:pointer}html .iu .results-container .result-item .avatar{width:75px;border-radius:50%}html .iu .results-container .result-item .verified-badge{background-color:#49adf4;border-radius:50%;padding:.2rem .3rem;font-size:.45em;height:fit-content;transform:translateY(-15px)}html .iu .results-container .result-item .private-indicator{border:2px solid #51bb42;border-radius:25px;padding:.5rem;color:#51bb42;font-weight:500}html .toast{position:fixed;bottom:5rem;color:#000;background-color:#fff;border-radius:6px;font-size:1.25em;padding:2rem;transition:transform .2s;z-index:2}html .toast-hidden{transform:translateX(-999rem)}.flex{display:flex}.flex.align-center{align-items:center}.flex.justify-center{justify-content:center}.flex.column{flex-direction:column}.grow{flex:1}.w-100{width:100%}.p-small{padding:.5rem}.p-medium{padding:1rem}.p-large{padding:1.5rem}.p-xlarge{padding:2rem}.fs-small{font-size:.5rem}.fs-medium{font-size:1rem}.fs-large{font-size:1.5rem}.fs-xlarge{font-size:2rem}.clr-inherit{color:inherit}.clr-red{color:#bd2121}.clr-green{color:#56d756}.clr-cyan{color:aqua}.d-none{display:none}",""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},273:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var r=n(379),o=n.n(r),a=n(795),i=n.n(a),s=n(569),c=n.n(s),l=n(565),u=n.n(l),d=n(216),f=n.n(d),p=n(589),m=n.n(p),h=n(99),b={};b.styleTagTransform=m(),b.setAttributes=u(),b.insert=c().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=f(),o()(h.Z,b);const g=h.Z&&h.Z.locals?h.Z.locals:void 0},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var f=n(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var m=o(p,r);r.byIndex=s,t.splice(s,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=r(e,o),l=0;l<a.length;l++){var u=n(a[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},519:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}c((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(s){return function(c){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,s[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}},a=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),n(273);var i,s=[],c=[],l=!1;function u(e){return new Promise((function(t){setTimeout(t,e)}))}function d(e){var t="; ".concat(document.cookie).split("; ".concat(e,"="));if(2===t.length)return t.pop().split(";").shift()}function f(e){var t=document.querySelector(e);if(null===t)throw new Error("Unable to find element by class: ".concat(e));return t}function p(){var e;document.getElementById("current-page").innerHTML=String(1),document.getElementById("last-page").innerHTML=String((e=Math.ceil(s.length/50))<1?1:e),f(".toggle-all-checkbox").disabled=!1;var t=f(".results-container");t.innerHTML="";var n="";a([],s,!0).sort((function(e,t){return e.username>t.username?1:-1})).splice(0,50).forEach((function(e){var r=-1!==c.indexOf(parseInt(e.id,10)),o=e.username.substring(0,1).toUpperCase();n!==o&&(n=o,t.innerHTML+='<div class="alphabet-character">'.concat(n,"</div>")),t.innerHTML+='<label class="result-item">\n            <div class="flex grow align-center">\n                <img class="avatar" alt="" src="'.concat(e.profile_pic_url,'" />&nbsp;&nbsp;&nbsp;&nbsp;\n                <div class="flex column">\n                    <a class="fs-xlarge" target="_blank" href="../').concat(e.username,'">').concat(e.username,'</a>\n                    <span class="fs-medium">').concat(e.full_name,"</span>\n                </div>\n                ").concat(e.is_verified?'&nbsp;&nbsp;&nbsp;<div class="verified-badge">✔</div>':"","\n                ").concat(e.is_private?'<div class="flex justify-center w-100">\n                            <span class="private-indicator">Private</span>\n                          </div>':"",'\n            </div>\n            <input\n                class="account-checkbox"\n                type="checkbox"\n                onchange="toggleUser(').concat(e.id,')"\n                ').concat(r?"checked":""," />\n        </label>")}))}function m(e){return void 0===e&&(e=!0),r(this,void 0,void 0,(function(){var t,n,r,a,i,c,m,h,b,g,v,y,x,w;return o(this,(function(o){switch(o.label){case 0:if(l)return[2];t=[],n=!0,r=0,a=0,i=-1,l=!0,c=d("ds_user_id"),m='https://www.instagram.com/graphql/query/?query_hash=3dec7e2c57367ef3da3d987d89f9dbc8&variables={"id":"'.concat(c,'","include_reel":"true","fetch_mutual":"false","first":"24"}'),h=f(".progressbar-bar"),b=f(".progressbar-text"),g=f(".nonfollower-count"),v=f(".toast"),o.label=1;case 1:if(!n)return[3,9];y=void 0,o.label=2;case 2:return o.trys.push([2,4,,5]),[4,fetch(m).then((function(e){return e.json()}))];case 3:return y=o.sent().data.user.edge_follow,[3,5];case 4:return x=o.sent(),console.error(x),[3,1];case 5:return-1===i&&(i=y.count),n=y.page_info.has_next_page,m=function(e){var t=d("ds_user_id");return'https://www.instagram.com/graphql/query/?query_hash=3dec7e2c57367ef3da3d987d89f9dbc8&variables={"id":"'.concat(t,'","include_reel":"true","fetch_mutual":"false","first":"24","after":"').concat(e,'"}')}(y.page_info.end_cursor),a+=y.edges.length,y.edges.forEach((function(n){!e&&n.node.is_verified||n.node.follows_viewer||t.push(n.node)})),w="".concat(Math.ceil(a/i*100),"%"),b.innerHTML=w,h.style.width=w,g.innerHTML=t.length.toString(),s=t,p(),[4,u(Math.floor(400*Math.random())+1e3)];case 6:return o.sent(),++r>6?(r=0,v.classList.remove("toast-hidden"),v.innerHTML="Sleeping 10 secs to prevent getting temp blocked...",[4,u(1e4)]):[3,8];case 7:o.sent(),o.label=8;case 8:return v.classList.add("toast-hidden"),[3,1];case 9:return h.style.backgroundColor="#59A942",b.innerHTML="DONE",l=!1,[2]}}))}))}window.addEventListener("beforeunload",(function(e){if(l)return(e=e||window.event)&&(e.returnValue="Changes you made may not be saved."),"Changes you made may not be saved."})),"www.instagram.com"===location.hostname?(document.title="InstagramUnfollowers",i=!0,document.body.innerHTML='\n        <main class="iu">\n            <div class="overlay">\n                <header class="top-bar">\n                    <div class="logo" onclick="location.reload()">InstagramUnfollowers</div>\n                    <label class="flex align-center">\n                        <input type="checkbox" class="include-verified-checkbox" '.concat(i?"checked":"",' /> Include verified\n                    </label>\n                    <button class="copy-list" onclick="copyListToClipboard()" disabled>COPY LIST</button>\n                    <button class="fs-large clr-red" onclick="unfollow()">UNFOLLOW <span class="selected-user-count">[0]</span></button>\n                    <input type="checkbox" class="toggle-all-checkbox" onclick="toggleAllUsers(this.checked)" disabled />\n                </header>\n\n                <button class="run-scan">RUN</button>\n                <div class="results-container"></div>\n\n                <footer class="bottom-bar">\n                    <div>Non-followers: <span class="nonfollower-count" /></div>\n                    <div>\n                        <a onclick="previousPage()" class="p-medium">❮</a>\n                        <span id="current-page">1</span>&nbsp;/&nbsp;<span id="last-page">1</span>\n                        <a onclick="nextPage()" class="p-medium">❯</a>\n                    </div>\n                    <div class="progressbar-container">\n                        <div class="progressbar-bar"></div>\n                        <span class="progressbar-text">0%</span>\n                    </div>\n                </footer>\n            </div>\n            <div class="toast toast-hidden"></div>\n        </main>'),f(".run-scan").addEventListener("click",(function(){return function(e){return r(this,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return f(".run-scan").remove(),f(".include-verified-checkbox").disabled=!0,[4,m(e)];case 1:return t.sent(),f(".copy-list").disabled=!1,[2]}}))}))}(i)})),f(".include-verified-checkbox").addEventListener("change",(function(){return i=!i}))):alert("Can be used only on Instagram routes")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,n(519)})();