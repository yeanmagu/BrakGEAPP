(function(g,j){var k=0,i=/^ui-id-\d+$/;
g.ui=g.ui||{};
g.extend(g.ui,{version:"1.10.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});
g.fn.extend({focus:(function(a){return function(b,c){return typeof b==="number"?this.each(function(){var d=this;
setTimeout(function(){g(d).focus();
if(c){c.call(d)
}},b)
}):a.apply(this,arguments)
}
})(g.fn.focus),scrollParent:function(){var a;
if((g.ui.ie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){a=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(g.css(this,"position"))&&(/(auto|scroll)/).test(g.css(this,"overflow")+g.css(this,"overflow-y")+g.css(this,"overflow-x"))
}).eq(0)
}else{a=this.parents().filter(function(){return(/(auto|scroll)/).test(g.css(this,"overflow")+g.css(this,"overflow-y")+g.css(this,"overflow-x"))
}).eq(0)
}return(/fixed/).test(this.css("position"))||!a.length?g(document):a
},zIndex:function(d){if(d!==j){return this.css("zIndex",d)
}if(this.length){var a=g(this[0]),b,c;
while(a.length&&a[0]!==document){b=a.css("position");
if(b==="absolute"||b==="relative"||b==="fixed"){c=parseInt(a.css("zIndex"),10);
if(!isNaN(c)&&c!==0){return c
}}a=a.parent()
}}return 0
},uniqueId:function(){return this.each(function(){if(!this.id){this.id="ui-id-"+(++k)
}})
},removeUniqueId:function(){return this.each(function(){if(i.test(this.id)){g(this).removeAttr("id")
}})
}});
function h(a,c){var d,e,b,f=a.nodeName.toLowerCase();
if("area"===f){d=a.parentNode;
e=d.name;
if(!a.href||!e||d.nodeName.toLowerCase()!=="map"){return false
}b=g("img[usemap=#"+e+"]")[0];
return !!b&&l(b)
}return(/input|select|textarea|button|object/.test(f)?!a.disabled:"a"===f?a.href||c:c)&&l(a)
}function l(a){return g.expr.filters.visible(a)&&!g(a).parents().addBack().filter(function(){return g.css(this,"visibility")==="hidden"
}).length
}g.extend(g.expr[":"],{data:g.expr.createPseudo?g.expr.createPseudo(function(a){return function(b){return !!g.data(b,a)
}
}):function(a,b,c){return !!g.data(a,c[3])
},focusable:function(a){return h(a,!isNaN(g.attr(a,"tabindex")))
},tabbable:function(a){var c=g.attr(a,"tabindex"),b=isNaN(c);
return(b||c>=0)&&h(a,!b)
}});
if(!g("<a>").outerWidth(1).jquery){g.each(["Width","Height"],function(a,b){var e=b==="Width"?["Left","Right"]:["Top","Bottom"],f=b.toLowerCase(),c={innerWidth:g.fn.innerWidth,innerHeight:g.fn.innerHeight,outerWidth:g.fn.outerWidth,outerHeight:g.fn.outerHeight};
function d(q,s,m,r){g.each(e,function(){s-=parseFloat(g.css(q,"padding"+this))||0;
if(m){s-=parseFloat(g.css(q,"border"+this+"Width"))||0
}if(r){s-=parseFloat(g.css(q,"margin"+this))||0
}});
return s
}g.fn["inner"+b]=function(m){if(m===j){return c["inner"+b].call(this)
}return this.each(function(){g(this).css(f,d(this,m)+"px")
})
};
g.fn["outer"+b]=function(o,m){if(typeof o!=="number"){return c["outer"+b].call(this,o)
}return this.each(function(){g(this).css(f,d(this,o,true,m)+"px")
})
}
})
}if(!g.fn.addBack){g.fn.addBack=function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))
}
}if(g("<a>").data("a-b","a").removeData("a-b").data("a-b")){g.fn.removeData=(function(a){return function(b){if(arguments.length){return a.call(this,g.camelCase(b))
}else{return a.call(this)
}}
})(g.fn.removeData)
}g.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
g.support.selectstart="onselectstart" in document.createElement("div");
g.fn.extend({disableSelection:function(){return this.bind((g.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()
})
},enableSelection:function(){return this.unbind(".ui-disableSelection")
}});
g.extend(g.ui,{plugin:{add:function(b,c,e){var a,d=g.ui[b].prototype;
for(a in e){d.plugins[a]=d.plugins[a]||[];
d.plugins[a].push([c,e[a]])
}},call:function(c,d,a){var b,e=c.plugins[d];
if(!e||!c.element[0].parentNode||c.element[0].parentNode.nodeType===11){return
}for(b=0;
b<e.length;
b++){if(c.options[e[b][0]]){e[b][1].apply(c.element,a)
}}}},hasScroll:function(b,a){if(g(b).css("overflow")==="hidden"){return false
}var d=(a&&a==="left")?"scrollLeft":"scrollTop",c=false;
if(b[d]>0){return true
}b[d]=1;
c=(b[d]>0);
b[d]=0;
return c
}})
})(jQuery);
(function(f,i){var j=0,h=Array.prototype.slice,g=f.cleanData;
f.cleanData=function(c){for(var d=0,b;
(b=c[d])!=null;
d++){try{f(b).triggerHandler("remove")
}catch(a){}}g(c)
};
f.widget=function(o,a,q){var e,d,c,b,r={},p=o.split(".")[0];
o=o.split(".")[1];
e=p+"-"+o;
if(!q){q=a;
a=f.Widget
}f.expr[":"][e.toLowerCase()]=function(k){return !!f.data(k,e)
};
f[p]=f[p]||{};
d=f[p][o];
c=f[p][o]=function(l,k){if(!this._createWidget){return new c(l,k)
}if(arguments.length){this._createWidget(l,k)
}};
f.extend(c,d,{version:q.version,_proto:f.extend({},q),_childConstructors:[]});
b=new a();
b.options=f.widget.extend({},b.options);
f.each(q,function(k,l){if(!f.isFunction(l)){r[k]=l;
return
}r[k]=(function(){var m=function(){return a.prototype[k].apply(this,arguments)
},n=function(t){return a.prototype[k].apply(this,t)
};
return function(){var v=this._super,w=this._superApply,x;
this._super=m;
this._superApply=n;
x=l.apply(this,arguments);
this._super=v;
this._superApply=w;
return x
}
})()
});
c.prototype=f.widget.extend(b,{widgetEventPrefix:d?(b.widgetEventPrefix||o):o},r,{constructor:c,namespace:p,widgetName:o,widgetFullName:e});
if(d){f.each(d._childConstructors,function(m,k){var l=k.prototype;
f.widget(l.namespace+"."+l.widgetName,c,k._proto)
});
delete d._childConstructors
}else{a._childConstructors.push(c)
}f.widget.bridge(o,c)
};
f.widget.extend=function(e){var a=h.call(arguments,1),b=0,c=a.length,d,l;
for(;
b<c;
b++){for(d in a[b]){l=a[b][d];
if(a[b].hasOwnProperty(d)&&l!==i){if(f.isPlainObject(l)){e[d]=f.isPlainObject(e[d])?f.widget.extend({},e[d],l):f.widget.extend({},l)
}else{e[d]=l
}}}}return e
};
f.widget.bridge=function(b,c){var a=c.prototype.widgetFullName||b;
f.fn[b]=function(m){var e=typeof m==="string",d=h.call(arguments,1),n=this;
m=!e&&d.length?f.widget.extend.apply(null,[m].concat(d)):m;
if(e){this.each(function(){var l,k=f.data(this,a);
if(!k){return f.error("cannot call methods on "+b+" prior to initialization; attempted to call method '"+m+"'")
}if(!f.isFunction(k[m])||m.charAt(0)==="_"){return f.error("no such method '"+m+"' for "+b+" widget instance")
}l=k[m].apply(k,d);
if(l!==k&&l!==i){n=l&&l.jquery?n.pushStack(l.get()):l;
return false
}})
}else{this.each(function(){var k=f.data(this,a);
if(k){k.option(m||{})._init()
}else{f.data(this,a,new c(m,this))
}})
}return n
}
};
f.Widget=function(){};
f.Widget._childConstructors=[];
f.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:false,create:null},_createWidget:function(b,a){a=f(a||this.defaultElement||this)[0];
this.element=f(a);
this.uuid=j++;
this.eventNamespace="."+this.widgetName+this.uuid;
this.options=f.widget.extend({},this.options,this._getCreateOptions(),b);
this.bindings=f();
this.hoverable=f();
this.focusable=f();
if(a!==this){f.data(a,this.widgetFullName,this);
this._on(true,this.element,{remove:function(c){if(c.target===a){this.destroy()
}}});
this.document=f(a.style?a.ownerDocument:a.document||a);
this.window=f(this.document[0].defaultView||this.document[0].parentWindow)
}this._create();
this._trigger("create",null,this._getCreateEventData());
this._init()
},_getCreateOptions:f.noop,_getCreateEventData:f.noop,_create:f.noop,_init:f.noop,destroy:function(){this._destroy();
this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(f.camelCase(this.widgetFullName));
this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled");
this.bindings.unbind(this.eventNamespace);
this.hoverable.removeClass("ui-state-hover");
this.focusable.removeClass("ui-state-focus")
},_destroy:f.noop,widget:function(){return this.element
},option:function(c,l){var d=c,e,a,b;
if(arguments.length===0){return f.widget.extend({},this.options)
}if(typeof c==="string"){d={};
e=c.split(".");
c=e.shift();
if(e.length){a=d[c]=f.widget.extend({},this.options[c]);
for(b=0;
b<e.length-1;
b++){a[e[b]]=a[e[b]]||{};
a=a[e[b]]
}c=e.pop();
if(arguments.length===1){return a[c]===i?null:a[c]
}a[c]=l
}else{if(arguments.length===1){return this.options[c]===i?null:this.options[c]
}d[c]=l
}}this._setOptions(d);
return this
},_setOptions:function(b){var a;
for(a in b){this._setOption(a,b[a])
}return this
},_setOption:function(a,b){this.options[a]=b;
if(a==="disabled"){this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!b).attr("aria-disabled",b);
this.hoverable.removeClass("ui-state-hover");
this.focusable.removeClass("ui-state-focus")
}return this
},enable:function(){return this._setOption("disabled",false)
},disable:function(){return this._setOption("disabled",true)
},_on:function(e,b,c){var a,d=this;
if(typeof e!=="boolean"){c=b;
b=e;
e=false
}if(!c){c=b;
b=this.element;
a=this.widget()
}else{b=a=f(b);
this.bindings=this.bindings.add(b)
}f.each(c,function(q,s){function t(){if(!e&&(d.options.disabled===true||f(this).hasClass("ui-state-disabled"))){return
}return(typeof s==="string"?d[s]:s).apply(d,arguments)
}if(typeof s!=="string"){t.guid=s.guid=s.guid||t.guid||f.guid++
}var u=q.match(/^(\w+)\s*(.*)$/),r=u[1]+d.eventNamespace,v=u[2];
if(v){a.delegate(v,r,t)
}else{b.bind(r,t)
}})
},_off:function(a,b){b=(b||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;
a.unbind(b).undelegate(b)
},_delay:function(b,a){function c(){return(typeof b==="string"?d[b]:b).apply(d,arguments)
}var d=this;
return setTimeout(c,a||0)
},_hoverable:function(a){this.hoverable=this.hoverable.add(a);
this._on(a,{mouseenter:function(b){f(b.currentTarget).addClass("ui-state-hover")
},mouseleave:function(b){f(b.currentTarget).removeClass("ui-state-hover")
}})
},_focusable:function(a){this.focusable=this.focusable.add(a);
this._on(a,{focusin:function(b){f(b.currentTarget).addClass("ui-state-focus")
},focusout:function(b){f(b.currentTarget).removeClass("ui-state-focus")
}})
},_trigger:function(l,c,b){var e,d,a=this.options[l];
b=b||{};
c=f.Event(c);
c.type=(l===this.widgetEventPrefix?l:this.widgetEventPrefix+l).toLowerCase();
c.target=this.element[0];
d=c.originalEvent;
if(d){for(e in d){if(!(e in c)){c[e]=d[e]
}}}this.element.trigger(c,b);
return !(f.isFunction(a)&&a.apply(this.element[0],[c].concat(b))===false||c.isDefaultPrevented())
}};
f.each({show:"fadeIn",hide:"fadeOut"},function(b,a){f.Widget.prototype["_"+b]=function(e,n,c){if(typeof n==="string"){n={effect:n}
}var m,d=!n?b:n===true||typeof n==="number"?a:n.effect||a;
n=n||{};
if(typeof n==="number"){n={duration:n}
}m=!f.isEmptyObject(n);
n.complete=c;
if(n.delay){e.delay(n.delay)
}if(m&&f.effects&&f.effects.effect[d]){e[b](n)
}else{if(d!==b&&e[d]){e[d](n.duration,n.easing,c)
}else{e.queue(function(k){f(this)[b]();
if(c){c.call(e[0])
}k()
})
}}}
})
})(jQuery);
(function(d,f){var e=false;
d(document).mouseup(function(){e=false
});
d.widget("ui.mouse",{version:"1.10.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var a=this;
this.element.bind("mousedown."+this.widgetName,function(b){return a._mouseDown(b)
}).bind("click."+this.widgetName,function(b){if(true===d.data(b.target,a.widgetName+".preventClickEvent")){d.removeData(b.target,a.widgetName+".preventClickEvent");
b.stopImmediatePropagation();
return false
}});
this.started=false
},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);
if(this._mouseMoveDelegate){d(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)
}},_mouseDown:function(c){if(e){return
}(this._mouseStarted&&this._mouseUp(c));
this._mouseDownEvent=c;
var h=this,a=(c.which===1),b=(typeof this.options.cancel==="string"&&c.target.nodeName?d(c.target).closest(this.options.cancel).length:false);
if(!a||b||!this._mouseCapture(c)){return true
}this.mouseDelayMet=!this.options.delay;
if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){h.mouseDelayMet=true
},this.options.delay)
}if(this._mouseDistanceMet(c)&&this._mouseDelayMet(c)){this._mouseStarted=(this._mouseStart(c)!==false);
if(!this._mouseStarted){c.preventDefault();
return true
}}if(true===d.data(c.target,this.widgetName+".preventClickEvent")){d.removeData(c.target,this.widgetName+".preventClickEvent")
}this._mouseMoveDelegate=function(g){return h._mouseMove(g)
};
this._mouseUpDelegate=function(g){return h._mouseUp(g)
};
d(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);
c.preventDefault();
e=true;
return true
},_mouseMove:function(a){if(d.ui.ie&&(!document.documentMode||document.documentMode<9)&&!a.button){return this._mouseUp(a)
}if(this._mouseStarted){this._mouseDrag(a);
return a.preventDefault()
}if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,a)!==false);
(this._mouseStarted?this._mouseDrag(a):this._mouseUp(a))
}return !this._mouseStarted
},_mouseUp:function(a){d(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);
if(this._mouseStarted){this._mouseStarted=false;
if(a.target===this._mouseDownEvent.target){d.data(a.target,this.widgetName+".preventClickEvent",true)
}this._mouseStop(a)
}return false
},_mouseDistanceMet:function(a){return(Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance)
},_mouseDelayMet:function(){return this.mouseDelayMet
},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true
}})
})(jQuery);
(function(w,v){w.ui=w.ui||{};
var z,C=Math.max,y=Math.abs,r=Math.round,p=/left|center|right/,u=/top|center|bottom/,q=/[\+\-]\d+(\.[\d]+)?%?/,t=/^\w+/,s=/%$/,x=w.fn.position;
function B(b,c,a){return[parseFloat(b[0])*(s.test(b[0])?c/100:1),parseFloat(b[1])*(s.test(b[1])?a/100:1)]
}function D(a,b){return parseInt(w.css(a,b),10)||0
}function A(a){var b=a[0];
if(b.nodeType===9){return{width:a.width(),height:a.height(),offset:{top:0,left:0}}
}if(w.isWindow(b)){return{width:a.width(),height:a.height(),offset:{top:a.scrollTop(),left:a.scrollLeft()}}
}if(b.preventDefault){return{width:0,height:0,offset:{top:b.pageY,left:b.pageX}}
}return{width:a.outerWidth(),height:a.outerHeight(),offset:a.offset()}
}w.position={scrollbarWidth:function(){if(z!==v){return z
}var c,d,a=w("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),b=a.children()[0];
w("body").append(a);
c=b.offsetWidth;
a.css("overflow","scroll");
d=b.offsetWidth;
if(c===d){d=a[0].clientWidth
}a.remove();
return(z=c-d)
},getScrollInfo:function(e){var c=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),d=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),a=c==="scroll"||(c==="auto"&&e.width<e.element[0].scrollWidth),b=d==="scroll"||(d==="auto"&&e.height<e.element[0].scrollHeight);
return{width:b?w.position.scrollbarWidth():0,height:a?w.position.scrollbarWidth():0}
},getWithinInfo:function(a){var d=w(a||window),c=w.isWindow(d[0]),b=!!d[0]&&d[0].nodeType===9;
return{element:d,isWindow:c,isDocument:b,offset:d.offset()||{left:0,top:0},scrollLeft:d.scrollLeft(),scrollTop:d.scrollTop(),width:c?d.width():d.outerWidth(),height:c?d.height():d.outerHeight()}
}};
w.fn.position=function(b){if(!b||!b.of){return x.apply(this,arguments)
}b=w.extend({},b);
var i,g,e,f,j,l,d=w(b.of),h=w.position.getWithinInfo(b.within),c=w.position.getScrollInfo(h),k=(b.collision||"flip").split(" "),a={};
l=A(d);
if(d[0].preventDefault){b.at="left top"
}g=l.width;
e=l.height;
f=l.offset;
j=w.extend({},f);
w.each(["my","at"],function(){var n=(b[this]||"").split(" "),m,o;
if(n.length===1){n=p.test(n[0])?n.concat(["center"]):u.test(n[0])?["center"].concat(n):["center","center"]
}n[0]=p.test(n[0])?n[0]:"center";
n[1]=u.test(n[1])?n[1]:"center";
m=q.exec(n[0]);
o=q.exec(n[1]);
a[this]=[m?m[0]:0,o?o[0]:0];
b[this]=[t.exec(n[0])[0],t.exec(n[1])[0]]
});
if(k.length===1){k[1]=k[0]
}if(b.at[0]==="right"){j.left+=g
}else{if(b.at[0]==="center"){j.left+=g/2
}}if(b.at[1]==="bottom"){j.top+=e
}else{if(b.at[1]==="center"){j.top+=e/2
}}i=B(a.at,g,e);
j.left+=i[0];
j.top+=i[1];
return this.each(function(){var M,T,N=w(this),O=N.outerWidth(),o=N.outerHeight(),P=D(this,"marginLeft"),Q=D(this,"marginTop"),n=O+P+D(this,"marginRight")+c.width,m=o+Q+D(this,"marginBottom")+c.height,S=w.extend({},j),R=B(a.my,N.outerWidth(),N.outerHeight());
if(b.my[0]==="right"){S.left-=O
}else{if(b.my[0]==="center"){S.left-=O/2
}}if(b.my[1]==="bottom"){S.top-=o
}else{if(b.my[1]==="center"){S.top-=o/2
}}S.left+=R[0];
S.top+=R[1];
if(!w.support.offsetFractions){S.left=r(S.left);
S.top=r(S.top)
}M={marginLeft:P,marginTop:Q};
w.each(["left","top"],function(F,E){if(w.ui.position[k[F]]){w.ui.position[k[F]][E](S,{targetWidth:g,targetHeight:e,elemWidth:O,elemHeight:o,collisionPosition:M,collisionWidth:n,collisionHeight:m,offset:[i[0]+R[0],i[1]+R[1]],my:b.my,at:b.at,within:h,elem:N})
}});
if(b.using){T=function(H){var G=f.left-S.left,I=G+g-O,J=f.top-S.top,E=J+e-o,F={target:{element:d,left:f.left,top:f.top,width:g,height:e},element:{element:N,left:S.left,top:S.top,width:O,height:o},horizontal:I<0?"left":G>0?"right":"center",vertical:E<0?"top":J>0?"bottom":"middle"};
if(g<O&&y(G+I)<g){F.horizontal="center"
}if(e<o&&y(J+E)<e){F.vertical="middle"
}if(C(y(G),y(I))>C(y(J),y(E))){F.important="horizontal"
}else{F.important="vertical"
}b.using.call(this,H,F)
}
}N.offset(w.extend(S,{using:T}))
})
};
w.ui.position={fit:{left:function(g,b){var h=b.within,i=h.isWindow?h.scrollLeft:h.offset.left,d=h.width,a=g.left-b.collisionPosition.marginLeft,e=i-a,f=a+b.collisionWidth-d-i,c;
if(b.collisionWidth>d){if(e>0&&f<=0){c=g.left+e+b.collisionWidth-d-i;
g.left+=e-c
}else{if(f>0&&e<=0){g.left=i
}else{if(e>f){g.left=i+d-b.collisionWidth
}else{g.left=i
}}}}else{if(e>0){g.left+=e
}else{if(f>0){g.left-=f
}else{g.left=C(g.left-a,g.left)
}}}},top:function(g,b){var h=b.within,i=h.isWindow?h.scrollTop:h.offset.top,d=b.within.height,a=g.top-b.collisionPosition.marginTop,f=i-a,e=a+b.collisionHeight-d-i,c;
if(b.collisionHeight>d){if(f>0&&e<=0){c=g.top+f+b.collisionHeight-d-i;
g.top+=f-c
}else{if(e>0&&f<=0){g.top=i
}else{if(f>e){g.top=i+d-b.collisionHeight
}else{g.top=i
}}}}else{if(f>0){g.top+=f
}else{if(e>0){g.top-=e
}else{g.top=C(g.top-a,g.top)
}}}}},flip:{left:function(l,c){var m=c.within,n=m.offset.left+m.scrollLeft,i=m.width,h=m.isWindow?m.scrollLeft:m.offset.left,b=l.left-c.collisionPosition.marginLeft,j=b-h,k=b+c.collisionWidth-i-h,d=c.my[0]==="left"?-c.elemWidth:c.my[0]==="right"?c.elemWidth:0,a=c.at[0]==="left"?c.targetWidth:c.at[0]==="right"?-c.targetWidth:0,g=-2*c.offset[0],f,e;
if(j<0){f=l.left+d+a+g+c.collisionWidth-i-n;
if(f<0||f<y(j)){l.left+=d+a+g
}}else{if(k>0){e=l.left-c.collisionPosition.marginLeft+d+a+g-h;
if(e>0||y(e)<k){l.left+=d+a+g
}}}},top:function(h,n){var j=n.within,k=j.offset.top+j.scrollTop,e=j.height,d=j.isWindow?j.scrollTop:j.offset.top,m=h.top-n.collisionPosition.marginTop,g=m-d,f=m+n.collisionHeight-e-d,i=n.my[1]==="top",o=i?-n.elemHeight:n.my[1]==="bottom"?n.elemHeight:0,l=n.at[1]==="top"?n.targetHeight:n.at[1]==="bottom"?-n.targetHeight:0,c=-2*n.offset[1],b,a;
if(g<0){a=h.top+o+l+c+n.collisionHeight-e-k;
if((h.top+o+l+c)>g&&(a<0||a<y(g))){h.top+=o+l+c
}}else{if(f>0){b=h.top-n.collisionPosition.marginTop+o+l+c-d;
if((h.top+o+l+c)>f&&(b>0||y(b)<f)){h.top+=o+l+c
}}}}},flipfit:{left:function(){w.ui.position.flip.left.apply(this,arguments);
w.ui.position.fit.left.apply(this,arguments)
},top:function(){w.ui.position.flip.top.apply(this,arguments);
w.ui.position.fit.top.apply(this,arguments)
}}};
(function(){var e,f,g,d,c,a=document.getElementsByTagName("body")[0],b=document.createElement("div");
e=document.createElement(a?"div":"body");
g={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};
if(a){w.extend(g,{position:"absolute",left:"-1000px",top:"-1000px"})
}for(c in g){e.style[c]=g[c]
}e.appendChild(b);
f=a||document.documentElement;
f.insertBefore(e,f.firstChild);
b.style.cssText="position: absolute; left: 10.7432222px;";
d=w(b).offset().left;
w.support.offsetFractions=d>10&&d<11;
e.innerHTML="";
f.removeChild(e)
})()
}(jQuery));
(function(c,d){c.widget("ui.draggable",c.ui.mouse,{version:"1.10.4",widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false,drag:null,start:null,stop:null},_create:function(){if(this.options.helper==="original"&&!(/^(?:r|a|f)/).test(this.element.css("position"))){this.element[0].style.position="relative"
}if(this.options.addClasses){this.element.addClass("ui-draggable")
}if(this.options.disabled){this.element.addClass("ui-draggable-disabled")
}this._mouseInit()
},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
this._mouseDestroy()
},_mouseCapture:function(a){var b=this.options;
if(this.helper||b.disabled||c(a.target).closest(".ui-resizable-handle").length>0){return false
}this.handle=this._getHandle(a);
if(!this.handle){return false
}c(b.iframeFix===true?"iframe":b.iframeFix).each(function(){c("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css(c(this).offset()).appendTo("body")
});
return true
},_mouseStart:function(a){var b=this.options;
this.helper=this._createHelper(a);
this.helper.addClass("ui-draggable-dragging");
this._cacheHelperProportions();
if(c.ui.ddmanager){c.ui.ddmanager.current=this
}this._cacheMargins();
this.cssPosition=this.helper.css("position");
this.scrollParent=this.helper.scrollParent();
this.offsetParent=this.helper.offsetParent();
this.offsetParentCssPosition=this.offsetParent.css("position");
this.offset=this.positionAbs=this.element.offset();
this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};
this.offset.scroll=false;
c.extend(this.offset,{click:{left:a.pageX-this.offset.left,top:a.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.originalPosition=this.position=this._generatePosition(a);
this.originalPageX=a.pageX;
this.originalPageY=a.pageY;
(b.cursorAt&&this._adjustOffsetFromHelper(b.cursorAt));
this._setContainment();
if(this._trigger("start",a)===false){this._clear();
return false
}this._cacheHelperProportions();
if(c.ui.ddmanager&&!b.dropBehaviour){c.ui.ddmanager.prepareOffsets(this,a)
}this._mouseDrag(a,true);
if(c.ui.ddmanager){c.ui.ddmanager.dragStart(this,a)
}return true
},_mouseDrag:function(a,b){if(this.offsetParentCssPosition==="fixed"){this.offset.parent=this._getParentOffset()
}this.position=this._generatePosition(a);
this.positionAbs=this._convertPositionTo("absolute");
if(!b){var f=this._uiHash();
if(this._trigger("drag",a,f)===false){this._mouseUp({});
return false
}this.position=f.position
}if(!this.options.axis||this.options.axis!=="y"){this.helper[0].style.left=this.position.left+"px"
}if(!this.options.axis||this.options.axis!=="x"){this.helper[0].style.top=this.position.top+"px"
}if(c.ui.ddmanager){c.ui.ddmanager.drag(this,a)
}return false
},_mouseStop:function(b){var f=this,a=false;
if(c.ui.ddmanager&&!this.options.dropBehaviour){a=c.ui.ddmanager.drop(this,b)
}if(this.dropped){a=this.dropped;
this.dropped=false
}if(this.options.helper==="original"&&!c.contains(this.element[0].ownerDocument,this.element[0])){return false
}if((this.options.revert==="invalid"&&!a)||(this.options.revert==="valid"&&a)||this.options.revert===true||(c.isFunction(this.options.revert)&&this.options.revert.call(this.element,a))){c(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){if(f._trigger("stop",b)!==false){f._clear()
}})
}else{if(this._trigger("stop",b)!==false){this._clear()
}}return false
},_mouseUp:function(a){c("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)
});
if(c.ui.ddmanager){c.ui.ddmanager.dragStop(this,a)
}return c.ui.mouse.prototype._mouseUp.call(this,a)
},cancel:function(){if(this.helper.is(".ui-draggable-dragging")){this._mouseUp({})
}else{this._clear()
}return this
},_getHandle:function(a){return this.options.handle?!!c(a.target).closest(this.element.find(this.options.handle)).length:true
},_createHelper:function(a){var f=this.options,b=c.isFunction(f.helper)?c(f.helper.apply(this.element[0],[a])):(f.helper==="clone"?this.element.clone().removeAttr("id"):this.element);
if(!b.parents("body").length){b.appendTo((f.appendTo==="parent"?this.element[0].parentNode:f.appendTo))
}if(b[0]!==this.element[0]&&!(/(fixed|absolute)/).test(b.css("position"))){b.css("position","absolute")
}return b
},_adjustOffsetFromHelper:function(a){if(typeof a==="string"){a=a.split(" ")
}if(c.isArray(a)){a={left:+a[0],top:+a[1]||0}
}if("left" in a){this.offset.click.left=a.left+this.margins.left
}if("right" in a){this.offset.click.left=this.helperProportions.width-a.right+this.margins.left
}if("top" in a){this.offset.click.top=a.top+this.margins.top
}if("bottom" in a){this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top
}},_getParentOffset:function(){var a=this.offsetParent.offset();
if(this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&c.contains(this.scrollParent[0],this.offsetParent[0])){a.left+=this.scrollParent.scrollLeft();
a.top+=this.scrollParent.scrollTop()
}if((this.offsetParent[0]===document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&c.ui.ie)){a={top:0,left:0}
}return{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var a=this.element.position();
return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
}else{return{top:0,left:0}
}},_cacheMargins:function(){this.margins={left:(parseInt(this.element.css("marginLeft"),10)||0),top:(parseInt(this.element.css("marginTop"),10)||0),right:(parseInt(this.element.css("marginRight"),10)||0),bottom:(parseInt(this.element.css("marginBottom"),10)||0)}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var h,a,b,g=this.options;
if(!g.containment){this.containment=null;
return
}if(g.containment==="window"){this.containment=[c(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,c(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,c(window).scrollLeft()+c(window).width()-this.helperProportions.width-this.margins.left,c(window).scrollTop()+(c(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];
return
}if(g.containment==="document"){this.containment=[0,0,c(document).width()-this.helperProportions.width-this.margins.left,(c(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];
return
}if(g.containment.constructor===Array){this.containment=g.containment;
return
}if(g.containment==="parent"){g.containment=this.helper[0].parentNode
}a=c(g.containment);
b=a[0];
if(!b){return
}h=a.css("overflow")!=="hidden";
this.containment=[(parseInt(a.css("borderLeftWidth"),10)||0)+(parseInt(a.css("paddingLeft"),10)||0),(parseInt(a.css("borderTopWidth"),10)||0)+(parseInt(a.css("paddingTop"),10)||0),(h?Math.max(b.scrollWidth,b.offsetWidth):b.offsetWidth)-(parseInt(a.css("borderRightWidth"),10)||0)-(parseInt(a.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(h?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(a.css("borderBottomWidth"),10)||0)-(parseInt(a.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];
this.relative_container=a
},_convertPositionTo:function(a,g){if(!g){g=this.position
}var b=a==="absolute"?1:-1,h=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&c.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent;
if(!this.offset.scroll){this.offset.scroll={top:h.scrollTop(),left:h.scrollLeft()}
}return{top:(g.top+this.offset.relative.top*b+this.offset.parent.top*b-((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():this.offset.scroll.top)*b)),left:(g.left+this.offset.relative.left*b+this.offset.parent.left*b-((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():this.offset.scroll.left)*b))}
},_generatePosition:function(l){var b,a,r,m,n=this.options,q=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&c.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,o=l.pageX,p=l.pageY;
if(!this.offset.scroll){this.offset.scroll={top:q.scrollTop(),left:q.scrollLeft()}
}if(this.originalPosition){if(this.containment){if(this.relative_container){a=this.relative_container.offset();
b=[this.containment[0]+a.left,this.containment[1]+a.top,this.containment[2]+a.left,this.containment[3]+a.top]
}else{b=this.containment
}if(l.pageX-this.offset.click.left<b[0]){o=b[0]+this.offset.click.left
}if(l.pageY-this.offset.click.top<b[1]){p=b[1]+this.offset.click.top
}if(l.pageX-this.offset.click.left>b[2]){o=b[2]+this.offset.click.left
}if(l.pageY-this.offset.click.top>b[3]){p=b[3]+this.offset.click.top
}}if(n.grid){r=n.grid[1]?this.originalPageY+Math.round((p-this.originalPageY)/n.grid[1])*n.grid[1]:this.originalPageY;
p=b?((r-this.offset.click.top>=b[1]||r-this.offset.click.top>b[3])?r:((r-this.offset.click.top>=b[1])?r-n.grid[1]:r+n.grid[1])):r;
m=n.grid[0]?this.originalPageX+Math.round((o-this.originalPageX)/n.grid[0])*n.grid[0]:this.originalPageX;
o=b?((m-this.offset.click.left>=b[0]||m-this.offset.click.left>b[2])?m:((m-this.offset.click.left>=b[0])?m-n.grid[0]:m+n.grid[0])):m
}}return{top:(p-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():this.offset.scroll.top)),left:(o-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():this.offset.scroll.left))}
},_clear:function(){this.helper.removeClass("ui-draggable-dragging");
if(this.helper[0]!==this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()
}this.helper=null;
this.cancelHelperRemoval=false
},_trigger:function(b,a,f){f=f||this._uiHash();
c.ui.plugin.call(this,b,[a,f]);
if(b==="drag"){this.positionAbs=this._convertPositionTo("absolute")
}return c.Widget.prototype._trigger.call(this,b,a,f)
},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}
}});
c.ui.plugin.add("draggable","connectToSortable",{start:function(a,i){var b=c(this).data("ui-draggable"),h=b.options,j=c.extend({},i,{item:b.element});
b.sortables=[];
c(h.connectToSortable).each(function(){var e=c.data(this,"ui-sortable");
if(e&&!e.options.disabled){b.sortables.push({instance:e,shouldRevert:e.options.revert});
e.refreshPositions();
e._trigger("activate",a,j)
}})
},stop:function(a,g){var b=c(this).data("ui-draggable"),h=c.extend({},g,{item:b.element});
c.each(b.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;
b.cancelHelperRemoval=true;
this.instance.cancelHelperRemoval=false;
if(this.shouldRevert){this.instance.options.revert=this.shouldRevert
}this.instance._mouseStop(a);
this.instance.options.helper=this.instance.options._helper;
if(b.options.helper==="original"){this.instance.currentItem.css({top:"auto",left:"auto"})
}}else{this.instance.cancelHelperRemoval=false;
this.instance._trigger("deactivate",a,h)
}})
},drag:function(a,h){var b=c(this).data("ui-draggable"),g=this;
c.each(b.sortables,function(){var e=false,f=this;
this.instance.positionAbs=b.positionAbs;
this.instance.helperProportions=b.helperProportions;
this.instance.offset.click=b.offset.click;
if(this.instance._intersectsWith(this.instance.containerCache)){e=true;
c.each(b.sortables,function(){this.instance.positionAbs=b.positionAbs;
this.instance.helperProportions=b.helperProportions;
this.instance.offset.click=b.offset.click;
if(this!==f&&this.instance._intersectsWith(this.instance.containerCache)&&c.contains(f.instance.element[0],this.instance.element[0])){e=false
}return e
})
}if(e){if(!this.instance.isOver){this.instance.isOver=1;
this.instance.currentItem=c(g).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",true);
this.instance.options._helper=this.instance.options.helper;
this.instance.options.helper=function(){return h.helper[0]
};
a.target=this.instance.currentItem[0];
this.instance._mouseCapture(a,true);
this.instance._mouseStart(a,true,true);
this.instance.offset.click.top=b.offset.click.top;
this.instance.offset.click.left=b.offset.click.left;
this.instance.offset.parent.left-=b.offset.parent.left-this.instance.offset.parent.left;
this.instance.offset.parent.top-=b.offset.parent.top-this.instance.offset.parent.top;
b._trigger("toSortable",a);
b.dropped=this.instance.element;
b.currentItem=b.element;
this.instance.fromOutside=b
}if(this.instance.currentItem){this.instance._mouseDrag(a)
}}else{if(this.instance.isOver){this.instance.isOver=0;
this.instance.cancelHelperRemoval=true;
this.instance.options.revert=false;
this.instance._trigger("out",a,this.instance._uiHash(this.instance));
this.instance._mouseStop(a,true);
this.instance.options.helper=this.instance.options._helper;
this.instance.currentItem.remove();
if(this.instance.placeholder){this.instance.placeholder.remove()
}b._trigger("fromSortable",a);
b.dropped=false
}}})
}});
c.ui.plugin.add("draggable","cursor",{start:function(){var b=c("body"),a=c(this).data("ui-draggable").options;
if(b.css("cursor")){a._cursor=b.css("cursor")
}b.css("cursor",a.cursor)
},stop:function(){var a=c(this).data("ui-draggable").options;
if(a._cursor){c("body").css("cursor",a._cursor)
}}});
c.ui.plugin.add("draggable","opacity",{start:function(a,h){var g=c(h.helper),b=c(this).data("ui-draggable").options;
if(g.css("opacity")){b._opacity=g.css("opacity")
}g.css("opacity",b.opacity)
},stop:function(a,f){var b=c(this).data("ui-draggable").options;
if(b._opacity){c(f.helper).css("opacity",b._opacity)
}}});
c.ui.plugin.add("draggable","scroll",{start:function(){var a=c(this).data("ui-draggable");
if(a.scrollParent[0]!==document&&a.scrollParent[0].tagName!=="HTML"){a.overflowOffset=a.scrollParent.offset()
}},drag:function(a){var b=c(this).data("ui-draggable"),g=b.options,h=false;
if(b.scrollParent[0]!==document&&b.scrollParent[0].tagName!=="HTML"){if(!g.axis||g.axis!=="x"){if((b.overflowOffset.top+b.scrollParent[0].offsetHeight)-a.pageY<g.scrollSensitivity){b.scrollParent[0].scrollTop=h=b.scrollParent[0].scrollTop+g.scrollSpeed
}else{if(a.pageY-b.overflowOffset.top<g.scrollSensitivity){b.scrollParent[0].scrollTop=h=b.scrollParent[0].scrollTop-g.scrollSpeed
}}}if(!g.axis||g.axis!=="y"){if((b.overflowOffset.left+b.scrollParent[0].offsetWidth)-a.pageX<g.scrollSensitivity){b.scrollParent[0].scrollLeft=h=b.scrollParent[0].scrollLeft+g.scrollSpeed
}else{if(a.pageX-b.overflowOffset.left<g.scrollSensitivity){b.scrollParent[0].scrollLeft=h=b.scrollParent[0].scrollLeft-g.scrollSpeed
}}}}else{if(!g.axis||g.axis!=="x"){if(a.pageY-c(document).scrollTop()<g.scrollSensitivity){h=c(document).scrollTop(c(document).scrollTop()-g.scrollSpeed)
}else{if(c(window).height()-(a.pageY-c(document).scrollTop())<g.scrollSensitivity){h=c(document).scrollTop(c(document).scrollTop()+g.scrollSpeed)
}}}if(!g.axis||g.axis!=="y"){if(a.pageX-c(document).scrollLeft()<g.scrollSensitivity){h=c(document).scrollLeft(c(document).scrollLeft()-g.scrollSpeed)
}else{if(c(window).width()-(a.pageX-c(document).scrollLeft())<g.scrollSensitivity){h=c(document).scrollLeft(c(document).scrollLeft()+g.scrollSpeed)
}}}}if(h!==false&&c.ui.ddmanager&&!g.dropBehaviour){c.ui.ddmanager.prepareOffsets(b,a)
}}});
c.ui.plugin.add("draggable","snap",{start:function(){var a=c(this).data("ui-draggable"),b=a.options;
a.snapElements=[];
c(b.snap.constructor!==String?(b.snap.items||":data(ui-draggable)"):b.snap).each(function(){var h=c(this),g=h.offset();
if(this!==a.element[0]){a.snapElements.push({item:this,width:h.outerWidth(),height:h.outerHeight(),top:g.top,left:g.left})
}})
},drag:function(C,L){var b,l,H,J,G,I,K,F,E,D,A=c(this).data("ui-draggable"),i=A.options,r=i.snapTolerance,o=L.offset.left,B=o+A.helperProportions.width,t=L.offset.top,a=t+A.helperProportions.height;
for(E=A.snapElements.length-1;
E>=0;
E--){G=A.snapElements[E].left;
I=G+A.snapElements[E].width;
K=A.snapElements[E].top;
F=K+A.snapElements[E].height;
if(B<G-r||o>I+r||a<K-r||t>F+r||!c.contains(A.snapElements[E].item.ownerDocument,A.snapElements[E].item)){if(A.snapElements[E].snapping){(A.options.snap.release&&A.options.snap.release.call(A.element,C,c.extend(A._uiHash(),{snapItem:A.snapElements[E].item})))
}A.snapElements[E].snapping=false;
continue
}if(i.snapMode!=="inner"){b=Math.abs(K-a)<=r;
l=Math.abs(F-t)<=r;
H=Math.abs(G-B)<=r;
J=Math.abs(I-o)<=r;
if(b){L.position.top=A._convertPositionTo("relative",{top:K-A.helperProportions.height,left:0}).top-A.margins.top
}if(l){L.position.top=A._convertPositionTo("relative",{top:F,left:0}).top-A.margins.top
}if(H){L.position.left=A._convertPositionTo("relative",{top:0,left:G-A.helperProportions.width}).left-A.margins.left
}if(J){L.position.left=A._convertPositionTo("relative",{top:0,left:I}).left-A.margins.left
}}D=(b||l||H||J);
if(i.snapMode!=="outer"){b=Math.abs(K-t)<=r;
l=Math.abs(F-a)<=r;
H=Math.abs(G-o)<=r;
J=Math.abs(I-B)<=r;
if(b){L.position.top=A._convertPositionTo("relative",{top:K,left:0}).top-A.margins.top
}if(l){L.position.top=A._convertPositionTo("relative",{top:F-A.helperProportions.height,left:0}).top-A.margins.top
}if(H){L.position.left=A._convertPositionTo("relative",{top:0,left:G}).left-A.margins.left
}if(J){L.position.left=A._convertPositionTo("relative",{top:0,left:I-A.helperProportions.width}).left-A.margins.left
}}if(!A.snapElements[E].snapping&&(b||l||H||J||D)){(A.options.snap.snap&&A.options.snap.snap.call(A.element,C,c.extend(A._uiHash(),{snapItem:A.snapElements[E].item})))
}A.snapElements[E].snapping=(b||l||H||J||D)
}}});
c.ui.plugin.add("draggable","stack",{start:function(){var b,f=this.data("ui-draggable").options,a=c.makeArray(c(f.stack)).sort(function(e,h){return(parseInt(c(e).css("zIndex"),10)||0)-(parseInt(c(h).css("zIndex"),10)||0)
});
if(!a.length){return
}b=parseInt(c(a[0]).css("zIndex"),10)||0;
c(a).each(function(e){c(this).css("zIndex",b+e)
});
this.css("zIndex",(b+a.length))
}});
c.ui.plugin.add("draggable","zIndex",{start:function(a,h){var g=c(h.helper),b=c(this).data("ui-draggable").options;
if(g.css("zIndex")){b._zIndex=g.css("zIndex")
}g.css("zIndex",b.zIndex)
},stop:function(a,f){var b=c(this).data("ui-draggable").options;
if(b._zIndex){c(f.helper).css("zIndex",b._zIndex)
}}})
})(jQuery);
(function(d,f){function e(c,a,b){return(c>a)&&(c<(a+b))
}d.widget("ui.droppable",{version:"1.10.4",widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var c,b=this.options,a=b.accept;
this.isover=false;
this.isout=true;
this.accept=d.isFunction(a)?a:function(h){return h.is(a)
};
this.proportions=function(){if(arguments.length){c=arguments[0]
}else{return c?c:c={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}
}};
d.ui.ddmanager.droppables[b.scope]=d.ui.ddmanager.droppables[b.scope]||[];
d.ui.ddmanager.droppables[b.scope].push(this);
(b.addClasses&&this.element.addClass("ui-droppable"))
},_destroy:function(){var b=0,a=d.ui.ddmanager.droppables[this.options.scope];
for(;
b<a.length;
b++){if(a[b]===this){a.splice(b,1)
}}this.element.removeClass("ui-droppable ui-droppable-disabled")
},_setOption:function(a,b){if(a==="accept"){this.accept=d.isFunction(b)?b:function(c){return c.is(b)
}
}d.Widget.prototype._setOption.apply(this,arguments)
},_activate:function(b){var a=d.ui.ddmanager.current;
if(this.options.activeClass){this.element.addClass(this.options.activeClass)
}if(a){this._trigger("activate",b,this.ui(a))
}},_deactivate:function(b){var a=d.ui.ddmanager.current;
if(this.options.activeClass){this.element.removeClass(this.options.activeClass)
}if(a){this._trigger("deactivate",b,this.ui(a))
}},_over:function(b){var a=d.ui.ddmanager.current;
if(!a||(a.currentItem||a.element)[0]===this.element[0]){return
}if(this.accept.call(this.element[0],(a.currentItem||a.element))){if(this.options.hoverClass){this.element.addClass(this.options.hoverClass)
}this._trigger("over",b,this.ui(a))
}},_out:function(b){var a=d.ui.ddmanager.current;
if(!a||(a.currentItem||a.element)[0]===this.element[0]){return
}if(this.accept.call(this.element[0],(a.currentItem||a.element))){if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)
}this._trigger("out",b,this.ui(a))
}},_drop:function(h,b){var c=b||d.ui.ddmanager.current,a=false;
if(!c||(c.currentItem||c.element)[0]===this.element[0]){return false
}this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var g=d.data(this,"ui-droppable");
if(g.options.greedy&&!g.options.disabled&&g.options.scope===c.options.scope&&g.accept.call(g.element[0],(c.currentItem||c.element))&&d.ui.intersect(c,d.extend(g,{offset:g.element.offset()}),g.options.tolerance)){a=true;
return false
}});
if(a){return false
}if(this.accept.call(this.element[0],(c.currentItem||c.element))){if(this.options.activeClass){this.element.removeClass(this.options.activeClass)
}if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)
}this._trigger("drop",h,this.ui(c));
return this.element
}return false
},ui:function(a){return{draggable:(a.currentItem||a.element),helper:a.helper,position:a.position,offset:a.positionAbs}
}});
d.ui.intersect=function(b,r,v){if(!r.offset){return false
}var c,l,w=(b.positionAbs||b.position.absolute).left,y=(b.positionAbs||b.position.absolute).top,x=w+b.helperProportions.width,z=y+b.helperProportions.height,s=r.offset.left,u=r.offset.top,t=s+r.proportions().width,a=u+r.proportions().height;
switch(v){case"fit":return(s<=w&&x<=t&&u<=y&&z<=a);
case"intersect":return(s<w+(b.helperProportions.width/2)&&x-(b.helperProportions.width/2)<t&&u<y+(b.helperProportions.height/2)&&z-(b.helperProportions.height/2)<a);
case"pointer":c=((b.positionAbs||b.position.absolute).left+(b.clickOffset||b.offset.click).left);
l=((b.positionAbs||b.position.absolute).top+(b.clickOffset||b.offset.click).top);
return e(l,u,r.proportions().height)&&e(c,s,r.proportions().width);
case"touch":return((y>=u&&y<=a)||(z>=u&&z<=a)||(y<u&&z>a))&&((w>=s&&w<=t)||(x>=s&&x<=t)||(w<s&&x>t));
default:return false
}};
d.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(m,a){var b,c,j=d.ui.ddmanager.droppables[m.options.scope]||[],n=a?a.type:null,i=(m.currentItem||m.element).find(":data(ui-droppable)").addBack();
droppablesLoop:for(b=0;
b<j.length;
b++){if(j[b].options.disabled||(m&&!j[b].accept.call(j[b].element[0],(m.currentItem||m.element)))){continue
}for(c=0;
c<i.length;
c++){if(i[c]===j[b].element[0]){j[b].proportions().height=0;
continue droppablesLoop
}}j[b].visible=j[b].element.css("display")!=="none";
if(!j[b].visible){continue
}if(n==="mousedown"){j[b]._activate.call(j[b],a)
}j[b].offset=j[b].element.offset();
j[b].proportions({width:j[b].element[0].offsetWidth,height:j[b].element[0].offsetHeight})
}},drop:function(a,c){var b=false;
d.each((d.ui.ddmanager.droppables[a.options.scope]||[]).slice(),function(){if(!this.options){return
}if(!this.options.disabled&&this.visible&&d.ui.intersect(a,this,this.options.tolerance)){b=this._drop.call(this,c)||b
}if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],(a.currentItem||a.element))){this.isout=true;
this.isover=false;
this._deactivate.call(this,c)
}});
return b
},dragStart:function(a,b){a.element.parentsUntil("body").bind("scroll.droppable",function(){if(!a.options.refreshPositions){d.ui.ddmanager.prepareOffsets(a,b)
}})
},drag:function(a,b){if(a.options.refreshPositions){d.ui.ddmanager.prepareOffsets(a,b)
}d.each(d.ui.ddmanager.droppables[a.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible){return
}var m,n,l,k=d.ui.intersect(a,this,this.options.tolerance),c=!k&&this.isover?"isout":(k&&!this.isover?"isover":null);
if(!c){return
}if(this.options.greedy){n=this.options.scope;
l=this.element.parents(":data(ui-droppable)").filter(function(){return d.data(this,"ui-droppable").options.scope===n
});
if(l.length){m=d.data(l[0],"ui-droppable");
m.greedyChild=(c==="isover")
}}if(m&&c==="isover"){m.isover=false;
m.isout=true;
m._out.call(m,b)
}this[c]=true;
this[c==="isout"?"isover":"isout"]=false;
this[c==="isover"?"_over":"_out"].call(this,b);
if(m&&c==="isout"){m.isout=false;
m.isover=true;
m._over.call(m,b)
}})
},dragStop:function(a,b){a.element.parentsUntil("body").unbind("scroll.droppable");
if(!a.options.refreshPositions){d.ui.ddmanager.prepareOffsets(a,b)
}}}
})(jQuery);
(function(e,h){function g(a){return parseInt(a,10)||0
}function f(a){return !isNaN(parseInt(a,10))
}e.widget("ui.resizable",e.ui.mouse,{version:"1.10.4",widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var i,d,b,a,c,n=this,m=this.options;
this.element.addClass("ui-resizable");
e.extend(this,{_aspectRatio:!!(m.aspectRatio),aspectRatio:m.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:m.helper||m.ghost||m.animate?m.helper||"ui-resizable-helper":null});
if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}));
this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable"));
this.elementIsWrapper=true;
this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});
this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});
this.originalResizeStyle=this.originalElement.css("resize");
this.originalElement.css("resize","none");
this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));
this.originalElement.css({margin:this.originalElement.css("margin")});
this._proportionallyResize()
}this.handles=m.handles||(!e(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"});
if(this.handles.constructor===String){if(this.handles==="all"){this.handles="n,e,s,w,se,sw,ne,nw"
}i=this.handles.split(",");
this.handles={};
for(d=0;
d<i.length;
d++){b=e.trim(i[d]);
c="ui-resizable-"+b;
a=e("<div class='ui-resizable-handle "+c+"'></div>");
a.css({zIndex:m.zIndex});
if("se"===b){a.addClass("ui-icon ui-icon-gripsmall-diagonal-se")
}this.handles[b]=".ui-resizable-"+b;
this.element.append(a)
}}this._renderAxis=function(r){var k,j,l,q;
r=r||this.element;
for(k in this.handles){if(this.handles[k].constructor===String){this.handles[k]=e(this.handles[k],this.element).show()
}if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){j=e(this.handles[k],this.element);
q=/sw|ne|nw|se|n|s/.test(k)?j.outerHeight():j.outerWidth();
l=["padding",/ne|nw|n/.test(k)?"Top":/se|sw|s/.test(k)?"Bottom":/^e$/.test(k)?"Right":"Left"].join("");
r.css(l,q);
this._proportionallyResize()
}if(!e(this.handles[k]).length){continue
}}};
this._renderAxis(this.element);
this._handles=e(".ui-resizable-handle",this.element).disableSelection();
this._handles.mouseover(function(){if(!n.resizing){if(this.className){a=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)
}n.axis=a&&a[1]?a[1]:"se"
}});
if(m.autoHide){this._handles.hide();
e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){if(m.disabled){return
}e(this).removeClass("ui-resizable-autohide");
n._handles.show()
}).mouseleave(function(){if(m.disabled){return
}if(!n.resizing){e(this).addClass("ui-resizable-autohide");
n._handles.hide()
}})
}this._mouseInit()
},_destroy:function(){this._mouseDestroy();
var b,a=function(c){e(c).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
};
if(this.elementIsWrapper){a(this.element);
b=this.element;
this.originalElement.css({position:b.css("position"),width:b.outerWidth(),height:b.outerHeight(),top:b.css("top"),left:b.css("left")}).insertAfter(b);
b.remove()
}this.originalElement.css("resize",this.originalResizeStyle);
a(this.originalElement);
return this
},_mouseCapture:function(b){var d,c,a=false;
for(d in this.handles){c=e(this.handles[d])[0];
if(c===b.target||e.contains(c,b.target)){a=true
}}return !this.options.disabled&&a
},_mouseStart:function(l){var a,c,b,n=this.options,m=this.element.position(),d=this.element;
this.resizing=true;
if((/absolute/).test(d.css("position"))){d.css({position:"absolute",top:d.css("top"),left:d.css("left")})
}else{if(d.is(".ui-draggable")){d.css({position:"absolute",top:m.top,left:m.left})
}}this._renderProxy();
a=g(this.helper.css("left"));
c=g(this.helper.css("top"));
if(n.containment){a+=e(n.containment).scrollLeft()||0;
c+=e(n.containment).scrollTop()||0
}this.offset=this.helper.offset();
this.position={left:a,top:c};
this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:d.width(),height:d.height()};
this.originalSize=this._helper?{width:d.outerWidth(),height:d.outerHeight()}:{width:d.width(),height:d.height()};
this.originalPosition={left:a,top:c};
this.sizeDiff={width:d.outerWidth()-d.width(),height:d.outerHeight()-d.height()};
this.originalMousePosition={left:l.pageX,top:l.pageY};
this.aspectRatio=(typeof n.aspectRatio==="number")?n.aspectRatio:((this.originalSize.width/this.originalSize.height)||1);
b=e(".ui-resizable-"+this.axis).css("cursor");
e("body").css("cursor",b==="auto"?this.axis+"-resize":b);
d.addClass("ui-resizable-resizing");
this._propagate("start",l);
return true
},_mouseDrag:function(s){var b,r=this.helper,x={},y=this.originalMousePosition,a=this.axis,v=this.position.top,u=this.position.left,w=this.size.width,t=this.size.height,c=(s.pageX-y.left)||0,d=(s.pageY-y.top)||0,z=this._change[a];
if(!z){return false
}b=z.apply(this,[s,c,d]);
this._updateVirtualBoundaries(s.shiftKey);
if(this._aspectRatio||s.shiftKey){b=this._updateRatio(b,s)
}b=this._respectSize(b,s);
this._updateCache(b);
this._propagate("resize",s);
if(this.position.top!==v){x.top=this.position.top+"px"
}if(this.position.left!==u){x.left=this.position.left+"px"
}if(this.size.width!==w){x.width=this.size.width+"px"
}if(this.size.height!==t){x.height=this.size.height+"px"
}r.css(x);
if(!this._helper&&this._proportionallyResizeElements.length){this._proportionallyResize()
}if(!e.isEmptyObject(x)){this._trigger("resize",s,this.ui())
}return false
},_mouseStop:function(a){this.resizing=false;
var o,b,q,r,p,c,t,d=this.options,s=this;
if(this._helper){o=this._proportionallyResizeElements;
b=o.length&&(/textarea/i).test(o[0].nodeName);
q=b&&e.ui.hasScroll(o[0],"left")?0:s.sizeDiff.height;
r=b?0:s.sizeDiff.width;
p={width:(s.helper.width()-r),height:(s.helper.height()-q)};
c=(parseInt(s.element.css("left"),10)+(s.position.left-s.originalPosition.left))||null;
t=(parseInt(s.element.css("top"),10)+(s.position.top-s.originalPosition.top))||null;
if(!d.animate){this.element.css(e.extend(p,{top:t,left:c}))
}s.helper.height(s.size.height);
s.helper.width(s.size.width);
if(this._helper&&!d.animate){this._proportionallyResize()
}}e("body").css("cursor","auto");
this.element.removeClass("ui-resizable-resizing");
this._propagate("stop",a);
if(this._helper){this.helper.remove()
}return false
},_updateVirtualBoundaries:function(b){var n,l,m,d,a,c=this.options;
a={minWidth:f(c.minWidth)?c.minWidth:0,maxWidth:f(c.maxWidth)?c.maxWidth:Infinity,minHeight:f(c.minHeight)?c.minHeight:0,maxHeight:f(c.maxHeight)?c.maxHeight:Infinity};
if(this._aspectRatio||b){n=a.minHeight*this.aspectRatio;
m=a.minWidth/this.aspectRatio;
l=a.maxHeight*this.aspectRatio;
d=a.maxWidth/this.aspectRatio;
if(n>a.minWidth){a.minWidth=n
}if(m>a.minHeight){a.minHeight=m
}if(l<a.maxWidth){a.maxWidth=l
}if(d<a.maxHeight){a.maxHeight=d
}}this._vBoundaries=a
},_updateCache:function(a){this.offset=this.helper.offset();
if(f(a.left)){this.position.left=a.left
}if(f(a.top)){this.position.top=a.top
}if(f(a.height)){this.size.height=a.height
}if(f(a.width)){this.size.width=a.width
}},_updateRatio:function(d){var b=this.position,c=this.size,a=this.axis;
if(f(d.height)){d.width=(d.height*this.aspectRatio)
}else{if(f(d.width)){d.height=(d.width/this.aspectRatio)
}}if(a==="sw"){d.left=b.left+(c.width-d.width);
d.top=null
}if(a==="nw"){d.top=b.top+(c.height-d.height);
d.left=b.left+(c.width-d.width)
}return d
},_respectSize:function(d){var v=this._vBoundaries,a=this.axis,s=f(d.width)&&v.maxWidth&&(v.maxWidth<d.width),r=f(d.height)&&v.maxHeight&&(v.maxHeight<d.height),u=f(d.width)&&v.minWidth&&(v.minWidth>d.width),t=f(d.height)&&v.minHeight&&(v.minHeight>d.height),q=this.originalPosition.left+this.originalSize.width,o=this.position.top+this.size.height,c=/sw|nw|w/.test(a),b=/nw|ne|n/.test(a);
if(u){d.width=v.minWidth
}if(t){d.height=v.minHeight
}if(s){d.width=v.maxWidth
}if(r){d.height=v.maxHeight
}if(u&&c){d.left=q-v.minWidth
}if(s&&c){d.left=q-v.maxWidth
}if(t&&b){d.top=o-v.minHeight
}if(r&&b){d.top=o-v.maxHeight
}if(!d.width&&!d.height&&!d.left&&d.top){d.top=null
}else{if(!d.width&&!d.height&&!d.top&&d.left){d.left=null
}}return d
},_proportionallyResize:function(){if(!this._proportionallyResizeElements.length){return
}var c,d,a,i,j,b=this.helper||this.element;
for(c=0;
c<this._proportionallyResizeElements.length;
c++){j=this._proportionallyResizeElements[c];
if(!this.borderDif){this.borderDif=[];
a=[j.css("borderTopWidth"),j.css("borderRightWidth"),j.css("borderBottomWidth"),j.css("borderLeftWidth")];
i=[j.css("paddingTop"),j.css("paddingRight"),j.css("paddingBottom"),j.css("paddingLeft")];
for(d=0;
d<a.length;
d++){this.borderDif[d]=(parseInt(a[d],10)||0)+(parseInt(i[d],10)||0)
}}j.css({height:(b.height()-this.borderDif[0]-this.borderDif[2])||0,width:(b.width()-this.borderDif[1]-this.borderDif[3])||0})
}},_renderProxy:function(){var a=this.element,b=this.options;
this.elementOffset=a.offset();
if(this._helper){this.helper=this.helper||e("<div style='overflow:hidden;'></div>");
this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++b.zIndex});
this.helper.appendTo("body").disableSelection()
}else{this.helper=this.element
}},_change:{e:function(b,a){return{width:this.originalSize.width+a}
},w:function(c,b){var a=this.originalSize,d=this.originalPosition;
return{left:d.left+b,width:a.width-b}
},n:function(d,b,c){var a=this.originalSize,j=this.originalPosition;
return{top:j.top+c,height:a.height-c}
},s:function(c,a,b){return{height:this.originalSize.height+b}
},se:function(c,a,b){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[c,a,b]))
},sw:function(c,a,b){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[c,a,b]))
},ne:function(c,a,b){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[c,a,b]))
},nw:function(c,a,b){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[c,a,b]))
}},_propagate:function(b,a){e.ui.plugin.call(this,b,[a,this.ui()]);
(b!=="resize"&&this._trigger(b,a,this.ui()))
},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}
}});
e.ui.plugin.add("resizable","animate",{stop:function(a){var s=e(this).data("ui-resizable"),d=s.options,o=s._proportionallyResizeElements,b=o.length&&(/textarea/i).test(o[0].nodeName),p=b&&e.ui.hasScroll(o[0],"left")?0:s.sizeDiff.height,q=b?0:s.sizeDiff.width,r={width:(s.size.width-q),height:(s.size.height-p)},c=(parseInt(s.element.css("left"),10)+(s.position.left-s.originalPosition.left))||null,t=(parseInt(s.element.css("top"),10)+(s.position.top-s.originalPosition.top))||null;
s.element.animate(e.extend(r,t&&c?{top:t,left:c}:{}),{duration:d.animateDuration,easing:d.animateEasing,step:function(){var i={width:parseInt(s.element.css("width"),10),height:parseInt(s.element.css("height"),10),top:parseInt(s.element.css("top"),10),left:parseInt(s.element.css("left"),10)};
if(o&&o.length){e(o[0]).css({width:i.width,height:i.height})
}s._updateCache(i);
s._propagate("resize",a)
}})
}});
e.ui.plugin.add("resizable","containment",{start:function(){var p,v,c,b,d,x,s,w=e(this).data("ui-resizable"),t=w.options,o=w.element,u=t.containment,a=(u instanceof e)?u.get(0):(/parent/.test(u))?o.parent().get(0):u;
if(!a){return
}w.containerElement=e(a);
if(/document/.test(u)||u===document){w.containerOffset={left:0,top:0};
w.containerPosition={left:0,top:0};
w.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}
}else{p=e(a);
v=[];
e(["Top","Right","Left","Bottom"]).each(function(i,j){v[i]=g(p.css("padding"+j))
});
w.containerOffset=p.offset();
w.containerPosition=p.position();
w.containerSize={height:(p.innerHeight()-v[3]),width:(p.innerWidth()-v[1])};
c=w.containerOffset;
b=w.containerSize.height;
d=w.containerSize.width;
x=(e.ui.hasScroll(a,"left")?a.scrollWidth:d);
s=(e.ui.hasScroll(a)?a.scrollHeight:b);
w.parentData={element:a,left:c.left,top:c.top,width:x,height:s}
}},resize:function(o){var x,r,t,s,w=e(this).data("ui-resizable"),u=w.options,b=w.containerOffset,d=w.position,v=w._aspectRatio||o.shiftKey,c={top:0,left:0},a=w.containerElement;
if(a[0]!==document&&(/static/).test(a.css("position"))){c=b
}if(d.left<(w._helper?b.left:0)){w.size.width=w.size.width+(w._helper?(w.position.left-b.left):(w.position.left-c.left));
if(v){w.size.height=w.size.width/w.aspectRatio
}w.position.left=u.helper?b.left:0
}if(d.top<(w._helper?b.top:0)){w.size.height=w.size.height+(w._helper?(w.position.top-b.top):w.position.top);
if(v){w.size.width=w.size.height*w.aspectRatio
}w.position.top=w._helper?b.top:0
}w.offset.left=w.parentData.left+w.position.left;
w.offset.top=w.parentData.top+w.position.top;
x=Math.abs((w._helper?w.offset.left-c.left:(w.offset.left-c.left))+w.sizeDiff.width);
r=Math.abs((w._helper?w.offset.top-c.top:(w.offset.top-b.top))+w.sizeDiff.height);
t=w.containerElement.get(0)===w.element.parent().get(0);
s=/relative|absolute/.test(w.containerElement.css("position"));
if(t&&s){x-=Math.abs(w.parentData.left)
}if(x+w.size.width>=w.parentData.width){w.size.width=w.parentData.width-x;
if(v){w.size.height=w.size.width/w.aspectRatio
}}if(r+w.size.height>=w.parentData.height){w.size.height=w.parentData.height-r;
if(v){w.size.width=w.size.height*w.aspectRatio
}}},stop:function(){var q=e(this).data("ui-resizable"),p=q.options,b=q.containerOffset,c=q.containerPosition,a=q.containerElement,n=e(q.helper),o=n.offset(),r=n.outerWidth()-q.sizeDiff.width,d=n.outerHeight()-q.sizeDiff.height;
if(q._helper&&!p.animate&&(/relative/).test(a.css("position"))){e(this).css({left:o.left-c.left-b.left,width:r,height:d})
}if(q._helper&&!p.animate&&(/static/).test(a.css("position"))){e(this).css({left:o.left-c.left-b.left,width:r,height:d})
}}});
e.ui.plugin.add("resizable","alsoResize",{start:function(){var c=e(this).data("ui-resizable"),b=c.options,a=function(d){e(d).each(function(){var j=e(this);
j.data("ui-resizable-alsoresize",{width:parseInt(j.width(),10),height:parseInt(j.height(),10),left:parseInt(j.css("left"),10),top:parseInt(j.css("top"),10)})
})
};
if(typeof(b.alsoResize)==="object"&&!b.alsoResize.parentNode){if(b.alsoResize.length){b.alsoResize=b.alsoResize[0];
a(b.alsoResize)
}else{e.each(b.alsoResize,function(d){a(d)
})
}}else{a(b.alsoResize)
}},resize:function(c,p){var o=e(this).data("ui-resizable"),d=o.options,n=o.originalSize,m=o.originalPosition,b={height:(o.size.height-n.height)||0,width:(o.size.width-n.width)||0,top:(o.position.top-m.top)||0,left:(o.position.left-m.left)||0},a=function(j,i){e(j).each(function(){var l=e(this),s=e(this).data("ui-resizable-alsoresize"),t={},k=i&&i.length?i:l.parents(p.originalElement[0]).length?["width","height"]:["width","height","top","left"];
e.each(k,function(q,r){var v=(s[r]||0)+(b[r]||0);
if(v&&v>=0){t[r]=v||null
}});
l.css(t)
})
};
if(typeof(d.alsoResize)==="object"&&!d.alsoResize.nodeType){e.each(d.alsoResize,function(j,i){a(j,i)
})
}else{a(d.alsoResize)
}},stop:function(){e(this).removeData("resizable-alsoresize")
}});
e.ui.plugin.add("resizable","ghost",{start:function(){var c=e(this).data("ui-resizable"),b=c.options,a=c.size;
c.ghost=c.originalElement.clone();
c.ghost.css({opacity:0.25,display:"block",position:"relative",height:a.height,width:a.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof b.ghost==="string"?b.ghost:"");
c.ghost.appendTo(c.helper)
},resize:function(){var a=e(this).data("ui-resizable");
if(a.ghost){a.ghost.css({position:"relative",height:a.size.height,width:a.size.width})
}},stop:function(){var a=e(this).data("ui-resizable");
if(a.ghost&&a.helper){a.helper.get(0).removeChild(a.ghost.get(0))
}}});
e.ui.plugin.add("resizable","grid",{resize:function(){var E=e(this).data("ui-resizable"),z=E.options,D=E.size,C=E.originalSize,B=E.originalPosition,a=E.axis,y=typeof z.grid==="number"?[z.grid,z.grid]:z.grid,A=(y[0]||1),G=(y[1]||1),c=Math.round((D.width-C.width)/A)*A,x=Math.round((D.height-C.height)/G)*G,F=C.width+c,o=C.height+x,b=z.maxWidth&&(z.maxWidth<F),H=z.maxHeight&&(z.maxHeight<o),w=z.minWidth&&(z.minWidth>F),d=z.minHeight&&(z.minHeight>o);
z.grid=y;
if(w){F=F+A
}if(d){o=o+G
}if(b){F=F-A
}if(H){o=o-G
}if(/^(se|s|e)$/.test(a)){E.size.width=F;
E.size.height=o
}else{if(/^(ne)$/.test(a)){E.size.width=F;
E.size.height=o;
E.position.top=B.top-x
}else{if(/^(sw)$/.test(a)){E.size.width=F;
E.size.height=o;
E.position.left=B.left-c
}else{if(o-G>0){E.size.height=o;
E.position.top=B.top-x
}else{E.size.height=G;
E.position.top=B.top+C.height-G
}if(F-A>0){E.size.width=F;
E.position.left=B.left-c
}else{E.size.width=A;
E.position.left=B.left+C.width-A
}}}}}})
})(jQuery);
(function(c,d){c.widget("ui.selectable",c.ui.mouse,{version:"1.10.4",options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var a,b=this;
this.element.addClass("ui-selectable");
this.dragged=false;
this.refresh=function(){a=c(b.options.filter,b.element[0]);
a.addClass("ui-selectee");
a.each(function(){var g=c(this),h=g.offset();
c.data(this,"selectable-item",{element:this,$element:g,left:h.left,top:h.top,right:h.left+g.outerWidth(),bottom:h.top+g.outerHeight(),startselected:false,selected:g.hasClass("ui-selected"),selecting:g.hasClass("ui-selecting"),unselecting:g.hasClass("ui-unselecting")})
})
};
this.refresh();
this.selectees=a.addClass("ui-selectee");
this._mouseInit();
this.helper=c("<div class='ui-selectable-helper'></div>")
},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");
this.element.removeClass("ui-selectable ui-selectable-disabled");
this._mouseDestroy()
},_mouseStart:function(a){var f=this,b=this.options;
this.opos=[a.pageX,a.pageY];
if(this.options.disabled){return
}this.selectees=c(b.filter,this.element[0]);
this._trigger("start",a);
c(b.appendTo).append(this.helper);
this.helper.css({left:a.pageX,top:a.pageY,width:0,height:0});
if(b.autoRefresh){this.refresh()
}this.selectees.filter(".ui-selected").each(function(){var e=c.data(this,"selectable-item");
e.startselected=true;
if(!a.metaKey&&!a.ctrlKey){e.$element.removeClass("ui-selected");
e.selected=false;
e.$element.addClass("ui-unselecting");
e.unselecting=true;
f._trigger("unselecting",a,{unselecting:e.element})
}});
c(a.target).parents().addBack().each(function(){var e,h=c.data(this,"selectable-item");
if(h){e=(!a.metaKey&&!a.ctrlKey)||!h.$element.hasClass("ui-selected");
h.$element.removeClass(e?"ui-unselecting":"ui-selected").addClass(e?"ui-selecting":"ui-unselecting");
h.unselecting=!e;
h.selecting=e;
h.selected=e;
if(e){f._trigger("selecting",a,{selecting:h.element})
}else{f._trigger("unselecting",a,{unselecting:h.element})
}return false
}})
},_mouseDrag:function(a){this.dragged=true;
if(this.options.disabled){return
}var l,k=this,b=this.options,m=this.opos[0],o=this.opos[1],n=a.pageX,p=a.pageY;
if(m>n){l=n;
n=m;
m=l
}if(o>p){l=p;
p=o;
o=l
}this.helper.css({left:m,top:o,width:n-m,height:p-o});
this.selectees.each(function(){var f=c.data(this,"selectable-item"),e=false;
if(!f||f.element===k.element[0]){return
}if(b.tolerance==="touch"){e=(!(f.left>n||f.right<m||f.top>p||f.bottom<o))
}else{if(b.tolerance==="fit"){e=(f.left>m&&f.right<n&&f.top>o&&f.bottom<p)
}}if(e){if(f.selected){f.$element.removeClass("ui-selected");
f.selected=false
}if(f.unselecting){f.$element.removeClass("ui-unselecting");
f.unselecting=false
}if(!f.selecting){f.$element.addClass("ui-selecting");
f.selecting=true;
k._trigger("selecting",a,{selecting:f.element})
}}else{if(f.selecting){if((a.metaKey||a.ctrlKey)&&f.startselected){f.$element.removeClass("ui-selecting");
f.selecting=false;
f.$element.addClass("ui-selected");
f.selected=true
}else{f.$element.removeClass("ui-selecting");
f.selecting=false;
if(f.startselected){f.$element.addClass("ui-unselecting");
f.unselecting=true
}k._trigger("unselecting",a,{unselecting:f.element})
}}if(f.selected){if(!a.metaKey&&!a.ctrlKey&&!f.startselected){f.$element.removeClass("ui-selected");
f.selected=false;
f.$element.addClass("ui-unselecting");
f.unselecting=true;
k._trigger("unselecting",a,{unselecting:f.element})
}}}});
return false
},_mouseStop:function(a){var b=this;
this.dragged=false;
c(".ui-unselecting",this.element[0]).each(function(){var f=c.data(this,"selectable-item");
f.$element.removeClass("ui-unselecting");
f.unselecting=false;
f.startselected=false;
b._trigger("unselected",a,{unselected:f.element})
});
c(".ui-selecting",this.element[0]).each(function(){var f=c.data(this,"selectable-item");
f.$element.removeClass("ui-selecting").addClass("ui-selected");
f.selecting=false;
f.selected=true;
f.startselected=true;
b._trigger("selected",a,{selected:f.element})
});
this._trigger("stop",a);
this.helper.remove();
return false
}})
})(jQuery);
(function(e,h){function g(c,a,b){return(c>a)&&(c<(a+b))
}function f(a){return(/left|right/).test(a.css("float"))||(/inline|table-cell/).test(a.css("display"))
}e.widget("ui.sortable",e.ui.mouse,{version:"1.10.4",widgetEventPrefix:"sort",ready:false,options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function(){var a=this.options;
this.containerCache={};
this.element.addClass("ui-sortable");
this.refresh();
this.floating=this.items.length?a.axis==="x"||f(this.items[0].item):false;
this.offset=this.element.offset();
this._mouseInit();
this.ready=true
},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled");
this._mouseDestroy();
for(var a=this.items.length-1;
a>=0;
a--){this.items[a].item.removeData(this.widgetName+"-item")
}return this
},_setOption:function(a,b){if(a==="disabled"){this.options[a]=b;
this.widget().toggleClass("ui-sortable-disabled",!!b)
}else{e.Widget.prototype._setOption.apply(this,arguments)
}},_mouseCapture:function(b,c){var a=null,j=false,d=this;
if(this.reverting){return false
}if(this.options.disabled||this.options.type==="static"){return false
}this._refreshItems(b);
e(b.target).parents().each(function(){if(e.data(this,d.widgetName+"-item")===d){a=e(this);
return false
}});
if(e.data(b.target,d.widgetName+"-item")===d){a=e(b.target)
}if(!a){return false
}if(this.options.handle&&!c){e(this.options.handle,a).find("*").addBack().each(function(){if(this===b.target){j=true
}});
if(!j){return false
}}this.currentItem=a;
this._removeCurrentsFromItems();
return true
},_mouseStart:function(b,l,d){var c,a,i=this.options;
this.currentContainer=this;
this.refreshPositions();
this.helper=this._createHelper(b);
this._cacheHelperProportions();
this._cacheMargins();
this.scrollParent=this.helper.scrollParent();
this.offset=this.currentItem.offset();
this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};
e.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.helper.css("position","absolute");
this.cssPosition=this.helper.css("position");
this.originalPosition=this._generatePosition(b);
this.originalPageX=b.pageX;
this.originalPageY=b.pageY;
(i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt));
this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};
if(this.helper[0]!==this.currentItem[0]){this.currentItem.hide()
}this._createPlaceholder();
if(i.containment){this._setContainment()
}if(i.cursor&&i.cursor!=="auto"){a=this.document.find("body");
this.storedCursor=a.css("cursor");
a.css("cursor",i.cursor);
this.storedStylesheet=e("<style>*{ cursor: "+i.cursor+" !important; }</style>").appendTo(a)
}if(i.opacity){if(this.helper.css("opacity")){this._storedOpacity=this.helper.css("opacity")
}this.helper.css("opacity",i.opacity)
}if(i.zIndex){if(this.helper.css("zIndex")){this._storedZIndex=this.helper.css("zIndex")
}this.helper.css("zIndex",i.zIndex)
}if(this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"){this.overflowOffset=this.scrollParent.offset()
}this._trigger("start",b,this._uiHash());
if(!this._preserveHelperProportions){this._cacheHelperProportions()
}if(!d){for(c=this.containers.length-1;
c>=0;
c--){this.containers[c]._trigger("activate",b,this._uiHash(this))
}}if(e.ui.ddmanager){e.ui.ddmanager.current=this
}if(e.ui.ddmanager&&!i.dropBehaviour){e.ui.ddmanager.prepareOffsets(this,b)
}this.dragging=true;
this.helper.addClass("ui-sortable-helper");
this._mouseDrag(b);
return true
},_mouseDrag:function(a){var b,d,i,c,m=this.options,n=false;
this.position=this._generatePosition(a);
this.positionAbs=this._convertPositionTo("absolute");
if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs
}if(this.options.scroll){if(this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"){if((this.overflowOffset.top+this.scrollParent[0].offsetHeight)-a.pageY<m.scrollSensitivity){this.scrollParent[0].scrollTop=n=this.scrollParent[0].scrollTop+m.scrollSpeed
}else{if(a.pageY-this.overflowOffset.top<m.scrollSensitivity){this.scrollParent[0].scrollTop=n=this.scrollParent[0].scrollTop-m.scrollSpeed
}}if((this.overflowOffset.left+this.scrollParent[0].offsetWidth)-a.pageX<m.scrollSensitivity){this.scrollParent[0].scrollLeft=n=this.scrollParent[0].scrollLeft+m.scrollSpeed
}else{if(a.pageX-this.overflowOffset.left<m.scrollSensitivity){this.scrollParent[0].scrollLeft=n=this.scrollParent[0].scrollLeft-m.scrollSpeed
}}}else{if(a.pageY-e(document).scrollTop()<m.scrollSensitivity){n=e(document).scrollTop(e(document).scrollTop()-m.scrollSpeed)
}else{if(e(window).height()-(a.pageY-e(document).scrollTop())<m.scrollSensitivity){n=e(document).scrollTop(e(document).scrollTop()+m.scrollSpeed)
}}if(a.pageX-e(document).scrollLeft()<m.scrollSensitivity){n=e(document).scrollLeft(e(document).scrollLeft()-m.scrollSpeed)
}else{if(e(window).width()-(a.pageX-e(document).scrollLeft())<m.scrollSensitivity){n=e(document).scrollLeft(e(document).scrollLeft()+m.scrollSpeed)
}}}if(n!==false&&e.ui.ddmanager&&!m.dropBehaviour){e.ui.ddmanager.prepareOffsets(this,a)
}}this.positionAbs=this._convertPositionTo("absolute");
if(!this.options.axis||this.options.axis!=="y"){this.helper[0].style.left=this.position.left+"px"
}if(!this.options.axis||this.options.axis!=="x"){this.helper[0].style.top=this.position.top+"px"
}for(b=this.items.length-1;
b>=0;
b--){d=this.items[b];
i=d.item[0];
c=this._intersectsWithPointer(d);
if(!c){continue
}if(d.instance!==this.currentContainer){continue
}if(i!==this.currentItem[0]&&this.placeholder[c===1?"next":"prev"]()[0]!==i&&!e.contains(this.placeholder[0],i)&&(this.options.type==="semi-dynamic"?!e.contains(this.element[0],i):true)){this.direction=c===1?"down":"up";
if(this.options.tolerance==="pointer"||this._intersectsWithSides(d)){this._rearrange(a,d)
}else{break
}this._trigger("change",a,this._uiHash());
break
}}this._contactContainers(a);
if(e.ui.ddmanager){e.ui.ddmanager.drag(this,a)
}this._trigger("sort",a,this._uiHash());
this.lastPositionAbs=this.positionAbs;
return false
},_mouseStop:function(d,k){if(!d){return
}if(e.ui.ddmanager&&!this.options.dropBehaviour){e.ui.ddmanager.drop(this,d)
}if(this.options.revert){var l=this,c=this.placeholder.offset(),b=this.options.axis,a={};
if(!b||b==="x"){a.left=c.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)
}if(!b||b==="y"){a.top=c.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)
}this.reverting=true;
e(this.helper).animate(a,parseInt(this.options.revert,10)||500,function(){l._clear(d)
})
}else{this._clear(d,k)
}return false
},cancel:function(){if(this.dragging){this._mouseUp({target:null});
if(this.options.helper==="original"){this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
}else{this.currentItem.show()
}for(var a=this.containers.length-1;
a>=0;
a--){this.containers[a]._trigger("deactivate",null,this._uiHash(this));
if(this.containers[a].containerCache.over){this.containers[a]._trigger("out",null,this._uiHash(this));
this.containers[a].containerCache.over=0
}}}if(this.placeholder){if(this.placeholder[0].parentNode){this.placeholder[0].parentNode.removeChild(this.placeholder[0])
}if(this.options.helper!=="original"&&this.helper&&this.helper[0].parentNode){this.helper.remove()
}e.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});
if(this.domPosition.prev){e(this.domPosition.prev).after(this.currentItem)
}else{e(this.domPosition.parent).prepend(this.currentItem)
}}return this
},serialize:function(b){var a=this._getItemsAsjQuery(b&&b.connected),c=[];
b=b||{};
e(a).each(function(){var d=(e(b.item||this).attr(b.attribute||"id")||"").match(b.expression||(/(.+)[\-=_](.+)/));
if(d){c.push((b.key||d[1]+"[]")+"="+(b.key&&b.expression?d[1]:d[2]))
}});
if(!c.length&&b.key){c.push(b.key+"=")
}return c.join("&")
},toArray:function(b){var a=this._getItemsAsjQuery(b&&b.connected),c=[];
b=b||{};
a.each(function(){c.push(e(b.item||this).attr(b.attribute||"id")||"")
});
return c
},_intersectsWith:function(l){var w=this.positionAbs.left,B=w+this.helperProportions.width,y=this.positionAbs.top,d=y+this.helperProportions.height,x=l.left,t=x+l.width,z=l.top,a=z+l.height,b=this.offset.click.top,A=this.offset.click.left,c=(this.options.axis==="x")||((y+b)>z&&(y+b)<a),v=(this.options.axis==="y")||((w+A)>x&&(w+A)<t),r=c&&v;
if(this.options.tolerance==="pointer"||this.options.forcePointerForContainers||(this.options.tolerance!=="pointer"&&this.helperProportions[this.floating?"width":"height"]>l[this.floating?"width":"height"])){return r
}else{return(x<w+(this.helperProportions.width/2)&&B-(this.helperProportions.width/2)<t&&z<y+(this.helperProportions.height/2)&&d-(this.helperProportions.height/2)<a)
}},_intersectsWithPointer:function(k){var c=(this.options.axis==="x")||g(this.positionAbs.top+this.offset.click.top,k.top,k.height),d=(this.options.axis==="y")||g(this.positionAbs.left+this.offset.click.left,k.left,k.width),b=c&&d,l=this._getDragVerticalDirection(),a=this._getDragHorizontalDirection();
if(!b){return false
}return this.floating?(((a&&a==="right")||l==="down")?2:1):(l&&(l==="down"?2:1))
},_intersectsWithSides:function(d){var b=g(this.positionAbs.top+this.offset.click.top,d.top+(d.height/2),d.height),c=g(this.positionAbs.left+this.offset.click.left,d.left+(d.width/2),d.width),j=this._getDragVerticalDirection(),a=this._getDragHorizontalDirection();
if(this.floating&&a){return((a==="right"&&c)||(a==="left"&&!c))
}else{return j&&((j==="down"&&b)||(j==="up"&&!b))
}},_getDragVerticalDirection:function(){var a=this.positionAbs.top-this.lastPositionAbs.top;
return a!==0&&(a>0?"down":"up")
},_getDragHorizontalDirection:function(){var a=this.positionAbs.left-this.lastPositionAbs.left;
return a!==0&&(a>0?"right":"left")
},refresh:function(a){this._refreshItems(a);
this.refreshPositions();
return this
},_connectWith:function(){var a=this.options;
return a.connectWith.constructor===String?[a.connectWith]:a.connectWith
},_getItemsAsjQuery:function(b){var i,q,d,j,p=[],r=[],c=this._connectWith();
if(c&&b){for(i=c.length-1;
i>=0;
i--){d=e(c[i]);
for(q=d.length-1;
q>=0;
q--){j=e.data(d[q],this.widgetFullName);
if(j&&j!==this&&!j.options.disabled){r.push([e.isFunction(j.options.items)?j.options.items.call(j.element):e(j.options.items,j.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),j])
}}}}r.push([e.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):e(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);
function a(){p.push(this)
}for(i=r.length-1;
i>=0;
i--){r[i][0].each(a)
}return e(p)
},_removeCurrentsFromItems:function(){var a=this.currentItem.find(":data("+this.widgetName+"-item)");
this.items=e.grep(this.items,function(b){for(var c=0;
c<a.length;
c++){if(a[c]===b.item[0]){return false
}}return true
})
},_refreshItems:function(d){this.items=[];
this.containers=[this];
var i,u,c,j,x,a,s,w,t=this.items,v=[[e.isFunction(this.options.items)?this.options.items.call(this.element[0],d,{item:this.currentItem}):e(this.options.items,this.element),this]],b=this._connectWith();
if(b&&this.ready){for(i=b.length-1;
i>=0;
i--){c=e(b[i]);
for(u=c.length-1;
u>=0;
u--){j=e.data(c[u],this.widgetFullName);
if(j&&j!==this&&!j.options.disabled){v.push([e.isFunction(j.options.items)?j.options.items.call(j.element[0],d,{item:this.currentItem}):e(j.options.items,j.element),j]);
this.containers.push(j)
}}}}for(i=v.length-1;
i>=0;
i--){x=v[i][1];
a=v[i][0];
for(u=0,w=a.length;
u<w;
u++){s=e(a[u]);
s.data(this.widgetName+"-item",x);
t.push({item:s,instance:x,width:0,height:0,left:0,top:0})
}}},refreshPositions:function(a){if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset()
}var b,c,i,d;
for(b=this.items.length-1;
b>=0;
b--){c=this.items[b];
if(c.instance!==this.currentContainer&&this.currentContainer&&c.item[0]!==this.currentItem[0]){continue
}i=this.options.toleranceElement?e(this.options.toleranceElement,c.item):c.item;
if(!a){c.width=i.outerWidth();
c.height=i.outerHeight()
}d=i.offset();
c.left=d.left;
c.top=d.top
}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)
}else{for(b=this.containers.length-1;
b>=0;
b--){d=this.containers[b].element.offset();
this.containers[b].containerCache.left=d.left;
this.containers[b].containerCache.top=d.top;
this.containers[b].containerCache.width=this.containers[b].element.outerWidth();
this.containers[b].containerCache.height=this.containers[b].element.outerHeight()
}}return this
},_createPlaceholder:function(c){c=c||this;
var a,b=c.options;
if(!b.placeholder||b.placeholder.constructor===String){a=b.placeholder;
b.placeholder={element:function(){var j=c.currentItem[0].nodeName.toLowerCase(),d=e("<"+j+">",c.document[0]).addClass(a||c.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");
if(j==="tr"){c.currentItem.children().each(function(){e("<td>&#160;</td>",c.document[0]).attr("colspan",e(this).attr("colspan")||1).appendTo(d)
})
}else{if(j==="img"){d.attr("src",c.currentItem.attr("src"))
}}if(!a){d.css("visibility","hidden")
}return d
},update:function(d,j){if(a&&!b.forcePlaceholderSize){return
}if(!j.height()){j.height(c.currentItem.innerHeight()-parseInt(c.currentItem.css("paddingTop")||0,10)-parseInt(c.currentItem.css("paddingBottom")||0,10))
}if(!j.width()){j.width(c.currentItem.innerWidth()-parseInt(c.currentItem.css("paddingLeft")||0,10)-parseInt(c.currentItem.css("paddingRight")||0,10))
}}}
}c.placeholder=e(b.placeholder.element.call(c.element,c.currentItem));
c.currentItem.after(c.placeholder);
b.placeholder.update(c,c.placeholder)
},_contactContainers:function(d){var j,w,c,v,y,z,a,b,x,i,t=null,u=null;
for(j=this.containers.length-1;
j>=0;
j--){if(e.contains(this.currentItem[0],this.containers[j].element[0])){continue
}if(this._intersectsWith(this.containers[j].containerCache)){if(t&&e.contains(this.containers[j].element[0],t.element[0])){continue
}t=this.containers[j];
u=j
}else{if(this.containers[j].containerCache.over){this.containers[j]._trigger("out",d,this._uiHash(this));
this.containers[j].containerCache.over=0
}}}if(!t){return
}if(this.containers.length===1){if(!this.containers[u].containerCache.over){this.containers[u]._trigger("over",d,this._uiHash(this));
this.containers[u].containerCache.over=1
}}else{c=10000;
v=null;
i=t.floating||f(this.currentItem);
y=i?"left":"top";
z=i?"width":"height";
a=this.positionAbs[y]+this.offset.click[y];
for(w=this.items.length-1;
w>=0;
w--){if(!e.contains(this.containers[u].element[0],this.items[w].item[0])){continue
}if(this.items[w].item[0]===this.currentItem[0]){continue
}if(i&&!g(this.positionAbs.top+this.offset.click.top,this.items[w].top,this.items[w].height)){continue
}b=this.items[w].item.offset()[y];
x=false;
if(Math.abs(b-a)>Math.abs(b+this.items[w][z]-a)){x=true;
b+=this.items[w][z]
}if(Math.abs(b-a)<c){c=Math.abs(b-a);
v=this.items[w];
this.direction=x?"up":"down"
}}if(!v&&!this.options.dropOnEmpty){return
}if(this.currentContainer===this.containers[u]){return
}v?this._rearrange(d,v,null,true):this._rearrange(d,null,this.containers[u].element,true);
this._trigger("change",d,this._uiHash());
this.containers[u]._trigger("change",d,this._uiHash(this));
this.currentContainer=this.containers[u];
this.options.placeholder.update(this.currentContainer,this.placeholder);
this.containers[u]._trigger("over",d,this._uiHash(this));
this.containers[u].containerCache.over=1
}},_createHelper:function(a){var c=this.options,b=e.isFunction(c.helper)?e(c.helper.apply(this.element[0],[a,this.currentItem])):(c.helper==="clone"?this.currentItem.clone():this.currentItem);
if(!b.parents("body").length){e(c.appendTo!=="parent"?c.appendTo:this.currentItem[0].parentNode)[0].appendChild(b[0])
}if(b[0]===this.currentItem[0]){this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}
}if(!b[0].style.width||c.forceHelperSize){b.width(this.currentItem.width())
}if(!b[0].style.height||c.forceHelperSize){b.height(this.currentItem.height())
}return b
},_adjustOffsetFromHelper:function(a){if(typeof a==="string"){a=a.split(" ")
}if(e.isArray(a)){a={left:+a[0],top:+a[1]||0}
}if("left" in a){this.offset.click.left=a.left+this.margins.left
}if("right" in a){this.offset.click.left=this.helperProportions.width-a.right+this.margins.left
}if("top" in a){this.offset.click.top=a.top+this.margins.top
}if("bottom" in a){this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top
}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();
var a=this.offsetParent.offset();
if(this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])){a.left+=this.scrollParent.scrollLeft();
a.top+=this.scrollParent.scrollTop()
}if(this.offsetParent[0]===document.body||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&e.ui.ie)){a={top:0,left:0}
}return{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var a=this.currentItem.position();
return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
}else{return{top:0,left:0}
}},_cacheMargins:function(){this.margins={left:(parseInt(this.currentItem.css("marginLeft"),10)||0),top:(parseInt(this.currentItem.css("marginTop"),10)||0)}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var a,b,d,c=this.options;
if(c.containment==="parent"){c.containment=this.helper[0].parentNode
}if(c.containment==="document"||c.containment==="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,e(c.containment==="document"?document:window).width()-this.helperProportions.width-this.margins.left,(e(c.containment==="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]
}if(!(/^(document|window|parent)$/).test(c.containment)){a=e(c.containment)[0];
b=e(c.containment).offset();
d=(e(a).css("overflow")!=="hidden");
this.containment=[b.left+(parseInt(e(a).css("borderLeftWidth"),10)||0)+(parseInt(e(a).css("paddingLeft"),10)||0)-this.margins.left,b.top+(parseInt(e(a).css("borderTopWidth"),10)||0)+(parseInt(e(a).css("paddingTop"),10)||0)-this.margins.top,b.left+(d?Math.max(a.scrollWidth,a.offsetWidth):a.offsetWidth)-(parseInt(e(a).css("borderLeftWidth"),10)||0)-(parseInt(e(a).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,b.top+(d?Math.max(a.scrollHeight,a.offsetHeight):a.offsetHeight)-(parseInt(e(a).css("borderTopWidth"),10)||0)-(parseInt(e(a).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]
}},_convertPositionTo:function(a,c){if(!c){c=this.position
}var b=a==="absolute"?1:-1,d=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,j=(/(html|body)/i).test(d[0].tagName);
return{top:(c.top+this.offset.relative.top*b+this.offset.parent.top*b-((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():(j?0:d.scrollTop()))*b)),left:(c.left+this.offset.relative.left*b+this.offset.parent.left*b-((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():j?0:d.scrollLeft())*b))}
},_generatePosition:function(a){var p,b,c=this.options,d=a.pageX,m=a.pageY,n=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,o=(/(html|body)/i).test(n[0].tagName);
if(this.cssPosition==="relative"&&!(this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0])){this.offset.relative=this._getRelativeOffset()
}if(this.originalPosition){if(this.containment){if(a.pageX-this.offset.click.left<this.containment[0]){d=this.containment[0]+this.offset.click.left
}if(a.pageY-this.offset.click.top<this.containment[1]){m=this.containment[1]+this.offset.click.top
}if(a.pageX-this.offset.click.left>this.containment[2]){d=this.containment[2]+this.offset.click.left
}if(a.pageY-this.offset.click.top>this.containment[3]){m=this.containment[3]+this.offset.click.top
}}if(c.grid){p=this.originalPageY+Math.round((m-this.originalPageY)/c.grid[1])*c.grid[1];
m=this.containment?((p-this.offset.click.top>=this.containment[1]&&p-this.offset.click.top<=this.containment[3])?p:((p-this.offset.click.top>=this.containment[1])?p-c.grid[1]:p+c.grid[1])):p;
b=this.originalPageX+Math.round((d-this.originalPageX)/c.grid[0])*c.grid[0];
d=this.containment?((b-this.offset.click.left>=this.containment[0]&&b-this.offset.click.left<=this.containment[2])?b:((b-this.offset.click.left>=this.containment[0])?b-c.grid[0]:b+c.grid[0])):b
}}return{top:(m-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():(o?0:n.scrollTop())))),left:(d-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():o?0:n.scrollLeft())))}
},_rearrange:function(c,i,a,d){a?a[0].appendChild(this.placeholder[0]):i.item[0].parentNode.insertBefore(this.placeholder[0],(this.direction==="down"?i.item[0]:i.item[0].nextSibling));
this.counter=this.counter?++this.counter:1;
var b=this.counter;
this._delay(function(){if(b===this.counter){this.refreshPositions(!d)
}})
},_clear:function(c,i){this.reverting=false;
var d,a=[];
if(!this._noFinalSort&&this.currentItem.parent().length){this.placeholder.before(this.currentItem)
}this._noFinalSort=null;
if(this.helper[0]===this.currentItem[0]){for(d in this._storedCSS){if(this._storedCSS[d]==="auto"||this._storedCSS[d]==="static"){this._storedCSS[d]=""
}}this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
}else{this.currentItem.show()
}if(this.fromOutside&&!i){a.push(function(j){this._trigger("receive",j,this._uiHash(this.fromOutside))
})
}if((this.fromOutside||this.domPosition.prev!==this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!==this.currentItem.parent()[0])&&!i){a.push(function(j){this._trigger("update",j,this._uiHash())
})
}if(this!==this.currentContainer){if(!i){a.push(function(j){this._trigger("remove",j,this._uiHash())
});
a.push((function(j){return function(l){j._trigger("receive",l,this._uiHash(this))
}
}).call(this,this.currentContainer));
a.push((function(j){return function(l){j._trigger("update",l,this._uiHash(this))
}
}).call(this,this.currentContainer))
}}function b(n,m,j){return function(k){j._trigger(n,k,m._uiHash(m))
}
}for(d=this.containers.length-1;
d>=0;
d--){if(!i){a.push(b("deactivate",this,this.containers[d]))
}if(this.containers[d].containerCache.over){a.push(b("out",this,this.containers[d]));
this.containers[d].containerCache.over=0
}}if(this.storedCursor){this.document.find("body").css("cursor",this.storedCursor);
this.storedStylesheet.remove()
}if(this._storedOpacity){this.helper.css("opacity",this._storedOpacity)
}if(this._storedZIndex){this.helper.css("zIndex",this._storedZIndex==="auto"?"":this._storedZIndex)
}this.dragging=false;
if(this.cancelHelperRemoval){if(!i){this._trigger("beforeStop",c,this._uiHash());
for(d=0;
d<a.length;
d++){a[d].call(this,c)
}this._trigger("stop",c,this._uiHash())
}this.fromOutside=false;
return false
}if(!i){this._trigger("beforeStop",c,this._uiHash())
}this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
if(this.helper[0]!==this.currentItem[0]){this.helper.remove()
}this.helper=null;
if(!i){for(d=0;
d<a.length;
d++){a[d].call(this,c)
}this._trigger("stop",c,this._uiHash())
}this.fromOutside=false;
return true
},_trigger:function(){if(e.Widget.prototype._trigger.apply(this,arguments)===false){this.cancel()
}},_uiHash:function(a){var b=a||this;
return{helper:b.helper,placeholder:b.placeholder||e([]),position:b.position,originalPosition:b.originalPosition,offset:b.positionAbs,item:b.currentItem,sender:a?a.element:null}
}})
})(jQuery);
(function(f,j){var i=0,g={},h={};
g.height=g.paddingTop=g.paddingBottom=g.borderTopWidth=g.borderBottomWidth="hide";
h.height=h.paddingTop=h.paddingBottom=h.borderTopWidth=h.borderBottomWidth="show";
f.widget("ui.accordion",{version:"1.10.4",options:{active:0,animate:{},collapsible:false,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var a=this.options;
this.prevShow=this.prevHide=f();
this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist");
if(!a.collapsible&&(a.active===false||a.active==null)){a.active=0
}this._processPanels();
if(a.active<0){a.active+=this.headers.length
}this._refresh()
},_getCreateEventData:function(){return{header:this.active,panel:!this.active.length?f():this.active.next(),content:!this.active.length?f():this.active.next()}
},_createIcons:function(){var a=this.options.icons;
if(a){f("<span>").addClass("ui-accordion-header-icon ui-icon "+a.header).prependTo(this.headers);
this.active.children(".ui-accordion-header-icon").removeClass(a.header).addClass(a.activeHeader);
this.headers.addClass("ui-accordion-icons")
}},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
},_destroy:function(){var a;
this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){if(/^ui-accordion/.test(this.id)){this.removeAttribute("id")
}});
this._destroyIcons();
a=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){if(/^ui-accordion/.test(this.id)){this.removeAttribute("id")
}});
if(this.options.heightStyle!=="content"){a.css("height","")
}},_setOption:function(a,b){if(a==="active"){this._activate(b);
return
}if(a==="event"){if(this.options.event){this._off(this.headers,this.options.event)
}this._setupEvents(b)
}this._super(a,b);
if(a==="collapsible"&&!b&&this.options.active===false){this._activate(0)
}if(a==="icons"){this._destroyIcons();
if(b){this._createIcons()
}}if(a==="disabled"){this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!b)
}},_keydown:function(b){if(b.altKey||b.ctrlKey){return
}var c=f.ui.keyCode,d=this.headers.length,a=this.headers.index(b.target),e=false;
switch(b.keyCode){case c.RIGHT:case c.DOWN:e=this.headers[(a+1)%d];
break;
case c.LEFT:case c.UP:e=this.headers[(a-1+d)%d];
break;
case c.SPACE:case c.ENTER:this._eventHandler(b);
break;
case c.HOME:e=this.headers[0];
break;
case c.END:e=this.headers[d-1];
break
}if(e){f(b.target).attr("tabIndex",-1);
f(e).attr("tabIndex",0);
e.focus();
b.preventDefault()
}},_panelKeyDown:function(a){if(a.keyCode===f.ui.keyCode.UP&&a.ctrlKey){f(a.currentTarget).prev().focus()
}},refresh:function(){var a=this.options;
this._processPanels();
if((a.active===false&&a.collapsible===true)||!this.headers.length){a.active=false;
this.active=f()
}else{if(a.active===false){this._activate(0)
}else{if(this.active.length&&!f.contains(this.element[0],this.active[0])){if(this.headers.length===this.headers.find(".ui-state-disabled").length){a.active=false;
this.active=f()
}else{this._activate(Math.max(0,a.active-1))
}}else{a.active=this.headers.index(this.active)
}}}this._destroyIcons();
this._refresh()
},_processPanels:function(){this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all");
this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
},_refresh:function(){var c,d=this.options,b=d.heightStyle,e=this.element.parent(),a=this.accordionId="ui-accordion-"+(this.element.attr("id")||++i);
this.active=this._findActive(d.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all");
this.active.next().addClass("ui-accordion-content-active").show();
this.headers.attr("role","tab").each(function(r){var p=f(this),q=p.attr("id"),s=p.next(),t=s.attr("id");
if(!q){q=a+"-header-"+r;
p.attr("id",q)
}if(!t){t=a+"-panel-"+r;
s.attr("id",t)
}p.attr("aria-controls",t);
s.attr("aria-labelledby",q)
}).next().attr("role","tabpanel");
this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide();
if(!this.active.length){this.headers.eq(0).attr("tabIndex",0)
}else{this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"})
}this._createIcons();
this._setupEvents(d.event);
if(b==="fill"){c=e.height();
this.element.siblings(":visible").each(function(){var m=f(this),n=m.css("position");
if(n==="absolute"||n==="fixed"){return
}c-=m.outerHeight(true)
});
this.headers.each(function(){c-=f(this).outerHeight(true)
});
this.headers.next().each(function(){f(this).height(Math.max(0,c-f(this).innerHeight()+f(this).height()))
}).css("overflow","auto")
}else{if(b==="auto"){c=0;
this.headers.next().each(function(){c=Math.max(c,f(this).css("height","").height())
}).height(c)
}}},_activate:function(b){var a=this._findActive(b)[0];
if(a===this.active[0]){return
}a=a||this.active[0];
this._eventHandler({target:a,currentTarget:a,preventDefault:f.noop})
},_findActive:function(a){return typeof a==="number"?this.headers.eq(a):f()
},_setupEvents:function(a){var b={keydown:"_keydown"};
if(a){f.each(a.split(" "),function(d,c){b[c]="_eventHandler"
})
}this._off(this.headers.add(this.headers.next()));
this._on(this.headers,b);
this._on(this.headers.next(),{keydown:"_panelKeyDown"});
this._hoverable(this.headers);
this._focusable(this.headers)
},_eventHandler:function(e){var p=this.options,a=this.active,b=f(e.currentTarget),c=b[0]===a[0],d=c&&p.collapsible,r=d?f():b.next(),q=a.next(),o={oldHeader:a,oldPanel:q,newHeader:d?f():b,newPanel:r};
e.preventDefault();
if((c&&!p.collapsible)||(this._trigger("beforeActivate",e,o)===false)){return
}p.active=d?false:this.headers.index(b);
this.active=c?f():b;
this._toggle(o);
a.removeClass("ui-accordion-header-active ui-state-active");
if(p.icons){a.children(".ui-accordion-header-icon").removeClass(p.icons.activeHeader).addClass(p.icons.header)
}if(!c){b.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top");
if(p.icons){b.children(".ui-accordion-header-icon").removeClass(p.icons.header).addClass(p.icons.activeHeader)
}b.next().addClass("ui-accordion-content-active")
}},_toggle:function(a){var c=a.newPanel,b=this.prevShow.length?this.prevShow:a.oldPanel;
this.prevShow.add(this.prevHide).stop(true,true);
this.prevShow=c;
this.prevHide=b;
if(this.options.animate){this._animate(c,b,a)
}else{b.hide();
c.show();
this._toggleComplete(a)
}b.attr({"aria-hidden":"true"});
b.prev().attr("aria-selected","false");
if(c.length&&b.length){b.prev().attr({tabIndex:-1,"aria-expanded":"false"})
}else{if(c.length){this.headers.filter(function(){return f(this).attr("tabIndex")===0
}).attr("tabIndex",-1)
}}c.attr("aria-hidden","false").prev().attr({"aria-selected":"true",tabIndex:0,"aria-expanded":"true"})
},_animate:function(w,v,d){var x,s,r,u=this,a=0,e=w.length&&(!v.length||(w.index()<v.index())),b=this.options.animate||{},t=e&&b.down||b,c=function(){u._toggleComplete(d)
};
if(typeof t==="number"){r=t
}if(typeof t==="string"){s=t
}s=s||t.easing||b.easing;
r=r||t.duration||b.duration;
if(!v.length){return w.animate(h,r,s,c)
}if(!w.length){return v.animate(g,r,s,c)
}x=w.show().outerHeight();
v.animate(g,{duration:r,easing:s,step:function(l,k){k.now=Math.round(l)
}});
w.hide().animate(h,{duration:r,easing:s,complete:c,step:function(l,k){k.now=Math.round(l);
if(k.prop!=="height"){a+=k.now
}else{if(u.options.heightStyle!=="content"){k.now=Math.round(x-v.outerHeight()-a);
a=0
}}}})
},_toggleComplete:function(a){var b=a.oldPanel;
b.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");
if(b.length){b.parent()[0].className=b.parent()[0].className
}this._trigger("activate",null,a)
}})
})(jQuery);
(function(c,d){c.widget("ui.autocomplete",{version:"1.10.4",defaultElement:"<input>",options:{appendTo:null,autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var k,l,j,i=this.element[0].nodeName.toLowerCase(),b=i==="textarea",a=i==="input";
this.isMultiLine=b?true:a?false:this.element.prop("isContentEditable");
this.valueMethod=this.element[b||a?"val":"text"];
this.isNewMenu=true;
this.element.addClass("ui-autocomplete-input").attr("autocomplete","off");
this._on(this.element,{keydown:function(e){if(this.element.prop("readOnly")){k=true;
j=true;
l=true;
return
}k=false;
j=false;
l=false;
var f=c.ui.keyCode;
switch(e.keyCode){case f.PAGE_UP:k=true;
this._move("previousPage",e);
break;
case f.PAGE_DOWN:k=true;
this._move("nextPage",e);
break;
case f.UP:k=true;
this._keyEvent("previous",e);
break;
case f.DOWN:k=true;
this._keyEvent("next",e);
break;
case f.ENTER:case f.NUMPAD_ENTER:if(this.menu.active){k=true;
e.preventDefault();
this.menu.select(e)
}break;
case f.TAB:if(this.menu.active){this.menu.select(e)
}break;
case f.ESCAPE:if(this.menu.element.is(":visible")){this._value(this.term);
this.close(e);
e.preventDefault()
}break;
default:l=true;
this._searchTimeout(e);
break
}},keypress:function(e){if(k){k=false;
if(!this.isMultiLine||this.menu.element.is(":visible")){e.preventDefault()
}return
}if(l){return
}var f=c.ui.keyCode;
switch(e.keyCode){case f.PAGE_UP:this._move("previousPage",e);
break;
case f.PAGE_DOWN:this._move("nextPage",e);
break;
case f.UP:this._keyEvent("previous",e);
break;
case f.DOWN:this._keyEvent("next",e);
break
}},input:function(e){if(j){j=false;
e.preventDefault();
return
}this._searchTimeout(e)
},focus:function(){this.selectedItem=null;
this.previous=this._value()
},blur:function(e){if(this.cancelBlur){delete this.cancelBlur;
return
}clearTimeout(this.searching);
this.close(e);
this._change(e)
}});
this._initSource();
this.menu=c("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().data("ui-menu");
this._on(this.menu.element,{mousedown:function(e){e.preventDefault();
this.cancelBlur=true;
this._delay(function(){delete this.cancelBlur
});
var f=this.menu.element[0];
if(!c(e.target).closest(".ui-menu-item").length){this._delay(function(){var g=this;
this.document.one("mousedown",function(h){if(h.target!==g.element[0]&&h.target!==f&&!c.contains(f,h.target)){g.close()
}})
})
}},menufocus:function(e,g){if(this.isNewMenu){this.isNewMenu=false;
if(e.originalEvent&&/^mouse/.test(e.originalEvent.type)){this.menu.blur();
this.document.one("mousemove",function(){c(e.target).trigger(e.originalEvent)
});
return
}}var f=g.item.data("ui-autocomplete-item");
if(false!==this._trigger("focus",e,{item:f})){if(e.originalEvent&&/^key/.test(e.originalEvent.type)){this._value(f.value)
}}else{this.liveRegion.text(f.value)
}},menuselect:function(e,h){var f=h.item.data("ui-autocomplete-item"),g=this.previous;
if(this.element[0]!==this.document[0].activeElement){this.element.focus();
this.previous=g;
this._delay(function(){this.previous=g;
this.selectedItem=f
})
}if(false!==this._trigger("select",e,{item:f})){this._value(f.value)
}this.term=this._value();
this.close(e);
this.selectedItem=f
}});
this.liveRegion=c("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertBefore(this.element);
this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")
}})
},_destroy:function(){clearTimeout(this.searching);
this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");
this.menu.element.remove();
this.liveRegion.remove()
},_setOption:function(a,b){this._super(a,b);
if(a==="source"){this._initSource()
}if(a==="appendTo"){this.menu.element.appendTo(this._appendTo())
}if(a==="disabled"&&b&&this.xhr){this.xhr.abort()
}},_appendTo:function(){var a=this.options.appendTo;
if(a){a=a.jquery||a.nodeType?c(a):this.document.find(a).eq(0)
}if(!a){a=this.element.closest(".ui-front")
}if(!a.length){a=this.document[0].body
}return a
},_initSource:function(){var a,f,b=this;
if(c.isArray(this.options.source)){a=this.options.source;
this.source=function(e,h){h(c.ui.autocomplete.filter(a,e.term))
}
}else{if(typeof this.options.source==="string"){f=this.options.source;
this.source=function(e,h){if(b.xhr){b.xhr.abort()
}b.xhr=c.ajax({url:f,data:e,dataType:"json",success:function(g){h(g)
},error:function(){h([])
}})
}
}else{this.source=this.options.source
}}},_searchTimeout:function(a){clearTimeout(this.searching);
this.searching=this._delay(function(){if(this.term!==this._value()){this.selectedItem=null;
this.search(null,a)
}},this.options.delay)
},search:function(b,a){b=b!=null?b:this._value();
this.term=this._value();
if(b.length<this.options.minLength){return this.close(a)
}if(this._trigger("search",a)===false){return
}return this._search(b)
},_search:function(a){this.pending++;
this.element.addClass("ui-autocomplete-loading");
this.cancelSearch=false;
this.source({term:a},this._response())
},_response:function(){var a=++this.requestIndex;
return c.proxy(function(b){if(a===this.requestIndex){this.__response(b)
}this.pending--;
if(!this.pending){this.element.removeClass("ui-autocomplete-loading")
}},this)
},__response:function(a){if(a){a=this._normalize(a)
}this._trigger("response",null,{content:a});
if(!this.options.disabled&&a&&a.length&&!this.cancelSearch){this._suggest(a);
this._trigger("open")
}else{this._close()
}},close:function(a){this.cancelSearch=true;
this._close(a)
},_close:function(a){if(this.menu.element.is(":visible")){this.menu.element.hide();
this.menu.blur();
this.isNewMenu=true;
this._trigger("close",a)
}},_change:function(a){if(this.previous!==this._value()){this._trigger("change",a,{item:this.selectedItem})
}},_normalize:function(a){if(a.length&&a[0].label&&a[0].value){return a
}return c.map(a,function(b){if(typeof b==="string"){return{label:b,value:b}
}return c.extend({label:b.label||b.value,value:b.value||b.label},b)
})
},_suggest:function(a){var b=this.menu.element.empty();
this._renderMenu(b,a);
this.isNewMenu=true;
this.menu.refresh();
b.show();
this._resizeMenu();
b.position(c.extend({of:this.element},this.options.position));
if(this.options.autoFocus){this.menu.next()
}},_resizeMenu:function(){var a=this.menu.element;
a.outerWidth(Math.max(a.width("").outerWidth()+1,this.element.outerWidth()))
},_renderMenu:function(f,a){var b=this;
c.each(a,function(e,h){b._renderItemData(f,h)
})
},_renderItemData:function(b,a){return this._renderItem(b,a).data("ui-autocomplete-item",a)
},_renderItem:function(b,a){return c("<li>").append(c("<a>").text(a.label)).appendTo(b)
},_move:function(a,b){if(!this.menu.element.is(":visible")){this.search(null,b);
return
}if(this.menu.isFirstItem()&&/^previous/.test(a)||this.menu.isLastItem()&&/^next/.test(a)){this._value(this.term);
this.menu.blur();
return
}this.menu[a](b)
},widget:function(){return this.menu.element
},_value:function(){return this.valueMethod.apply(this.element,arguments)
},_keyEvent:function(b,a){if(!this.isMultiLine||this.menu.element.is(":visible")){this._move(b,a);
a.preventDefault()
}}});
c.extend(c.ui.autocomplete,{escapeRegex:function(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")
},filter:function(a,f){var b=new RegExp(c.ui.autocomplete.escapeRegex(f),"i");
return c.grep(a,function(e){return b.test(e.label||e.value||e)
})
}});
c.widget("ui.autocomplete",c.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(a){return a+(a>1?" results are":" result is")+" available, use up and down arrow keys to navigate."
}}},__response:function(a){var b;
this._superApply(arguments);
if(this.options.disabled||this.cancelSearch){return
}if(a&&a.length){b=this.options.messages.results(a.length)
}else{b=this.options.messages.noResults
}this.liveRegion.text(b)
}})
}(jQuery));
(function(h,n){var k,i="ui-button ui-widget ui-state-default ui-corner-all",m="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",j=function(){var a=h(this);
setTimeout(function(){a.find(":ui-button").button("refresh")
},1)
},l=function(c){var b=c.name,a=c.form,d=h([]);
if(b){b=b.replace(/'/g,"\\'");
if(a){d=h(a).find("[name='"+b+"']")
}else{d=h("[name='"+b+"']",c.ownerDocument).filter(function(){return !this.form
})
}}return d
};
h.widget("ui.button",{version:"1.10.4",defaultElement:"<button>",options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,j);
if(typeof this.options.disabled!=="boolean"){this.options.disabled=!!this.element.prop("disabled")
}else{this.element.prop("disabled",this.options.disabled)
}this._determineButtonType();
this.hasTitle=!!this.buttonElement.attr("title");
var c=this,b=this.options,d=this.type==="checkbox"||this.type==="radio",a=!d?"ui-state-active":"";
if(b.label===null){b.label=(this.type==="input"?this.buttonElement.val():this.buttonElement.html())
}this._hoverable(this.buttonElement);
this.buttonElement.addClass(i).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){if(b.disabled){return
}if(this===k){h(this).addClass("ui-state-active")
}}).bind("mouseleave"+this.eventNamespace,function(){if(b.disabled){return
}h(this).removeClass(a)
}).bind("click"+this.eventNamespace,function(e){if(b.disabled){e.preventDefault();
e.stopImmediatePropagation()
}});
this._on({focus:function(){this.buttonElement.addClass("ui-state-focus")
},blur:function(){this.buttonElement.removeClass("ui-state-focus")
}});
if(d){this.element.bind("change"+this.eventNamespace,function(){c.refresh()
})
}if(this.type==="checkbox"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(b.disabled){return false
}})
}else{if(this.type==="radio"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(b.disabled){return false
}h(this).addClass("ui-state-active");
c.buttonElement.attr("aria-pressed","true");
var e=c.element[0];
l(e).not(e).map(function(){return h(this).button("widget")[0]
}).removeClass("ui-state-active").attr("aria-pressed","false")
})
}else{this.buttonElement.bind("mousedown"+this.eventNamespace,function(){if(b.disabled){return false
}h(this).addClass("ui-state-active");
k=this;
c.document.one("mouseup",function(){k=null
})
}).bind("mouseup"+this.eventNamespace,function(){if(b.disabled){return false
}h(this).removeClass("ui-state-active")
}).bind("keydown"+this.eventNamespace,function(e){if(b.disabled){return false
}if(e.keyCode===h.ui.keyCode.SPACE||e.keyCode===h.ui.keyCode.ENTER){h(this).addClass("ui-state-active")
}}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){h(this).removeClass("ui-state-active")
});
if(this.buttonElement.is("a")){this.buttonElement.keyup(function(e){if(e.keyCode===h.ui.keyCode.SPACE){h(this).click()
}})
}}}this._setOption("disabled",b.disabled);
this._resetButton()
},_determineButtonType:function(){var a,c,b;
if(this.element.is("[type=checkbox]")){this.type="checkbox"
}else{if(this.element.is("[type=radio]")){this.type="radio"
}else{if(this.element.is("input")){this.type="input"
}else{this.type="button"
}}}if(this.type==="checkbox"||this.type==="radio"){a=this.element.parents().last();
c="label[for='"+this.element.attr("id")+"']";
this.buttonElement=a.find(c);
if(!this.buttonElement.length){a=a.length?a.siblings():this.element.siblings();
this.buttonElement=a.filter(c);
if(!this.buttonElement.length){this.buttonElement=a.find(c)
}}this.element.addClass("ui-helper-hidden-accessible");
b=this.element.is(":checked");
if(b){this.buttonElement.addClass("ui-state-active")
}this.buttonElement.prop("aria-pressed",b)
}else{this.buttonElement=this.element
}},widget:function(){return this.buttonElement
},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");
this.buttonElement.removeClass(i+" ui-state-active "+m).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
if(!this.hasTitle){this.buttonElement.removeAttr("title")
}},_setOption:function(a,b){this._super(a,b);
if(a==="disabled"){this.element.prop("disabled",!!b);
if(b){this.buttonElement.removeClass("ui-state-focus")
}return
}this._resetButton()
},refresh:function(){var a=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");
if(a!==this.options.disabled){this._setOption("disabled",a)
}if(this.type==="radio"){l(this.element[0]).each(function(){if(h(this).is(":checked")){h(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true")
}else{h(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")
}})
}else{if(this.type==="checkbox"){if(this.element.is(":checked")){this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true")
}else{this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false")
}}}},_resetButton:function(){if(this.type==="input"){if(this.options.label){this.element.val(this.options.label)
}return
}var b=this.buttonElement.removeClass(m),c=h("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(),d=this.options.icons,e=d.primary&&d.secondary,a=[];
if(d.primary||d.secondary){if(this.options.text){a.push("ui-button-text-icon"+(e?"s":(d.primary?"-primary":"-secondary")))
}if(d.primary){b.prepend("<span class='ui-button-icon-primary ui-icon "+d.primary+"'></span>")
}if(d.secondary){b.append("<span class='ui-button-icon-secondary ui-icon "+d.secondary+"'></span>")
}if(!this.options.text){a.push(e?"ui-button-icons-only":"ui-button-icon-only");
if(!this.hasTitle){b.attr("title",h.trim(c))
}}}else{a.push("ui-button-text-only")
}b.addClass(a.join(" "))
}});
h.widget("ui.buttonset",{version:"1.10.4",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")
},_init:function(){this.refresh()
},_setOption:function(a,b){if(a==="disabled"){this.buttons.button("option",a,b)
}this._super(a,b)
},refresh:function(){var a=this.element.css("direction")==="rtl";
this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return h(this).button("widget")[0]
}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(a?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(a?"ui-corner-left":"ui-corner-right").end().end()
},_destroy:function(){this.element.removeClass("ui-buttonset");
this.buttons.map(function(){return h(this).button("widget")[0]
}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
}})
}(jQuery));
(function(h,n){h.extend(h.ui,{datepicker:{version:"1.10.4"}});
var m="datepicker",l;
function j(){this._curInst=null;
this._keyEvent=false;
this._disabledInputs=[];
this._datepickerShowing=false;
this._inDialog=false;
this._mainDivId="ui-datepicker-div";
this._inlineClass="ui-datepicker-inline";
this._appendClass="ui-datepicker-append";
this._triggerClass="ui-datepicker-trigger";
this._dialogClass="ui-datepicker-dialog";
this._disableClass="ui-datepicker-disabled";
this._unselectableClass="ui-datepicker-unselectable";
this._currentClass="ui-datepicker-current-day";
this._dayOverClass="ui-datepicker-days-cell-over";
this.regional=[];
this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};
this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false,disabled:false};
h.extend(this._defaults,this.regional[""]);
this.dpDiv=i(h("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
}h.extend(j.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv
},setDefaults:function(a){k(this._defaults,a||{});
return this
},_attachDatepicker:function(e,d){var c,a,b;
c=e.nodeName.toLowerCase();
a=(c==="div"||c==="span");
if(!e.id){this.uuid+=1;
e.id="dp"+this.uuid
}b=this._newInst(h(e),a);
b.settings=h.extend({},d||{});
if(c==="input"){this._connectDatepicker(e,b)
}else{if(a){this._inlineDatepicker(e,b)
}}},_newInst:function(c,b){var a=c[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");
return{id:a,input:c,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:b,dpDiv:(!b?this.dpDiv:i(h("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")))}
},_connectDatepicker:function(c,b){var a=h(c);
b.append=h([]);
b.trigger=h([]);
if(a.hasClass(this.markerClassName)){return
}this._attachments(a,b);
a.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp);
this._autoSize(b);
h.data(c,m,b);
if(b.settings.disabled){this._disableDatepicker(c)
}},_attachments:function(d,e){var g,c,b,a=this._get(e,"appendText"),f=this._get(e,"isRTL");
if(e.append){e.append.remove()
}if(a){e.append=h("<span class='"+this._appendClass+"'>"+a+"</span>");
d[f?"before":"after"](e.append)
}d.unbind("focus",this._showDatepicker);
if(e.trigger){e.trigger.remove()
}g=this._get(e,"showOn");
if(g==="focus"||g==="both"){d.focus(this._showDatepicker)
}if(g==="button"||g==="both"){c=this._get(e,"buttonText");
b=this._get(e,"buttonImage");
e.trigger=h(this._get(e,"buttonImageOnly")?h("<img/>").addClass(this._triggerClass).attr({src:b,alt:c,title:c}):h("<button type='button'></button>").addClass(this._triggerClass).html(!b?c:h("<img/>").attr({src:b,alt:c,title:c})));
d[f?"before":"after"](e.trigger);
e.trigger.click(function(){if(h.datepicker._datepickerShowing&&h.datepicker._lastInput===d[0]){h.datepicker._hideDatepicker()
}else{if(h.datepicker._datepickerShowing&&h.datepicker._lastInput!==d[0]){h.datepicker._hideDatepicker();
h.datepicker._showDatepicker(d[0])
}else{h.datepicker._showDatepicker(d[0])
}}return false
})
}},_autoSize:function(e){if(this._get(e,"autoSize")&&!e.inline){var c,f,g,d,a=new Date(2009,12-1,20),b=this._get(e,"dateFormat");
if(b.match(/[DM]/)){c=function(o){f=0;
g=0;
for(d=0;
d<o.length;
d++){if(o[d].length>f){f=o[d].length;
g=d
}}return g
};
a.setMonth(c(this._get(e,(b.match(/MM/)?"monthNames":"monthNamesShort"))));
a.setDate(c(this._get(e,(b.match(/DD/)?"dayNames":"dayNamesShort")))+20-a.getDay())
}e.input.attr("size",this._formatDate(e,a).length)
}},_inlineDatepicker:function(c,b){var a=h(c);
if(a.hasClass(this.markerClassName)){return
}a.addClass(this.markerClassName).append(b.dpDiv);
h.data(c,m,b);
this._setDate(b,this._getDefaultDate(b),true);
this._updateDatepicker(b);
this._updateAlternate(b);
if(b.settings.disabled){this._disableDatepicker(c)
}b.dpDiv.css("display","block")
},_dialogDatepicker:function(e,c,g,v,s){var d,b,a,t,u,f=this._dialogInst;
if(!f){this.uuid+=1;
d="dp"+this.uuid;
this._dialogInput=h("<input type='text' id='"+d+"' style='position: absolute; top: -100px; width: 0px;'/>");
this._dialogInput.keydown(this._doKeyDown);
h("body").append(this._dialogInput);
f=this._dialogInst=this._newInst(this._dialogInput,false);
f.settings={};
h.data(this._dialogInput[0],m,f)
}k(f.settings,v||{});
c=(c&&c.constructor===Date?this._formatDate(f,c):c);
this._dialogInput.val(c);
this._pos=(s?(s.length?s:[s.pageX,s.pageY]):null);
if(!this._pos){b=document.documentElement.clientWidth;
a=document.documentElement.clientHeight;
t=document.documentElement.scrollLeft||document.body.scrollLeft;
u=document.documentElement.scrollTop||document.body.scrollTop;
this._pos=[(b/2)-100+t,(a/2)-150+u]
}this._dialogInput.css("left",(this._pos[0]+20)+"px").css("top",this._pos[1]+"px");
f.settings.onSelect=g;
this._inDialog=true;
this.dpDiv.addClass(this._dialogClass);
this._showDatepicker(this._dialogInput[0]);
if(h.blockUI){h.blockUI(this.dpDiv)
}h.data(this._dialogInput[0],m,f);
return this
},_destroyDatepicker:function(d){var c,a=h(d),b=h.data(d,m);
if(!a.hasClass(this.markerClassName)){return
}c=d.nodeName.toLowerCase();
h.removeData(d,m);
if(c==="input"){b.append.remove();
b.trigger.remove();
a.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)
}else{if(c==="div"||c==="span"){a.removeClass(this.markerClassName).empty()
}}},_enableDatepicker:function(e){var d,b,a=h(e),c=h.data(e,m);
if(!a.hasClass(this.markerClassName)){return
}d=e.nodeName.toLowerCase();
if(d==="input"){e.disabled=false;
c.trigger.filter("button").each(function(){this.disabled=false
}).end().filter("img").css({opacity:"1.0",cursor:""})
}else{if(d==="div"||d==="span"){b=a.children("."+this._inlineClass);
b.children().removeClass("ui-state-disabled");
b.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",false)
}}this._disabledInputs=h.map(this._disabledInputs,function(f){return(f===e?null:f)
})
},_disableDatepicker:function(e){var d,b,a=h(e),c=h.data(e,m);
if(!a.hasClass(this.markerClassName)){return
}d=e.nodeName.toLowerCase();
if(d==="input"){e.disabled=true;
c.trigger.filter("button").each(function(){this.disabled=true
}).end().filter("img").css({opacity:"0.5",cursor:"default"})
}else{if(d==="div"||d==="span"){b=a.children("."+this._inlineClass);
b.children().addClass("ui-state-disabled");
b.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",true)
}}this._disabledInputs=h.map(this._disabledInputs,function(f){return(f===e?null:f)
});
this._disabledInputs[this._disabledInputs.length]=e
},_isDisabledDatepicker:function(b){if(!b){return false
}for(var a=0;
a<this._disabledInputs.length;
a++){if(this._disabledInputs[a]===b){return true
}}return false
},_getInst:function(b){try{return h.data(b,m)
}catch(a){throw"Missing instance data for this datepicker"
}},_optionDatepicker:function(g,e,p){var f,a,d,c,b=this._getInst(g);
if(arguments.length===2&&typeof e==="string"){return(e==="defaults"?h.extend({},h.datepicker._defaults):(b?(e==="all"?h.extend({},b.settings):this._get(b,e)):null))
}f=e||{};
if(typeof e==="string"){f={};
f[e]=p
}if(b){if(this._curInst===b){this._hideDatepicker()
}a=this._getDateDatepicker(g,true);
d=this._getMinMaxDate(b,"min");
c=this._getMinMaxDate(b,"max");
k(b.settings,f);
if(d!==null&&f.dateFormat!==n&&f.minDate===n){b.settings.minDate=this._formatDate(b,d)
}if(c!==null&&f.dateFormat!==n&&f.maxDate===n){b.settings.maxDate=this._formatDate(b,c)
}if("disabled" in f){if(f.disabled){this._disableDatepicker(g)
}else{this._enableDatepicker(g)
}}this._attachments(h(g),b);
this._autoSize(b);
this._setDate(b,a);
this._updateAlternate(b);
this._updateDatepicker(b)
}},_changeDatepicker:function(b,a,c){this._optionDatepicker(b,a,c)
},_refreshDatepicker:function(b){var a=this._getInst(b);
if(a){this._updateDatepicker(a)
}},_setDateDatepicker:function(c,a){var b=this._getInst(c);
if(b){this._setDate(b,a);
this._updateDatepicker(b);
this._updateAlternate(b)
}},_getDateDatepicker:function(c,b){var a=this._getInst(c);
if(a&&!a.inline){this._setDateFromField(a,b)
}return(a?this._getDate(a):null)
},_doKeyDown:function(b){var f,a,g,d=h.datepicker._getInst(b.target),c=true,e=d.dpDiv.is(".ui-datepicker-rtl");
d._keyEvent=true;
if(h.datepicker._datepickerShowing){switch(b.keyCode){case 9:h.datepicker._hideDatepicker();
c=false;
break;
case 13:g=h("td."+h.datepicker._dayOverClass+":not(."+h.datepicker._currentClass+")",d.dpDiv);
if(g[0]){h.datepicker._selectDay(b.target,d.selectedMonth,d.selectedYear,g[0])
}f=h.datepicker._get(d,"onSelect");
if(f){a=h.datepicker._formatDate(d);
f.apply((d.input?d.input[0]:null),[a,d])
}else{h.datepicker._hideDatepicker()
}return false;
case 27:h.datepicker._hideDatepicker();
break;
case 33:h.datepicker._adjustDate(b.target,(b.ctrlKey?-h.datepicker._get(d,"stepBigMonths"):-h.datepicker._get(d,"stepMonths")),"M");
break;
case 34:h.datepicker._adjustDate(b.target,(b.ctrlKey?+h.datepicker._get(d,"stepBigMonths"):+h.datepicker._get(d,"stepMonths")),"M");
break;
case 35:if(b.ctrlKey||b.metaKey){h.datepicker._clearDate(b.target)
}c=b.ctrlKey||b.metaKey;
break;
case 36:if(b.ctrlKey||b.metaKey){h.datepicker._gotoToday(b.target)
}c=b.ctrlKey||b.metaKey;
break;
case 37:if(b.ctrlKey||b.metaKey){h.datepicker._adjustDate(b.target,(e?+1:-1),"D")
}c=b.ctrlKey||b.metaKey;
if(b.originalEvent.altKey){h.datepicker._adjustDate(b.target,(b.ctrlKey?-h.datepicker._get(d,"stepBigMonths"):-h.datepicker._get(d,"stepMonths")),"M")
}break;
case 38:if(b.ctrlKey||b.metaKey){h.datepicker._adjustDate(b.target,-7,"D")
}c=b.ctrlKey||b.metaKey;
break;
case 39:if(b.ctrlKey||b.metaKey){h.datepicker._adjustDate(b.target,(e?-1:+1),"D")
}c=b.ctrlKey||b.metaKey;
if(b.originalEvent.altKey){h.datepicker._adjustDate(b.target,(b.ctrlKey?+h.datepicker._get(d,"stepBigMonths"):+h.datepicker._get(d,"stepMonths")),"M")
}break;
case 40:if(b.ctrlKey||b.metaKey){h.datepicker._adjustDate(b.target,+7,"D")
}c=b.ctrlKey||b.metaKey;
break;
default:c=false
}}else{if(b.keyCode===36&&b.ctrlKey){h.datepicker._showDatepicker(this)
}else{c=false
}}if(c){b.preventDefault();
b.stopPropagation()
}},_doKeyPress:function(c){var a,b,d=h.datepicker._getInst(c.target);
if(h.datepicker._get(d,"constrainInput")){a=h.datepicker._possibleChars(h.datepicker._get(d,"dateFormat"));
b=String.fromCharCode(c.charCode==null?c.keyCode:c.charCode);
return c.ctrlKey||c.metaKey||(b<" "||!a||a.indexOf(b)>-1)
}},_doKeyUp:function(c){var a,d=h.datepicker._getInst(c.target);
if(d.input.val()!==d.lastVal){try{a=h.datepicker.parseDate(h.datepicker._get(d,"dateFormat"),(d.input?d.input.val():null),h.datepicker._getFormatConfig(d));
if(a){h.datepicker._setDateFromField(d);
h.datepicker._updateAlternate(d);
h.datepicker._updateDatepicker(d)
}}catch(b){}}return true
},_showDatepicker:function(d){d=d.target||d;
if(d.nodeName.toLowerCase()!=="input"){d=h("input",d.parentNode)[0]
}if(h.datepicker._isDisabledDatepicker(d)||h.datepicker._lastInput===d){return
}var e,a,b,f,g,p,c;
e=h.datepicker._getInst(d);
if(h.datepicker._curInst&&h.datepicker._curInst!==e){h.datepicker._curInst.dpDiv.stop(true,true);
if(e&&h.datepicker._datepickerShowing){h.datepicker._hideDatepicker(h.datepicker._curInst.input[0])
}}a=h.datepicker._get(e,"beforeShow");
b=a?a.apply(d,[d,e]):{};
if(b===false){return
}k(e.settings,b);
e.lastVal=null;
h.datepicker._lastInput=d;
h.datepicker._setDateFromField(e);
if(h.datepicker._inDialog){d.value=""
}if(!h.datepicker._pos){h.datepicker._pos=h.datepicker._findPos(d);
h.datepicker._pos[1]+=d.offsetHeight
}f=false;
h(d).parents().each(function(){f|=h(this).css("position")==="fixed";
return !f
});
g={left:h.datepicker._pos[0],top:h.datepicker._pos[1]};
h.datepicker._pos=null;
e.dpDiv.empty();
e.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});
h.datepicker._updateDatepicker(e);
g=h.datepicker._checkOffset(e,g,f);
e.dpDiv.css({position:(h.datepicker._inDialog&&h.blockUI?"static":(f?"fixed":"absolute")),display:"none",left:g.left+"px",top:g.top+"px"});
if(!e.inline){p=h.datepicker._get(e,"showAnim");
c=h.datepicker._get(e,"duration");
e.dpDiv.zIndex(h(d).zIndex()+1);
h.datepicker._datepickerShowing=true;
if(h.effects&&h.effects.effect[p]){e.dpDiv.show(p,h.datepicker._get(e,"showOptions"),c)
}else{e.dpDiv[p||"show"](p?c:null)
}if(h.datepicker._shouldFocusInput(e)){e.input.focus()
}h.datepicker._curInst=e
}},_updateDatepicker:function(b){this.maxRows=4;
l=b;
b.dpDiv.empty().append(this._generateHTML(b));
this._attachHandlers(b);
b.dpDiv.find("."+this._dayOverClass+" a").mouseover();
var d,c=this._getNumberOfMonths(b),a=c[1],e=17;
b.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
if(a>1){b.dpDiv.addClass("ui-datepicker-multi-"+a).css("width",(e*a)+"em")
}b.dpDiv[(c[0]!==1||c[1]!==1?"add":"remove")+"Class"]("ui-datepicker-multi");
b.dpDiv[(this._get(b,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");
if(b===h.datepicker._curInst&&h.datepicker._datepickerShowing&&h.datepicker._shouldFocusInput(b)){b.input.focus()
}if(b.yearshtml){d=b.yearshtml;
setTimeout(function(){if(d===b.yearshtml&&b.yearshtml){b.dpDiv.find("select.ui-datepicker-year:first").replaceWith(b.yearshtml)
}d=b.yearshtml=null
},0)
}},_shouldFocusInput:function(a){return a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&!a.input.is(":focus")
},_checkOffset:function(e,g,f){var b=e.dpDiv.outerWidth(),a=e.dpDiv.outerHeight(),d=e.input?e.input.outerWidth():0,c=e.input?e.input.outerHeight():0,r=document.documentElement.clientWidth+(f?0:h(document).scrollLeft()),q=document.documentElement.clientHeight+(f?0:h(document).scrollTop());
g.left-=(this._get(e,"isRTL")?(b-d):0);
g.left-=(f&&g.left===e.input.offset().left)?h(document).scrollLeft():0;
g.top-=(f&&g.top===(e.input.offset().top+c))?h(document).scrollTop():0;
g.left-=Math.min(g.left,(g.left+b>r&&r>b)?Math.abs(g.left+b-r):0);
g.top-=Math.min(g.top,(g.top+a>q&&q>a)?Math.abs(a+c):0);
return g
},_findPos:function(c){var d,a=this._getInst(c),b=this._get(a,"isRTL");
while(c&&(c.type==="hidden"||c.nodeType!==1||h.expr.filters.hidden(c))){c=c[b?"previousSibling":"nextSibling"]
}d=h(c).offset();
return[d.left,d.top]
},_hideDatepicker:function(b){var f,a,e,d,c=this._curInst;
if(!c||(b&&c!==h.data(b,m))){return
}if(this._datepickerShowing){f=this._get(c,"showAnim");
a=this._get(c,"duration");
e=function(){h.datepicker._tidyDialog(c)
};
if(h.effects&&(h.effects.effect[f]||h.effects[f])){c.dpDiv.hide(f,h.datepicker._get(c,"showOptions"),a,e)
}else{c.dpDiv[(f==="slideDown"?"slideUp":(f==="fadeIn"?"fadeOut":"hide"))]((f?a:null),e)
}if(!f){e()
}this._datepickerShowing=false;
d=this._get(c,"onClose");
if(d){d.apply((c.input?c.input[0]:null),[(c.input?c.input.val():""),c])
}this._lastInput=null;
if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});
if(h.blockUI){h.unblockUI();
h("body").append(this.dpDiv)
}}this._inDialog=false
}},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
},_checkExternalClick:function(b){if(!h.datepicker._curInst){return
}var a=h(b.target),c=h.datepicker._getInst(a[0]);
if(((a[0].id!==h.datepicker._mainDivId&&a.parents("#"+h.datepicker._mainDivId).length===0&&!a.hasClass(h.datepicker.markerClassName)&&!a.closest("."+h.datepicker._triggerClass).length&&h.datepicker._datepickerShowing&&!(h.datepicker._inDialog&&h.blockUI)))||(a.hasClass(h.datepicker.markerClassName)&&h.datepicker._curInst!==c)){h.datepicker._hideDatepicker()
}},_adjustDate:function(a,c,d){var e=h(a),b=this._getInst(e[0]);
if(this._isDisabledDatepicker(e[0])){return
}this._adjustInstDate(b,c+(d==="M"?this._get(b,"showCurrentAtPos"):0),d);
this._updateDatepicker(b)
},_gotoToday:function(b){var a,d=h(b),c=this._getInst(d[0]);
if(this._get(c,"gotoCurrent")&&c.currentDay){c.selectedDay=c.currentDay;
c.drawMonth=c.selectedMonth=c.currentMonth;
c.drawYear=c.selectedYear=c.currentYear
}else{a=new Date();
c.selectedDay=a.getDate();
c.drawMonth=c.selectedMonth=a.getMonth();
c.drawYear=c.selectedYear=a.getFullYear()
}this._notifyChange(c);
this._adjustDate(d)
},_selectMonthYear:function(a,d,c){var e=h(a),b=this._getInst(e[0]);
b["selected"+(c==="M"?"Month":"Year")]=b["draw"+(c==="M"?"Month":"Year")]=parseInt(d.options[d.selectedIndex].value,10);
this._notifyChange(b);
this._adjustDate(e)
},_selectDay:function(a,c,f,e){var b,d=h(a);
if(h(e).hasClass(this._unselectableClass)||this._isDisabledDatepicker(d[0])){return
}b=this._getInst(d[0]);
b.selectedDay=b.currentDay=h("a",e).html();
b.selectedMonth=b.currentMonth=c;
b.selectedYear=b.currentYear=f;
this._selectDate(a,this._formatDate(b,b.currentDay,b.currentMonth,b.currentYear))
},_clearDate:function(a){var b=h(a);
this._selectDate(b,"")
},_selectDate:function(b,a){var d,e=h(b),c=this._getInst(e[0]);
a=(a!=null?a:this._formatDate(c));
if(c.input){c.input.val(a)
}this._updateAlternate(c);
d=this._get(c,"onSelect");
if(d){d.apply((c.input?c.input[0]:null),[a,c])
}else{if(c.input){c.input.trigger("change")
}}if(c.inline){this._updateDatepicker(c)
}else{this._hideDatepicker();
this._lastInput=c.input[0];
if(typeof(c.input[0])!=="object"){c.input.focus()
}this._lastInput=null
}},_updateAlternate:function(e){var b,c,d,a=this._get(e,"altField");
if(a){b=this._get(e,"altFormat")||this._get(e,"dateFormat");
c=this._getDate(e);
d=this.formatDate(b,c,this._getFormatConfig(e));
h(a).each(function(){h(this).val(d)
})
}},noWeekends:function(a){var b=a.getDay();
return[(b>0&&b<6),""]
},iso8601Week:function(b){var c,a=new Date(b.getTime());
a.setDate(a.getDate()+4-(a.getDay()||7));
c=a.getTime();
a.setMonth(0);
a.setDate(1);
return Math.floor(Math.round((c-a)/86400000)/7)+1
},parseDate:function(R,J,E){if(R==null||J==null){throw"Invalid arguments"
}J=(typeof J==="object"?J.toString():J+"");
if(J===""){return null
}var Q,O,M,b=0,H=(E?E.shortYearCutoff:null)||this._defaults.shortYearCutoff,e=(typeof H!=="string"?H:new Date().getFullYear()%100+parseInt(H,10)),I=(E?E.dayNamesShort:null)||this._defaults.dayNamesShort,K=(E?E.dayNames:null)||this._defaults.dayNames,g=(E?E.monthNamesShort:null)||this._defaults.monthNamesShort,f=(E?E.monthNames:null)||this._defaults.monthNames,G=-1,a=-1,N=-1,P=-1,c=false,L,d=function(o){var p=(Q+1<R.length&&R.charAt(Q+1)===o);
if(p){Q++
}return p
},T=function(q){var p=d(q),s=(q==="@"?14:(q==="!"?20:(q==="y"&&p?4:(q==="o"?3:2)))),o=new RegExp("^\\d{1,"+s+"}"),r=J.substring(b).match(o);
if(!r){throw"Missing number at position "+b
}b+=r[0].length;
return parseInt(r[0],10)
},S=function(q,s,p){var o=-1,r=h.map(d(q)?p:s,function(u,t){return[[t,u]]
}).sort(function(t,u){return -(t[1].length-u[1].length)
});
h.each(r,function(t,v){var u=v[1];
if(J.substr(b,u.length).toLowerCase()===u.toLowerCase()){o=v[0];
b+=u.length;
return false
}});
if(o!==-1){return o+1
}else{throw"Unknown name at position "+b
}},F=function(){if(J.charAt(b)!==R.charAt(Q)){throw"Unexpected literal at position "+b
}b++
};
for(Q=0;
Q<R.length;
Q++){if(c){if(R.charAt(Q)==="'"&&!d("'")){c=false
}else{F()
}}else{switch(R.charAt(Q)){case"d":N=T("d");
break;
case"D":S("D",I,K);
break;
case"o":P=T("o");
break;
case"m":a=T("m");
break;
case"M":a=S("M",g,f);
break;
case"y":G=T("y");
break;
case"@":L=new Date(T("@"));
G=L.getFullYear();
a=L.getMonth()+1;
N=L.getDate();
break;
case"!":L=new Date((T("!")-this._ticksTo1970)/10000);
G=L.getFullYear();
a=L.getMonth()+1;
N=L.getDate();
break;
case"'":if(d("'")){F()
}else{c=true
}break;
default:F()
}}}if(b<J.length){M=J.substr(b);
if(!/^\s+/.test(M)){throw"Extra/unparsed characters found in date: "+M
}}if(G===-1){G=new Date().getFullYear()
}else{if(G<100){G+=new Date().getFullYear()-new Date().getFullYear()%100+(G<=e?0:-100)
}}if(P>-1){a=1;
N=P;
do{O=this._getDaysInMonth(G,a-1);
if(N<=O){break
}a++;
N-=O
}while(true)
}L=this._daylightSavingAdjust(new Date(G,a-1,N));
if(L.getFullYear()!==G||L.getMonth()+1!==a||L.getDate()!==N){throw"Invalid date"
}return L
},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(((1970-1)*365+Math.floor(1970/4)-Math.floor(1970/100)+Math.floor(1970/400))*24*60*60*10000000),formatDate:function(d,a,z){if(!a){return""
}var g,c=(z?z.dayNamesShort:null)||this._defaults.dayNamesShort,b=(z?z.dayNames:null)||this._defaults.dayNames,x=(z?z.monthNamesShort:null)||this._defaults.monthNamesShort,w=(z?z.monthNames:null)||this._defaults.monthNames,v=function(o){var p=(g+1<d.length&&d.charAt(g+1)===o);
if(p){g++
}return p
},f=function(p,r,o){var q=""+r;
if(v(p)){while(q.length<o){q="0"+q
}}return q
},e=function(p,r,q,o){return(v(p)?o[r]:q[r])
},y="",u=false;
if(a){for(g=0;
g<d.length;
g++){if(u){if(d.charAt(g)==="'"&&!v("'")){u=false
}else{y+=d.charAt(g)
}}else{switch(d.charAt(g)){case"d":y+=f("d",a.getDate(),2);
break;
case"D":y+=e("D",a.getDay(),c,b);
break;
case"o":y+=f("o",Math.round((new Date(a.getFullYear(),a.getMonth(),a.getDate()).getTime()-new Date(a.getFullYear(),0,0).getTime())/86400000),3);
break;
case"m":y+=f("m",a.getMonth()+1,2);
break;
case"M":y+=e("M",a.getMonth(),x,w);
break;
case"y":y+=(v("y")?a.getFullYear():(a.getYear()%100<10?"0":"")+a.getYear()%100);
break;
case"@":y+=a.getTime();
break;
case"!":y+=a.getTime()*10000+this._ticksTo1970;
break;
case"'":if(v("'")){y+="'"
}else{u=true
}break;
default:y+=d.charAt(g)
}}}}return y
},_possibleChars:function(b){var c,a="",d=false,e=function(f){var g=(c+1<b.length&&b.charAt(c+1)===f);
if(g){c++
}return g
};
for(c=0;
c<b.length;
c++){if(d){if(b.charAt(c)==="'"&&!e("'")){d=false
}else{a+=b.charAt(c)
}}else{switch(b.charAt(c)){case"d":case"m":case"y":case"@":a+="0123456789";
break;
case"D":case"M":return null;
case"'":if(e("'")){a+="'"
}else{d=true
}break;
default:a+=b.charAt(c)
}}}return a
},_get:function(a,b){return a.settings[b]!==n?a.settings[b]:this._defaults[b]
},_setDateFromField:function(f,g){if(f.input.val()===f.lastVal){return
}var b=this._get(f,"dateFormat"),c=f.lastVal=f.input?f.input.val():null,d=this._getDefaultDate(f),a=d,p=this._getFormatConfig(f);
try{a=this.parseDate(b,c,p)||d
}catch(e){c=(g?"":c)
}f.selectedDay=a.getDate();
f.drawMonth=f.selectedMonth=a.getMonth();
f.drawYear=f.selectedYear=a.getFullYear();
f.currentDay=(c?a.getDate():0);
f.currentMonth=(c?a.getMonth():0);
f.currentYear=(c?a.getFullYear():0);
this._adjustInstDate(f)
},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date()))
},_determineDate:function(c,a,b){var e=function(p){var g=new Date();
g.setDate(g.getDate()+p);
return g
},f=function(x){try{return h.datepicker.parseDate(h.datepicker._get(c,"dateFormat"),x,h.datepicker._getFormatConfig(c))
}catch(g){}var A=(x.toLowerCase().match(/^c/)?h.datepicker._getDate(c):null)||new Date(),z=A.getFullYear(),w=A.getMonth(),B=A.getDate(),y=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,v=y.exec(x);
while(v){switch(v[2]||"d"){case"d":case"D":B+=parseInt(v[1],10);
break;
case"w":case"W":B+=parseInt(v[1],10)*7;
break;
case"m":case"M":w+=parseInt(v[1],10);
B=Math.min(B,h.datepicker._getDaysInMonth(z,w));
break;
case"y":case"Y":z+=parseInt(v[1],10);
B=Math.min(B,h.datepicker._getDaysInMonth(z,w));
break
}v=y.exec(x)
}return new Date(z,w,B)
},d=(a==null||a===""?b:(typeof a==="string"?f(a):(typeof a==="number"?(isNaN(a)?b:e(a)):new Date(a.getTime()))));
d=(d&&d.toString()==="Invalid Date"?b:d);
if(d){d.setHours(0);
d.setMinutes(0);
d.setSeconds(0);
d.setMilliseconds(0)
}return this._daylightSavingAdjust(d)
},_daylightSavingAdjust:function(a){if(!a){return null
}a.setHours(a.getHours()>12?a.getHours()+2:0);
return a
},_setDate:function(c,b,e){var a=!b,f=c.selectedMonth,g=c.selectedYear,d=this._restrictMinMax(c,this._determineDate(c,b,new Date()));
c.selectedDay=c.currentDay=d.getDate();
c.drawMonth=c.selectedMonth=c.currentMonth=d.getMonth();
c.drawYear=c.selectedYear=c.currentYear=d.getFullYear();
if((f!==c.selectedMonth||g!==c.selectedYear)&&!e){this._notifyChange(c)
}this._adjustInstDate(c);
if(c.input){c.input.val(a?"":this._formatDate(c))
}},_getDate:function(a){var b=(!a.currentYear||(a.input&&a.input.val()==="")?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay)));
return b
},_attachHandlers:function(b){var c=this._get(b,"stepMonths"),a="#"+b.id.replace(/\\\\/g,"\\");
b.dpDiv.find("[data-handler]").map(function(){var d={prev:function(){h.datepicker._adjustDate(a,-c,"M")
},next:function(){h.datepicker._adjustDate(a,+c,"M")
},hide:function(){h.datepicker._hideDatepicker()
},today:function(){h.datepicker._gotoToday(a)
},selectDay:function(){h.datepicker._selectDay(a,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this);
return false
},selectMonth:function(){h.datepicker._selectMonthYear(a,this,"M");
return false
},selectYear:function(){h.datepicker._selectMonthYear(a,this,"Y");
return false
}};
h(this).bind(this.getAttribute("data-event"),d[this.getAttribute("data-handler")])
})
},_generateHTML:function(aT){var aq,aP,aA,ad,aw,aB,aE,au,an,at,ao,aL,ar,av,ac,aI,aY,aN,aU,aR,d,aW,aC,aQ,aM,ax,g,ap,az,a0,f,aX,aG,ay,a,ae,aD,b,aJ,c=new Date(),e=this._daylightSavingAdjust(new Date(c.getFullYear(),c.getMonth(),c.getDate())),aV=this._get(aT,"isRTL"),ak=this._get(aT,"showButtonPanel"),aK=this._get(aT,"hideIfNoPrevNext"),aO=this._get(aT,"navigationAsDateFormat"),aa=this._getNumberOfMonths(aT),al=this._get(aT,"showCurrentAtPos"),aZ=this._get(aT,"stepMonths"),aH=(aa[0]!==1||aa[1]!==1),ab=this._daylightSavingAdjust((!aT.currentDay?new Date(9999,9,9):new Date(aT.currentYear,aT.currentMonth,aT.currentDay))),am=this._getMinMaxDate(aT,"min"),aS=this._getMinMaxDate(aT,"max"),aF=aT.drawMonth-al,af=aT.drawYear;
if(aF<0){aF+=12;
af--
}if(aS){aq=this._daylightSavingAdjust(new Date(aS.getFullYear(),aS.getMonth()-(aa[0]*aa[1])+1,aS.getDate()));
aq=(am&&aq<am?am:aq);
while(this._daylightSavingAdjust(new Date(af,aF,1))>aq){aF--;
if(aF<0){aF=11;
af--
}}}aT.drawMonth=aF;
aT.drawYear=af;
aP=this._get(aT,"prevText");
aP=(!aO?aP:this.formatDate(aP,this._daylightSavingAdjust(new Date(af,aF-aZ,1)),this._getFormatConfig(aT)));
aA=(this._canAdjustMonth(aT,-1,af,aF)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+aP+"'><span class='ui-icon ui-icon-circle-triangle-"+(aV?"e":"w")+"'>"+aP+"</span></a>":(aK?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+aP+"'><span class='ui-icon ui-icon-circle-triangle-"+(aV?"e":"w")+"'>"+aP+"</span></a>"));
ad=this._get(aT,"nextText");
ad=(!aO?ad:this.formatDate(ad,this._daylightSavingAdjust(new Date(af,aF+aZ,1)),this._getFormatConfig(aT)));
aw=(this._canAdjustMonth(aT,+1,af,aF)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+ad+"'><span class='ui-icon ui-icon-circle-triangle-"+(aV?"w":"e")+"'>"+ad+"</span></a>":(aK?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+ad+"'><span class='ui-icon ui-icon-circle-triangle-"+(aV?"w":"e")+"'>"+ad+"</span></a>"));
aB=this._get(aT,"currentText");
aE=(this._get(aT,"gotoCurrent")&&aT.currentDay?ab:e);
aB=(!aO?aB:this.formatDate(aB,aE,this._getFormatConfig(aT)));
au=(!aT.inline?"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(aT,"closeText")+"</button>":"");
an=(ak)?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(aV?au:"")+(this._isInRange(aT,aE)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+aB+"</button>":"")+(aV?"":au)+"</div>":"";
at=parseInt(this._get(aT,"firstDay"),10);
at=(isNaN(at)?0:at);
ao=this._get(aT,"showWeek");
aL=this._get(aT,"dayNames");
ar=this._get(aT,"dayNamesMin");
av=this._get(aT,"monthNames");
ac=this._get(aT,"monthNamesShort");
aI=this._get(aT,"beforeShowDay");
aY=this._get(aT,"showOtherMonths");
aN=this._get(aT,"selectOtherMonths");
aU=this._getDefaultDate(aT);
aR="";
d;
for(aW=0;
aW<aa[0];
aW++){aC="";
this.maxRows=4;
for(aQ=0;
aQ<aa[1];
aQ++){aM=this._daylightSavingAdjust(new Date(af,aF,aT.selectedDay));
ax=" ui-corner-all";
g="";
if(aH){g+="<div class='ui-datepicker-group";
if(aa[1]>1){switch(aQ){case 0:g+=" ui-datepicker-group-first";
ax=" ui-corner-"+(aV?"right":"left");
break;
case aa[1]-1:g+=" ui-datepicker-group-last";
ax=" ui-corner-"+(aV?"left":"right");
break;
default:g+=" ui-datepicker-group-middle";
ax="";
break
}}g+="'>"
}g+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+ax+"'>"+(/all|left/.test(ax)&&aW===0?(aV?aw:aA):"")+(/all|right/.test(ax)&&aW===0?(aV?aA:aw):"")+this._generateMonthYearHeader(aT,aF,af,am,aS,aW>0||aQ>0,av,ac)+"</div><table class='ui-datepicker-calendar'><thead><tr>";
ap=(ao?"<th class='ui-datepicker-week-col'>"+this._get(aT,"weekHeader")+"</th>":"");
for(d=0;
d<7;
d++){az=(d+at)%7;
ap+="<th"+((d+at+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+aL[az]+"'>"+ar[az]+"</span></th>"
}g+=ap+"</tr></thead><tbody>";
a0=this._getDaysInMonth(af,aF);
if(af===aT.selectedYear&&aF===aT.selectedMonth){aT.selectedDay=Math.min(aT.selectedDay,a0)
}f=(this._getFirstDayOfMonth(af,aF)-at+7)%7;
aX=Math.ceil((f+a0)/7);
aG=(aH?this.maxRows>aX?this.maxRows:aX:aX);
this.maxRows=aG;
ay=this._daylightSavingAdjust(new Date(af,aF,1-f));
for(a=0;
a<aG;
a++){g+="<tr>";
ae=(!ao?"":"<td class='ui-datepicker-week-col'>"+this._get(aT,"calculateWeek")(ay)+"</td>");
for(d=0;
d<7;
d++){aD=(aI?aI.apply((aT.input?aT.input[0]:null),[ay]):[true,""]);
b=(ay.getMonth()!==aF);
aJ=(b&&!aN)||!aD[0]||(am&&ay<am)||(aS&&ay>aS);
ae+="<td class='"+((d+at+6)%7>=5?" ui-datepicker-week-end":"")+(b?" ui-datepicker-other-month":"")+((ay.getTime()===aM.getTime()&&aF===aT.selectedMonth&&aT._keyEvent)||(aU.getTime()===ay.getTime()&&aU.getTime()===aM.getTime())?" "+this._dayOverClass:"")+(aJ?" "+this._unselectableClass+" ui-state-disabled":"")+(b&&!aY?"":" "+aD[1]+(ay.getTime()===ab.getTime()?" "+this._currentClass:"")+(ay.getTime()===e.getTime()?" ui-datepicker-today":""))+"'"+((!b||aY)&&aD[2]?" title='"+aD[2].replace(/'/g,"&#39;")+"'":"")+(aJ?"":" data-handler='selectDay' data-event='click' data-month='"+ay.getMonth()+"' data-year='"+ay.getFullYear()+"'")+">"+(b&&!aY?"&#xa0;":(aJ?"<span class='ui-state-default'>"+ay.getDate()+"</span>":"<a class='ui-state-default"+(ay.getTime()===e.getTime()?" ui-state-highlight":"")+(ay.getTime()===ab.getTime()?" ui-state-active":"")+(b?" ui-priority-secondary":"")+"' href='#'>"+ay.getDate()+"</a>"))+"</td>";
ay.setDate(ay.getDate()+1);
ay=this._daylightSavingAdjust(ay)
}g+=ae+"</tr>"
}aF++;
if(aF>11){aF=0;
af++
}g+="</tbody></table>"+(aH?"</div>"+((aa[0]>0&&aQ===aa[1]-1)?"<div class='ui-datepicker-row-break'></div>":""):"");
aC+=g
}aR+=aC
}aR+=an;
aT._keyEvent=false;
return aR
},_generateMonthYearHeader:function(e,a,d,D,g,L,J,f){var c,E,H,P,N,K,G,O,I=this._get(e,"changeMonth"),b=this._get(e,"changeYear"),F=this._get(e,"showMonthAfterYear"),M="<div class='ui-datepicker-title'>",C="";
if(L||!I){C+="<span class='ui-datepicker-month'>"+J[a]+"</span>"
}else{c=(D&&D.getFullYear()===d);
E=(g&&g.getFullYear()===d);
C+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
for(H=0;
H<12;
H++){if((!c||H>=D.getMonth())&&(!E||H<=g.getMonth())){C+="<option value='"+H+"'"+(H===a?" selected='selected'":"")+">"+f[H]+"</option>"
}}C+="</select>"
}if(!F){M+=C+(L||!(I&&b)?"&#xa0;":"")
}if(!e.yearshtml){e.yearshtml="";
if(L||!b){M+="<span class='ui-datepicker-year'>"+d+"</span>"
}else{P=this._get(e,"yearRange").split(":");
N=new Date().getFullYear();
K=function(o){var p=(o.match(/c[+\-].*/)?d+parseInt(o.substring(1),10):(o.match(/[+\-].*/)?N+parseInt(o,10):parseInt(o,10)));
return(isNaN(p)?N:p)
};
G=K(P[0]);
O=Math.max(G,K(P[1]||""));
G=(D?Math.max(G,D.getFullYear()):G);
O=(g?Math.min(O,g.getFullYear()):O);
e.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
for(;
G<=O;
G++){e.yearshtml+="<option value='"+G+"'"+(G===d?" selected='selected'":"")+">"+G+"</option>"
}e.yearshtml+="</select>";
M+=e.yearshtml;
e.yearshtml=null
}}M+=this._get(e,"yearSuffix");
if(F){M+=(L||!(I&&b)?"&#xa0;":"")+C
}M+="</div>";
return M
},_adjustInstDate:function(c,e,f){var g=c.drawYear+(f==="Y"?e:0),d=c.drawMonth+(f==="M"?e:0),b=Math.min(c.selectedDay,this._getDaysInMonth(g,d))+(f==="D"?e:0),a=this._restrictMinMax(c,this._daylightSavingAdjust(new Date(g,d,b)));
c.selectedDay=a.getDate();
c.drawMonth=c.selectedMonth=a.getMonth();
c.drawYear=c.selectedYear=a.getFullYear();
if(f==="M"||f==="Y"){this._notifyChange(c)
}},_restrictMinMax:function(b,a){var d=this._getMinMaxDate(b,"min"),c=this._getMinMaxDate(b,"max"),e=(d&&a<d?d:a);
return(c&&e>c?c:e)
},_notifyChange:function(a){var b=this._get(a,"onChangeMonthYear");
if(b){b.apply((a.input?a.input[0]:null),[a.selectedYear,a.selectedMonth+1,a])
}},_getNumberOfMonths:function(a){var b=this._get(a,"numberOfMonths");
return(b==null?[1,1]:(typeof b==="number"?[1,b]:b))
},_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)
},_getDaysInMonth:function(b,a){return 32-this._daylightSavingAdjust(new Date(b,a,32)).getDate()
},_getFirstDayOfMonth:function(b,a){return new Date(b,a,1).getDay()
},_canAdjustMonth:function(d,f,b,a){var e=this._getNumberOfMonths(d),c=this._daylightSavingAdjust(new Date(b,a+(f<0?f:e[0]*e[1]),1));
if(f<0){c.setDate(this._getDaysInMonth(c.getFullYear(),c.getMonth()))
}return this._isInRange(d,c)
},_isInRange:function(c,b){var r,a,f=this._getMinMaxDate(c,"min"),d=this._getMinMaxDate(c,"max"),g=null,e=null,q=this._get(c,"yearRange");
if(q){r=q.split(":");
a=new Date().getFullYear();
g=parseInt(r[0],10);
e=parseInt(r[1],10);
if(r[0].match(/[+\-].*/)){g+=a
}if(r[1].match(/[+\-].*/)){e+=a
}}return((!f||b.getTime()>=f.getTime())&&(!d||b.getTime()<=d.getTime())&&(!g||b.getFullYear()>=g)&&(!e||b.getFullYear()<=e))
},_getFormatConfig:function(a){var b=this._get(a,"shortYearCutoff");
b=(typeof b!=="string"?b:new Date().getFullYear()%100+parseInt(b,10));
return{shortYearCutoff:b,dayNamesShort:this._get(a,"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}
},_formatDate:function(c,b,d,e){if(!b){c.currentDay=c.selectedDay;
c.currentMonth=c.selectedMonth;
c.currentYear=c.selectedYear
}var a=(b?(typeof b==="object"?b:this._daylightSavingAdjust(new Date(e,d,b))):this._daylightSavingAdjust(new Date(c.currentYear,c.currentMonth,c.currentDay)));
return this.formatDate(this._get(c,"dateFormat"),a,this._getFormatConfig(c))
}});
function i(a){var b="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
return a.delegate(b,"mouseout",function(){h(this).removeClass("ui-state-hover");
if(this.className.indexOf("ui-datepicker-prev")!==-1){h(this).removeClass("ui-datepicker-prev-hover")
}if(this.className.indexOf("ui-datepicker-next")!==-1){h(this).removeClass("ui-datepicker-next-hover")
}}).delegate(b,"mouseover",function(){if(!h.datepicker._isDisabledDatepicker(l.inline?a.parent()[0]:l.input[0])){h(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
h(this).addClass("ui-state-hover");
if(this.className.indexOf("ui-datepicker-prev")!==-1){h(this).addClass("ui-datepicker-prev-hover")
}if(this.className.indexOf("ui-datepicker-next")!==-1){h(this).addClass("ui-datepicker-next-hover")
}}})
}function k(c,b){h.extend(c,b);
for(var a in b){if(b[a]==null){c[a]=b[a]
}}return c
}h.fn.datepicker=function(a){if(!this.length){return this
}if(!h.datepicker.initialized){h(document).mousedown(h.datepicker._checkExternalClick);
h.datepicker.initialized=true
}if(h("#"+h.datepicker._mainDivId).length===0){h("body").append(h.datepicker.dpDiv)
}var b=Array.prototype.slice.call(arguments,1);
if(typeof a==="string"&&(a==="isDisabled"||a==="getDate"||a==="widget")){return h.datepicker["_"+a+"Datepicker"].apply(h.datepicker,[this[0]].concat(b))
}if(a==="option"&&arguments.length===2&&typeof arguments[1]==="string"){return h.datepicker["_"+a+"Datepicker"].apply(h.datepicker,[this[0]].concat(b))
}return this.each(function(){typeof a==="string"?h.datepicker["_"+a+"Datepicker"].apply(h.datepicker,[this].concat(b)):h.datepicker._attachDatepicker(this,a)
})
};
h.datepicker=new j();
h.datepicker.initialized=false;
h.datepicker.uuid=new Date().getTime();
h.datepicker.version="1.10.4"
})(jQuery);
(function(e,h){var g={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},f={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true};
e.widget("ui.dialog",{version:"1.10.4",options:{appendTo:"body",autoOpen:true,buttons:[],closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:false,position:{my:"center",at:"center",of:window,collision:"fit",using:function(a){var b=e(this).css(a).offset().top;
if(b<0){e(this).css("top",a.top-b)
}}},resizable:true,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height};
this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)};
this.originalTitle=this.element.attr("title");
this.options.title=this.options.title||this.originalTitle;
this._createWrapper();
this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog);
this._createTitlebar();
this._createButtonPane();
if(this.options.draggable&&e.fn.draggable){this._makeDraggable()
}if(this.options.resizable&&e.fn.resizable){this._makeResizable()
}this._isOpen=false
},_init:function(){if(this.options.autoOpen){this.open()
}},_appendTo:function(){var a=this.options.appendTo;
if(a&&(a.jquery||a.nodeType)){return e(a)
}return this.document.find(a||"body").eq(0)
},_destroy:function(){var a,b=this.originalPosition;
this._destroyOverlay();
this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach();
this.uiDialog.stop(true,true).remove();
if(this.originalTitle){this.element.attr("title",this.originalTitle)
}a=b.parent.children().eq(b.index);
if(a.length&&a[0]!==this.element[0]){a.before(this.element)
}else{b.parent.append(this.element)
}},widget:function(){return this.uiDialog
},disable:e.noop,enable:e.noop,close:function(c){var a,d=this;
if(!this._isOpen||this._trigger("beforeClose",c)===false){return
}this._isOpen=false;
this._destroyOverlay();
if(!this.opener.filter(":focusable").focus().length){try{a=this.document[0].activeElement;
if(a&&a.nodeName.toLowerCase()!=="body"){e(a).blur()
}}catch(b){}}this._hide(this.uiDialog,this.options.hide,function(){d._trigger("close",c)
})
},isOpen:function(){return this._isOpen
},moveToTop:function(){this._moveToTop()
},_moveToTop:function(a,c){var b=!!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
if(b&&!c){this._trigger("focus",a)
}return b
},open:function(){var a=this;
if(this._isOpen){if(this._moveToTop()){this._focusTabbable()
}return
}this._isOpen=true;
this.opener=e(this.document[0].activeElement);
this._size();
this._position();
this._createOverlay();
this._moveToTop(null,true);
this._show(this.uiDialog,this.options.show,function(){a._focusTabbable();
a._trigger("focus")
});
this._trigger("open")
},_focusTabbable:function(){var a=this.element.find("[autofocus]");
if(!a.length){a=this.element.find(":tabbable")
}if(!a.length){a=this.uiDialogButtonPane.find(":tabbable")
}if(!a.length){a=this.uiDialogTitlebarClose.filter(":tabbable")
}if(!a.length){a=this.uiDialog
}a.eq(0).focus()
},_keepFocus:function(b){function a(){var c=this.document[0].activeElement,d=this.uiDialog[0]===c||e.contains(this.uiDialog[0],c);
if(!d){this._focusTabbable()
}}b.preventDefault();
a.call(this);
this._delay(a)
},_createWrapper:function(){this.uiDialog=e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo());
this._on(this.uiDialog,{keydown:function(a){if(this.options.closeOnEscape&&!a.isDefaultPrevented()&&a.keyCode&&a.keyCode===e.ui.keyCode.ESCAPE){a.preventDefault();
this.close(a);
return
}if(a.keyCode!==e.ui.keyCode.TAB){return
}var d=this.uiDialog.find(":tabbable"),b=d.filter(":first"),c=d.filter(":last");
if((a.target===c[0]||a.target===this.uiDialog[0])&&!a.shiftKey){b.focus(1);
a.preventDefault()
}else{if((a.target===b[0]||a.target===this.uiDialog[0])&&a.shiftKey){c.focus(1);
a.preventDefault()
}}},mousedown:function(a){if(this._moveToTop(a)){this._focusTabbable()
}}});
if(!this.element.find("[aria-describedby]").length){this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})
}},_createTitlebar:function(){var a;
this.uiDialogTitlebar=e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog);
this._on(this.uiDialogTitlebar,{mousedown:function(b){if(!e(b.target).closest(".ui-dialog-titlebar-close")){this.uiDialog.focus()
}}});
this.uiDialogTitlebarClose=e("<button type='button'></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:false}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar);
this._on(this.uiDialogTitlebarClose,{click:function(b){b.preventDefault();
this.close(b)
}});
a=e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar);
this._title(a);
this.uiDialog.attr({"aria-labelledby":a.attr("id")})
},_title:function(a){if(!this.options.title){a.html("&#160;")
}a.text(this.options.title)
},_createButtonPane:function(){this.uiDialogButtonPane=e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");
this.uiButtonSet=e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane);
this._createButtons()
},_createButtons:function(){var b=this,a=this.options.buttons;
this.uiDialogButtonPane.remove();
this.uiButtonSet.empty();
if(e.isEmptyObject(a)||(e.isArray(a)&&!a.length)){this.uiDialog.removeClass("ui-dialog-buttons");
return
}e.each(a,function(k,l){var d,c;
l=e.isFunction(l)?{click:l,text:k}:l;
l=e.extend({type:"button"},l);
d=l.click;
l.click=function(){d.apply(b.element[0],arguments)
};
c={icons:l.icons,text:l.showText};
delete l.icons;
delete l.showText;
e("<button></button>",l).button(c).appendTo(b.uiButtonSet)
});
this.uiDialog.addClass("ui-dialog-buttons");
this.uiDialogButtonPane.appendTo(this.uiDialog)
},_makeDraggable:function(){var c=this,b=this.options;
function a(d){return{position:d.position,offset:d.offset}
}this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(d,j){e(this).addClass("ui-dialog-dragging");
c._blockFrames();
c._trigger("dragStart",d,a(j))
},drag:function(d,j){c._trigger("drag",d,a(j))
},stop:function(d,j){b.position=[j.position.left-c.document.scrollLeft(),j.position.top-c.document.scrollTop()];
e(this).removeClass("ui-dialog-dragging");
c._unblockFrames();
c._trigger("dragStop",d,a(j))
}})
},_makeResizable:function(){var l=this,c=this.options,b=c.resizable,d=this.uiDialog.css("position"),k=typeof b==="string"?b:"n,e,s,w,se,sw,ne,nw";
function a(i){return{originalPosition:i.originalPosition,originalSize:i.originalSize,position:i.position,size:i.size}
}this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:c.maxWidth,maxHeight:c.maxHeight,minWidth:c.minWidth,minHeight:this._minHeight(),handles:k,start:function(i,j){e(this).addClass("ui-dialog-resizing");
l._blockFrames();
l._trigger("resizeStart",i,a(j))
},resize:function(i,j){l._trigger("resize",i,a(j))
},stop:function(i,j){c.height=e(this).height();
c.width=e(this).width();
e(this).removeClass("ui-dialog-resizing");
l._unblockFrames();
l._trigger("resizeStop",i,a(j))
}}).css("position",d)
},_minHeight:function(){var a=this.options;
return a.height==="auto"?a.minHeight:Math.min(a.minHeight,a.height)
},_position:function(){var a=this.uiDialog.is(":visible");
if(!a){this.uiDialog.show()
}this.uiDialog.position(this.options.position);
if(!a){this.uiDialog.hide()
}},_setOptions:function(a){var d=this,c=false,b={};
e.each(a,function(k,l){d._setOption(k,l);
if(k in g){c=true
}if(k in f){b[k]=l
}});
if(c){this._size();
this._position()
}if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option",b)
}},_setOption:function(c,j){var a,b,d=this.uiDialog;
if(c==="dialogClass"){d.removeClass(this.options.dialogClass).addClass(j)
}if(c==="disabled"){return
}this._super(c,j);
if(c==="appendTo"){this.uiDialog.appendTo(this._appendTo())
}if(c==="buttons"){this._createButtons()
}if(c==="closeText"){this.uiDialogTitlebarClose.button({label:""+j})
}if(c==="draggable"){a=d.is(":data(ui-draggable)");
if(a&&!j){d.draggable("destroy")
}if(!a&&j){this._makeDraggable()
}}if(c==="position"){this._position()
}if(c==="resizable"){b=d.is(":data(ui-resizable)");
if(b&&!j){d.resizable("destroy")
}if(b&&typeof j==="string"){d.resizable("option","handles",j)
}if(!b&&j!==false){this._makeResizable()
}}if(c==="title"){this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))
}},_size:function(){var c,b,a,d=this.options;
this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0});
if(d.minWidth>d.width){d.width=d.minWidth
}c=this.uiDialog.css({height:"auto",width:d.width}).outerHeight();
b=Math.max(0,d.minHeight-c);
a=typeof d.maxHeight==="number"?Math.max(0,d.maxHeight-c):"none";
if(d.height==="auto"){this.element.css({minHeight:b,maxHeight:a,height:"auto"})
}else{this.element.height(Math.max(0,d.height-c))
}if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option","minHeight",this._minHeight())
}},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var a=e(this);
return e("<div>").css({position:"absolute",width:a.outerWidth(),height:a.outerHeight()}).appendTo(a.parent()).offset(a.offset())[0]
})
},_unblockFrames:function(){if(this.iframeBlocks){this.iframeBlocks.remove();
delete this.iframeBlocks
}},_allowInteraction:function(a){if(e(a.target).closest(".ui-dialog").length){return true
}return !!e(a.target).closest(".ui-datepicker").length
},_createOverlay:function(){if(!this.options.modal){return
}var a=this,b=this.widgetFullName;
if(!e.ui.dialog.overlayInstances){this._delay(function(){if(e.ui.dialog.overlayInstances){this.document.bind("focusin.dialog",function(c){if(!a._allowInteraction(c)){c.preventDefault();
e(".ui-dialog:visible:last .ui-dialog-content").data(b)._focusTabbable()
}})
}})
}this.overlay=e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo());
this._on(this.overlay,{mousedown:"_keepFocus"});
e.ui.dialog.overlayInstances++
},_destroyOverlay:function(){if(!this.options.modal){return
}if(this.overlay){e.ui.dialog.overlayInstances--;
if(!e.ui.dialog.overlayInstances){this.document.unbind("focusin.dialog")
}this.overlay.remove();
this.overlay=null
}}});
e.ui.dialog.overlayInstances=0;
if(e.uiBackCompat!==false){e.widget("ui.dialog",e.ui.dialog,{_position:function(){var d=this.options.position,b=[],c=[0,0],a;
if(d){if(typeof d==="string"||(typeof d==="object"&&"0" in d)){b=d.split?d.split(" "):[d[0],d[1]];
if(b.length===1){b[1]=b[0]
}e.each(["left","top"],function(i,l){if(+b[i]===b[i]){c[i]=b[i];
b[i]=l
}});
d={my:b[0]+(c[0]<0?c[0]:"+"+c[0])+" "+b[1]+(c[1]<0?c[1]:"+"+c[1]),at:b.join(" ")}
}d=e.extend({},e.ui.dialog.prototype.options.position,d)
}else{d=e.ui.dialog.prototype.options.position
}a=this.uiDialog.is(":visible");
if(!a){this.uiDialog.show()
}this.uiDialog.position(d);
if(!a){this.uiDialog.hide()
}}})
}}(jQuery));
(function(c,d){c.widget("ui.menu",{version:"1.10.4",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element;
this.mouseHandled=false;
this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,c.proxy(function(a){if(this.options.disabled){a.preventDefault()
}},this));
if(this.options.disabled){this.element.addClass("ui-state-disabled").attr("aria-disabled","true")
}this._on({"mousedown .ui-menu-item > a":function(a){a.preventDefault()
},"click .ui-state-disabled > a":function(a){a.preventDefault()
},"click .ui-menu-item:has(a)":function(a){var b=c(a.target).closest(".ui-menu-item");
if(!this.mouseHandled&&b.not(".ui-state-disabled").length){this.select(a);
if(!a.isPropagationStopped()){this.mouseHandled=true
}if(b.has(".ui-menu").length){this.expand(a)
}else{if(!this.element.is(":focus")&&c(this.document[0].activeElement).closest(".ui-menu").length){this.element.trigger("focus",[true]);
if(this.active&&this.active.parents(".ui-menu").length===1){clearTimeout(this.timer)
}}}}},"mouseenter .ui-menu-item":function(a){var b=c(a.currentTarget);
b.siblings().children(".ui-state-active").removeClass("ui-state-active");
this.focus(a,b)
},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(a,f){var b=this.active||this.element.children(".ui-menu-item").eq(0);
if(!f){this.focus(a,b)
}},blur:function(a){this._delay(function(){if(!c.contains(this.element[0],this.document[0].activeElement)){this.collapseAll(a)
}})
},keydown:"_keydown"});
this.refresh();
this._on(this.document,{click:function(a){if(!c(a.target).closest(".ui-menu").length){this.collapseAll(a)
}this.mouseHandled=false
}})
},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var a=c(this);
if(a.data("ui-menu-submenu-carat")){a.remove()
}});
this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
},_keydown:function(k){var l,m,a,p,o,n=true;
function b(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")
}switch(k.keyCode){case c.ui.keyCode.PAGE_UP:this.previousPage(k);
break;
case c.ui.keyCode.PAGE_DOWN:this.nextPage(k);
break;
case c.ui.keyCode.HOME:this._move("first","first",k);
break;
case c.ui.keyCode.END:this._move("last","last",k);
break;
case c.ui.keyCode.UP:this.previous(k);
break;
case c.ui.keyCode.DOWN:this.next(k);
break;
case c.ui.keyCode.LEFT:this.collapse(k);
break;
case c.ui.keyCode.RIGHT:if(this.active&&!this.active.is(".ui-state-disabled")){this.expand(k)
}break;
case c.ui.keyCode.ENTER:case c.ui.keyCode.SPACE:this._activate(k);
break;
case c.ui.keyCode.ESCAPE:this.collapse(k);
break;
default:n=false;
m=this.previousFilter||"";
a=String.fromCharCode(k.keyCode);
p=false;
clearTimeout(this.filterTimer);
if(a===m){p=true
}else{a=m+a
}o=new RegExp("^"+b(a),"i");
l=this.activeMenu.children(".ui-menu-item").filter(function(){return o.test(c(this).children("a").text())
});
l=p&&l.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):l;
if(!l.length){a=String.fromCharCode(k.keyCode);
o=new RegExp("^"+b(a),"i");
l=this.activeMenu.children(".ui-menu-item").filter(function(){return o.test(c(this).children("a").text())
})
}if(l.length){this.focus(k,l);
if(l.length>1){this.previousFilter=a;
this.filterTimer=this._delay(function(){delete this.previousFilter
},1000)
}else{delete this.previousFilter
}}else{delete this.previousFilter
}}if(n){k.preventDefault()
}},_activate:function(a){if(!this.active.is(".ui-state-disabled")){if(this.active.children("a[aria-haspopup='true']").length){this.expand(a)
}else{this.select(a)
}}},refresh:function(){var b,a=this.options.icons.submenu,f=this.element.find(this.options.menus);
this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length);
f.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var i=c(this),e=i.prev("a"),j=c("<span>").addClass("ui-menu-icon ui-icon "+a).data("ui-menu-submenu-carat",true);
e.attr("aria-haspopup","true").prepend(j);
i.attr("aria-labelledby",e.attr("id"))
});
b=f.add(this.element);
b.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()});
b.children(":not(.ui-menu-item)").each(function(){var e=c(this);
if(!/[^\-\u2014\u2013\s]/.test(e.text())){e.addClass("ui-widget-content ui-menu-divider")
}});
b.children(".ui-state-disabled").attr("aria-disabled","true");
if(this.active&&!c.contains(this.element[0],this.active[0])){this.blur()
}},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]
},_setOption:function(a,b){if(a==="icons"){this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(b.submenu)
}this._super(a,b)
},focus:function(a,g){var h,b;
this.blur(a,a&&a.type==="focus");
this._scrollIntoView(g);
this.active=g.first();
b=this.active.children("a").addClass("ui-state-focus");
if(this.options.role){this.element.attr("aria-activedescendant",b.attr("id"))
}this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active");
if(a&&a.type==="keydown"){this._close()
}else{this.timer=this._delay(function(){this._close()
},this.delay)
}h=g.children(".ui-menu");
if(h.length&&a&&(/^mouse/.test(a.type))){this._startOpening(h)
}this.activeMenu=g.parent();
this._trigger("focus",a,{item:g})
},_scrollIntoView:function(j){var a,m,l,n,b,k;
if(this._hasScroll()){a=parseFloat(c.css(this.activeMenu[0],"borderTopWidth"))||0;
m=parseFloat(c.css(this.activeMenu[0],"paddingTop"))||0;
l=j.offset().top-this.activeMenu.offset().top-a-m;
n=this.activeMenu.scrollTop();
b=this.activeMenu.height();
k=j.height();
if(l<0){this.activeMenu.scrollTop(n+l)
}else{if(l+k>b){this.activeMenu.scrollTop(n+l-b+k)
}}}},blur:function(a,b){if(!b){clearTimeout(this.timer)
}if(!this.active){return
}this.active.children("a").removeClass("ui-state-focus");
this.active=null;
this._trigger("blur",a,{item:this.active})
},_startOpening:function(a){clearTimeout(this.timer);
if(a.attr("aria-hidden")!=="true"){return
}this.timer=this._delay(function(){this._close();
this._open(a)
},this.delay)
},_open:function(b){var a=c.extend({of:this.active},this.options.position);
clearTimeout(this.timer);
this.element.find(".ui-menu").not(b.parents(".ui-menu")).hide().attr("aria-hidden","true");
b.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(a)
},collapseAll:function(b,a){clearTimeout(this.timer);
this.timer=this._delay(function(){var f=a?this.element:c(b&&b.target).closest(this.element.find(".ui-menu"));
if(!f.length){f=this.element
}this._close(f);
this.blur(b);
this.activeMenu=f
},this.delay)
},_close:function(a){if(!a){a=this.active?this.active.parent():this.element
}a.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")
},collapse:function(a){var b=this.active&&this.active.parent().closest(".ui-menu-item",this.element);
if(b&&b.length){this._close();
this.focus(a,b)
}},expand:function(a){var b=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();
if(b&&b.length){this._open(b.parent());
this._delay(function(){this.focus(a,b)
})
}},next:function(a){this._move("next","first",a)
},previous:function(a){this._move("prev","last",a)
},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length
},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length
},_move:function(a,g,b){var h;
if(this.active){if(a==="first"||a==="last"){h=this.active[a==="first"?"prevAll":"nextAll"](".ui-menu-item").eq(-1)
}else{h=this.active[a+"All"](".ui-menu-item").eq(0)
}}if(!h||!h.length||!this.active){h=this.activeMenu.children(".ui-menu-item")[g]()
}this.focus(b,h)
},nextPage:function(b){var h,a,g;
if(!this.active){this.next(b);
return
}if(this.isLastItem()){return
}if(this._hasScroll()){a=this.active.offset().top;
g=this.element.height();
this.active.nextAll(".ui-menu-item").each(function(){h=c(this);
return h.offset().top-a-g<0
});
this.focus(b,h)
}else{this.focus(b,this.activeMenu.children(".ui-menu-item")[!this.active?"first":"last"]())
}},previousPage:function(b){var h,a,g;
if(!this.active){this.next(b);
return
}if(this.isFirstItem()){return
}if(this._hasScroll()){a=this.active.offset().top;
g=this.element.height();
this.active.prevAll(".ui-menu-item").each(function(){h=c(this);
return h.offset().top-a+g>0
});
this.focus(b,h)
}else{this.focus(b,this.activeMenu.children(".ui-menu-item").first())
}},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")
},select:function(a){this.active=this.active||c(a.target).closest(".ui-menu-item");
var b={item:this.active};
if(!this.active.has(".ui-menu").length){this.collapseAll(a,true)
}this._trigger("select",a,b)
}})
}(jQuery));
(function(c,d){c.widget("ui.progressbar",{version:"1.10.4",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue();
this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min});
this.valueDiv=c("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);
this._refreshValue()
},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
this.valueDiv.remove()
},value:function(a){if(a===d){return this.options.value
}this.options.value=this._constrainedValue(a);
this._refreshValue()
},_constrainedValue:function(a){if(a===d){a=this.options.value
}this.indeterminate=a===false;
if(typeof a!=="number"){a=0
}return this.indeterminate?false:Math.min(this.options.max,Math.max(this.min,a))
},_setOptions:function(a){var b=a.value;
delete a.value;
this._super(a);
this.options.value=this._constrainedValue(b);
this._refreshValue()
},_setOption:function(a,b){if(a==="max"){b=Math.max(this.min,b)
}this._super(a,b)
},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)
},_refreshValue:function(){var b=this.options.value,a=this._percentage();
this.valueDiv.toggle(this.indeterminate||b>this.min).toggleClass("ui-corner-right",b===this.options.max).width(a.toFixed(0)+"%");
this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate);
if(this.indeterminate){this.element.removeAttr("aria-valuenow");
if(!this.overlayDiv){this.overlayDiv=c("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv)
}}else{this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":b});
if(this.overlayDiv){this.overlayDiv.remove();
this.overlayDiv=null
}}if(this.oldValue!==b){this.oldValue=b;
this._trigger("change")
}if(b===this.options.max){this._trigger("complete")
}}})
})(jQuery);
(function(d,f){var e=5;
d.widget("ui.slider",d.ui.mouse,{version:"1.10.4",widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=false;
this._mouseSliding=false;
this._animateOff=true;
this._handleIndex=null;
this._detectOrientation();
this._mouseInit();
this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all");
this._refresh();
this._setOption("disabled",this.options.disabled);
this._animateOff=false
},_refresh:function(){this._createRange();
this._createHandles();
this._setupEvents();
this._refreshValue()
},_createHandles:function(){var k,c,l=this.options,a=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),b="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",i=[];
c=(l.values&&l.values.length)||1;
if(a.length>c){a.slice(c).remove();
a=a.slice(0,c)
}for(k=a.length;
k<c;
k++){i.push(b)
}this.handles=a.add(d(i.join("")).appendTo(this.element));
this.handle=this.handles.eq(0);
this.handles.each(function(g){d(this).data("ui-slider-handle-index",g)
})
},_createRange:function(){var b=this.options,a="";
if(b.range){if(b.range===true){if(!b.values){b.values=[this._valueMin(),this._valueMin()]
}else{if(b.values.length&&b.values.length!==2){b.values=[b.values[0],b.values[0]]
}else{if(d.isArray(b.values)){b.values=b.values.slice(0)
}}}}if(!this.range||!this.range.length){this.range=d("<div></div>").appendTo(this.element);
a="ui-slider-range ui-widget-header ui-corner-all"
}else{this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""})
}this.range.addClass(a+((b.range==="min"||b.range==="max")?" ui-slider-range-"+b.range:""))
}else{if(this.range){this.range.remove()
}this.range=null
}},_setupEvents:function(){var a=this.handles.add(this.range).filter("a");
this._off(a);
this._on(a,this._handleEvents);
this._hoverable(a);
this._focusable(a)
},_destroy:function(){this.handles.remove();
if(this.range){this.range.remove()
}this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all");
this._mouseDestroy()
},_mouseCapture:function(o){var u,r,c,b,p,a,t,q,v=this,s=this.options;
if(s.disabled){return false
}this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};
this.elementOffset=this.element.offset();
u={x:o.pageX,y:o.pageY};
r=this._normValueFromMouse(u);
c=this._valueMax()-this._valueMin()+1;
this.handles.each(function(g){var h=Math.abs(r-v.values(g));
if((c>h)||(c===h&&(g===v._lastChangedValue||v.values(g)===s.min))){c=h;
b=d(this);
p=g
}});
a=this._start(o,p);
if(a===false){return false
}this._mouseSliding=true;
this._handleIndex=p;
b.addClass("ui-state-active").focus();
t=b.offset();
q=!d(o.target).parents().addBack().is(".ui-slider-handle");
this._clickOffset=q?{left:0,top:0}:{left:o.pageX-t.left-(b.width()/2),top:o.pageY-t.top-(b.height()/2)-(parseInt(b.css("borderTopWidth"),10)||0)-(parseInt(b.css("borderBottomWidth"),10)||0)+(parseInt(b.css("marginTop"),10)||0)};
if(!this.handles.hasClass("ui-state-hover")){this._slide(o,p,r)
}this._animateOff=true;
return true
},_mouseStart:function(){return true
},_mouseDrag:function(a){var c={x:a.pageX,y:a.pageY},b=this._normValueFromMouse(c);
this._slide(a,this._handleIndex,b);
return false
},_mouseStop:function(a){this.handles.removeClass("ui-state-active");
this._mouseSliding=false;
this._stop(a,this._handleIndex);
this._change(a,this._handleIndex);
this._handleIndex=null;
this._clickOffset=null;
this._animateOff=false;
return false
},_detectOrientation:function(){this.orientation=(this.options.orientation==="vertical")?"vertical":"horizontal"
},_normValueFromMouse:function(j){var c,b,a,l,k;
if(this.orientation==="horizontal"){c=this.elementSize.width;
b=j.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)
}else{c=this.elementSize.height;
b=j.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)
}a=(b/c);
if(a>1){a=1
}if(a<0){a=0
}if(this.orientation==="vertical"){a=1-a
}l=this._valueMax()-this._valueMin();
k=this._valueMin()+a*l;
return this._trimAlignValue(k)
},_start:function(a,b){var c={handle:this.handles[b],value:this.value()};
if(this.options.values&&this.options.values.length){c.value=this.values(b);
c.values=this.values()
}return this._trigger("start",a,c)
},_slide:function(b,c,j){var l,k,a;
if(this.options.values&&this.options.values.length){l=this.values(c?0:1);
if((this.options.values.length===2&&this.options.range===true)&&((c===0&&j>l)||(c===1&&j<l))){j=l
}if(j!==this.values(c)){k=this.values();
k[c]=j;
a=this._trigger("slide",b,{handle:this.handles[c],value:j,values:k});
l=this.values(c?0:1);
if(a!==false){this.values(c,j)
}}}else{if(j!==this.value()){a=this._trigger("slide",b,{handle:this.handles[c],value:j});
if(a!==false){this.value(j)
}}}},_stop:function(a,b){var c={handle:this.handles[b],value:this.value()};
if(this.options.values&&this.options.values.length){c.value=this.values(b);
c.values=this.values()
}this._trigger("stop",a,c)
},_change:function(a,b){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[b],value:this.value()};
if(this.options.values&&this.options.values.length){c.value=this.values(b);
c.values=this.values()
}this._lastChangedValue=b;
this._trigger("change",a,c)
}},value:function(a){if(arguments.length){this.options.value=this._trimAlignValue(a);
this._refreshValue();
this._change(null,0);
return
}return this._value()
},values:function(b,c){var j,i,a;
if(arguments.length>1){this.options.values[b]=this._trimAlignValue(c);
this._refreshValue();
this._change(null,b);
return
}if(arguments.length){if(d.isArray(arguments[0])){j=this.options.values;
i=arguments[0];
for(a=0;
a<j.length;
a+=1){j[a]=this._trimAlignValue(i[a]);
this._change(null,a)
}this._refreshValue()
}else{if(this.options.values&&this.options.values.length){return this._values(b)
}else{return this.value()
}}}else{return this._values()
}},_setOption:function(b,h){var a,c=0;
if(b==="range"&&this.options.range===true){if(h==="min"){this.options.value=this._values(0);
this.options.values=null
}else{if(h==="max"){this.options.value=this._values(this.options.values.length-1);
this.options.values=null
}}}if(d.isArray(this.options.values)){c=this.options.values.length
}d.Widget.prototype._setOption.apply(this,arguments);
switch(b){case"orientation":this._detectOrientation();
this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);
this._refreshValue();
break;
case"value":this._animateOff=true;
this._refreshValue();
this._change(null,0);
this._animateOff=false;
break;
case"values":this._animateOff=true;
this._refreshValue();
for(a=0;
a<c;
a+=1){this._change(null,a)
}this._animateOff=false;
break;
case"min":case"max":this._animateOff=true;
this._refreshValue();
this._animateOff=false;
break;
case"range":this._animateOff=true;
this._refresh();
this._animateOff=false;
break
}},_value:function(){var a=this.options.value;
a=this._trimAlignValue(a);
return a
},_values:function(b){var c,h,a;
if(arguments.length){c=this.options.values[b];
c=this._trimAlignValue(c);
return c
}else{if(this.options.values&&this.options.values.length){h=this.options.values.slice();
for(a=0;
a<h.length;
a+=1){h[a]=this._trimAlignValue(h[a])
}return h
}else{return[]
}}},_trimAlignValue:function(c){if(c<=this._valueMin()){return this._valueMin()
}if(c>=this._valueMax()){return this._valueMax()
}var b=(this.options.step>0)?this.options.step:1,h=(c-this._valueMin())%b,a=c-h;
if(Math.abs(h)*2>=b){a+=(h>0)?b:(-b)
}return parseFloat(a.toFixed(5))
},_valueMin:function(){return this.options.min
},_valueMax:function(){return this.options.max
},_refreshValue:function(){var c,q,r,t,s,o=this.options.range,n=this.options,p=this,b=(!this._animateOff)?n.animate:false,a={};
if(this.options.values&&this.options.values.length){this.handles.each(function(g){q=(p.values(g)-p._valueMin())/(p._valueMax()-p._valueMin())*100;
a[p.orientation==="horizontal"?"left":"bottom"]=q+"%";
d(this).stop(1,1)[b?"animate":"css"](a,n.animate);
if(p.options.range===true){if(p.orientation==="horizontal"){if(g===0){p.range.stop(1,1)[b?"animate":"css"]({left:q+"%"},n.animate)
}if(g===1){p.range[b?"animate":"css"]({width:(q-c)+"%"},{queue:false,duration:n.animate})
}}else{if(g===0){p.range.stop(1,1)[b?"animate":"css"]({bottom:(q)+"%"},n.animate)
}if(g===1){p.range[b?"animate":"css"]({height:(q-c)+"%"},{queue:false,duration:n.animate})
}}}c=q
})
}else{r=this.value();
t=this._valueMin();
s=this._valueMax();
q=(s!==t)?(r-t)/(s-t)*100:0;
a[this.orientation==="horizontal"?"left":"bottom"]=q+"%";
this.handle.stop(1,1)[b?"animate":"css"](a,n.animate);
if(o==="min"&&this.orientation==="horizontal"){this.range.stop(1,1)[b?"animate":"css"]({width:q+"%"},n.animate)
}if(o==="max"&&this.orientation==="horizontal"){this.range[b?"animate":"css"]({width:(100-q)+"%"},{queue:false,duration:n.animate})
}if(o==="min"&&this.orientation==="vertical"){this.range.stop(1,1)[b?"animate":"css"]({height:q+"%"},n.animate)
}if(o==="max"&&this.orientation==="vertical"){this.range[b?"animate":"css"]({height:(100-q)+"%"},{queue:false,duration:n.animate})
}}},_handleEvents:{keydown:function(c){var a,b,k,l,j=d(c.target).data("ui-slider-handle-index");
switch(c.keyCode){case d.ui.keyCode.HOME:case d.ui.keyCode.END:case d.ui.keyCode.PAGE_UP:case d.ui.keyCode.PAGE_DOWN:case d.ui.keyCode.UP:case d.ui.keyCode.RIGHT:case d.ui.keyCode.DOWN:case d.ui.keyCode.LEFT:c.preventDefault();
if(!this._keySliding){this._keySliding=true;
d(c.target).addClass("ui-state-active");
a=this._start(c,j);
if(a===false){return
}}break
}l=this.options.step;
if(this.options.values&&this.options.values.length){b=k=this.values(j)
}else{b=k=this.value()
}switch(c.keyCode){case d.ui.keyCode.HOME:k=this._valueMin();
break;
case d.ui.keyCode.END:k=this._valueMax();
break;
case d.ui.keyCode.PAGE_UP:k=this._trimAlignValue(b+((this._valueMax()-this._valueMin())/e));
break;
case d.ui.keyCode.PAGE_DOWN:k=this._trimAlignValue(b-((this._valueMax()-this._valueMin())/e));
break;
case d.ui.keyCode.UP:case d.ui.keyCode.RIGHT:if(b===this._valueMax()){return
}k=this._trimAlignValue(b+l);
break;
case d.ui.keyCode.DOWN:case d.ui.keyCode.LEFT:if(b===this._valueMin()){return
}k=this._trimAlignValue(b-l);
break
}this._slide(c,j,k)
},click:function(a){a.preventDefault()
},keyup:function(a){var b=d(a.target).data("ui-slider-handle-index");
if(this._keySliding){this._keySliding=false;
this._stop(a,b);
this._change(a,b);
d(a.target).removeClass("ui-state-active")
}}}})
}(jQuery));
(function(c){function d(a){return function(){var b=this.element.val();
a.apply(this,arguments);
this._refresh();
if(b!==this.element.val()){this._trigger("change")
}}
}c.widget("ui.spinner",{version:"1.10.4",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:true,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max);
this._setOption("min",this.options.min);
this._setOption("step",this.options.step);
if(this.value()!==""){this._value(this.element.val(),true)
}this._draw();
this._on(this._events);
this._refresh();
this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")
}})
},_getCreateOptions:function(){var b={},a=this.element;
c.each(["min","max","step"],function(h,i){var j=a.attr(i);
if(j!==undefined&&j.length){b[i]=j
}});
return b
},_events:{keydown:function(a){if(this._start(a)&&this._keydown(a)){a.preventDefault()
}},keyup:"_stop",focus:function(){this.previous=this.element.val()
},blur:function(a){if(this.cancelBlur){delete this.cancelBlur;
return
}this._stop();
this._refresh();
if(this.previous!==this.element.val()){this._trigger("change",a)
}},mousewheel:function(b,a){if(!a){return
}if(!this.spinning&&!this._start(b)){return false
}this._spin((a>0?1:-1)*this.options.step,b);
clearTimeout(this.mousewheelTimer);
this.mousewheelTimer=this._delay(function(){if(this.spinning){this._stop(b)
}},100);
b.preventDefault()
},"mousedown .ui-spinner-button":function(b){var f;
f=this.element[0]===this.document[0].activeElement?this.previous:this.element.val();
function a(){var e=this.element[0]===this.document[0].activeElement;
if(!e){this.element.focus();
this.previous=f;
this._delay(function(){this.previous=f
})
}}b.preventDefault();
a.call(this);
this.cancelBlur=true;
this._delay(function(){delete this.cancelBlur;
a.call(this)
});
if(this._start(b)===false){return
}this._repeat(null,c(b.currentTarget).hasClass("ui-spinner-up")?1:-1,b)
},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(a){if(!c(a.currentTarget).hasClass("ui-state-active")){return
}if(this._start(a)===false){return false
}this._repeat(null,c(a.currentTarget).hasClass("ui-spinner-up")?1:-1,a)
},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var a=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
this.element.attr("role","spinbutton");
this.buttons=a.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all");
if(this.buttons.height()>Math.ceil(a.height()*0.5)&&a.height()>0){a.height(a.height())
}if(this.options.disabled){this.disable()
}},_keydown:function(a){var f=this.options,b=c.ui.keyCode;
switch(a.keyCode){case b.UP:this._repeat(null,1,a);
return true;
case b.DOWN:this._repeat(null,-1,a);
return true;
case b.PAGE_UP:this._repeat(null,f.page,a);
return true;
case b.PAGE_DOWN:this._repeat(null,-f.page,a);
return true
}return false
},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon "+this.options.icons.down+"'>&#9660;</span></a>"
},_start:function(a){if(!this.spinning&&this._trigger("start",a)===false){return false
}if(!this.counter){this.counter=1
}this.spinning=true;
return true
},_repeat:function(b,f,a){b=b||500;
clearTimeout(this.timer);
this.timer=this._delay(function(){this._repeat(40,f,a)
},b);
this._spin(f*this.options.step,a)
},_spin:function(b,a){var f=this.value()||0;
if(!this.counter){this.counter=1
}f=this._adjustValue(f+b*this._increment(this.counter));
if(!this.spinning||this._trigger("spin",a,{value:f})!==false){this._value(f);
this.counter++
}},_increment:function(a){var b=this.options.incremental;
if(b){return c.isFunction(b)?b(a):Math.floor(a*a*a/50000-a*a/500+17*a/200+1)
}return 1
},_precision:function(){var a=this._precisionOf(this.options.step);
if(this.options.min!==null){a=Math.max(a,this._precisionOf(this.options.min))
}return a
},_precisionOf:function(b){var f=b.toString(),a=f.indexOf(".");
return a===-1?0:f.length-a-1
},_adjustValue:function(h){var b,a,g=this.options;
b=g.min!==null?g.min:0;
a=h-b;
a=Math.round(a/g.step)*g.step;
h=b+a;
h=parseFloat(h.toFixed(this._precision()));
if(g.max!==null&&h>g.max){return g.max
}if(g.min!==null&&h<g.min){return g.min
}return h
},_stop:function(a){if(!this.spinning){return
}clearTimeout(this.timer);
clearTimeout(this.mousewheelTimer);
this.counter=0;
this.spinning=false;
this._trigger("stop",a)
},_setOption:function(a,f){if(a==="culture"||a==="numberFormat"){var b=this._parse(this.element.val());
this.options[a]=f;
this.element.val(this._format(b));
return
}if(a==="max"||a==="min"||a==="step"){if(typeof f==="string"){f=this._parse(f)
}}if(a==="icons"){this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(f.up);
this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(f.down)
}this._super(a,f);
if(a==="disabled"){if(f){this.element.prop("disabled",true);
this.buttons.button("disable")
}else{this.element.prop("disabled",false);
this.buttons.button("enable")
}}},_setOptions:d(function(a){this._super(a);
this._value(this.element.val())
}),_parse:function(a){if(typeof a==="string"&&a!==""){a=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(a,10,this.options.culture):+a
}return a===""||isNaN(a)?null:a
},_format:function(a){if(a===""){return""
}return window.Globalize&&this.options.numberFormat?Globalize.format(a,this.options.numberFormat,this.options.culture):a
},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})
},_value:function(f,a){var b;
if(f!==""){b=this._parse(f);
if(b!==null){if(!a){b=this._adjustValue(b)
}f=this._format(b)
}}this.element.val(f);
this._refresh()
},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",false).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
this.uiSpinner.replaceWith(this.element)
},stepUp:d(function(a){this._stepUp(a)
}),_stepUp:function(a){if(this._start()){this._spin((a||1)*this.options.step);
this._stop()
}},stepDown:d(function(a){this._stepDown(a)
}),_stepDown:function(a){if(this._start()){this._spin((a||1)*-this.options.step);
this._stop()
}},pageUp:d(function(a){this._stepUp((a||1)*this.options.page)
}),pageDown:d(function(a){this._stepDown((a||1)*this.options.page)
}),value:function(a){if(!arguments.length){return this._parse(this.element.val())
}d(this._value).call(this,a)
},widget:function(){return this.uiSpinner
}})
}(jQuery));
(function(g,l){var k=0,j=/#.*$/;
function h(){return ++k
}function i(a){a=a.cloneNode(false);
return a.hash.length>1&&decodeURIComponent(a.href.replace(j,""))===decodeURIComponent(location.href.replace(j,""))
}g.widget("ui.tabs",{version:"1.10.4",delay:300,options:{active:null,collapsible:false,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var b=this,a=this.options;
this.running=false;
this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",a.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(c){if(g(this).is(".ui-state-disabled")){c.preventDefault()
}}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){if(g(this).closest("li").is(".ui-state-disabled")){this.blur()
}});
this._processTabs();
a.active=this._initialActive();
if(g.isArray(a.disabled)){a.disabled=g.unique(a.disabled.concat(g.map(this.tabs.filter(".ui-state-disabled"),function(c){return b.tabs.index(c)
}))).sort()
}if(this.options.active!==false&&this.anchors.length){this.active=this._findActive(a.active)
}else{this.active=g()
}this._refresh();
if(this.active.length){this.load(a.active)
}},_initialActive:function(){var a=this.options.active,b=this.options.collapsible,c=location.hash.substring(1);
if(a===null){if(c){this.tabs.each(function(d,e){if(g(e).attr("aria-controls")===c){a=d;
return false
}})
}if(a===null){a=this.tabs.index(this.tabs.filter(".ui-tabs-active"))
}if(a===null||a===-1){a=this.tabs.length?0:false
}}if(a!==false){a=this.tabs.index(this.tabs.eq(a));
if(a===-1){a=b?false:0
}}if(!b&&a===false&&this.anchors.length){a=0
}return a
},_getCreateEventData:function(){return{tab:this.active,panel:!this.active.length?g():this._getPanelForTab(this.active)}
},_tabKeydown:function(a){var b=g(this.document[0].activeElement).closest("li"),d=this.tabs.index(b),c=true;
if(this._handlePageNav(a)){return
}switch(a.keyCode){case g.ui.keyCode.RIGHT:case g.ui.keyCode.DOWN:d++;
break;
case g.ui.keyCode.UP:case g.ui.keyCode.LEFT:c=false;
d--;
break;
case g.ui.keyCode.END:d=this.anchors.length-1;
break;
case g.ui.keyCode.HOME:d=0;
break;
case g.ui.keyCode.SPACE:a.preventDefault();
clearTimeout(this.activating);
this._activate(d);
return;
case g.ui.keyCode.ENTER:a.preventDefault();
clearTimeout(this.activating);
this._activate(d===this.options.active?false:d);
return;
default:return
}a.preventDefault();
clearTimeout(this.activating);
d=this._focusNextTab(d,c);
if(!a.ctrlKey){b.attr("aria-selected","false");
this.tabs.eq(d).attr("aria-selected","true");
this.activating=this._delay(function(){this.option("active",d)
},this.delay)
}},_panelKeydown:function(a){if(this._handlePageNav(a)){return
}if(a.ctrlKey&&a.keyCode===g.ui.keyCode.UP){a.preventDefault();
this.active.focus()
}},_handlePageNav:function(a){if(a.altKey&&a.keyCode===g.ui.keyCode.PAGE_UP){this._activate(this._focusNextTab(this.options.active-1,false));
return true
}if(a.altKey&&a.keyCode===g.ui.keyCode.PAGE_DOWN){this._activate(this._focusNextTab(this.options.active+1,true));
return true
}},_findNextTab:function(c,b){var d=this.tabs.length-1;
function a(){if(c>d){c=0
}if(c<0){c=d
}return c
}while(g.inArray(a(),this.options.disabled)!==-1){c=b?c+1:c-1
}return c
},_focusNextTab:function(b,a){b=this._findNextTab(b,a);
this.tabs.eq(b).focus();
return b
},_setOption:function(a,b){if(a==="active"){this._activate(b);
return
}if(a==="disabled"){this._setupDisabled(b);
return
}this._super(a,b);
if(a==="collapsible"){this.element.toggleClass("ui-tabs-collapsible",b);
if(!b&&this.options.active===false){this._activate(0)
}}if(a==="event"){this._setupEvents(b)
}if(a==="heightStyle"){this._setupHeightStyle(b)
}},_tabId:function(a){return a.attr("aria-controls")||"ui-tabs-"+h()
},_sanitizeSelector:function(a){return a?a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""
},refresh:function(){var b=this.options,a=this.tablist.children(":has(a[href])");
b.disabled=g.map(a.filter(".ui-state-disabled"),function(c){return a.index(c)
});
this._processTabs();
if(b.active===false||!this.anchors.length){b.active=false;
this.active=g()
}else{if(this.active.length&&!g.contains(this.tablist[0],this.active[0])){if(this.tabs.length===b.disabled.length){b.active=false;
this.active=g()
}else{this._activate(this._findNextTab(Math.max(0,b.active-1),false))
}}else{b.active=this.tabs.index(this.active)
}}this._refresh()
},_refresh:function(){this._setupDisabled(this.options.disabled);
this._setupEvents(this.options.event);
this._setupHeightStyle(this.options.heightStyle);
this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1});
this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"});
if(!this.active.length){this.tabs.eq(0).attr("tabIndex",0)
}else{this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0});
this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})
}},_processTabs:function(){var a=this;
this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist");
this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1});
this.anchors=this.tabs.map(function(){return g("a",this)[0]
}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1});
this.panels=g();
this.anchors.each(function(d,b){var q,f,p,c=g(b).uniqueId().attr("id"),r=g(b).closest("li"),e=r.attr("aria-controls");
if(i(b)){q=b.hash;
f=a.element.find(a._sanitizeSelector(q))
}else{p=a._tabId(r);
q="#"+p;
f=a.element.find(q);
if(!f.length){f=a._createPanel(p);
f.insertAfter(a.panels[d-1]||a.tablist)
}f.attr("aria-live","polite")
}if(f.length){a.panels=a.panels.add(f)
}if(e){r.data("ui-tabs-aria-controls",e)
}r.attr({"aria-controls":q.substring(1),"aria-labelledby":c});
f.attr("aria-labelledby",c)
});
this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")
},_getList:function(){return this.tablist||this.element.find("ol,ul").eq(0)
},_createPanel:function(a){return g("<div>").attr("id",a).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",true)
},_setupDisabled:function(a){if(g.isArray(a)){if(!a.length){a=false
}else{if(a.length===this.anchors.length){a=true
}}}for(var b=0,c;
(c=this.tabs[b]);
b++){if(a===true||g.inArray(b,a)!==-1){g(c).addClass("ui-state-disabled").attr("aria-disabled","true")
}else{g(c).removeClass("ui-state-disabled").removeAttr("aria-disabled")
}}this.options.disabled=a
},_setupEvents:function(a){var b={click:function(c){c.preventDefault()
}};
if(a){g.each(a.split(" "),function(d,c){b[c]="_eventHandler"
})
}this._off(this.anchors.add(this.tabs).add(this.panels));
this._on(this.anchors,b);
this._on(this.tabs,{keydown:"_tabKeydown"});
this._on(this.panels,{keydown:"_panelKeydown"});
this._focusable(this.tabs);
this._hoverable(this.tabs)
},_setupHeightStyle:function(a){var b,c=this.element.parent();
if(a==="fill"){b=c.height();
b-=this.element.outerHeight()-this.element.height();
this.element.siblings(":visible").each(function(){var d=g(this),e=d.css("position");
if(e==="absolute"||e==="fixed"){return
}b-=d.outerHeight(true)
});
this.element.children().not(this.panels).each(function(){b-=g(this).outerHeight(true)
});
this.panels.each(function(){g(this).height(Math.max(0,b-g(this).innerHeight()+g(this).height()))
}).css("overflow","auto")
}else{if(a==="auto"){b=0;
this.panels.each(function(){b=Math.max(b,g(this).height("").height())
}).height(b)
}}},_eventHandler:function(e){var q=this.options,a=this.active,b=g(e.currentTarget),r=b.closest("li"),c=r[0]===a[0],d=c&&q.collapsible,t=d?g():this._getPanelForTab(r),s=!a.length?g():this._getPanelForTab(a),f={oldTab:a,oldPanel:s,newTab:d?g():r,newPanel:t};
e.preventDefault();
if(r.hasClass("ui-state-disabled")||r.hasClass("ui-tabs-loading")||this.running||(c&&!q.collapsible)||(this._trigger("beforeActivate",e,f)===false)){return
}q.active=d?false:this.tabs.index(r);
this.active=c?g():r;
if(this.xhr){this.xhr.abort()
}if(!s.length&&!t.length){g.error("jQuery UI Tabs: Mismatching fragment identifier.")
}if(t.length){this.load(this.tabs.index(r),e)
}this._toggle(e,f)
},_toggle:function(b,c){var e=this,n=c.newPanel,f=c.oldPanel;
this.running=true;
function a(){e.running=false;
e._trigger("activate",b,c)
}function d(){c.newTab.closest("li").addClass("ui-tabs-active ui-state-active");
if(n.length&&e.options.show){e._show(n,e.options.show,a)
}else{n.show();
a()
}}if(f.length&&this.options.hide){this._hide(f,this.options.hide,function(){c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
d()
})
}else{c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
f.hide();
d()
}f.attr({"aria-expanded":"false","aria-hidden":"true"});
c.oldTab.attr("aria-selected","false");
if(n.length&&f.length){c.oldTab.attr("tabIndex",-1)
}else{if(n.length){this.tabs.filter(function(){return g(this).attr("tabIndex")===0
}).attr("tabIndex",-1)
}}n.attr({"aria-expanded":"true","aria-hidden":"false"});
c.newTab.attr({"aria-selected":"true",tabIndex:0})
},_activate:function(c){var b,a=this._findActive(c);
if(a[0]===this.active[0]){return
}if(!a.length){a=this.active
}b=a.find(".ui-tabs-anchor")[0];
this._eventHandler({target:b,currentTarget:b,preventDefault:g.noop})
},_findActive:function(a){return a===false?g():this.tabs.eq(a)
},_getIndex:function(a){if(typeof a==="string"){a=this.anchors.index(this.anchors.filter("[href$='"+a+"']"))
}return a
},_destroy:function(){if(this.xhr){this.xhr.abort()
}this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");
this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");
this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId();
this.tabs.add(this.panels).each(function(){if(g.data(this,"ui-tabs-destroy")){g(this).remove()
}else{g(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
}});
this.tabs.each(function(){var a=g(this),b=a.data("ui-tabs-aria-controls");
if(b){a.attr("aria-controls",b).removeData("ui-tabs-aria-controls")
}else{a.removeAttr("aria-controls")
}});
this.panels.show();
if(this.options.heightStyle!=="content"){this.panels.css("height","")
}},enable:function(b){var a=this.options.disabled;
if(a===false){return
}if(b===l){a=false
}else{b=this._getIndex(b);
if(g.isArray(a)){a=g.map(a,function(c){return c!==b?c:null
})
}else{a=g.map(this.tabs,function(c,d){return d!==b?d:null
})
}}this._setupDisabled(a)
},disable:function(b){var a=this.options.disabled;
if(a===true){return
}if(b===l){a=true
}else{b=this._getIndex(b);
if(g.inArray(b,a)!==-1){return
}if(g.isArray(a)){a=g.merge([b],a).sort()
}else{a=[b]
}}this._setupDisabled(a)
},load:function(d,b){d=this._getIndex(d);
var n=this,f=this.tabs.eq(d),a=f.find(".ui-tabs-anchor"),e=this._getPanelForTab(f),c={tab:f,panel:e};
if(i(a[0])){return
}this.xhr=g.ajax(this._ajaxSettings(a,b,c));
if(this.xhr&&this.xhr.statusText!=="canceled"){f.addClass("ui-tabs-loading");
e.attr("aria-busy","true");
this.xhr.success(function(m){setTimeout(function(){e.html(m);
n._trigger("load",b,c)
},1)
}).complete(function(m,p){setTimeout(function(){if(p==="abort"){n.panels.stop(false,true)
}f.removeClass("ui-tabs-loading");
e.removeAttr("aria-busy");
if(m===n.xhr){delete n.xhr
}},1)
})
}},_ajaxSettings:function(a,b,c){var d=this;
return{url:a.attr("href"),beforeSend:function(e,f){return d._trigger("beforeLoad",b,g.extend({jqXHR:e,ajaxSettings:f},c))
}}
},_getPanelForTab:function(b){var a=g(b).attr("aria-controls");
return this.element.find(this._sanitizeSelector("#"+a))
}})
})(jQuery);
(function(e){var g=0;
function f(b,c){var a=(b.attr("aria-describedby")||"").split(/\s+/);
a.push(c);
b.data("ui-tooltip-id",c).attr("aria-describedby",e.trim(a.join(" ")))
}function h(b){var c=b.data("ui-tooltip-id"),a=(b.attr("aria-describedby")||"").split(/\s+/),d=e.inArray(c,a);
if(d!==-1){a.splice(d,1)
}b.removeData("ui-tooltip-id");
a=e.trim(a.join(" "));
if(a){b.attr("aria-describedby",a)
}else{b.removeAttr("aria-describedby")
}}e.widget("ui.tooltip",{version:"1.10.4",options:{content:function(){var a=e(this).attr("title")||"";
return e("<a>").text(a).html()
},hide:true,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:true,tooltipClass:null,track:false,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"});
this.tooltips={};
this.parents={};
if(this.options.disabled){this._disable()
}},_setOption:function(a,c){var b=this;
if(a==="disabled"){this[c?"_disable":"_enable"]();
this.options[a]=c;
return
}this._super(a,c);
if(a==="content"){e.each(this.tooltips,function(j,d){b._updateContent(d)
})
}},_disable:function(){var a=this;
e.each(this.tooltips,function(d,b){var c=e.Event("blur");
c.target=c.currentTarget=b[0];
a.close(c,true)
});
this.element.find(this.options.items).addBack().each(function(){var b=e(this);
if(b.is("[title]")){b.data("ui-tooltip-title",b.attr("title")).attr("title","")
}})
},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var a=e(this);
if(a.data("ui-tooltip-title")){a.attr("title",a.data("ui-tooltip-title"))
}})
},open:function(a){var c=this,b=e(a?a.target:this.element).closest(this.options.items);
if(!b.length||b.data("ui-tooltip-id")){return
}if(b.attr("title")){b.data("ui-tooltip-title",b.attr("title"))
}b.data("ui-tooltip-open",true);
if(a&&a.type==="mouseover"){b.parents().each(function(){var j=e(this),d;
if(j.data("ui-tooltip-open")){d=e.Event("blur");
d.target=d.currentTarget=this;
c.close(d,true)
}if(j.attr("title")){j.uniqueId();
c.parents[this.id]={element:this,title:j.attr("title")};
j.attr("title","")
}})
}this._updateContent(b,a)
},_updateContent:function(k,c){var a,b=this.options.content,l=this,d=c?c.type:null;
if(typeof b==="string"){return this._open(c,k,b)
}a=b.call(k[0],function(i){if(!k.data("ui-tooltip-open")){return
}l._delay(function(){if(c){c.type=d
}this._open(c,k,i)
})
});
if(a){this._open(c,k,a)
}},_open:function(c,o,a){var p,d,b,n=e.extend({},this.options.position);
if(!a){return
}p=this._find(o);
if(p.length){p.find(".ui-tooltip-content").html(a);
return
}if(o.is("[title]")){if(c&&c.type==="mouseover"){o.attr("title","")
}else{o.removeAttr("title")
}}p=this._tooltip(o);
f(o,p.attr("id"));
p.find(".ui-tooltip-content").html(a);
function m(i){n.of=i;
if(p.is(":hidden")){return
}p.position(n)
}if(this.options.track&&c&&/^mouse/.test(c.type)){this._on(this.document,{mousemove:m});
m(c)
}else{p.position(e.extend({of:o},this.options.position))
}p.hide();
this._show(p,this.options.show);
if(this.options.show&&this.options.show.delay){b=this.delayedShow=setInterval(function(){if(p.is(":visible")){m(n.of);
clearInterval(b)
}},e.fx.interval)
}this._trigger("open",c,{tooltip:p});
d={keyup:function(i){if(i.keyCode===e.ui.keyCode.ESCAPE){var j=e.Event(i);
j.currentTarget=o[0];
this.close(j,true)
}},remove:function(){this._removeTooltip(p)
}};
if(!c||c.type==="mouseover"){d.mouseleave="close"
}if(!c||c.type==="focusin"){d.focusout="close"
}this._on(true,o,d)
},close:function(a){var c=this,b=e(a?a.currentTarget:this.element),d=this._find(b);
if(this.closing){return
}clearInterval(this.delayedShow);
if(b.data("ui-tooltip-title")){b.attr("title",b.data("ui-tooltip-title"))
}h(b);
d.stop(true);
this._hide(d,this.options.hide,function(){c._removeTooltip(e(this))
});
b.removeData("ui-tooltip-open");
this._off(b,"mouseleave focusout keyup");
if(b[0]!==this.element[0]){this._off(b,"remove")
}this._off(this.document,"mousemove");
if(a&&a.type==="mouseleave"){e.each(this.parents,function(k,l){e(l.element).attr("title",l.title);
delete c.parents[k]
})
}this.closing=true;
this._trigger("close",a,{tooltip:d});
this.closing=false
},_tooltip:function(a){var b="ui-tooltip-"+g++,c=e("<div>").attr({id:b,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));
e("<div>").addClass("ui-tooltip-content").appendTo(c);
c.appendTo(this.document[0].body);
this.tooltips[b]=a;
return c
},_find:function(b){var a=b.data("ui-tooltip-id");
return a?e("#"+a):e()
},_removeTooltip:function(a){a.remove();
delete this.tooltips[a.attr("id")]
},_destroy:function(){var a=this;
e.each(this.tooltips,function(d,b){var c=e.Event("blur");
c.target=c.currentTarget=b[0];
a.close(c,true);
e("#"+d).remove();
if(b.data("ui-tooltip-title")){b.attr("title",b.data("ui-tooltip-title"));
b.removeData("ui-tooltip-title")
}})
}})
}(jQuery));
(function(d,f){var e="ui-effects-";
d.effects={effect:{}};
(function(y,v){var C="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",s=/^([\-+])=\s*(\d+\.?\d*)/,w=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(g){return[g[1],g[2],g[3],g[4]]
}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(g){return[g[1]*2.55,g[2]*2.55,g[3]*2.55,g[4]]
}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(g){return[parseInt(g[1],16),parseInt(g[2],16),parseInt(g[3],16)]
}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(g){return[parseInt(g[1]+g[1],16),parseInt(g[2]+g[2],16),parseInt(g[3]+g[3],16)]
}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(g){return[g[1],g[2]/100,g[3]/100,g[4]]
}}],A=y.Color=function(i,j,h,g){return new y.Color.fn.parse(i,j,h,g)
},t={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},z={"byte":{floor:true,max:255},percent:{max:1},degrees:{mod:360,floor:true}},x=A.support={},u=y("<p>")[0],b,B=y.each;
u.style.cssText="background-color:rgba(1,1,1,.5)";
x.rgba=u.style.backgroundColor.indexOf("rgba")>-1;
B(t,function(h,g){g.cache="_"+h;
g.props.alpha={idx:3,type:"percent",def:1}
});
function a(j,h,g){var i=z[h.type]||{};
if(j==null){return(g||!h.def)?null:h.def
}j=i.floor?~~j:parseFloat(j);
if(isNaN(j)){return h.def
}if(i.mod){return(j+i.mod)%i.mod
}return 0>j?0:i.max<j?i.max:j
}function D(i){var g=A(),h=g._rgba=[];
i=i.toLowerCase();
B(w,function(l,o){var n,m=o.re.exec(i),k=m&&o.parse(m),j=o.space||"rgba";
if(k){n=g[j](k);
g[t[j].cache]=n[t[j].cache];
h=g._rgba=n._rgba;
return false
}});
if(h.length){if(h.join()==="0,0,0,0"){y.extend(h,b.transparent)
}return g
}return b[i]
}A.fn=y.extend(A.prototype,{parse:function(k,i,h,g){if(k===v){this._rgba=[null,null,null,null];
return this
}if(k.jquery||k.nodeType){k=y(k).css(i);
i=v
}var j=this,m=y.type(k),l=this._rgba=[];
if(i!==v){k=[k,i,h,g];
m="array"
}if(m==="string"){return this.parse(D(k)||b._default)
}if(m==="array"){B(t.rgba.props,function(n,o){l[o.idx]=a(k[o.idx],o)
});
return this
}if(m==="object"){if(k instanceof A){B(t,function(o,n){if(k[n.cache]){j[n.cache]=k[n.cache].slice()
}})
}else{B(t,function(n,p){var o=p.cache;
B(p.props,function(q,r){if(!j[o]&&p.to){if(q==="alpha"||k[q]==null){return
}j[o]=p.to(j._rgba)
}j[o][r.idx]=a(k[q],r,true)
});
if(j[o]&&y.inArray(null,j[o].slice(0,3))<0){j[o][3]=1;
if(p.from){j._rgba=p.from(j[o])
}}})
}return this
}},is:function(g){var i=A(g),j=true,h=this;
B(t,function(k,n){var m,l=i[n.cache];
if(l){m=h[n.cache]||n.to&&n.to(h._rgba)||[];
B(n.props,function(o,p){if(l[p.idx]!=null){j=(l[p.idx]===m[p.idx]);
return j
}})
}return j
});
return j
},_space:function(){var h=[],g=this;
B(t,function(j,i){if(g[i.cache]){h.push(j)
}});
return h.pop()
},transition:function(i,g){var h=A(i),l=h._space(),k=t[l],n=this.alpha()===0?A("transparent"):this,m=n[k.cache]||k.to(n._rgba),j=m.slice();
h=h[k.cache];
B(k.props,function(G,H){var r=H.idx,o=m[r],q=h[r],p=z[H.type]||{};
if(q===null){return
}if(o===null){j[r]=q
}else{if(p.mod){if(q-o>p.mod/2){o+=p.mod
}else{if(o-q>p.mod/2){o-=p.mod
}}}j[r]=a((q-o)*g+o,H)
}});
return this[l](j)
},blend:function(i){if(this._rgba[3]===1){return this
}var j=this._rgba.slice(),g=j.pop(),h=A(i)._rgba;
return A(y.map(j,function(l,k){return(1-g)*h[k]+g*l
}))
},toRgbaString:function(){var g="rgba(",h=y.map(this._rgba,function(j,i){return j==null?(i>2?1:0):j
});
if(h[3]===1){h.pop();
g="rgb("
}return g+h.join()+")"
},toHslaString:function(){var h="hsla(",g=y.map(this.hsla(),function(j,i){if(j==null){j=i>2?1:0
}if(i&&i<3){j=Math.round(j*100)+"%"
}return j
});
if(g[3]===1){g.pop();
h="hsl("
}return h+g.join()+")"
},toHexString:function(h){var i=this._rgba.slice(),g=i.pop();
if(h){i.push(~~(g*255))
}return"#"+y.map(i,function(j){j=(j||0).toString(16);
return j.length===1?"0"+j:j
}).join("")
},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()
}});
A.fn.parse.prototype=A.fn;
function c(h,i,g){g=(g+1)%1;
if(g*6<1){return h+(i-h)*g*6
}if(g*2<1){return i
}if(g*3<2){return h+(i-h)*((2/3)-g)*6
}return h
}t.hsla.to=function(n){if(n[0]==null||n[1]==null||n[2]==null){return[null,null,null,n[3]]
}var m=n[0]/255,h=n[1]/255,r=n[2]/255,p=n[3],k=Math.max(m,h,r),l=Math.min(m,h,r),g=k-l,q=k+l,j=q*0.5,i,o;
if(l===k){i=0
}else{if(m===k){i=(60*(h-r)/g)+360
}else{if(h===k){i=(60*(r-m)/g)+120
}else{i=(60*(m-h)/g)+240
}}}if(g===0){o=0
}else{if(j<=0.5){o=g/q
}else{o=g/(2-q)
}}return[Math.round(i)%360,o,j,p==null?1:p]
};
t.hsla.from=function(i){if(i[0]==null||i[1]==null||i[2]==null){return[null,null,null,i[3]]
}var h=i[0]/360,m=i[1],j=i[2],g=i[3],l=j<=0.5?j*(1+m):j+m-j*m,k=2*j-l;
return[Math.round(c(k,l,h+(1/3))*255),Math.round(c(k,l,h)*255),Math.round(c(k,l,h-(1/3))*255),g]
};
B(t,function(k,j){var i=j.props,g=j.cache,l=j.to,h=j.from;
A.fn[k]=function(n){if(l&&!this[g]){this[g]=l(this._rgba)
}if(n===v){return this[g].slice()
}var q,m=y.type(n),o=(m==="array"||m==="object")?n:arguments,p=this[g].slice();
B(i,function(H,r){var G=o[m==="object"?H:r.idx];
if(G==null){G=p[r.idx]
}p[r.idx]=a(G,r)
});
if(h){q=A(h(p));
q[g]=p;
return q
}else{return A(p)
}};
B(i,function(m,n){if(A.fn[m]){return
}A.fn[m]=function(o){var p=y.type(o),r=(m==="alpha"?(this._hsla?"hsla":"rgba"):k),G=this[r](),q=G[n.idx],H;
if(p==="undefined"){return q
}if(p==="function"){o=o.call(this,q);
p=y.type(o)
}if(o==null&&n.empty){return this
}if(p==="string"){H=s.exec(o);
if(H){o=q+parseFloat(H[2])*(H[1]==="+"?1:-1)
}}G[n.idx]=o;
return this[r](G)
}
})
});
A.hook=function(g){var h=g.split(" ");
B(h,function(j,i){y.cssHooks[i]={set:function(l,n){var m,p,o="";
if(n!=="transparent"&&(y.type(n)!=="string"||(m=D(n)))){n=A(m||n);
if(!x.rgba&&n._rgba[3]!==1){p=i==="backgroundColor"?l.parentNode:l;
while((o===""||o==="transparent")&&p&&p.style){try{o=y.css(p,"backgroundColor");
p=p.parentNode
}catch(k){}}n=n.blend(o&&o!=="transparent"?o:"_default")
}n=n.toRgbaString()
}try{l.style[i]=n
}catch(k){}}};
y.fx.step[i]=function(k){if(!k.colorInit){k.start=A(k.elem,i);
k.end=A(k.end);
k.colorInit=true
}y.cssHooks[i].set(k.elem,k.start.transition(k.end,k.pos))
}
})
};
A.hook(C);
y.cssHooks.borderColor={expand:function(h){var g={};
B(["Top","Right","Bottom","Left"],function(i,j){g["border"+j+"Color"]=h
});
return g
}};
b=y.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}
})(jQuery);
(function(){var a=["add","remove","toggle"],c={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};
d.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(g,j){d.fx.step[j]=function(i){if(i.end!=="none"&&!i.setAttr||i.pos===1&&!i.setAttr){jQuery.style(i.elem,j,i.end);
i.setAttr=true
}}
});
function b(g){var m,n,o=g.ownerDocument.defaultView?g.ownerDocument.defaultView.getComputedStyle(g,null):g.currentStyle,p={};
if(o&&o.length&&o[0]&&o[o[0]]){n=o.length;
while(n--){m=o[n];
if(typeof o[m]==="string"){p[d.camelCase(m)]=o[m]
}}}else{for(m in o){if(typeof o[m]==="string"){p[m]=o[m]
}}}return p
}function h(o,n){var g={},m,p;
for(m in n){p=n[m];
if(o[m]!==p){if(!c[m]){if(d.fx.step[m]||!isNaN(parseFloat(p))){g[m]=p
}}}}return g
}if(!d.fn.addBack){d.fn.addBack=function(g){return this.add(g==null?this.prevObject:this.prevObject.filter(g))
}
}d.effects.animateClass=function(p,m,n,g){var o=d.speed(m,n,g);
return this.queue(function(){var j=d(this),l=j.attr("class")||"",k,i=o.children?j.find("*").addBack():j;
i=i.map(function(){var r=d(this);
return{el:r,start:b(this)}
});
k=function(){d.each(a,function(t,s){if(p[s]){j[s+"Class"](p[s])
}})
};
k();
i=i.map(function(){this.end=b(this.el[0]);
this.diff=h(this.start,this.end);
return this
});
j.attr("class",l);
i=i.map(function(){var v=this,t=d.Deferred(),u=d.extend({},o,{queue:false,complete:function(){t.resolve(v)
}});
this.el.animate(this.diff,u);
return t.promise()
});
d.when.apply(d,i.get()).done(function(){k();
d.each(arguments,function(){var r=this.el;
d.each(this.diff,function(q){r.css(q,"")
})
});
o.complete.call(j[0])
})
})
};
d.fn.extend({addClass:(function(g){return function(n,p,o,m){return p?d.effects.animateClass.call(this,{add:n},p,o,m):g.apply(this,arguments)
}
})(d.fn.addClass),removeClass:(function(g){return function(n,p,o,m){return arguments.length>1?d.effects.animateClass.call(this,{remove:n},p,o,m):g.apply(this,arguments)
}
})(d.fn.removeClass),toggleClass:(function(g){return function(o,q,r,p,n){if(typeof q==="boolean"||q===f){if(!r){return g.apply(this,arguments)
}else{return d.effects.animateClass.call(this,(q?{add:o}:{remove:o}),r,p,n)
}}else{return d.effects.animateClass.call(this,{toggle:o},q,r,p)
}}
})(d.fn.toggleClass),switchClass:function(o,g,p,n,m){return d.effects.animateClass.call(this,{add:g,remove:o},p,n,m)
}})
})();
(function(){d.extend(d.effects,{version:"1.10.4",save:function(c,j){for(var i=0;
i<j.length;
i++){if(j[i]!==null){c.data(e+j[i],c[0].style[j[i]])
}}},restore:function(c,k){var l,i;
for(i=0;
i<k.length;
i++){if(k[i]!==null){l=c.data(e+k[i]);
if(l===f){l=""
}c.css(k[i],l)
}}},setMode:function(c,h){if(h==="toggle"){h=c.is(":hidden")?"show":"hide"
}return h
},getBaseline:function(c,j){var l,k;
switch(c[0]){case"top":l=0;
break;
case"middle":l=0.5;
break;
case"bottom":l=1;
break;
default:l=c[0]/j.height
}switch(c[1]){case"left":k=0;
break;
case"center":k=0.5;
break;
case"right":k=1;
break;
default:k=c[1]/j.width
}return{x:k,y:l}
},createWrapper:function(m){if(m.parent().is(".ui-effects-wrapper")){return m.parent()
}var n={width:m.outerWidth(true),height:m.outerHeight(true),"float":m.css("float")},p=d("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),o={width:m.width(),height:m.height()},c=document.activeElement;
try{c.id
}catch(l){c=document.body
}m.wrap(p);
if(m[0]===c||d.contains(m[0],c)){d(c).focus()
}p=m.parent();
if(m.css("position")==="static"){p.css({position:"relative"});
m.css({position:"relative"})
}else{d.extend(n,{position:m.css("position"),zIndex:m.css("z-index")});
d.each(["top","left","bottom","right"],function(g,h){n[h]=m.css(h);
if(isNaN(parseInt(n[h],10))){n[h]="auto"
}});
m.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})
}m.css(o);
return p.css(n).show()
},removeWrapper:function(h){var c=document.activeElement;
if(h.parent().is(".ui-effects-wrapper")){h.parent().replaceWith(h);
if(h[0]===c||d.contains(h[0],c)){d(c).focus()
}}return h
},setTransition:function(c,k,j,l){l=l||{};
d.each(k,function(g,i){var h=c.cssUnit(i);
if(h[0]>0){l[i]=h[0]*j+h[1]
}});
return l
}});
function a(j,k,l,c){if(d.isPlainObject(j)){k=j;
j=j.effect
}j={effect:j};
if(k==null){k={}
}if(d.isFunction(k)){c=k;
l=null;
k={}
}if(typeof k==="number"||d.fx.speeds[k]){c=l;
l=k;
k={}
}if(d.isFunction(l)){c=l;
l=null
}if(k){d.extend(j,k)
}l=l||k.duration;
j.duration=d.fx.off?0:typeof l==="number"?l:l in d.fx.speeds?d.fx.speeds[l]:d.fx.speeds._default;
j.complete=c||k.complete;
return j
}function b(c){if(!c||typeof c==="number"||d.fx.speeds[c]){return true
}if(typeof c==="string"&&!d.effects.effect[c]){return true
}if(d.isFunction(c)){return true
}if(typeof c==="object"&&!c.effect){return true
}return false
}d.fn.extend({effect:function(){var c=a.apply(this,arguments),l=c.mode,m=c.queue,k=d.effects.effect[c.effect];
if(d.fx.off||!k){if(l){return this[l](c.duration,c.complete)
}else{return this.each(function(){if(c.complete){c.complete.call(this)
}})
}}function n(p){var i=d(this),g=c.complete,j=c.mode;
function h(){if(d.isFunction(g)){g.call(i[0])
}if(d.isFunction(p)){p()
}}if(i.is(":hidden")?j==="hide":j==="show"){i[j]();
h()
}else{k.call(i[0],c,h)
}}return m===false?this.each(n):this.queue(m||"fx",n)
},show:(function(c){return function(j){if(b(j)){return c.apply(this,arguments)
}else{var i=a.apply(this,arguments);
i.mode="show";
return this.effect.call(this,i)
}}
})(d.fn.show),hide:(function(c){return function(j){if(b(j)){return c.apply(this,arguments)
}else{var i=a.apply(this,arguments);
i.mode="hide";
return this.effect.call(this,i)
}}
})(d.fn.hide),toggle:(function(c){return function(j){if(b(j)||typeof j==="boolean"){return c.apply(this,arguments)
}else{var i=a.apply(this,arguments);
i.mode="toggle";
return this.effect.call(this,i)
}}
})(d.fn.toggle),cssUnit:function(c){var i=this.css(c),j=[];
d.each(["em","px","%","pt"],function(g,h){if(i.indexOf(h)>0){j=[parseFloat(i),h]
}});
return j
}})
})();
(function(){var a={};
d.each(["Quad","Cubic","Quart","Quint","Expo"],function(b,c){a[c]=function(h){return Math.pow(h,b+2)
}
});
d.extend(a,{Sine:function(b){return 1-Math.cos(b*Math.PI/2)
},Circ:function(b){return 1-Math.sqrt(1-b*b)
},Elastic:function(b){return b===0||b===1?b:-Math.pow(2,8*(b-1))*Math.sin(((b-1)*80-7.5)*Math.PI/15)
},Back:function(b){return b*b*(3*b-2)
},Bounce:function(c){var h,b=4;
while(c<((h=Math.pow(2,--b))-1)/11){}return 1/Math.pow(4,3-b)-7.5625*Math.pow((h*3-2)/22-c,2)
}});
d.each(a,function(c,b){d.easing["easeIn"+c]=b;
d.easing["easeOut"+c]=function(h){return 1-b(1-h)
};
d.easing["easeInOut"+c]=function(h){return h<0.5?b(h*2)/2:1-b(h*-2+2)/2
}
})
})()
})(jQuery);
(function(e,h){var g=/up|down|vertical/,f=/up|left|vertical|horizontal/;
e.effects.effect.blind=function(v,D){var d=e(this),C=["position","top","bottom","left","right","height","width"],w=e.effects.setMode(d,v.mode||"hide"),x=v.direction||"up",u=g.test(x),A=u?"height":"width",o=u?"top":"left",c=f.test(x),a={},z=w==="show",b,B,y;
if(d.parent().is(".ui-effects-wrapper")){e.effects.save(d.parent(),C)
}else{e.effects.save(d,C)
}d.show();
b=e.effects.createWrapper(d).css({overflow:"hidden"});
B=b[A]();
y=parseFloat(b.css(o))||0;
a[A]=z?B:0;
if(!c){d.css(u?"bottom":"right",0).css(u?"top":"left","auto").css({position:"absolute"});
a[o]=z?y:B+y
}if(z){b.css(A,0);
if(!c){b.css(o,y+B)
}}b.animate(a,{duration:v.duration,easing:v.easing,queue:false,complete:function(){if(w==="hide"){d.hide()
}e.effects.restore(d,C);
e.effects.removeWrapper(d);
D()
}})
}
})(jQuery);
(function(c,d){c.effects.effect.bounce=function(L,F){var E=c(this),M=["position","top","bottom","left","right","height","width"],K=c.effects.setMode(E,L.mode||"effect"),I=K==="hide",z=K==="show",A=L.direction||"up",b=L.distance,C=L.times||5,a=C*2+(z||I?1:0),B=L.duration/a,H=L.easing,y=(A==="up"||A==="down")?"top":"left",i=(A==="up"||A==="left"),J,D,G,N=E.queue(),o=N.length;
if(z||I){M.push("opacity")
}c.effects.save(E,M);
E.show();
c.effects.createWrapper(E);
if(!b){b=E[y==="top"?"outerHeight":"outerWidth"]()/3
}if(z){G={opacity:1};
G[y]=0;
E.css("opacity",0).css(y,i?-b*2:b*2).animate(G,B,H)
}if(I){b=b/Math.pow(2,C-1)
}G={};
G[y]=0;
for(J=0;
J<C;
J++){D={};
D[y]=(i?"-=":"+=")+b;
E.animate(D,B,H).animate(G,B,H);
b=I?b*2:b/2
}if(I){D={opacity:0};
D[y]=(i?"-=":"+=")+b;
E.animate(D,B,H)
}E.queue(function(){if(I){E.hide()
}c.effects.restore(E,M);
c.effects.removeWrapper(E);
F()
});
if(o>1){N.splice.apply(N,[1,0].concat(N.splice(o,a+1)))
}E.dequeue()
}
})(jQuery);
(function(c,d){c.effects.effect.clip=function(x,o){var v=c(this),z=["position","top","bottom","left","right","height","width"],s=c.effects.setMode(v,x.mode||"hide"),w=s==="show",b=x.direction||"vertical",y=b==="vertical",B=y?"height":"width",u=y?"top":"left",A={},r,a,t;
c.effects.save(v,z);
v.show();
r=c.effects.createWrapper(v).css({overflow:"hidden"});
a=(v[0].tagName==="IMG")?r:v;
t=a[B]();
if(w){a.css(B,0);
a.css(u,t/2)
}A[B]=w?t:0;
A[u]=w?0:t/2;
a.animate(A,{queue:false,duration:x.duration,easing:x.easing,complete:function(){if(!w){v.hide()
}c.effects.restore(v,z);
c.effects.removeWrapper(v);
o()
}})
}
})(jQuery);
(function(c,d){c.effects.effect.drop=function(s,o){var p=c(this),t=["position","top","bottom","left","right","opacity","height","width"],q=c.effects.setMode(p,s.mode||"hide"),v=q==="show",b=s.direction||"left",u=(b==="up"||b==="down")?"top":"left",r=(b==="up"||b==="left")?"pos":"neg",a={opacity:v?1:0},n;
c.effects.save(p,t);
p.show();
c.effects.createWrapper(p);
n=s.distance||p[u==="top"?"outerHeight":"outerWidth"](true)/2;
if(v){p.css("opacity",0).css(u,r==="pos"?-n:n)
}a[u]=(v?(r==="pos"?"+=":"-="):(r==="pos"?"-=":"+="))+n;
p.animate(a,{queue:false,duration:s.duration,easing:s.easing,complete:function(){if(q==="hide"){p.hide()
}c.effects.restore(p,t);
c.effects.removeWrapper(p);
o()
}})
}
})(jQuery);
(function(c,d){c.effects.effect.explode=function(j,B){var L=j.pieces?Math.round(Math.sqrt(j.pieces)):3,A=L,C=c(this),H=c.effects.setMode(C,j.mode||"hide"),o=H==="show",J=C.show().css("visibility","hidden").offset(),z=Math.ceil(C.outerWidth()/A),D=Math.ceil(C.outerHeight()/L),K=[],E,F,G,y,i,I;
function b(){K.push(this);
if(K.length===L*A){a()
}}for(E=0;
E<L;
E++){y=J.top+E*D;
I=E-(L-1)/2;
for(F=0;
F<A;
F++){G=J.left+F*z;
i=F-(A-1)/2;
C.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-F*z,top:-E*D}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:z,height:D,left:G+(o?i*z:0),top:y+(o?I*D:0),opacity:o?0:1}).animate({left:G+(o?0:i*z),top:y+(o?0:I*D),opacity:o?1:0},j.duration||500,j.easing,b)
}}function a(){C.css({visibility:"visible"});
c(K).remove();
if(!o){C.hide()
}B()
}}
})(jQuery);
(function(c,d){c.effects.effect.fade=function(h,a){var b=c(this),g=c.effects.setMode(b,h.mode||"toggle");
b.animate({opacity:g},{queue:false,duration:h.duration,easing:h.easing,complete:a})
}
})(jQuery);
(function(c,d){c.effects.effect.fold=function(H,B){var D=c(this),u=["position","top","bottom","left","right","height","width"],G=c.effects.setMode(D,H.mode||"hide"),w=G==="show",E=G==="hide",x=H.size||15,o=/([0-9]+)%/.exec(x),F=!!H.horizFirst,y=w!==F,v=y?["width","height"]:["height","width"],C=H.duration/2,z,b,a={},A={};
c.effects.save(D,u);
D.show();
z=c.effects.createWrapper(D).css({overflow:"hidden"});
b=y?[z.width(),z.height()]:[z.height(),z.width()];
if(o){x=parseInt(o[1],10)/100*b[E?0:1]
}if(w){z.css(F?{height:0,width:x}:{height:x,width:0})
}a[v[0]]=w?b[0]:x;
A[v[1]]=w?b[1]:0;
z.animate(a,C,H.easing).animate(A,C,H.easing,function(){if(E){D.hide()
}c.effects.restore(D,u);
c.effects.removeWrapper(D);
B()
})
}
})(jQuery);
(function(c,d){c.effects.effect.highlight=function(k,b){var i=c(this),l=["backgroundImage","backgroundColor","opacity"],j=c.effects.setMode(i,k.mode||"show"),a={backgroundColor:i.css("backgroundColor")};
if(j==="hide"){a.opacity=0
}c.effects.save(i,l);
i.show().css({backgroundImage:"none",backgroundColor:k.color||"#ffff99"}).animate(a,{queue:false,duration:k.duration,easing:k.easing,complete:function(){if(j==="hide"){i.hide()
}c.effects.restore(i,l);
b()
}})
}
})(jQuery);
(function(c,d){c.effects.effect.pulsate=function(v,i){var r=c(this),u=c.effects.setMode(r,v.mode||"show"),y=u==="show",s=u==="hide",z=(y||u==="hide"),b=((v.times||5)*2)+(z?1:0),o=v.duration/b,a=0,w=r.queue(),x=w.length,t;
if(y||!r.is(":visible")){r.css("opacity",0).show();
a=1
}for(t=1;
t<b;
t++){r.animate({opacity:a},o,v.easing);
a=1-a
}r.animate({opacity:a},o,v.easing);
r.queue(function(){if(s){r.hide()
}i()
});
if(x>1){w.splice.apply(w,[1,0].concat(w.splice(x,b+1)))
}r.dequeue()
}
})(jQuery);
(function(c,d){c.effects.effect.puff=function(n,a){var b=c(this),m=c.effects.setMode(b,n.mode||"hide"),l=m==="hide",p=parseInt(n.percent,10)||150,k=p/100,o={height:b.height(),width:b.width(),outerHeight:b.outerHeight(),outerWidth:b.outerWidth()};
c.extend(n,{effect:"scale",queue:false,fade:true,mode:m,complete:a,percent:l?p:100,from:l?o:{height:o.height*k,width:o.width*k,outerHeight:o.outerHeight*k,outerWidth:o.outerWidth*k}});
b.effect(n)
};
c.effects.effect.scale=function(p,b){var m=c(this),q=c.extend(true,{},p),o=c.effects.setMode(m,p.mode||"effect"),t=parseInt(p.percent,10)||(parseInt(p.percent,10)===0?0:(o==="hide"?0:100)),a=p.direction||"both",r=p.origin,s={height:m.height(),width:m.width(),outerHeight:m.outerHeight(),outerWidth:m.outerWidth()},n={y:a!=="horizontal"?(t/100):1,x:a!=="vertical"?(t/100):1};
q.effect="size";
q.queue=false;
q.complete=b;
if(o!=="effect"){q.origin=r||["middle","center"];
q.restore=true
}q.from=p.from||(o==="show"?{height:0,width:0,outerHeight:0,outerWidth:0}:s);
q.to={height:s.height*n.y,width:s.width*n.x,outerHeight:s.outerHeight*n.y,outerWidth:s.outerWidth*n.x};
if(q.fade){if(o==="show"){q.from.opacity=0;
q.to.opacity=1
}if(o==="hide"){q.from.opacity=1;
q.to.opacity=0
}}m.effect(q)
};
c.effects.effect.size=function(E,L){var B,a,w,b=c(this),J=["position","top","bottom","left","right","width","height","overflow","opacity"],F=["position","top","bottom","left","right","overflow","opacity"],G=["width","height","overflow"],z=["fontSize"],x=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],C=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],y=c.effects.setMode(b,E.mode||"effect"),o=E.restore||y!=="effect",I=E.scale||"both",A=E.origin||["middle","center"],H=b.css("position"),D=o?J:F,K={height:0,width:0,outerHeight:0,outerWidth:0};
if(y==="show"){b.show()
}B={height:b.height(),width:b.width(),outerHeight:b.outerHeight(),outerWidth:b.outerWidth()};
if(E.mode==="toggle"&&y==="show"){b.from=E.to||K;
b.to=E.from||B
}else{b.from=E.from||(y==="show"?K:B);
b.to=E.to||(y==="hide"?K:B)
}w={from:{y:b.from.height/B.height,x:b.from.width/B.width},to:{y:b.to.height/B.height,x:b.to.width/B.width}};
if(I==="box"||I==="both"){if(w.from.y!==w.to.y){D=D.concat(x);
b.from=c.effects.setTransition(b,x,w.from.y,b.from);
b.to=c.effects.setTransition(b,x,w.to.y,b.to)
}if(w.from.x!==w.to.x){D=D.concat(C);
b.from=c.effects.setTransition(b,C,w.from.x,b.from);
b.to=c.effects.setTransition(b,C,w.to.x,b.to)
}}if(I==="content"||I==="both"){if(w.from.y!==w.to.y){D=D.concat(z).concat(G);
b.from=c.effects.setTransition(b,z,w.from.y,b.from);
b.to=c.effects.setTransition(b,z,w.to.y,b.to)
}}c.effects.save(b,D);
b.show();
c.effects.createWrapper(b);
b.css("overflow","hidden").css(b.from);
if(A){a=c.effects.getBaseline(A,B);
b.from.top=(B.outerHeight-b.outerHeight())*a.y;
b.from.left=(B.outerWidth-b.outerWidth())*a.x;
b.to.top=(B.outerHeight-b.to.outerHeight)*a.y;
b.to.left=(B.outerWidth-b.to.outerWidth)*a.x
}b.css(b.from);
if(I==="content"||I==="both"){x=x.concat(["marginTop","marginBottom"]).concat(z);
C=C.concat(["marginLeft","marginRight"]);
G=J.concat(x).concat(C);
b.find("*[width]").each(function(){var f=c(this),e={height:f.height(),width:f.width(),outerHeight:f.outerHeight(),outerWidth:f.outerWidth()};
if(o){c.effects.save(f,G)
}f.from={height:e.height*w.from.y,width:e.width*w.from.x,outerHeight:e.outerHeight*w.from.y,outerWidth:e.outerWidth*w.from.x};
f.to={height:e.height*w.to.y,width:e.width*w.to.x,outerHeight:e.height*w.to.y,outerWidth:e.width*w.to.x};
if(w.from.y!==w.to.y){f.from=c.effects.setTransition(f,x,w.from.y,f.from);
f.to=c.effects.setTransition(f,x,w.to.y,f.to)
}if(w.from.x!==w.to.x){f.from=c.effects.setTransition(f,C,w.from.x,f.from);
f.to=c.effects.setTransition(f,C,w.to.x,f.to)
}f.css(f.from);
f.animate(f.to,E.duration,E.easing,function(){if(o){c.effects.restore(f,G)
}})
})
}b.animate(b.to,{queue:false,duration:E.duration,easing:E.easing,complete:function(){if(b.to.opacity===0){b.css("opacity",b.from.opacity)
}if(y==="hide"){b.hide()
}c.effects.restore(b,D);
if(!o){if(H==="static"){b.css({position:"relative",top:b.to.top,left:b.to.left})
}else{c.each(["top","left"],function(e,f){b.css(f,function(g,h){var j=parseInt(h,10),i=e?b.to.left:b.to.top;
if(h==="auto"){return i+"px"
}return j+i+"px"
})
})
}}c.effects.removeWrapper(b);
L()
}})
}
})(jQuery);
(function(c,d){c.effects.effect.shake=function(w,x){var y=c(this),D=["position","top","bottom","left","right","height","width"],z=c.effects.setMode(y,w.mode||"effect"),G=w.direction||"left",o=w.distance||20,I=w.times||3,J=I*2+1,H=Math.round(w.duration/J),F=(G==="up"||G==="down")?"top":"left",B=(G==="up"||G==="left"),a={},i={},C={},b,E=y.queue(),A=E.length;
c.effects.save(y,D);
y.show();
c.effects.createWrapper(y);
a[F]=(B?"-=":"+=")+o;
i[F]=(B?"+=":"-=")+o*2;
C[F]=(B?"-=":"+=")+o*2;
y.animate(a,H,w.easing);
for(b=1;
b<I;
b++){y.animate(i,H,w.easing).animate(C,H,w.easing)
}y.animate(i,H,w.easing).animate(a,H/2,w.easing).queue(function(){if(z==="hide"){y.hide()
}c.effects.restore(y,D);
c.effects.removeWrapper(y);
x()
});
if(A>1){E.splice.apply(E,[1,0].concat(E.splice(A,J+1)))
}y.dequeue()
}
})(jQuery);
(function(c,d){c.effects.effect.slide=function(r,o){var p=c(this),t=["position","top","bottom","left","right","width","height"],q=c.effects.setMode(p,r.mode||"show"),v=q==="show",b=r.direction||"left",u=(b==="up"||b==="down")?"top":"left",s=(b==="up"||b==="left"),n,a={};
c.effects.save(p,t);
p.show();
n=r.distance||p[u==="top"?"outerHeight":"outerWidth"](true);
c.effects.createWrapper(p).css({overflow:"hidden"});
if(v){p.css(u,s?(isNaN(n)?"-"+n:-n):n)
}a[u]=(v?(s?"+=":"-="):(s?"-=":"+="))+n;
p.animate(a,{queue:false,duration:r.duration,easing:r.easing,complete:function(){if(q==="hide"){p.hide()
}c.effects.restore(p,t);
c.effects.removeWrapper(p);
o()
}})
}
})(jQuery);
(function(c,d){c.effects.effect.transfer=function(t,o){var p=c(this),v=c(t.to),w=v.css("position")==="fixed",b=c("body"),s=w?b.scrollTop():0,r=w?b.scrollLeft():0,q=v.offset(),a={top:q.top-s,left:q.left-r,height:v.innerHeight(),width:v.innerWidth()},u=p.offset(),x=c("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({top:u.top-s,left:u.left-r,height:p.innerHeight(),width:p.innerWidth(),position:w?"fixed":"absolute"}).animate(a,t.duration,t.easing,function(){x.remove();
o()
})
}
})(jQuery);