const { spyOn } = require("expect");


function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase());
  }
function logWhisper(string) {
    console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate(string) {
  if (string === string.toLowerCase()){
    const reply = "I can't hear you!";
    return reply ;
  }
  if(string === string.toUpperCase()){
    const reply ="YES INDEED!";
    return reply;
  }
  if(string === "Let\'s have dinner together!"){
  const reply ="I would love to!";
return reply;
}
}

