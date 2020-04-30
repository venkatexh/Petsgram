var express 	= require("express");
var router 		= express.Router({mergeParams: true});
var Pet 		= require("../models/pets");

router.get("/pets/:id", function(req, res) {
	Pet.findById(req.params.id, function(err, foundPet) {
		if(err) {
			console.log(err); 
		} else {
			res.render("show", {pet: foundPet});
		}
	});
});
	
module.exports = router;