let express = require("express");
let router = express.Router();
let vegetableRouters = require("./vegetable"); //Pekerja
let shoppingRouter = require("./shop"); //Buyer
const Controller = require("../controllers/Controller");

router.get("/", Controller.homePage);
// router.get("/login", (req, res) => {
//   res.render("login");
// });

router.get("/register", Controller.register);
router.post("/register", Controller.registerDb);
//LOGIN

router.get("/login", Controller.login);
router.post("/login", Controller.loginDb);

router.use(function (req, res, next) {
  console.log(req.session);
  if (!req.session.userId) {
    res.redirect("/login");
  } else {
    next();
  }
  // console.log("Time:", Date.now(), "MASUK");
});

router.use("/shop", shoppingRouter);
router.use("/vegetable", vegetableRouters);

module.exports = router;
