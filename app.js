const express = require("express");
const session = require("express-session");
const routers = require("./routers");
const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

//secret untuk amanin session
app.use(
  session({
    secret: "rahasia fao ",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      sameSite: true,
    },
  })
);

app.use("/", routers);

app.listen(PORT, () => {
  console.log(`This app is listening on port ${PORT}`);
});
