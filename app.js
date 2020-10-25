// function sayHello(name){
//   console.log('Hello' + name)
// }

//sayHello(' Sharon')
// console.log(window)

//console.log(module)
// let logger = require('./logger')
// //console.log(logger)
// logger.log('message')

// const path = require('path')
// let pathObj = path.parse(__filename)
// console.log(pathObj)

// const os = require('os')
// let totalMemory = os.totalmem()
// let freeMemory = os.freemem()

 //console.log('Total Memory: ' + totalMemory)
// console.log(`Total Memory: ${totalMemory}`)
// console.log(`Free Memory: ${freeMemory}`)

const EventEmitter = require('events')
const emitter = new EventEmitter()
emitter.emit('messageLogged')
emitter.on('messageLogged', function() {
  console.log('Listener called')
})