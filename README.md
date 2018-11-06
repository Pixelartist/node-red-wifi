# node-red-wifi
Reverse engineered commands for the led wifi strip connected to node red

General approach

##Commands
All commands are sent at a TCP packet to port 5577, you need no handshake or authorization to do this.

<command group> …modifiers… <checksum>

Power On = 0x71 0x23 0x0F 0xA4
Power Off = 0x71 0x24 0x0F 0xA3
Set Color = 0x31 RED GREEN BLUE WW CW TRUE FALSE CHECKSUM
Set Blue 7% = 0x31 0x00 0x00 0x07 0x0 0x0 0xFO 0xOF 0x37
Checksum is calculated by adding up all the bits then AND masking it with 0xFF

##Command Groups
SetColor = 0x31
SetMode = 0x61
SetPower  = 0x71

##Constants
TRUE = 0xF0
FALSE = 0x0F
ON = 0x23
OFF = 0x24

Since I have the 4 pin version (according to Steve Zazeski (https://steve.zazeski.com/using-node-red-to-send-commands-to-wifi-led-controllers/) -> protocol 2014) I needed to change the way I submit the package.

First Step was to calculate the checksum on the fly and not do it manually.

Using this function:
function checksum(data){
  value = 0
    for (var i in data) {
      value = value + data[i];
    }
    return value & 0xFF;
  }

# What needs to be send to 4 pin LED strip to accept Commands
The command consists out of 8 different sets. I will use the example to set color to illustrate the different values.
data[0] = 0x31; //Mode to be used
data[1] = 0x66; //RED
data[2] = 0x66; //Green
data[3] = 0x00; //Blue
data[4] = 0x00; //WW - White
data[5] = 0xF0; //True
data[6] = 0x0F; //False
data[7] = x; //Checksum

So 8 parts are needed. If using a different model, you need to modify this to include the additional information.
