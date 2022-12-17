//require express.js?
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set('view-engine', 'ejs');
var items = [];
let worklist = [];

app.get("/", function (req, res) {

    var today = new Date();
    var day = today.toLocaleDateString("en-US");

    res.render("list.ejs", { listTitle: day, newItems: items });

})

app.post("/", function (req, res) {
    console.log(req.body);
let item = req.body.itemList;
    if (req.body.list === "work") {
        worklist.push(item);
        res.redirect("/work");
    }
    else {
        items.push(item);
        res.redirect("/");
    }
})


app.get("/work", function (req, res) {
    res.render("list.ejs", { listTitle: "work", newItems: worklist });

})


app.listen(3000, function () {
    console.log("Server is running");
})  