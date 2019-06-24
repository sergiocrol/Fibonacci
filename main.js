'use strict'; 

var limit = 30;
var a = 0;
var b = 1;

// While
var serie = a + "/" + b;
while(a + b <= limit) {
  serie += "/" + (a+b);
  b = a + b;
  a = b - a;
};

console.log("while -> " + serie);

// for
a = 0;
b = 1;
serie = a + "/" + b;
for (a; a+b <= limit; b = a+b, a = b-a) {
  serie += "/" + (a+b);
}
console.log("for -> " + serie);
