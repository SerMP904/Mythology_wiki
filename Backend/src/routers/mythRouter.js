const express = require("express");
const router = express.Router();

const {
    insertNewPantheon,
    getAllMyths,
    getMythsByPantheon
} = require("../controllers/mythController")

router.get("/", getAllMyths)
router.get("/:pantheon", getMythsByPantheon)
router.post("/newPantheon", insertNewPantheon);

module.exports = router;