To imports express module :
        const express = require("requie")

The  next step is to invoke the express() instance.

        const app = express()

The express module is similar to the createserver() method in the http module.

app.get() is used to get the path of the url specified and it takes two arguments.The first argument is the path and the second argument is the callback function that retruns the response and this callback takes two arguments such as requset and response.

Example :

        app.get("/", (req, res) => {
            res.send("This is the home page")
        })

The status() method is used to tell the status code to the browser 

The app.use() function is used to mount the specified middleware function(s) at the path that is being specified. It is mostly used to set up middleware for your application. 

The app.listen(portnum) is used to host our server in the specified  port number. 