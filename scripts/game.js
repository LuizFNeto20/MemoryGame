const div1 = document.querySelector('.container');
const div2 = document.querySelector('.end');
const cards = document.querySelectorAll('.card');

var firstCard = '', secondCard = '';

cards.forEach((card) => {
    card.addEventListener('click', function () {
        if (card.className === 'card') {
            if (firstCard === '') {
                addRemoveCard(card, shuffledImgs[card.value], 'card-open', 'card');

                firstCard = shuffledImgs[card.value];
            } else if (secondCard === '') {
                addRemoveCard(card, shuffledImgs[card.value], 'card-open', 'card');

                secondCard = shuffledImgs[card.value];
                checkCards();
            }
        }
    })
});

const checkCards = () => {
    var cardsOpen = [];
    var cardsOpen = document.querySelectorAll('.card-open');

    if (firstCard === secondCard) {
        firstCard = '';
        secondCard = '';
        for (let i = 0; i < cardsOpen.length; i += 1) {
            addRemoveCard(cardsOpen[i], shuffledImgs[cardsOpen[i].value], 'cards-equal', 'card-open');
        }
        equal();
    } else {
        firstCard = '';
        secondCard = '';
        setTimeout(() => {
            for (let i = 0; i < cardsOpen.length; i += 1) {
                addRemoveCard(cardsOpen[i], 'imgBack', 'card', 'card-open');
            }
        }, 300)
    }
}

const addRemoveCard = (card, value, newClass, oldClass) => {
    card.classList.replace(oldClass, newClass);

    card.style.backgroundImage = `url('./img/${value}.jpg')`;
}

var equalCards = 0;

var equal = () => {
    equalCards += 1;

    if (equalCards === imgs.length) {
        div1.style.display = 'none';
        div2.style.display = 'block';
    }
}

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    window.location.reload(true);

    setTimeout(() => {
        div1.style.display = 'flex';
        div2.style.display = 'none';
    }, 300);
})
