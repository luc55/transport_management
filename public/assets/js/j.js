/*   
Template Name: Color Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 3.3.5
Version: 1.9.0
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin-v1.9/admin/
*/
var getMonthName=function(e){var t=[];t[0]="Janvier";t[1]="Fevrier";t[2]="Mars";t[3]="Avril";t[4]="Mai";t[5]="Juin";t[6]="Juillet";t[7]="Aout";t[8]="Septembre";t[9]="Octobre";t[10]="Novembre";t[11]="Decembre";return t[e]};var getDate=function(e){var t=new Date(e);var n=t.getDate();var r=t.getMonth()+1;var i=t.getFullYear();if(n<10){n="0"+n}if(r<10){r="0"+r}t=i+"-"+r+"-"+n;return t};var handleVisitorsLineChart=function(){var e="#0D888B";var t="#00ACAC";var n="#3273B1";var r="#348FE2";var i="rgba(0,0,0,0.6)";var s="rgba(255,255,255,0.4)";

  var data = JSON.parse('{{ $stats }}');
  
Morris.Line(

    {element:"visitors-line-chart",
    data:data,
    xkey:'date',
    ykeys:['nombre'],
    xLabelFormat:function(e){e=getMonthName(e.getMonth());return e.toString()},
    labels:["Page Views"],
    lineColors:[e,n],pointFillColors:[t,r],lineWidth:"2px",pointStrokeColors:[i,i],resize:true,gridTextFamily:"Open Sans",gridTextColor:s,gridTextWeight:"normal",gridTextSize:"11px",gridLineColor:"rgba(0,0,0,0.5)",hideHover:"auto"})};var handleVisitorsDonutChart=function(){var e="#00acac";var t="#348fe2";Morris.Donut({element:"visitors-donut-chart",data:[{label:"New Visitors",value:900},{label:"Return Visitors",value:1200}],colors:[e,t],labelFamily:"Open Sans",labelColor:"rgba(255,255,255,0.4)",labelTextSize:"12px",backgroundColor:"#242a30"})};var handleVisitorsVectorMap=function(){if($("#visitors-map").length!==0){map=new jvm.WorldMap({map:"world_merc_en",scaleColors:["#e74c3c","#0071a4"],container:$("#visitors-map"),normalizeFunction:"linear",hoverOpacity:.5,hoverColor:false,markerStyle:{initial:{fill:"#4cabc7",stroke:"transparent",r:3}},regions:[{attribute:"fill"}],regionStyle:{initial:{fill:"rgb(97,109,125)","fill-opacity":1,stroke:"none","stroke-width":.4,"stroke-opacity":1},hover:{"fill-opacity":.8},selected:{fill:"yellow"},selectedHover:{}},series:{regions:[{values:{IN:"#00acac",US:"#00acac",KR:"#00acac"}}]},focusOn:{x:.5,y:.5,scale:2},backgroundColor:"#2d353c"})}};var handleScheduleCalendar=function(){var e=["January","February","March","April","May","June","July","August","September","October","November","December"];var t=["S","M","T","W","T","F","S"];var n=new Date,r=n.getMonth()+1,i=n.getFullYear();var s=[["2/"+r+"/"+i,"Popover Title","#","#00acac","Some contents here"],["5/"+r+"/"+i,"Tooltip with link","http://www.seantheme.com/color-admin-v1.3","#2d353c"],["18/"+r+"/"+i,"Popover with HTML Content","#","#2d353c",'Some contents here <div class="text-right"><a href="http://www.google.com">view more >>></a></div>'],["28/"+r+"/"+i,"Color Admin V1.3 Launched","http://www.seantheme.com/color-admin-v1.3","#2d353c"]];var o=$("#schedule-calendar");$(o).calendar({months:e,days:t,events:s,popover_options:{placement:"top",html:true}});$(o).find("td.event").each(function(){var e=$(this).css("background-color");$(this).removeAttr("style");$(this).find("a").css("background-color",e)});$(o).find(".icon-arrow-left, .icon-arrow-right").parent().on("click",function(){$(o).find("td.event").each(function(){var e=$(this).css("background-color");$(this).removeAttr("style");$(this).find("a").css("background-color",e)})})};var handleDashboardGritterNotification=function(){$(window).load(function(){setTimeout(function(){$.gritter.add({title:"Welcome back, Admin!",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus lacus ut lectus rutrum placerat.",image:"assets/img/user-14.jpg",sticky:true,time:"",class_name:"my-sticky-class"})},1e3)})};var DashboardV2=function(){"use strict";return{init:function(){handleVisitorsLineChart();handleVisitorsDonutChart();handleVisitorsVectorMap();handleScheduleCalendar();handleDashboardGritterNotification()}}}()

