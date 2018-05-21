$(document).on("click", "#order-button", function(event) {
    event.preventDefault();
    var newBurgerName = $("#burger-name").val().trim();

    if (newBurgerName) {
        var newBurger = {
            burger_name: newBurgerName,
            devoured: false
        }

        $.post("/api/burgers", newBurger, function() {
            location.reload();
        })
    } else {
        $("#error").text("Please enter a burger name.");
    }
})

$(document).on("click", ".devour-button", function() {
    var burgerId = $(this).data("id");

    $.ajax({
        method: "PUT",
        url: "/api/burgers/" + burgerId
    }).then(function() {
        location.reload();
    })
})