var db = require("../models");

module.exports = function(app) {
    app.get("/api/burgers", function(request, response) {
        db.burger.findAll().then(function(data) {
            response.json(data);
        })
    })

    app.post("/api/burgers", function(request, response) {
        db.burger.create({
            burger_name: request.body.burger_name,
            devoured: request.body.devoured
        }).then(function() {
            response.end();
        })
    })

    app.put("/api/burgers/:id", function(request, response) {
        var burgerId = request.params.id;
        console.log(burgerId);
        db.burger.update({
            devoured: true
        }, {
            where: { 
                id: burgerId 
            }
        }).then(function() {
            response.end();
        })
    })

    app.get("*", function(request, response) {
        db.burger.findAll().then(function(data) {
            response.render("home", { burgers: data });
        })
    })
}