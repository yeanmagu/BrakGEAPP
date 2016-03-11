(function(K,aM){var p=function(aV,aU){return new p.fn.init(aV,aU)
},b=K.jQuery,a=K.$,l=K.document,ak,M=/^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,H=/^.[^:#\[\.,]*$/,ah=/\S/,az=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,au=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,aN=navigator.userAgent,C,R=false,ai=[],m,aK=Object.prototype.toString,B=Object.prototype.hasOwnProperty,L=Array.prototype.push,aG=Array.prototype.slice,d=Array.prototype.indexOf;
p.fn=p.prototype={init:function(aZ,aU){var aX,aW,aY,aV;
if(!aZ){return this
}if(aZ.nodeType){this.context=this[0]=aZ;
this.length=1;
return this
}if(typeof aZ==="string"){aX=M.exec(aZ);
if(aX&&(aX[1]||!aU)){if(aX[1]){aV=(aU?aU.ownerDocument||aU:l);
aY=au.exec(aZ);
if(aY){if(p.isPlainObject(aU)){aZ=[l.createElement(aY[1])];
p.fn.attr.call(aZ,aU,true)
}else{aZ=[aV.createElement(aY[1])]
}}else{aY=U([aX[1]],[aV]);
aZ=(aY.cacheable?aY.fragment.cloneNode(true):aY.fragment).childNodes
}}else{aW=l.getElementById(aX[2]);
if(aW){if(aW.id!==aX[2]){return ak.find(aZ)
}this.length=1;
this[0]=aW
}this.context=l;
this.selector=aZ;
return this
}}else{if(!aU&&/^\w+$/.test(aZ)){this.selector=aZ;
this.context=l;
aZ=l.getElementsByTagName(aZ)
}else{if(!aU||aU.jquery){return(aU||ak).find(aZ)
}else{return p(aU).find(aZ)
}}}}else{if(p.isFunction(aZ)){return ak.ready(aZ)
}}if(aZ.selector!==aM){this.selector=aZ.selector;
this.context=aZ.context
}return p.isArray(aZ)?this.setArray(aZ):p.makeArray(aZ,this)
},selector:"",jquery:"1.4.1",length:0,size:function(){return this.length
},toArray:function(){return aG.call(this,0)
},get:function(aU){return aU==null?this.toArray():(aU<0?this.slice(aU)[0]:this[aU])
},pushStack:function(aU,aV,aX){var aW=p(aU||null);
aW.prevObject=this;
aW.context=this.context;
if(aV==="find"){aW.selector=this.selector+(this.selector?" ":"")+aX
}else{if(aV){aW.selector=this.selector+"."+aV+"("+aX+")"
}}return aW
},setArray:function(aU){this.length=0;
L.apply(this,aU);
return this
},each:function(aV,aU){return p.each(this,aV,aU)
},ready:function(aU){p.bindReady();
if(p.isReady){aU.call(l,p)
}else{if(ai){ai.push(aU)
}}return this
},eq:function(aU){return aU===-1?this.slice(aU):this.slice(aU,+aU+1)
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},slice:function(){return this.pushStack(aG.apply(this,arguments),"slice",aG.call(arguments).join(","))
},map:function(aU){return this.pushStack(p.map(this,function(aV,aW){return aU.call(aV,aW,aV)
}))
},end:function(){return this.prevObject||p(null)
},push:L,sort:[].sort,splice:[].splice};
p.fn.init.prototype=p.fn;
p.extend=p.fn.extend=function(){var a2=arguments[0]||{},aX=1,aY=arguments.length,aW=false,a0,aZ,a1,aV;
if(typeof a2==="boolean"){aW=a2;
a2=arguments[1]||{};
aX=2
}if(typeof a2!=="object"&&!p.isFunction(a2)){a2={}
}if(aY===aX){a2=this;
--aX
}for(;
aX<aY;
aX++){if((a0=arguments[aX])!=null){for(aZ in a0){a1=a2[aZ];
aV=a0[aZ];
if(a2===aV){continue
}if(aW&&aV&&(p.isPlainObject(aV)||p.isArray(aV))){var aU=a1&&(p.isPlainObject(a1)||p.isArray(a1))?a1:p.isArray(aV)?[]:{};
a2[aZ]=p.extend(aW,aU,aV)
}else{if(aV!==aM){a2[aZ]=aV
}}}}}return a2
};
p.extend({noConflict:function(aU){K.$=a;
if(aU){K.jQuery=b
}return p
},isReady:false,ready:function(){if(!p.isReady){if(!l.body){return setTimeout(p.ready,13)
}p.isReady=true;
if(ai){var aU,aV=0;
while((aU=ai[aV++])){aU.call(l,p)
}ai=null
}if(p.fn.triggerHandler){p(l).triggerHandler("ready")
}}},bindReady:function(){if(R){return
}R=true;
if(l.readyState==="complete"){return p.ready()
}if(l.addEventListener){l.addEventListener("DOMContentLoaded",m,false);
K.addEventListener("load",p.ready,false)
}else{if(l.attachEvent){l.attachEvent("onreadystatechange",m);
K.attachEvent("onload",p.ready);
var aV=false;
try{aV=K.frameElement==null
}catch(aU){}if(l.documentElement.doScroll&&aV){n()
}}}},isFunction:function(aU){return aK.call(aU)==="[object Function]"
},isArray:function(aU){return aK.call(aU)==="[object Array]"
},isPlainObject:function(aV){if(!aV||aK.call(aV)!=="[object Object]"||aV.nodeType||aV.setInterval){return false
}if(aV.constructor&&!B.call(aV,"constructor")&&!B.call(aV.constructor.prototype,"isPrototypeOf")){return false
}var aU;
for(aU in aV){}return aU===aM||B.call(aV,aU)
},isEmptyObject:function(aV){for(var aU in aV){return false
}return true
},error:function(aU){throw aU
},parseJSON:function(aU){if(typeof aU!=="string"||!aU){return null
}if(/^[\],:{}\s]*$/.test(aU.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){return K.JSON&&K.JSON.parse?K.JSON.parse(aU):(new Function("return "+aU))()
}else{p.error("Invalid JSON: "+aU)
}},noop:function(){},globalEval:function(aU){if(aU&&ah.test(aU)){var aV=l.getElementsByTagName("head")[0]||l.documentElement,aW=l.createElement("script");
aW.type="text/javascript";
if(p.support.scriptEval){aW.appendChild(l.createTextNode(aU))
}else{aW.text=aU
}aV.insertBefore(aW,aV.firstChild);
aV.removeChild(aW)
}},nodeName:function(aU,aV){return aU.nodeName&&aU.nodeName.toUpperCase()===aV.toUpperCase()
},each:function(aU,aX,aW){var a1,aY=0,a0=aU.length,aZ=a0===aM||p.isFunction(aU);
if(aW){if(aZ){for(a1 in aU){if(aX.apply(aU[a1],aW)===false){break
}}}else{for(;
aY<a0;
){if(aX.apply(aU[aY++],aW)===false){break
}}}}else{if(aZ){for(a1 in aU){if(aX.call(aU[a1],a1,aU[a1])===false){break
}}}else{for(var aV=aU[0];
aY<a0&&aX.call(aV,aY,aV)!==false;
aV=aU[++aY]){}}}return aU
},trim:function(aU){return(aU||"").replace(az,"")
},makeArray:function(aU,aV){var aW=aV||[];
if(aU!=null){if(aU.length==null||typeof aU==="string"||p.isFunction(aU)||(typeof aU!=="function"&&aU.setInterval)){L.call(aW,aU)
}else{p.merge(aW,aU)
}}return aW
},inArray:function(aV,aU){if(aU.indexOf){return aU.indexOf(aV)
}for(var aW=0,aX=aU.length;
aW<aX;
aW++){if(aU[aW]===aV){return aW
}}return -1
},merge:function(aU,aY){var aV=aU.length,aW=0;
if(typeof aY.length==="number"){for(var aX=aY.length;
aW<aX;
aW++){aU[aV++]=aY[aW]
}}else{while(aY[aW]!==aM){aU[aV++]=aY[aW++]
}}aU.length=aV;
return aU
},grep:function(aV,aU,aX){var aZ=[];
for(var aW=0,aY=aV.length;
aW<aY;
aW++){if(!aX!==!aU(aV[aW],aW)){aZ.push(aV[aW])
}}return aZ
},map:function(aY,aX,aW){var aU=[],aV;
for(var aZ=0,a0=aY.length;
aZ<a0;
aZ++){aV=aX(aY[aZ],aZ,aW);
if(aV!=null){aU[aU.length]=aV
}}return aU.concat.apply([],aU)
},guid:1,proxy:function(aU,aV,aW){if(arguments.length===2){if(typeof aV==="string"){aW=aU;
aU=aW[aV];
aV=aM
}else{if(aV&&!p.isFunction(aV)){aW=aV;
aV=aM
}}}if(!aV&&aU){aV=function(){return aU.apply(aW||this,arguments)
}
}if(aU){aV.guid=aU.guid=aU.guid||aV.guid||p.guid++
}return aV
},uaMatch:function(aV){aV=aV.toLowerCase();
var aU=/(webkit)[ \/]([\w.]+)/.exec(aV)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(aV)||/(msie) ([\w.]+)/.exec(aV)||!/compatible/.test(aV)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(aV)||[];
return{browser:aU[1]||"",version:aU[2]||"0"}
},browser:{}});
C=p.uaMatch(aN);
if(C.browser){p.browser[C.browser]=true;
p.browser.version=C.version
}if(p.browser.webkit){p.browser.safari=true
}if(d){p.inArray=function(aV,aU){return d.call(aU,aV)
}
}ak=p(l);
if(l.addEventListener){m=function(){l.removeEventListener("DOMContentLoaded",m,false);
p.ready()
}
}else{if(l.attachEvent){m=function(){if(l.readyState==="complete"){l.detachEvent("onreadystatechange",m);
p.ready()
}}
}}function n(){if(p.isReady){return
}try{l.documentElement.doScroll("left")
}catch(aU){setTimeout(n,1);
return
}p.ready()
}function q(aV,aU){if(aU.src){p.ajax({url:aU.src,async:false,dataType:"script"})
}else{p.globalEval(aU.text||aU.textContent||aU.innerHTML||"")
}if(aU.parentNode){aU.parentNode.removeChild(aU)
}}function aO(aU,aZ,a2,aV,aW,a1){var a0=aU.length;
if(typeof aZ==="object"){for(var aY in aZ){aO(aU,aY,aZ[aY],aV,aW,a2)
}return aU
}if(a2!==aM){aV=!a1&&aV&&p.isFunction(a2);
for(var aX=0;
aX<a0;
aX++){aW(aU[aX],aZ,aV?a2.call(aU[aX],aX,aW(aU[aX],aZ)):a2,a1)
}return aU
}return a0?aW(aU[0],aZ):null
}function Z(){return(new Date).getTime()
}(function(){p.support={};
p.support={leadingWhitespace:false,tbody:false,htmlSerialize:false,style:false,hrefNormalized:false,opacity:false,cssFloat:false,checkOn:false,optSelected:false,checkClone:false,scriptEval:false,noCloneEvent:false,boxModel:false};
p.support.submitBubbles=false;
p.support.changeBubbles=false
})();
p.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};
var r="jQuery"+Z(),aQ=0,X={};
var P={};
p.extend({cache:{},expando:r,noData:{embed:true,object:true,applet:true},data:function(aW,aY,aV){if(aW.nodeName&&p.noData[aW.nodeName.toLowerCase()]){return
}aW=aW==K?X:aW;
var aX=aW[r],aU=p.cache,aZ;
if(!aY&&!aX){return null
}if(!aX){aX=++aQ
}if(typeof aY==="object"){aW[r]=aX;
aZ=aU[aX]=p.extend(true,{},aY)
}else{if(aU[aX]){aZ=aU[aX]
}else{if(typeof aV==="undefined"){aZ=P
}else{aZ=aU[aX]={}
}}}if(aV!==aM){aW[r]=aX;
aZ[aY]=aV
}return typeof aY==="string"?aZ[aY]:aZ
},removeData:function(aW,aY){if(aW.nodeName&&p.noData[aW.nodeName.toLowerCase()]){return
}aW=aW==K?X:aW;
var aX=aW[r],aU=p.cache,aZ=aU[aX];
if(aY){if(aZ){delete aZ[aY];
if(p.isEmptyObject(aZ)){p.removeData(aW)
}}}else{try{delete aW[r]
}catch(aV){if(aW.removeAttribute){aW.removeAttribute(r)
}}delete aU[aX]
}}});
p.fn.extend({data:function(aV,aX){if(typeof aV==="undefined"&&this.length){return p.data(this[0])
}else{if(typeof aV==="object"){return this.each(function(){p.data(this,aV)
})
}}var aW=aV.split(".");
aW[1]=aW[1]?"."+aW[1]:"";
if(aX===aM){var aU=this.triggerHandler("getData"+aW[1]+"!",[aW[0]]);
if(aU===aM&&this.length){aU=p.data(this[0],aV)
}return aU===aM&&aW[1]?this.data(aW[0]):aU
}else{return this.trigger("setData"+aW[1]+"!",[aW[0],aX]).each(function(){p.data(this,aV,aX)
})
}},removeData:function(aU){return this.each(function(){p.removeData(this,aU)
})
}});
p.extend({queue:function(aV,aX,aU){if(!aV){return
}aX=(aX||"fx")+"queue";
var aW=p.data(aV,aX);
if(!aU){return aW||[]
}if(!aW||p.isArray(aU)){aW=p.data(aV,aX,p.makeArray(aU))
}else{aW.push(aU)
}return aW
},dequeue:function(aU,aX){aX=aX||"fx";
var aW=p.queue(aU,aX),aV=aW.shift();
if(aV==="inprogress"){aV=aW.shift()
}if(aV){if(aX==="fx"){aW.unshift("inprogress")
}aV.call(aU,function(){p.dequeue(aU,aX)
})
}}});
p.fn.extend({queue:function(aV,aU){if(typeof aV!=="string"){aU=aV;
aV="fx"
}if(aU===aM){return p.queue(this[0],aV)
}return this.each(function(aX,aW){var aY=p.queue(this,aV,aU);
if(aV==="fx"&&aY[0]!=="inprogress"){p.dequeue(this,aV)
}})
},dequeue:function(aU){return this.each(function(){p.dequeue(this,aU)
})
},delay:function(aU,aV){aU=p.fx?p.fx.speeds[aU]||aU:aU;
aV=aV||"fx";
return this.queue(aV,function(){var aW=this;
setTimeout(function(){p.dequeue(aW,aV)
},aU)
})
},clearQueue:function(aU){return this.queue(aU||"fx",[])
}});
var ad=/[\n\t]/g,av=/\s+/,ap=/\r/g,aw=/href|src|style/,c=/(button|input)/i,al=/(button|input|object|select|textarea)/i,T=/^(a|area)$/i,ao=/radio|checkbox/;
p.fn.extend({attr:function(aU,aV){return aO(this,aU,aV,true,p.attr)
},removeAttr:function(aV,aU){return this.each(function(){p.attr(this,aV,"");
if(this.nodeType===1){this.removeAttribute(aV)
}})
},addClass:function(aV){if(p.isFunction(aV)){return this.each(function(a2){var a3=p(this);
a3.addClass(aV.call(this,a2,a3.attr("class")))
})
}if(aV&&typeof aV==="string"){var aZ=(aV||"").split(av);
for(var a1=0,aU=this.length;
a1<aU;
a1++){var a0=this[a1];
if(a0.nodeType===1){if(!a0.className){a0.className=aV
}else{var aY=" "+a0.className+" ";
for(var aW=0,aX=aZ.length;
aW<aX;
aW++){if(aY.indexOf(" "+aZ[aW]+" ")<0){a0.className+=" "+aZ[aW]
}}}}}}return this
},removeClass:function(aV){if(p.isFunction(aV)){return this.each(function(a2){var a3=p(this);
a3.removeClass(aV.call(this,a2,a3.attr("class")))
})
}if((aV&&typeof aV==="string")||aV===aM){var aZ=(aV||"").split(av);
for(var a1=0,aU=this.length;
a1<aU;
a1++){var a0=this[a1];
if(a0.nodeType===1&&a0.className){if(aV){var aY=(" "+a0.className+" ").replace(ad," ");
for(var aW=0,aX=aZ.length;
aW<aX;
aW++){aY=aY.replace(" "+aZ[aW]+" "," ")
}a0.className=aY.substring(1,aY.length-1)
}else{a0.className=""
}}}}return this
},toggleClass:function(aX,aV){var aW=typeof aX,aU=typeof aV==="boolean";
if(p.isFunction(aX)){return this.each(function(aY){var aZ=p(this);
aZ.toggleClass(aX.call(this,aY,aZ.attr("class"),aV),aV)
})
}return this.each(function(){if(aW==="string"){var aZ,a1=0,a2=p(this),aY=aV,a0=aX.split(av);
while((aZ=a0[a1++])){aY=aU?aY:!a2.hasClass(aZ);
a2[aY?"addClass":"removeClass"](aZ)
}}else{if(aW==="undefined"||aW==="boolean"){if(this.className){p.data(this,"__className__",this.className)
}this.className=this.className||aX===false?"":p.data(this,"__className__")||""
}}})
},hasClass:function(aX){var aU=" "+aX+" ";
for(var aV=0,aW=this.length;
aV<aW;
aV++){if((" "+this[aV].className+" ").replace(ad," ").indexOf(aU)>-1){return true
}}return false
},val:function(a0){if(a0===aM){var a2=this[0];
if(a2){if(p.nodeName(a2,"option")){return(a2.attributes.value||{}).specified?a2.value:a2.text
}if(p.nodeName(a2,"select")){var aU=a2.selectedIndex,a1=[],aZ=a2.options,aX=a2.type==="select-one";
if(aU<0){return null
}for(var a3=aX?aU:0,aW=aX?aU+1:aZ.length;
a3<aW;
a3++){var aY=aZ[a3];
if(aY.selected){a0=p(aY).val();
if(aX){return a0
}a1.push(a0)
}}return a1
}if(ao.test(a2.type)&&!p.support.checkOn){return a2.getAttribute("value")===null?"on":a2.value
}return(a2.value||"").replace(ap,"")
}return aM
}var aV=p.isFunction(a0);
return this.each(function(a4){var a5=p(this),a6=a0;
if(this.nodeType!==1){return
}if(aV){a6=a0.call(this,a4,a5.val())
}if(typeof a6==="number"){a6+=""
}if(p.isArray(a6)&&ao.test(this.type)){this.checked=p.inArray(a5.val(),a6)>=0
}else{if(p.nodeName(this,"select")){var a7=p.makeArray(a6);
p("option",this).each(function(){this.selected=p.inArray(p(this).val(),a7)>=0
});
if(!a7.length){this.selectedIndex=-1
}}else{this.value=a6
}}})
}});
p.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(aU,aV,a1,aY){if(!aU||aU.nodeType===3||aU.nodeType===8){return aM
}if(aY&&aV in p.attrFn){return p(aU)[aV](a1)
}var aW=aU.nodeType!==1||!p.isXMLDoc(aU),aZ=a1!==aM;
aV=aW&&p.props[aV]||aV;
if(aU.nodeType===1){var a0=aw.test(aV);
if(aV==="selected"&&!p.support.optSelected){var aX=aU.parentNode;
if(aX){aX.selectedIndex;
if(aX.parentNode){aX.parentNode.selectedIndex
}}}if(aV in aU&&aW&&!a0){if(aZ){if(aV==="type"&&c.test(aU.nodeName)&&aU.parentNode){p.error("type property can't be changed")
}aU[aV]=a1
}if(p.nodeName(aU,"form")&&aU.getAttributeNode(aV)){return aU.getAttributeNode(aV).nodeValue
}if(aV==="tabIndex"){var a3=aU.getAttributeNode("tabIndex");
return a3&&a3.specified?a3.value:al.test(aU.nodeName)||T.test(aU.nodeName)&&aU.href?0:aM
}return aU[aV]
}if(!p.support.style&&aW&&aV==="style"){if(aZ){aU.style.cssText=""+a1
}return aU.style.cssText
}if(aZ){aU.setAttribute(aV,""+a1)
}var a2=!p.support.hrefNormalized&&aW&&a0?aU.getAttribute(aV,2):aU.getAttribute(aV);
return a2===null?aM:a2
}return p.style(aU,aV,a1)
}});
var t=function(aU){return aU.replace(/[^\w\s\.\|`]/g,function(aV){return"\\"+aV
})
};
p.event={add:function(aX,aV,a2,aW){if(aX.nodeType===3||aX.nodeType===8){return
}if(aX.setInterval&&(aX!==K&&!aX.frameElement)){aX=K
}if(!a2.guid){a2.guid=p.guid++
}if(aW!==aM){var a0=a2;
a2=p.proxy(a0);
a2.data=aW
}var aZ=p.data(aX,"events")||p.data(aX,"events",{}),a1=p.data(aX,"handle"),aY;
if(!a1){aY=function(){return typeof p!=="undefined"&&!p.event.triggered?p.event.handle.apply(aY.elem,arguments):aM
};
a1=p.data(aX,"handle",aY)
}if(!a1){return
}a1.elem=aX;
aV=aV.split(/\s+/);
var aU,a4=0;
while((aU=aV[a4++])){var a6=aU.split(".");
aU=a6.shift();
if(a4>1){a2=p.proxy(a2);
if(aW!==aM){a2.data=aW
}}a2.type=a6.slice(0).sort().join(".");
var a3=aZ[aU],a7=this.special[aU]||{};
if(!a3){a3=aZ[aU]={};
if(!a7.setup||a7.setup.call(aX,aW,a6,a2)===false){if(aX.addEventListener){aX.addEventListener(aU,a1,false)
}else{if(aX.attachEvent){aX.attachEvent("on"+aU,a1)
}}}}if(a7.add){var a5=a7.add.call(aX,a2,aW,a6,a3);
if(a5&&p.isFunction(a5)){a5.guid=a5.guid||a2.guid;
a5.data=a5.data||a2.data;
a5.type=a5.type||a2.type;
a2=a5
}}a3[a2.guid]=a2;
this.global[aU]=true
}aX=null
},global:{},remove:function(aY,aV,a2){if(aY.nodeType===3||aY.nodeType===8){return
}var aZ=p.data(aY,"events"),a6,aU,a0;
if(aZ){if(aV===aM||(typeof aV==="string"&&aV.charAt(0)===".")){for(aU in aZ){this.remove(aY,aU+(aV||""))
}}else{if(aV.type){a2=aV.handler;
aV=aV.type
}aV=aV.split(/\s+/);
var a3=0;
while((aU=aV[a3++])){var a5=aU.split(".");
aU=a5.shift();
var aW=!a5.length,aX=p.map(a5.slice(0).sort(),t),a4=new RegExp("(^|\\.)"+aX.join("\\.(?:.*\\.)?")+"(\\.|$)"),a7=this.special[aU]||{};
if(aZ[aU]){if(a2){a0=aZ[aU][a2.guid];
delete aZ[aU][a2.guid]
}else{for(var a1 in aZ[aU]){if(aW||a4.test(aZ[aU][a1].type)){delete aZ[aU][a1]
}}}if(a7.remove){a7.remove.call(aY,a5,a0)
}for(a6 in aZ[aU]){break
}if(!a6){if(!a7.teardown||a7.teardown.call(aY,a5)===false){if(aY.removeEventListener){aY.removeEventListener(aU,p.data(aY,"handle"),false)
}else{if(aY.detachEvent){aY.detachEvent("on"+aU,p.data(aY,"handle"))
}}}a6=null;
delete aZ[aU]
}}}}for(a6 in aZ){break
}if(!a6){var a1=p.data(aY,"handle");
if(a1){a1.elem=null
}p.removeData(aY,"events");
p.removeData(aY,"handle")
}}},trigger:function(a3,a0,a2){var aY=a3.type||a3,aZ=arguments[3];
if(!aZ){a3=typeof a3==="object"?a3[r]?a3:p.extend(p.Event(aY),a3):p.Event(aY);
if(aY.indexOf("!")>=0){a3.type=aY=aY.slice(0,-1);
a3.exclusive=true
}if(!a2){a3.stopPropagation();
if(this.global[aY]){p.each(p.cache,function(){if(this.events&&this.events[aY]){p.event.trigger(a3,a0,this.handle.elem)
}})
}}if(!a2||a2.nodeType===3||a2.nodeType===8){return aM
}a3.result=aM;
a3.target=a2;
a0=p.makeArray(a0);
a0.unshift(a3)
}a3.currentTarget=a2;
var a4=p.data(a2,"handle");
if(a4){a4.apply(a2,a0)
}var aW=a2.parentNode||a2.ownerDocument;
try{if(!(a2&&a2.nodeName&&p.noData[a2.nodeName.toLowerCase()])){if(a2["on"+aY]&&a2["on"+aY].apply(a2,a0)===false){a3.result=false
}}}catch(a1){}if(!a3.isPropagationStopped()&&aW){p.event.trigger(a3,a0,aW,true)
}else{if(!a3.isDefaultPrevented()){var aX=a3.target,aV,aU=p.nodeName(aX,"a")&&aY==="click";
if(!aU&&!(aX&&aX.nodeName&&p.noData[aX.nodeName.toLowerCase()])){try{if(aX[aY]){aV=aX["on"+aY];
if(aV){aX["on"+aY]=null
}this.triggered=true;
aX[aY]()
}}catch(a1){}if(aV){aX["on"+aY]=aV
}this.triggered=false
}}}},handle:function(aX){var aW,aZ;
aX=arguments[0]=p.event.fix(aX||K.event);
aX.currentTarget=this;
var aU=aX.type.split(".");
aX.type=aU.shift();
aW=!aU.length&&!aX.exclusive;
var a1=new RegExp("(^|\\.)"+aU.slice(0).sort().join("\\.(?:.*\\.)?")+"(\\.|$)");
aZ=(p.data(this,"events")||{})[aX.type];
for(var a0 in aZ){var aY=aZ[a0];
if(aW||a1.test(aY.type)){aX.handler=aY;
aX.data=aY.data;
var aV=aY.apply(this,arguments);
if(aV!==aM){aX.result=aV;
if(aV===false){aX.preventDefault();
aX.stopPropagation()
}}if(aX.isImmediatePropagationStopped()){break
}}}return aX.result
},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(aW){if(aW[r]){return aW
}var aY=aW;
aW=p.Event(aY);
for(var aX=this.props.length,aZ;
aX;
){aZ=this.props[--aX];
aW[aZ]=aY[aZ]
}if(!aW.target){aW.target=aW.srcElement||l
}if(aW.target.nodeType===3){aW.target=aW.target.parentNode
}if(!aW.relatedTarget&&aW.fromElement){aW.relatedTarget=aW.fromElement===aW.target?aW.toElement:aW.fromElement
}if(aW.pageX==null&&aW.clientX!=null){var aV=l.documentElement,aU=l.body;
aW.pageX=aW.clientX+(aV&&aV.scrollLeft||aU&&aU.scrollLeft||0)-(aV&&aV.clientLeft||aU&&aU.clientLeft||0);
aW.pageY=aW.clientY+(aV&&aV.scrollTop||aU&&aU.scrollTop||0)-(aV&&aV.clientTop||aU&&aU.clientTop||0)
}if(!aW.which&&((aW.charCode||aW.charCode===0)?aW.charCode:aW.keyCode)){aW.which=aW.charCode||aW.keyCode
}if(!aW.metaKey&&aW.ctrlKey){aW.metaKey=aW.ctrlKey
}if(!aW.which&&aW.button!==aM){aW.which=(aW.button&1?1:(aW.button&2?3:(aW.button&4?2:0)))
}return aW
},guid:100000000,proxy:p.proxy,special:{ready:{setup:p.bindReady,teardown:p.noop},live:{add:function(aX,aU,aW,aV){p.extend(aX,aU||{});
aX.guid+=aU.selector+aU.live;
aU.liveProxy=aX;
p.event.add(this,aU.live,J,aU)
},remove:function(aV){if(aV.length){var aW=0,aU=new RegExp("(^|\\.)"+aV[0]+"(\\.|$)");
p.each((p.data(this,"events").live||{}),function(){if(aU.test(this.type)){aW++
}});
if(aW<1){p.event.remove(this,aV[0],J)
}}},special:{}},beforeunload:{setup:function(aU,aW,aV){if(this.setInterval){this.onbeforeunload=aV
}return false
},teardown:function(aV,aU){if(this.onbeforeunload===aU){this.onbeforeunload=null
}}}}};
p.Event=function(aU){if(!this.preventDefault){return new p.Event(aU)
}if(aU&&aU.type){this.originalEvent=aU;
this.type=aU.type
}else{this.type=aU
}this.timeStamp=Z();
this[r]=true
};
function V(){return false
}function W(){return true
}p.Event.prototype={preventDefault:function(){this.isDefaultPrevented=W;
var aU=this.originalEvent;
if(!aU){return
}if(aU.preventDefault){aU.preventDefault()
}aU.returnValue=false
},stopPropagation:function(){this.isPropagationStopped=W;
var aU=this.originalEvent;
if(!aU){return
}if(aU.stopPropagation){aU.stopPropagation()
}aU.cancelBubble=true
},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=W;
this.stopPropagation()
},isDefaultPrevented:V,isPropagationStopped:V,isImmediatePropagationStopped:V};
var aS=function(aV){var aW=aV.relatedTarget;
while(aW&&aW!==this){try{aW=aW.parentNode
}catch(aU){break
}}if(aW!==this){aV.type=aV.data;
p.event.handle.apply(this,arguments)
}},k=function(aU){aU.type=aU.data;
p.event.handle.apply(this,arguments)
};
p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(aV,aU){p.event.special[aV]={setup:function(aW){p.event.add(this,aU,aW&&aW.selector?k:aS,aV)
},teardown:function(aW){p.event.remove(this,aU,aW&&aW.selector?k:aS)
}}
});
if(!p.support.submitBubbles){p.event.special.submit={setup:function(aU,aW,aV){if(this.nodeName.toLowerCase()!=="form"){p.event.add(this,"click.specialSubmit."+aV.guid,function(aX){var aY=aX.target,aZ=aY.type;
if((aZ==="submit"||aZ==="image")&&p(aY).closest("form").length){return aL("submit",this,arguments)
}});
p.event.add(this,"keypress.specialSubmit."+aV.guid,function(aX){var aY=aX.target,aZ=aY.type;
if((aZ==="text"||aZ==="password")&&p(aY).closest("form").length&&aX.keyCode===13){return aL("submit",this,arguments)
}})
}else{return false
}},remove:function(aV,aU){p.event.remove(this,"click.specialSubmit"+(aU?"."+aU.guid:""));
p.event.remove(this,"keypress.specialSubmit"+(aU?"."+aU.guid:""))
}}
}if(!p.support.changeBubbles){var v=/textarea|input|select/i;
function z(aU){var aV=aU.type,aW=aU.value;
if(aV==="radio"||aV==="checkbox"){aW=aU.checked
}else{if(aV==="select-multiple"){aW=aU.selectedIndex>-1?p.map(aU.options,function(aX){return aX.selected
}).join("-"):""
}else{if(aU.nodeName.toLowerCase()==="select"){aW=aU.selectedIndex
}}}return aW
}function aI(aV){var aW=aV.target,aU,aX;
if(!v.test(aW.nodeName)||aW.readOnly){return
}aU=p.data(aW,"_change_data");
aX=z(aW);
if(aV.type!=="focusout"||aW.type!=="radio"){p.data(aW,"_change_data",aX)
}if(aU===aM||aX===aU){return
}if(aU!=null||aX){aV.type="change";
return p.event.trigger(aV,arguments[1],aW)
}}p.event.special.change={filters:{focusout:aI,click:function(aU){var aV=aU.target,aW=aV.type;
if(aW==="radio"||aW==="checkbox"||aV.nodeName.toLowerCase()==="select"){return aI.call(this,aU)
}},keydown:function(aU){var aV=aU.target,aW=aV.type;
if((aU.keyCode===13&&aV.nodeName.toLowerCase()!=="textarea")||(aU.keyCode===32&&(aW==="checkbox"||aW==="radio"))||aW==="select-multiple"){return aI.call(this,aU)
}},beforeactivate:function(aU){var aV=aU.target;
if(aV.nodeName.toLowerCase()==="input"&&aV.type==="radio"){p.data(aV,"_change_data",z(aV))
}}},setup:function(aU,aW,aV){for(var aX in f){p.event.add(this,aX+".specialChange."+aV.guid,f[aX])
}return v.test(this.nodeName)
},remove:function(aV,aU){for(var aW in f){p.event.remove(this,aW+".specialChange"+(aU?"."+aU.guid:""),f[aW])
}return v.test(this.nodeName)
}};
var f=p.event.special.change.filters
}function aL(aW,aV,aU){aU[0].type=aW;
return p.event.handle.apply(aV,aU)
}if(l.addEventListener){p.each({focus:"focusin",blur:"focusout"},function(aW,aU){p.event.special[aU]={setup:function(){this.addEventListener(aW,aV,true)
},teardown:function(){this.removeEventListener(aW,aV,true)
}};
function aV(aX){aX=p.event.fix(aX);
aX.type=aU;
return p.event.handle.call(this,aX)
}})
}p.fn.bind=function(aY,aU,aV){if(typeof aY==="object"){for(var aX in aY){this["bind"](aX,aU,aY[aX],aV)
}return this
}if(p.isFunction(aU)){aV=aU;
aU=aM
}var aW="bind"==="one"?p.proxy(aV,function(aZ){p(this).unbind(aZ,aW);
return aV.apply(this,arguments)
}):aV;
return aY==="unload"&&"bind"!=="one"?this.one(aY,aU,aV):this.each(function(){p.event.add(this,aY,aW,aU)
})
};
p.fn.one=function(aY,aU,aV){if(typeof aY==="object"){for(var aX in aY){this["one"](aX,aU,aY[aX],aV)
}return this
}if(p.isFunction(aU)){aV=aU;
aU=aM
}var aW="one"==="one"?p.proxy(aV,function(aZ){p(this).unbind(aZ,aW);
return aV.apply(this,arguments)
}):aV;
return aY==="unload"&&"one"!=="one"?this.one(aY,aU,aV):this.each(function(){p.event.add(this,aY,aW,aU)
})
};
p.fn.extend({unbind:function(aW,aU){if(typeof aW==="object"&&!aW.preventDefault){for(var aV in aW){this.unbind(aV,aW[aV])
}return this
}return this.each(function(){p.event.remove(this,aW,aU)
})
},trigger:function(aV,aU){return this.each(function(){p.event.trigger(aV,aU,this)
})
},triggerHandler:function(aW,aU){if(this[0]){var aV=p.Event(aW);
aV.preventDefault();
aV.stopPropagation();
p.event.trigger(aV,aU,this[0]);
return aV.result
}},toggle:function(aV){var aU=arguments,aW=1;
while(aW<aU.length){p.proxy(aV,aU[aW++])
}return this.click(p.proxy(aV,function(aX){var aY=(p.data(this,"lastToggle"+aV.guid)||0)%aW;
p.data(this,"lastToggle"+aV.guid,aY+1);
aX.preventDefault();
return aU[aY].apply(this,arguments)||false
}))
},hover:function(aV,aU){return this.mouseenter(aV).mouseleave(aU||aV)
}});
p.fn.live=function(aY,aU,aV){var aX,aW=0;
if(p.isFunction(aU)){aV=aU;
aU=aM
}aY=(aY||"").split(/\s+/);
while((aX=aY[aW++])!=null){aX=aX==="focus"?"focusin":aX==="blur"?"focusout":aX==="hover"?aY.push("mouseleave")&&"mouseenter":aX;
if("live"==="live"){p(this.context).bind(I(aX,this.selector),{data:aU,selector:this.selector,live:aX},aV)
}else{p(this.context).unbind(I(aX,this.selector),aV?{guid:aV.guid+this.selector+aX}:null)
}}return this
};
p.fn.die=function(aY,aU,aV){var aX,aW=0;
if(p.isFunction(aU)){aV=aU;
aU=aM
}aY=(aY||"").split(/\s+/);
while((aX=aY[aW++])!=null){aX=aX==="focus"?"focusin":aX==="blur"?"focusout":aX==="hover"?aY.push("mouseleave")&&"mouseenter":aX;
if("die"==="live"){p(this.context).bind(I(aX,this.selector),{data:aU,selector:this.selector,live:aX},aV)
}else{p(this.context).unbind(I(aX,this.selector),aV?{guid:aV.guid+this.selector+aX}:null)
}}return this
};
function J(a0){var aV,aZ=[],aU=[],aW=arguments,a7,a6,a1,aY,a3,a2,a4,aX,a5=p.extend({},p.data(this,"events").live);
if(a0.button&&a0.type==="click"){return
}for(a3 in a5){a1=a5[a3];
if(a1.live===a0.type||a1.altLive&&p.inArray(a0.type,a1.altLive)>-1){aX=a1.data;
if(!(aX.beforeFilter&&aX.beforeFilter[a0.type]&&!aX.beforeFilter[a0.type](a0))){aU.push(a1.selector)
}}else{delete a5[a3]
}}a6=p(a0.target).closest(aU,a0.currentTarget);
for(a2=0,a4=a6.length;
a2<a4;
a2++){for(a3 in a5){a1=a5[a3];
aY=a6[a2].elem;
a7=null;
if(a6[a2].selector===a1.selector){if(a1.live==="mouseenter"||a1.live==="mouseleave"){a7=p(a0.relatedTarget).closest(a1.selector)[0]
}if(!a7||a7!==aY){aZ.push({elem:aY,fn:a1})
}}}}for(a2=0,a4=aZ.length;
a2<a4;
a2++){a6=aZ[a2];
a0.currentTarget=a6.elem;
a0.data=a6.fn.data;
if(a6.fn.apply(a6.elem,aW)===false){aV=false;
break
}}return aV
}function I(aV,aU){return"live."+(aV?aV+".":"")+aU.replace(/\./g,"`").replace(/ /g,"&")
}p.fn.blur=function(aU){return aU?this.bind("blur",aU):this.trigger("blur")
};
p.fn.focus=function(aU){return aU?this.bind("focus",aU):this.trigger("focus")
};
p.fn.focusin=function(aU){return aU?this.bind("focusin",aU):this.trigger("focusin")
};
p.fn.focusout=function(aU){return aU?this.bind("focusout",aU):this.trigger("focusout")
};
p.fn.load=function(aU){return aU?this.bind("load",aU):this.trigger("load")
};
p.fn.resize=function(aU){return aU?this.bind("resize",aU):this.trigger("resize")
};
p.fn.scroll=function(aU){return aU?this.bind("scroll",aU):this.trigger("scroll")
};
p.fn.unload=function(aU){return aU?this.bind("unload",aU):this.trigger("unload")
};
p.fn.click=function(aU){return aU?this.bind("click",aU):this.trigger("click")
};
p.fn.dblclick=function(aU){return aU?this.bind("dblclick",aU):this.trigger("dblclick")
};
p.fn.mousedown=function(aU){return aU?this.bind("mousedown",aU):this.trigger("mousedown")
};
p.fn.mouseup=function(aU){return aU?this.bind("mouseup",aU):this.trigger("mouseup")
};
p.fn.mousemove=function(aU){return aU?this.bind("mousemove",aU):this.trigger("mousemove")
};
p.fn.mouseover=function(aU){return aU?this.bind("mouseover",aU):this.trigger("mouseover")
};
p.fn.mouseout=function(aU){return aU?this.bind("mouseout",aU):this.trigger("mouseout")
};
p.fn.mouseenter=function(aU){return aU?this.bind("mouseenter",aU):this.trigger("mouseenter")
};
p.fn.mouseleave=function(aU){return aU?this.bind("mouseleave",aU):this.trigger("mouseleave")
};
p.fn.change=function(aU){return aU?this.bind("change",aU):this.trigger("change")
};
p.fn.select=function(aU){return aU?this.bind("select",aU):this.trigger("select")
};
p.fn.submit=function(aU){return aU?this.bind("submit",aU):this.trigger("submit")
};
p.fn.keydown=function(aU){return aU?this.bind("keydown",aU):this.trigger("keydown")
};
p.fn.keypress=function(aU){return aU?this.bind("keypress",aU):this.trigger("keypress")
};
p.fn.keyup=function(aU){return aU?this.bind("keyup",aU):this.trigger("keyup")
};
p.fn.error=function(aU){return aU?this.bind("error",aU):this.trigger("error")
};
if(K.attachEvent&&!K.addEventListener){K.attachEvent("onunload",function(){for(var aV in p.cache){if(p.cache[aV].handle){try{p.event.remove(p.cache[aV].handle.elem)
}catch(aU){}}}})
}(function(){var a5=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,a9=0,ba=Object.prototype.toString,aX=false,a4=true;
[0,0].sort(function(){a4=false;
return 0
});
var a2=function(bl,bp,bi,bk){bi=bi||[];
var be=bp=bp||l;
if(bp.nodeType!==1&&bp.nodeType!==9){return[]
}if(!bl||typeof bl!=="string"){return bi
}var bf=[],bd,bm,bo,bs,bh=true,bq=aY(bp),bn=bl;
while((a5.exec(""),bd=a5.exec(bn))!==null){bn=bd[3];
bf.push(bd[1]);
if(bd[2]){bs=bd[3];
break
}}if(bf.length>1&&a0.exec(bl)){if(bf.length===2&&aV.relative[bf[0]]){bm=a1(bf[0]+bf[1],bp)
}else{bm=aV.relative[bf[0]]?[bp]:a2(bf.shift(),bp);
while(bf.length){bl=bf.shift();
if(aV.relative[bl]){bl+=bf.shift()
}bm=a1(bl,bm)
}}}else{if(!bk&&bf.length>1&&bp.nodeType===9&&!bq&&aV.match.ID.test(bf[0])&&!aV.match.ID.test(bf[bf.length-1])){var bj=a2.find(bf.shift(),bp,bq);
bp=bj.expr?a2.filter(bj.expr,bj.set)[0]:bj.set[0]
}if(bp){var bj=bk?{expr:bf.pop(),set:aZ(bk)}:a2.find(bf.pop(),bf.length===1&&(bf[0]==="~"||bf[0]==="+")&&bp.parentNode?bp.parentNode:bp,bq);
bm=bj.expr?a2.filter(bj.expr,bj.set):bj.set;
if(bf.length>0){bo=aZ(bm)
}else{bh=false
}while(bf.length){var br=bf.pop(),bg=br;
if(!aV.relative[br]){br=""
}else{bg=bf.pop()
}if(bg==null){bg=bp
}aV.relative[br](bo,bg,bq)
}}else{bo=bf=[]
}}if(!bo){bo=bm
}if(!bo){a2.error(br||bl)
}if(ba.call(bo)==="[object Array]"){if(!bh){bi.push.apply(bi,bo)
}else{if(bp&&bp.nodeType===1){for(var bc=0;
bo[bc]!=null;
bc++){if(bo[bc]&&(bo[bc]===true||bo[bc].nodeType===1&&a6(bp,bo[bc]))){bi.push(bm[bc])
}}}else{for(var bc=0;
bo[bc]!=null;
bc++){if(bo[bc]&&bo[bc].nodeType===1){bi.push(bm[bc])
}}}}}else{aZ(bo,bi)
}if(bs){a2(bs,be,bi,bk);
a2.uniqueSort(bi)
}return bi
};
a2.uniqueSort=function(bd){if(a3){aX=a4;
bd.sort(a3);
if(aX){for(var bc=1;
bc<bd.length;
bc++){if(bd[bc]===bd[bc-1]){bd.splice(bc--,1)
}}}}return bd
};
a2.matches=function(bc,bd){return a2(bc,null,null,bd)
};
a2.find=function(bj,bi,bc){var bg,bf;
if(!bj){return[]
}for(var bk=0,bd=aV.order.length;
bk<bd;
bk++){var bh=aV.order[bk],bf;
if((bf=aV.leftMatch[bh].exec(bj))){var be=bf[1];
bf.splice(1,1);
if(be.substr(be.length-1)!=="\\"){bf[1]=(bf[1]||"").replace(/\\/g,"");
bg=aV.find[bh](bf,bi,bc);
if(bg!=null){bj=bj.replace(aV.match[bh],"");
break
}}}}if(!bg){bg=bi.getElementsByTagName("*")
}return{set:bg,expr:bj}
};
a2.filter=function(bq,bm,bd,bi){var bj=bq,bl=[],bp=bm,bh,bo,be=bm&&bm[0]&&aY(bm[0]);
while(bq&&bm.length){for(var bn in aV.filter){if((bh=aV.leftMatch[bn].exec(bq))!=null&&bh[2]){var br=aV.filter[bn],bs,bf,bg=bh[1];
bo=false;
bh.splice(1,1);
if(bg.substr(bg.length-1)==="\\"){continue
}if(bp===bl){bl=[]
}if(aV.preFilter[bn]){bh=aV.preFilter[bn](bh,bp,bd,bl,bi,be);
if(!bh){bo=bs=true
}else{if(bh===true){continue
}}}if(bh){for(var bc=0;
(bf=bp[bc])!=null;
bc++){if(bf){bs=br(bf,bh,bc,bp);
var bk=bi^!!bs;
if(bd&&bs!=null){if(bk){bo=true
}else{bp[bc]=false
}}else{if(bk){bl.push(bf);
bo=true
}}}}}if(bs!==aM){if(!bd){bp=bl
}bq=bq.replace(aV.match[bn],"");
if(!bo){return[]
}break
}}}if(bq===bj){if(bo==null){a2.error(bq)
}else{break
}}bj=bq
}return bp
};
a2.error=function(bc){throw"Syntax error, unrecognized expression: "+bc
};
var aV=a2.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(bc){return bc.getAttribute("href")
}},relative:{"+":function(bc,bj){var bf=typeof bj==="string",bh=bf&&!/\W/.test(bj),bg=bf&&!bh;
if(bh){bj=bj.toLowerCase()
}for(var be=0,bi=bc.length,bd;
be<bi;
be++){if((bd=bc[be])){while((bd=bd.previousSibling)&&bd.nodeType!==1){}bc[be]=bg||bd&&bd.nodeName.toLowerCase()===bj?bd||false:bd===bj
}}if(bg){a2.filter(bj,bc,true)
}},">":function(bc,bi){var bf=typeof bi==="string";
if(bf&&!/\W/.test(bi)){bi=bi.toLowerCase();
for(var be=0,bg=bc.length;
be<bg;
be++){var bd=bc[be];
if(bd){var bh=bd.parentNode;
bc[be]=bh.nodeName.toLowerCase()===bi?bh:false
}}}else{for(var be=0,bg=bc.length;
be<bg;
be++){var bd=bc[be];
if(bd){bc[be]=bf?bd.parentNode:bd.parentNode===bi
}}if(bf){a2.filter(bi,bc,true)
}}},"":function(bd,bh,bf){var be=a9++,bc=a7;
if(typeof bh==="string"&&!/\W/.test(bh)){var bg=bh=bh.toLowerCase();
bc=a8
}bc("parentNode",bh,be,bd,bg,bf)
},"~":function(bd,bh,bf){var be=a9++,bc=a7;
if(typeof bh==="string"&&!/\W/.test(bh)){var bg=bh=bh.toLowerCase();
bc=a8
}bc("previousSibling",bh,be,bd,bg,bf)
}},find:{ID:function(bf,bc,bd){if(typeof bc.getElementById!=="undefined"&&!bd){var be=bc.getElementById(bf[1]);
return be?[be]:[]
}},NAME:function(bf,bc){if(typeof bc.getElementsByName!=="undefined"){var bh=[],bg=bc.getElementsByName(bf[1]);
for(var bd=0,be=bg.length;
bd<be;
bd++){if(bg[bd].getAttribute("name")===bf[1]){bh.push(bg[bd])
}}return bh.length===0?null:bh
}},TAG:function(bd,bc){return bc.getElementsByTagName(bd[1])
}},preFilter:{CLASS:function(bh,bc,bf,bj,bi,bg){bh=" "+bh[1].replace(/\\/g,"")+" ";
if(bg){return bh
}for(var be=0,bd;
(bd=bc[be])!=null;
be++){if(bd){if(bi^(bd.className&&(" "+bd.className+" ").replace(/[\t\n]/g," ").indexOf(bh)>=0)){if(!bf){bj.push(bd)
}}else{if(bf){bc[be]=false
}}}}return false
},ID:function(bc){return bc[1].replace(/\\/g,"")
},TAG:function(bd,bc){return bd[1].toLowerCase()
},CHILD:function(bc){if(bc[1]==="nth"){var bd=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(bc[2]==="even"&&"2n"||bc[2]==="odd"&&"2n+1"||!/\D/.test(bc[2])&&"0n+"+bc[2]||bc[2]);
bc[2]=(bd[1]+(bd[2]||1))-0;
bc[3]=bd[3]-0
}bc[0]=a9++;
return bc
},ATTR:function(bf,bc,bd,bi,bh,be){var bg=bf[1].replace(/\\/g,"");
if(!be&&aV.attrMap[bg]){bf[1]=aV.attrMap[bg]
}if(bf[2]==="~="){bf[4]=" "+bf[4]+" "
}return bf
},PSEUDO:function(be,bc,bd,bg,bf){if(be[1]==="not"){if((a5.exec(be[3])||"").length>1||/^\w/.test(be[3])){be[3]=a2(be[3],null,null,bc)
}else{var bh=a2.filter(be[3],bc,bd,true^bf);
if(!bd){bg.push.apply(bg,bh)
}return false
}}else{if(aV.match.POS.test(be[0])||aV.match.CHILD.test(be[0])){return true
}}return be
},POS:function(bc){bc.unshift(true);
return bc
}},filters:{enabled:function(bc){return bc.disabled===false&&bc.type!=="hidden"
},disabled:function(bc){return bc.disabled===true
},checked:function(bc){return bc.checked===true
},selected:function(bc){bc.parentNode.selectedIndex;
return bc.selected===true
},parent:function(bc){return !!bc.firstChild
},empty:function(bc){return !bc.firstChild
},has:function(bc,bd,be){return !!a2(be[3],bc).length
},header:function(bc){return/h\d/i.test(bc.nodeName)
},text:function(bc){return"text"===bc.type
},radio:function(bc){return"radio"===bc.type
},checkbox:function(bc){return"checkbox"===bc.type
},file:function(bc){return"file"===bc.type
},password:function(bc){return"password"===bc.type
},submit:function(bc){return"submit"===bc.type
},image:function(bc){return"image"===bc.type
},reset:function(bc){return"reset"===bc.type
},button:function(bc){return"button"===bc.type||bc.nodeName.toLowerCase()==="button"
},input:function(bc){return/input|select|textarea|button/i.test(bc.nodeName)
}},setFilters:{first:function(bc,bd){return bd===0
},last:function(bd,be,bf,bc){return be===bc.length-1
},even:function(bc,bd){return bd%2===0
},odd:function(bc,bd){return bd%2===1
},lt:function(bc,bd,be){return bd<be[3]-0
},gt:function(bc,bd,be){return bd>be[3]-0
},nth:function(bc,bd,be){return be[3]-0===bd
},eq:function(bc,bd,be){return be[3]-0===bd
}},filter:{PSEUDO:function(bd,bh,bf,bc){var bi=bh[1],be=aV.filters[bi];
if(be){return be(bd,bf,bh,bc)
}else{if(bi==="contains"){return(bd.textContent||bd.innerText||aW([bd])||"").indexOf(bh[3])>=0
}else{if(bi==="not"){var bj=bh[3];
for(var bf=0,bg=bj.length;
bf<bg;
bf++){if(bj[bf]===bd){return false
}}return true
}else{a2.error("Syntax error, unrecognized expression: "+bi)
}}}},CHILD:function(bj,bc){var bf=bc[1],bd=bj;
switch(bf){case"only":case"first":while((bd=bd.previousSibling)){if(bd.nodeType===1){return false
}}if(bf==="first"){return true
}bd=bj;
case"last":while((bd=bd.nextSibling)){if(bd.nodeType===1){return false
}}return true;
case"nth":var bk=bc[2],bl=bc[3];
if(bk===1&&bl===0){return true
}var bi=bc[0],be=bj.parentNode;
if(be&&(be.sizcache!==bi||!bj.nodeIndex)){var bg=0;
for(bd=be.firstChild;
bd;
bd=bd.nextSibling){if(bd.nodeType===1){bd.nodeIndex=++bg
}}be.sizcache=bi
}var bh=bj.nodeIndex-bl;
if(bk===0){return bh===0
}else{return(bh%bk===0&&bh/bk>=0)
}}},ID:function(bc,bd){return bc.nodeType===1&&bc.getAttribute("id")===bd
},TAG:function(bc,bd){return(bd==="*"&&bc.nodeType===1)||bc.nodeName.toLowerCase()===bd
},CLASS:function(bc,bd){return(" "+(bc.className||bc.getAttribute("class"))+" ").indexOf(bd)>-1
},ATTR:function(bd,be){var bf=be[1],bg=aV.attrHandle[bf]?aV.attrHandle[bf](bd):bd[bf]!=null?bd[bf]:bd.getAttribute(bf),bi=bg+"",bh=be[2],bc=be[4];
return bg==null?bh==="!=":bh==="="?bi===bc:bh==="*="?bi.indexOf(bc)>=0:bh==="~="?(" "+bi+" ").indexOf(bc)>=0:!bc?bi&&bg!==false:bh==="!="?bi!==bc:bh==="^="?bi.indexOf(bc)===0:bh==="$="?bi.substr(bi.length-bc.length)===bc:bh==="|="?bi===bc||bi.substr(0,bc.length+1)===bc+"-":false
},POS:function(bd,bg,bf,bc){var bh=bg[2],be=aV.setFilters[bh];
if(be){return be(bd,bf,bg,bc)
}}}};
var a0=aV.match.POS;
for(var bb in aV.match){aV.match[bb]=new RegExp(aV.match[bb].source+/(?![^\[]*\])(?![^\(]*\))/.source);
aV.leftMatch[bb]=new RegExp(/(^(?:.|\r|\n)*?)/.source+aV.match[bb].source.replace(/\\(\d+)/g,function(bc,bd){return"\\"+(bd-0+1)
}))
}var aZ=function(bc,bd){bc=Array.prototype.slice.call(bc,0);
if(bd){bd.push.apply(bd,bc);
return bd
}return bc
};
try{Array.prototype.slice.call(l.documentElement.childNodes,0)
}catch(aU){aZ=function(bc,bf){var bg=bf||[];
if(ba.call(bc)==="[object Array]"){Array.prototype.push.apply(bg,bc)
}else{if(typeof bc.length==="number"){for(var bd=0,be=bc.length;
bd<be;
bd++){bg.push(bc[bd])
}}else{for(var bd=0;
bc[bd];
bd++){bg.push(bc[bd])
}}}return bg
}
}var a3;
if(l.documentElement.compareDocumentPosition){a3=function(bc,bd){if(!bc.compareDocumentPosition||!bd.compareDocumentPosition){if(bc==bd){aX=true
}return bc.compareDocumentPosition?-1:1
}var be=bc.compareDocumentPosition(bd)&4?-1:bc===bd?0:1;
if(be===0){aX=true
}return be
}
}else{if("sourceIndex" in l.documentElement){a3=function(bc,bd){if(!bc.sourceIndex||!bd.sourceIndex){if(bc==bd){aX=true
}return bc.sourceIndex?-1:1
}var be=bc.sourceIndex-bd.sourceIndex;
if(be===0){aX=true
}return be
}
}else{if(l.createRange){a3=function(bc,be){if(!bc.ownerDocument||!be.ownerDocument){if(bc==be){aX=true
}return bc.ownerDocument?-1:1
}var bd=bc.ownerDocument.createRange(),bf=be.ownerDocument.createRange();
bd.setStart(bc,0);
bd.setEnd(bc,0);
bf.setStart(be,0);
bf.setEnd(be,0);
var bg=bd.compareBoundaryPoints(Range.START_TO_END,bf);
if(bg===0){aX=true
}return bg
}
}}}function aW(bd){var bf="",bc;
for(var be=0;
bd[be];
be++){bc=bd[be];
if(bc.nodeType===3||bc.nodeType===4){bf+=bc.nodeValue
}else{if(bc.nodeType!==8){bf+=aW(bc.childNodes)
}}}return bf
}(function(){aV.find.ID=function(bf,bc,bd){if(typeof bc.getElementById!=="undefined"&&!bd){var be=bc.getElementById(bf[1]);
return be?be.id===bf[1]||typeof be.getAttributeNode!=="undefined"&&be.getAttributeNode("id").nodeValue===bf[1]?[be]:aM:[]
}};
aV.filter.ID=function(bc,bd){var be=typeof bc.getAttributeNode!=="undefined"&&bc.getAttributeNode("id");
return bc.nodeType===1&&be&&be.nodeValue===bd
};
root=form=null
})();
(function(){aV.find.TAG=function(be,bc){var bf=bc.getElementsByTagName(be[1]);
if(be[1]==="*"){var bg=[];
for(var bd=0;
bf[bd];
bd++){if(bf[bd].nodeType===1){bg.push(bf[bd])
}}bf=bg
}return bf
};
aV.attrHandle.href=function(bc){return bc.getAttribute("href",2)
};
div=null
})();
if(l.querySelectorAll){(function(){var bd=a2,bc=l.createElement("div");
bc.innerHTML="<p class='TEST'></p>";
if(bc.querySelectorAll&&bc.querySelectorAll(".TEST").length===0){return
}a2=function(bi,bf,bh,bj){bf=bf||l;
if(!bj&&bf.nodeType===9&&!aY(bf)){try{return aZ(bf.querySelectorAll(bi),bh)
}catch(bg){}}return bd(bi,bf,bh,bj)
};
for(var be in bd){a2[be]=bd[be]
}bc=null
})()
}(function(){var bc=l.createElement("div");
bc.innerHTML="<div class='test e'></div><div class='test'></div>";
if(!bc.getElementsByClassName||bc.getElementsByClassName("e").length===0){return
}bc.lastChild.className="e";
if(bc.getElementsByClassName("e").length===1){return
}aV.order.splice(1,0,"CLASS");
aV.find.CLASS=function(bf,bd,be){if(typeof bd.getElementsByClassName!=="undefined"&&!be){return bd.getElementsByClassName(bf[1])
}};
bc=null
})();
function a8(bi,bh,bj,bg,bf,bc){for(var bl=0,bd=bg.length;
bl<bd;
bl++){var bk=bg[bl];
if(bk){bk=bk[bi];
var be=false;
while(bk){if(bk.sizcache===bj){be=bg[bk.sizset];
break
}if(bk.nodeType===1&&!bc){bk.sizcache=bj;
bk.sizset=bl
}if(bk.nodeName.toLowerCase()===bh){be=bk;
break
}bk=bk[bi]
}bg[bl]=be
}}}function a7(bi,bh,bj,bg,bf,bc){for(var bl=0,bd=bg.length;
bl<bd;
bl++){var bk=bg[bl];
if(bk){bk=bk[bi];
var be=false;
while(bk){if(bk.sizcache===bj){be=bg[bk.sizset];
break
}if(bk.nodeType===1){if(!bc){bk.sizcache=bj;
bk.sizset=bl
}if(typeof bh!=="string"){if(bk===bh){be=true;
break
}}else{if(a2.filter(bh,[bk]).length>0){be=bk;
break
}}}bk=bk[bi]
}bg[bl]=be
}}}var a6=l.compareDocumentPosition?function(bc,bd){return bc.compareDocumentPosition(bd)&16
}:function(bc,bd){return bc!==bd&&(bc.contains?bc.contains(bd):true)
};
var aY=function(bd){var bc=(bd?bd.ownerDocument||bd:0).documentElement;
return bc?bc.nodeName!=="HTML":false
};
var a1=function(bi,bc){var bj=[],bf="",bg,bh=bc.nodeType?[bc]:bc;
while((bg=aV.match.PSEUDO.exec(bi))){bf+=bg[0];
bi=bi.replace(aV.match.PSEUDO,"")
}bi=aV.relative[bi]?bi+"*":bi;
for(var bd=0,be=bh.length;
bd<be;
bd++){a2(bi,bh[bd],bj)
}return a2.filter(bf,bj)
};
p.find=a2;
p.expr=a2.selectors;
p.expr[":"]=p.expr.filters;
p.unique=a2.uniqueSort;
p.getText=aW;
p.isXMLDoc=aY;
p.contains=a6;
return;
K.Sizzle=a2
})();
var aC=/Until$/,aP=/^(?:parents|prevUntil|prevAll)/,ag=/,/,aG=Array.prototype.slice;
var aR=function(aU,aX,aW){if(p.isFunction(aX)){return p.grep(aU,function(aY,aZ){return !!aX.call(aY,aZ,aY)===aW
})
}else{if(aX.nodeType){return p.grep(aU,function(aY,aZ){return(aY===aX)===aW
})
}else{if(typeof aX==="string"){var aV=p.grep(aU,function(aY){return aY.nodeType===1
});
if(H.test(aX)){return p.filter(aX,aV,!aW)
}else{aX=p.filter(aX,aV)
}}}}return p.grep(aU,function(aY,aZ){return(p.inArray(aY,aX)>=0)===aW
})
};
p.fn.extend({find:function(aV){var aU=this.pushStack("","find",aV),aY=0;
for(var aW=0,aX=this.length;
aW<aX;
aW++){aY=aU.length;
p.find(aV,this[aW],aU);
if(aW>0){for(var aZ=aY;
aZ<aU.length;
aZ++){for(var a0=0;
a0<aY;
a0++){if(aU[a0]===aU[aZ]){aU.splice(aZ--,1);
break
}}}}}return aU
},has:function(aU){var aV=p(aU);
return this.filter(function(){for(var aW=0,aX=aV.length;
aW<aX;
aW++){if(p.contains(this,aV[aW])){return true
}}})
},not:function(aU){return this.pushStack(aR(this,aU,false),"not",aU)
},filter:function(aU){return this.pushStack(aR(this,aU,true),"filter",aU)
},is:function(aU){return !!aU&&p.filter(aU,this).length>0
},closest:function(a1,a2){if(p.isArray(a1)){var aZ=[],a3=this[0],aW,aX={},a0;
if(a3&&a1.length){for(var aU=0,aV=a1.length;
aU<aV;
aU++){a0=a1[aU];
if(!aX[a0]){aX[a0]=p.expr.match.POS.test(a0)?p(a0,a2||this.context):a0
}}while(a3&&a3.ownerDocument&&a3!==a2){for(a0 in aX){aW=aX[a0];
if(aW.jquery?aW.index(a3)>-1:p(a3).is(aW)){aZ.push({selector:a0,elem:a3});
delete aX[a0]
}}a3=a3.parentNode
}}return aZ
}var aY=p.expr.match.POS.test(a1)?p(a1,a2||this.context):null;
return this.map(function(a5,a4){while(a4&&a4.ownerDocument&&a4!==a2){if(aY?aY.index(a4)>-1:p(a4).is(a1)){return a4
}a4=a4.parentNode
}return null
})
},index:function(aU){if(!aU||typeof aU==="string"){return p.inArray(this[0],aU?p(aU):this.parent().children())
}return p.inArray(aU.jquery?aU[0]:aU,this)
},add:function(aW,aV){var aX=typeof aW==="string"?p(aW,aV||this.context):p.makeArray(aW),aU=p.merge(this.get(),aX);
return this.pushStack(D(aX[0])||D(aU[0])?aU:p.unique(aU))
},andSelf:function(){return this.add(this.prevObject)
}});
function D(aU){return !aU||!aU.parentNode||aU.parentNode.nodeType===11
}p.each({parent:function(aU){var aV=aU.parentNode;
return aV&&aV.nodeType!==11?aV:null
},parents:function(aU){return p.dir(aU,"parentNode")
},next:function(aU){return p.nth(aU,2,"nextSibling")
},prev:function(aU){return p.nth(aU,2,"previousSibling")
},nextAll:function(aU){return p.dir(aU,"nextSibling")
},prevAll:function(aU){return p.dir(aU,"previousSibling")
},siblings:function(aU){return p.sibling(aU.parentNode.firstChild,aU)
},children:function(aU){return p.sibling(aU.firstChild)
},contents:function(aU){return p.nodeName(aU,"iframe")?aU.contentDocument||aU.contentWindow.document:p.makeArray(aU.childNodes)
}},function(aV,aU){p.fn[aV]=function(aY,aX){var aW=p.map(this,aU,aY);
if(!aC.test(aV)){aX=aY
}if(aX&&typeof aX==="string"){aW=p.filter(aX,aW)
}aW=this.length>1?p.unique(aW):aW;
if((this.length>1||ag.test(aX))&&aP.test(aV)){aW=aW.reverse()
}return this.pushStack(aW,aV,aG.call(arguments).join(","))
}
});
p.fn.parentsUntil=function(aX,aW){var aU=function(aY,aZ,a0){return p.dir(aY,"parentNode",a0)
};
var aV=p.map(this,aU,aX);
if(!aC.test("parentsUntil")){aW=aX
}if(aW&&typeof aW==="string"){aV=p.filter(aW,aV)
}aV=this.length>1?p.unique(aV):aV;
if((this.length>1||ag.test(aW))&&aP.test("parentsUntil")){aV=aV.reverse()
}return this.pushStack(aV,"parentsUntil",aG.call(arguments).join(","))
};
p.fn.nextUntil=function(aX,aW){var aU=function(aY,aZ,a0){return p.dir(aY,"nextSibling",a0)
};
var aV=p.map(this,aU,aX);
if(!aC.test("nextUntil")){aW=aX
}if(aW&&typeof aW==="string"){aV=p.filter(aW,aV)
}aV=this.length>1?p.unique(aV):aV;
if((this.length>1||ag.test(aW))&&aP.test("nextUntil")){aV=aV.reverse()
}return this.pushStack(aV,"nextUntil",aG.call(arguments).join(","))
};
p.fn.prevUntil=function(aX,aW){var aU=function(aY,aZ,a0){return p.dir(aY,"previousSibling",a0)
};
var aV=p.map(this,aU,aX);
if(!aC.test("prevUntil")){aW=aX
}if(aW&&typeof aW==="string"){aV=p.filter(aW,aV)
}aV=this.length>1?p.unique(aV):aV;
if((this.length>1||ag.test(aW))&&aP.test("prevUntil")){aV=aV.reverse()
}return this.pushStack(aV,"prevUntil",aG.call(arguments).join(","))
};
p.extend({filter:function(aV,aU,aW){if(aW){aV=":not("+aV+")"
}return p.find.matches(aV,aU)
},dir:function(aW,aV,aY){var aX=[],aU=aW[aV];
while(aU&&aU.nodeType!==9&&(aY===aM||aU.nodeType!==1||!p(aU).is(aY))){if(aU.nodeType===1){aX.push(aU)
}aU=aU[aV]
}return aX
},nth:function(aU,aY,aV,aW){aY=aY||1;
var aX=0;
for(;
aU;
aU=aU[aV]){if(aU.nodeType===1&&++aX===aY){break
}}return aU
},sibling:function(aV,aU){var aW=[];
for(;
aV;
aV=aV.nextSibling){if(aV.nodeType===1&&aV!==aU){aW.push(aV)
}}return aW
}});
var x=/ jQuery\d+="(?:\d+|null)"/g,g=/^\s+/,aF=/(<([\w:]+)[^>]*?)\/>/g,at=/^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,aB=/<([\w:]+)/,aT=/<tbody/i,ac=/<|&\w+;/,ae=/checked\s*(?:[^=]|=\s*.checked.)/i,u=function(aU,aV,aW){return at.test(aW)?aU:aV+"></"+aW+">"
},Q={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};
Q.optgroup=Q.option;
Q.tbody=Q.tfoot=Q.colgroup=Q.caption=Q.thead;
Q.th=Q.td;
if(!p.support.htmlSerialize){Q._default=[1,"div<div>","</div>"]
}p.fn.extend({text:function(aU){if(p.isFunction(aU)){return this.each(function(aV){var aW=p(this);
aW.text(aU.call(this,aV,aW.text()))
})
}if(typeof aU!=="object"&&aU!==aM){return this.empty().append((this[0]&&this[0].ownerDocument||l).createTextNode(aU))
}return p.getText(this)
},wrapAll:function(aU){if(p.isFunction(aU)){return this.each(function(aW){p(this).wrapAll(aU.call(this,aW))
})
}if(this[0]){var aV=p(aU,this[0].ownerDocument).eq(0).clone(true);
if(this[0].parentNode){aV.insertBefore(this[0])
}aV.map(function(){var aW=this;
while(aW.firstChild&&aW.firstChild.nodeType===1){aW=aW.firstChild
}return aW
}).append(this)
}return this
},wrapInner:function(aU){if(p.isFunction(aU)){return this.each(function(aV){p(this).wrapInner(aU.call(this,aV))
})
}return this.each(function(){var aW=p(this),aV=aW.contents();
if(aV.length){aV.wrapAll(aU)
}else{aW.append(aU)
}})
},wrap:function(aU){return this.each(function(){p(this).wrapAll(aU)
})
},unwrap:function(){return this.parent().each(function(){if(!p.nodeName(this,"body")){p(this).replaceWith(this.childNodes)
}}).end()
},append:function(){return this.domManip(arguments,true,function(aU){if(this.nodeType===1){this.appendChild(aU)
}})
},prepend:function(){return this.domManip(arguments,true,function(aU){if(this.nodeType===1){this.insertBefore(aU,this.firstChild)
}})
},before:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(aV){this.parentNode.insertBefore(aV,this)
})
}else{if(arguments.length){var aU=p(arguments[0]);
aU.push.apply(aU,this.toArray());
return this.pushStack(aU,"before",arguments)
}}},after:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(aV){this.parentNode.insertBefore(aV,this.nextSibling)
})
}else{if(arguments.length){var aU=this.pushStack(this,"after",arguments);
aU.push.apply(aU,p(arguments[0]).toArray());
return aU
}}},clone:function(aU){var aV=this.map(function(){if(!p.support.noCloneEvent&&!p.isXMLDoc(this)){var aX=this.outerHTML,aY=this.ownerDocument;
if(!aX){var aW=aY.createElement("div");
aW.appendChild(this.cloneNode(true));
aX=aW.innerHTML
}return p.clean([aX.replace(x,"").replace(g,"")],aY)[0]
}else{return this.cloneNode(true)
}});
if(aU===true){af(this,aV);
af(this.find("*"),aV.find("*"))
}return aV
},html:function(aX){if(aX===aM){return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(x,""):null
}else{if(typeof aX==="string"&&!/<script/i.test(aX)&&(p.support.leadingWhitespace||!g.test(aX))&&!Q[(aB.exec(aX)||["",""])[1].toLowerCase()]){aX=aX.replace(aF,u);
try{for(var aV=0,aW=this.length;
aV<aW;
aV++){if(this[aV].nodeType===1){p.cleanData(this[aV].getElementsByTagName("*"));
this[aV].innerHTML=aX
}}}catch(aU){this.empty().append(aX)
}}else{if(p.isFunction(aX)){this.each(function(aY){var a0=p(this),aZ=a0.html();
a0.empty().append(function(){return aX.call(this,aY,aZ)
})
})
}else{this.empty().append(aX)
}}}return this
},replaceWith:function(aU){if(this[0]&&this[0].parentNode){if(!p.isFunction(aU)){aU=p(aU).detach()
}else{return this.each(function(aV){var aX=p(this),aW=aX.html();
aX.replaceWith(aU.call(this,aV,aW))
})
}return this.each(function(){var aV=this.nextSibling,aW=this.parentNode;
p(this).remove();
if(aV){p(aV).before(aU)
}else{p(aW).append(aU)
}})
}else{return this.pushStack(p(p.isFunction(aU)?aU():aU),"replaceWith",aU)
}},detach:function(aU){return this.remove(aU,true)
},domManip:function(a2,a0,a3){var aX,aU,a1=a2[0],aZ=[];
if(!p.support.checkClone&&arguments.length===3&&typeof a1==="string"&&ae.test(a1)){return this.each(function(){p(this).domManip(a2,a0,a3,true)
})
}if(p.isFunction(a1)){return this.each(function(a4){var a5=p(this);
a2[0]=a1.call(this,a4,a0?a5.html():aM);
a5.domManip(a2,a0,a3)
})
}if(this[0]){if(a2[0]&&a2[0].parentNode&&a2[0].parentNode.nodeType===11){aX={fragment:a2[0].parentNode}
}else{aX=U(a2,this,aZ)
}aU=aX.fragment.firstChild;
if(aU){a0=a0&&p.nodeName(aU,"tr");
for(var aV=0,aW=this.length;
aV<aW;
aV++){a3.call(a0?aY(this[aV],aU):this[aV],aX.cacheable||this.length>1||aV>0?aX.fragment.cloneNode(true):aX.fragment)
}}if(aZ){p.each(aZ,q)
}}return this;
function aY(a5,a4){return p.nodeName(a5,"table")?(a5.getElementsByTagName("tbody")[0]||a5.appendChild(a5.ownerDocument.createElement("tbody"))):a5
}}});
function af(aV,aW){var aU=0;
aW.each(function(){if(this.nodeName!==(aV[aU]&&aV[aU].nodeName)){return
}var aZ=p.data(aV[aU++]),a1=p.data(this,aZ),aX=aZ&&aZ.events;
if(aX){delete a1.handle;
a1.events={};
for(var a0 in aX){for(var aY in aX[a0]){p.event.add(this,a0,aX[a0][aY],aX[a0][aY].data)
}}}})
}function U(aW,aU,aV){var a0,aX,aY,aZ;
if(aW.length===1&&typeof aW[0]==="string"&&aW[0].length<512&&aW[0].indexOf("<option")<0&&(p.support.checkClone||!ae.test(aW[0]))){aX=true;
aY=p.fragments[aW[0]];
if(aY){if(aY!==1){a0=aY
}}}if(!a0){aZ=(aU&&aU[0]?aU[0].ownerDocument||aU[0]:l);
a0=aZ.createDocumentFragment();
p.clean(aW,aZ,a0,aV)
}if(aX){p.fragments[aW[0]]=aY?a0:1
}return{fragment:a0,cacheable:aX}
}p.fragments={};
p.fn.appendTo=function(aZ){var aY=[],aW=p(aZ);
for(var aV=0,aX=aW.length;
aV<aX;
aV++){var aU=(aV>0?this.clone(true):this).get();
p.fn.append.apply(p(aW[aV]),aU);
aY=aY.concat(aU)
}return this.pushStack(aY,"appendTo",aW.selector)
};
p.fn.prependTo=function(aZ){var aY=[],aW=p(aZ);
for(var aV=0,aX=aW.length;
aV<aX;
aV++){var aU=(aV>0?this.clone(true):this).get();
p.fn.prepend.apply(p(aW[aV]),aU);
aY=aY.concat(aU)
}return this.pushStack(aY,"prependTo",aW.selector)
};
p.fn.insertBefore=function(aZ){var aY=[],aW=p(aZ);
for(var aV=0,aX=aW.length;
aV<aX;
aV++){var aU=(aV>0?this.clone(true):this).get();
p.fn.before.apply(p(aW[aV]),aU);
aY=aY.concat(aU)
}return this.pushStack(aY,"insertBefore",aW.selector)
};
p.fn.insertAfter=function(aZ){var aY=[],aW=p(aZ);
for(var aV=0,aX=aW.length;
aV<aX;
aV++){var aU=(aV>0?this.clone(true):this).get();
p.fn.after.apply(p(aW[aV]),aU);
aY=aY.concat(aU)
}return this.pushStack(aY,"insertAfter",aW.selector)
};
p.fn.replaceAll=function(aZ){var aY=[],aW=p(aZ);
for(var aV=0,aX=aW.length;
aV<aX;
aV++){var aU=(aV>0?this.clone(true):this).get();
p.fn.replaceWith.apply(p(aW[aV]),aU);
aY=aY.concat(aU)
}return this.pushStack(aY,"replaceAll",aW.selector)
};
p.each({remove:function(aV,aU){if(!aV||p.filter(aV,[this]).length){if(!aU&&this.nodeType===1){p.cleanData(this.getElementsByTagName("*"));
p.cleanData([this])
}if(this.parentNode){this.parentNode.removeChild(this)
}}},empty:function(){if(this.nodeType===1){p.cleanData(this.getElementsByTagName("*"))
}while(this.firstChild){this.removeChild(this.firstChild)
}}},function(aV,aU){p.fn[aV]=function(){return this.each(aU,arguments)
}
});
p.extend({clean:function(aV,aU,aW,aZ){aU=aU||l;
if(typeof aU.createElement==="undefined"){aU=aU.ownerDocument||aU[0]&&aU[0].ownerDocument||l
}var aY=[];
p.each(aV,function(a4,a2){if(typeof a2==="number"){a2+=""
}if(!a2){return
}if(typeof a2==="string"&&!ac.test(a2)){a2=aU.createTextNode(a2)
}else{if(typeof a2==="string"){a2=a2.replace(aF,u);
var a6=(aB.exec(a2)||["",""])[1].toLowerCase(),a8=Q[a6]||Q._default,a0=a8[0],a1=aU.createElement("div");
a1.innerHTML=a8[1]+a2+a8[2];
while(a0--){a1=a1.lastChild
}if(!p.support.tbody){var a3=aT.test(a2),a7=a6==="table"&&!a3?a1.firstChild&&a1.firstChild.childNodes:a8[1]==="<table>"&&!a3?a1.childNodes:[];
for(var a5=a7.length-1;
a5>=0;
--a5){if(p.nodeName(a7[a5],"tbody")&&!a7[a5].childNodes.length){a7[a5].parentNode.removeChild(a7[a5])
}}}if(!p.support.leadingWhitespace&&g.test(a2)){a1.insertBefore(aU.createTextNode(g.exec(a2)[0]),a1.firstChild)
}a2=p.makeArray(a1.childNodes)
}}if(a2.nodeType){aY.push(a2)
}else{aY=p.merge(aY,a2)
}});
if(aW){for(var aX=0;
aY[aX];
aX++){if(aZ&&p.nodeName(aY[aX],"script")&&(!aY[aX].type||aY[aX].type.toLowerCase()==="text/javascript")){aZ.push(aY[aX].parentNode?aY[aX].parentNode.removeChild(aY[aX]):aY[aX])
}else{if(aY[aX].nodeType===1){aY.splice.apply(aY,[aX+1,0].concat(p.makeArray(aY[aX].getElementsByTagName("script"))))
}aW.appendChild(aY[aX])
}}}return aY
},cleanData:function(aV){for(var aW=0,aU,aX;
(aU=aV[aW])!=null;
aW++){p.event.remove(aU);
p.removeData(aU)
}}});
var aJ=/z-?index|font-?weight|opacity|zoom|line-?height/i,O=/alpha\([^)]*\)/,F=/opacity=([^)]*)/,Y=/float/i,S=/-([a-z])/ig,aH=/([A-Z])/g,aj=/^-?\d+(?:px)?$/i,ay=/^-?\d/,i={position:"absolute",visibility:"hidden",display:"block"},j=["Left","Right"],h=["Top","Bottom"],e=l.defaultView&&l.defaultView.getComputedStyle,aD=p.support.cssFloat?"cssFloat":"styleFloat",s=function(aU,aV){return aV.toUpperCase()
};
p.fn.css=function(aU,aV){return aO(this,aU,aV,true,function(aW,aX,aY){if(aY===aM){return p.curCSS(aW,aX)
}if(typeof aY==="number"&&!aJ.test(aX)){aY+="px"
}p.style(aW,aX,aY)
})
};
p.extend({style:function(aW,aY,aV){if(!aW||aW.nodeType===3||aW.nodeType===8){return aM
}if((aY==="width"||aY==="height")&&parseFloat(aV)<0){aV=aM
}var aU=aW.style||aW,a0=aV!==aM;
if(!p.support.opacity&&aY==="opacity"){if(a0){aU.zoom=1;
var aZ=parseInt(aV,10)+""==="NaN"?"":"alpha(opacity="+aV*100+")";
var aX=aU.filter||p.curCSS(aW,"filter")||"";
aU.filter=O.test(aX)?aX.replace(O,aZ):aZ
}return aU.filter&&aU.filter.indexOf("opacity=")>=0?(parseFloat(F.exec(aU.filter)[1])/100)+"":""
}if(Y.test(aY)){aY=aD
}aY=aY.replace(S,s);
if(a0){aU[aY]=aV
}return aU[aY]
},css:function(aW,a0,aY,aX){if(a0==="width"||a0==="height"){var aU,a1=i,aV=a0==="width"?j:h;
function aZ(){aU=a0==="width"?aW.offsetWidth:aW.offsetHeight;
if(aX==="border"){return
}p.each(aV,function(){if(!aX){aU-=parseFloat(p.curCSS(aW,"padding"+this,true))||0
}if(aX==="margin"){aU+=parseFloat(p.curCSS(aW,"margin"+this,true))||0
}else{aU-=parseFloat(p.curCSS(aW,"border"+this+"Width",true))||0
}})
}if(aW.offsetWidth!==0){aZ()
}else{p.swap(aW,a1,aZ)
}return Math.max(0,Math.round(aU))
}return p.curCSS(aW,a0,aY)
},curCSS:function(a2,aV,a4){var aW,aY=a2.style,a3;
if(!p.support.opacity&&aV==="opacity"&&a2.currentStyle){aW=F.test(a2.currentStyle.filter||"")?(parseFloat(RegExp.$1)/100)+"":"";
return aW===""?"1":aW
}if(Y.test(aV)){aV=aD
}if(!a4&&aY&&aY[aV]){aW=aY[aV]
}else{if(e){if(Y.test(aV)){aV="float"
}aV=aV.replace(aH,"-$1").toLowerCase();
var a1=a2.ownerDocument.defaultView;
if(!a1){return null
}var a0=a1.getComputedStyle(a2,null);
if(a0){aW=a0.getPropertyValue(aV)
}if(aV==="opacity"&&aW===""){aW="1"
}}else{if(a2.currentStyle){var aZ=aV.replace(S,s);
aW=a2.currentStyle[aV]||a2.currentStyle[aZ];
if(!aj.test(aW)&&ay.test(aW)){var aU=aY.left,aX=a2.runtimeStyle.left;
a2.runtimeStyle.left=a2.currentStyle.left;
aY.left=aZ==="fontSize"?"1em":(aW||0);
aW=aY.pixelLeft+"px";
aY.left=aU;
a2.runtimeStyle.left=aX
}}}}return aW
},swap:function(aV,aY,aU){var aX={};
for(var aW in aY){aX[aW]=aV.style[aW];
aV.style[aW]=aY[aW]
}aU.call(aV);
for(var aW in aY){aV.style[aW]=aX[aW]
}}});
if(p.expr&&p.expr.filters){p.expr.filters.hidden=function(aU){var aX=aU.offsetWidth,aV=aU.offsetHeight,aW=aU.nodeName.toLowerCase()==="tr";
return aX===0&&aV===0&&!aW?true:aX>0&&aV>0&&!aW?false:p.curCSS(aU,"display")==="none"
};
p.expr.filters.visible=function(aU){return !p.expr.filters.hidden(aU)
}
}var G=Z(),aq=/<script(.|\s)*?\/script>/gi,ar=/select|textarea/i,am=/color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,ax=/=\?(&|$)/,an=/\?/,aA=/(\?|&)_=.*?(&|$)/,aE=/^(\w+:)?\/\/([^\/?#]+)/,N=/%20/g;
p.fn.extend({_load:p.fn.load,load:function(aV,aY,aW){if(typeof aV!=="string"){return this._load(aV)
}else{if(!this.length){return this
}}var aX=aV.indexOf(" ");
if(aX>=0){var aZ=aV.slice(aX,aV.length);
aV=aV.slice(0,aX)
}var aU="GET";
if(aY){if(p.isFunction(aY)){aW=aY;
aY=null
}else{if(typeof aY==="object"){aY=p.param(aY,p.ajaxSettings.traditional);
aU="POST"
}}}var a0=this;
p.ajax({url:aV,type:aU,dataType:"html",data:aY,complete:function(a1,a2){if(a2==="success"||a2==="notmodified"){a0.html(aZ?p("<div />").append(a1.responseText.replace(aq,"")).find(aZ):a1.responseText)
}if(aW){a0.each(aW,[a1.responseText,a2,a1])
}}});
return this
},serialize:function(){return p.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){return this.elements?p.makeArray(this.elements):this
}).filter(function(){return this.name&&!this.disabled&&(this.checked||ar.test(this.nodeName)||am.test(this.type))
}).map(function(aV,aU){var aW=p(this).val();
return aW==null?null:p.isArray(aW)?p.map(aW,function(aY,aX){return{name:aU.name,value:aY}
}):{name:aU.name,value:aW}
}).get()
}});
p.fn.ajaxStart=function(aU){return this.bind("ajaxStart",aU)
};
p.fn.ajaxStop=function(aU){return this.bind("ajaxStop",aU)
};
p.fn.ajaxComplete=function(aU){return this.bind("ajaxComplete",aU)
};
p.fn.ajaxError=function(aU){return this.bind("ajaxError",aU)
};
p.fn.ajaxSuccess=function(aU){return this.bind("ajaxSuccess",aU)
};
p.fn.ajaxSend=function(aU){return this.bind("ajaxSend",aU)
};
p.extend({get:function(aX,aV,aU,aW){if(p.isFunction(aV)){aW=aW||aU;
aU=aV;
aV=null
}return p.ajax({type:"GET",url:aX,data:aV,success:aU,dataType:aW})
},getScript:function(aV,aU){return p.get(aV,null,aU,"script")
},getJSON:function(aW,aV,aU){return p.get(aW,aV,aU,"json")
},post:function(aX,aV,aU,aW){if(p.isFunction(aV)){aW=aW||aU;
aU=aV;
aV={}
}return p.ajax({type:"POST",url:aX,data:aV,success:aU,dataType:aW})
},ajaxSetup:function(aU){p.extend(p.ajaxSettings,aU)
},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:K.XMLHttpRequest&&(K.location.protocol!=="file:"||!K.ActiveXObject)?function(){return new K.XMLHttpRequest()
}:function(){try{return new K.ActiveXObject("Microsoft.XMLHTTP")
}catch(aU){}},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},etag:{},ajax:function(aX){var a2=p.extend(true,{},p.ajaxSettings,aX);
var aU,ba,a6,a4=aX&&aX.context||a2,be=a2.type.toUpperCase();
if(a2.data&&a2.processData&&typeof a2.data!=="string"){a2.data=p.param(a2.data,a2.traditional)
}if(a2.dataType==="jsonp"){if(be==="GET"){if(!ax.test(a2.url)){a2.url+=(an.test(a2.url)?"&":"?")+(a2.jsonp||"callback")+"=?"
}}else{if(!a2.data||!ax.test(a2.data)){a2.data=(a2.data?a2.data+"&":"")+(a2.jsonp||"callback")+"=?"
}}a2.dataType="json"
}if(a2.dataType==="json"&&(a2.data&&ax.test(a2.data)||ax.test(a2.url))){aU=a2.jsonpCallback||("jsonp"+G++);
if(a2.data){a2.data=(a2.data+"").replace(ax,"="+aU+"$1")
}a2.url=a2.url.replace(ax,"="+aU+"$1");
a2.dataType="script";
K[aU]=K[aU]||function(bh){a6=bh;
bb();
a5();
K[aU]=aM;
try{delete K[aU]
}catch(bg){}if(a9){a9.removeChild(a3)
}}
}if(a2.dataType==="script"&&a2.cache===null){a2.cache=false
}if(a2.cache===false&&be==="GET"){var bd=Z();
var a1=a2.url.replace(aA,"$1_="+bd+"$2");
a2.url=a1+((a1===a2.url)?(an.test(a2.url)?"&":"?")+"_="+bd:"")
}if(a2.data&&be==="GET"){a2.url+=(an.test(a2.url)?"&":"?")+a2.data
}if(a2.global&&!p.active++){p.event.trigger("ajaxStart")
}var aY=aE.exec(a2.url),aZ=aY&&(aY[1]&&aY[1]!==location.protocol||aY[2]!==location.host);
if(a2.dataType==="script"&&be==="GET"&&aZ){var a9=l.getElementsByTagName("head")[0]||l.documentElement;
var a3=l.createElement("script");
a3.src=a2.url;
if(a2.scriptCharset){a3.charset=a2.scriptCharset
}if(!aU){var a7=false;
a3.onload=a3.onreadystatechange=function(){if(!a7&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){a7=true;
bb();
a5();
a3.onload=a3.onreadystatechange=null;
if(a9&&a3.parentNode){a9.removeChild(a3)
}}}
}a9.insertBefore(a3,a9.firstChild);
return aM
}var a0=false;
var bf=a2.xhr();
if(!bf){return
}if(a2.username){bf.open(be,a2.url,a2.async,a2.username,a2.password)
}else{bf.open(be,a2.url,a2.async)
}try{if(a2.data||aX&&aX.contentType){bf.setRequestHeader("Content-Type",a2.contentType)
}if(a2.ifModified){if(p.lastModified[a2.url]){bf.setRequestHeader("If-Modified-Since",p.lastModified[a2.url])
}if(p.etag[a2.url]){bf.setRequestHeader("If-None-Match",p.etag[a2.url])
}}if(!aZ){bf.setRequestHeader("X-Requested-With","XMLHttpRequest")
}bf.setRequestHeader("Accept",a2.dataType&&a2.accepts[a2.dataType]?a2.accepts[a2.dataType]+", */*":a2.accepts._default)
}catch(a8){}if(a2.beforeSend&&a2.beforeSend.call(a4,bf,a2)===false){if(a2.global&&!--p.active){p.event.trigger("ajaxStop")
}bf.abort();
return false
}if(a2.global){bc("ajaxSend",[bf,a2])
}var aW=bf.onreadystatechange=function(bi){if(!bf||bf.readyState===0||bi==="abort"){if(!a0){a5()
}a0=true;
if(bf){bf.onreadystatechange=p.noop
}}else{if(!a0&&bf&&(bf.readyState===4||bi==="timeout")){a0=true;
bf.onreadystatechange=p.noop;
ba=bi==="timeout"?"timeout":!p.httpSuccess(bf)?"error":a2.ifModified&&p.httpNotModified(bf,a2.url)?"notmodified":"success";
var bh;
if(ba==="success"){try{a6=p.httpData(bf,a2.dataType,a2)
}catch(bg){ba="parsererror";
bh=bg
}}if(ba==="success"||ba==="notmodified"){if(!aU){bb()
}}else{p.handleError(a2,bf,ba,bh)
}a5();
if(bi==="timeout"){bf.abort()
}if(a2.async){bf=null
}}}};
try{var aV=bf.abort;
bf.abort=function(){if(bf){aV.call(bf)
}aW("abort")
}
}catch(a8){}if(a2.async&&a2.timeout>0){setTimeout(function(){if(bf&&!a0){aW("timeout")
}},a2.timeout)
}try{bf.send(be==="POST"||be==="PUT"||be==="DELETE"?a2.data:null)
}catch(a8){p.handleError(a2,bf,null,a8);
a5()
}if(!a2.async){aW()
}function bb(){if(a2.success){a2.success.call(a4,a6,ba,bf)
}if(a2.global){bc("ajaxSuccess",[bf,a2])
}}function a5(){if(a2.complete){a2.complete.call(a4,bf,ba)
}if(a2.global){bc("ajaxComplete",[bf,a2])
}if(a2.global&&!--p.active){p.event.trigger("ajaxStop")
}}function bc(bh,bg){(a2.context?p(a2.context):p.event).trigger(bh,bg)
}return bf
},handleError:function(aV,aX,aW,aU){if(aV.error){aV.error.call(aV.context||aV,aX,aW,aU)
}if(aV.global){(aV.context?p(aV.context):p.event).trigger("ajaxError",[aX,aV,aU])
}},active:0,httpSuccess:function(aV){try{return !aV.status&&location.protocol==="file:"||(aV.status>=200&&aV.status<300)||aV.status===304||aV.status===1223||aV.status===0
}catch(aU){}return false
},httpNotModified:function(aX,aW){var aV=aX.getResponseHeader("Last-Modified"),aU=aX.getResponseHeader("Etag");
if(aV){p.lastModified[aW]=aV
}if(aU){p.etag[aW]=aU
}return aX.status===304||aX.status===0
},httpData:function(aY,aX,aW){var aU=aY.getResponseHeader("content-type")||"",aZ=aX==="xml"||!aX&&aU.indexOf("xml")>=0,aV=aZ?aY.responseXML:aY.responseText;
if(aZ&&aV.documentElement.nodeName==="parsererror"){p.error("parsererror")
}if(aW&&aW.dataFilter){aV=aW.dataFilter(aV,aX)
}if(typeof aV==="string"){if(aX==="json"||!aX&&aU.indexOf("json")>=0){aV=p.parseJSON(aV)
}else{if(aX==="script"||!aX&&aU.indexOf("javascript")>=0){p.globalEval(aV)
}}}return aV
},param:function(aU,aZ){var aY=[];
if(aZ===aM){aZ=p.ajaxSettings.traditional
}if(p.isArray(aU)||aU.jquery){p.each(aU,function(){aV(this.name,this.value)
})
}else{for(var aX in aU){aW(aX,aU[aX])
}}return aY.join("&").replace(N,"+");
function aW(a1,a0){if(p.isArray(a0)){p.each(a0,function(a2,a3){if(aZ){aV(a1,a3)
}else{aW(a1+"["+(typeof a3==="object"||p.isArray(a3)?a2:"")+"]",a3)
}})
}else{if(!aZ&&a0!=null&&typeof a0==="object"){p.each(a0,function(a2,a3){aW(a1+"["+a2+"]",a3)
})
}else{aV(a1,a0)
}}}function aV(a0,a1){a1=p.isFunction(a1)?a1():a1;
aY[aY.length]=encodeURIComponent(a0)+"="+encodeURIComponent(a1)
}}});
var o={},ab=/toggle|show|hide/,aa=/^([+-]=)?([\d+-.]+)(.*)$/,E,w=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];
p.fn.extend({show:function(a1,a2){if(a1||a1===0){return this.animate(y("show",3),a1,a2)
}else{for(var aV=0,aY=this.length;
aV<aY;
aV++){var a0=p.data(this[aV],"olddisplay");
this[aV].style.display=a0||"";
if(p.css(this[aV],"display")==="none"){var aZ=this[aV].nodeName,a3;
if(o[aZ]){a3=o[aZ]
}else{var aU=p("<"+aZ+" />").appendTo("body");
a3=aU.css("display");
if(a3==="none"){a3="block"
}aU.remove();
o[aZ]=a3
}p.data(this[aV],"olddisplay",a3)
}}for(var aW=0,aX=this.length;
aW<aX;
aW++){this[aW].style.display=p.data(this[aW],"olddisplay")||""
}return this
}},hide:function(aV,aW){if(aV||aV===0){return this.animate(y("hide",3),aV,aW)
}else{for(var aX=0,a0=this.length;
aX<a0;
aX++){var aU=p.data(this[aX],"olddisplay");
if(!aU&&aU!=="none"){p.data(this[aX],"olddisplay",p.css(this[aX],"display"))
}}for(var aY=0,aZ=this.length;
aY<aZ;
aY++){this[aY].style.display="none"
}return this
}},_toggle:p.fn.toggle,toggle:function(aV,aW){var aU=typeof aV==="boolean";
if(p.isFunction(aV)&&p.isFunction(aW)){this._toggle.apply(this,arguments)
}else{if(aV==null||aU){this.each(function(){var aX=aU?aV:p(this).is(":hidden");
p(this)[aX?"show":"hide"]()
})
}else{this.animate(y("toggle",3),aV,aW)
}}return this
},fadeTo:function(aV,aW,aU){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:aW},aV,aU)
},animate:function(aX,aY,aV,aU){var aW=p.speed(aY,aV,aU);
if(p.isEmptyObject(aX)){return this.each(aW.complete)
}return this[aW.queue===false?"each":"queue"](function(){var aZ=p.extend({},aW),a0,a2=this.nodeType===1&&p(this).is(":hidden"),a1=this;
for(a0 in aX){var a3=a0.replace(S,s);
if(a0!==a3){aX[a3]=aX[a0];
delete aX[a0];
a0=a3
}if(aX[a0]==="hide"&&a2||aX[a0]==="show"&&!a2){return aZ.complete.call(this)
}if((a0==="height"||a0==="width")&&this.style){aZ.display=p.css(this,"display");
aZ.overflow=this.style.overflow
}if(p.isArray(aX[a0])){(aZ.specialEasing=aZ.specialEasing||{})[a0]=aX[a0][1];
aX[a0]=aX[a0][0]
}}if(aZ.overflow!=null){this.style.overflow="hidden"
}aZ.curAnim=p.extend({},aX);
p.each(aX,function(a6,ba){var a4=new p.fx(a1,aZ,a6);
if(ab.test(ba)){a4[ba==="toggle"?a2?"show":"hide":ba](aX)
}else{var a7=aa.exec(ba),a8=a4.cur(true)||0;
if(a7){var a5=parseFloat(a7[2]),a9=a7[3]||"px";
if(a9!=="px"){a1.style[a6]=(a5||1)+a9;
a8=((a5||1)/a4.cur(true))*a8;
a1.style[a6]=a8+a9
}if(a7[1]){a5=((a7[1]==="-="?-1:1)*a5)+a8
}a4.custom(a8,a5,a9)
}else{a4.custom(a8,ba,"")
}}});
return true
})
},stop:function(aU,aV){var aW=p.timers;
if(aU){this.queue([])
}this.each(function(){for(var aX=aW.length-1;
aX>=0;
aX--){if(aW[aX].elem===this){if(aV){aW[aX](true)
}aW.splice(aX,1)
}}});
if(!aV){this.dequeue()
}return this
}});
p.fn.slideDown=function(aV,aU){return this.animate(y("show",1),aV,aU)
};
p.fn.slideUp=function(aV,aU){return this.animate(y("hide",1),aV,aU)
};
p.fn.slideToggle=function(aV,aU){return this.animate(y("toggle",1),aV,aU)
};
p.fn.fadeIn=function(aV,aU){return this.animate({opacity:"show"},aV,aU)
};
p.fn.fadeOut=function(aV,aU){return this.animate({opacity:"hide"},aV,aU)
};
p.extend({speed:function(aX,aU,aV){var aW=aX&&typeof aX==="object"?aX:{complete:aV||!aV&&aU||p.isFunction(aX)&&aX,duration:aX,easing:aV&&aU||aU&&!p.isFunction(aU)&&aU};
aW.duration=p.fx.off?0:typeof aW.duration==="number"?aW.duration:p.fx.speeds[aW.duration]||p.fx.speeds._default;
aW.old=aW.complete;
aW.complete=function(){if(aW.queue!==false){p(this).dequeue()
}if(p.isFunction(aW.old)){aW.old.call(this)
}};
return aW
},easing:{linear:function(aX,aW,aV,aU){return aV+aU*aX
},swing:function(aX,aW,aV,aU){return((-Math.cos(aX*Math.PI)/2)+0.5)*aU+aV
}},timers:[],fx:function(aU,aV,aW){this.options=aV;
this.elem=aU;
this.prop=aW;
if(!aV.orig){aV.orig={}
}}});
p.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)
}(p.fx.step[this.prop]||p.fx.step._default)(this);
if((this.prop==="height"||this.prop==="width")&&this.elem.style){this.elem.style.display="block"
}},cur:function(aU){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]
}var aV=parseFloat(p.css(this.elem,this.prop,aU));
return aV&&aV>-10000?aV:parseFloat(p.curCSS(this.elem,this.prop))||0
},custom:function(aU,aX,aY){this.startTime=Z();
this.start=aU;
this.end=aX;
this.unit=aY||this.unit||"px";
this.now=this.start;
this.pos=this.state=0;
var aV=this;
function aW(aZ){return aV.step(aZ)
}aW.elem=this.elem;
if(aW()&&p.timers.push(aW)&&!E){E=setInterval(p.fx.tick,13)
}},show:function(){this.options.orig[this.prop]=p.style(this.elem,this.prop);
this.options.show=true;
this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());
p(this.elem).show()
},hide:function(){this.options.orig[this.prop]=p.style(this.elem,this.prop);
this.options.hide=true;
this.custom(this.cur(),0)
},step:function(aW){var a2=Z(),aV=true;
if(aW||a2>=this.options.duration+this.startTime){this.now=this.end;
this.pos=this.state=1;
this.update();
this.options.curAnim[this.prop]=true;
for(var aX in this.options.curAnim){if(this.options.curAnim[aX]!==true){aV=false
}}if(aV){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;
var aZ=p.data(this.elem,"olddisplay");
this.elem.style.display=aZ?aZ:this.options.display;
if(p.css(this.elem,"display")==="none"){this.elem.style.display="block"
}}if(this.options.hide){p(this.elem).hide()
}if(this.options.hide||this.options.show){for(var a0 in this.options.curAnim){p.style(this.elem,a0,this.options.orig[a0])
}}this.options.complete.call(this.elem)
}return false
}else{var aY=a2-this.startTime;
this.state=aY/this.options.duration;
var a1=this.options.specialEasing&&this.options.specialEasing[this.prop];
var aU=this.options.easing||(p.easing.swing?"swing":"linear");
this.pos=p.easing[a1||aU](this.state,aY,0,1,this.options.duration);
this.now=this.start+((this.end-this.start)*this.pos);
this.update()
}return true
}};
p.extend(p.fx,{tick:function(){var aV=p.timers;
for(var aU=0;
aU<aV.length;
aU++){if(!aV[aU]()){aV.splice(aU--,1)
}}if(!aV.length){p.fx.stop()
}},stop:function(){clearInterval(E);
E=null
},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(aU){p.style(aU.elem,"opacity",aU.now)
},_default:function(aU){if(aU.elem.style&&aU.elem.style[aU.prop]!=null){aU.elem.style[aU.prop]=(aU.prop==="width"||aU.prop==="height"?Math.max(0,aU.now):aU.now)+aU.unit
}else{aU.elem[aU.prop]=aU.now
}}}});
if(p.expr&&p.expr.filters){p.expr.filters.animated=function(aU){return p.grep(p.timers,function(aV){return aU===aV.elem
}).length
}
}function y(aW,aU){var aV={};
p.each(w.concat.apply([],w.slice(0,aU)),function(){aV[this]=aW
});
return aV
}if("getBoundingClientRect" in l.documentElement){p.fn.offset=function(a0){var aY=this[0];
if(a0){return this.each(function(a4){p.offset.setOffset(this,a0,a4)
})
}if(!aY||!aY.ownerDocument){return null
}if(aY===aY.ownerDocument.body){return p.offset.bodyOffset(aY)
}var a3=aY.getBoundingClientRect(),aW=aY.ownerDocument,a2=aW.body,aX=aW.documentElement,aV=aX.clientTop||a2.clientTop||0,aU=aX.clientLeft||a2.clientLeft||0,a1=a3.top+(self.pageYOffset||p.support.boxModel&&aX.scrollTop||a2.scrollTop)-aV,aZ=a3.left+(self.pageXOffset||p.support.boxModel&&aX.scrollLeft||a2.scrollLeft)-aU;
return{top:a1,left:aZ}
}
}else{p.fn.offset=function(aW){var a5=this[0];
if(aW){return this.each(function(a6){p.offset.setOffset(this,aW,a6)
})
}if(!a5||!a5.ownerDocument){return null
}if(a5===a5.ownerDocument.body){return p.offset.bodyOffset(a5)
}p.offset.initialize();
var aV=a5.offsetParent,aY=a5,a3=a5.ownerDocument,a1,a4=a3.documentElement,a0=a3.body,a2=a3.defaultView,aX=a2?a2.getComputedStyle(a5,null):a5.currentStyle,aZ=a5.offsetTop,aU=a5.offsetLeft;
while((a5=a5.parentNode)&&a5!==a0&&a5!==a4){if(p.offset.supportsFixedPosition&&aX.position==="fixed"){break
}a1=a2?a2.getComputedStyle(a5,null):a5.currentStyle;
aZ-=a5.scrollTop;
aU-=a5.scrollLeft;
if(a5===aV){aZ+=a5.offsetTop;
aU+=a5.offsetLeft;
if(p.offset.doesNotAddBorder&&!(p.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(a5.nodeName))){aZ+=parseFloat(a1.borderTopWidth)||0;
aU+=parseFloat(a1.borderLeftWidth)||0
}aY=aV,aV=a5.offsetParent
}if(p.offset.subtractsBorderForOverflowNotVisible&&a1.overflow!=="visible"){aZ+=parseFloat(a1.borderTopWidth)||0;
aU+=parseFloat(a1.borderLeftWidth)||0
}aX=a1
}if(aX.position==="relative"||aX.position==="static"){aZ+=a0.offsetTop;
aU+=a0.offsetLeft
}if(p.offset.supportsFixedPosition&&aX.position==="fixed"){aZ+=Math.max(a4.scrollTop,a0.scrollTop);
aU+=Math.max(a4.scrollLeft,a0.scrollLeft)
}return{top:aZ,left:aU}
}
}p.offset={initialize:function(){var aW=l.body,aZ=l.createElement("div"),a1,aY,aU,aV,aX=parseFloat(p.curCSS(aW,"marginTop",true))||0,a0="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
p.extend(aZ.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});
aZ.innerHTML=a0;
aW.insertBefore(aZ,aW.firstChild);
a1=aZ.firstChild;
aY=a1.firstChild;
aV=a1.nextSibling.firstChild.firstChild;
this.doesNotAddBorder=(aY.offsetTop!==5);
this.doesAddBorderForTableAndCells=(aV.offsetTop===5);
aY.style.position="fixed",aY.style.top="20px";
this.supportsFixedPosition=(aY.offsetTop===20||aY.offsetTop===15);
aY.style.position=aY.style.top="";
a1.style.overflow="hidden",a1.style.position="relative";
this.subtractsBorderForOverflowNotVisible=(aY.offsetTop===-5);
this.doesNotIncludeMarginInBodyOffset=(aW.offsetTop!==aX);
aW.removeChild(aZ);
aW=aZ=a1=aY=aU=aV=null;
p.offset.initialize=p.noop
},bodyOffset:function(aU){var aW=aU.offsetTop,aV=aU.offsetLeft;
p.offset.initialize();
if(p.offset.doesNotIncludeMarginInBodyOffset){aW+=parseFloat(p.curCSS(aU,"marginTop",true))||0;
aV+=parseFloat(p.curCSS(aU,"marginLeft",true))||0
}return{top:aW,left:aV}
},setOffset:function(a0,aU,a1){if(/static/.test(p.curCSS(a0,"position"))){a0.style.position="relative"
}var aW=p(a0),aY=aW.offset(),aZ=parseInt(p.curCSS(a0,"top",true),10)||0,aX=parseInt(p.curCSS(a0,"left",true),10)||0;
if(p.isFunction(aU)){aU=aU.call(a0,a1,aY)
}var aV={top:(aU.top-aY.top)+aZ,left:(aU.left-aY.left)+aX};
if("using" in aU){aU.using.call(a0,aV)
}else{aW.css(aV)
}}};
p.fn.extend({position:function(){if(!this[0]){return null
}var aU=this[0],aW=this.offsetParent(),aV=this.offset(),aX=/^body|html$/i.test(aW[0].nodeName)?{top:0,left:0}:aW.offset();
aV.top-=parseFloat(p.curCSS(aU,"marginTop",true))||0;
aV.left-=parseFloat(p.curCSS(aU,"marginLeft",true))||0;
aX.top+=parseFloat(p.curCSS(aW[0],"borderTopWidth",true))||0;
aX.left+=parseFloat(p.curCSS(aW[0],"borderLeftWidth",true))||0;
return{top:aV.top-aX.top,left:aV.left-aX.left}
},offsetParent:function(){return this.map(function(){var aU=this.offsetParent||l.body;
while(aU&&(!/^body|html$/i.test(aU.nodeName)&&p.css(aU,"position")==="static")){aU=aU.offsetParent
}return aU
})
}});
p.each(["Left","Top"],function(aU,aW){var aV="scroll"+aW;
p.fn[aV]=function(aY){var aX=this[0],aZ;
if(!aX){return null
}if(aY!==aM){return this.each(function(){aZ=A(this);
if(aZ){aZ.scrollTo(!aU?aY:p(aZ).scrollLeft(),aU?aY:p(aZ).scrollTop())
}else{this[aV]=aY
}})
}else{aZ=A(aX);
return aZ?("pageXOffset" in aZ)?aZ[aU?"pageYOffset":"pageXOffset"]:p.support.boxModel&&aZ.document.documentElement[aV]||aZ.document.body[aV]:aX[aV]
}}
});
p.each(["Left","Top"],function(aU,aW){var aV="scroll"+aW;
p.fn[aV]=function(aY){var aX=this[0],aZ;
if(!aX){return null
}if(aY!==aM){return this.each(function(){aZ=A(this);
if(aZ){aZ.scrollTo(!aU?aY:p(aZ).scrollLeft(),aU?aY:p(aZ).scrollTop())
}else{this[aV]=aY
}})
}else{aZ=A(aX);
return aZ?("pageXOffset" in aZ)?aZ[aU?"pageYOffset":"pageXOffset"]:p.support.boxModel&&aZ.document.documentElement[aV]||aZ.document.body[aV]:aX[aV]
}}
});
function A(aU){return("scrollTo" in aU&&aU.document)?aU:aU.nodeType===9?aU.defaultView||aU.parentWindow:false
}p.each(["Height"],function(aU,aV){var aW=aV.toLowerCase();
p.fn["inner"+aV]=function(){return this[0]?p.css(this[0],aW,false,"padding"):null
};
p.fn["outer"+aV]=function(aX){return this[0]?p.css(this[0],aW,false,aX?"margin":"border"):null
};
p.fn[aW]=function(aY){var aX=this[0];
if(!aX){return aY==null?null:this
}if(p.isFunction(aY)){return this.each(function(a0){var aZ=p(this);
aZ[aW](aY.call(this,a0,aZ[aW]()))
})
}return("scrollTo" in aX&&aX.document)?aX.document.compatMode==="CSS1Compat"&&aX.document.documentElement["client"+aV]||aX.document.body["client"+aV]:(aX.nodeType===9)?Math.max(aX.documentElement["client"+aV],aX.body["scroll"+aV],aX.documentElement["scroll"+aV],aX.body["offset"+aV],aX.documentElement["offset"+aV]):aY===aM?p.css(aX,aW):this.css(aW,typeof aY==="string"?aY:aY+"px")
}
});
p.each(["Width"],function(aU,aV){var aW=aV.toLowerCase();
p.fn["inner"+aV]=function(){return this[0]?p.css(this[0],aW,false,"padding"):null
};
p.fn["outer"+aV]=function(aX){return this[0]?p.css(this[0],aW,false,aX?"margin":"border"):null
};
p.fn[aW]=function(aY){var aX=this[0];
if(!aX){return aY==null?null:this
}if(p.isFunction(aY)){return this.each(function(a0){var aZ=p(this);
aZ[aW](aY.call(this,a0,aZ[aW]()))
})
}return("scrollTo" in aX&&aX.document)?aX.document.compatMode==="CSS1Compat"&&aX.document.documentElement["client"+aV]||aX.document.body["client"+aV]:(aX.nodeType===9)?Math.max(aX.documentElement["client"+aV],aX.body["scroll"+aV],aX.documentElement["scroll"+aV],aX.body["offset"+aV],aX.documentElement["offset"+aV]):aY===aM?p.css(aX,aW):this.css(aW,typeof aY==="string"?aY:aY+"px")
}
});
K.jQuery=K.$=p
})(window);