//typewriter effect set to after the the initial fade in
$(function() {
    const myName = $("#my-name");
    const text = myName.text();
    myName.text(""); 

    let i = 0;
    function typeWriter() {
    if (i < text.length) {
        myName.append(text.charAt(i));
        i++;
        setTimeout(typeWriter, 50);
    }
}

setTimeout(typeWriter, 1000);
});


//typewriter effect set to after the fade in AND after the h1 fades in.
$(function() {
    const myJob = $("#my-job");
    const text = myJob.text();
    myJob.text(""); 

    let i = 0;
    function typeWriter() {
    if (i < text.length) {
        myJob.append(text.charAt(i));
        i++;
        setTimeout(typeWriter, 50);
    }
}

setTimeout(typeWriter, 2200);
});


//typewriter effect for code project pages
$(function() {
    const myCode = $(".language-javascript");
    const text = myCode.text();
    myCode.text(""); 

    let i = 0;
    function typeWriter() {
    if (i < text.length) {
        myCode.append(text.charAt(i));
        i++;
        setTimeout(typeWriter, 5);
    }
}

typeWriter();
});