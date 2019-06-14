// Your `htmlRoutes.js` file should include two routes:

//    * A GET Route to `/survey` which should display the survey page.
//    * A default, catch-all route that leads to `home.html` which displays the home page.

function handleRequest(req, res) {
    var path = req.url;
  console.log(path);
    switch (path) {
    case "/survey":
      return renderSurveyPage(req, res);
    default:
      return renderHomePage(req, res);
    }
};

function renderHomePage(){

}

function renderSurveyPage(){

};
