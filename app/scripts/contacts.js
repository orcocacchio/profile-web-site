$(document).ready(function() {
    $("#contactForm").submit(function(event) {
        var data = JSON.stringify({
            name: $("#name").val(),
            email: $("#email").val(),
            subject: $("#subject").val(),
            message: $("#message").val()
        });
        console.log(data);

        $.ajax({
            type: "POST",
            url: "/contacts/sendEmail",
            contentType: "application/json",
            data: data,
            dataType: "json"
        })
        .done(function() {
            alert("second success");
        })
            .fail(function() {
                alert("error");
            })
            .always(function() {
                alert("finished");
            });
    });
});