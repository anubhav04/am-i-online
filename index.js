function amIOnline(options) {
    // Require dns-socket module from dependencies
    var dns = require('dns-socket');
    options = settings || {};

    return new Promise(function(resolve, reject){
        // Create instance of the DNS resolver
        var socket = dns({
            timeout: (options.timeout || 10000),
            retries: (options.retries || 10)
        });

        // Run the dns lowlevel lookup
        socket.query({
            questions: [{
                type: 'A',
                name: (options.domainName || "google.com")
            }]
        }, (options.port || 53), (options.host || '8.8.8.8'));

        // DNS Address solved, internet available
        socket.on('response', () => {
            socket.destroy(() => {
                resolve();
            });
        });

        // Verify for timeout of the request (cannot reach server)
        socket.on('timeout', () => {
            socket.destroy(() => {
                reject();
            });
        });
    });
}

module.exports = amIOnline;
