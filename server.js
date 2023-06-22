var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    let filePath = '.' + req.url;
    let file;

    if (filePath === './') {
        file = fs.readFileSync('./index.html', 'utf8');
        res.writeHead(200, {'Content-Type': 'html'});
        res.end(file);
    } else {
        try {
            file = fs.readFileSync(filePath, 'utf8');
            res.end(file)
        } catch (e) {
        }
    }
}).listen(3000);
