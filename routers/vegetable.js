let express = require("express");
let router = express.Router();
const Controller = require("../controllers/Controller");


router.get("/", Controller.readVegie);

router.get("/add", Controller.vegeAdd);
router.post("/add", Controller.vegeAddDb);
router.get("/:id/delete", Controller.vegeDelete);

router.get("/:id/edit", Controller.vegeEdit);
router.post("/:id/edit", Controller.vegeEditDb);


module.exports = router;
