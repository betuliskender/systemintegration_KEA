const base64EncodingString = btoa("hello there, this is base 64");

console.log(base64EncodingString);

const base64DecodingString = atob(base64EncodingString)

console.log(base64DecodingString);
