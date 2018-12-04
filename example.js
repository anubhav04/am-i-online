import amIOnline from 'is-app-online';

// Most easy way
amIOnline().then(() => {
    console.log("Internet available");
}).catch(() => {
    console.log("No internet");
});

// Set a timeout and a limit of attempts to check for connection
amIOnline({
    timeout: 4000,
    retries: 10,
}).then(() => {
    console.log("Internet available");
}).catch(() => {
    console.log("No internet");
});

// Make it with a different verification address
amIOnline({
    timeout: 4000,
    retries: 10,
    domainName: "ourcodeworld.com",
    port: 53,
    host: '8.8.8.8'
}).then(() => {
    console.log("Internet available");
}).catch(() => {
    console.log("No internet");
});
