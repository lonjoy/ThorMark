var readability = require('node-readability');
var fileSystem = require('fs');

var urlToParse = "http://blog.csdn.net/huachao1001/article/details/51536074";

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
