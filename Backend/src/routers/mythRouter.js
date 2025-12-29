const express = require("express");
const router = express.Router();

const {
    insertNewPantheon
} = require("../controllers/mythController")

router.get("/newPantheon", insertNewPantheon);

module.exports = router;