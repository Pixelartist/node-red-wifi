//checksum function
function checksum(data){
value = 0
 for (var i in data) {
  value = value + data[i];
 }
return value & 0xFF;
}
