//hides the main display whilst ensuring the page is still useable without javascript.
$("main, header").css("display","none");

//reveals the content as soon as the page is done loading.
$(function() {
    $("main, header").fadeIn(1000);
});

//once a link with the class "change page" is clicked, it fades out the main and header before changing the page.
$(".change-page").on("click", function(e) {
    e.preventDefault();
    const linkLocation = this.href;
    $("main, header").fadeOut(1000, function() {
        window.location = linkLocation;
    });
});