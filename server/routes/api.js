const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("api works11");
});



module.exports = router;
