!function(a){function b(c){Gumby.debug("Initializing Radio Button",c);
this.$el=c;
this.$input=this.$el.find("input[type=radio]");
var d=this;
this.$el.on(Gumby.click,function(f){f.preventDefault();
if(d.$input.is("[disabled]")){return
}d.update()
}).on("gumby.check",function(){Gumby.debug("Check event triggered",d.$el);
d.update()
});
if(this.$input.prop("checked")||this.$el.hasClass("checked")){d.update(true)
}}b.prototype.update=function(){if(this.$el.hasClass("checked")&&this.$input.prop("checked")&&this.$el.find("i.icon-dot").length){return
}Gumby.debug("Updating Radio Button group",this.$el);
var c=this.$el.find("span"),d='input[name="'+this.$input.attr("name")+'"]';
a(".radio").has(d).removeClass("checked").find("input").prop("checked",false).end().find("i").remove();
this.$input.prop("checked",true);
c.append('<i class="icon-dot" />');
Gumby.debug("Triggering onCheck event",this.$el);
this.$el.addClass("checked").trigger("gumby.onCheck")
};
Gumby.addInitalisation("radiobtn",function(){a(".radio").each(function(){var c=a(this);
if(c.data("isRadioBtn")){return true
}c.data("isRadioBtn",true);
new b(c)
})
});
Gumby.UIModule({module:"radiobtn",events:["onCheck","check"],init:function(){Gumby.initialize("radiobtn")
}})
}(jQuery);