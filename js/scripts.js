// scripts.js

$(function() {
    var carouselList = $("#carousel ul");

    // strzałka w prawo
    function changeSlideRight() {
        carouselList.animate({ marginLeft: -400 }, 500, moveFirstSlide);
    }

    function moveFirstSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({ marginLeft: 0 });
    }

    //strzałka w lewo

    function changeSlideLeft() {
        carouselList.animate({ marginLeft: 0 }, 500);

    }

    function moveLastSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        firstItem.before(lastItem);
        carouselList.css({ marginLeft: '-400px' });
    }

    var timer = setInterval(changeSlideRight, 3000);

    $(".right").on("click", function(event) {
        clearInterval(timer);
        changeSlideRight();
    });

    $(".left").on("click", function(event) {
        clearInterval(timer);
        moveLastSlide();
        changeSlideLeft();
    });

});