$(".devouredBtn").on("click", function() {
    let newBurger = {
        devoured: 1
    }
    let id = $(this).attr("data-id")
    $.ajax({
        url: "/api/burgers/" + id,
        method: "PUT",
        data: newBurger
    }).then(function() {
        location.reload()
    })
})