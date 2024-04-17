#define MAX_UNSIGNED_LONG 4294967295
#define DHT11ReadDelay 5000

// GLOBAL VARIABLES
// json
char jsonOut[256];
// dht11
float Temperature = -1;
float Humidity = -1;
float HeatIndex = -1;
// light sensor
int Light = -1;


void setup() {
  Serial.begin(115200);

  pinMode(D3, OUTPUT);
  pinMode(D5, OUTPUT);
  pinMode(D6, OUTPUT);

  digitalWrite(D3, LOW);
  digitalWrite(D5, LOW);
  digitalWrite(D6, LOW);
  
  SetupWifi();
  CheckWifi();
}

void loop() {
  static unsigned long previousTime = 0;
  unsigned long currentTime = millis();

  // this is separated so the LDR can work constinously
  if(currentTime - previousTime >= DHT11ReadDelay || currentTime >= MAX_UNSIGNED_LONG - DHT11ReadDelay) {
    // Clear monitor
    Serial.print("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
    Serial.println("Reading sensors\n");
    
    // READ SENSOR VALUES HERE
    ReadSensors();

    Serial.println("Creating JSON\n");

    // CREATE JSON OBJECT HERE
    CreateJSON();
    
    Serial.println("Sending POST\n");

    // SEND POST REQUEST HERE
    SendPOST(jsonOut);

    previousTime = millis();
  }

  CheckWifi();
  delay(50);
}
