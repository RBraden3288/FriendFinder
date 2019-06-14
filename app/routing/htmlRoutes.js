// Your `htmlRoutes.js` file should include two routes:

//    * A GET Route to `/survey` which should display the survey page.
//    * A default, catch-all route that leads to `home.html` which displays the home page.
var path = require("path");        //installed

module.exports = function(app) {
    app.get("/home", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
      });
    
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    })

    //catch all
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
      });
}





// function handleRequest(req, res) {
//     path = req.url;
    
//     console.log(path);
//         switch (path) {
//         case "/survey":
//             return renderSurveyPage(req, res);
//         default:
//             return renderHomePage(req, res);
//         }
// };

// function renderHomePage(){

// }

// function renderSurveyPage(){

// };
