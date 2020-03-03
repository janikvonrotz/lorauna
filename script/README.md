
# The Things Network

## Payload Formats

Decode hex message

```js
function Decoder(bytes, port) {
 var result = "";
 for (var i = 0; i < bytes.length; i++) {
   result += String.fromCharCode(parseInt(bytes[i]));
 }
 return { payload: result };
}
```

# Wordpress

Use the `wordpress-script.js` script for website integration of the Lorauna API.