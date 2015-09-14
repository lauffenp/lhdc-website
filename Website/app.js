var path = require("path");
var express = require("express");
var logger=require('morgan');

var routes = require("./routes");
var app = express();


app.use(logger("dev"));
app.set("port",process.env.PORT || 3000);

app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

app.listen(app.get("port"), function() {
    console.log("Server started on port " + app.get("port"));
});