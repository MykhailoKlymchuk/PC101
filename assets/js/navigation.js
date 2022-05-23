$(function () {
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });


    var anchor = $("#anchor"),
        H = $(window).innerHeight(),
        scrollOffset = $(window).scrollTop(),
        i = $('#arrow-up');

    checkScroll(scrollOffset);

    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if (scrollOffset >= H) {
            anchor.addClass("raise_anchor");
            i.addClass("fa fa-arrow-up");
        } else {
            anchor.removeClass("raise_anchor");
            i.removeClass("fa fa-arrow-up");
        }
    }
});

function openNav() {
    document.getElementById("mySidepanel").style.width = "200px";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}