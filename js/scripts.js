// scripts.js

$(function() {
    var carouselList = $("#carousel ul");

    $(".right").on("click", function(event) {
        changeSlide();
    });

    $(".left").on("click", function(event) {
        moveLastSlide();

    });

    function changeSlide() {
        carouselList.animate({ 'marginLeft': -400 }, 500, moveFirstSlide);
    }

    function moveFirstSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({ marginLeft: 0 });
    }
    setInterval(changeSlide, 9000);

    function moveLastSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        firstItem.before(lastItem);
        carouselList.css({ marginLeft: -400 });
        carouselList.animate({ 'marginLeft': 0 }, 500);
    }
});