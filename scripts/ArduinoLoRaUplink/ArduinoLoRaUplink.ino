/*
  First Configuration
  This sketch demonstrates the usage of MKR WAN 1300 LoRa module.
  This example code is in the public domain.
*/

#include <MKRWAN.h>

LoRaModem modem;

// Uncomment if using the Murata chip as a module
// LoRaModem modem(Serial1);

String appEui;
String appKey;

void setup() {
  
  // Setup and initalization
  Serial.begin(115200);
  while (!Serial);
  Serial.println("Welcome to MKRWAN1300 first configuration sketch");
  Serial.println("Register to your favourite LoRa network and we are ready to go!");
  
  // Change this to your regional band (eg. US915, AS923, ...)
  if (!modem.begin(EU868)) {
    Serial.println("Failed to start module");
    while (1) {}
  };

  // Show module version
  Serial.print("Your module version is: ");
  Serial.println(modem.version());
  Serial.print("Your device EUI is: ");
  Serial.println(modem.deviceEUI());
  
  // Set APP EUI
  appEui = "70B3D57ED002964F";
  appEui.trim();

  // Set APP KEY
  appKey = "9ADC0D85D8440E6EE0DCB528519BE38A";
  appKey.trim();

  // Connect to network via OTAA
  int connected;
  connected = modem.joinOTAA(appEui, appKey);
  if (!connected) {
    Serial.println("Something went wrong; are you indoor? Move near a window and retry");
    while (1) {}
  }

  // Wait for modem
  delay(5000);

  // Send message
  int err;
  modem.setPort(3);
  modem.beginPacket();
  modem.print("Hello LoRa!");

  // Remove confirmation request for uplink message
  err = modem.endPacket(false);
  if (err > 0) {
    Serial.println("Message sent correctly!");
  } else {
    Serial.println("Error sending message :(");
  }
}

void loop() {
  while (modem.available()) {
    Serial.write(modem.read());
  }
  modem.poll();
}
