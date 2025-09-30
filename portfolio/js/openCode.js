
$(".open-code").on("click", function(e) {
    e.preventDefault();
    const linkLocation = this.href;
    $("body").animate(
        { backgroundColor: "#222222" },
        1000
    );
    $("main, nav").fadeOut(1000, function() {
        window.location = linkLocation;
    });
});