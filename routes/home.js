const express = require("express");
const router  = express.Router({mergeParams: true});
const Pet	  = require("../models/pets");

router.get("/home", function(req, res) {
	Pet.find({}, function(err, foundPet) {
		if(err) {
			console.log(err);
		} else {
		res.render("home", {pet: foundPet});
		}
	});
});


module.exports = router;