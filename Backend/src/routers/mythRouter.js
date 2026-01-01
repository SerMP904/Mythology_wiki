const express = require("express");
const router = express.Router();

const {
    insertNewPantheon
} = require("../controllers/mythController")

router.post("/newPantheon", insertNewPantheon);

module.exports = router;