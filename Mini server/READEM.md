This folder is about how to create a Mini server for a login page.The mini server is created using "http module".

Createserver method in the http module is used to create a request handler for multiple request at a time.

The simplest way to invoke the createserver method is 

        const server = http.createserver([options],[requestHandler])


1 -> options( Optional): An object that can be used to specify various server options. This is an optional parameter and is rarely used. If provided, it should be an object with properties defining server options such as incomingMessage and serverResponse. These options are rarely used in practice.

2 -> RequestHandler is a callback functions that takes two arguments such as,
        req - The request from the user
        res - The response that we send for the given request

The req.url is the url specified for the request

listen() method tells that our server is running the port number that is specified as argument.