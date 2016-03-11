!function(a){function b(c){Gumby.debug("Initializing Skiplink",c);
this.$el=c;
this.targetPos=0;
this.duration=0;
this.offset=false;
this.easing="";
this.update=false;
this.setup();
var d=this;
this.$el.on(Gumby.click+" gumby.skip",function(f){f.preventDefault();
if(f.namespace==="skip"){Gumby.debug("Skip event triggered",d.$el)
}if(d.update){d.calculateTarget(d.skipTo)
}else{d.skipTo()
}}).on("gumby.initialize",function(){Gumby.debug("Re-initializing Skiplink",d.$el);
d.setup()
})
}b.prototype.setup=function(){this.duration=Number(Gumby.selectAttr.apply(this.$el,["duration"]))||200;
this.offset=Gumby.selectAttr.apply(this.$el,["offset"])||false;
this.easing=Gumby.selectAttr.apply(this.$el,["easing"])||"swing";
this.update=Gumby.selectAttr.apply(this.$el,["update"])?true:false;
this.calculateTarget()
};
b.prototype.calculateTarget=function(d){var e=this,f=Gumby.selectAttr.apply(this.$el,["goto"]),c;
if(f=="top"){this.targetPos=0
}else{if(a.isNumeric(f)){this.targetPos=Number(f)
}else{c=a(f);
if(!c.length){Gumby.error("Cannot find skiplink target: "+f);
return false
}this.targetPos=c.offset().top
}}if(d){d.apply(this)
}};
b.prototype.skipTo=function(){Gumby.debug("Skipping to target",this.$el);
var c=this;
a("html,body").animate({scrollTop:this.calculateOffset()},this.duration,this.easing).promise().done(function(){Gumby.debug("Triggering onComplete event",c.$el);
c.$el.trigger("gumby.onComplete")
})
};
b.prototype.calculateOffset=function(){if(!this.offset){return this.targetPos
}var d=this.offset.substr(0,1),c=Number(this.offset.substr(1,this.offset.length));
if(d==="-"){return this.targetPos-c
}else{if(d==="+"){return this.targetPos+c
}}};
Gumby.addInitalisation("skiplink",function(c){a(".skiplink > a, .skip").each(function(){var d=a(this);
if(d.data("isSkipLink")&&!c){return true
}else{if(d.data("isSkipLink")&&c){d.trigger("gumby.initialize");
return true
}}d.data("isSkipLink",true);
new b(d)
})
});
Gumby.UIModule({module:"skiplink",events:["initialize","onComplete","skip"],init:function(){Gumby.initialize("skiplink")
}})
}(jQuery);