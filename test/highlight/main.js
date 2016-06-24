var fileSystem = require('fs');
var highLightJS = require("highlight.js");

fileSystem.readFile('before.html', function(err, data) {
    if (err) {
        return console.log(err);
    }
    data = '<html><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.4.0/styles/default.min.css"><body>' + data + '</body><script src="//cdn.bootcss.com/jquery/2.2.4/jquery.min.js"></script><script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.4.0/highlight.min.js"></script><script>hljs.initHighlightingOnLoad();</script></html>';
    fileSystem.writeFile('after.html', data, function(err) {
        if (err) {
            return console.error(err);
        }
    });
});
