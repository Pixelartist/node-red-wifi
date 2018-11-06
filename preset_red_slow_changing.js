// preset mode
data = [];
data[0] = 0x61; //mode
data[1] = 0x26; //
data[2] = 0x06; //speed
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
