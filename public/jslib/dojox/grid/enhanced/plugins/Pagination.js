//>>built
require({cache:{"url:dojox/grid/enhanced/templates/Pagination.html":'\x3cdiv dojoAttachPoint\x3d"paginatorBar"\n\t\x3e\x3ctable cellpadding\x3d"0" cellspacing\x3d"0"  class\x3d"dojoxGridPaginator"\n\t\t\x3e\x3ctr\n\t\t\t\x3e\x3ctd dojoAttachPoint\x3d"descriptionTd" class\x3d"dojoxGridDescriptionTd"\n\t\t\t\t\x3e\x3cdiv dojoAttachPoint\x3d"descriptionDiv" class\x3d"dojoxGridDescription"\x3e\x3c/div\n\t\t\t\x3e\x3c/div\x3e\x3c/td\n\t\t\t\x3e\x3ctd dojoAttachPoint\x3d"sizeSwitchTd"\x3e\x3c/td\n\t\t\t\x3e\x3ctd dojoAttachPoint\x3d"pageStepperTd" class\x3d"dojoxGridPaginatorFastStep"\n\t\t\t\t\x3e\x3cdiv dojoAttachPoint\x3d"pageStepperDiv" class\x3d"dojoxGridPaginatorStep"\x3e\x3c/div\n\t\t\t\x3e\x3c/td\n\t\t\t\x3e\x3ctd dojoAttachPoint\x3d"gotoPageTd" class\x3d"dojoxGridPaginatorGotoTd"\n\t\t\t\t\x3e\x3cdiv dojoAttachPoint\x3d"gotoPageDiv" class\x3d"dojoxGridPaginatorGotoDiv" dojoAttachEvent\x3d"onclick:_openGotopageDialog, onkeydown:_openGotopageDialog"\n\t\t\t\t\t\x3e\x3cspan class\x3d"dojoxGridWardButtonInner"\x3e\x26#8869;\x3c/span\n\t\t\t\t\x3e\x3c/div\n\t\t\t\x3e\x3c/td\n\t\t\x3e\x3c/tr\n\t\x3e\x3c/table\n\x3e\x3c/div\x3e\n'}});
define("dojox/grid/enhanced/plugins/Pagination","dojo/_base/kernel dojo/_base/declare dojo/_base/array dojo/_base/connect dojo/_base/lang dojo/_base/html dojo/_base/event dojo/query dojo/string dojo/keys dojo/text!../templates/Pagination.html ./Dialog ./_StoreLayer ../_Plugin ../../EnhancedGrid dijit/form/Button dijit/form/NumberTextBox dijit/focus dijit/_Widget dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojox/html/metrics dojo/i18n!../nls/Pagination".split(" "),function(m,k,n,K,d,e,z,t,
r,q,A,B,v,C,D,L,M,N,w,x,E,F,h){var G=k("dojox.grid.enhanced.plugins.pagination._GotoPagePane",[w,x,E],{templateString:"\x3cdiv\x3e\x3cdiv class\x3d'dojoxGridDialogMargin' dojoAttachPoint\x3d'_mainMsgNode'\x3e\x3c/div\x3e\x3cdiv class\x3d'dojoxGridDialogMargin'\x3e\x3cinput dojoType\x3d'dijit.form.NumberTextBox' style\x3d'width: 50px;' dojoAttachPoint\x3d'_pageInputBox' dojoAttachEvent\x3d'onKeyUp: _onKey'\x3e\x3c/input\x3e\x3clabel dojoAttachPoint\x3d'_pageLabelNode'\x3e\x3c/label\x3e\x3c/div\x3e\x3cdiv class\x3d'dojoxGridDialogButton'\x3e\x3cbutton dojoType\x3d'dijit.form.Button' dojoAttachPoint\x3d'_confirmBtn' dojoAttachEvent\x3d'onClick: _onConfirm'\x3e\x3c/button\x3e\x3cbutton dojoType\x3d'dijit.form.Button' dojoAttachPoint\x3d'_cancelBtn' dojoAttachEvent\x3d'onClick: _onCancel'\x3e\x3c/button\x3e\x3c/div\x3e\x3c/div\x3e",
widgetsInTemplate:!0,dlg:null,postMixInProperties:function(){this.plugin=this.dlg.plugin},postCreate:function(){this.inherited(arguments);this._mainMsgNode.innerHTML=this.plugin._nls[12];this._confirmBtn.set("label",this.plugin._nls[14]);this._confirmBtn.set("disabled",!0);this._cancelBtn.set("label",this.plugin._nls[15])},_onConfirm:function(a){this._pageInputBox.isValid()&&""!==this._pageInputBox.getDisplayedValue()&&(this.plugin.currentPage(this._pageInputBox.parse(this._pageInputBox.getDisplayedValue())),
this.dlg._gotoPageDialog.hide(),this._pageInputBox.reset());u(a)},_onCancel:function(a){this._pageInputBox.reset();this.dlg._gotoPageDialog.hide();u(a)},_onKey:function(a){this._confirmBtn.set("disabled",!this._pageInputBox.isValid()||""==this._pageInputBox.getDisplayedValue());a.altKey||a.metaKey||a.keyCode!==q.ENTER||this._onConfirm(a)}}),H=k("dojox.grid.enhanced.plugins.pagination._GotoPageDialog",null,{pageCount:0,dlgPane:null,constructor:function(a){this.plugin=a;this.dlgPane=new G({dlg:this});
this.dlgPane.startup();this._gotoPageDialog=new B({refNode:a.grid.domNode,title:this.plugin._nls[11],content:this.dlgPane});this._gotoPageDialog.startup()},_updatePageCount:function(){this.pageCount=this.plugin.getTotalPageNum();this.dlgPane._pageInputBox.constraints={fractional:!1,min:1,max:this.pageCount};this.dlgPane._pageLabelNode.innerHTML=r.substitute(this.plugin._nls[13],[this.pageCount])},showDialog:function(){this._updatePageCount();this._gotoPageDialog.show()},destroy:function(){this._gotoPageDialog.destroy()}}),
I=k("dojox.grid.enhanced.plugins._ForcedPageStoreLayer",v._StoreLayer,{tags:["presentation"],constructor:function(a){this._plugin=a},_fetch:function(a){var b=this,c=b._plugin,e=c.grid,g=a.scope||m.global,l=a.onBegin;a.start=(c._currentPage-1)*c._currentPageSize+a.start;b.startIdx=a.start;b.endIdx=a.start+c._currentPageSize-1;var p=c._paginator;c._showAll||(c._showAll=!p.sizeSwitch&&!p.pageStepper&&!p.gotoButton);l&&c._showAll?a.onBegin=function(a,e){c._maxSize=c._currentPageSize=a;b.startIdx=0;b.endIdx=
a-1;c._paginator._update();e.onBegin=l;e.onBegin.call(g,a,e)}:l&&(a.onBegin=function(a,f){f.start=0;f.count=c._currentPageSize;c._maxSize=a;b.endIdx=b.endIdx>=a?a-1:b.endIdx;b.startIdx>a&&0!==a&&(e._pending_requests[f.start]=!1,c.firstPage());c._paginator._update();f.onBegin=l;f.onBegin.call(g,Math.min(c._currentPageSize,a-b.startIdx),f)});return d.hitch(this._store,this._originFetch)(a)}}),u=function(a){try{a&&z.stop(a)}catch(b){}},J=k("dojox.grid.enhanced.plugins.pagination._Focus",null,{_focusedNode:null,
_isFocused:!1,constructor:function(a){this._pager=a;a.plugin.connect(a,"onSwitchPageSize",d.hitch(this,"_onActive"));a.plugin.connect(a,"onPageStep",d.hitch(this,"_onActive"));a.plugin.connect(a,"onShowGotoPageDialog",d.hitch(this,"_onActive"));a.plugin.connect(a,"_update",d.hitch(this,"_moveFocus"))},_onFocus:function(a,b){var c;if(!this._isFocused)c=this._focusedNode||t("[tabindex]",this._pager.domNode)[0];else if(b&&this._focusedNode)for(var e=0<b?-1:1,g=parseInt(this._focusedNode.getAttribute("tabindex"),
10)+e;-3<=g&&0>g&&!(c=t("[tabindex\x3d"+g+"]",this._pager.domNode)[0]);)g+=e;return this._focus(c,a)},_onBlur:function(a,b){if(!b||!this._focusedNode)return this._isFocused=!1,this._focusedNode&&e.hasClass(this._focusedNode,"dojoxGridButtonFocus")&&e.removeClass(this._focusedNode,"dojoxGridButtonFocus"),!0;for(var c,f=0<b?-1:1,g=parseInt(this._focusedNode.getAttribute("tabindex"),10)+f;-3<=g&&0>g&&!(c=t("[tabindex\x3d"+g+"]",this._pager.domNode)[0]);)g+=f;c||(this._isFocused=!1,e.hasClass(this._focusedNode,
"dojoxGridButtonFocus")&&e.removeClass(this._focusedNode,"dojoxGridButtonFocus"));return c?!1:!0},_onMove:function(a,b,c){if(this._focusedNode)for(a=this._focusedNode.getAttribute("tabindex"),b=1==b?"nextSibling":"previousSibling",c=this._focusedNode[b];c;){if(c.getAttribute("tabindex")==a){this._focus(c);break}c=c[b]}},_focus:function(a,b){return a?(this._isFocused=!0,m.isIE&&this._focusedNode&&e.removeClass(this._focusedNode,"dojoxGridButtonFocus"),this._focusedNode=a,a.focus(),m.isIE&&e.addClass(a,
"dojoxGridButtonFocus"),u(b),!0):!1},_onActive:function(a){this._focusedNode=a.target;this._isFocused||this._pager.plugin.grid.focus.focusArea("pagination"+this._pager.position)},_moveFocus:function(){if(this._focusedNode&&!this._focusedNode.getAttribute("tabindex")){for(var a=this._focusedNode.nextSibling;a;){if(a.getAttribute("tabindex")){this._focus(a);return}a=a.nextSibling}for(a=this._focusedNode.previousSibling;a;){if(a.getAttribute("tabindex")){this._focus(a);return}a=a.previousSibling}this._focusedNode=
null;this._onBlur()}else m.isIE&&this._focusedNode&&e.addClass(this._focusedNode,"dojoxGridButtonFocus")}}),y=k("dojox.grid.enhanced.plugins._Paginator",[w,x],{templateString:A,constructor:function(a){d.mixin(this,a);this.grid=this.plugin.grid},postCreate:function(){this.inherited(arguments);var a=this,b=this.grid;this.plugin.connect(b,"_resize",d.hitch(this,"_resetGridHeight"));this._originalResize=b.resize;b.resize=function(c,e){a._changeSize=c;a._resultSize=e;a._originalResize.apply(b,arguments)};
this.focus=J(this);this._placeSelf()},destroy:function(){this.inherited(arguments);this.grid.focus.removeArea("pagination"+this.position);this._gotoPageDialog&&this._gotoPageDialog.destroy();this.grid.resize=this._originalResize},onSwitchPageSize:function(a){},onPageStep:function(a){},onShowGotoPageDialog:function(a){},_update:function(){this._updateDescription();this._updatePageStepper();this._updateSizeSwitch();this._updateGotoButton()},_registerFocus:function(a){var b=this.grid.focus,c="pagination"+
this.position;b.addArea({name:c,onFocus:d.hitch(this.focus,"_onFocus"),onBlur:d.hitch(this.focus,"_onBlur"),onMove:d.hitch(this.focus,"_onMove")});b.placeArea(c,a?"before":"after",a?"header":"content")},_placeSelf:function(){var a=this.grid,b="top"==this.position;this.placeAt(b?a.viewsHeaderNode:a.viewsNode,b?"before":"after");this._registerFocus(b)},_resetGridHeight:function(a,b){var c=this.grid;a=a||this._changeSize;b=b||this._resultSize;delete this._changeSize;delete this._resultSize;if(!c._autoHeight){var f=
c._getPadBorder().h;this.plugin.gh||(this.plugin.gh=(c.domNode.clientHeight||e.style(c.domNode,"height"))+2*f);b&&(a=b);a&&(this.plugin.gh=e.contentBox(c.domNode).h+2*f);var g=this.plugin.gh,d=c._getHeaderHeight(),p=e.marginBox(this.domNode).h;if("number"===typeof c.autoHeight)f=g+p-f,e.style(c.domNode,"height",f+"px"),e.style(c.viewsNode,"height",f-p-d+"px"),this._styleMsgNode(d,e.marginBox(c.viewsNode).w,f-p-d);else{var h=g-p-d-f;e.style(c.viewsNode,"height",h+"px");var k=n.some(c.views.views,function(a){return a.hasHScrollbar()});
n.forEach(c.viewsNode.childNodes,function(a){e.style(a,"height",h+"px")});n.forEach(c.views.views,function(a){a.scrollboxNode&&(!a.hasHScrollbar()&&k?e.style(a.scrollboxNode,"height",h-F.getScrollbar().h+"px"):e.style(a.scrollboxNode,"height",h+"px"))});this._styleMsgNode(d,e.marginBox(c.viewsNode).w,h)}}},_styleMsgNode:function(a,b,c){e.style(this.grid.messagesNode,{position:"absolute",top:a+"px",width:b+"px",height:c+"px","z-Index":"100"})},_updateDescription:function(){var a=this.plugin.forcePageStoreLayer,
b=this.plugin._maxSize,c=this.plugin._nls;this.description&&this.descriptionDiv&&(this.descriptionDiv.innerHTML=0<b?r.substitute(c[0],[0>=b||1==b?c[5]:c[4],b,a.startIdx+1,a.endIdx+1]):"0 "+(0>=b||1==b?c[5]:c[4]))},_updateSizeSwitch:function(){e.style(this.sizeSwitchTd,"display",this.sizeSwitch?"":"none");this.sizeSwitch&&(1>this.sizeSwitchTd.childNodes.length&&this._createSizeSwitchNodes(),this._updateSwitchNodesStyle())},_createSizeSwitchNodes:function(){var a=null,b=this.plugin._nls,c=d.hitch(this.plugin,
"connect");n.forEach(this.pageSizes,function(f){var g=isFinite(f)?r.substitute(b[2],[f]):b[1],l=isFinite(f)?f:b[16];a=e.create("span",{innerHTML:l,title:g,value:f,tabindex:"-1"},this.sizeSwitchTd,"last");a.setAttribute("aria-label",g);c(a,"onclick",d.hitch(this,"_onSwitchPageSize"));c(a,"onkeydown",d.hitch(this,"_onSwitchPageSize"));c(a,"onmouseover",function(a){e.addClass(a.target,"dojoxGridPageTextHover")});c(a,"onmouseout",function(a){e.removeClass(a.target,"dojoxGridPageTextHover")});a=e.create("span",
{innerHTML:"|"},this.sizeSwitchTd,"last");e.addClass(a,"dojoxGridSeparator")},this);e.destroy(a)},_updateSwitchNodesStyle:function(){var a=null,b=function(a,b){b?(e.addClass(a,"dojoxGridActivedSwitch"),e.removeAttr(a,"tabindex")):(e.addClass(a,"dojoxGridInactiveSwitch"),a.setAttribute("tabindex","-1"))};n.forEach(this.sizeSwitchTd.childNodes,function(c){c.value&&(e.removeClass(c),a=c.value,this.plugin._showAll?b(c,isNaN(parseInt(a,10))):b(c,this.plugin._currentPageSize==a))},this)},_updatePageStepper:function(){e.style(this.pageStepperTd,
"display",this.pageStepper?"":"none");this.pageStepper&&(1>this.pageStepperDiv.childNodes.length?(this._createPageStepNodes(),this._createWardBtns()):this._resetPageStepNodes(),this._updatePageStepNodesStyle())},_createPageStepNodes:function(){for(var a=this._getStartPage(),b=this._getStepPageSize(),c="",f=null,g=a,l=d.hitch(this.plugin,"connect");g<a+this.maxPageStep+1;g++)c=r.substitute(this.plugin._nls[3],[g]),f=e.create("div",{innerHTML:g,value:g,title:c},this.pageStepperDiv,"last"),f.setAttribute("aria-label",
c),l(f,"onclick",d.hitch(this,"_onPageStep")),l(f,"onkeydown",d.hitch(this,"_onPageStep")),l(f,"onmouseover",function(a){e.addClass(a.target,"dojoxGridPageTextHover")}),l(f,"onmouseout",function(a){e.removeClass(a.target,"dojoxGridPageTextHover")}),e.style(f,"display",g<a+b?"":"none")},_createWardBtns:function(){var a=this,b=this.plugin._nls,c={prevPage:"\x26#60;",firstPage:"\x26#171;",nextPage:"\x26#62;",lastPage:"\x26#187;"},f=function(b,f,h){var g=e.create("div",{value:b,title:f,tabindex:"-2"},
a.pageStepperDiv,h);a.plugin.connect(g,"onclick",d.hitch(a,"_onPageStep"));a.plugin.connect(g,"onkeydown",d.hitch(a,"_onPageStep"));g.setAttribute("aria-label",f);b=e.create("span",{value:b,title:f,innerHTML:c[b]},g,h);e.addClass(b,"dojoxGridWardButtonInner")};f("prevPage",b[6],"first");f("firstPage",b[7],"first");f("nextPage",b[8],"last");f("lastPage",b[9],"last")},_resetPageStepNodes:function(){for(var a=this._getStartPage(),b=this._getStepPageSize(),c=this.pageStepperDiv.childNodes,f=null,g=a,
d=2,h;d<c.length-2;d++,g++)f=c[d],g<a+b?(h=r.substitute(this.plugin._nls[3],[g]),e.attr(f,{innerHTML:g,title:h,value:g}),e.style(f,"display",""),f.setAttribute("aria-label",h)):e.style(f,"display","none")},_updatePageStepNodesStyle:function(){var a=null,b=this.plugin.currentPage(),c=this.plugin.getTotalPageNum(),f=function(a,b,c){var f=a.value,d=b?"dojoxGrid"+f+"Btn":"dojoxGridInactived";b=b?"dojoxGrid"+f+"BtnDisable":"dojoxGridActived";c?(e.addClass(a,b),e.removeAttr(a,"tabindex")):(e.addClass(a,
d),a.setAttribute("tabindex","-2"))};n.forEach(this.pageStepperDiv.childNodes,function(d){e.removeClass(d);isNaN(parseInt(d.value,10))?(e.addClass(d,"dojoxGridWardButton"),f(d,!0,b===("prevPage"==d.value||"firstPage"==d.value?1:c))):(a=parseInt(d.value,10),f(d,!1,a===b||"none"===e.style(d,"display")))},this)},_showGotoButton:function(a){this.gotoButton=a;this._updateGotoButton()},_updateGotoButton:function(){this.gotoButton?("none"==e.style(this.gotoPageTd,"display")&&e.style(this.gotoPageTd,"display",
""),this.gotoPageDiv.setAttribute("title",this.plugin._nls[10]),e.toggleClass(this.gotoPageDiv,"dojoxGridPaginatorGotoDivDisabled",1>=this.plugin.getTotalPageNum()),1>=this.plugin.getTotalPageNum()?e.removeAttr(this.gotoPageDiv,"tabindex"):this.gotoPageDiv.setAttribute("tabindex","-3")):(this._gotoPageDialog&&this._gotoPageDialog.destroy(),e.removeAttr(this.gotoPageDiv,"tabindex"),e.style(this.gotoPageTd,"display","none"))},_openGotopageDialog:function(a){1>=this.plugin.getTotalPageNum()||"keydown"===
a.type&&a.keyCode!==q.ENTER&&a.keyCode!==q.SPACE||(this._gotoPageDialog||(this._gotoPageDialog=new H(this.plugin)),this._gotoPageDialog.showDialog(),this.onShowGotoPageDialog(a))},_onSwitchPageSize:function(a){if("keydown"!==a.type||a.keyCode===q.ENTER||a.keyCode===q.SPACE)this.onSwitchPageSize(a),this.plugin.currentPageSize(a.target.value)},_onPageStep:function(a){if("keydown"!==a.type||a.keyCode===q.ENTER||a.keyCode===q.SPACE){var b=this.plugin,c=a.target.value;this.onPageStep(a);if(isNaN(parseInt(c,
10)))b[c]();else b.currentPage(parseInt(c,10))}},_getStartPage:function(){var a=this.plugin.currentPage(),b=this.maxPageStep,c=parseInt(b/2,10),d=this.plugin.getTotalPageNum();return a<c||1>a-c||d<=b?1:d-a<c&&0<=a-b?d-b+1:a-c},_getStepPageSize:function(){var a=this._getStartPage(),b=this.plugin.getTotalPageNum(),c=this.maxPageStep;return a+c>b?b-a+1:c}});k=k("dojox.grid.enhanced.plugins.Pagination",C,{name:"pagination",defaultPageSize:25,defaultPage:1,description:!0,sizeSwitch:!0,pageStepper:!0,gotoButton:!1,
pageSizes:[10,25,50,100,Infinity],maxPageStep:7,position:"bottom",init:function(){var a=this.grid;a.usingPagination=!0;this._initOptions();this._currentPage=this.defaultPage;this._currentPageSize=this.grid.rowsPerPage=this.defaultPageSize;this._store=a.store;this.forcePageStoreLayer=new I(this);v.wrap(a,"_storeLayerFetch",this.forcePageStoreLayer);this._paginator="top"!=this.option.position?new y(d.mixin(this.option,{position:"bottom",plugin:this})):new y(d.mixin(this.option,{position:"top",plugin:this}));
this._regApis()},destroy:function(){this.inherited(arguments);this._paginator.destroy();var a=this.grid;a.unwrap(this.forcePageStoreLayer.name());a.scrollToRow=this._gridOriginalfuncs[0];a._onNew=this._gridOriginalfuncs[1];a.removeSelectedRows=this._gridOriginalfuncs[2];this._nls=this._paginator=null},currentPage:function(a){a<=this.getTotalPageNum()&&0<a&&this._currentPage!==a&&(this._currentPage=a,this.grid._refresh(!0),this.grid.resize());return this._currentPage},nextPage:function(){this.currentPage(this._currentPage+
1)},prevPage:function(){this.currentPage(this._currentPage-1)},firstPage:function(){this.currentPage(1)},lastPage:function(){this.currentPage(this.getTotalPageNum())},currentPageSize:function(a){if(!isNaN(a)){var b=this.grid,c=this._currentPageSize*(this._currentPage-1);this._showAll=!isFinite(a);this.grid.usingPagination=!this._showAll;this._currentPageSize=this._showAll?this._maxSize:a;b.rowsPerPage=this._showAll?this._defaultRowsPerPage:a;c+Math.min(this._currentPageSize,this._maxSize)>this._maxSize?
this.lastPage():(a=Math.ceil(c/this._currentPageSize)+1,a!==this._currentPage?this.currentPage(a):this.grid._refresh(!0));this.grid.resize()}return this._currentPageSize},getTotalPageNum:function(){return Math.ceil(this._maxSize/this._currentPageSize)},getTotalRowCount:function(){return this._maxSize},scrollToRow:function(a){var b=parseInt(a/this._currentPageSize,10)+1;if(!(b>this.getTotalPageNum()))return this.currentPage(b),this._gridOriginalfuncs[0](a%this._currentPageSize)},removeSelectedRows:function(){this._multiRemoving=
!0;this._gridOriginalfuncs[2].apply();this._multiRemoving=!1;this.grid.store.save&&this.grid.store.save();this.grid.resize();this.grid._refresh()},showGotoPageButton:function(a){this._paginator.gotoButton=a;this._paginator._updateGotoButton()},gotoPage:function(a){m.deprecated("dojox.grid.enhanced.EnhancedGrid.gotoPage(page)","use dojox.grid.enhanced.EnhancedGrid.currentPage(page) instead","1.8");this.currentPage(a)},gotoFirstPage:function(){m.deprecated("dojox.grid.enhanced.EnhancedGrid.gotoFirstPage()",
"use dojox.grid.enhanced.EnhancedGrid.firstPage() instead","1.8");this.firstPage()},gotoLastPage:function(){m.deprecated("dojox.grid.enhanced.EnhancedGrid.gotoLastPage()","use dojox.grid.enhanced.EnhancedGrid.lastPage() instead","1.8");this.lastPage()},changePageSize:function(a){m.deprecated("dojox.grid.enhanced.EnhancedGrid.changePageSize(size)","use dojox.grid.enhanced.EnhancedGrid.currentPageSize(size) instead","1.8");this.currentPageSize(a)},_nls:null,_showAll:!1,_maxSize:0,_defaultRowsPerPage:25,
_currentPage:1,_currentPageSize:25,_initOptions:function(){this._defaultRowsPerPage=this.grid.rowsPerPage||25;this.defaultPage=1<=this.option.defaultPage?parseInt(this.option.defaultPage,10):1;this.option.description=void 0!==this.option.description?!!this.option.description:this.description;this.option.sizeSwitch=void 0!==this.option.sizeSwitch?!!this.option.sizeSwitch:this.sizeSwitch;this.option.pageStepper=void 0!==this.option.pageStepper?!!this.option.pageStepper:this.pageStepper;this.option.gotoButton=
void 0!==this.option.gotoButton?!!this.option.gotoButton:this.gotoButton;if(d.isArray(this.option.pageSizes)){var a=[];n.forEach(this.option.pageSizes,function(b){b="number"==typeof b?b:parseInt(b,10);!isNaN(b)&&0<b?a.push(b):0>n.indexOf(a,Infinity)&&a.push(Infinity)},this);this.option.pageSizes=a.sort(function(a,c){return a-c})}else this.option.pageSizes=this.pageSizes;this.defaultPageSize=1<=this.option.defaultPageSize?parseInt(this.option.defaultPageSize,10):this.option.pageSizes[0];this.option.maxPageStep=
0<this.option.maxPageStep?this.option.maxPageStep:this.maxPageStep;this.option.position=d.isString(this.option.position)?this.option.position.toLowerCase():this.position;this._nls=[h.descTemplate,h.allItemsLabelTemplate,h.pageSizeLabelTemplate,h.pageStepLabelTemplate,h.itemTitle,h.singularItemTitle,h.prevTip,h.firstTip,h.nextTip,h.lastTip,h.gotoButtonTitle,h.dialogTitle,h.dialogIndication,h.pageCountIndication,h.dialogConfirm,h.dialogCancel,h.all]},_regApis:function(){var a=this.grid;a.currentPage=
d.hitch(this,this.currentPage);a.nextPage=d.hitch(this,this.nextPage);a.prevPage=d.hitch(this,this.prevPage);a.firstPage=d.hitch(this,this.firstPage);a.lastPage=d.hitch(this,this.lastPage);a.currentPageSize=d.hitch(this,this.currentPageSize);a.showGotoPageButton=d.hitch(this,this.showGotoPageButton);a.getTotalRowCount=d.hitch(this,this.getTotalRowCount);a.getTotalPageNum=d.hitch(this,this.getTotalPageNum);a.gotoPage=d.hitch(this,this.gotoPage);a.gotoFirstPage=d.hitch(this,this.gotoFirstPage);a.gotoLastPage=
d.hitch(this,this.gotoLastPage);a.changePageSize=d.hitch(this,this.changePageSize);this._gridOriginalfuncs=[d.hitch(a,a.scrollToRow),d.hitch(a,a._onNew),d.hitch(a,a.removeSelectedRows)];a.scrollToRow=d.hitch(this,this.scrollToRow);a.removeSelectedRows=d.hitch(this,this.removeSelectedRows);a._onNew=d.hitch(this,this._onNew);this.connect(a,"_onDelete",d.hitch(this,this._onDelete))},_onNew:function(a,b){var c=this.getTotalPageNum();if((this._currentPage===c||0===c)&&this.grid.get("rowCount")<this._currentPageSize||
this._showAll)d.hitch(this.grid,this._gridOriginalfuncs[1])(a,b),this.forcePageStoreLayer.endIdx++;this._maxSize++;this._showAll&&this._currentPageSize++;this._showAll&&this.grid.autoHeight?this.grid._refresh():this._paginator._update()},_onDelete:function(){this._multiRemoving||(this.grid.resize(),this._showAll&&this.grid._refresh());0===this.grid.get("rowCount")&&this.prevPage()}});D.registerPlugin(k);return k});
//# sourceMappingURL=Pagination.js.map