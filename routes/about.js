const express = require("express");
const router  = express.Router({mergeParams: true});

router.get("/about", function(req, res) {
	res.render("about");
});

module.exports = router;