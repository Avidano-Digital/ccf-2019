this.wp=this.wp||{},this.wp.formatLibrary=function(n){var r={};function i(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}return i.m=n,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function t(){return e.default}:function t(){return e};return i.d(t,"a",t),t},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=312)}({0:function(t,e){!function(){t.exports=this.wp.element}()},1:function(t,e){!function(){t.exports=this.wp.i18n}()},10:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return r})},12:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n(28),i=n(3);function o(t,e){return!e||"object"!==Object(r.a)(e)&&"function"!=typeof e?Object(i.a)(t):e}},13:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}n.d(e,"a",function(){return r})},14:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function t(e,n){return e.__proto__=n,e})(t,e)}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",function(){return i})},16:function(t,e,n){var r,i;!function(){"use strict";var a={}.hasOwnProperty;function c(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var r=typeof n;if("string"===r||"number"===r)t.push(n);else if(Array.isArray(n)&&n.length){var i=c.apply(null,n);i&&t.push(i)}else if("object"===r)for(var o in n)a.call(n,o)&&n[o]&&t.push(o)}}return t.join(" ")}t.exports?(c.default=c,t.exports=c):(r=[],void 0===(i=function(){return c}.apply(e,r))||(t.exports=i))}()},17:function(t,e){!function(){t.exports=this.wp.keycodes}()},2:function(t,e){!function(){t.exports=this.lodash}()},20:function(t,e){!function(){t.exports=this.wp.richText}()},21:function(t,e,n){"use strict";function a(t,e){if(null==t)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],0<=e.indexOf(i)||(n[i]=t[i]);return n}function r(t,e){if(null==t)return{};var n=a(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],0<=e.indexOf(r)||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}n.d(e,"a",function(){return r})},22:function(t,e){!function(){t.exports=this.wp.dom}()},24:function(t,e){!function(){t.exports=this.wp.url}()},28:function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function i(t){return(i="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function t(e){return r(e)}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(t)}n.d(e,"a",function(){return i})},3:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",function(){return r})},312:function(t,e,n){"use strict";n.r(e);var r=n(21),b=n(0),h=n(1),d=n(20),p=n(6),a="core/bold",i={name:a,title:Object(h.__)("Bold"),tagName:"strong",className:null,edit:function t(e){var n=e.isActive,r=e.value,i=e.onChange,o=function t(){return i(Object(d.toggleFormat)(r,{type:a}))};return Object(b.createElement)(b.Fragment,null,Object(b.createElement)(p.RichTextShortcut,{type:"primary",character:"b",onUse:o}),Object(b.createElement)(p.RichTextToolbarButton,{name:"bold",icon:"editor-bold",title:Object(h.__)("Bold"),onClick:o,isActive:n,shortcutType:"primary",shortcutCharacter:"b"}))}},o="core/code",c={name:o,title:Object(h.__)("Code"),tagName:"code",className:null,edit:function t(e){var n=e.value,r=e.onChange,i=function t(){return r(Object(d.toggleFormat)(n,{type:o}))};return Object(b.createElement)(p.RichTextShortcut,{type:"access",character:"x",onUse:i})}},u=n(10),s=n(9),l=n(12),f=n(13),O=n(14),m=n(3),j=n(4),v=["image"],y="core/image",g={name:y,title:Object(h.__)("Image"),keywords:[Object(h.__)("photo"),Object(h.__)("media")],object:!0,tagName:"img",className:null,attributes:{className:"class",style:"style",url:"src",alt:"alt"},edit:function(t){function e(){var t;return Object(u.a)(this,e),(t=Object(l.a)(this,Object(f.a)(e).apply(this,arguments))).openModal=t.openModal.bind(Object(m.a)(Object(m.a)(t))),t.closeModal=t.closeModal.bind(Object(m.a)(Object(m.a)(t))),t.state={modal:!1},t}return Object(O.a)(e,t),Object(s.a)(e,[{key:"openModal",value:function t(){this.setState({modal:!0})}},{key:"closeModal",value:function t(){this.setState({modal:!1})}},{key:"render",value:function t(){var a=this,e=this.props,c=e.value,u=e.onChange;return Object(b.createElement)(p.MediaUploadCheck,null,Object(b.createElement)(p.RichTextInserterItem,{name:y,icon:Object(b.createElement)(j.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(b.createElement)(j.Path,{d:"M4 16h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2zM4 5h10v9H4V5zm14 9v2h4v-2h-4zM2 20h20v-2H2v2zm6.4-8.8L7 9.4 5 12h8l-2.6-3.4-2 2.6z"})),title:Object(h.__)("Inline Image"),onClick:this.openModal}),this.state.modal&&Object(b.createElement)(p.MediaUpload,{allowedTypes:v,onSelect:function t(e){var n=e.id,r=e.url,i=e.alt,o=e.width;a.closeModal(),u(Object(d.insertObject)(c,{type:y,attributes:{className:"wp-image-".concat(n),style:"width: ".concat(Math.min(o,150),"px;"),url:r,alt:i}}))},onClose:this.closeModal,render:function t(e){var n;return(0,e.open)(),null}}))}}]),e}(b.Component)},k="core/italic",_={name:k,title:Object(h.__)("Italic"),tagName:"em",className:null,edit:function t(e){var n=e.isActive,r=e.value,i=e.onChange,o=function t(){return i(Object(d.toggleFormat)(r,{type:k}))};return Object(b.createElement)(b.Fragment,null,Object(b.createElement)(p.RichTextShortcut,{type:"primary",character:"i",onUse:o}),Object(b.createElement)(p.RichTextToolbarButton,{name:"italic",icon:"editor-italic",title:Object(h.__)("Italic"),onClick:o,isActive:n,shortcutType:"primary",shortcutCharacter:"i"}))}},w=n(24),S=n(16),C=n.n(S),L=n(17),E=n(22);function x(){var t=window.getSelection();if(0===t.rangeCount)return{};var e=Object(E.getRectangleFromRange)(t.getRangeAt(0)),n=e.top+e.height,r=e.left+e.width/2,i=Object(E.getOffsetParent)(t.anchorNode);if(i){var o=i.getBoundingClientRect();n-=o.top,r-=o.left}return{top:n,left:r}}var T,R=function(t){function e(){var t;return Object(u.a)(this,e),(t=Object(l.a)(this,Object(f.a)(e).apply(this,arguments))).state={style:x()},t}return Object(O.a)(e,t),Object(s.a)(e,[{key:"render",value:function t(){var e=this.props.children,n=this.state.style;return Object(b.createElement)("div",{className:"editor-format-toolbar__selection-position",style:n},e)}}]),e}(b.Component),N=n(2);function A(t){if(!t)return!1;var e=t.trim();if(!e)return!1;if(/^\S+:/.test(e)){var n=Object(w.getProtocol)(e);if(!Object(w.isValidProtocol)(n))return!1;if(Object(N.startsWith)(n,"http")&&!/^https?:\/\/[^\/\s]/i.test(e))return!1;var r=Object(w.getAuthority)(e);if(!Object(w.isValidAuthority)(r))return!1;var i=Object(w.getPath)(e);if(i&&!Object(w.isValidPath)(i))return!1;var o=Object(w.getQueryString)(e);if(o&&!Object(w.isValidQueryString)(o))return!1;var a=Object(w.getFragment)(e);if(a&&!Object(w.isValidFragment)(a))return!1}return!(Object(N.startsWith)(e,"#")&&!Object(w.isValidFragment)(e))}var P=function t(e){return e.stopPropagation()};function I(t){var e=t.url,n=t.opensInNewWindow,r=t.text,i={type:"core/link",attributes:{url:e}};if(n){var o=Object(h.sprintf)(Object(h.__)("%s (opens in a new tab)"),r);i.attributes.target="_blank",i.attributes.rel="noreferrer noopener",i.attributes["aria-label"]=o}return i}function F(t,e){return t.addingLink||e.editLink}var M=function t(e){var n=e.value,r=e.onChangeInputValue,i=e.onKeyDown,o=e.submitLink,a=e.autocompleteRef;return Object(b.createElement)("form",{className:"editor-format-toolbar__link-container-content",onKeyPress:P,onKeyDown:i,onSubmit:o},Object(b.createElement)(p.URLInput,{value:n,onChange:r,autocompleteRef:a}),Object(b.createElement)(j.IconButton,{icon:"editor-break",label:Object(h.__)("Apply"),type:"submit"}))},V=function t(e){var n=e.url,r=Object(w.prependHTTP)(n),i=C()("editor-format-toolbar__link-container-value",{"has-invalid-link":!A(r)});return n?Object(b.createElement)(j.ExternalLink,{className:i,href:n},Object(w.filterURLForDisplay)(Object(w.safeDecodeURI)(n))):Object(b.createElement)("span",{className:i})},U=function t(e){var n=e.url,r=e.editLink;return Object(b.createElement)("div",{className:"editor-format-toolbar__link-container-content",onKeyPress:P},Object(b.createElement)(V,{url:n}),Object(b.createElement)(j.IconButton,{icon:"edit",label:Object(h.__)("Edit"),onClick:r}))},D=function(t){function e(){var t;return Object(u.a)(this,e),(t=Object(l.a)(this,Object(f.a)(e).apply(this,arguments))).editLink=t.editLink.bind(Object(m.a)(Object(m.a)(t))),t.submitLink=t.submitLink.bind(Object(m.a)(Object(m.a)(t))),t.onKeyDown=t.onKeyDown.bind(Object(m.a)(Object(m.a)(t))),t.onChangeInputValue=t.onChangeInputValue.bind(Object(m.a)(Object(m.a)(t))),t.setLinkTarget=t.setLinkTarget.bind(Object(m.a)(Object(m.a)(t))),t.onClickOutside=t.onClickOutside.bind(Object(m.a)(Object(m.a)(t))),t.resetState=t.resetState.bind(Object(m.a)(Object(m.a)(t))),t.autocompleteRef=Object(b.createRef)(),t.state={opensInNewWindow:!1,inputValue:""},t}return Object(O.a)(e,t),Object(s.a)(e,[{key:"onKeyDown",value:function t(e){-1<[L.LEFT,L.DOWN,L.RIGHT,L.UP,L.BACKSPACE,L.ENTER].indexOf(e.keyCode)&&e.stopPropagation()}},{key:"onChangeInputValue",value:function t(e){this.setState({inputValue:e})}},{key:"setLinkTarget",value:function t(e){var n=this.props,r=n.activeAttributes.url,i=void 0===r?"":r,o=n.value,a=n.onChange;if(this.setState({opensInNewWindow:e}),!F(this.props,this.state)){var c=Object(d.getTextContent)(Object(d.slice)(o));a(Object(d.applyFormat)(o,I({url:i,opensInNewWindow:e,text:c})))}}},{key:"editLink",value:function t(e){this.setState({editLink:!0}),e.preventDefault()}},{key:"submitLink",value:function t(e){var n=this.props,r=n.isActive,i=n.value,o=n.onChange,a=n.speak,c=this.state,u=c.inputValue,s=c.opensInNewWindow,l=Object(w.prependHTTP)(u),b,p=I({url:l,opensInNewWindow:s,text:Object(d.getTextContent)(Object(d.slice)(i))});if(e.preventDefault(),Object(d.isCollapsed)(i)&&!r){var f=Object(d.applyFormat)(Object(d.create)({text:l}),p,0,l.length);o(Object(d.insert)(i,f))}else o(Object(d.applyFormat)(i,p));this.resetState(),A(l)?a(r?Object(h.__)("Link edited."):Object(h.__)("Link inserted"),"assertive"):a(Object(h.__)("Warning: the link has been inserted but may have errors. Please test it."),"assertive")}},{key:"onClickOutside",value:function t(e){var n=this.autocompleteRef.current;n&&n.contains(e.target)||this.resetState()}},{key:"resetState",value:function t(){this.props.stopAddingLink(),this.setState({editLink:!1})}},{key:"render",value:function t(){var e=this,n=this.props,r=n.isActive,i=n.activeAttributes.url,o=n.addingLink,a=n.value;if(!r&&!o)return null;var c=this.state,u=c.inputValue,s=c.opensInNewWindow,l=F(this.props,this.state);return Object(b.createElement)(R,{key:"".concat(a.start).concat(a.end)},Object(b.createElement)(p.URLPopover,{onClickOutside:this.onClickOutside,onClose:this.resetState,focusOnMount:!!l&&"firstElement",renderSettings:function t(){return Object(b.createElement)(j.ToggleControl,{label:Object(h.__)("Open in New Tab"),checked:s,onChange:e.setLinkTarget})}},l?Object(b.createElement)(M,{value:u,onChangeInputValue:this.onChangeInputValue,onKeyDown:this.onKeyDown,submitLink:this.submitLink,autocompleteRef:this.autocompleteRef}):Object(b.createElement)(U,{url:i,editLink:this.editLink})))}}],[{key:"getDerivedStateFromProps",value:function t(e,n){var r=e.activeAttributes,i=r.url,o,a="_blank"===r.target;if(!F(e,n)){if(i!==n.inputValue)return{inputValue:i};if(a!==n.opensInNewWindow)return{opensInNewWindow:a}}return null}}]),e}(b.Component),W=Object(j.withSpokenMessages)(D),B="core/link",K={name:B,title:Object(h.__)("Link"),tagName:"a",className:null,attributes:{url:"href",target:"target"},edit:Object(j.withSpokenMessages)(function(t){function e(){var t;return Object(u.a)(this,e),(t=Object(l.a)(this,Object(f.a)(e).apply(this,arguments))).addLink=t.addLink.bind(Object(m.a)(Object(m.a)(t))),t.stopAddingLink=t.stopAddingLink.bind(Object(m.a)(Object(m.a)(t))),t.onRemoveFormat=t.onRemoveFormat.bind(Object(m.a)(Object(m.a)(t))),t.state={addingLink:!1},t}return Object(O.a)(e,t),Object(s.a)(e,[{key:"addLink",value:function t(){var e=this.props,n=e.value,r=e.onChange,i=Object(d.getTextContent)(Object(d.slice)(n));i&&Object(w.isURL)(i)?r(Object(d.applyFormat)(n,{type:B,attributes:{url:i}})):this.setState({addingLink:!0})}},{key:"stopAddingLink",value:function t(){this.setState({addingLink:!1})}},{key:"onRemoveFormat",value:function t(){var e=this.props,n=e.value,r=e.onChange,i=e.speak;r(Object(d.removeFormat)(n,B)),i(Object(h.__)("Link removed."),"assertive")}},{key:"render",value:function t(){var e=this.props,n=e.isActive,r=e.activeAttributes,i=e.value,o=e.onChange;return Object(b.createElement)(b.Fragment,null,Object(b.createElement)(p.RichTextShortcut,{type:"access",character:"a",onUse:this.addLink}),Object(b.createElement)(p.RichTextShortcut,{type:"access",character:"s",onUse:this.onRemoveFormat}),Object(b.createElement)(p.RichTextShortcut,{type:"primary",character:"k",onUse:this.addLink}),Object(b.createElement)(p.RichTextShortcut,{type:"primaryShift",character:"k",onUse:this.onRemoveFormat}),n&&Object(b.createElement)(p.RichTextToolbarButton,{name:"link",icon:"editor-unlink",title:Object(h.__)("Unlink"),onClick:this.onRemoveFormat,isActive:n,shortcutType:"primaryShift",shortcutCharacter:"k"}),!n&&Object(b.createElement)(p.RichTextToolbarButton,{name:"link",icon:"admin-links",title:Object(h.__)("Link"),onClick:this.addLink,isActive:n,shortcutType:"primary",shortcutCharacter:"k"}),Object(b.createElement)(W,{addingLink:this.state.addingLink,stopAddingLink:this.stopAddingLink,isActive:n,activeAttributes:r,value:i,onChange:o}))}}]),e}(b.Component))},H="core/strikethrough",z;[i,c,g,_,K,{name:H,title:Object(h.__)("Strikethrough"),tagName:"del",className:null,edit:function t(e){var n=e.isActive,r=e.value,i=e.onChange,o=function t(){return i(Object(d.toggleFormat)(r,{type:H}))};return Object(b.createElement)(b.Fragment,null,Object(b.createElement)(p.RichTextShortcut,{type:"access",character:"d",onUse:o}),Object(b.createElement)(p.RichTextToolbarButton,{name:"strikethrough",icon:"editor-strikethrough",title:Object(h.__)("Strikethrough"),onClick:o,isActive:n,shortcutType:"access",shortcutCharacter:"d"}))}}].forEach(function(t){var e=t.name,n=Object(r.a)(t,["name"]);return Object(d.registerFormatType)(e,n)})},4:function(t,e){!function(){t.exports=this.wp.components}()},6:function(t,e){!function(){t.exports=this.wp.editor}()},9:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",function(){return i})}});