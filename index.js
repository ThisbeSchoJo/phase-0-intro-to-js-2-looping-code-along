// Code your solutions in this file
/*
//looping code along, part 1
for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
}
*/
/*
//looping code along, part 2
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
  return gifts;
}

wrapGifts(gifts);

*/

let names = []; // create new, empty array to hold the names
function writeCards(names, event) {
  let messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    debugger;
  }
  return messages;
}

writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown(number) {
  while (number >= 0) {
    console.log(number--);
  }
}

countDown(10);
