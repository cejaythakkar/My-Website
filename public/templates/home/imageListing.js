function pug_attr(t,e,n,f){return!1!==e&&null!=e&&(e||"class"!==t&&"style"!==t)?!0===e?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function imagelistingTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"views\u002Fclient\u002Fhome\u002FimageListing.pug":"ul.home-page-image-list\r\n        each image in images\r\n            li.list-item.row\r\n                div.image-container\r\n                    img(src=image.imageUrl, alt=\"\",onerror=\"this.src='images\u002Fno-image.png'\")\r\n                    .description-container.d-flex.flex-grow-1.align-items-center.justify-content-center\r\n                        span #{image.short_description}\r\n                        .delete-button-container\r\n                            a(href=\"#\")\r\n                                i.fa.fa-trash-o"};
;var locals_for_with = (locals || {});(function (images) {;pug_debug_line = 1;pug_debug_filename = "views\u002Fclient\u002Fhome\u002FimageListing.pug";
pug_html = pug_html + "\u003Cul class=\"home-page-image-list\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\u002Fclient\u002Fhome\u002FimageListing.pug";
// iterate images
;(function(){
  var $$obj = images;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var image = $$obj[pug_index0];
;pug_debug_line = 3;pug_debug_filename = "views\u002Fclient\u002Fhome\u002FimageListing.pug";
pug_html = pug_html + "\u003Cli class=\"list-item row\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\u002Fclient\u002Fhome\u002FimageListing.pug";
pug_html = pug_html + "\u003Cdiv class=\"image-container\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\u002Fclient\u002Fhome\u002FimageListing.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attr("src", image.imageUrl, true, false)+" alt=\"\" onerror=\"this.src='images\u002Fno-image.png'\"") + "\u002F\u003E";
;pug_debug_line = 6;pug_debug_filename = "views\u002Fclient\u002Fhome\u002FimageListing.pug";
pug_html = pug_html + "\u003Cdiv class=\"description-container d-flex flex-grow-1 align-items-center justify-content-center\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\u002Fclient\u002Fhome\u002FimageListing.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\u002Fclient\u002Fhome\u002FimageListing.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = image.short_description) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\u002Fclient\u002Fhome\u002FimageListing.pug";
pug_html = pug_html + "\u003Cdiv class=\"delete-button-container\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "views\u002Fclient\u002Fhome\u002FimageListing.pug";
pug_html = pug_html + "\u003Ca href=\"#\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002Fclient\u002Fhome\u002FimageListing.pug";
pug_html = pug_html + "\u003Ci class=\"fa fa-trash-o\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var image = $$obj[pug_index0];
;pug_debug_line = 3;pug_debug_filename = "views\u002Fclient\u002Fhome\u002FimageListing.pug";
pug_html = pug_html + "\u003Cli class=\"list-item row\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\u002Fclient\u002Fhome\u002FimageListing.pug";
pug_html = pug_html + "\u003Cdiv class=\"image-container\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\u002Fclient\u002Fhome\u002FimageListing.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attr("src", image.imageUrl, true, false)+" alt=\"\" onerror=\"this.src='images\u002Fno-image.png'\"") + "\u002F\u003E";
;pug_debug_line = 6;pug_debug_filename = "views\u002Fclient\u002Fhome\u002FimageListing.pug";
pug_html = pug_html + "\u003Cdiv class=\"description-container d-flex flex-grow-1 align-items-center justify-content-center\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\u002Fclient\u002Fhome\u002FimageListing.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\u002Fclient\u002Fhome\u002FimageListing.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = image.short_description) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\u002Fclient\u002Fhome\u002FimageListing.pug";
pug_html = pug_html + "\u003Cdiv class=\"delete-button-container\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "views\u002Fclient\u002Fhome\u002FimageListing.pug";
pug_html = pug_html + "\u003Ca href=\"#\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002Fclient\u002Fhome\u002FimageListing.pug";
pug_html = pug_html + "\u003Ci class=\"fa fa-trash-o\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E";}.call(this,"images" in locals_for_with?locals_for_with.images:typeof images!=="undefined"?images:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}