function _createForOfIteratorHelper(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=_unsupportedIterableToArray(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,a,o=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){i=!0,a=e},f:function(){try{o||null==n.return||n.return()}finally{if(i)throw a}}}}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function asyncGeneratorStep(e,t,r,n,a,o,i){try{var s=e[o](i),c=s.value}catch(u){return void r(u)}s.done?t(c):Promise.resolve(c).then(n,a)}function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){asyncGeneratorStep(o,n,a,i,s,"next",e)}function s(e){asyncGeneratorStep(o,n,a,i,s,"throw",e)}i(void 0)}))}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var r,n=_getPrototypeOf(e);if(t){var a=_getPrototypeOf(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return _possibleConstructorReturn(this,r)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{B5q2:function(e,t,r){"use strict";function n(e){var t=e.split("/").filter((function(e){return"."!==e})),r=[];return t.forEach((function(e){".."===e&&r.length>0&&".."!==r[r.length-1]?r.pop():r.push(e)})),r.join("/")}r.r(t),r.d(t,"FilesystemWeb",(function(){return a}));var a=function(e){_inherits(w,e);var t,r,a,o,i,s,c,u,p,f,h,d,l,y,b,m,v,x,g=_createSuper(w);function w(){var e;return _classCallCheck(this,w),(e=g.apply(this,arguments)).DB_VERSION=1,e.DB_NAME="Disc",e._writeCmds=["add","put","delete"],e}return _createClass(w,[{key:"initDb",value:(x=_asyncToGenerator(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===this._db){e.next=2;break}return e.abrupt("return",this._db);case 2:if("indexedDB"in window){e.next=4;break}throw this.unavailable("This browser doesn't support IndexedDB");case 4:return e.abrupt("return",new Promise((function(e,r){var n=indexedDB.open(t.DB_NAME,t.DB_VERSION);n.onupgradeneeded=w.doUpgrade,n.onsuccess=function(){t._db=n.result,e(n.result)},n.onerror=function(){return r(n.error)},n.onblocked=function(){console.warn("db blocked")}})));case 5:case"end":return e.stop()}}),e,this)}))),function(){return x.apply(this,arguments)})},{key:"dbRequest",value:(v=_asyncToGenerator(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=-1!==this._writeCmds.indexOf(t)?"readwrite":"readonly",e.abrupt("return",this.initDb().then((function(e){return new Promise((function(a,o){var i,s=(i=e.transaction(["FileStorage"],n).objectStore("FileStorage"))[t].apply(i,_toConsumableArray(r));s.onsuccess=function(){return a(s.result)},s.onerror=function(){return o(s.error)}}))})));case 2:case"end":return e.stop()}}),e,this)}))),function(e,t){return v.apply(this,arguments)})},{key:"dbIndexRequest",value:(m=_asyncToGenerator(regeneratorRuntime.mark((function e(t,r,n){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=-1!==this._writeCmds.indexOf(r)?"readwrite":"readonly",e.abrupt("return",this.initDb().then((function(e){return new Promise((function(o,i){var s,c=(s=e.transaction(["FileStorage"],a).objectStore("FileStorage").index(t))[r].apply(s,_toConsumableArray(n));c.onsuccess=function(){return o(c.result)},c.onerror=function(){return i(c.error)}}))})));case 2:case"end":return e.stop()}}),e,this)}))),function(e,t,r){return m.apply(this,arguments)})},{key:"getPath",value:function(e,t){var r=void 0!==t?t.replace(/^[/]+|[/]+$/g,""):"",n="";return void 0!==e&&(n+="/"+e),""!==t&&(n+="/"+r),n}},{key:"clear",value:(b=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.initDb();case 2:e.sent.transaction(["FileStorage"],"readwrite").objectStore("FileStorage").clear();case 3:case"end":return e.stop()}}),e,this)}))),function(){return b.apply(this,arguments)})},{key:"readFile",value:(y=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.getPath(t.directory,t.path),e.next=3,this.dbRequest("get",[r]);case 3:if(void 0!==(n=e.sent)){e.next=6;break}throw Error("File does not exist.");case 6:return e.abrupt("return",{data:n.content?n.content:""});case 7:case"end":return e.stop()}}),e,this)}))),function(e){return y.apply(this,arguments)})},{key:"writeFile",value:(l=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var r,n,a,o,i,s,c,u,p,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.getPath(t.directory,t.path),n=t.data,a=t.recursive,e.next=5,this.dbRequest("get",[r]);case 5:if(!(o=e.sent)||"directory"!==o.type){e.next=8;break}throw"The supplied path is a directory.";case 8:return i=t.encoding,s=r.substr(0,r.lastIndexOf("/")),e.t0=void 0,e.next=12,this.dbRequest("get",[s]);case 12:if(e.t1=e.sent,e.t0!==e.t1){e.next=19;break}if(-1===(c=s.indexOf("/",1))){e.next=19;break}return u=s.substr(c),e.next=19,this.mkdir({path:u,directory:t.directory,recursive:a});case 19:return p=Date.now(),f={path:r,folder:s,type:"file",size:n.length,ctime:p,mtime:p,content:!i&&n.indexOf(",")>=0?n.split(",")[1]:n},e.next=22,this.dbRequest("put",[f]);case 22:return e.abrupt("return",{uri:f.path});case 23:case"end":return e.stop()}}),e,this)}))),function(e){return l.apply(this,arguments)})},{key:"appendFile",value:(d=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var r,n,a,o,i,s,c,u,p;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.getPath(t.directory,t.path),n=t.data,a=r.substr(0,r.lastIndexOf("/")),o=Date.now(),i=o,e.next=6,this.dbRequest("get",[r]);case 6:if(!(s=e.sent)||"directory"!==s.type){e.next=9;break}throw"The supplied path is a directory.";case 9:return e.t0=void 0,e.next=12,this.dbRequest("get",[a]);case 12:if(e.t1=e.sent,e.t0!==e.t1){e.next=19;break}if(-1===(c=a.indexOf("/",1))){e.next=19;break}return u=a.substr(c),e.next=19,this.mkdir({path:u,directory:t.directory,recursive:!0});case 19:return void 0!==s&&(n=s.content+n,i=s.ctime),p={path:r,folder:a,type:"file",size:n.length,ctime:i,mtime:o,content:n},e.next=23,this.dbRequest("put",[p]);case 23:case"end":return e.stop()}}),e,this)}))),function(e){return d.apply(this,arguments)})},{key:"deleteFile",value:(h=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.getPath(t.directory,t.path),e.t0=void 0,e.next=4,this.dbRequest("get",[r]);case 4:if(e.t1=e.sent,e.t0!==e.t1){e.next=7;break}throw Error("File does not exist.");case 7:return e.next=9,this.dbIndexRequest("by_folder","getAllKeys",[IDBKeyRange.only(r)]);case 9:if(e.t2=e.sent.length,0===e.t2){e.next=12;break}throw Error("Folder is not empty.");case 12:return e.next=14,this.dbRequest("delete",[r]);case 14:case"end":return e.stop()}}),e,this)}))),function(e){return h.apply(this,arguments)})},{key:"mkdir",value:(f=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var r,n,a,o,i,s,c,u,p;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.getPath(t.directory,t.path),n=t.recursive,a=r.substr(0,r.lastIndexOf("/")),o=(r.match(/\//g)||[]).length,e.next=6,this.dbRequest("get",[a]);case 6:return i=e.sent,e.next=9,this.dbRequest("get",[r]);case 9:if(s=e.sent,1!==o){e.next=12;break}throw Error("Cannot create Root directory");case 12:if(void 0===s){e.next=14;break}throw Error("Current directory does already exist.");case 14:if(n||2===o||void 0!==i){e.next=16;break}throw Error("Parent directory must exist");case 16:if(!n||2===o||void 0!==i){e.next=20;break}return c=a.substr(a.indexOf("/",1)),e.next=20,this.mkdir({path:c,directory:t.directory,recursive:n});case 20:return u=Date.now(),p={path:r,folder:a,type:"directory",size:0,ctime:u,mtime:u},e.next=23,this.dbRequest("put",[p]);case 23:case"end":return e.stop()}}),e,this)}))),function(e){return f.apply(this,arguments)})},{key:"rmdir",value:(p=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var r,n,a,o,i,s,c,u,p,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.path,n=t.directory,a=t.recursive,o=this.getPath(n,r),e.next=6,this.dbRequest("get",[o]);case 6:if(void 0!==(i=e.sent)){e.next=9;break}throw Error("Folder does not exist.");case 9:if("directory"===i.type){e.next=11;break}throw Error("Requested path is not a directory");case 11:return e.next=13,this.readdir({path:r,directory:n});case 13:if(0===(s=e.sent).files.length||a){e.next=16;break}throw Error("Folder is not empty");case 16:c=_createForOfIteratorHelper(s.files),e.prev=17,c.s();case 19:if((u=c.n()).done){e.next=34;break}return p=u.value,f="".concat(r,"/").concat(p),e.next=24,this.stat({path:f,directory:n});case 24:if(e.t0=e.sent.type,"file"!==e.t0){e.next=30;break}return e.next=28,this.deleteFile({path:f,directory:n});case 28:e.next=32;break;case 30:return e.next=32,this.rmdir({path:f,directory:n,recursive:a});case 32:e.next=19;break;case 34:e.next=39;break;case 36:e.prev=36,e.t1=e.catch(17),c.e(e.t1);case 39:return e.prev=39,c.f(),e.finish(39);case 42:return e.next=44,this.dbRequest("delete",[o]);case 44:case"end":return e.stop()}}),e,this,[[17,36,39,42]])}))),function(e){return p.apply(this,arguments)})},{key:"readdir",value:(u=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.getPath(t.directory,t.path),e.next=3,this.dbRequest("get",[r]);case 3:if(n=e.sent,""===t.path||void 0!==n){e.next=6;break}throw Error("Folder does not exist.");case 6:return e.next=8,this.dbIndexRequest("by_folder","getAllKeys",[IDBKeyRange.only(r)]);case 8:return e.t0=e.sent.map((function(e){return e.substring(r.length+1)})),e.abrupt("return",{files:e.t0});case 10:case"end":return e.stop()}}),e,this)}))),function(e){return u.apply(this,arguments)})},{key:"getUri",value:(c=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.getPath(t.directory,t.path),e.next=3,this.dbRequest("get",[r]);case 3:if(n=e.sent,e.t0=void 0===n,!e.t0){e.next=9;break}return e.next=8,this.dbRequest("get",[r+"/"]);case 8:n=e.sent;case 9:return e.abrupt("return",{uri:(null==n?void 0:n.path)||r});case 10:case"end":return e.stop()}}),e,this)}))),function(e){return c.apply(this,arguments)})},{key:"stat",value:(s=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.getPath(t.directory,t.path),e.next=3,this.dbRequest("get",[r]);case 3:if(n=e.sent,e.t0=void 0===n,!e.t0){e.next=9;break}return e.next=8,this.dbRequest("get",[r+"/"]);case 8:n=e.sent;case 9:if(void 0!==n){e.next=11;break}throw Error("Entry does not exist.");case 11:return e.abrupt("return",{type:n.type,size:n.size,ctime:n.ctime,mtime:n.mtime,uri:n.path});case 12:case"end":return e.stop()}}),e,this)}))),function(e){return s.apply(this,arguments)})},{key:"rename",value:(i=_asyncToGenerator(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._copy(t,!0));case 1:case"end":return e.stop()}}),e,this)}))),function(e){return i.apply(this,arguments)})},{key:"copy",value:(o=_asyncToGenerator(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._copy(t,!1));case 1:case"end":return e.stop()}}),e,this)}))),function(e){return o.apply(this,arguments)})},{key:"requestPermissions",value:(a=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{publicStorage:"granted"});case 1:case"end":return e.stop()}}),e)}))),function(){return a.apply(this,arguments)})},{key:"checkPermissions",value:(r=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{publicStorage:"granted"});case 1:case"end":return e.stop()}}),e)}))),function(){return r.apply(this,arguments)})},{key:"_copy",value:(t=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var r,a,o,i,s,c,u,p,f,h,d,l,y,b,m,v,x,g,w=this,k=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=k.length>1&&void 0!==k[1]&&k[1],a=t.toDirectory,o=t.to,i=t.from,s=t.directory,o&&i){e.next=5;break}throw Error("Both to and from must be provided");case 5:if(a||(a=s),c=this.getPath(s,i),u=this.getPath(a,o),c!==u){e.next=9;break}return e.abrupt("return");case 9:if(!function(e,t){e=n(e),t=n(t);var r=e.split("/"),a=t.split("/");return e!==t&&r.every((function(e,t){return e===a[t]}))}(c,u)){e.next=11;break}throw Error("To path cannot contain the from path");case 11:return e.prev=11,e.next=14,this.stat({path:o,directory:a});case 14:p=e.sent,e.next=30;break;case 17:if(e.prev=17,e.t0=e.catch(11),(f=o.split("/")).pop(),h=f.join("/"),e.t1=f.length>0,!e.t1){e.next=28;break}return e.next=26,this.stat({path:h,directory:a});case 26:e.t2=e.sent.type,e.t1="directory"!==e.t2;case 28:if(!e.t1){e.next=30;break}throw new Error("Parent directory of the to path is a file");case 30:if(!p||"directory"!==p.type){e.next=32;break}throw new Error("Cannot overwrite a directory with a file");case 32:return e.next=34,this.stat({path:i,directory:s});case 34:d=e.sent,l=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(t,r,n){var o,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=w.getPath(a,t),e.next=3,w.dbRequest("get",[o]);case 3:return(i=e.sent).ctime=r,i.mtime=n,e.next=8,w.dbRequest("put",[i]);case 8:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),y=d.ctime?d.ctime:Date.now(),e.t3=d.type,e.next="file"===e.t3?40:"directory"===e.t3?55:92;break;case 40:return e.next=42,this.readFile({path:i,directory:s});case 42:if(b=e.sent,e.t4=r,!e.t4){e.next=47;break}return e.next=47,this.deleteFile({path:i,directory:s});case 47:return e.next=49,this.writeFile({path:o,directory:a,data:b.data});case 49:if(e.t5=r,!e.t5){e.next=54;break}return e.next=53,l(o,y,d.mtime);case 53:e.t5=e.sent;case 54:return e.abrupt("return",void e.t5);case 55:if(!p){e.next=57;break}throw Error("Cannot move a directory over an existing object");case 57:return e.prev=57,e.next=60,this.mkdir({path:o,directory:a,recursive:!1});case 60:if(e.t6=r,!e.t6){e.next=64;break}return e.next=64,l(o,y,d.mtime);case 64:e.next=68;break;case 66:e.prev=66,e.t7=e.catch(57);case 68:return e.next=70,this.readdir({path:i,directory:s});case 70:m=e.sent.files,v=_createForOfIteratorHelper(m),e.prev=72,v.s();case 74:if((x=v.n()).done){e.next=80;break}return g=x.value,e.next=78,this._copy({from:"".concat(i,"/").concat(g),to:"".concat(o,"/").concat(g),directory:s,toDirectory:a},r);case 78:e.next=74;break;case 80:e.next=85;break;case 82:e.prev=82,e.t8=e.catch(72),v.e(e.t8);case 85:return e.prev=85,v.f(),e.finish(85);case 88:if(e.t9=r,!e.t9){e.next=92;break}return e.next=92,this.rmdir({path:i,directory:s});case 92:case"end":return e.stop()}}),e,this,[[11,17],[57,66],[72,82,85,88]])}))),function(e){return t.apply(this,arguments)})}],[{key:"doUpgrade",value:function(e){var t=e.target.result;switch(e.oldVersion){case 0:case 1:default:t.objectStoreNames.contains("FileStorage")&&t.deleteObjectStore("FileStorage"),t.createObjectStore("FileStorage",{keyPath:"path"}).createIndex("by_folder","folder")}}}]),w}(r("FUe0").c);a._debug=!0}}]);