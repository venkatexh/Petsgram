const mongoose  = require("mongoose");
const Pet		= require("./models/pets");

var data = [
	{
		name: "Dog",
		imgUrl: "https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
	},
	{
		name: "Cat",
		imgUrl: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=983&q=80"
	},
	{
		name: "Cat",
		imgUrl: "https://images.unsplash.com/photo-1491485880348-85d48a9e5312?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
	},
	{
		name: "Dog",
		imgUrl: "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
	},
	{
		name: "Rabbit",
		imgUrl: "https://images.unsplash.com/photo-1518796745738-41048802f99a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
	},
];

function seedDB() {
	Pet.deleteMany({}, function(err) {
		if(err) {
			console.log(err);
		} else {
			console.log("Pets removed");
		}
	});
	
	data.forEach(function(seed){
		Pet.create(seed, function(err, pet) {
			if(err) {
				console.log(err);
			} else {
				console.log("New pet added");
			}
		});
	});
};

module.exports = seedDB;