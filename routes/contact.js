const express = require("express");
const router  = express.Router({mergeParams: true});

router.get("/contact", function(req, res) {
	res.render("contact");
});

module.exports = router;