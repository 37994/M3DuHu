// DHT11 library
#include "DHT.h"

// DHT11 variables
#define DHTTYPE DHT11       // DHT 11 sensor
uint8_t DHTPin = D7;        // DHT Sensor data input
DHT dht(DHTPin, DHTTYPE);   // Initialize DHT sensor. 

void ReadSensors() {
  Light = analogRead(A0);    
  
  float temperature =  round(dht.readTemperature()*10)/10; // Gets the values of the temperature
  float humidity = round(dht.readHumidity()*10)/10; // Gets the values of the humidity
  // Compute heat index in Celsius (isFahrenheit = false)
  float heatindex = round(dht.computeHeatIndex( Temperature, Humidity, false)*10)/10; 
        
  if(isnan(temperature) || isnan(humidity) || isnan(heatindex)){
    //Serial.println("[DHT11] Error reading!");
  }
  else{
    // the DHT11 readings look ok 
    Temperature = temperature;
    Humidity =  humidity ;
    HeatIndex = heatindex;
  }
} 
