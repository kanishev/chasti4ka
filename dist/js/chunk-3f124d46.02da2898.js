(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f124d46"],{"28b1":function(t,e,n){},"642f":function(t,e,n){t.exports=n.p+"img/about-image.a068e079.webp"},"91aa":function(t,e,n){},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(C){u=function(t,e,n){return t[e]=n}}function c(t,e,n,r){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),s=new j(r||[]);return i._invoke=E(t,n,s),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(C){return{type:"throw",arg:C}}}t.wrap=c;var p="suspendedStart",f="suspendedYield",h="executing",d="completed",g={};function m(){}function _(){}function y(){}var b={};b[i]=function(){return this};var v=Object.getPrototypeOf,w=v&&v(v(D([])));w&&w!==n&&r.call(w,i)&&(b=w);var k=y.prototype=m.prototype=Object.create(b);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function T(t,e){function n(o,i,s,a){var u=l(t[o],t,i);if("throw"!==u.type){var c=u.arg,p=c.value;return p&&"object"===typeof p&&r.call(p,"__await")?e.resolve(p.__await).then((function(t){n("next",t,s,a)}),(function(t){n("throw",t,s,a)})):e.resolve(p).then((function(t){c.value=t,s(c)}),(function(t){return n("throw",t,s,a)}))}a(u.arg)}var o;function i(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function E(t,e,n){var r=p;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return O()}n.method=o,n.arg=i;while(1){var s=n.delegate;if(s){var a=L(s,n);if(a){if(a===g)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var u=l(t,e,n);if("normal"===u.type){if(r=n.done?d:f,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=d,n.method="throw",n.arg=u.arg)}}}function L(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,L(t,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function R(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function D(t){if(t){var n=t[i];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,s=function n(){while(++o<t.length)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return s.next=s}}return{next:O}}function O(){return{value:e,done:!0}}return _.prototype=k.constructor=y,y.constructor=_,_.displayName=u(y,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,a,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},x(T.prototype),T.prototype[s]=function(){return this},t.AsyncIterator=T,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var s=new T(c(e,n,r,o),i);return t.isGeneratorFunction(n)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},x(k),u(k,a,"Generator"),k[i]=function(){return this},k.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=D,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(R),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return a.type="throw",a.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i],a=s.completion;if("root"===s.tryLoc)return o("end");if(s.tryLoc<=this.prev){var u=r.call(s,"catchLoc"),c=r.call(s,"finallyLoc");if(u&&c){if(this.prev<s.catchLoc)return o(s.catchLoc,!0);if(this.prev<s.finallyLoc)return o(s.finallyLoc)}else if(u){if(this.prev<s.catchLoc)return o(s.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return o(s.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=t,s.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),R(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;R(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:D(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),g}},t}(t.exports);try{regeneratorRuntime=r}catch(o){Function("r","regeneratorRuntime = r")(r)}},ab72:function(t,e,n){t.exports=n.p+"img/about-image.d38da0be.jpg"},e58d:function(t,e,n){"use strict";n("28b1")},e76e:function(t,e,n){"use strict";n("91aa")},f820:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("section",{staticClass:"section-about"},[n("div",{staticClass:"container"},[n("div",{staticClass:"about"},[t._m(0),t._m(1),n("div",{staticClass:"about-btns"},[n("button",{staticClass:"btn about-btns__btn",on:{click:function(e){return t.$router.push("/portfolio")}}},[t._v(" проекты ")]),n("button",{staticClass:"btn about-btns__btn",on:{click:function(e){return t.$router.push("/contact")}}},[t._v(" контакты ")])])]),n("h2",{staticClass:"section-title"},[t._v("Мой инстаграм")]),t.preloader?n("Preloader"):t._e(),n("div",{attrs:{id:"instafeed"}}),n("a",{staticClass:"btn btn-follow",attrs:{href:"https://www.instagram.com/chastichka_designer",target:"_blank",rel:"noopener","aria-label":"instagram"}},[t._v(" follow me ")])],1)])])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about-image"},[r("div",{staticClass:"image-wrapper"},[r("img",{staticClass:"image-wrapper__top",attrs:{src:n("4dc5"),alt:"star-top"}}),r("picture",[r("source",{attrs:{srcset:n("642f"),type:"image/webp"}}),r("img",{staticClass:"image-wrapper__main",attrs:{id:"hello",src:n("ab72"),alt:"about-image"}})]),r("div",{staticClass:"image-wrapper__bottom"},[r("img",{staticClass:"star-bottom",attrs:{src:n("4dc5"),alt:"star-bottom"}}),r("img",{staticClass:"star-bottom",attrs:{src:n("4dc5"),alt:"star-bottom"}})])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-text"},[n("p",[t._v(" Привет! Меня зовут Дарима, я графический дизайнер. "),n("br"),t._v(" Создаю логотипы и фирменный стиль для брендов. ")]),n("p",[t._v(" Мой подход в работе состоит в детальном изучении, анализе бренда, миссии, создание платформы бренда, аналитике целевой аудитории, конкурентов, сферы рынка. "),n("br"),t._v(" Благодаря такому подходу, мы с заказчиком погружаемся в проект, ставим задачу и решаем ее. ")]),n("p",[t._v(" Моя стратегия - создание смыслов. Я ищу идеи и обыгрываю их, создавая осмысленные образы в своих логотипах. ")]),n("p",[t._v(" В постоянном общении, мы вместе ищем, создаем и выбираем лучшие решения для вашего бизнеса. "),n("br"),t._v(" Тщательное обдумывание концепций и идей логотипа, элементов брендинга, уделение внимания деталям позволяет достичь поставленных задач. ")]),n("p",[t._v(" После завершения проекта, я с удовольствием поддерживаю связь, отвечаю на вопросы и открыта для новых предложений. ")])])}];n("d3b7");function i(t,e,n,r,o,i,s){try{var a=t[i](s),u=a.value}catch(c){return void n(c)}a.done?e(u):Promise.resolve(u).then(r,o)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var s=t.apply(e,n);function a(t){i(s,r,o,a,u,"next",t)}function u(t){i(s,r,o,a,u,"throw",t)}a(void 0)}))}}n("96cf");var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lds-ripple"},[n("div"),n("div")])}],c=(n("e58d"),n("2877")),l={},p=Object(c["a"])(l,a,u,!1,null,null,null),f=p.exports;function h(t,e){if(!t)throw new Error(e)}function d(t){h(!t||"object"===typeof t,"options must be an object, got "+t+" ("+typeof t+")");var e={accessToken:null,accessTokenTimeout:1e4,after:null,apiTimeout:1e4,apiLimit:null,before:null,debug:!1,error:null,filter:null,limit:null,mock:!1,render:null,sort:null,success:null,target:"instafeed",template:'<a href="{{link}}"><img title="{{caption}}" src="{{image}}" /></a>',templateBoundaries:["{{","}}"],transform:null},n={running:!1,node:null,token:null,paging:null,pool:[]};if(t)for(var r in e)"undefined"!==typeof t[r]&&(e[r]=t[r]);h("string"===typeof e.target||"object"===typeof e.target,"target must be a string or DOM node, got "+e.target+" ("+typeof e.target+")"),h("string"===typeof e.accessToken||"function"===typeof e.accessToken,"accessToken must be a string or function, got "+e.accessToken+" ("+typeof e.accessToken+")"),h("number"===typeof e.accessTokenTimeout,"accessTokenTimeout must be a number, got "+e.accessTokenTimeout+" ("+typeof e.accessTokenTimeout+")"),h("number"===typeof e.apiTimeout,"apiTimeout must be a number, got "+e.apiTimeout+" ("+typeof e.apiTimeout+")"),h("boolean"===typeof e.debug,"debug must be true or false, got "+e.debug+" ("+typeof e.debug+")"),h("boolean"===typeof e.mock,"mock must be true or false, got "+e.mock+" ("+typeof e.mock+")"),h("object"===typeof e.templateBoundaries&&2===e.templateBoundaries.length&&"string"===typeof e.templateBoundaries[0]&&"string"===typeof e.templateBoundaries[1],"templateBoundaries must be an array of 2 strings, got "+e.templateBoundaries+" ("+typeof e.templateBoundaries+")"),h(!e.template||"string"===typeof e.template,"template must null or string, got "+e.template+" ("+typeof e.template+")"),h(!e.error||"function"===typeof e.error,"error must be null or function, got "+e.error+" ("+typeof e.error+")"),h(!e.before||"function"===typeof e.before,"before must be null or function, got "+e.before+" ("+typeof e.before+")"),h(!e.after||"function"===typeof e.after,"after must be null or function, got "+e.after+" ("+typeof e.after+")"),h(!e.success||"function"===typeof e.success,"success must be null or function, got "+e.success+" ("+typeof e.success+")"),h(!e.filter||"function"===typeof e.filter,"filter must be null or function, got "+e.filter+" ("+typeof e.filter+")"),h(!e.transform||"function"===typeof e.transform,"transform must be null or function, got "+e.transform+" ("+typeof e.transform+")"),h(!e.sort||"function"===typeof e.sort,"sort must be null or function, got "+e.sort+" ("+typeof e.sort+")"),h(!e.render||"function"===typeof e.render,"render must be null or function, got "+e.render+" ("+typeof e.render+")"),h(!e.limit||"number"===typeof e.limit,"limit must be null or number, got "+e.limit+" ("+typeof e.limit+")"),h(!e.apiLimit||"number"===typeof e.apiLimit,"apiLimit must null or number, got "+e.apiLimit+" ("+typeof e.apiLimit+")"),this._state=n,this._options=e}d.prototype.run=function(){var t=this;return this._debug("run","options",this._options),this._debug("run","state",this._state),this._state.running?(this._debug("run","already running, skipping"),!1):(this._start(),this._debug("run","getting dom node"),"string"===typeof this._options.target?this._state.node=document.getElementById(this._options.target):this._state.node=this._options.target,this._state.node?(this._debug("run","got dom node",this._state.node),this._debug("run","getting access token"),this._getAccessToken((function(e,n){if(e)return t._debug("onTokenReceived","error",e),void t._fail(new Error("error getting access token: "+e.message));t._debug("onTokenReceived","got token",n),t._state.token=n,t._showNext((function(e){if(e)return t._debug("onNextShown","error",e),void t._fail(e);t._finish()}))})),!0):(this._fail(new Error("no element found with ID "+this._options.target)),!1))},d.prototype.hasNext=function(){var t=this._state.paging,e=this._state.pool;return this._debug("hasNext","paging",t),this._debug("hasNext","pool",e.length,e),e.length>0||t&&"string"===typeof t.next},d.prototype.next=function(){var t=this;return t.hasNext()?t._state.running?(t._debug("next","already running, skipping"),!1):(t._start(),void t._showNext((function(e){if(e)return t._debug("onNextShown","error",e),void t._fail(e);t._finish()}))):(t._debug("next","hasNext is false, skipping"),!1)},d.prototype._showNext=function(t){var e=this,n=null,r=null,o="number"===typeof this._options.limit;if(e._debug("showNext","pool",e._state.pool.length,e._state.pool),e._state.pool.length>0){if(r=o?e._state.pool.splice(0,e._options.limit):e._state.pool.splice(0),e._debug("showNext","items from pool",r.length,r),e._debug("showNext","updated pool",e._state.pool.length,e._state.pool),e._options.mock)e._debug("showNext","mock enabled, skipping render");else try{e._renderData(r)}catch(i){return void t(i)}t(null)}else e._state.paging&&"string"===typeof e._state.paging.next?n=e._state.paging.next:(n="https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token="+e._state.token,e._options.apiLimit||"number"!==typeof e._options.limit?"number"===typeof e._options.apiLimit&&(e._debug("showNext","apiLimit set, overriding limit",e._options.apiLimit,e._options.limit),n=n+"&limit="+e._options.apiLimit):(e._debug("showNext","no apiLimit set, falling back to limit",e._options.apiLimit,e._options.limit),n=n+"&limit="+e._options.limit)),e._debug("showNext","making request",n),e._makeApiRequest(n,(function(n,r){var o=null;if(n)return e._debug("onResponseReceived","error",n),void t(new Error("api request error: "+n.message));e._debug("onResponseReceived","data",r),e._success(r),e._debug("onResponseReceived","setting paging",r.paging),e._state.paging=r.paging;try{if(o=e._processData(r),e._debug("onResponseReceived","processed data",o),o.unused&&o.unused.length>0){e._debug("onResponseReceived","saving unused to pool",o.unused.length,o.unused);for(var s=0;s<o.unused.length;s++)e._state.pool.push(o.unused[s])}}catch(a){return void t(a)}if(e._options.mock)e._debug("onResponseReceived","mock enabled, skipping append");else try{e._renderData(o.items)}catch(i){return void t(i)}t(null)}))},d.prototype._processData=function(t){var e="function"===typeof this._options.transform,n="function"===typeof this._options.filter,r="function"===typeof this._options.sort,o="number"===typeof this._options.limit,i=[],s=null,a=null,u=null,c=null,l=null;if(this._debug("processData","hasFilter",n,"hasTransform",e,"hasSort",r,"hasLimit",o),"object"!==typeof t||"object"!==typeof t.data||t.data.length<=0)return null;for(var p=0;p<t.data.length;p++){if(a=this._getItemData(t.data[p]),e)try{u=this._options.transform(a),this._debug("processData","transformed item",a,u)}catch(f){throw this._debug("processData","error calling transform",f),new Error("error in transform: "+f.message)}else u=a;if(n){try{c=this._options.filter(u),this._debug("processData","filter item result",u,c)}catch(f){throw this._debug("processData","error calling filter",f),new Error("error in filter: "+f.message)}c&&i.push(u)}else i.push(u)}if(r)try{i.sort(this._options.sort)}catch(f){throw this._debug("processData","error calling sort",f),new Error("error in sort: "+f.message)}return o&&(s=i.length-this._options.limit,this._debug("processData","checking limit",i.length,this._options.limit,s),s>0&&(l=i.slice(i.length-s),this._debug("processData","unusedItems",l.length,l),i.splice(i.length-s,s))),{items:i,unused:l}},d.prototype._extractTags=function(t){var e=/#([^\s]+)/gi,n=/[~`!@#$%^&*\(\)\-\+={}\[\]:;"'<>\?,\./|\\\s]+/i,r=[],o=null;if("string"===typeof t)while(null!==(o=e.exec(t)))!1===n.test(o[1])&&r.push(o[1]);return r},d.prototype._getItemData=function(t){var e=null,n=null;switch(t.media_type){case"IMAGE":e="image",n=t.media_url;break;case"VIDEO":e="video",n=t.thumbnail_url;break;case"CAROUSEL_ALBUM":e="album",n=t.media_url;break}return{caption:t.caption,tags:this._extractTags(t.caption),id:t.id,image:n,link:t.permalink,model:t,timestamp:t.timestamp,type:e,username:t.username}},d.prototype._renderData=function(t){var e="string"===typeof this._options.template,n="function"===typeof this._options.render,r=null,o=null,i=null,s="";if(this._debug("renderData","hasTemplate",e,"hasRender",n),!("object"!==typeof t||t.length<=0)){for(var a=0;a<t.length;a++){if(r=t[a],n)try{o=this._options.render(r,this._options),this._debug("renderData","custom render result",r,o)}catch(u){throw this._debug("renderData","error calling render",u),new Error("error in render: "+u.message)}else e&&(o=this._basicRender(r));o?s+=o:this._debug("renderData","render item did not return any content",r)}this._debug("renderData","html content",s),i=document.createElement("div"),i.innerHTML=s,this._debug("renderData","container",i,i.childNodes.length,i.childNodes);while(i.childNodes.length>0)this._debug("renderData","appending child",i.childNodes[0]),this._state.node.appendChild(i.childNodes[0])}},d.prototype._basicRender=function(t){var e=new RegExp(this._options.templateBoundaries[0]+"([\\s\\w.]+)"+this._options.templateBoundaries[1],"gm"),n=this._options.template,r=null,o="",i=null,s=0,a=null,u=null;while(null!==(r=e.exec(n)))a=r[1],i=n.slice(s,r.index),o+=i,u=this._valueForKeyPath(a,t),u&&(o+=u.toString()),s=e.lastIndex;return s<n.length&&(i=n.slice(s,n.length),o+=i),o},d.prototype._valueForKeyPath=function(t,e){var n=/([\w]+)/gm,r=null,o=null,i=e;while(null!==(r=n.exec(t))){if("object"!==typeof i)return null;o=r[1],i=i[o]}return i},d.prototype._fail=function(t){var e=this._runHook("error",t);!e&&console&&"function"===typeof console.error&&console.error(t),this._state.running=!1},d.prototype._start=function(){this._state.running=!0,this._runHook("before")},d.prototype._finish=function(){this._runHook("after"),this._state.running=!1},d.prototype._success=function(t){this._runHook("success",t),this._state.running=!1},d.prototype._makeApiRequest=function(t,e){var n=!1,r=this,o=null,i=function(t,r){n||(n=!0,e(t,r))};o=new XMLHttpRequest,o.ontimeout=function(){i(new Error("api request timed out"))},o.onerror=function(){i(new Error("api connection error"))},o.onload=function(t){var e=o.getResponseHeader("Content-Type"),n=null;if(r._debug("apiRequestOnLoad","loaded",t),r._debug("apiRequestOnLoad","response status",o.status),r._debug("apiRequestOnLoad","response content type",e),e.indexOf("application/json")>=0)try{n=JSON.parse(o.responseText)}catch(s){return r._debug("apiRequestOnLoad","json parsing error",s,o.responseText),void i(new Error("error parsing response json"))}200===o.status?i(null,n):n&&n.error?i(new Error(n.error.code+" "+n.error.message)):i(new Error("status code "+o.status))},o.open("GET",t,!0),o.timeout=this._options.apiTimeout,o.send()},d.prototype._getAccessToken=function(t){var e=!1,n=this,r=null,o=function(n,o){e||(e=!0,clearTimeout(r),t(n,o))};if("function"===typeof this._options.accessToken){this._debug("getAccessToken","calling accessToken as function"),r=setTimeout((function(){n._debug("getAccessToken","timeout check",e),o(new Error("accessToken timed out"),null)}),this._options.accessTokenTimeout);try{this._options.accessToken((function(t,r){n._debug("getAccessToken","received accessToken callback",e,t,r),o(t,r)}))}catch(i){this._debug("getAccessToken","error invoking the accessToken as function",i),o(i,null)}}else this._debug("getAccessToken","treating accessToken as static",typeof this._options.accessToken),o(null,this._options.accessToken)},d.prototype._debug=function(){var t=null;this._options.debug&&console&&"function"===typeof console.log&&(t=[].slice.call(arguments),t[0]="[Instafeed] ["+t[0]+"]",console.log.apply(null,t))},d.prototype._runHook=function(t,e){var n=!1;if("function"===typeof this._options[t])try{this._options[t](e),n=!0}catch(r){this._debug("runHook","error calling hook",t,r)}return n};var g=d,m={instaToken:"IGQVJWX3hkZAXVtTjFfaVd5NU9pYzhUd0dYbHhmWDNQb1ZA5eC1aaTg2RVRqN2J3N1ZADajlTWWdmODNkTEdPazE4R1BtWm5pMlF3ODNhY0dOdGpoV3c1RmZAVMUVmaTNqd3pXMTkzNnNB",instaAdress:"https://ig.instant-tokens.com/users/6175a370-d393-4e49-98f3-0cd4813802dc/instagram/17841417364397200/token?userSecret=n018vq50qh82k0q4fkec8"},_=m;function y(){return fetch(_.instaAdress,{headers:{"Content-Type":"application/javascript"}}).then((function(t){return t.json()})).then((function(t){console.log(t);var e=new g({get:"tagged",accessToken:t.Token,limit:6,template:'\n              <div class="insta-post">\n              <a href="{{link}}" class="insta-post__link">\n                <img src="insta.png" alt="icon" class="insta-post__icon"/>\n                <img src="{{image}}" class="insta-post__image" alt="image" >\n                <p class="insta-post__text">{{caption}}</p>\n                </a>\n              </div>\n\n        '});e.run()}))}var b={created:function(){var t=this;return s(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.preloader=!0,e.next=3,y().then((function(){t.preloader=!1}));case 3:case"end":return e.stop()}}),e)})))()},data:function(){return{preloader:!1}},components:{Preloader:f}},v=b,w=(n("e76e"),Object(c["a"])(v,r,o,!1,null,null,null));e["default"]=w.exports}}]);
//# sourceMappingURL=chunk-3f124d46.02da2898.js.map