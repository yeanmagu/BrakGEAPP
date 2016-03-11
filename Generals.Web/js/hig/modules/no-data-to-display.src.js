(function(d){var g=d.seriesTypes,a=d.Chart.prototype,b=d.getOptions(),c=d.extend;
c(b.lang,{noData:"No data to display"});
b.noData={position:{x:0,y:0,align:"center",verticalAlign:"middle"},attr:{},style:{fontWeight:"bold",fontSize:"12px",color:"#60606a"}};
function f(){return !!this.points.length
}if(g.pie){g.pie.prototype.hasData=f
}if(g.gauge){g.gauge.prototype.hasData=f
}if(g.waterfall){g.waterfall.prototype.hasData=f
}d.Series.prototype.hasData=function(){return this.dataMax!==undefined&&this.dataMin!==undefined
};
a.showNoData=function(k){var h=this,j=h.options,l=k||j.lang.noData,i=j.noData;
if(!h.noDataLabel){h.noDataLabel=h.renderer.label(l,0,0,null,null,null,null,null,"no-data").attr(i.attr).css(i.style).add();
h.noDataLabel.align(c(h.noDataLabel.getBBox(),i.position),false,"plotBox")
}};
a.hideNoData=function(){var h=this;
if(h.noDataLabel){h.noDataLabel=h.noDataLabel.destroy()
}};
a.hasData=function(){var h=this,j=h.series,i=j.length;
while(i--){if(j[i].hasData()&&!j[i].options.isInternal){return true
}}return false
};
function e(){var h=this;
if(h.hasData()){h.hideNoData()
}else{h.showNoData()
}}a.callbacks.push(function(h){d.addEvent(h,"load",e);
d.addEvent(h,"redraw",e)
})
}(Highcharts));