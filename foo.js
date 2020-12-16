const burger = require("./models/burger");

burger.selectAll(function (data) {
    console.table(data);
})