const express = require("express");
const path = require("path");
const app = express();
var hbs = require("hbs");

const port = process.env.PORT || 8000;

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../templates/views"));

hbs.registerPartials(path.join(__dirname, "../templates/partials"));

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.render("index", { in: "New-News | HOME" });
});

app.get("/about", (req, res) => {
  res.render("about", { index: "New-News | ABOUT" });
});

app.get("/weather", (req, res) => {
  res.render("weather", { index: "New-News | WEATHER" });
});

app.get("*", (req, res) => {
  res.render("error", { index: "New-News | ERROR" });
});
app.listen(port, () => {
  console.log(`Server Conncted To Port No ${port}`);
});
