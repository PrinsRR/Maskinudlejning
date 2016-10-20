products = [{ id: "1", kat: "sandgrus", pris: "100", images: ["bla1.jpg,bla2.jpg"], desc: "lorem bla lorem" }]//products
$(document).ready(function () {
    currentfilter = "*"
    SquareThem($(".grid-item"), 0.8);
    $(".closerfunction").click(function (e) {
        if (e.target !== e.currentTarget) return;

        TweenMax.to($(".Product"), 0.5, { y: -100, autoAlpha: 0 });
        TweenMax.to($("#ProductBG"), 0.5, { autoAlpha: 0 });
    })
    $grid = $('.grid').imagesLoaded(function () {
        // init Isotope after all images have loaded
        $('.grid').isotope({
            percentPosition: true,
            itemSelector: '.grid-item:not(.grid-sizer)',
            filter: "*",
            packery: {
                columnWidth: '.grid-sizer'
            }


        });
        $grid.isotope('layout');

    });
    $(".grid-item").click(function () {
        OpenProduct($(this).data("id"));
    })

});
function OpenProduct(id) {
    var product = SearchProducts(id);
    if (product != null) {
        $('#ProductBG').css("display", "block");
        TweenMax.fromTo($("#ProductBG"), 0.8, { autoAlpha: 0 }, { autoAlpha: 1 });

        TweenMax.fromTo($(".Product"), 0.5, { y: -100, autoAlpha: 0 }, { y: -200, autoAlpha: 1 });
    }
}
function SearchProducts(id) {
    var returnme = null;
    $(products).each(function (i, e) {
        if (e.id == id) {
            returnme = e;
        }
    });
    return returnme;

}
function FilterProducts(filter) {
    $('.grid').isotope({ filter: (filter == currentfilter ? "*" : "." + filter) });
    currentfilter = filter;
}
$(document).ready(function () {

    SquareThem($("#Fremhaevedeprodukter > .row > a"), 1);
    SquareThem($(".CategorySorter"), 0.8);
    var controller = new ScrollMagic.Controller();

    //tweens
    var tweentop = new TimelineMax().from($("nav"), 0.3, { height: 70 }).from($("body"), 0.3, { paddingTop: 70 }, 0);
    var tl = new TimelineMax().from($("#Frontsec2 h2"), 0.5, { opacity: 0, y: 40 }, 0).from($("#Frontsec2 .row:first-child h4"), 0.7, { opacity: 0 }).staggerFrom($("#Frontsec2 .row:not(:first-child) div"), 1, { opacity: 0 }, 0.3, "-=0.2");
    var tween3 = TweenMax.from($(".SlidingBox"), 1.5, { ease: Power4.easeOut, opacity: 0, y: 200 });
    var tl4 = new TimelineMax().to($("#Frontsec4 h2"), 0.5, { scale: 1.3, color: "#2980b9", ease: Power2.easeOut }).to($("#Frontsec4 h2"), 0.7, { scale: 1, color: "#555", ease: Power2.easeInOut });
    var tweenAllProducts = TweenMax.from($("#AllProducts div"), 1, { ease: Power4.easeOut, opacity: 0, left: "20%" });
    var tlLast = new TimelineMax().from($("#FrontLastSec h2"), 1, { width: "10%", opacity: 0, ease: Power2.easeOut });
    var headerTimeLine = new TimelineMax()
        .from($(".SlideMeIn"), 0.2, { x: "-100%", autoAlpha: 0, ease: Power2.easeOut }, 0.5)
        .staggerFrom($(".PopIn"), 0.4, { scale: 1.3, y: 200, autoAlpha: 0, ease: Power2.easeInOut }, 0.2);
    //scenes
    new ScrollMagic.Scene({
        offset: 20,
        reverse: true
    }).setTween(tweentop) // trigger a TweenMax.to tween
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#Frontsec3",
        triggerHook: 0.3,
        reverse: false
    })
        .setTween(tween3) // trigger a TweenMax.to tween
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#Frontsec2",
        triggerHook: 0.3,
        reverse: false
    }).setTween(tl) // trigger a TweenMax.to tween
         .addTo(controller);

    var bla = new ScrollMagic.Scene({ triggerElement: "#Frontsec4", triggerHook: 0.8, reverse: false }).setTween(tl4).addTo(controller);
    new ScrollMagic.Scene({ triggerElement: "#AllProducts", triggerHook: 0.7, reverse: false }).setTween(tweenAllProducts).addTo(controller);

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        navigation: false,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: false,
                loop: true
            }
        }
    })

    $(".basketclose").click(function (e) {
        if (e.target !== e.currentTarget) return;

        TweenMax.to($(".Basket"), 0.5, { y: -100, autoAlpha: 0 });
        TweenMax.to($("#BasketBG"), 0.5, { autoAlpha: 0 });
    })
});
function SquareThem(target, ratio) {
    target.css("height", (target.width() * ratio) + "px");
}
menuopen = false;
function RevealMenu() {
    if (!menuopen) {
        menuopen = true;
        TweenMax.to($(".OffsiteMenu"), 0.5, { ease: Power2.easeOut, left: 0 });

    }
    else {
        menuopen = false;
        TweenMax.to($(".OffsiteMenu"), 0.5, { ease: Power2.easeOut, left: "-80%" });

    }
}
function ScrollTo(target) {
    TweenMax.to(window, 2, { scrollTo: target });
}
function RevealBasket() {
    $('#BasketBG').css("display", "block");

    TweenMax.fromTo($("#BasketBG"), 0.8, { autoAlpha: 0 }, { autoAlpha: 1 });

    TweenMax.fromTo($(".Basket"), 0.5, { y: -100, autoAlpha: 0 }, { y: -200, autoAlpha: 1 });
}