// TO-DO: Get a db with $$$ SAT words. Pull 5 words from DB.
// Print 5 FITB to user
// Print definitions alongside the blank for each letter
// Allow user to enter letter
// Click "How'd I go?"
// Present a score. if user input === "what was selected randomly", then give a point. switch case?


const wordArray = ['person', 'woman', 'man', 'camera','TV'];

const guessWord = document.getElementById('game2');

// function randomWord() {
//     let wordOne = wordArray[Math.floor(Math.random()*wordArray.length)];
//     return console.log(wordOne);
    
// }
// randomWord();

let word1 = wordArray[Math.floor(Math.random()*wordArray.length)];
console.log(word1);

let word1S = [...word1];
// alt tocharArray();
console.log(word1S);

let word1Length = word1S.length;
console.log(word1Length);
// NEED TO VALIDATE USER INPUT, RESTRICT TO ONE CHARACTER PER BOX
// function validate("box") {
//     const characterLimit = 1;
//     if(box.value.length > characterLimit) {
//         box.value = box.value.substr(0, characterLimit);
// }

let firstWord = document.getElementById("firstWord");
const inputWord1 = document.createElement("box");



// WHEN WORD HAS X ELEMENTS IN ARRAY(word1S), then create the same number of input/boxes

// switch (expression) {
//     case(word1a): 
//     let 
//     [break;]
// }


// HOW TO DRAW 5 words from repository?
// function > loop > inject text"box" for each letter in newly formed array


// Submit activity
// function submit() {
//     push data to db
//     push score to page
//     delete submit button from page
//     maybe a different function, but validate by blocking any further user input
// }