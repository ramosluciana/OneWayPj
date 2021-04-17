//variables

const responsive = {
    0:{
        items: 1
    },
    320:{
        items:1
    },
    560:{
        items:2
    },
    960:{
        items:3
    }

}

//toggle menu function - Increase (drop) the size of the toggle menu when clicked
$(document).ready(function() {

    //variables
    $nav=$('.nav');
    $toggleCollapse=$('.toggle-collapse');

//click event on toggle menu - when click on toggle menu the function execute
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse')

    });


// Call owl-carousel function
$('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive

});

    // click to scroll top
    $('.move-up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })


});
