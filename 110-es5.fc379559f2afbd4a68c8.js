function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{fHjd:function(e,t,i){"use strict";i.r(t),i.d(t,"pwa_toast",(function(){return o}));var n=i("At8z"),o=function(){function e(t){_classCallCheck(this,e),Object(n.h)(this,t),this.duration=2e3,this.closing=null}return _createClass(e,[{key:"hostData",value:function(){var e={out:!!this.closing};return null!==this.closing&&(e.in=!this.closing),{class:e}}},{key:"componentDidLoad",value:function(){var e=this;setTimeout((function(){e.closing=!1})),setTimeout((function(){e.close()}),this.duration)}},{key:"close",value:function(){var e=this;this.closing=!0,setTimeout((function(){e.el.parentNode.removeChild(e.el)}),1e3)}},{key:"__stencil_render",value:function(){return Object(n.g)("div",{class:"wrapper"},Object(n.g)("div",{class:"toast"},this.message))}},{key:"render",value:function(){return Object(n.g)(n.a,this.hostData(),this.__stencil_render())}},{key:"el",get:function(){return Object(n.f)(this)}}],[{key:"style",get:function(){return":host{position:fixed;bottom:20px;left:0;right:0;display:-ms-flexbox;display:flex;opacity:0}:host(.in){-webkit-transition:opacity .3s;transition:opacity .3s;opacity:1}:host(.out){-webkit-transition:opacity 1s;transition:opacity 1s;opacity:0}.wrapper{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.toast{font-family:-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif;background-color:#eee;color:#000;border-radius:5px;padding:10px 15px;font-size:14px;font-weight:500;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.2);box-shadow:0 1px 2px rgba(0,0,0,.2)}"}}]),e}()}}]);