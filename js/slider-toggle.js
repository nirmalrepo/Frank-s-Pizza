$(window).load(function () {
    $("#menu").addClass("js");
    $("#menu_btn").click(function () {
        $("#menu").slideToggle('slow');
    });
    $(window).resize(function () {
        if (window.innerWidth > 768) {
            $("#menu").removeAttr("style");
        }
    })
})