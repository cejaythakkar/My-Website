function pug_attr(t,e,n,f){return!1!==e&&null!=e&&(e||"class"!==t&&"style"!==t)?!0===e?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function errorTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"views\\client\\error.pug":"-var className\r\ncase errorType\r\n    when \"danger\"\r\n        -className=\"danger\"\r\n    when \"info\"\r\n        -className=\"info\"\r\n    when \"success\"\r\n        -className=\"success\"\r\n    when \"warning\"\r\n        -className=\"warning\"\r\n    default\r\n        -className=\"\"\r\np#error-message(class=className) #{message}\r\n    a(onclick=\"UsersModule.errorCloseHandler(event)\")\r\n        i.fa.fa-close(click=\"UsersModule.errorCloseHandler(event)\")"};
;var locals_for_with = (locals || {});(function (errorType, message) {;pug_debug_line = 1;pug_debug_filename = "views\\client\\error.pug";
var className
;pug_debug_line = 2;pug_debug_filename = "views\\client\\error.pug";
switch (errorType){
case "danger":
;pug_debug_line = 4;pug_debug_filename = "views\\client\\error.pug";
className="danger"
  break;
case "info":
;pug_debug_line = 6;pug_debug_filename = "views\\client\\error.pug";
className="info"
  break;
case "success":
;pug_debug_line = 8;pug_debug_filename = "views\\client\\error.pug";
className="success"
  break;
case "warning":
;pug_debug_line = 10;pug_debug_filename = "views\\client\\error.pug";
className="warning"
  break;
default:
;pug_debug_line = 12;pug_debug_filename = "views\\client\\error.pug";
className=""
  break;
}
;pug_debug_line = 13;pug_debug_filename = "views\\client\\error.pug";
pug_html = pug_html + "\u003Cp" + (pug_attr("class", pug_classes([className], [true]), false, false)+" id=\"error-message\"") + "\u003E";
;pug_debug_line = 13;pug_debug_filename = "views\\client\\error.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = message) ? "" : pug_interp));
;pug_debug_line = 14;pug_debug_filename = "views\\client\\error.pug";
pug_html = pug_html + "\u003Ca onclick=\"UsersModule.errorCloseHandler(event)\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "views\\client\\error.pug";
pug_html = pug_html + "\u003Ci class=\"fa fa-close\" click=\"UsersModule.errorCloseHandler(event)\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E";}.call(this,"errorType" in locals_for_with?locals_for_with.errorType:typeof errorType!=="undefined"?errorType:undefined,"message" in locals_for_with?locals_for_with.message:typeof message!=="undefined"?message:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}