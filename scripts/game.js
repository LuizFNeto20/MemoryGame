const gameScreen = document.querySelector('.container');
const endScreen = document.querySelector('.end');
const life = document.querySelectorAll('.reset li')
const cards = document.querySelectorAll('.card-back');

var firstCard = '', secondCard = '';

const faceCard = 'face_cards';
const cardBack = 'card-back';
const cardsEqual = 'cards-equal';
var moves = 0;

cards.forEach((card) => {
    card.addEventListener('click', function () {
        if (card.className === 'card-back') {
            if (firstCard === '') {
                addRemoveCard(card, shuffledImages[card.value], faceCard, cardBack);
                moves++;
                firstCard = shuffledImages[card.value];
                return;
            }
            addRemoveCard(card, shuffledImages[card.value], faceCard, cardBack);
            secondCard = shuffledImages[card.value];
            checkCards();
        }
    })
});

var hearts = life.length;
var lostLife = 0;

const checkCards = () => {
    var faceCards = document.querySelectorAll('.face_cards');

    if (firstCard === secondCard) {
        firstCard = '';
        secondCard = '';
        for (let i = 0; i < faceCards.length; i += 1) {
            addRemoveCard(faceCards[i], shuffledImages[faceCards[i].value], cardsEqual, faceCard);
        }
        if (hearts < life.length) {
            loseLife('white', hearts++);
        }

        equalCards();
        return;
    }

    firstCard = '';
    secondCard = '';
    lostLife++;
    setTimeout(() => {
        for (let i = 0; i < faceCards.length; i += 1) {
            addRemoveCard(faceCards[i], 'imgBack', cardBack, faceCard);
        }
        loseLife('rgb(25, 145, 176)', --hearts);
    }, 400)
}

const addRemoveCard = (card, value, newClass, oldClass) => {
    card.classList.replace(oldClass, newClass);

    card.style.backgroundImage = `url('./img/${value}.jpg')`;
}

var equal = 0;

const displayNone = 'none';
const displayFlex = 'flex';
const finalTitle = document.querySelector('.final-title')

var equalCards = () => {
    equal += 1;

    if (equal === images.length) {
        gameScreen.style.display = displayNone;
        endScreen.style.display = displayFlex;

        finalTitle.textContent = `You won in ${formatTimer(timerMinutes)}:${formatTimer(--timerSeconds)}, using ${moves} moves with ${lostLife} lives lost`;
    }
}

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    window.location.reload(true);

    setTimeout(() => {
        gameScreen.style.display = displayFlex;
        endScreen.style.display = displayNone;
    }, 300);
})

const loseLife = (color, heart) => {
    life[heart].style.color = color;

    if (heart === 0) {
        setTimeout(() => {
            window.location.reload(true);
        }, 500);
    }
}
