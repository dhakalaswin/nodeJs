const fs = require('fs');

// Sync..Call
// fs.writeFileSync('./test.txt', 'Welcome to Node Js File Write command')


//Async
fs.writeFile("./test.txt", 'Welcome to Node Js', (err) => { });