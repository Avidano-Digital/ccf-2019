this.wp=this.wp||{},this.wp.richText=function(r){var n={};function a(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}return a.m=r,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function e(){return t.default}:function e(){return t};return a.d(e,"a",e),e},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=307)}({0:function(e,t){!function(){e.exports=this.wp.element}()},15:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",function(){return n})},18:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",function(){return n})},19:function(e,t,r){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}var a=r(33);function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function i(e){return n(e)||Object(a.a)(e)||o()}r.d(t,"a",function(){return i})},2:function(e,t){!function(){e.exports=this.lodash}()},23:function(e,t){!function(){e.exports=this.wp.hooks}()},28:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function a(e){return(a="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function e(t){return n(t)}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)})(e)}r.d(t,"a",function(){return a})},307:function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"getFormatTypes",function(){return s}),r.d(n,"getFormatType",function(){return f}),r.d(n,"getFormatTypeForBareElement",function(){return d}),r.d(n,"getFormatTypeForClassName",function(){return m});var a={};r.r(a),r.d(a,"addFormatTypes",function(){return v}),r.d(a,"removeFormatTypes",function(){return g});var u=r(5),l=r(8),p=r(2);function o(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=1<arguments.length?arguments[1]:void 0;switch(t.type){case"ADD_FORMAT_TYPES":return Object(l.a)({},e,Object(p.keyBy)(t.formatTypes,"name"));case"REMOVE_FORMAT_TYPES":return Object(p.omit)(e,t.names)}return e}var i=Object(u.combineReducers)({formatTypes:o}),c=r(31),s=Object(c.a)(function(e){return Object.values(e.formatTypes)},function(e){return[e.formatTypes]});function f(e,t){return e.formatTypes[t]}function d(e,r){return Object(p.find)(s(e),function(e){var t=e.tagName;return r===t})}function m(e,r){return Object(p.find)(s(e),function(e){var t=e.className;return null!==t&&0<=" ".concat(r," ").indexOf(" ".concat(t," "))})}function v(e){return{type:"ADD_FORMAT_TYPES",formatTypes:Object(p.castArray)(e)}}function g(e){return{type:"REMOVE_FORMAT_TYPES",names:Object(p.castArray)(e)}}function S(e,t){if(e===t)return!0;if(!e||!t)return!1;if(e.type!==t.type)return!1;var r=e.attributes,n=t.attributes;if(r===n)return!0;if(!r||!n)return!1;var a=Object.keys(r),o=Object.keys(n);if(a.length!==o.length)return!1;for(var i=a.length,c=0;c<i;c++){var u=a[c];if(r[u]!==n[u])return!1}return!0}function h(e){var t=e.formats,r=e.text,n=e.start,a=e.end,o=t.slice(0);return o.forEach(function(e,t){var n=o[t-1];if(n){var a=e.slice(0);a.forEach(function(e,t){var r=n[t];S(e,r)&&(a[t]=r)}),o[t]=a}}),{formats:o,text:r,start:n,end:a}}function b(e,t){var r=e.formats,n=e.text,a=e.start,o=e.end,i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:a,c=3<arguments.length&&void 0!==arguments[3]?arguments[3]:o,u=r.slice(0);if(i===c){var l=Object(p.find)(u[i],{type:t.type});if(!l){var s=u[i-1]||[],f;return{formats:r,text:n,start:a,end:o,formatPlaceholder:{index:i,format:Object(p.find)(s,{type:t.type})?void 0:t}}}for(;Object(p.find)(u[i],l);)y(u,i,t),i--;for(c++;Object(p.find)(u[c],l);)y(u,c,t),c++}else for(var d=i;d<c;d++)y(u,d,t);return h({formats:u,text:n,start:a,end:o})}function y(e,t,r){if(e[t]){var n=e[t].filter(function(e){var t;return e.type!==r.type});n.push(r),e[t]=n}else e[t]=[r]}function x(e,t){var r;return e.text[t]}function T(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return h(t.reduce(function(e,t){var r=t.formats,n=t.text;return{text:e.text+n,formats:e.formats.concat(r)}}))}Object(u.registerStore)("core/rich-text",{reducer:i,selectors:n,actions:a});var A=r(19),O=r(28),P="\u2028",D="￼",W="\ufeff";function F(e){var t;return 0===e.text.length}function j(e){var t=e.text,r=e.start,n=e.end;return r===n&&(0===t.length||(0===r&&t.slice(0,1)===P||(r===t.length&&t.slice(-1)===P||t.slice(r-1,n+1)==="".concat(P).concat(P))))}function w(e,t){var r=e.implementation;return w.body||(w.body=r.createHTMLDocument("").body),w.body.innerHTML=t,w.body}var N=window.Node,L=N.TEXT_NODE,I=N.ELEMENT_NODE;function E(){return{formats:[],text:""}}function _(e,t){for(var r in e)if(e[r]===t)return r}function M(e){var t=e.type,r=e.attributes,n;if(r&&r.class&&(n=Object(u.select)("core/rich-text").getFormatTypeForClassName(r.class))&&(r.class=" ".concat(r.class," ").replace(" ".concat(n.className," ")," ").trim(),r.class||delete r.class),n||(n=Object(u.select)("core/rich-text").getFormatTypeForBareElement(t)),!n)return r?{type:t,attributes:r}:{type:t};if(!r)return{type:n.name};var a={},o={};for(var i in r){var c=_(n.attributes,i);c?a[c]=r[i]:o[i]=r[i]}return{type:n.name,attributes:a,unregisteredAttributes:o}}function C(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.element,r=e.text,n=e.html,a=e.range,o=e.multilineTag,i=e.multilineWrapperTags,c=e.removeNode,u=e.unwrapNode,l=e.filterString,s=e.removeAttribute;return"string"==typeof r&&0<r.length?{formats:Array(r.length),text:r}:("string"==typeof n&&0<n.length&&(t=w(document,n)),"object"!==Object(O.a)(t)?{formats:[],text:""}:o?z({element:t,range:a,multilineTag:o,multilineWrapperTags:i,removeNode:c,unwrapNode:u,filterString:l,removeAttribute:s}):R({element:t,range:a,removeNode:c,unwrapNode:u,filterString:l,removeAttribute:s}))}function k(e,t,r,n){if(r){var a=t.parentNode,o=r.startContainer,i=r.startOffset,c=r.endContainer,u=r.endOffset,l=e.text.length;void 0!==n.start?e.start=l+n.start:t===o&&t.nodeType===L?e.start=l+i:a===o&&t===o.childNodes[i]?e.start=l:a===o&&t===o.childNodes[i-1]?e.start=l+n.text.length:t===o&&(e.start=l),void 0!==n.end?e.end=l+n.end:t===c&&t.nodeType===L?e.end=l+u:a===c&&t===c.childNodes[u-1]?e.end=l+n.text.length:a===c&&t===c.childNodes[u]?e.end=l:t===c&&(e.end=l+u)}}function V(e,t,r){if(t){var n=t.startContainer,a=t.endContainer,o=t.startOffset,i=t.endOffset;return e===n&&(o=r(e.nodeValue.slice(0,o)).length),e===a&&(i=r(e.nodeValue.slice(0,i)).length),{startContainer:n,startOffset:o,endContainer:a,endOffset:i}}}function R(e){var t=e.element,r=e.range,n=e.multilineTag,a=e.multilineWrapperTags,o=e.currentWrapperTags,i=void 0===o?[]:o,c=e.removeNode,u=e.unwrapNode,l=e.filterString,s=e.removeAttribute,f={formats:[],text:""};if(!t)return f;if(!t.hasChildNodes())return k(f,t,r,{formats:[],text:""}),f;for(var d=t.childNodes.length,p=function e(t){return t=t.replace(/[\n\r\t]+/g," "),l&&(t=l(t)),t},m=0;m<d;m++){var v=t.childNodes[m],g=v.nodeName.toLowerCase();if(v.nodeType!==L){if(v.nodeType===I)if(c&&c(v)||u&&u(v)&&!v.hasChildNodes())k(f,v,r,{formats:[],text:""});else if("br"!==g){var h=f.formats[f.formats.length-1],b=h&&h[h.length-1],y=void 0,x=void 0;if(!u||!u(v)){var T=M({type:g,attributes:B({element:v,removeAttribute:s})});T&&(y=S(T,b)?b:T)}a&&-1!==a.indexOf(g)?(x=z({element:v,range:r,multilineTag:n,multilineWrapperTags:a,removeNode:c,unwrapNode:u,filterString:l,removeAttribute:s,currentWrapperTags:Object(A.a)(i).concat([y])}),y=void 0):x=R({element:v,range:r,multilineTag:n,multilineWrapperTags:a,removeNode:c,unwrapNode:u,filterString:l,removeAttribute:s});var O=x.text,j=f.text.length;if(k(f,v,r,x),!F(x)||!y||y.attributes){var w=f.formats;if(y&&y.attributes&&0===O.length)y.object=!0,f.text+=D,w[j]?w[j].unshift(y):w[j]=[y];else{f.text+=O,f.formats.length+=O.length;for(var N=x.formats.length;N--;){var E=j+N,_;if(y&&(w[E]?w[E].push(y):w[E]=[y]),x.formats[N])if(w[E])(_=w[E]).push.apply(_,Object(A.a)(x.formats[N]));else w[E]=x.formats[N]}}}}else k(f,v,r,{formats:[],text:""}),f.text+="\n",f.formats.length+=1}else{var C=p(v.nodeValue);k(f,v,r=V(v,r,p),{text:C}),f.text+=C,f.formats.length+=C.length}}return f}function z(e){var t=e.element,r=e.range,n=e.multilineTag,a=e.multilineWrapperTags,o=e.removeNode,i=e.unwrapNode,c=e.filterString,u=e.removeAttribute,l=e.currentWrapperTags,s=void 0===l?[]:l,f={formats:[],text:""};if(!t||!t.hasChildNodes())return f;for(var d=t.children.length,p=0;p<d;p++){var m=t.children[p];if(m.nodeName.toLowerCase()===n){var v=R({element:m,range:r,multilineTag:n,multilineWrapperTags:a,currentWrapperTags:s,removeNode:o,unwrapNode:i,filterString:c,removeAttribute:u});if("\n"===v.text){var g=v.start,h=v.end;v={formats:[],text:""},void 0!==g&&(v.start=0),void 0!==h&&(v.end=0)}if(0!==p||0<s.length){var b=0<s.length?[s]:[,];f.formats=f.formats.concat(b),f.text+=P}k(f,m,r,v),f.formats=f.formats.concat(v.formats),f.text+=v.text}}return f}function B(e){var t=e.element,r=e.removeAttribute;if(t.hasAttributes()){for(var n=t.attributes.length,a,o=0;o<n;o++){var i=t.attributes[o],c=i.name,u=i.value;r&&r(c)||((a=a||{})[c]=u)}return a}}function H(e,t){var r=e.formats,n=e.start;if(void 0!==n)return Object(p.find)(r[n],{type:t})}function G(e){var t;return e.end}function Y(e){var t;return e.start}function q(e){var t;return e.text}function $(e){var t=e.start,r=e.end;if(void 0!==t&&void 0!==r)return t===r}function U(e){var a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";return"string"==typeof a&&(a=C({text:a})),h(e.reduce(function(e,t){var r=t.formats,n=t.text;return{text:e.text+a.text+n,formats:e.formats.concat(a.formats,r)}}))}var X=r(15),Z=r(18),K=r(0),J=r(41),Q=r.n(J),ee=r(23),te=r(7),re=[];function ne(i,c){if("string"==typeof(c=Object(l.a)({name:i},c)).name)if(/^[a-z][a-z0-9-]*\/[a-z][a-z0-9-]*$/.test(c.name))if(Object(u.select)("core/rich-text").getFormatType(c.name))window.console.error('Format "'+c.name+'" is already registered.');else if("string"==typeof c.tagName&&""!==c.tagName)if("string"==typeof c.className&&""!==c.className||null===c.className)if(/^[_a-zA-Z]+[a-zA-Z0-9-]*$/.test(c.className)){if(null===c.className){var e=Object(u.select)("core/rich-text").getFormatTypeForBareElement(c.tagName);if(e)return void window.console.error('Format "'.concat(e.name,'" is already registered to handle bare tag name "').concat(c.tagName,'".'))}else{var t=Object(u.select)("core/rich-text").getFormatTypeForClassName(c.className);if(t)return void window.console.error('Format "'.concat(t.name,'" is already registered to handle class name "').concat(c.className,'".'))}if("title"in c&&""!==c.title)if("keywords"in c&&3<c.keywords.length)window.console.error('The format "'+c.name+'" can have a maximum of 3 keywords.');else{if("string"==typeof c.title){Object(u.dispatch)("core/rich-text").addFormatTypes(c);var a=Q()(function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:re,t=1<arguments.length?arguments[1]:void 0;return Object(A.a)(e).concat([t])});return c.__experimentalGetPropsForEditableTreePreparation&&Object(ee.addFilter)("experimentalRichText",i,function(n){var e=n;(c.__experimentalCreatePrepareEditableTree||c.__experimentalCreateFormatToValue||c.__experimentalCreateValueToFormat)&&(e=function e(o){var t={};if(c.__experimentalCreatePrepareEditableTree&&(t.prepareEditableTree=a(o.prepareEditableTree,c.__experimentalCreatePrepareEditableTree(o["format_".concat(i)],{richTextIdentifier:o.identifier,blockClientId:o.clientId}))),c.__experimentalCreateOnChangeEditableValue){var r=Object.keys(o).reduce(function(e,t){var r=o[t],n="format_".concat(i,"_dispatch_"),a;t.startsWith(n)&&(e[t.replace(n,"")]=r);return e},{});t.onChangeEditableValue=a(o.onChangeEditableValue,c.__experimentalCreateOnChangeEditableValue(Object(l.a)({},o["format_".concat(i)],r),{richTextIdentifier:o.identifier,blockClientId:o.clientId}))}return Object(K.createElement)(n,Object(Z.a)({},o,t))});var t=[Object(u.withSelect)(function(e,t){var r=t.clientId,n=t.identifier;return Object(X.a)({},"format_".concat(i),c.__experimentalGetPropsForEditableTreePreparation(e,{richTextIdentifier:n,blockClientId:r}))})];return c.__experimentalGetPropsForEditableTreeChangeHandler&&t.push(Object(u.withDispatch)(function(e,t){var r=t.clientId,n=t.identifier,a=c.__experimentalGetPropsForEditableTreeChangeHandler(e,{richTextIdentifier:n,blockClientId:r});return Object(p.mapKeys)(a,function(e,t){return"format_".concat(i,"_dispatch_").concat(t)})})),Object(te.compose)(t)(e)}),c}window.console.error("Format titles must be strings.")}else window.console.error('The format "'+c.name+'" must have a title.')}else window.console.error("A class name must begin with a letter, followed by any number of hyphens, letters, or numbers.");else window.console.error("Format class names must be a string, or null to handle bare elements.");else window.console.error("Format tag names must be a string.");else window.console.error("Format names must contain a namespace prefix, include only lowercase alphanumeric characters or dashes, and start with a letter. Example: my-plugin/my-custom-format");else window.console.error("Format names must be strings.")}function ae(e,t){var r=e.formats,n=e.text,a=e.start,o=e.end,i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:a,c=3<arguments.length&&void 0!==arguments[3]?arguments[3]:o,u=r.slice(0);if(i===c){for(var l=Object(p.find)(u[i],{type:t});Object(p.find)(u[i],l);)oe(u,i,t),i--;for(c++;Object(p.find)(u[c],l);)oe(u,c,t),c++}else for(var s=i;s<c;s++)u[s]&&oe(u,s,t);return h({formats:u,text:n,start:a,end:o})}function oe(e,t,r){var n=e[t].filter(function(e){var t;return e.type!==r});n.length?e[t]=n:delete e[t]}function ie(e,t){var r=e.formats,n=e.text,a=e.start,o=e.end,i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:a,c=3<arguments.length&&void 0!==arguments[3]?arguments[3]:o;"string"==typeof t&&(t=C({text:t}));var u=i+t.text.length;return h({formats:r.slice(0,i).concat(t.formats,r.slice(c)),text:n.slice(0,i)+t.text+n.slice(c),start:u,end:u})}function ce(e,t,r){return ie(e,C(),t,r)}function ue(e,t,c){var u=e.formats,r=e.text,l=e.start,s=e.end;return r=r.replace(t,function(e){for(var t=arguments.length,r=new Array(1<t?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var a=r[r.length-2],o=c,i;return"function"==typeof o&&(o=c.apply(void 0,[e].concat(r))),"object"===Object(O.a)(o)?(i=o.formats,o=o.text):(i=Array(o.length),u[a]&&(i=i.fill(u[a]))),u=u.slice(0,a).concat(i,u.slice(a+e.length)),l&&(l=s=a+o.length),o}),h({formats:u,text:r,start:l,end:s})}function le(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:e.start,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:e.end,n,a=q(e).slice(0,t).lastIndexOf(P),o=e.formats[a],i=[,],c;return o&&(i=[o]),ie(e,{formats:i,text:P},t,r)}var se="￼";function fe(e,t,r,n){var a;return ie(e,{text:se,formats:[[Object(l.a)({},t,{object:!0})]]},r,n)}function de(e){var t=e.formats,r=e.text,n=e.start,a=e.end,o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:n,i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:a;return void 0===o||void 0===i?{formats:t,text:r}:{formats:t.slice(o,i),text:r.slice(o,i)}}function pe(e,n){var a=e.formats,t=e.text,o=e.start,i=e.end;if("string"!=typeof n)return me.apply(void 0,arguments);var c=0;return t.split(n).map(function(e){var t=c,r={formats:a.slice(t,t+e.length),text:e};return c+=n.length+e.length,void 0!==o&&void 0!==i&&(t<=o&&o<c?r.start=o-t:o<t&&t<i&&(r.start=0),t<=i&&i<c?r.end=i-t:o<c&&c<i&&(r.end=e.length)),r})}function me(e){var t=e.formats,r=e.text,n=e.start,a=e.end,o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:n,i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:a,c={formats:t.slice(0,o),text:r.slice(0,o)},u={formats:t.slice(i),text:r.slice(i),start:0,end:0};return[ue(c,/\u2028+$/,""),ue(u,/^\u2028+/,"")]}function ve(e){return Object(u.select)("core/rich-text").getFormatType(e)}function ge(e){var t=e.type,r=e.attributes,n=e.unregisteredAttributes,a=e.object,o=ve(t);if(!o)return{type:t,attributes:r,object:a};var i=Object(l.a)({},n);for(var c in r){var u=o.attributes[c];u?i[u]=r[c]:i[c]=r[c]}return o.className&&(i.class?i.class="".concat(o.className," ").concat(i.class):i.class=o.className),{type:o.tagName,object:o.object,attributes:i}}function he(e){var t=e.value,n=e.multilineTag,r=e.multilineWrapperTags,c=void 0===r?[]:r,a=e.createEmpty,u=e.append,l=e.getLastChild,s=e.getParent,f=e.isText,d=e.getText,p=e.remove,m=e.appendText,v=e.onStartIndex,g=e.onEndIndex,o=e.isEditableTree,h=t.formats,b=t.text,y=t.start,x=t.end,i=t.formatPlaceholder,T=h.length+1,O=a(),j={type:n},w,N,E;function _(e,t){if(o&&i&&i.index===t){var r=s(e);e=void 0===i.format?s(r):u(r,ge(i.format)),e=u(e,W)}return e}n?(u(u(O,{type:n}),""),N=w=[j]):u(O,"");for(var C=function e(t){var a=b.charAt(t),o=h[t];n&&(o=a===P?w=(o||[]).reduce(function(e,t){return a===P&&-1!==c.indexOf(t.type)&&(e.push(t),e.push(j)),e},[j]):Object(A.a)(w).concat(Object(A.a)(o||[])));var i=l(O);if(E===P){for(var r=i;!f(r);)r=l(r);v&&y===t&&v(O,r),g&&x===t&&g(O,r)}if(o&&o.forEach(function(e,t){if(!i||!N||e!==N[t]||a===P&&o.length-1===t){var r=s(i),n=u(r,ge(e));f(i)&&0===d(i).length&&p(i),i=u(e.object?r:n,"")}else i=l(i)}),a===P)return N=o,E=a,"continue";i=_(i,0),0===t&&(v&&0===y&&v(O,i),g&&0===x&&g(O,i)),a!==D&&("\n"===a?(i=u(s(i),{type:"br",object:!0}),i=u(s(i),"")):f(i)?m(i,a):i=u(s(i),a)),i=_(i,t+1),v&&y===t+1&&v(O,i),g&&x===t+1&&g(O,i),N=o,E=a},S=0;S<T;S++)var F=C(S);return O}var be=window.Node,ye=be.TEXT_NODE,xe=be.ELEMENT_NODE;function Te(e,t,r){for(var n=e.parentNode,a=0;e=e.previousSibling;)a++;return r=[a].concat(Object(A.a)(r)),n!==t&&(r=Te(n,t,r)),r}function Oe(e,t){for(t=Object(A.a)(t);e&&1<t.length;)e=e.childNodes[t.shift()];return{node:e,offset:t[0]}}var je=function e(){return w(document,"")};function we(e,t){"string"==typeof t&&(t=e.ownerDocument.createTextNode(t));var r=t,n=r.type,a=r.attributes;if(n)for(var o in t=e.ownerDocument.createElement(n),a)t.setAttribute(o,a[o]);return e.appendChild(t)}function Ne(e,t){e.appendData(t)}function Ee(e){var t;return e.lastChild}function _e(e){var t;return e.parentNode}function Ce(e){var t;return e.nodeType===ye}function Se(e){var t;return e.nodeValue}function Fe(e){return e.parentNode.removeChild(e)}function Ae(e){for(var t=e.element,r=e.createLinePadding,n=e.multilineWrapperTags,a=t.childNodes.length,o=t.ownerDocument,i=0;i<a;i++){var c=t.childNodes[i];c.nodeType===ye?1!==a||c.nodeValue||t.appendChild(r(o)):(n&&!c.previousSibling&&-1!==n.indexOf(c.nodeName.toLowerCase())&&t.insertBefore(r(o),c),Ae({element:c,createLinePadding:r,multilineWrapperTags:n}))}}function Pe(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],r=1<arguments.length?arguments[1]:void 0;return e.reduce(function(e,t){return t(e,r.text)},r.formats)}function De(e){var t=e.value,r=e.multilineTag,n=e.multilineWrapperTags,a=e.createLinePadding,o=e.prepareEditableTree,i=[],c=[],u=he({value:Object(l.a)({},t,{formats:Pe(o,t)}),multilineTag:r,multilineWrapperTags:n,createEmpty:je,append:we,getLastChild:Ee,getParent:_e,isText:Ce,getText:Se,remove:Fe,appendText:Ne,onStartIndex:function e(t,r){i=Te(r,t,[r.nodeValue.length])},onEndIndex:function e(t,r){c=Te(r,t,[r.nodeValue.length])},isEditableTree:!0});return a&&Ae({element:u,createLinePadding:a,multilineWrapperTags:n}),{body:u,selection:{startPath:i,endPath:c}}}function We(e){var t=e.value,r=e.current,n,a,o,i,c=De({value:t,multilineTag:e.multilineTag,multilineWrapperTags:e.multilineWrapperTags,createLinePadding:e.createLinePadding,prepareEditableTree:e.prepareEditableTree}),u=c.body,l=c.selection;Le(u,r),void 0!==t.start&&Me(l,r)}function Le(e,t){for(var r=0,n;n=e.firstChild;){var a=t.childNodes[r];a?a.isEqualNode(n)?e.removeChild(n):t.replaceChild(n,a):t.appendChild(n),r++}for(;t.childNodes[r];)t.removeChild(t.childNodes[r])}function Ie(e,t){return e.startContainer===t.startContainer&&e.startOffset===t.startOffset&&e.endContainer===t.endContainer&&e.endOffset===t.endOffset}function Me(e,t){var r=Oe(t,e.startPath),n=r.node,a=r.offset,o=Oe(t,e.endPath),i=o.node,c=o.offset,u=window.getSelection(),l=t.ownerDocument.createRange(),s=n===i&&a===c;if(s&&0===a&&n.previousSibling&&n.previousSibling.nodeType===xe&&"BR"!==n.previousSibling.nodeName?(n.insertData(0,"\ufeff"),l.setStart(n,1),l.setEnd(i,1)):s&&0===a&&n===ye&&0===n.nodeValue.length?(n.insertData(0,"\ufeff"),l.setStart(n,1),l.setEnd(i,1)):(l.setStart(n,a),l.setEnd(i,c)),0<u.rangeCount){if(Ie(l,u.getRangeAt(0)))return;u.removeAllRanges()}u.addRange(l)}var ke=r(61);function Ve(e){var t,r,n,a;return Xe(he({value:e.value,multilineTag:e.multilineTag,multilineWrapperTags:e.multilineWrapperTags,createEmpty:Re,append:Be,getLastChild:ze,getParent:Ge,isText:Ye,getText:qe,remove:$e,appendText:He}).children)}function Re(){return{}}function ze(e){var t=e.children;return t&&t[t.length-1]}function Be(e,t){return"string"==typeof t&&(t={text:t}),(t.parent=e).children=e.children||[],e.children.push(t),t}function He(e,t){e.text+=t}function Ge(e){var t;return e.parent}function Ye(e){var t;return"string"==typeof e.text}function qe(e){var t;return e.text}function $e(e){var t=e.parent.children.indexOf(e);return-1!==t&&e.parent.children.splice(t,1),e}function Ue(e){var t=e.type,r=e.attributes,n=e.object,a=e.children,o="";for(var i in r)Object(ke.isValidAttributeName)(i)&&(o+=" ".concat(i,'="').concat(Object(ke.escapeAttribute)(r[i]),'"'));return n?"<".concat(t).concat(o,">"):"<".concat(t).concat(o,">").concat(Xe(a),"</").concat(t,">")}function Xe(){var e;return(0<arguments.length&&void 0!==arguments[0]?arguments[0]:[]).map(function(e){return void 0===e.text?Ue(e):Object(ke.escapeHTML)(e.text)}).join("")}function Ze(e,t){return H(e,t.type)?ae(e,t.type):b(e,t)}function Ke(e){var t=Object(u.select)("core/rich-text").getFormatType(e);if(t)return t.__experimentalCreatePrepareEditableTree&&t.__experimentalGetPropsForEditableTreePreparation&&Object(ee.removeFilter)("experimentalRichText",e),Object(u.dispatch)("core/rich-text").removeFormatTypes(e),t;window.console.error("Format ".concat(e," is not registered."))}r.d(t,"applyFormat",function(){return b}),r.d(t,"charAt",function(){return x}),r.d(t,"concat",function(){return T}),r.d(t,"create",function(){return C}),r.d(t,"getActiveFormat",function(){return H}),r.d(t,"getSelectionEnd",function(){return G}),r.d(t,"getSelectionStart",function(){return Y}),r.d(t,"getTextContent",function(){return q}),r.d(t,"isCollapsed",function(){return $}),r.d(t,"isEmpty",function(){return F}),r.d(t,"isEmptyLine",function(){return j}),r.d(t,"join",function(){return U}),r.d(t,"registerFormatType",function(){return ne}),r.d(t,"removeFormat",function(){return ae}),r.d(t,"remove",function(){return ce}),r.d(t,"replace",function(){return ue}),r.d(t,"insert",function(){return ie}),r.d(t,"insertLineSeparator",function(){return le}),r.d(t,"insertObject",function(){return fe}),r.d(t,"slice",function(){return de}),r.d(t,"split",function(){return pe}),r.d(t,"apply",function(){return We}),r.d(t,"unstableToDom",function(){return De}),r.d(t,"toHTMLString",function(){return Ve}),r.d(t,"toggleFormat",function(){return Ze}),r.d(t,"LINE_SEPARATOR",function(){return P}),r.d(t,"unregisterFormatType",function(){return Ke})},31:function(e,t,r){"use strict";var s,a;function o(e){return[e]}function f(e){return!!e&&"object"==typeof e}function d(){var e={clear:function(){e.head=null}};return e}function p(e,t,r){var n;if(e.length!==t.length)return!1;for(n=r;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}s={},a="undefined"!=typeof WeakMap,t.a=function(i,c){var u,l;function e(){return u}function t(e){var t=u,r=!0,n,a,o,i;for(n=0;n<e.length;n++){if(!f(a=e[n])){r=!1;break}t=t.has(a)?t.get(a):(o=new WeakMap,t.set(a,o),o)}return t.has(s)||((i=d()).isUniqueByDependants=r,t.set(s,i)),t.get(s)}function r(){u=a?new WeakMap:d()}function n(){var e=arguments.length,t,r,n,a,o;for(a=new Array(e),n=0;n<e;n++)a[n]=arguments[n];for(o=c.apply(null,a),(t=l(o)).isUniqueByDependants||(t.lastDependants&&!p(o,t.lastDependants,0)&&t.clear(),t.lastDependants=o),r=t.head;r;){if(p(r.args,a,1))return r!==t.head&&(r.prev.next=r.next,r.next&&(r.next.prev=r.prev),r.next=t.head,r.prev=null,t.head.prev=r,t.head=r),r.val;r=r.next}return r={val:i.apply(null,a)},a[0]=null,r.args=a,t.head&&((t.head.prev=r).next=t.head),(t.head=r).val}return c||(c=o),l=a?t:e,n.getDependants=c,(n.clear=r)(),n}},33:function(e,t,r){"use strict";function n(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}r.d(t,"a",function(){return n})},41:function(e,t,r){e.exports=function e(a,t){var o=0,i,c,u;function r(){var e=c,t=arguments.length,r,n;e:for(;e;){if(e.args.length===arguments.length){for(n=0;n<t;n++)if(e.args[n]!==arguments[n]){e=e.next;continue e}return e!==c&&(e===u&&(u=e.prev),e.prev.next=e.next,e.next&&(e.next.prev=e.prev),e.next=c,e.prev=null,c.prev=e,c=e),e.val}e=e.next}for(r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return e={args:r,val:a.apply(null,r)},c?(c.prev=e).next=c:u=e,o===i?(u=u.prev).next=null:o++,(c=e).val}return t&&t.maxSize&&(i=t.maxSize),r.clear=function(){u=c=null,o=0},r}},5:function(e,t){!function(){e.exports=this.wp.data}()},61:function(e,t){!function(){e.exports=this.wp.escapeHtml}()},7:function(e,t){!function(){e.exports=this.wp.compose}()},8:function(e,t,r){"use strict";r.d(t,"a",function(){return n});var a=r(15);function n(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(e){Object(a.a)(t,e,r[e])})}return t}}});