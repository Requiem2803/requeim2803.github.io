
//stopping the submit button from refreshing the page
$("#message-form").on("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    //checking for text in only the boxes with the class "required"
    $(".required").each(function() {
        const value = $(this).val().trim();
        if (value === "") {
            console.log("missing field", this.id);
            isValid = false;
            //applying a red border to invalid box entries
            $(this).css("border", "1px solid red");
        } else {
            $(this).css("border", "");
        }
    });

    //checking email validation
    const email = $("#email").val().trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //preventing submission if email is invalid
    if (!emailPattern.test(email)) {
        console.log("Invalid email format");
        $("#email").css("border", "1px solid red");
        isValid = false;
    }

    //printing the form results in the console
    if (isValid) {
        const formData = {
        fname: $("#fname").val().trim(),
        lname: $("#lname").val().trim(),
        email: $("#email").val().trim(),
        subject: $("#subject").val().trim(),
        message: $("#message").val().trim(),
        };

        console.log("Form submitted with data:", formData);

        //temp changing the submit button to reflect if the user was successful in submission
        $("#submit-button").css({
            backgroundColor: "lightgreen",
            color: "white"
        }).text("success!");
    } else { 
        $("#submit-button").css({
            backgroundColor: "red",
            color: "white"
        }).text("invalid");
    }

    setTimeout(() => {
        $("#submit-button").css({
            backgroundColor: "",
            color: ""
        }).text("submit");
    }, 3000)
});