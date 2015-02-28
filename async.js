function f1 () {
  console.log("put on my best suit.");
}

function doProgram() {
  setTimeout(f1, 0);
  console.log("saturday morning, ");
  console.log("jump out of bed, ");
}

doProgram();

var events = require('events');
var eventEmitter = new events.EventEmitter();

var ringBell = function ringBell()
{
    console.log('ring ring ring');
}
eventEmitter.on('doorOpen', ringBell);
 
eventEmitter.emit('doorOpen');
console.log('knock knock');

function job1(callback) {
  return setTimeout(function() {
    var i;
    for (i = 0; i < 3; ++i) console.log("doing job1 - " + i);
    callback(i);
  }, 0);
}

function job2(callback) {
  return setTimeout(function() {
    var i;
    for (i = 0; i < 5; ++i) console.log("doing job2 - " + i);
    callback(i);
  }, 0);
}

console.log("Start job 1");
job1Handle = job1(function(i){console.log("job1 finished " + i);});
console.log("Start job 2");
job2(function(i){console.log("job2 finished " + i);});
console.log("Started 2 jobs");
clearTimeout(job1Handle);

fs = require('fs');
fs.readFile('dummy.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});
