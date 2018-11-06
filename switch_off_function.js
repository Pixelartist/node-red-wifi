// switch off function
data = [];
data[0] = 0x71; //mode
data[1] = 0x24; //on / off
data[2] = 0x0F; //false
var x = checksum(data);

function checksum(data){
value = 0
 for (var i in data) {
  value = value + data[i];
 }
return value & 0xFF;
}

data[3] = x; //Checksum

msg.payload = new Buffer(data);
return msg;
