(function(a){function k(){return !!this.points.length
}function l(){this.hasData()?this.hideNoData():this.showNoData()
}var b=a.seriesTypes,j=a.Chart.prototype,m=a.getOptions(),n=a.extend;
n(m.lang,{noData:"No data to display"});
m.noData={position:{x:0,y:0,align:"center",verticalAlign:"middle"},attr:{},style:{fontWeight:"bold",fontSize:"12px",color:"#60606a"}};
if(b.pie){b.pie.prototype.hasData=k
}if(b.gauge){b.gauge.prototype.hasData=k
}if(b.waterfall){b.waterfall.prototype.hasData=k
}a.Series.prototype.hasData=function(){return this.dataMax!==void 0&&this.dataMin!==void 0
};
j.showNoData=function(c){var d=this.options,c=c||d.lang.noData,d=d.noData;
if(!this.noDataLabel){this.noDataLabel=this.renderer.label(c,0,0,null,null,null,null,null,"no-data").attr(d.attr).css(d.style).add(),this.noDataLabel.align(n(this.noDataLabel.getBBox(),d.position),!1,"plotBox")
}};
j.hideNoData=function(){if(this.noDataLabel){this.noDataLabel=this.noDataLabel.destroy()
}};
j.hasData=function(){for(var c=this.series,d=c.length;
d--;
){if(c[d].hasData()&&!c[d].options.isInternal){return !0
}}return !1
};
j.callbacks.push(function(c){a.addEvent(c,"load",l);
a.addEvent(c,"redraw",l)
})
})(Highcharts);