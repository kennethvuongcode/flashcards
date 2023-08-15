//Variables

let card = 0;

let flashcards = [
    ['aberrant', 'adj.', 'deviating from the norm (noun form: abberation'],
    ['abscond', 'verb', 'to depart clandestinely; to steal off and hide'],
    ['alacrity', 'noun', 'eager and enthusiastic willingness'],
    ['a','b','c'],
    ['d','e','f'],
    ['g','h','i'],
];
///////////////////////////////    BUTTONS    ///////////////////////////////////
const flashcardMain = document.getElementById('flashcardmain');
const flashcardDef = document.getElementById('definition');
const flashcardType = document.getElementById('type');

const textElement = document.getElementById('textElement');
const updateButton = document.getElementById('updateButton');
const shuffleButton = document.getElementById('shuffle');
const previousButton = document.getElementById('prevCard');
const nextButton = document.getElementById('nextCard');

shuffleButton.addEventListener('click', shuffleFlashcards);
previousButton.addEventListener('click', prevCard);
nextButton.addEventListener('click', nextCard);

function shuffleFlashcards() {
    const n = flashcards.length;
    for (let i = 0; i < n; i++) {
        const j = Math.floor(Math.random() * n);
        const temp = flashcards[i];
        flashcards[i] = flashcards[j];
        flashcards[j] = temp;
    }
    updateFlashcardsUI(); // Update the UI after shuffling
}

function updateFlashcardsUI() {
   
    if (flashcardMain) {
        card = 0;
        flashcardMain.innerHTML = ''; // Clear existing content
        
        flashcardMain.textContent = flashcards[0][0]
        flashcardType.textContent = flashcards[0][1]
        flashcardDef.textContent = flashcards[0][2]
        
    } else {
        console.error("Element with ID 'flashcards' not found.");
    }
}

function nextCard() {
    card++;

    if (card >= flashcards.length){
        card = 0;
    }
    flashcardMain.textContent = flashcards[card][0]
    flashcardType.textContent = flashcards[card][1]
    flashcardDef.textContent = flashcards[card][2]
}

function prevCard() {
    card--;

    if (card < 0){
        card = card.length - 1;
    }
    flashcardMain.textContent = flashcards[card][0]
    flashcardType.textContent = flashcards[card][1]
    flashcardDef.textContent = flashcards[card][2]
}


document.addEventListener('DOMContentLoaded', function() {
    const shuffleButton = document.getElementById('shuffleButton');
    if (shuffleButton) {
        shuffleButton.addEventListener('click', shuffleFlashcards);
    }
});
