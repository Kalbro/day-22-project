const express = require("express");

const application = express();
const loremIpsum = require("lorem-ipsum");


let output = loremIpsum({
    count: 3,
        units: "paragraphs",
        sentenceLowerBound: 10,
        sentenceUpperBound: 25,
        format: "html"
});




application.get("/" , function(require, response){
    response.send(output);
    
});

application.listen(3000, () => {

});


