#include <MKRWAN.h>
LoRaModem modem;
#include "arduino_secrets.h"
String appEui = SECRET_APP_EUI;
String appKey = SECRET_APP_KEY;

#include <OneWire.h>
#include <DallasTemperature.h>
#define ONE_WIRE_BUS 2
OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature sensors(&oneWire);

void setup() {
  
  // Setup and initalization
  Serial.begin(115200);
  // Wait for serial boot
  // while (!Serial);
  delay(1000);
  // Start sensors
  sensors.begin();
  Serial.println("Welcome to MKRWAN1300");
  
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

  Serial.print("Connecting to network via OTAA ... ");
  int connected;
  connected = modem.joinOTAA(appEui, appKey);
  if (!connected) {
    Serial.println("Something went wrong. Are you indoor? Move near a window and retry");
    while (1) {}
  }
  // Wait for modem
  delay(3000);
  Serial.println("DONE");
}

void loop() {
   // Read temperature
  Serial.print("Requesting temperatures... ");
  sensors.requestTemperatures();
  Serial.println("DONE");
  float sensorValue = sensors.getTempCByIndex(0); 
  Serial.print("Temperature for the device 1 (index 0) is: ");
  Serial.println(sensorValue);

  Serial.print("Sending message ... ");
  int err;
  String field = "Temperature: ";
  String message = field + sensorValue;
  modem.setPort(3);
  modem.beginPacket();
  modem.print(message);

  // Remove confirmation request for uplink message
  err = modem.endPacket(false);
  if (err > 0) {
    Serial.println("Message sent correctly!");
  } else {
    Serial.println("Error sending message :(");
  }

  // Wait for ten minutes (1000 ms * 60 * 10)
  Serial.print("Waiting for 10 minutes ...");
  delay(600000);
  Serial.println("DONE");
}
