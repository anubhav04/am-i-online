# internet-available

A javascript module to check the internet connectivity periodically to control the flow of app and restrict crashing of application.

# Installation

You can install this module through NPM using the following command in your terminal:

```bash
$ npm install internet-available --save
```
# Syntax
```javascript
amIOnline({options})
.then(() => <success logic>)
.catch(() => <failure logic>);
```

# Defaults
* If you won't pass any options, following defaults be taken to run the availability checks.
```javascript
{
  timeout: 10000,
  retries: 10,
  domainName: 'google.com',
  host, '8.8.8.8',
  port: 53
}
```


# Example

am-i-online requires Promises to work correctly. It's easy to use:

```javascript
var amIOnline = require("internet-available");

// Most easy way
amIOnline({
    // Provide maximum execution time for the verification
    timeout: 5000,
    // If it tries 5 times and it fails, then it will throw no internet
    retries: 5
}).then(() => {
    console.log("Internet available");
}).catch(() => {
    console.log("No internet");
});
```

But configurable too (check the docs).
## Config
```javascript
/**
 * Internet available is a very simple method that allows you to check if there's an active
 * internet connection by resolving a DNS address and it's developer friendly.
 *
 * @param {options.timeout} timeout Execution time in milliseconds
 * @param {options.retries} retries Total query attempts made during timeout
 * @param {options.domainName} name Domain to check for connection by default google.com
 * @param {options.port} port Port where the DNS lookup should check by default 53
 * @param {options.host} host DNS Host where lookup should check by default '8.8.8.8' (Google Public DNS)
 * @return {Promise}
 */
```
