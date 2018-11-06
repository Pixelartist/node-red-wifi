// Use presets
data = [];
data[0] = 0x61; //mode
data[1] = 0x31; // mode selector
data[2] = 0x10; //speed
data[3] = 0x0F; //false
var x = checksum(data);

function checksum(data){
value = 0
 for (var i in data) {
  value = value + data[i];
 }
return value & 0xFF;
}

data[4] = x; //Checksum

msg.payload = new Buffer(data);
return msg;
