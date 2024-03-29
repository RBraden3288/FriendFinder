// Your `server.js` file should require the basic npm packages we've used in class: `express` and `path`.
//======================
//  DEPENDENCIES
//======================

var express = require("express");  //installed

var path = require("path");        //installed

//======================
//  EXPRESS CONFIG
//======================

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//======================
//  ROUTER
//======================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app); 

//======================
//  LISTENER
//======================

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });


