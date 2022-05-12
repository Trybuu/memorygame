const cardArray = [
    {
        name: 'cheeseburger',
        img: 'img/cheeseburger.png',
    },
    {
        name: 'fries',
        img: 'img/fries.png',
    },
    {
        name: 'hotdog',
        img: 'img/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'img/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'img/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'img/pizza.png',
    },
    {
        name: 'cheeseburger',
        img: 'img/cheeseburger.png',
    },
    {
        name: 'fries',
        img: 'img/fries.png',
    },
    {
        name: 'hotdog',
        img: 'img/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'img/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'img/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'img/pizza.png',
    },
];

// cardArray.sort(() => 0.5 - Math.random());
console.log(cardArray);

const board = document.getElementById('grid');
let cardImageSrc;
let cardsChosenNames = [];
let cardsChosenIds = [];

function createBoard(){
    for(let i=0; i < cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'img/blank.png');
        card.setAttribute('data-id', i);
        board.append(card);

        card.addEventListener('click', flipCard);
    }
}

createBoard();

function checkMatch(){
    const firstCardName = cardsChosenNames[0];
    const secondCardName = cardsChosenNames[1];
    const cards = document.querySelectorAll('#grid img');

    if(firstCardName == secondCardName){
        cards[cardsChosenIds[0]].setAttribute('src', 'img/white.png');
        cards[cardsChosenIds[1]].setAttribute('src', 'img/white.png');
        cards[cardsChosenIds[0]].removeEventListener('click', flipCard);
        cards[cardsChosenIds[1]].removeEventListener('click', flipCard);

    }
    else if(firstCardName != secondCardName && secondCardName != undefined){
        cards[cardsChosenIds[0]].setAttribute('src', 'img/blank.png');
        cards[cardsChosenIds[1]].setAttribute('src', 'img/blank.png');
    }

    if(cardsChosenIds.length >= 2){
        cardsChosenNames = [];
        cardsChosenIds = [];
    }

}

function flipCard(){
    const cardId = this.getAttribute('data-id');
    this.setAttribute('src', cardArray[cardId].img);
    console.log(this);
    const chosenCard = cardArray[cardId].name;
    cardsChosenNames.push(chosenCard);
    cardsChosenIds.push(cardId);
    console.log(cardsChosenNames);
    console.log(cardsChosenIds);
    setTimeout(checkMatch, 500);
}