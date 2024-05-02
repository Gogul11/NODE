 In the context of a URL, a query parameter is a key-value pair appended to the end of the URL after a question mark (?).
 
Example : 
        localhost:5000/search?name=Gogul&id=1

The url after the question mark is the query parameter which is stored as the key value pairs.

    Example:
        {name : "Gogul", id : 1}

This parameter can be accessed with query method.

    Example:
        const Name = req.query.name // which binds name to Gogul to Name

These parameters are often used for filtering, searching, or providing additional data to server endpoints.

