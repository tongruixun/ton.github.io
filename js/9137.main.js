/*! For license information please see 9137.main.js.LICENSE.txt */
(self.webpackChunktoy=self.webpackChunktoy||[]).push([[9137,7978],{7228:r=>{r.exports=function(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}},2858:r=>{r.exports=function(r){if(Array.isArray(r))return r}},3884:r=>{r.exports=function(r,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var e=[],n=!0,i=!1,o=void 0;try{for(var a,s=r[Symbol.iterator]();!(n=(a=s.next()).done)&&(e.push(a.value),!t||e.length!==t);n=!0);}catch(r){i=!0,o=r}finally{try{n||null==s.return||s.return()}finally{if(i)throw o}}return e}}},521:r=>{r.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3038:(r,t,e)=>{var n=e(2858),i=e(3884),o=e(379),a=e(521);r.exports=function(r,t){return n(r)||i(r,t)||o(r,t)||a()}},379:(r,t,e)=>{var n=e(7228);r.exports=function(r,t){if(r){if("string"==typeof r)return n(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(r,t):void 0}}},9137:(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>u});var n=e(3038),i=e.n(n),o=e(7294),a=e(5697),s=e.n(a),c=e(7166),p=e.n(c),l=e(7978),d=p().bind(l.default);function f(r){var t=(0,o.useState)(""),e=i()(t,2),n=e[0],a=e[1];return(0,o.useEffect)((function(){var t;a(null===(t=r.dirList[0])||void 0===t?void 0:t.label)}),[]),o.createElement("div",{className:d({directoryWrapper:!0})},r.dirList.map((function(r,t){var e=r.label,i=r.level;return o.createElement("div",{className:d({directoryLi:!0,isActive:n===e}),onClick:function(){return function(r){if(a(r),r){var t=document.getElementById(r);t&&t.scrollIntoView({block:"start",behavior:"smooth"})}}(e)},key:t,style:{fontSize:20-2*i,paddingLeft:10*i}},e)})))}const u=f;f.propTypes={dirList:s().arrayOf(s().object)},f.defaultProps={dirList:[]}},7166:(r,t)=>{var e;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var r=[],t=0;t<arguments.length;t++){var e=arguments[t];if(e){var o=typeof e;if("string"===o||"number"===o)r.push(this&&this[e]||e);else if(Array.isArray(e))r.push(i.apply(this,e));else if("object"===o)for(var a in e)n.call(e,a)&&e[a]&&r.push(this&&this[a]||a)}}return r.join(" ")}r.exports?(i.default=i,r.exports=i):void 0===(e=function(){return i}.apply(t,[]))||(r.exports=e)}()},3781:(r,t,e)=>{"use strict";e.d(t,{Z:()=>o});var n=e(3645),i=e.n(n)()((function(r){return r[1]}));i.push([r.id,".src-page-frontEnd-postDetail-directory-index__directoryWrapper {\n  display: inline;\n  border-left: 1px solid #a2a9b6;\n  font-size: 14px;\n  text-align: left;\n  position: fixed;\n  right: 48px;\n  top: 48px;\n}\n.src-page-frontEnd-postDetail-directory-index__directoryWrapper .src-page-frontEnd-postDetail-directory-index__directoryLi {\n  display: block;\n  padding: 0 8px;\n  line-height: 24px;\n  margin-left: -2px;\n  border-left: 3px solid transparent;\n  color: #242934;\n  opacity: 0.6;\n  transition: opacity 0.2s;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: pointer;\n  width: 256px;\n}\n.src-page-frontEnd-postDetail-directory-index__directoryWrapper .src-page-frontEnd-postDetail-directory-index__directoryLi:hover {\n  color: #34538b;\n  opacity: 1;\n}\n.src-page-frontEnd-postDetail-directory-index__directoryWrapper .src-page-frontEnd-postDetail-directory-index__isActive {\n  border-left-color: #34538b;\n  color: #34538b;\n  opacity: 1;\n}\n",""]),i.locals={directoryWrapper:"src-page-frontEnd-postDetail-directory-index__directoryWrapper",directoryLi:"src-page-frontEnd-postDetail-directory-index__directoryLi",isActive:"src-page-frontEnd-postDetail-directory-index__isActive"};const o=i},7978:(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>a});var n=e(3379),i=e.n(n),o=e(3781);i()(o.Z,{insert:"head",singleton:!1});const a=o.Z.locals||{}}}]);