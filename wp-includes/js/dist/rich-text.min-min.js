this.wp=this.wp||{},this.wp.richText=function(r){var n={};function a(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}return a.m=r,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=307)}({0:function(e,t){!function(){e.exports=this.wp.element}()},15:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",function(){return n})},18:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",function(){return n})},19:function(e,t,r){"use strict";var n=r(33);function a(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||Object(n.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}r.d(t,"a",function(){return a})},2:function(e,t){!function(){e.exports=this.lodash}()},23:function(e,t){!function(){e.exports=this.wp.hooks}()},28:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){return(a="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return n(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)})(e)}r.d(t,"a",function(){return a})},307:function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"getFormatTypes",function(){return c}),r.d(n,"getFormatType",function(){return u}),r.d(n,"getFormatTypeForBareElement",function(){return l}),r.d(n,"getFormatTypeForClassName",function(){return p});var a={};r.r(a),r.d(a,"addFormatTypes",function(){return m}),r.d(a,"removeFormatTypes",function(){return v});var s=r(5),f=r(8),d=r(2),o=Object(s.combineReducers)({formatTypes:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=1<arguments.length?arguments[1]:void 0;switch(t.type){case"ADD_FORMAT_TYPES":return Object(f.a)({},e,Object(d.keyBy)(t.formatTypes,"name"));case"REMOVE_FORMAT_TYPES":return Object(d.omit)(e,t.names)}return e}}),i=r(31),c=Object(i.a)(function(e){return Object.values(e.formatTypes)},function(e){return[e.formatTypes]});function u(e,t){return e.formatTypes[t]}function l(e,r){return Object(d.find)(c(e),function(e){var t=e.tagName;return r===t})}function p(e,r){return Object(d.find)(c(e),function(e){var t=e.className;return null!==t&&0<=" ".concat(r," ").indexOf(" ".concat(t," "))})}function m(e){return{type:"ADD_FORMAT_TYPES",formatTypes:Object(d.castArray)(e)}}function v(e){return{type:"REMOVE_FORMAT_TYPES",names:Object(d.castArray)(e)}}function S(e,t){if(e===t)return!0;if(!e||!t)return!1;if(e.type!==t.type)return!1;var r=e.attributes,n=t.attributes;if(r===n)return!0;if(!r||!n)return!1;var a=Object.keys(r),o=Object.keys(n);if(a.length!==o.length)return!1;for(var i=a.length,c=0;c<i;c++){var u=a[c];if(r[u]!==n[u])return!1}return!0}function g(e){var t=e.formats,r=e.text,n=e.start,a=e.end,o=t.slice(0);return o.forEach(function(e,t){var n=o[t-1];if(n){var a=e.slice(0);a.forEach(function(e,t){var r=n[t];S(e,r)&&(a[t]=r)}),o[t]=a}}),{formats:o,text:r,start:n,end:a}}function h(e,t){var r=e.formats,n=e.text,a=e.start,o=e.end,i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:a,c=3<arguments.length&&void 0!==arguments[3]?arguments[3]:o,u=r.slice(0);if(i===c){var l=Object(d.find)(u[i],{type:t.type});if(!l){var s=u[i-1]||[];return{formats:r,text:n,start:a,end:o,formatPlaceholder:{index:i,format:Object(d.find)(s,{type:t.type})?void 0:t}}}for(;Object(d.find)(u[i],l);)b(u,i,t),i--;for(c++;Object(d.find)(u[c],l);)b(u,c,t),c++}else for(var f=i;f<c;f++)b(u,f,t);return g({formats:u,text:n,start:a,end:o})}function b(e,t,r){if(e[t]){var n=e[t].filter(function(e){return e.type!==r.type});n.push(r),e[t]=n}else e[t]=[r]}function y(e,t){return e.text[t]}function x(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return g(t.reduce(function(e,t){var r=t.formats,n=t.text;return{text:e.text+n,formats:e.formats.concat(r)}}))}Object(s.registerStore)("core/rich-text",{reducer:o,selectors:n,actions:a});var F=r(19),T=r(28),A="\u2028",P="￼",D="\ufeff";function W(e){return 0===e.text.length}function O(e){var t=e.text,r=e.start,n=e.end;return r===n&&(0===t.length||0===r&&t.slice(0,1)===A||r===t.length&&t.slice(-1)===A||t.slice(r-1,n+1)==="".concat(A).concat(A))}function j(e,t){var r=e.implementation;return j.body||(j.body=r.createHTMLDocument("").body),j.body.innerHTML=t,j.body}var w=window.Node,L=w.TEXT_NODE,I=w.ELEMENT_NODE;function N(e,t){for(var r in e)if(e[r]===t)return r}function M(e){var t,r=e.type,n=e.attributes;if(n&&n.class&&(t=Object(s.select)("core/rich-text").getFormatTypeForClassName(n.class))&&(n.class=" ".concat(n.class," ").replace(" ".concat(t.className," ")," ").trim(),n.class||delete n.class),t||(t=Object(s.select)("core/rich-text").getFormatTypeForBareElement(r)),!t)return n?{type:r,attributes:n}:{type:r};if(!n)return{type:t.name};var a={},o={};for(var i in n){var c=N(t.attributes,i);c?a[c]=n[i]:o[i]=n[i]}return{type:t.name,attributes:a,unregisteredAttributes:o}}function E(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.element,r=e.text,n=e.html,a=e.range,o=e.multilineTag,i=e.multilineWrapperTags,c=e.removeNode,u=e.unwrapNode,l=e.filterString,s=e.removeAttribute;return"string"==typeof r&&0<r.length?{formats:Array(r.length),text:r}:("string"==typeof n&&0<n.length&&(t=j(document,n)),"object"!==Object(T.a)(t)?{formats:[],text:""}:o?z({element:t,range:a,multilineTag:o,multilineWrapperTags:i,removeNode:c,unwrapNode:u,filterString:l,removeAttribute:s}):R({element:t,range:a,removeNode:c,unwrapNode:u,filterString:l,removeAttribute:s}))}function k(e,t,r,n){if(r){var a=t.parentNode,o=r.startContainer,i=r.startOffset,c=r.endContainer,u=r.endOffset,l=e.text.length;void 0!==n.start?e.start=l+n.start:t===o&&t.nodeType===L?e.start=l+i:a===o&&t===o.childNodes[i]?e.start=l:a===o&&t===o.childNodes[i-1]?e.start=l+n.text.length:t===o&&(e.start=l),void 0!==n.end?e.end=l+n.end:t===c&&t.nodeType===L?e.end=l+u:a===c&&t===c.childNodes[u-1]?e.end=l+n.text.length:a===c&&t===c.childNodes[u]?e.end=l:t===c&&(e.end=l+u)}}function V(e,t,r){if(t){var n=t.startContainer,a=t.endContainer,o=t.startOffset,i=t.endOffset;return e===n&&(o=r(e.nodeValue.slice(0,o)).length),e===a&&(i=r(e.nodeValue.slice(0,i)).length),{startContainer:n,startOffset:o,endContainer:a,endOffset:i}}}function R(e){var t=e.element,r=e.range,n=e.multilineTag,a=e.multilineWrapperTags,o=e.currentWrapperTags,i=void 0===o?[]:o,c=e.removeNode,u=e.unwrapNode,l=e.filterString,s=e.removeAttribute,f={formats:[],text:""};if(!t)return f;if(!t.hasChildNodes())return k(f,t,r,{formats:[],text:""}),f;for(var d=t.childNodes.length,p=function(e){return e=e.replace(/[\n\r\t]+/g," "),l&&(e=l(e)),e},m=0;m<d;m++){var v=t.childNodes[m],g=v.nodeName.toLowerCase();if(v.nodeType!==L){if(v.nodeType===I)if(c&&c(v)||u&&u(v)&&!v.hasChildNodes())k(f,v,r,{formats:[],text:""});else if("br"!==g){var h=f.formats[f.formats.length-1],b=h&&h[h.length-1],y=void 0,x=void 0;if(!u||!u(v)){var T=M({type:g,attributes:B({element:v,removeAttribute:s})});T&&(y=S(T,b)?b:T)}a&&-1!==a.indexOf(g)?(x=z({element:v,range:r,multilineTag:n,multilineWrapperTags:a,removeNode:c,unwrapNode:u,filterString:l,removeAttribute:s,currentWrapperTags:Object(F.a)(i).concat([y])}),y=void 0):x=R({element:v,range:r,multilineTag:n,multilineWrapperTags:a,removeNode:c,unwrapNode:u,filterString:l,removeAttribute:s});var O=x.text,j=f.text.length;if(k(f,v,r,x),!W(x)||!y||y.attributes){var w=f.formats;if(y&&y.attributes&&0===O.length)y.object=!0,f.text+=P,w[j]?w[j].unshift(y):w[j]=[y];else{f.text+=O,f.formats.length+=O.length;for(var N=x.formats.length;N--;){var E,_=j+N;y&&(w[_]?w[_].push(y):w[_]=[y]),x.formats[N]&&(w[_]?(E=w[_]).push.apply(E,Object(F.a)(x.formats[N])):w[_]=x.formats[N])}}}}else k(f,v,r,{formats:[],text:""}),f.text+="\n",f.formats.length+=1}else{var C=p(v.nodeValue);k(f,v,r=V(v,r,p),{text:C}),f.text+=C,f.formats.length+=C.length}}return f}function z(e){var t=e.element,r=e.range,n=e.multilineTag,a=e.multilineWrapperTags,o=e.removeNode,i=e.unwrapNode,c=e.filterString,u=e.removeAttribute,l=e.currentWrapperTags,s=void 0===l?[]:l,f={formats:[],text:""};if(!t||!t.hasChildNodes())return f;for(var d=t.children.length,p=0;p<d;p++){var m=t.children[p];if(m.nodeName.toLowerCase()===n){var v=R({element:m,range:r,multilineTag:n,multilineWrapperTags:a,currentWrapperTags:s,removeNode:o,unwrapNode:i,filterString:c,removeAttribute:u});if("\n"===v.text){var g=v.start,h=v.end;v={formats:[],text:""},void 0!==g&&(v.start=0),void 0!==h&&(v.end=0)}if(0!==p||0<s.length){var b=0<s.length?[s]:[,];f.formats=f.formats.concat(b),f.text+=A}k(f,m,r,v),f.formats=f.formats.concat(v.formats),f.text+=v.text}}return f}function B(e){var t=e.element,r=e.removeAttribute;if(t.hasAttributes()){for(var n,a=t.attributes.length,o=0;o<a;o++){var i=t.attributes[o],c=i.name,u=i.value;r&&r(c)||((n=n||{})[c]=u)}return n}}function _(e,t){var r=e.formats,n=e.start;if(void 0!==n)return Object(d.find)(r[n],{type:t})}function C(e){return e.end}function H(e){return e.start}function G(e){return e.text}function Y(e){var t=e.start,r=e.end;if(void 0!==t&&void 0!==r)return t===r}function q(e){var a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";return"string"==typeof a&&(a=E({text:a})),g(e.reduce(function(e,t){var r=t.formats,n=t.text;return{text:e.text+a.text+n,formats:e.formats.concat(a.formats,r)}}))}var $=r(15),U=r(18),X=r(0),Z=r(41),K=r.n(Z),J=r(23),Q=r(7),ee=[];function te(o,i){if("string"==typeof(i=Object(f.a)({name:o},i)).name)if(/^[a-z][a-z0-9-]*\/[a-z][a-z0-9-]*$/.test(i.name))if(Object(s.select)("core/rich-text").getFormatType(i.name))window.console.error('Format "'+i.name+'" is already registered.');else if("string"==typeof i.tagName&&""!==i.tagName)if("string"==typeof i.className&&""!==i.className||null===i.className)if(/^[_a-zA-Z]+[a-zA-Z0-9-]*$/.test(i.className)){if(null===i.className){var e=Object(s.select)("core/rich-text").getFormatTypeForBareElement(i.tagName);if(e)return void window.console.error('Format "'.concat(e.name,'" is already registered to handle bare tag name "').concat(i.tagName,'".'))}else{var t=Object(s.select)("core/rich-text").getFormatTypeForClassName(i.className);if(t)return void window.console.error('Format "'.concat(t.name,'" is already registered to handle class name "').concat(i.className,'".'))}if("title"in i&&""!==i.title)if("keywords"in i&&3<i.keywords.length)window.console.error('The format "'+i.name+'" can have a maximum of 3 keywords.');else{if("string"==typeof i.title){Object(s.dispatch)("core/rich-text").addFormatTypes(i);var n=K()(function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:ee,t=1<arguments.length?arguments[1]:void 0;return Object(F.a)(e).concat([t])});return i.__experimentalGetPropsForEditableTreePreparation&&Object(J.addFilter)("experimentalRichText",o,function(r){var e=r;(i.__experimentalCreatePrepareEditableTree||i.__experimentalCreateFormatToValue||i.__experimentalCreateValueToFormat)&&(e=function(a){var e={};if(i.__experimentalCreatePrepareEditableTree&&(e.prepareEditableTree=n(a.prepareEditableTree,i.__experimentalCreatePrepareEditableTree(a["format_".concat(o)],{richTextIdentifier:a.identifier,blockClientId:a.clientId}))),i.__experimentalCreateOnChangeEditableValue){var t=Object.keys(a).reduce(function(e,t){var r=a[t],n="format_".concat(o,"_dispatch_");return t.startsWith(n)&&(e[t.replace(n,"")]=r),e},{});e.onChangeEditableValue=n(a.onChangeEditableValue,i.__experimentalCreateOnChangeEditableValue(Object(f.a)({},a["format_".concat(o)],t),{richTextIdentifier:a.identifier,blockClientId:a.clientId}))}return Object(X.createElement)(r,Object(U.a)({},a,e))});var t=[Object(s.withSelect)(function(e,t){var r=t.clientId,n=t.identifier;return Object($.a)({},"format_".concat(o),i.__experimentalGetPropsForEditableTreePreparation(e,{richTextIdentifier:n,blockClientId:r}))})];return i.__experimentalGetPropsForEditableTreeChangeHandler&&t.push(Object(s.withDispatch)(function(e,t){var r=t.clientId,n=t.identifier,a=i.__experimentalGetPropsForEditableTreeChangeHandler(e,{richTextIdentifier:n,blockClientId:r});return Object(d.mapKeys)(a,function(e,t){return"format_".concat(o,"_dispatch_").concat(t)})})),Object(Q.compose)(t)(e)}),i}window.console.error("Format titles must be strings.")}else window.console.error('The format "'+i.name+'" must have a title.')}else window.console.error("A class name must begin with a letter, followed by any number of hyphens, letters, or numbers.");else window.console.error("Format class names must be a string, or null to handle bare elements.");else window.console.error("Format tag names must be a string.");else window.console.error("Format names must contain a namespace prefix, include only lowercase alphanumeric characters or dashes, and start with a letter. Example: my-plugin/my-custom-format");else window.console.error("Format names must be strings.")}function re(e,t){var r=e.formats,n=e.text,a=e.start,o=e.end,i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:a,c=3<arguments.length&&void 0!==arguments[3]?arguments[3]:o,u=r.slice(0);if(i===c){for(var l=Object(d.find)(u[i],{type:t});Object(d.find)(u[i],l);)ne(u,i,t),i--;for(c++;Object(d.find)(u[c],l);)ne(u,c,t),c++}else for(var s=i;s<c;s++)u[s]&&ne(u,s,t);return g({formats:u,text:n,start:a,end:o})}function ne(e,t,r){var n=e[t].filter(function(e){return e.type!==r});n.length?e[t]=n:delete e[t]}function ae(e,t){var r=e.formats,n=e.text,a=e.start,o=e.end,i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:a,c=3<arguments.length&&void 0!==arguments[3]?arguments[3]:o;"string"==typeof t&&(t=E({text:t}));var u=i+t.text.length;return g({formats:r.slice(0,i).concat(t.formats,r.slice(c)),text:n.slice(0,i)+t.text+n.slice(c),start:u,end:u})}function oe(e,t,r){return ae(e,E(),t,r)}function ie(e,t,c){var u=e.formats,r=e.text,l=e.start,s=e.end;return r=r.replace(t,function(e){for(var t=arguments.length,r=new Array(1<t?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var a,o=r[r.length-2],i=c;return"function"==typeof i&&(i=c.apply(void 0,[e].concat(r))),"object"===Object(T.a)(i)?(a=i.formats,i=i.text):(a=Array(i.length),u[o]&&(a=a.fill(u[o]))),u=u.slice(0,o).concat(a,u.slice(o+e.length)),l&&(l=s=o+i.length),i}),g({formats:u,text:r,start:l,end:s})}function ce(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:e.start,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:e.end,n=G(e).slice(0,t).lastIndexOf(A),a=e.formats[n],o=[,];return a&&(o=[a]),ae(e,{formats:o,text:A},t,r)}var ue="￼";function le(e,t,r,n){return ae(e,{text:ue,formats:[[Object(f.a)({},t,{object:!0})]]},r,n)}function se(e){var t=e.formats,r=e.text,n=e.start,a=e.end,o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:n,i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:a;return void 0===o||void 0===i?{formats:t,text:r}:{formats:t.slice(o,i),text:r.slice(o,i)}}function fe(e,n){var a=e.formats,t=e.text,o=e.start,i=e.end;if("string"!=typeof n)return function(e){var t=e.formats,r=e.text,n=e.start,a=e.end,o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:n,i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:a,c={formats:t.slice(0,o),text:r.slice(0,o)},u={formats:t.slice(i),text:r.slice(i),start:0,end:0};return[ie(c,/\u2028+$/,""),ie(u,/^\u2028+/,"")]}.apply(void 0,arguments);var c=0;return t.split(n).map(function(e){var t=c,r={formats:a.slice(t,t+e.length),text:e};return c+=n.length+e.length,void 0!==o&&void 0!==i&&(t<=o&&o<c?r.start=o-t:o<t&&t<i&&(r.start=0),t<=i&&i<c?r.end=i-t:o<c&&c<i&&(r.end=e.length)),r})}function de(e){var t=e.type,r=e.attributes,n=e.unregisteredAttributes,a=e.object,o=(i=t,Object(s.select)("core/rich-text").getFormatType(i)),i;if(!o)return{type:t,attributes:r,object:a};var c=Object(f.a)({},n);for(var u in r){var l=o.attributes[u];l?c[l]=r[u]:c[u]=r[u]}return o.className&&(c.class?c.class="".concat(o.className," ").concat(c.class):c.class=o.className),{type:o.tagName,object:o.object,attributes:c}}function pe(e){var r,c,n,t=e.value,u=e.multilineTag,a=e.multilineWrapperTags,l=void 0===a?[]:a,o=e.createEmpty,s=e.append,f=e.getLastChild,d=e.getParent,p=e.isText,m=e.getText,v=e.remove,g=e.appendText,h=e.onStartIndex,b=e.onEndIndex,i=e.isEditableTree,y=t.formats,x=t.text,T=t.start,O=t.end,j=t.formatPlaceholder,w=y.length+1,N=o(),E={type:u};function _(e,t){if(i&&j&&j.index===t){var r=d(e);e=void 0===j.format?d(r):s(r,de(j.format)),e=s(e,D)}return e}u?(s(s(N,{type:u}),""),c=r=[E]):s(N,"");for(var C=function(e){var a=x.charAt(e),o=y[e];u&&(o=a===A?r=(o||[]).reduce(function(e,t){return a===A&&-1!==l.indexOf(t.type)&&(e.push(t),e.push(E)),e},[E]):Object(F.a)(r).concat(Object(F.a)(o||[])));var i=f(N);if(n===A){for(var t=i;!p(t);)t=f(t);h&&T===e&&h(N,t),b&&O===e&&b(N,t)}if(o&&o.forEach(function(e,t){if(!i||!c||e!==c[t]||a===A&&o.length-1===t){var r=d(i),n=s(r,de(e));p(i)&&0===m(i).length&&v(i),i=s(e.object?r:n,"")}else i=f(i)}),a===A)return c=o,n=a,"continue";i=_(i,0),0===e&&(h&&0===T&&h(N,i),b&&0===O&&b(N,i)),a!==P&&("\n"===a?(i=s(d(i),{type:"br",object:!0}),i=s(d(i),"")):p(i)?g(i,a):i=s(d(i),a)),i=_(i,e+1),h&&T===e+1&&h(N,i),b&&O===e+1&&b(N,i),c=o,n=a},S=0;S<w;S++)C(S);return N}var me=window.Node,ve=me.TEXT_NODE,ge=me.ELEMENT_NODE;function he(e,t,r){for(var n=e.parentNode,a=0;e=e.previousSibling;)a++;return r=[a].concat(Object(F.a)(r)),n!==t&&(r=he(n,t,r)),r}function be(e,t){for(t=Object(F.a)(t);e&&1<t.length;)e=e.childNodes[t.shift()];return{node:e,offset:t[0]}}var ye=function(){return j(document,"")};function xe(e,t){"string"==typeof t&&(t=e.ownerDocument.createTextNode(t));var r=t,n=r.type,a=r.attributes;if(n)for(var o in t=e.ownerDocument.createElement(n),a)t.setAttribute(o,a[o]);return e.appendChild(t)}function Te(e,t){e.appendData(t)}function Oe(e){return e.lastChild}function je(e){return e.parentNode}function we(e){return e.nodeType===ve}function Ne(e){return e.nodeValue}function Ee(e){return e.parentNode.removeChild(e)}function _e(e){var t=e.value,r=e.multilineTag,n=e.multilineWrapperTags,a=e.createLinePadding,o=e.prepareEditableTree,i=[],c=[],u=pe({value:Object(f.a)({},t,{formats:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],r=1<arguments.length?arguments[1]:void 0;return e.reduce(function(e,t){return t(e,r.text)},r.formats)}(o,t)}),multilineTag:r,multilineWrapperTags:n,createEmpty:ye,append:xe,getLastChild:Oe,getParent:je,isText:we,getText:Ne,remove:Ee,appendText:Te,onStartIndex:function(e,t){i=he(t,e,[t.nodeValue.length])},onEndIndex:function(e,t){c=he(t,e,[t.nodeValue.length])},isEditableTree:!0});return a&&function e(t){for(var r=t.element,n=t.createLinePadding,a=t.multilineWrapperTags,o=r.childNodes.length,i=r.ownerDocument,c=0;c<o;c++){var u=r.childNodes[c];u.nodeType===ve?1!==o||u.nodeValue||r.appendChild(n(i)):(a&&!u.previousSibling&&-1!==a.indexOf(u.nodeName.toLowerCase())&&r.insertBefore(n(i),u),e({element:u,createLinePadding:n,multilineWrapperTags:a}))}}({element:u,createLinePadding:a,multilineWrapperTags:n}),{body:u,selection:{startPath:i,endPath:c}}}function Ce(e){var t=e.value,r=e.current,n=_e({value:t,multilineTag:e.multilineTag,multilineWrapperTags:e.multilineWrapperTags,createLinePadding:e.createLinePadding,prepareEditableTree:e.prepareEditableTree}),a=n.body,o=n.selection;!function(e,t){for(var r,n=0;r=e.firstChild;){var a=t.childNodes[n];a?a.isEqualNode(r)?e.removeChild(r):t.replaceChild(r,a):t.appendChild(r),n++}for(;t.childNodes[n];)t.removeChild(t.childNodes[n])}(a,r),void 0!==t.start&&function(e,t){var r=be(t,e.startPath),n=r.node,a=r.offset,o=be(t,e.endPath),i=o.node,c=o.offset,u=window.getSelection(),l=t.ownerDocument.createRange(),s=n===i&&a===c,f,d;if(s&&0===a&&n.previousSibling&&n.previousSibling.nodeType===ge&&"BR"!==n.previousSibling.nodeName?(n.insertData(0,"\ufeff"),l.setStart(n,1),l.setEnd(i,1)):s&&0===a&&n===ve&&0===n.nodeValue.length?(n.insertData(0,"\ufeff"),l.setStart(n,1),l.setEnd(i,1)):(l.setStart(n,a),l.setEnd(i,c)),0<u.rangeCount){if(f=l,d=u.getRangeAt(0),f.startContainer===d.startContainer&&f.startOffset===d.startOffset&&f.endContainer===d.endContainer&&f.endOffset===d.endOffset)return;u.removeAllRanges()}u.addRange(l)}(o,r)}var Se=r(61);function Fe(e){return Ve(pe({value:e.value,multilineTag:e.multilineTag,multilineWrapperTags:e.multilineWrapperTags,createEmpty:Ae,append:De,getLastChild:Pe,getParent:Le,isText:Ie,getText:Me,remove:ke,appendText:We}).children)}function Ae(){return{}}function Pe(e){var t=e.children;return t&&t[t.length-1]}function De(e,t){return"string"==typeof t&&(t={text:t}),(t.parent=e).children=e.children||[],e.children.push(t),t}function We(e,t){e.text+=t}function Le(e){return e.parent}function Ie(e){return"string"==typeof e.text}function Me(e){return e.text}function ke(e){var t=e.parent.children.indexOf(e);return-1!==t&&e.parent.children.splice(t,1),e}function Ve(){return(0<arguments.length&&void 0!==arguments[0]?arguments[0]:[]).map(function(e){return void 0===e.text?function(e){var t=e.type,r=e.attributes,n=e.object,a=e.children,o="";for(var i in r)Object(Se.isValidAttributeName)(i)&&(o+=" ".concat(i,'="').concat(Object(Se.escapeAttribute)(r[i]),'"'));return n?"<".concat(t).concat(o,">"):"<".concat(t).concat(o,">").concat(Ve(a),"</").concat(t,">")}(e):Object(Se.escapeHTML)(e.text)}).join("")}function Re(e,t){return _(e,t.type)?re(e,t.type):h(e,t)}function ze(e){var t=Object(s.select)("core/rich-text").getFormatType(e);if(t)return t.__experimentalCreatePrepareEditableTree&&t.__experimentalGetPropsForEditableTreePreparation&&Object(J.removeFilter)("experimentalRichText",e),Object(s.dispatch)("core/rich-text").removeFormatTypes(e),t;window.console.error("Format ".concat(e," is not registered."))}r.d(t,"applyFormat",function(){return h}),r.d(t,"charAt",function(){return y}),r.d(t,"concat",function(){return x}),r.d(t,"create",function(){return E}),r.d(t,"getActiveFormat",function(){return _}),r.d(t,"getSelectionEnd",function(){return C}),r.d(t,"getSelectionStart",function(){return H}),r.d(t,"getTextContent",function(){return G}),r.d(t,"isCollapsed",function(){return Y}),r.d(t,"isEmpty",function(){return W}),r.d(t,"isEmptyLine",function(){return O}),r.d(t,"join",function(){return q}),r.d(t,"registerFormatType",function(){return te}),r.d(t,"removeFormat",function(){return re}),r.d(t,"remove",function(){return oe}),r.d(t,"replace",function(){return ie}),r.d(t,"insert",function(){return ae}),r.d(t,"insertLineSeparator",function(){return ce}),r.d(t,"insertObject",function(){return le}),r.d(t,"slice",function(){return se}),r.d(t,"split",function(){return fe}),r.d(t,"apply",function(){return Ce}),r.d(t,"unstableToDom",function(){return _e}),r.d(t,"toHTMLString",function(){return Fe}),r.d(t,"toggleFormat",function(){return Re}),r.d(t,"LINE_SEPARATOR",function(){return A}),r.d(t,"unregisterFormatType",function(){return ze})},31:function(e,t,r){"use strict";var s,n;function a(e){return[e]}function f(e){return!!e&&"object"==typeof e}function d(){var e={clear:function(){e.head=null}};return e}function p(e,t,r){var n;if(e.length!==t.length)return!1;for(n=r;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}s={},n="undefined"!=typeof WeakMap,t.a=function(i,c){var u,l;function e(){u=n?new WeakMap:d()}function t(){var e,t,r,n,a,o=arguments.length;for(n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];for(a=c.apply(null,n),(e=l(a)).isUniqueByDependants||(e.lastDependants&&!p(a,e.lastDependants,0)&&e.clear(),e.lastDependants=a),t=e.head;t;){if(p(t.args,n,1))return t!==e.head&&(t.prev.next=t.next,t.next&&(t.next.prev=t.prev),t.next=e.head,t.prev=null,e.head.prev=t,e.head=t),t.val;t=t.next}return t={val:i.apply(null,n)},n[0]=null,t.args=n,e.head&&((e.head.prev=t).next=e.head),(e.head=t).val}return c||(c=a),l=n?function(e){var t,r,n,a,o=u,i=!0;for(t=0;t<e.length;t++){if(!f(r=e[t])){i=!1;break}o=o.has(r)?o.get(r):(n=new WeakMap,o.set(r,n),n)}return o.has(s)||((a=d()).isUniqueByDependants=i,o.set(s,a)),o.get(s)}:function(){return u},t.getDependants=c,(t.clear=e)(),t}},33:function(e,t,r){"use strict";function n(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}r.d(t,"a",function(){return n})},41:function(e,t,r){e.exports=function(a,e){var o,i,c,u=0;function t(){var e,t,r=i,n=arguments.length;e:for(;r;){if(r.args.length===arguments.length){for(t=0;t<n;t++)if(r.args[t]!==arguments[t]){r=r.next;continue e}return r!==i&&(r===c&&(c=r.prev),r.prev.next=r.next,r.next&&(r.next.prev=r.prev),r.next=i,r.prev=null,i.prev=r,i=r),r.val}r=r.next}for(e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return r={args:e,val:a.apply(null,e)},i?(i.prev=r).next=i:c=r,u===o?(c=c.prev).next=null:u++,(i=r).val}return e&&e.maxSize&&(o=e.maxSize),t.clear=function(){c=i=null,u=0},t}},5:function(e,t){!function(){e.exports=this.wp.data}()},61:function(e,t){!function(){e.exports=this.wp.escapeHtml}()},7:function(e,t){!function(){e.exports=this.wp.compose}()},8:function(e,t,r){"use strict";r.d(t,"a",function(){return n});var a=r(15);function n(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(e){Object(a.a)(t,e,r[e])})}return t}}});