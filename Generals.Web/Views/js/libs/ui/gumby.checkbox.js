!function(a){function b(c){Gumby.debug("Initializing Checkbox",c);
this.$el=c;
this.$input=this.$el.find("input[type=checkbox]");
var d=this;
this.$el.on(Gumby.click,function(f){f.preventDefault();
if(d.$input.is("[disabled]")){return
}if(d.$el.hasClass("checked")){d.update(false)
}else{d.update(true)
}}).on("gumby.check",function(){Gumby.debug("Check event triggered",d.$el);
d.update(true)
}).on("gumby.uncheck",function(){Gumby.debug("Uncheck event triggered",d.$el);
d.update(false)
});
if(this.$input.prop("checked")||this.$el.hasClass("checked")){d.update(true)
}}b.prototype.update=function(d){var c=this.$el.find("span");
if(d){Gumby.debug("Checking Checkbox",this.$el);
c.append('<i class="icon-check" />');
this.$input.prop("checked",true);
Gumby.debug("Triggering onCheck event",this.$el);
Gumby.debug("Triggering onChange event",this.$el);
this.$el.addClass("checked").trigger("gumby.onCheck").trigger("gumby.onChange")
}else{Gumby.debug("Unchecking Checkbox",this.$el);
this.$input.prop("checked",false);
c.find("i").remove();
Gumby.debug("Triggering onUncheck event",this.$el);
Gumby.debug("Triggering onChange event",this.$el);
this.$el.removeClass("checked").trigger("gumby.onUncheck").trigger("gumby.onChange")
}};
Gumby.addInitalisation("checkbox",function(){a(".checkbox").each(function(){var c=a(this);
if(c.data("isCheckbox")){return true
}c.data("isCheckbox",true);
new b(c)
})
});
Gumby.UIModule({module:"checkbox",events:["onCheck","onUncheck","onChange","check","uncheck"],init:function(){Gumby.initialize("checkbox")
}})
}(jQuery);