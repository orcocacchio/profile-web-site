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
            .done(function() {
                alert("second success");
            });
    });
});