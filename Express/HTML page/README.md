Since we created a mini server using http module that redirect to different responses.

We can also create a server using the express module. Unlike the http module express module is to be installed using node package manager.

Use the following command to install express module : 

        npm i express -save

Express module is different from the http module.

HTTP: It is an in-build module which is pre-installed along with NodeJS. It is used to create server and set up connections. Using this connection, data sending and receiving can be done as long as connections use a hypertext transfer protocol.

Express: Express as a whole is known as a framework, not just as a module. It gives you an API, submodules, functions, and methodology and conventions for quickly and easily typing together all the components necessary to put up a modern, functional web server with all the conveniences necessary for that static asset hosting, templating, handling CSRF, CORS, cookie parsing, POST data handling, and many more functionalities.

The sendFile() method is used to send the HTML file using path.resolve() method.

Example : 

    res.sendFile(path.resolve(__dirname, './public/signin.html'))

Since app.use() function is used to mount the specified middleware function(s) at the path that is being specified. It is mostly used to set up middleware for your application.It uses the static() methode to invoke the all the css files, Java Script files, images and other static assests unlike http module where each and every request is handled separately.

Example : 

    app.use(express.static('./public'))


The static() method takes the directory where all the assests files are saved, as a argument. You can also save your HTML file in the same directory with a name 'index.html' and don't need use other methods to handle the requests.