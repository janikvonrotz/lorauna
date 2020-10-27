# Lorauna Sensor

This guide expects an Arduino MKR WAN 1300.

## Requirements

Install arduino-cli.

`brew install arduino-cli`

Init config.

`arduino-cli config init`

Update index of platforms and libraries.

`arduino-cli core update-index`

Install platform core.

`arduino-cli core install arduino:samd`

## Setup The Things Network

Configuration for TTN integration.

Application link: https://console.thethingsnetwork.org/applications/loruna

**Payload Formats**

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