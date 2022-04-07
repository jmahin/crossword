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


