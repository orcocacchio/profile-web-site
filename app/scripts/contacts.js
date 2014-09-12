$(document).ready(function() {

    $("#contactForm").submit(function(event) {

        event.preventDefault();

        var data = JSON.stringify({
            name: $("#name").val(),
            email: $("#email").val(),
            subject: $("#subject").val(),
            message: $("#message").val()
        });

        $.ajax({
            type: "POST",
            url: "/contacts/sendEmail",
            contentType: "application/json",
            data: data,
            dataType: "json"
        })
            .done(function(data) {
                if (data.hasError) {
                    alert("An error occurred while sending mail. Please check the data entered in the form or retry later.");
                } else {
                    alert("The mail was sent");
                    $("#contactForm").trigger("reset");
                }
            });
    });
});