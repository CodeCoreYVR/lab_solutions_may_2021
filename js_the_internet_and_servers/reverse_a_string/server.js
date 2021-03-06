// Write a TCP client and a server application in Node.js:

// - The client should take a string input from the user (e.g. "hello", "what is this?") and send it to the server.

// - The server should respond to the client with the reversed word. (e.g. "hello" becomes "olleh", "what is this?" becomes "?siht si tahw")

// - The client should print the server response in the console.

const net = require('net');

const server = net.createServer(
    socket => {
        // get the data from the client side
        // reverse it
        // send it back to the client
        socket.on('data', data => {
            // data is binary data => convert it into string
            const stringData = data.toString(); // data + ''
            console.log(`Received from client => ${stringData}`);
            // 1 split this string into an array
            // 2 reverse this array
            // 3 join this array into a string
            const reversedString = stringData.split('').reverse().join('');
            console.log(`Reversed string => ${reversedString}`);
            socket.write(reversedString);
        })
    }
);


server.listen(4000);
console.log('Server is listening on the port 4000');