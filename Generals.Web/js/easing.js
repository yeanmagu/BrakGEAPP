jQuery.easing.jswing=jQuery.easing.swing;
jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(j,i,b,c,d){return jQuery.easing[jQuery.easing.def](j,i,b,c,d)
},easeInQuad:function(j,i,b,c,d){return c*(i/=d)*i+b
},easeOutQuad:function(j,i,b,c,d){return -c*(i/=d)*(i-2)+b
},easeInOutQuad:function(j,i,b,c,d){if((i/=d/2)<1){return c/2*i*i+b
}return -c/2*((--i)*(i-2)-1)+b
},easeInCubic:function(j,i,b,c,d){return c*(i/=d)*i*i+b
},easeOutCubic:function(j,i,b,c,d){return c*((i=i/d-1)*i*i+1)+b
},easeInOutCubic:function(j,i,b,c,d){if((i/=d/2)<1){return c/2*i*i*i+b
}return c/2*((i-=2)*i*i+2)+b
},easeInQuart:function(j,i,b,c,d){return c*(i/=d)*i*i*i+b
},easeOutQuart:function(j,i,b,c,d){return -c*((i=i/d-1)*i*i*i-1)+b
},easeInOutQuart:function(j,i,b,c,d){if((i/=d/2)<1){return c/2*i*i*i*i+b
}return -c/2*((i-=2)*i*i*i-2)+b
},easeInQuint:function(j,i,b,c,d){return c*(i/=d)*i*i*i*i+b
},easeOutQuint:function(j,i,b,c,d){return c*((i=i/d-1)*i*i*i*i+1)+b
},easeInOutQuint:function(j,i,b,c,d){if((i/=d/2)<1){return c/2*i*i*i*i*i+b
}return c/2*((i-=2)*i*i*i*i+2)+b
},easeInSine:function(j,i,b,c,d){return -c*Math.cos(i/d*(Math.PI/2))+c+b
},easeOutSine:function(j,i,b,c,d){return c*Math.sin(i/d*(Math.PI/2))+b
},easeInOutSine:function(j,i,b,c,d){return -c/2*(Math.cos(Math.PI*i/d)-1)+b
},easeInExpo:function(j,i,b,c,d){return(i==0)?b:c*Math.pow(2,10*(i/d-1))+b
},easeOutExpo:function(j,i,b,c,d){return(i==d)?b+c:c*(-Math.pow(2,-10*i/d)+1)+b
},easeInOutExpo:function(j,i,b,c,d){if(i==0){return b
}if(i==d){return b+c
}if((i/=d/2)<1){return c/2*Math.pow(2,10*(i-1))+b
}return c/2*(-Math.pow(2,-10*--i)+2)+b
},easeInCirc:function(j,i,b,c,d){return -c*(Math.sqrt(1-(i/=d)*i)-1)+b
},easeOutCirc:function(j,i,b,c,d){return c*Math.sqrt(1-(i=i/d-1)*i)+b
},easeInOutCirc:function(j,i,b,c,d){if((i/=d/2)<1){return -c/2*(Math.sqrt(1-i*i)-1)+b
}return c/2*(Math.sqrt(1-(i-=2)*i)+1)+b
},easeInElastic:function(p,o,b,c,d){var n=1.70158;
var m=0;
var a=c;
if(o==0){return b
}if((o/=d)==1){return b+c
}if(!m){m=d*0.3
}if(a<Math.abs(c)){a=c;
var n=m/4
}else{var n=m/(2*Math.PI)*Math.asin(c/a)
}return -(a*Math.pow(2,10*(o-=1))*Math.sin((o*d-n)*(2*Math.PI)/m))+b
},easeOutElastic:function(p,o,b,c,d){var n=1.70158;
var m=0;
var a=c;
if(o==0){return b
}if((o/=d)==1){return b+c
}if(!m){m=d*0.3
}if(a<Math.abs(c)){a=c;
var n=m/4
}else{var n=m/(2*Math.PI)*Math.asin(c/a)
}return a*Math.pow(2,-10*o)*Math.sin((o*d-n)*(2*Math.PI)/m)+c+b
},easeInOutElastic:function(p,o,b,c,d){var n=1.70158;
var m=0;
var a=c;
if(o==0){return b
}if((o/=d/2)==2){return b+c
}if(!m){m=d*(0.3*1.5)
}if(a<Math.abs(c)){a=c;
var n=m/4
}else{var n=m/(2*Math.PI)*Math.asin(c/a)
}if(o<1){return -0.5*(a*Math.pow(2,10*(o-=1))*Math.sin((o*d-n)*(2*Math.PI)/m))+b
}return a*Math.pow(2,-10*(o-=1))*Math.sin((o*d-n)*(2*Math.PI)/m)*0.5+c+b
},easeInBack:function(l,k,b,c,d,j){if(j==undefined){j=1.70158
}return c*(k/=d)*k*((j+1)*k-j)+b
},easeOutBack:function(l,k,b,c,d,j){if(j==undefined){j=1.70158
}return c*((k=k/d-1)*k*((j+1)*k+j)+1)+b
},easeInOutBack:function(l,k,b,c,d,j){if(j==undefined){j=1.70158
}if((k/=d/2)<1){return c/2*(k*k*(((j*=(1.525))+1)*k-j))+b
}return c/2*((k-=2)*k*(((j*=(1.525))+1)*k+j)+2)+b
},easeInBounce:function(j,i,b,c,d){return c-jQuery.easing.easeOutBounce(j,d-i,0,c,d)+b
},easeOutBounce:function(j,i,b,c,d){if((i/=d)<(1/2.75)){return c*(7.5625*i*i)+b
}else{if(i<(2/2.75)){return c*(7.5625*(i-=(1.5/2.75))*i+0.75)+b
}else{if(i<(2.5/2.75)){return c*(7.5625*(i-=(2.25/2.75))*i+0.9375)+b
}else{return c*(7.5625*(i-=(2.625/2.75))*i+0.984375)+b
}}}},easeInOutBounce:function(j,i,b,c,d){if(i<d/2){return jQuery.easing.easeInBounce(j,i*2,0,c,d)*0.5+b
}return jQuery.easing.easeOutBounce(j,i*2-d,0,c,d)*0.5+c*0.5+b
}});