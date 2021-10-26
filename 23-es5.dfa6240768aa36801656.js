function asyncGeneratorStep(e,t,r,n,a,o,i){try{var c=e[o](i),s=c.value}catch(u){return void r(u)}c.done?t(s):Promise.resolve(s).then(n,a)}function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){asyncGeneratorStep(o,n,a,i,c,"next",e)}function c(e){asyncGeneratorStep(o,n,a,i,c,"throw",e)}i(void 0)}))}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var r,n=_getPrototypeOf(e);if(t){var a=_getPrototypeOf(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return _possibleConstructorReturn(this,r)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{wzPO:function(e,t,r){"use strict";r.r(t),r.d(t,"CameraWeb",(function(){return o})),r.d(t,"Camera",(function(){return i}));var n=r("FUe0"),a=r("dTEF"),o=function(e){_inherits(s,e);var t,r,o,i,c=_createSuper(s);function s(){return _classCallCheck(this,s),c.apply(this,arguments)}return _createClass(s,[{key:"getPhoto",value:(i=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var r=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(n,o){var i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.webUseInput||t.source===a.c.Photos?r.fileInputExperience(t,n):t.source===a.c.Prompt?((i=document.querySelector("pwa-action-sheet"))||(i=document.createElement("pwa-action-sheet"),document.body.appendChild(i)),i.header=t.promptLabelHeader||"Photo",i.cancelable=!1,i.options=[{title:t.promptLabelPhoto||"From Photos"},{title:t.promptLabelPicture||"Take Picture"}],i.addEventListener("onSelection",function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0===a.detail?r.fileInputExperience(t,n):r.cameraExperience(t,n,o);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())):r.cameraExperience(t,n,o);case 1:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)}))),function(e){return i.apply(this,arguments)})},{key:"cameraExperience",value:(o=_asyncToGenerator(regeneratorRuntime.mark((function e(t,r,a){var o,i=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!customElements.get("pwa-camera-modal")){e.next=15;break}return o=document.createElement("pwa-camera-modal"),document.body.appendChild(o),e.prev=3,e.next=6,o.componentOnReady();case 6:o.addEventListener("onPhoto",function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(c){var s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(s=c.detail)){e.next=5;break}a(new n.b("User cancelled photos app")),e.next=14;break;case 5:if(!(s instanceof Error)){e.next=9;break}a(s),e.next=14;break;case 9:return e.t0=r,e.next=12,i._getCameraPhoto(s,t);case 12:e.t1=e.sent,(0,e.t0)(e.t1);case 14:o.dismiss(),document.body.removeChild(o);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),o.present(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),this.fileInputExperience(t,r);case 13:e.next=16;break;case 15:console.error("Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/pwa-elements."),this.fileInputExperience(t,r);case 16:case"end":return e.stop()}}),e,this,[[3,10]])}))),function(e,t,r){return o.apply(this,arguments)})},{key:"fileInputExperience",value:function(e,t){var r=document.querySelector("#_capacitor-camera-input"),n=function(){var e;null===(e=r.parentNode)||void 0===e||e.removeChild(r)};r||((r=document.createElement("input")).id="_capacitor-camera-input",r.type="file",r.hidden=!0,document.body.appendChild(r),r.addEventListener("change",(function(a){var o=r.files[0],i="jpeg";if("image/png"===o.type?i="png":"image/gif"===o.type&&(i="gif"),"dataUrl"===e.resultType||"base64"===e.resultType){var c=new FileReader;c.addEventListener("load",(function(){if("dataUrl"===e.resultType)t({dataUrl:c.result,format:i});else if("base64"===e.resultType){var r=c.result.split(",")[1];t({base64String:r,format:i})}n()})),c.readAsDataURL(o)}else t({webPath:URL.createObjectURL(o),format:i}),n()}))),r.accept="image/*",r.capture=!0,e.source===a.c.Photos||e.source===a.c.Prompt?r.removeAttribute("capture"):e.direction===a.a.Front?r.capture="user":e.direction===a.a.Rear&&(r.capture="environment"),r.click()}},{key:"_getCameraPhoto",value:function(e,t){return new Promise((function(r,n){var a=new FileReader,o=e.type.split("/")[1];"uri"===t.resultType?r({webPath:URL.createObjectURL(e),format:o,saved:!1}):(a.readAsDataURL(e),a.onloadend=function(){var e=a.result;r("dataUrl"===t.resultType?{dataUrl:e,format:o,saved:!1}:{base64String:e.split(",")[1],format:o,saved:!1})},a.onerror=function(e){n(e)})}))}},{key:"checkPermissions",value:(r=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"!=typeof navigator&&navigator.permissions){e.next=2;break}throw this.unavailable("Permissions API not available in this browser");case 2:return e.prev=2,e.next=5,window.navigator.permissions.query({name:"camera"});case 5:return e.t0=e.sent.state,e.abrupt("return",{camera:e.t0,photos:"granted"});case 9:throw e.prev=9,e.t1=e.catch(2),this.unavailable("Camera permissions are not available in this browser");case 12:case"end":return e.stop()}}),e,this,[[2,9]])}))),function(){return r.apply(this,arguments)})},{key:"requestPermissions",value:(t=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:throw this.unimplemented("Not implemented on web.");case 1:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})}]),s}(n.c),i=new o}}]);