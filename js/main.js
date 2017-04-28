var pageLoaded = false;
var timesUp = false;

function menuClick() {
    $("#menuBtn").click(function(){
        $(this).css("display", "none");
        $("#closeBtn").css("display", "flex");
            $(".btn:link").animate({
                top: 60
            },500).css("color", "#561d00")
                .click(function(){
                    menuBtnClick();
                });
    });

    $("#closeBtn").click(function(){
        $(this).css("display", "none");
        $("#menuBtn").css("display", "flex");
        menuBtnClick();
    });
}

function menuBtnClick() {
    $(".btn:link").animate({
            top: -180
        },200).css("color", "#cba57b");
    $("#menuBtn").css("display", "flex");
    $("#closeBtn").css("display", "none");
}

function exploreClick() {
    $("#exploreBtn").click(function(){
        var off = 70;

        if($(window).width() < 780){
            off = 50;
        }
        $("html, body").animate({
            scrollTop: $("#tablesSection").offset().top - off
        }, 700);
    });
}

function init() {
    DATA.getData();
}

$(document).ready(function() {
    setTimeout(timeoutOver, 1000);

    init();
    $.get("fragments/contact.html", function (data) {
        $("#contactSection").html(data);
    });

    menuClick();
    exploreClick();
});

$(window).on("load", function() {
    pageLoaded = true;
    turnOffPreloader();
});

function timeoutOver() {
    timesUp = true;
    turnOffPreloader();
}

function turnOffPreloader() {
    if(pageLoaded && timesUp){
        $(".preloader").animate({
            opacity: 0
        },700).addClass("hide");
    }
}