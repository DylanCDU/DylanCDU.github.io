function _createForOfIteratorHelper(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=_unsupportedIterableToArray(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,i=!0,a=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){a=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(a)throw o}}}}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function asyncGeneratorStep(e,t,n,r,o,i,a){try{var u=e[i](a),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(r,o)}function _asyncToGenerator(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){asyncGeneratorStep(i,r,o,a,u,"next",e)}function u(e){asyncGeneratorStep(i,r,o,a,u,"throw",e)}a(void 0)}))}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var n,r=_getPrototypeOf(e);if(t){var o=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _wrapNativeSuper(e){var t="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(e){if(null===e||!_isNativeFunction(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return _construct(e,arguments,_getPrototypeOf(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(n,e)})(e)}function _construct(e,t,n){return(_construct=_isNativeReflectConstruct()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&_setPrototypeOf(o,n.prototype),o}).apply(null,arguments)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _isNativeFunction(e){return-1!==Function.toString.call(e).indexOf("[native code]")}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{FUe0:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return u})),"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global&&global,function(e){e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE"}(r||(r={}));var o,i=function(e){_inherits(n,_wrapNativeSuper(Error));var t=_createSuper(n);function n(e,r){var o;return _classCallCheck(this,n),(o=t.call(this,e)).message=e,o.code=r,o}return n}(),a=(o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).Capacitor=function(e){var t,n,o,a,u,c=e.CapacitorCustomPlatform||null,s=e.Capacitor||{},l=s.Plugins=s.Plugins||{},f=e.CapacitorPlatforms,d=(null===(t=null==f?void 0:f.currentPlatform)||void 0===t?void 0:t.getPlatform)||function(){return null!==c?c.name:function(e){var t,n;return(null==e?void 0:e.androidBridge)?"android":(null===(n=null===(t=null==e?void 0:e.webkit)||void 0===t?void 0:t.messageHandlers)||void 0===n?void 0:n.bridge)?"ios":"web"}(e)},p=(null===(n=null==f?void 0:f.currentPlatform)||void 0===n?void 0:n.isNativePlatform)||function(){return"web"!==d()},v=(null===(o=null==f?void 0:f.currentPlatform)||void 0===o?void 0:o.isPluginAvailable)||function(e){var t=b.get(e);return!!(null==t?void 0:t.platforms.has(d()))||!!h(e)},h=(null===(a=null==f?void 0:f.currentPlatform)||void 0===a?void 0:a.getPluginHeader)||function(e){var t;return null===(t=s.PluginHeaders)||void 0===t?void 0:t.find((function(t){return t.name===e}))},b=new Map,m=(null===(u=null==f?void 0:f.currentPlatform)||void 0===u?void 0:u.registerPlugin)||function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=b.get(e);if(n)return console.warn('Capacitor plugin "'.concat(e,'" already registered. Cannot register plugins twice.')),n.proxy;var o,a=d(),u=h(e),f=function(n){var l,f=function(){for(var f=arguments.length,d=new Array(f),p=0;p<f;p++)d[p]=arguments[p];var v=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o||!(a in t)){e.next=11;break}if("function"!=typeof t[a]){e.next=7;break}return e.next=4,t[a]();case 4:e.t0=e.sent,e.next=8;break;case 7:e.t0=t[a];case 8:o=o=e.t0,e.next=21;break;case 11:if(e.t1=null!==c&&!o&&"web"in t,!e.t1){e.next=21;break}if("function"!=typeof t.web){e.next=19;break}return e.next=16,t.web();case 16:e.t2=e.sent,e.next=20;break;case 19:e.t2=t.web;case 20:o=o=e.t2;case 21:return e.abrupt("return",o);case 22:case"end":return e.stop()}}),e)})))().then((function(t){var o=function(t,n){var o,c;if(!u){if(t)return null===(c=t[n])||void 0===c?void 0:c.bind(t);throw new i('"'.concat(e,'" plugin is not implemented on ').concat(a),r.Unimplemented)}var l=null==u?void 0:u.methods.find((function(e){return n===e.name}));return l?"promise"===l.rtype?function(t){return s.nativePromise(e,n.toString(),t)}:function(t,r){return s.nativeCallback(e,n.toString(),t,r)}:t?null===(o=t[n])||void 0===o?void 0:o.bind(t):void 0}(t,n);if(o){var c=o.apply(void 0,d);return l=null==c?void 0:c.remove,c}throw new i('"'.concat(e,".").concat(n,'()" is not implemented on ').concat(a),r.Unimplemented)}));return"addListener"===n&&(v.remove=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",l());case 1:case"end":return e.stop()}}),e)})))),v};return f.toString=function(){return"".concat(n.toString(),"() { [capacitor code] }")},Object.defineProperty(f,"name",{value:n,writable:!1,configurable:!1}),f},p=f("addListener"),v=f("removeListener"),m=function(e,t){var n=p({eventName:e},t),r=function(){var r=_asyncToGenerator(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n;case 2:o=r.sent,v({eventName:e,callbackId:o},t);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=new Promise((function(e){return n.then((function(){return e({remove:r})}))}));return o.remove=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.warn("Using addListener() without 'await' is deprecated."),e.next=3,r();case 3:case"end":return e.stop()}}),e)}))),o},w=new Proxy({},{get:function(e,t){switch(t){case"$$typeof":return;case"toJSON":return function(){return{}};case"addListener":return u?m:p;case"removeListener":return v;default:return f(t)}}});return l[e]=w,b.set(e,{name:e,proxy:w,platforms:new Set([].concat(_toConsumableArray(Object.keys(t)),_toConsumableArray(u?[a]:[])))}),w};return s.convertFileSrc||(s.convertFileSrc=function(e){return e}),s.getPlatform=d,s.handleError=function(t){return e.console.error(t)},s.isNativePlatform=p,s.isPluginAvailable=v,s.pluginMethodNoop=function(e,t,n){return Promise.reject("".concat(n,' does not have an implementation of "').concat(t,'".'))},s.registerPlugin=m,s.Exception=i,s.DEBUG=!!s.DEBUG,s.isLoggingEnabled=!!s.isLoggingEnabled,s.platform=s.getPlatform(),s.isNative=s.isNativePlatform(),s}(o),u=a.registerPlugin,c=function(){function e(t){_classCallCheck(this,e),this.listeners={},this.windowListeners={},t&&(console.warn('Capacitor WebPlugin "'.concat(t.name,'" config object was deprecated in v3 and will be removed in v4.')),this.config=t)}var t,n;return _createClass(e,[{key:"addListener",value:function(e,t){var n=this;this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t);var r=this.windowListeners[e];r&&!r.registered&&this.addWindowListener(r);var o,i=function(){var r=_asyncToGenerator(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",n.removeListener(e,t));case 1:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),a=Promise.resolve({remove:i});return Object.defineProperty(a,"remove",{value:(o=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.warn("Using addListener() without 'await' is deprecated."),e.next=3,i();case 3:case"end":return e.stop()}}),e)}))),function(){return o.apply(this,arguments)})}),a}},{key:"removeAllListeners",value:(n=_asyncToGenerator(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t in this.listeners={},this.windowListeners)this.removeWindowListener(this.windowListeners[t]);this.windowListeners={};case 3:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"notifyListeners",value:function(e,t){var n=this.listeners[e];n&&n.forEach((function(e){return e(t)}))}},{key:"hasListeners",value:function(e){return!!this.listeners[e].length}},{key:"registerWindowListener",value:function(e,t){var n=this;this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:function(e){n.notifyListeners(t,e)}}}},{key:"unimplemented",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"not implemented";return new a.Exception(e,r.Unimplemented)}},{key:"unavailable",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"not available";return new a.Exception(e,r.Unavailable)}},{key:"removeListener",value:(t=_asyncToGenerator(regeneratorRuntime.mark((function e(t,n){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.listeners[t]){e.next=3;break}return e.abrupt("return");case 3:o=r.indexOf(n),this.listeners[t].splice(o,1),this.listeners[t].length||this.removeWindowListener(this.windowListeners[t]);case 5:case"end":return e.stop()}}),e,this)}))),function(e,n){return t.apply(this,arguments)})},{key:"addWindowListener",value:function(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}},{key:"removeWindowListener",value:function(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}}]),e}()},Iab2:function(e,t,n){var r,o;void 0===(o="function"==typeof(r=function(){"use strict";function t(e,t,n){var r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){a(r.response,t,n)},r.onerror=function(){console.error("could not download file")},r.send()}function n(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function r(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(t){var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(n)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,i=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),a=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!i?function(e,i,a){var u=o.URL||o.webkitURL,c=document.createElement("a");c.download=i=i||e.name||"download",c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?r(c):n(c.href)?t(e,i,a):r(c,c.target="_blank")):(c.href=u.createObjectURL(e),setTimeout((function(){u.revokeObjectURL(c.href)}),4e4),setTimeout((function(){r(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,o,i){if(o=o||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,i),o);else if(n(e))t(e,o,i);else{var a=document.createElement("a");a.href=e,a.target="_blank",setTimeout((function(){r(a)}))}}:function(e,n,r,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof e)return t(e,n,r);var u="application/octet-stream"===e.type,c=/constructor/i.test(o.HTMLElement)||o.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||u&&c||i)&&"undefined"!=typeof FileReader){var l=new FileReader;l.onloadend=function(){var e=l.result;e=s?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=e:location=e,a=null},l.readAsDataURL(e)}else{var f=o.URL||o.webkitURL,d=f.createObjectURL(e);a?a.location=d:location.href=d,a=null,setTimeout((function(){f.revokeObjectURL(d)}),4e4)}});o.saveAs=a.saveAs=a,e.exports=a})?r.apply(t,[]):r)||(e.exports=o)},TUkU:function(e,t,n){"use strict";n.r(t),n.d(t,"Tab2PageModule",(function(){return E}));var r,o,i=n("TEn/"),a=n("ofXK"),u=n("3Pt+"),c=n("tyNb"),s=n("mrSG"),l=n("FUe0"),f=n("dTEF"),d=Object(l.d)("Camera",{web:function(){return n.e(23).then(n.bind(null,"wzPO")).then((function(e){return new e.CameraWeb}))}});!function(e){e.Documents="DOCUMENTS",e.Data="DATA",e.Cache="CACHE",e.External="EXTERNAL",e.ExternalStorage="EXTERNAL_STORAGE"}(r||(r={})),function(e){e.UTF8="utf8",e.ASCII="ascii",e.UTF16="utf16"}(o||(o={}));var p,v=Object(l.d)("Filesystem",{web:function(){return n.e(24).then(n.bind(null,"B5q2")).then((function(e){return new e.FilesystemWeb}))}}),h=Object(l.d)("Storage",{web:function(){return n.e(25).then(n.bind(null,"srMn")).then((function(e){return new e.StorageWeb}))}}),b=n("fXoL"),m=((p=function(){function e(t){_classCallCheck(this,e),this.platform=t,this.photos=[],this.PHOTO_STORAGE="photos",this.convertBlobToBase64=function(e){return new Promise((function(t,n){var r=new FileReader;r.onerror=n,r.onload=function(){t(r.result)},r.readAsDataURL(e)}))}}return _createClass(e,[{key:"loadSaved",value:function(){return Object(s.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,o,i,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get({key:this.PHOTO_STORAGE});case 2:if(t=e.sent,this.photos=JSON.parse(t.value)||[],this.platform.is("hybrid")){e.next=23;break}n=_createForOfIteratorHelper(this.photos),e.prev=5,n.s();case 7:if((o=n.n()).done){e.next=15;break}return i=o.value,e.next=11,v.readFile({path:i.filepath,directory:r.Data});case 11:a=e.sent,i.webviewPath="data:image/jpeg;base64,".concat(a.data);case 13:e.next=7;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(5),n.e(e.t0);case 20:return e.prev=20,n.f(),e.finish(20);case 23:case"end":return e.stop()}}),e,this,[[5,17,20,23]])})))}},{key:"addNewToGallery",value:function(){return Object(s.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.getPhoto({resultType:f.b.Uri,source:f.c.Camera,quality:100});case 2:return t=e.sent,e.next=5,this.savePicture(t);case 5:n=e.sent,this.photos.unshift(n),h.set({key:this.PHOTO_STORAGE,value:JSON.stringify(this.photos)});case 7:case"end":return e.stop()}}),e,this)})))}},{key:"savePicture",value:function(e){return Object(s.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,o,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.readAsBase64(e);case 2:return n=t.sent,o=(new Date).getTime()+".jpeg",t.next=6,v.writeFile({path:o,data:n,directory:r.Data});case 6:return i=t.sent,t.abrupt("return",this.platform.is("hybrid")?{filepath:i.uri,webviewPath:l.a.convertFileSrc(i.uri)}:{filepath:o,webviewPath:e.webPath});case 8:case"end":return t.stop()}}),t,this)})))}},{key:"readAsBase64",value:function(e){return Object(s.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.platform.is("hybrid")){t.next=4;break}return t.next=3,v.readFile({path:e.path});case 3:return t.abrupt("return",t.sent.data);case 4:return t.next=6,fetch(e.webPath);case 6:return n=t.sent,t.next=9,n.blob();case 9:return r=t.sent,t.next=12,this.convertBlobToBase64(r);case 12:return t.abrupt("return",t.sent);case 13:case"end":return t.stop()}}),t,this)})))}},{key:"deletePicture",value:function(e,t){return Object(s.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return this.photos.splice(t,1),h.set({key:this.PHOTO_STORAGE,value:JSON.stringify(this.photos)}),o=e.filepath.substr(e.filepath.lastIndexOf("/")+1),n.next=4,v.deleteFile({path:o,directory:r.Data});case 4:case"end":return n.stop()}}),n,this)})))}}]),e}()).\u0275fac=function(e){return new(e||p)(b.Rb(i.y))},p.\u0275prov=b.Gb({token:p,factory:p.\u0275fac,providedIn:"root"}),p),w=n("BZV/"),y=n("6mc2"),g=n("Iab2"),_=n("jhN1"),k=n("tk/3"),P=["filePicker"];function O(e,t){if(1&e&&(b.Nb(0,"ion-card"),b.Nb(1,"ion-card-content"),b.Lb(2,"img",6),b.Mb(),b.Mb()),2&e){var n=b.Xb();b.zb(2),b.cc("src",n.photo,b.jc)}}var x,R,T,C=[{path:"",component:(x=function(){function e(t,n,r,o,i,a,u){_classCallCheck(this,e),this.platform=t,this.sanitizer=n,this.photoService=r,this.sessions=o,this.modalCtrl=i,this.tools=a,this.http=u}return _createClass(e,[{key:"ngOnInit",value:function(){return Object(s.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.photoService.loadSaved();case 2:this.display=e.sent;case 3:case"end":return e.stop()}}),e,this)})))}},{key:"dataURLtoFile",value:function(e,t,n){for(var r=e.split(","),o=(r[0].match(/:(.*?);/),atob(r[1])),i=o.length,a=new Uint8ClampedArray(i);i--;)a[i]=o.charCodeAt(i);Object(g.saveAs)(new File([a],"11.png",{type:n}))}},{key:"addPhotoToGallery",value:function(){return Object(s.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.photoService.addNewToGallery();case 1:case"end":return e.stop()}}),e,this)})))}},{key:"getPicture",value:function(e){return Object(s.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(l.a.isPluginAvailable("Camera")&&(!this.isDesktop||"gallery"!==e)){t.next=2;break}return t.abrupt("return",(console.log(e),void this.filePickerRef.nativeElement.click()));case 2:return t.next=4,d.getPhoto({quality:100,width:400,allowEditing:!1,resultType:f.b.DataUrl,source:f.c.Prompt});case 4:n=t.sent,this.dataURLtoFile(n.dataUrl,"image111",n.format);case 6:case"end":return t.stop()}}),t,this)})))}}]),e}(),x.\u0275fac=function(e){return new(e||x)(b.Kb(i.y),b.Kb(_.b),b.Kb(m),b.Kb(w.a),b.Kb(i.x),b.Kb(y.a),b.Kb(k.a))},x.\u0275cmp=b.Eb({type:x,selectors:[["app-tab2"]],viewQuery:function(e,t){var n;1&e&&b.sc(P,!0),2&e&&b.fc(n=b.Wb())&&(t.filePickerRef=n.first)},decls:9,vars:3,consts:[[3,"translucent"],[3,"fullscreen"],["horizontal","center","vertical","bottom","slot","fixed"],[3,"click"],["name","camera"],[4,"ngIf"],[3,"src"]],template:function(e,t){1&e&&(b.Nb(0,"ion-header",0),b.Nb(1,"ion-toolbar"),b.Nb(2,"ion-title"),b.pc(3," Camera "),b.Mb(),b.Mb(),b.Mb(),b.Nb(4,"ion-content",1),b.Nb(5,"ion-fab",2),b.Nb(6,"ion-fab-button",3),b.Vb("click",(function(){return t.getPicture("Camera")})),b.Lb(7,"ion-icon",4),b.Mb(),b.Mb(),b.nc(8,O,3,1,"ion-card",5),b.Mb()),2&e&&(b.cc("translucent",!0),b.zb(4),b.cc("fullscreen",!0),b.zb(4),b.cc("ngIf",t.photo))},directives:[i.j,i.u,i.t,i.g,i.h,i.i,i.k,a.k,i.d,i.e],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}input[type=file][_ngcontent-%COMP%]{display:none}"]}),x)}],A=((T=function e(){_classCallCheck(this,e)}).\u0275mod=b.Ib({type:T}),T.\u0275inj=b.Hb({factory:function(e){return new(e||T)},imports:[[c.i.forChild(C)],c.i]}),T),E=((R=function e(){_classCallCheck(this,e)}).\u0275mod=b.Ib({type:R}),R.\u0275inj=b.Hb({factory:function(e){return new(e||R)},imports:[[i.v,a.c,u.a,A]]}),R)},dTEF:function(e,t,n){"use strict";var r,o,i;n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i})),function(e){e.Prompt="PROMPT",e.Camera="CAMERA",e.Photos="PHOTOS"}(r||(r={})),function(e){e.Rear="REAR",e.Front="FRONT"}(o||(o={})),function(e){e.Uri="uri",e.Base64="base64",e.DataUrl="dataUrl"}(i||(i={}))}}]);