var DATA = (function(){

    var _getData = function(){
        $.getJSON('data/data.json', function(data){
            var menuArray = data.menu,
                landingSnippet = data.landingPage,
                storyHead = data.ourStoryHeader,
                ourStory = data.ourStory,
                storyImg = data.storyImage;

            /* ----------------------------------------------
                            BEGIN NAV LOAD
             */
            $.each(menuArray, function(idx, menuInfo){
                if(menuInfo.linkId !== "footer"){
                    var anchor = '<a href="#" class="' + menuInfo.linkClass + '" id="' + menuInfo.linkId.toLowerCase() + '">' + menuInfo.linkName.toUpperCase() + '</a>';
                    $("nav").append(anchor);
                }

                if(menuInfo.linkId !== "home" && menuInfo.linkId !== "logo") {
                    var sec = '<section id="' + menuInfo.linkId + 'Section"></section>';
                    $("#wrapper").append(sec);
                }
            });


            /* ----------------------------------------------
                            BEGIN LANDING PAGE LOAD
             */
            $.each(landingSnippet, function(idx, land){
                var landingSnip = '<p id="' + land.snippetId + '">' + land.snippetText + '</p>';
                $("#snip").append(landingSnip);
            });


            /* ----------------------------------------------
                            BEGIN STORY PAGE LOAD
             */
            $("#storySection").append('<div id="col1"></div><div id="col2"></div>');
            $.each(storyHead, function(idx, head){
                $("#col1").append('<div id="' + head.pId + '">' + head.header + '</div>');
            });
            $.each(storyImg, function(idx, img){
                $("#col1").append('<div id="' + img.pId + '"><img src="' + img.url + '"></div>');
            });
            $.each(ourStory, function(idx, os){
                var storyBody = '<div class="paragraph" id="'+ os.pId +'"><i class="' + os.fa + '" aria-hidden="true"></i><p>' + os.paragraph +'</p></div>';
                $("#col2").append(storyBody);
            });


            /* ----------------------------------------------
                            BEGIN FOOTER LOAD
             */

            $("#footerSection").append('<div id="address"><i class="fa fa-map-marker fa-2x" aria-hidden="true"></i><p>1711 West 18th Street</p><p>Anderson, IN 46016</p></div><div class="copy"><p>&copy; Copyright 2017 - Heirloom Shuffleboards</p></div>');

            _setBindings();
        });

        /* ----------------------------------------------
                             BEGIN TABLES LOAD
         */
        $.getJSON('data/tables.json', function(data){
            var tableArray = data.tables;
           /*var modelBtnArray = data.tableModels;

            $("#tablesSection").append('<div id="modelBtnHolder"></div>');
            $.each(modelBtnArray, function(idx, model){
                var modelBtn = '<div class="modelBtn ' +model.modelName.toLowerCase()+'">'+ model.modelName +'</div>';
                $("#tablesSection").append(modelBtn);
            });*/
            $("#tablesSection").append('<div class="sectionHead">Tables</div><div class="arrowHolder"><div id="leftArrow"><i class="fa fa-chevron-left 2x"></i></div><div id="rightArrow"><i class="fa fa-chevron-right 2x"></i></div></div>' +
                '<div class="tableInfoHolder"></div>');
            $.each(tableArray, function(idx, table){
                var tableInfo = '<div class="tableInfo"><div class="tableImg"><img src="' + table.tableImage + '"></div><div class="tableModel '+table.tableModel+'">' + table.tableModel + '</div></div>';
                    $(".tableInfoHolder").append(tableInfo);
                });

            _tableFunctions();
        });
    };


    /* ----------------------------------------------
                            BEGIN OTHER FUNCTIONS
     */

    var _setBindings = function(){
       $("nav a").click(function(){
            var linkId = this.id + "Section";
            if(linkId === "logoSection"){
                linkId = "homeSection";
            }
            var off = 70;

            if($(window).width() < 780 && $(window).width() > 330){
                off = 50;
            } else if ($(window).width() < 330){
                off = 10;
            }

            $("html, body").animate({
                scrollTop: $("#" + linkId).offset().top - off
            }, 1000);
        });
    };

    var _tableFunctions = function(){
        var wide = $(window).width();
        var hei = $(window).height();
        var test = 0,
            num = $(".tableInfoHolder > div").length,
            index = 0,
            endIndex = num - 1;

        if(wide > hei){
            $(".tableInfoHolder").css("width", (wide * num)/2);
            test = 50;
        } else {
            $(".tableInfoHolder").css("width", wide * num);
            test = 100;
        }
        $(window).on("orientationchange",function(){
            if(window.orientation === 0) // Portrait
            {
                $(".tableInfoHolder").css("width", wide * num);
                test = 100;
            }
            else // Landscape
            {
                $(".tableInfoHolder").css({"width": "(wide * num)/2)","top": "-70px"});
                test = 50;
            }
        });

        $("#leftArrow").click(function(){
            if(index > 0){
                index--;
                $(".tableInfoHolder").animate({
                    left: "+="+test+"vw"
                },700);
            }
        });
        $("#rightArrow").click(function(){
            if(index < endIndex){
                 index++;
                $(".tableInfoHolder").animate({
                    left: "-="+test+"vw"
                },700);
            }
        });
    };

    return {
        getData: _getData
    };
})();
