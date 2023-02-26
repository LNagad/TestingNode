const { 
    masterPage, homePage, valuesPage, 
    skillsPage, projectsPage, contactPage, notFoundpage 
}   = require('../assets/js/site/pages')



const requestHandler = function (req, res) {
    
    const requestURL = req.url

    const pages = {
        "/": [homePage, "home"],
        "/values": [valuesPage, "values"],
        "/skills": [skillsPage, "skills"],
        "/projects": [projectsPage, "projects"],
        "/contact": [contactPage, "projects"]
    };
      
    if (pages.hasOwnProperty(requestURL)) {
        res.setHeader("content-type", "text/html");
        res.write(masterPage(pages[requestURL][0], pages[requestURL][1]));
        res.statusCode = 200
        res.end()

    } else {
        res.write(masterPage(notFoundpage, "404"));
        res.statusCode = 400
        res.end()
    }
  
}

module.exports = requestHandler
