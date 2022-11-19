const images = [
    'Black',
    'Build',
    'Drive',
    'Gaim',
    'Wizard',
    'Decade',
    'Revice',
    'Zero_One',
    'ooo',
    'Gates'
]

const duplicateImages = [...images, ...images];
const shuffledImages = duplicateImages.sort(() => Math.random() - 0.5); //gera um numero aleatorio entre 0,5 a -0,5, para embaralhar as imagens 

const boardGame = document.querySelector('.boardGame');

var cardValue = -1;

const createCards = () => {
    cardValue += 1;

    createdCards = document.createElement('li');
    
    createdCards.className = 'card-back';
    createdCards.value = cardValue;

    return createdCards;
}

const load = () => {
    for (let i = 0; i < shuffledImages.length; i += 1) {
        boardGame.appendChild(createCards()) 
    }
}

load();