setImmediate(() => {
    console.log('I got called right away!')
});

// set a timeout function
setTimeout(() => {
    console.log('I got called after 6 second!')
}, 6000);

// set an interval function

const interval = setInterval(() => {
    console.log('I got called every 2 seconds!')
}, 2000);
