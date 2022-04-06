// need a loading message

function () {
    console.log(`Generating a puzzle.`);
    document.getElementById("game").innerText = "Loading...";
}
// need to pull words from db

function retrieveWords() {
    // some sort of command to pull words from DB
}

// in the meanwhile, pull words from a db

// need to obtain dummy data OR download a dictionary

const words = [
    { name: 'train', type: 'locomotive'},
    { name: 'apple', type: 'granny smith'},
    { name: 'banana', type: 'gros michel'},
    { name: 'canada', type: 'land of hockey and maple syrup' },
    { name: 'tahiti', type: 'Polynesian island'},
    { name: }
]



// functionality re: difficulty level + no of words, not to be implemented atm

// pull 10 words from db

// in html, create a grid and assign a value to each grid (does it contain a letter or no?)

// for styling, if it contains a letter, then make the square x color with y border (find a way to collapse adjacent borders)

// if it doesnt contain a letter, make sure it's filled in black (or whatever color)

// determine intersections 

// if a word can't intersect, then DISCARD word from puzzle

// DOM print puzzle to front end

// add sound effects for adding + removing

// add w javascript a keyboard w letters

// future functionality: inhibit incorrect input?? or signal to user they're wrong?

// add submit button

// print to user the score

// send score to db

// for internal use, need to log generation time 


