HTTP module - NODE.js has bulit in module called HTTP module which allows node to transfer data over the HYPER TEXT TRANSFER PROTOCOL(HTTP).

To use HTTP module use 'require()' method : 

        const http = require('http')

Using the HTTP module you can create your own server using 'createserver()' method : 

        http.createserver(<function(req, res)>)

The function inside the createserver function should take two parameters such as req which is the request and res is the response.

using res.write() method you can write the content which is dispalyed in the browser.

The res.end() ends the current response process.

The req.url is the path of the url.

The listen() method refers to the port number that your current page runing on.