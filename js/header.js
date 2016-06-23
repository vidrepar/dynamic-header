let wLoad = $("body").load();

let checkScrollPosition = function () {

    let scrollTop = $(window).scrollTop();

    if(scrollTop >= 30  && wLoad){

        wLoad = false;

        $("body").addClass("sticky-header");
        $(".sticky-header header").css({
            'transition': 'none'
        });

    } else if (scrollTop >= 30 && !wLoad) {

        $("body").addClass("sticky-header");
        $(".sticky-header header").css({
            'transition': 'height 0.5s ease'
        });

    } else if (scrollTop <= 30 && wLoad){

        wLoad = false;

    } else{
        $("body").removeClass("sticky-header");
    }

};

$(window).scroll(function(){

    checkScrollPosition();

});


