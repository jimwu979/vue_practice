"use strict";new Vue({el:"#app",data:{filter_market:[{text:"不限",market:["bond","mature","rising","industry"],isNow:!0},{text:"債券型",market:["bond"],isNow:!1},{text:"成熟股",market:["mature"],isNow:!1},{text:"新興股",market:["rising"],isNow:!1},{text:"產業",market:["industry"],isNow:!1}],filter_weather:[{text:"不限",weather:["optimism","neutral","pessimistic"],isNow:!0},{text:"樂觀",weather:["optimism"],isNow:!1},{text:"中立",weather:["neutral"],isNow:!1},{text:"悲觀",weather:["pessimistic"],isNow:!1}],sort:{menuIsOpen:!1,list:[{text:"3個月績效排序",sort_month:"performance_month_3",isNow:!0,isHover:!1},{text:"6個月績效排序",sort_month:"performance_month_6",isNow:!1,isHover:!1},{text:"1年績效排序",sort_month:"performance_month_12",isNow:!1,isHover:!1}]},slideshow:{width:0,left:0,nowPage:0,move_lock:0,leftButton:!1,rightButton:!0,sort:"",targets:[{market:"bond",weather:"optimism",performance_month_3:"32.4",performance_month_6:"999",performance_month_12:"71",title:"新興主要貨幣債貨幣債AA",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!0},{market:"bond",weather:"neutral",performance_month_3:"-12",performance_month_6:"51",performance_month_12:"-39.2",title:"新興投資級債",line_graph:"line_graph.png",fund_length:"28",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"mature",weather:"optimism",performance_month_3:"58.2",performance_month_6:"-92.2",performance_month_12:"-41.5",title:"美國高收益債",line_graph:"line_graph.png",fund_length:"3",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"rising",weather:"neutral",performance_month_3:"-12",performance_month_6:"86",performance_month_12:"53",title:"歐洲高收益債",line_graph:"line_graph.png",fund_length:"99",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"industry",weather:"neutral",performance_month_3:"23",performance_month_6:"-54.96",performance_month_12:"74.2",title:"美國投資級債",line_graph:"line_graph.png",fund_length:"102",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"mature",weather:"optimism",performance_month_3:"-23.1",performance_month_6:"51.3",performance_month_12:"57",title:"歐洲投資級債",line_graph:"line_graph.png",fund_length:"283",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"industry",weather:"neutral",performance_month_3:"23",performance_month_6:"-54.96",performance_month_12:"-74.2",title:"美國投資級債",line_graph:"line_graph.png",fund_length:"83",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"mature",weather:"optimism",performance_month_3:"23.1",performance_month_6:"51.3",performance_month_12:"-57",title:"歐洲投資級債",line_graph:"line_graph.png",fund_length:"58",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"industry",weather:"neutral",performance_month_3:"-23",performance_month_6:"54.96",performance_month_12:"74.2",title:"美國投資級債",line_graph:"line_graph.png",fund_length:"5",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"mature",weather:"optimism",performance_month_3:"-23.1",performance_month_6:"-51.3",performance_month_12:"57",title:"歐洲投資級債",line_graph:"line_graph.png",fund_length:"1",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"mature",weather:"optimism",performance_month_3:"92.2",performance_month_6:"-58.1",performance_month_12:"-41.2",title:"美國高收益債",line_graph:"line_graph.png",fund_length:"14",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"rising",weather:"neutral",performance_month_3:"12",performance_month_6:"86",performance_month_12:"-53",title:"歐洲高收益債",line_graph:"line_graph.png",fund_length:"574",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"industry",weather:"neutral",performance_month_3:"23",performance_month_6:"-54.96",performance_month_12:"74.2",title:"美國投資級債",line_graph:"line_graph.png",fund_length:"533",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"mature",weather:"optimism",performance_month_3:"23.1",performance_month_6:"51.3",performance_month_12:"-57",title:"歐洲投資級債",line_graph:"line_graph.png",fund_length:"13",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"mature",weather:"optimism",performance_month_3:"-92.2",performance_month_6:"-58.1",performance_month_12:"41.2",title:"美國高收益債",line_graph:"line_graph.png",fund_length:"89",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"rising",weather:"neutral",performance_month_3:"-12",performance_month_6:"86",performance_month_12:"53",title:"歐洲高收益債",line_graph:"line_graph.png",fund_length:"83",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"industry",weather:"neutral",performance_month_3:"-23",performance_month_6:"-54.96",performance_month_12:"74.2",title:"美國投資級債",line_graph:"line_graph.png",fund_length:"123",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"mature",weather:"optimism",performance_month_3:"23.1",performance_month_6:"-51.3",performance_month_12:"-57",title:"歐洲投資級債",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"bond",weather:"neutral",performance_month_3:"-91.75",performance_month_6:"17",performance_month_12:"-89.2",title:"全球高收益債",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"industry",weather:"neutral",performance_month_3:"-23",performance_month_6:"54.96",performance_month_12:"-74.2",title:"美國投資級債",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"mature",weather:"optimism",performance_month_3:"-23.1",performance_month_6:"51.3",performance_month_12:"-57",title:"歐洲投資級債",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"bond",weather:"neutral",performance_month_3:"-91.75",performance_month_6:"-17",performance_month_12:"89.2",title:"全球高收益債",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"industry",weather:"pessimistic",performance_month_3:"-19.1",performance_month_6:"-30.2",performance_month_12:"8",title:"人民幣債",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"bond",weather:"neutral",performance_month_3:"-91.75",performance_month_6:"17",performance_month_12:"-89.2",title:"全球高收益債",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"industry",weather:"neutral",performance_month_3:"23",performance_month_6:"-54.96",performance_month_12:"-74.2",title:"美國投資級債",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"mature",weather:"optimism",performance_month_3:"23.1",performance_month_6:"-51.3",performance_month_12:"-57",title:"歐洲投資級債",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"bond",weather:"neutral",performance_month_3:"-91.75",performance_month_6:"17",performance_month_12:"-89.2",title:"全球高收益債",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"industry",weather:"pessimistic",performance_month_3:"-19.1",performance_month_6:"-30.2",performance_month_12:"8",title:"人民幣債",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"bond",weather:"neutral",performance_month_3:"-91.75",performance_month_6:"-17",performance_month_12:"89.2",title:"全球高收益債",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"industry",weather:"neutral",performance_month_3:"23",performance_month_6:"-54.96",performance_month_12:"-74.2",title:"美國投資級債",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"mature",weather:"optimism",performance_month_3:"-23.1",performance_month_6:"-51.3",performance_month_12:"57",title:"歐洲投資級債",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"bond",weather:"neutral",performance_month_3:"-91.75",performance_month_6:"17",performance_month_12:"-89.2",title:"全球高收益債",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"industry",weather:"pessimistic",performance_month_3:"-19.1",performance_month_6:"-30.2",performance_month_12:"8",title:"人民幣債",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"bond",weather:"neutral",performance_month_3:"-12",performance_month_6:"51",performance_month_12:"-39.2",title:"新興投資級債",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"mature",weather:"optimism",performance_month_3:"-58.2",performance_month_6:"92.2",performance_month_12:"-41.5",title:"美國高收益債",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"rising",weather:"neutral",performance_month_3:"12",performance_month_6:"-86",performance_month_12:"-53",title:"歐洲高收益債",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"industry",weather:"neutral",performance_month_3:"23",performance_month_6:"-54.96",performance_month_12:"-74.2",title:"美國投資級債",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"mature",weather:"optimism",performance_month_3:"-23.1",performance_month_6:"-51.3",performance_month_12:"57",title:"歐洲投資級債",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"industry",weather:"neutral",performance_month_3:"-23",performance_month_6:"-54.96",performance_month_12:"74.2",title:"美國投資級債",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"mature",weather:"optimism",performance_month_3:"-23.1",performance_month_6:"-51.3",performance_month_12:"-57",title:"歐洲投資級債",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"industry",weather:"neutral",performance_month_3:"23",performance_month_6:"54.96",performance_month_12:"74.2",title:"美國投資級債",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"mature",weather:"optimism",performance_month_3:"23.1",performance_month_6:"51.3",performance_month_12:"57",title:"歐洲投資級債",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"mature",weather:"optimism",performance_month_3:"-92.2",performance_month_6:"58.1",performance_month_12:"-41.2",title:"美國高收益債",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"rising",weather:"neutral",performance_month_3:"-12",performance_month_6:"-86",performance_month_12:"53",title:"歐洲高收益債",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"industry",weather:"neutral",performance_month_3:"-23",performance_month_6:"54.96",performance_month_12:"74.2",title:"美國投資級債",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"mature",weather:"optimism",performance_month_3:"23.1",performance_month_6:"51.3",performance_month_12:"57",title:"歐洲投資級債",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"mature",weather:"optimism",performance_month_3:"-92.2",performance_month_6:"-58.1",performance_month_12:"-41.2",title:"美國高收益債",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"rising",weather:"neutral",performance_month_3:"-12",performance_month_6:"-86",performance_month_12:"-53",title:"歐洲高收益債",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"industry",weather:"neutral",performance_month_3:"-23",performance_month_6:"-54.96",performance_month_12:"-74.2",title:"美國投資級債",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"mature",weather:"optimism",performance_month_3:"-23.1",performance_month_6:"-51.3",performance_month_12:"57",title:"歐洲投資級債",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"bond",weather:"neutral",performance_month_3:"-91.75",performance_month_6:"17",performance_month_12:"-89.2",title:"全球高收益債",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"industry",weather:"neutral",performance_month_3:"23",performance_month_6:"-54.96",performance_month_12:"-74.2",title:"美國投資級債",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"mature",weather:"optimism",performance_month_3:"-23.1",performance_month_6:"-51.3",performance_month_12:"-57",title:"歐洲投資級債",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"bond",weather:"neutral",performance_month_3:"-91.75",performance_month_6:"-17",performance_month_12:"-89.2",title:"全球高收益債",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"industry",weather:"pessimistic",performance_month_3:"19.1",performance_month_6:"30.2",performance_month_12:"-8",title:"人民幣債",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"bond",weather:"neutral",performance_month_3:"-91.75",performance_month_6:"17",performance_month_12:"-89.2",title:"全球高收益債",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"industry",weather:"neutral",performance_month_3:"-23",performance_month_6:"54.96",performance_month_12:"-74.2",title:"美國投資級債",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"mature",weather:"optimism",performance_month_3:"-23.1",performance_month_6:"-51.3",performance_month_12:"57",title:"歐洲投資級債",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"bond",weather:"neutral",performance_month_3:"-91.75",performance_month_6:"-17",performance_month_12:"89.2",title:"全球高收益債",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"industry",weather:"pessimistic",performance_month_3:"-19.1",performance_month_6:"-30.2",performance_month_12:"8",title:"人民幣債",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"bond",weather:"neutral",performance_month_3:"-91.75",performance_month_6:"-17",performance_month_12:"89.2",title:"全球高收益債",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"industry",weather:"neutral",performance_month_3:"-23",performance_month_6:"-54.96",performance_month_12:"74.2",title:"美國投資級債",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"mature",weather:"optimism",performance_month_3:"-23.1",performance_month_6:"51.3",performance_month_12:"-57",title:"歐洲投資級債",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"bond",weather:"neutral",performance_month_3:"-91.75",performance_month_6:"17",performance_month_12:"-89.2",title:"全球高收益債",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!1},{market:"industry",weather:"pessimistic",performance_month_3:"-19.1",performance_month_6:"-30.2",performance_month_12:"-8",title:"人民幣債",line_graph:"line_graph.png",fund_length:"53",market_report:"https://google.com",ajax_url:"",isSelect:!1}],showTargets:[]},selectResult:{name:"",length:0}},methods:{market_switchClass:function(e){var t=this.filter_market,r=t.length;if("0"==e){for(var n=1;n<r;n++)t[n].isNow=!1;t[e].isNow=!0}else t[0].isNow=!1,t[e].isNow=!t[e].isNow;this.reloadTarget()},weather_switchClass:function(e){var t=this.filter_weather,r=t.length;if("0"==e){for(var n=1;n<r;n++)t[n].isNow=!1;t[e].isNow=!0}else t[0].isNow=!1,t[e].isNow=!t[e].isNow;this.reloadTarget()},switch_sortMenu:function(){this.sort.menuIsOpen=!this.sort.menuIsOpen},close_sortMenu:function(){this.sort.menuIsOpen=!1},li_isHover:function(e){this.sort.list[e].isHover=!0},li_isNotHover:function(e){this.sort.list[e].isHover=!1},li_select:function(e){for(var t=this.sort.list.length,r=0;r<t;r++)this.sort.list[r].isNow=!1;this.sort.list[e].isNow=!0,this.reloadTarget()},reloadTarget:function(){for(var e=[],t=this.filter_market.length,r=[],n=0;n<t;n++)if(1==this.filter_market[n].isNow)for(var o=this.filter_market[n].market.length,a=0;a<o;a++)r.push(this.filter_market[n].market[a]);for(var _=this.slideshow.targets.length,m=0;m<_;m++)for(var h=0;h<r.length;h++)0<=this.slideshow.targets[m].market.indexOf(r[h])&&e.push(this.slideshow.targets[m]);for(var l=[],p=this.filter_weather.length,i=[],g=0;g<p;g++)if(1==this.filter_weather[g].isNow)for(var s=this.filter_weather[g].weather.length,c=0;c<s;c++)i.push(this.filter_weather[g].weather[c]);for(var f=e.length,u=0;u<f;u++)for(var k=0;k<i.length;k++)0<=e[u].weather.indexOf(i[k])&&l.push(e[u]);for(var d,w=this.sort.list,x=w.length,S=0;S<x;S++)1==w[S].isNow&&(d=w[S].sort_month);l.sort(function(e,t){return t[d]-e[d]});l.length;this.slideshow.showTargets=[];for(var j=0,N=l;j<N.length;j++){var v=N[j];v.performance=v[d],this.slideshow.showTargets.push(v)}},selectTarget:function(e){for(var t=this.slideshow.targets,r=t.length,n=0;n<r;n++)t[n].isSelect=!1;t[e].isSelect=!0,this.selectResult.name=t[e].title,this.selectResult.length=t[e].fund_length}},created:function(){this.reloadTarget(),this.selectResult.name=this.slideshow.targets[0].title,this.selectResult.length=this.slideshow.targets[0].fund_length},computed:{aa:function(){}}});