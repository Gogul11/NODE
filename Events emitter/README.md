The Events is a class in node that is responsible for handling events created using 'events' module in node.
It is used to create a custom operation when a set of operation is performed.
It offer 'EventEmitter' class to handle our events.

    const EventEmitter = require('events')
    const event - new EventEmitter()

ON and EMIT are the familier methods used in events module.

ON - It is used to add callback function when a event is triggered.

        event.on('<eventname>', <callback>)

EMIT - It is used to trigger an event.

        event.emit('<eventname>')