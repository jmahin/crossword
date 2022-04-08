// TO-DO: Get a db with $$$ SAT words. Pull 5 words from DB.
// Print 5 FITB to user
// Print definitions alongside the blank for each letter
// Allow user to enter letter
// Click "How'd I go?"
// Present a score. if user input === "what was selected randomly", then give a point. switch case?


const wordArray = ['person', 'woman', 'man', 'camera','TV'];

const wordAndDef = [
    {w: 'person', d: 'a human being regarded as an individual.'};
    {w: 'woman', d: 'an adult female human being.'};
    {w: 'man', d: 'an adult female human being.'};
    {w: 'camera', d: 'a device for recording visual images in the form of photographs, film, or video signals.'};
    {w: 'TV', d: 'a device that receives television signals and reproduces them on a screen.'};
]

// const guessWord = document.getElementById('game2');

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

// let firstWord = document.getElementById("firstWord");
// firstWord.innerText = "firstWord";
// firstWord.appendChild(box);

// const firstWord = document.getElementById("firstWord");
// const entry1 = document.createElement("wordNumeroUno");
// document.firstWord.appendChild(firstWord);

// ..
// const insertWord1 = document.querySelector('para1');
// // NEED A LOOP TO # OF "BOXES" TO CREATE
// for(x = 0, x < word1S.length, x ++){
//     const element1 = document.createElement('box');
//     element1.appendChild(document.createElement("box"));


// }
// ..

function addBox() {

    let() {
        // # of iterations depending on # of elements in array
    }
}




// WHEN WORD HAS X ELEMENTS IN ARRAY(word1S), then create the same number of input/boxes



// HOW TO DRAW 5 words from repository?
// function > loop > inject text"box" for each letter in newly formed array


// Submit activity
// function submit() {
//     push data to db
//     push score to page 
//     delete submit button from page .removeattrib. also the box colors should be greyed out.
//     maybe a different function, but validate by blocking any further user input
// }

// use loop for validation (latin characters, no numbers, no more than one character)