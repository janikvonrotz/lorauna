
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

## Sketch

## Source

[Arduino Project Hub - MKR WAN 1310 Meets The Things Network!](https://create.arduino.cc/projecthub/146376/mkr-wan-1310-meets-the-things-network-fff013)

# Wordpress

Use the `wordpress-script.js` script for website integration of the Lorauna API.