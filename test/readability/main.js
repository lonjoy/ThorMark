var readability = require('node-readability');
var fileSystem = require('fs');

var urlToParse = "";

readability(urlToParse, function(err, article, meta) {
    console.log(article.title);
    console.log(article.content);
    fileSystem.writeFile('after.html', article.content, function(err) {
        if (err) {
            return console.error(err);
        }
    });
    // console.log(article.html);
    // console.log(article.document);
    // console.log(meta);
    article.close();
});
