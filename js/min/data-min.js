var DATA=function(){var i=function(){$("nav a").click(function(){var i=this.id+"Section";"logoSection"===i&&(i="homeSection");var a=70;$(window).width()<780&&$(window).width()>330?a=50:$(window).width()<330&&(a=10),$("html, body").animate({scrollTop:$("#"+i).offset().top-a},1e3)})},a=function(){var i=$(window).width(),a=$(window).height(),e=0,d=$(".tableInfoHolder > div").length,o=0,n=d-1;i>a?($(".tableInfoHolder").css("width",i*d/2),e=50):($(".tableInfoHolder").css("width",i*d),e=100),$(window).on("orientationchange",function(){0===window.orientation?($(".tableInfoHolder").css("width",i*d),e=100):($(".tableInfoHolder").css({width:"(wide * num)/2)",top:"-70px"}),e=50)}),$("#leftArrow").click(function(){o>0&&(o--,$(".tableInfoHolder").animate({left:"+="+e+"vw"},700))}),$("#rightArrow").click(function(){o<n&&(o++,$(".tableInfoHolder").animate({left:"-="+e+"vw"},700))})};return{getData:function(){$.getJSON("data/data.json",function(a){var e=a.menu,d=a.landingPage,o=a.ourStoryHeader,n=a.ourStory,t=a.storyImage;$.each(e,function(i,a){if("footer"!==a.linkId){var e='<a href="#" class="'+a.linkClass+'" id="'+a.linkId.toLowerCase()+'">'+a.linkName.toUpperCase()+"</a>";$("nav").append(e)}if("home"!==a.linkId&&"logo"!==a.linkId){var d='<section id="'+a.linkId+'Section"></section>';$("#wrapper").append(d)}}),$.each(d,function(i,a){var e='<p id="'+a.snippetId+'">'+a.snippetText+"</p>";$("#snip").append(e)}),$("#storySection").append('<div id="col1"></div><div id="col2"></div>'),$.each(o,function(i,a){$("#col1").append('<div id="'+a.pId+'">'+a.header+"</div>")}),$.each(t,function(i,a){$("#col1").append('<div id="'+a.pId+'"><img src="'+a.url+'"></div>')}),$.each(n,function(i,a){var e='<div class="paragraph" id="'+a.pId+'"><i class="'+a.fa+'" aria-hidden="true"></i><p>'+a.paragraph+"</p></div>";$("#col2").append(e)}),$("#footerSection").append('<div id="address"><i class="fa fa-map-marker fa-2x" aria-hidden="true"></i><p>1711 West 18th Street</p><p>Anderson, IN 46016</p></div><div class="copy"><p>&copy; Copyright 2017 - Heirloom Shuffleboards</p></div>'),i()}),$.getJSON("data/tables.json",function(i){var e=i.tables;$("#tablesSection").append('<div class="sectionHead">Tables</div><div class="arrowHolder"><div id="leftArrow"><i class="fa fa-chevron-left 2x"></i></div><div id="rightArrow"><i class="fa fa-chevron-right 2x"></i></div></div><div class="tableInfoHolder"></div>'),$.each(e,function(i,a){var e='<div class="tableInfo"><div class="tableImg"><img src="'+a.tableImage+'"></div><div class="tableModel '+a.tableModel+'">'+a.tableModel+"</div></div>";$(".tableInfoHolder").append(e)}),a()})}}}();