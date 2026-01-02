const express = require("express");
const router = express.Router();

const {
    insertNewPantheon,
    getAllMyths
} = require("../controllers/mythController")

router.get("/", getAllMyths)
router.post("/newPantheon", insertNewPantheon);

module.exports = router;