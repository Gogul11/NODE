Module is a small section of code that can be reused.
There are buit-in and used defined modules.

To used the user defined modules we need to export that module first and then we need to import the module in the main file.

To export the module:

       modules.exports = <name>
    
    expample : 
        modules.exports = welcome // welcome is a function contained in module.js file in the same directory
    
To use the modules use:

        require(./<path>)

    example : 
        require('./module.js')

