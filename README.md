# is-app-online

A javascript module to check the internet connectivity periodically to control the flow of app and restrict crashing of application.

# Installation

You can install this module through NPM using the following command in your terminal:

```bash
$ npm install is-app-online --save
$ yarn add is-app-online
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
import amIOnline from 'is-app-online';

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
