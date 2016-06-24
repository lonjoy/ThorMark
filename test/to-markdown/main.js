var fileSystem = require('fs');
var toMarkdown = require("to-markdown");

fileSystem.readFile('before.html', function(err, data) {
    if (err) {
        return console.log(err);
    }
    data = toMarkdown(data.toString());
    fileSystem.writeFile('after.md', data, function(err) {
        if (err) {
            return console.error(err);
        }
    });
});
