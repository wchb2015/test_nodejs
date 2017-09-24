var EventEmitter = require('events').EventEmitter

var life = new EventEmitter()

life.on('envent1', function (m1arg) {
    console.log(' m1 ' + m1arg)
})

life.emit('envent1', 'haha')