$(document).ready(function(){
    $("#menu").addClass("hide");
    $("#menu_btn").click(function () {
        $("#menu").slideToggle('slow');
    });
    $(window).resize(function () {
        if (window.innerWidth > 768) {
            $("#menu").removeAttr("style");
        }
    })
})