const imgs = [
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

const imgsDuplicate = [...imgs, ...imgs];
const shuffledImgs = imgsDuplicate.sort(() => Math.random() - 0.5);

const ul = document.querySelector('.Game-box');

var cont = -1;

const createCards = () => {
    cont += 1;

    li = document.createElement('li');
    
    li.className = 'card';
    li.value = cont;

    return li;
}

const load = () => {
    for (let i = 0; i < shuffledImgs.length; i += 1) {
        ul.appendChild(createCards()) 
    }
}

load();