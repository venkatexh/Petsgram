var mongoose = require("mongoose");

var petSchema = new mongoose.Schema ({
	name: String,
	imgUrl: String
});

module.exports = mongoose.model("Pet", petSchema);