define(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s="./src/ts/store.ts")}({"./node_modules/@babel/runtime/helpers/esm/extends.js":function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",function(){return n})},"./node_modules/antd/es/locale-provider/en_US.js":function(e,t,r){"use strict";var n=r("./node_modules/antd/es/locale/en_US.js");t.a=n.a},"./node_modules/antd/es/locale-provider/zh_CN.js":function(e,t,r){"use strict";var n=r("./node_modules/rc-pagination/es/locale/zh_CN.js"),o=r("./node_modules/@babel/runtime/helpers/esm/extends.js"),a=r("./node_modules/rc-picker/es/locale/zh_CN.js"),i={placeholder:"请选择时间",rangePlaceholder:["开始时间","结束时间"]},l={lang:Object(o.a)({placeholder:"请选择日期",yearPlaceholder:"请选择年份",quarterPlaceholder:"请选择季度",monthPlaceholder:"请选择月份",weekPlaceholder:"请选择周",rangePlaceholder:["开始日期","结束日期"],rangeYearPlaceholder:["开始年份","结束年份"],rangeMonthPlaceholder:["开始月份","结束月份"],rangeWeekPlaceholder:["开始周","结束周"]},a.a),timePickerLocale:Object(o.a)({},i)};l.lang.ok="确 定";var c=l,u=c,s="${label}不是一个有效的${type}",d={locale:"zh-cn",Pagination:n.a,DatePicker:c,TimePicker:i,Calendar:u,global:{placeholder:"请选择"},Table:{filterTitle:"筛选",filterConfirm:"确定",filterReset:"重置",filterEmptyText:"无筛选项",selectAll:"全选当页",selectInvert:"反选当页",selectNone:"清空所有",selectionAll:"全选所有",sortTitle:"排序",expand:"展开行",collapse:"关闭行",triggerDesc:"点击降序",triggerAsc:"点击升序",cancelSort:"取消排序"},Modal:{okText:"确定",cancelText:"取消",justOkText:"知道了"},Popconfirm:{cancelText:"取消",okText:"确定"},Transfer:{searchPlaceholder:"请输入搜索内容",itemUnit:"项",itemsUnit:"项",remove:"删除",selectCurrent:"全选当页",removeCurrent:"删除当页",selectAll:"全选所有",removeAll:"删除全部",selectInvert:"反选当页"},Upload:{uploading:"文件上传中",removeFile:"删除文件",uploadError:"上传错误",previewFile:"预览文件",downloadFile:"下载文件"},Empty:{description:"暂无数据"},Icon:{icon:"图标"},Text:{edit:"编辑",copy:"复制",copied:"复制成功",expand:"展开"},PageHeader:{back:"返回"},Form:{optional:"（可选）",defaultValidateMessages:{default:"字段验证错误${label}",required:"请输入${label}",enum:"${label}必须是其中一个[${enum}]",whitespace:"${label}不能为空字符",date:{format:"${label}日期格式无效",parse:"${label}不能转换为日期",invalid:"${label}是一个无效日期"},types:{string:s,method:s,array:s,object:s,number:s,date:s,boolean:s,integer:s,float:s,regexp:s,email:s,url:s,hex:s},string:{len:"${label}须为${len}个字符",min:"${label}最少${min}个字符",max:"${label}最多${max}个字符",range:"${label}须在${min}-${max}字符之间"},number:{len:"${label}必须等于${len}",min:"${label}最小值为${min}",max:"${label}最大值为${max}",range:"${label}须在${min}-${max}之间"},array:{len:"须为${len}个${label}",min:"最少${min}个${label}",max:"最多${max}个${label}",range:"${label}数量须在${min}-${max}之间"},pattern:{mismatch:"${label}与模式不匹配${pattern}"}}},Image:{preview:"预览"}};t.a=d},"./node_modules/antd/es/locale/default.js":function(e,t,r){"use strict";var n=r("./node_modules/rc-pagination/es/locale/en_US.js"),o=r("./node_modules/@babel/runtime/helpers/esm/extends.js"),a=r("./node_modules/rc-picker/es/locale/en_US.js"),i={placeholder:"Select time",rangePlaceholder:["Start time","End time"]},l={lang:Object(o.a)({placeholder:"Select date",yearPlaceholder:"Select year",quarterPlaceholder:"Select quarter",monthPlaceholder:"Select month",weekPlaceholder:"Select week",rangePlaceholder:["Start date","End date"],rangeYearPlaceholder:["Start year","End year"],rangeMonthPlaceholder:["Start month","End month"],rangeWeekPlaceholder:["Start week","End week"]},a.a),timePickerLocale:Object(o.a)({},i)},c=l,u="${label} is not a valid ${type}",s={locale:"en",Pagination:n.a,DatePicker:l,TimePicker:i,Calendar:c,global:{placeholder:"Please select"},Table:{filterTitle:"Filter menu",filterConfirm:"OK",filterReset:"Reset",filterEmptyText:"No filters",emptyText:"No data",selectAll:"Select current page",selectInvert:"Invert current page",selectNone:"Clear all data",selectionAll:"Select all data",sortTitle:"Sort",expand:"Expand row",collapse:"Collapse row",triggerDesc:"Click to sort descending",triggerAsc:"Click to sort ascending",cancelSort:"Click to cancel sorting"},Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Cancel"},Transfer:{titles:["",""],searchPlaceholder:"Search here",itemUnit:"item",itemsUnit:"items",remove:"Remove",selectCurrent:"Select current page",removeCurrent:"Remove current page",selectAll:"Select all data",removeAll:"Remove all data",selectInvert:"Invert current page"},Upload:{uploading:"Uploading...",removeFile:"Remove file",uploadError:"Upload error",previewFile:"Preview file",downloadFile:"Download file"},Empty:{description:"No Data"},Icon:{icon:"icon"},Text:{edit:"Edit",copy:"Copy",copied:"Copied",expand:"Expand"},PageHeader:{back:"Back"},Form:{optional:"(optional)",defaultValidateMessages:{default:"Field validation error for ${label}",required:"Please enter ${label}",enum:"${label} must be one of [${enum}]",whitespace:"${label} cannot be a blank character",date:{format:"${label} date format is invalid",parse:"${label} cannot be converted to a date",invalid:"${label} is an invalid date"},types:{string:u,method:u,array:u,object:u,number:u,date:u,boolean:u,integer:u,float:u,regexp:u,email:u,url:u,hex:u},string:{len:"${label} must be ${len} characters",min:"${label} must be at least ${min} characters",max:"${label} must be up to ${max} characters",range:"${label} must be between ${min}-${max} characters"},number:{len:"${label} must be equal to ${len}",min:"${label} must be minimum ${min}",max:"${label} must be maximum ${max}",range:"${label} must be between ${min}-${max}"},array:{len:"Must be ${len} ${label}",min:"At least ${min} ${label}",max:"At most ${max} ${label}",range:"The amount of ${label} must be between ${min}-${max}"},pattern:{mismatch:"${label} does not match the pattern ${pattern}"}}},Image:{preview:"Preview"}};t.a=s},"./node_modules/antd/es/locale/en_US.js":function(e,t,r){"use strict";var n=r("./node_modules/antd/es/locale/default.js");t.a=n.a},"./node_modules/lodash-es/_freeGlobal.js":function(e,t,r){"use strict";(function(e){var r="object"==typeof e&&e&&e.Object===Object&&e;t.a=r}).call(this,r("./node_modules/webpack/buildin/global.js"))},"./node_modules/rc-pagination/es/locale/en_US.js":function(e,t,r){"use strict";t.a={items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages"}},"./node_modules/rc-pagination/es/locale/zh_CN.js":function(e,t,r){"use strict";t.a={items_per_page:"条/页",jump_to:"跳至",jump_to_confirm:"确定",page:"页",prev_page:"上一页",next_page:"下一页",prev_5:"向前 5 页",next_5:"向后 5 页",prev_3:"向前 3 页",next_3:"向后 3 页"}},"./node_modules/rc-picker/es/locale/en_US.js":function(e,t,r){"use strict";t.a={locale:"en_US",today:"Today",now:"Now",backToToday:"Back to today",ok:"Ok",clear:"Clear",month:"Month",year:"Year",timeSelect:"select time",dateSelect:"select date",weekSelect:"Choose a week",monthSelect:"Choose a month",yearSelect:"Choose a year",decadeSelect:"Choose a decade",yearFormat:"YYYY",dateFormat:"M/D/YYYY",dayFormat:"D",dateTimeFormat:"M/D/YYYY HH:mm:ss",monthBeforeYear:!0,previousMonth:"Previous month (PageUp)",nextMonth:"Next month (PageDown)",previousYear:"Last year (Control + left)",nextYear:"Next year (Control + right)",previousDecade:"Last decade",nextDecade:"Next decade",previousCentury:"Last century",nextCentury:"Next century"}},"./node_modules/rc-picker/es/locale/zh_CN.js":function(e,t,r){"use strict";t.a={locale:"zh_CN",today:"今天",now:"此刻",backToToday:"返回今天",ok:"确定",timeSelect:"选择时间",dateSelect:"选择日期",weekSelect:"选择周",clear:"清除",month:"月",year:"年",previousMonth:"上个月 (翻页上键)",nextMonth:"下个月 (翻页下键)",monthSelect:"选择月份",yearSelect:"选择年份",decadeSelect:"选择年代",yearFormat:"YYYY年",dayFormat:"D日",dateFormat:"YYYY年M月D日",dateTimeFormat:"YYYY年M月D日 HH时mm分ss秒",previousYear:"上一年 (Control键加左方向键)",nextYear:"下一年 (Control键加右方向键)",previousDecade:"上一年代",nextDecade:"下一年代",previousCentury:"上一世纪",nextCentury:"下一世纪"}},"./node_modules/redux-logger/dist/redux-logger.js":function(e,t,r){(function(e){!function(t){"use strict";function r(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function n(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function o(e,t,r){o.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function a(e,t){a.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function i(e,t){i.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function l(e,t,r){l.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function c(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function u(e){var t=void 0===e?"undefined":w(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function s(e,t,r,n,d,f,p){d=d||[],p=p||[];var h=d.slice(0);if(void 0!==f){if(n){if("function"==typeof n&&n(h,f))return;if("object"===(void 0===n?"undefined":w(n))){if(n.prefilter&&n.prefilter(h,f))return;if(n.normalize){var m=n.normalize(h,f,e,t);m&&(e=m[0],t=m[1])}}}h.push(f)}"regexp"===u(e)&&"regexp"===u(t)&&(e=e.toString(),t=t.toString());var b=void 0===e?"undefined":w(e),g=void 0===t?"undefined":w(t),v="undefined"!==b||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(f),y="undefined"!==g||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(f);if(!v&&y)r(new a(h,t));else if(!y&&v)r(new i(h,e));else if(u(e)!==u(t))r(new o(h,e,t));else if("date"===u(e)&&e-t!=0)r(new o(h,e,t));else if("object"===b&&null!==e&&null!==t)if(p.filter(function(t){return t.lhs===e}).length)e!==t&&r(new o(h,e,t));else{if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var x;for(e.length,x=0;x<e.length;x++)x>=t.length?r(new l(h,x,new i(void 0,e[x]))):s(e[x],t[x],r,n,h,x,p);for(;x<t.length;)r(new l(h,x,new a(void 0,t[x++])))}else{var j=Object.keys(e),_=Object.keys(t);j.forEach(function(o,a){var i=_.indexOf(o);i>=0?(s(e[o],t[o],r,n,h,o,p),_=c(_,i)):s(e[o],void 0,r,n,h,o,p)}),_.forEach(function(e){s(void 0,t[e],r,n,h,e,p)})}p.length=p.length-1}else e!==t&&("number"===b&&isNaN(e)&&isNaN(t)||r(new o(h,e,t)))}function d(e,t,r,n){return n=n||[],s(e,t,function(e){e&&n.push(e)},r),n.length?n:void 0}function f(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,a=r.path?r.path.length-1:0;++o<a;)void 0===n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":!function e(t,r,n){if(n.path&&n.path.length){var o,a=t[r],i=n.path.length-1;for(o=0;o<i;o++)a=a[n.path[o]];switch(n.kind){case"A":e(a[n.path[o]],n.index,n.item);break;case"D":delete a[n.path[o]];break;case"E":case"N":a[n.path[o]]=n.rhs}}else switch(n.kind){case"A":e(t[r],n.index,n.item);break;case"D":t=c(t,r);break;case"E":case"N":t[r]=n.rhs}return t}(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs}}}function p(e,t,r,n){var o=d(e,t);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}o?o.forEach(function(e){var t=e.kind,n=function(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,a=e.index,i=e.item;switch(t){case"E":return[r.join("."),n,"→",o];case"N":return[r.join("."),o];case"D":return[r.join(".")];case"A":return[r.join(".")+"["+a+"]",i];default:return[]}}(e);r.log.apply(r,["%c "+S[t].text,"color: "+S[t].color+"; font-weight: bold"].concat(j(n)))}):r.log("—— no diff ——");try{r.groupEnd()}catch(e){r.log("—— diff end —— ")}}function h(e,t,r,n){switch(void 0===e?"undefined":w(e)){case"object":return"function"==typeof e[n]?e[n].apply(e,j(r)):e[n];case"function":return e(t);default:return e}}function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},O,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,a=t.predicate,i=t.logErrors,l=t.diffPredicate;if(void 0===r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var c=[];return function(e){var r=e.getState;return function(e){return function(u){if("function"==typeof a&&!a(r,u))return e(u);var s={};c.push(s),s.started=x.now(),s.startedTime=new Date,s.prevState=n(r()),s.action=u;var d=void 0;if(i)try{d=e(u)}catch(e){s.error=o(e)}else d=e(u);s.took=x.now()-s.started,s.nextState=n(r());var f=t.diff&&"function"==typeof l?l(r,u):t.diff;if(function(e,t){var r=t.logger,n=t.actionTransformer,o=t.titleFormatter,a=void 0===o?function(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var a=["action"];return a.push("%c"+String(e.type)),t&&a.push("%c@ "+n),r&&a.push("%c(in "+o.toFixed(2)+" ms)"),a.join(" ")}}(t):o,i=t.collapsed,l=t.colors,c=t.level,u=t.diff,s=void 0===t.titleFormatter;e.forEach(function(o,d){var f=o.started,m=o.startedTime,b=o.action,g=o.prevState,v=o.error,x=o.took,w=o.nextState,j=e[d+1];j&&(w=j.prevState,x=j.started-f);var _=n(b),S="function"==typeof i?i(function(){return w},b,o):i,O=y(m),k=l.title?"color: "+l.title(_)+";":"",P=["color: gray; font-weight: lighter;"];P.push(k),t.timestamp&&P.push("color: gray; font-weight: lighter;"),t.duration&&P.push("color: gray; font-weight: lighter;");var E=a(_,O,x);try{S?l.title&&s?r.groupCollapsed.apply(r,["%c "+E].concat(P)):r.groupCollapsed(E):l.title&&s?r.group.apply(r,["%c "+E].concat(P)):r.group(E)}catch(e){r.log(E)}var A=h(c,_,[g],"prevState"),T=h(c,_,[_],"action"),$=h(c,_,[v,g],"error"),C=h(c,_,[w],"nextState");if(A)if(l.prevState){var N="color: "+l.prevState(g)+"; font-weight: bold";r[A]("%c prev state",N,g)}else r[A]("prev state",g);if(T)if(l.action){var D="color: "+l.action(_)+"; font-weight: bold";r[T]("%c action    ",D,_)}else r[T]("action    ",_);if(v&&$)if(l.error){var M="color: "+l.error(v,g)+"; font-weight: bold;";r[$]("%c error     ",M,v)}else r[$]("error     ",v);if(C)if(l.nextState){var I="color: "+l.nextState(w)+"; font-weight: bold";r[C]("%c next state",I,w)}else r[C]("next state",w);u&&p(g,w,r,S);try{r.groupEnd()}catch(e){r.log("—— log end ——")}})}(c,Object.assign({},t,{diff:f})),c.length=0,s.error)throw s.error;return d}}}}var b,g,v=function(e,t){return function(e,t){return new Array(t+1).join("0")}(0,t-e.toString().length)+e},y=function(e){return v(e.getHours(),2)+":"+v(e.getMinutes(),2)+":"+v(e.getSeconds(),2)+"."+v(e.getMilliseconds(),3)},x="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},_=[];b="object"===(void 0===e?"undefined":w(e))&&e?e:"undefined"!=typeof window?window:{},(g=b.DeepDiff)&&_.push(function(){void 0!==g&&b.DeepDiff===d&&(b.DeepDiff=g,g=void 0)}),r(o,n),r(a,n),r(i,n),r(l,n),Object.defineProperties(d,{diff:{value:d,enumerable:!0},observableDiff:{value:s,enumerable:!0},applyDiff:{value:function(e,t,r){e&&t&&s(e,t,function(n){r&&!r(e,t,n)||f(e,t,n)})},enumerable:!0},applyChange:{value:f,enumerable:!0},revertChange:{value:function(e,t,r){if(e&&t&&r&&r.kind){var n,o,a=e;for(o=r.path.length-1,n=0;n<o;n++)void 0===a[r.path[n]]&&(a[r.path[n]]={}),a=a[r.path[n]];switch(r.kind){case"A":!function e(t,r,n){if(n.path&&n.path.length){var o,a=t[r],i=n.path.length-1;for(o=0;o<i;o++)a=a[n.path[o]];switch(n.kind){case"A":e(a[n.path[o]],n.index,n.item);break;case"D":case"E":a[n.path[o]]=n.lhs;break;case"N":delete a[n.path[o]]}}else switch(n.kind){case"A":e(t[r],n.index,n.item);break;case"D":case"E":t[r]=n.lhs;break;case"N":t=c(t,r)}return t}(a[r.path[n]],r.index,r.item);break;case"D":case"E":a[r.path[n]]=r.lhs;break;case"N":delete a[r.path[n]]}}},enumerable:!0},isConflict:{value:function(){return void 0!==g},enumerable:!0},noConflict:{value:function(){return _&&(_.forEach(function(e){e()}),_=null),d},enumerable:!0}});var S={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},O={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return"function"==typeof t||"function"==typeof r?m()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};t.defaults=O,t.createLogger=m,t.logger=k,t.default=k,Object.defineProperty(t,"__esModule",{value:!0})}(t)}).call(this,r("./node_modules/webpack/buildin/global.js"))},"./node_modules/redux-thunk/lib/index.js":function(e,t,r){"use strict";function n(e){return function(t){var r=t.dispatch,n=t.getState;return function(t){return function(o){return"function"==typeof o?o(r,n,e):t(o)}}}}t.__esModule=!0;var o=n();o.withExtraArgument=n,t.default=o},"./node_modules/redux/es/index.js":function(e,t,r){"use strict";var n=r("./node_modules/lodash-es/_freeGlobal.js"),o="object"==typeof self&&self&&self.Object===Object&&self,a=(n.a||o||Function("return this")()).Symbol,i=Object.prototype,l=i.hasOwnProperty,c=i.toString,u=a?a.toStringTag:void 0,s=Object.prototype.toString,d=a?a.toStringTag:void 0,f=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":d&&d in Object(e)?function(e){var t=l.call(e,u),r=e[u];try{e[u]=void 0;var n=!0}catch(e){}var o=c.call(e);return n&&(t?e[u]=r:delete e[u]),o}(e):function(e){return s.call(e)}(e)},p=function(e,t){return function(r){return e(t(r))}}(Object.getPrototypeOf,Object),h=Function.prototype,m=Object.prototype,b=h.toString,g=m.hasOwnProperty,v=b.call(Object),y=function(e){if(!function(e){return null!=e&&"object"==typeof e}(e)||"[object Object]"!=f(e))return!1;var t=p(e);if(null===t)return!0;var r=g.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&b.call(r)==v},x=r("./node_modules/symbol-observable/es/index.js"),w={INIT:"@@redux/INIT"};function j(e,t,r){var n;if("function"==typeof t&&void 0===r&&(r=t,t=void 0),void 0!==r){if("function"!=typeof r)throw new Error("Expected the enhancer to be a function.");return r(j)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var o=e,a=t,i=[],l=i,c=!1;function u(){l===i&&(l=i.slice())}function s(){return a}function d(e){if("function"!=typeof e)throw new Error("Expected listener to be a function.");var t=!0;return u(),l.push(e),function(){if(t){t=!1,u();var r=l.indexOf(e);l.splice(r,1)}}}function f(e){if(!y(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(c)throw new Error("Reducers may not dispatch actions.");try{c=!0,a=o(a,e)}finally{c=!1}for(var t=i=l,r=0;r<t.length;r++)(0,t[r])();return e}return f({type:w.INIT}),(n={dispatch:f,subscribe:d,getState:s,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");o=e,f({type:w.INIT})}})[x.a]=function(){var e,t=d;return(e={subscribe:function(e){if("object"!=typeof e)throw new TypeError("Expected the observer to be an object.");function r(){e.next&&e.next(s())}return r(),{unsubscribe:t(r)}}})[x.a]=function(){return this},e},n}function _(e,t){var r=t&&t.type;return"Given action "+(r&&'"'+r.toString()+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function S(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++){var o=t[n];"function"==typeof e[o]&&(r[o]=e[o])}var a=Object.keys(r),i=void 0;try{!function(e){Object.keys(e).forEach(function(t){var r=e[t];if(void 0===r(void 0,{type:w.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===r(void 0,{type:"@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".")}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+w.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}(r)}catch(e){i=e}return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];if(i)throw i;for(var n=!1,o={},l=0;l<a.length;l++){var c=a[l],u=r[c],s=e[c],d=u(s,t);if(void 0===d){var f=_(c,t);throw new Error(f)}o[c]=d,n=n||d!==s}return n?o:e}}function O(e,t){return function(){return t(e.apply(void 0,arguments))}}function k(e,t){if("function"==typeof e)return O(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var r=Object.keys(e),n={},o=0;o<r.length;o++){var a=r[o],i=e[a];"function"==typeof i&&(n[a]=O(i,t))}return n}var P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};function E(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return function(r,n,o){var a,i=e(r,n,o),l=i.dispatch,c={getState:i.getState,dispatch:function(e){return l(e)}};return a=t.map(function(e){return e(c)}),l=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}.apply(void 0,a)(i.dispatch),P({},i,{dispatch:l})}}}r.d(t,"d",function(){return j}),r.d(t,"c",function(){return S}),r.d(t,"b",function(){return k}),r.d(t,"a",function(){return E})},"./node_modules/symbol-observable/es/index.js":function(e,t,r){"use strict";(function(e,n){var o,a=r("./node_modules/symbol-observable/es/ponyfill.js");o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:n;var i=Object(a.a)(o);t.a=i}).call(this,r("./node_modules/webpack/buildin/global.js"),r("./node_modules/webpack/buildin/harmony-module.js")(e))},"./node_modules/symbol-observable/es/ponyfill.js":function(e,t,r){"use strict";function n(e){var t,r=e.Symbol;return"function"==typeof r?r.observable?t=r.observable:(t=r("observable"),r.observable=t):t="@@observable",t}r.d(t,"a",function(){return n})},"./node_modules/webpack/buildin/global.js":function(e,t){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(r=window)}e.exports=r},"./node_modules/webpack/buildin/harmony-module.js":function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},"./src/ts/store.ts":function(e,t,r){"use strict";r.r(t);var n=r("./node_modules/redux/es/index.js"),o=r("./node_modules/redux-thunk/lib/index.js"),a=r.n(o),i=r("./node_modules/redux-logger/dist/redux-logger.js"),l=r("./src/ts/utils/index.ts"),c=r("./node_modules/antd/es/locale-provider/en_US.js"),u=r("./node_modules/antd/es/locale-provider/zh_CN.js"),s=function(){return(s=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},d=new Map([["antd",{enUs:c.a,zhCn:u.a}],["menuName_routerManage",{enUs:"Router Manage",zhCn:"路由管理"}],["ExTable_showTotal",{enUs:"Current: {start} - {end}    Total: {total}",zhCn:"当前显示 {start}-{end}，共 {total} 条记录"}]]),f=function(e){var t={};return d.forEach(function(r,n){"antd"==n?t=s(s({},t),r[e]):t[n]=r[e]}),t},p=window.getCurrentSystemKey&&window.getCurrentSystemKey(),h=localStorage.getItem(p+"-lang")||navigator.language||"en-US",m={locale:h,langs:"en"==h.split("-")[0]?f("enUs"):f("zhCn"),activeTab:"",userInfo:{},entryMenuData:[],sidebarMenuData:[],menuData:null,menuObj:{},userAuthList:[]},b={regionOpts:[{name:"测试服",id:"ohio"},{name:"爱尔兰",id:"ireland"},{name:"新加坡",id:"singarpore"},{name:"弗吉尼亚",id:"virginia"}],searchParams:{region:"ohio"},listData:[],listLoading:!1,modalShow:!1,modalInfo:{},modalConfirmLoading:!1},g=Object(n.c)({app:function(e,t){var r={};switch(t.type){case"APP_SET_MENU":r.menuData=t.data,r.menuObj=t.obj;break;case"APP_SET_USER_AUTHLIST":r.userAuthList=t.list;break;case"APP_SET_SIDEBAR_MENU":r.sidebarMenuData=t.data;break;case"APP_TAB_SWITCH":r.activeTab=t.key;break;case"APP_SET_USER_INFO":r.userInfo=t.info;break;default:return e||m}return Object(l.b)(r,e)},routerManage:function(e,t){var r={};switch(t.type){case"ROUTERMANAGE_SEARCHPARAMS":r.searchParams=t.data;break;case"ROUTERMANAGE_LISTDATA":r.listData=t.data;break;case"ROUTERMANAGE_LOADING":r.listLoading=t.loading;break;case"ROUTERMANAGE_MODAL_SHOW":r.modalShow=t.show;break;case"ROUTERMANAGE_MODAL_INFO":r.modalInfo=t.info;break;case"ROUTERMANAGE_MODAL_CONFIRM_LOADING":r.modalConfirmLoading=t.loading;break;default:return e||b}return Object(l.b)(r,e)}}),v=(Object(i.createLogger)(),Object(n.d)(g,Object(n.a)(a.a)));t.default=v},"./src/ts/utils/index.ts":function(e,t,r){"use strict";function n(e,t){for(var r in t)e.hasOwnProperty(r)||(e[r]=t[r]);return e}function o(e){switch(Object.prototype.toString.call(e)){case"[object Array]":return!(e&&e.length);case"[object Object]":return!(e&&"{}"!==JSON.stringify(e));case"[object Null]":case"[object Undefined]":case"[object Boolean]":return!0;default:return!1}}r.d(t,"b",function(){return n}),r.d(t,"a",function(){return o})}})});