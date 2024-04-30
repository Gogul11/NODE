const EventEmitter = require('events') //importing events module using EventEmitter class

const eve = new EventEmitter(); 

eve.on('event1', (num) => {
    console.log(`Value of num is ${num}`) // Using on method to create an event
})

eve.emit('event1', 57)      //Using emit method to trigger the event