$(function() {
    $( document ).reday(function() {
        setHeigth();
    });
    $(window).resize(function() {
        setHeigth();
    });

    function setHeigth() {
        var height = $(window).height();
        $("#main_aside").height(height - 56); // #main_header 높이 빼줌
    }
});