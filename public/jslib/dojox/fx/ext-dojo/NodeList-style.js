//>>built
define("dojox/fx/ext-dojo/NodeList-style",["dojo/_base/lang","dojo/query","dojo/NodeList-fx","dojo/fx","../style"],function(g,a,h,e,f){a=a.NodeList;g.extend(a,{addClassFx:function(b,c){return e.combine(this.map(function(d){return f.addClass(d,b,c)}))},removeClassFx:function(b,c){return e.combine(this.map(function(d){return f.removeClass(d,b,c)}))},toggleClassFx:function(b,c,d){return e.combine(this.map(function(a){return f.toggleClass(a,b,c,d)}))}});return a});
//# sourceMappingURL=NodeList-style.js.map