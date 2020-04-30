const express 		= require("express"),
	  bodyParser	= require("body-parser"),
	  mongoose      = require("mongoose"),
	  Pet			= require("./models/pets"),
	  seedDB		= require("./seed"),
	  favicon		= require("serve-favicon"),
	  path			= require("path");

const homeRoute		= require("./routes/home"),
	  showRoute		= require("./routes/show"),
	  aboutRoute    = require("./routes/about"),
	  contactRoute  = require("./routes/contact");
	  
const app = express();

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.set("view engine", "ejs");
mongoose.connect(process.env.PETSGRAMDBURL, {useNewUrlParser: true, useUnifiedTopology: true});
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//seedDB();

app.get("/", function(req, res) {
	res.render("landing");
});

app.use(homeRoute);
app.use(showRoute);
app.use(aboutRoute);
app.use(contactRoute);


const port = process.env.PORT || 3002;
app.listen(port, function(){
	console.log("Server now running..");
});