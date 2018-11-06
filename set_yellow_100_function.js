// set to yellow at 100 %
data = [];
data[0] = 0x31; //Mode
data[1] = 0x66; //RED
data[2] = 0x66; //Green
data[3] = 0x00; //Blue
data[4] = 0x00; //WW
data[5] = 0xF0; //True
data[6] = 0x0F; //False
var x = checksum(data);

function checksum(data){
value = 0
 for (var i in data) {
  value = value + data[i];
 }
return value & 0xFF;
}

data[7] = x; //Checksum

msg.payload = new Buffer(data);
return msg;
