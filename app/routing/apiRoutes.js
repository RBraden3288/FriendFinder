// Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

// ===========================
//Link Data from friends.js
// ===========================
var friendsData = require("../data/friends");
console.log("This is friendsData: ")
console.log (friendsData);

// ===========================
//ROUTING: export to server.js ln
// ===========================
module.exports = function(app) {

    // GET ROUTE
    // when our user makes a request, we're collecting data in JSON form from the 
    // friendsArray stored in friendsData using the route: api/friends
    app.get("api/friends", function (req, res)  {
        res.JSON(friendsData);
    })

    // POST ROUTE 
    // posts data to api/friends 
    app.post("api/friends", function (req, res) {
        //handle incoming submissions
        //incoming survey results: var newUser
        //logic

    })
};