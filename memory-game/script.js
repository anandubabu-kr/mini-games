const grid = document.getElementById('grid')

const cardArray = [
    {
        name: '1',
        img: '1'
    },
    {
        name: '2',
        img: '2'
    },
    {
        name: '3',
        img: '3'
    },
    {
        name: '4',
        img: '4'
    },
    {
        name: '5',
        img: '5'
    },
    {
        name: '6',
        img: '6'
    },
    {
        name: '1',
        img: '1'
    },
    {
        name: '2',
        img: '2'
    },
    {
        name: '3',
        img: '3'
    },
    {
        name: '4',
        img: '4'
    },
    {
        name: '5',
        img: '5'
    },
    {
        name: '6',
        img: '6'
    },
]

let choices = []
let score = 0
let chosenCardsIDs = []
let moves = 0

cardArray.sort(() => 0.5 - Math.random())


function genarateBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', './assets/gray.png')
        card.setAttribute('alt', './assets/gray.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card);
    }
}

function flipCard() {
    let cardID = this.getAttribute('data-id')
    // console.log(cardArray[cardID])
    if (cardID === chosenCardsIDs[0]) {
        updateCards(cards[chosenCardsIDs[0]], './assets/gray.png')
        choices = []
        chosenCardsIDs = []
        return
    }

    choices.push(cardArray[cardID].name)
    chosenCardsIDs.push(cardID)
    this.setAttribute('src', cardArray[cardID].img)
    this.setAttribute('alt', cardArray[cardID].img)
    if (choices.length === 2) {
        setTimeout(checkMatch, 300)
        moves++
    }
}

function checkMatch() {
    // console.log('checking')
    if (choices[0] === choices[1]) {
        updateCards(cards[chosenCardsIDs[0]], './assets/success.png')
        updateCards(cards[chosenCardsIDs[1]], './assets/success.png')
        score++
        choices = []
        chosenCardsIDs = []
        console.log(score)
    }
    else {
        updateCards(cards[chosenCardsIDs[0]], './assets/gray.png')
        updateCards(cards[chosenCardsIDs[1]], './assets/gray.png')
        chosenCardsIDs = []
        choices = []
    }
    document.getElementById('score').innerHTML = 'Your score : ' + score
    document.getElementById('moves').innerHTML = 'Moves : ' + moves
    if (score === cardArray.length / 2) {
        resetGame()
    }
}

function updateCards(item, action) {
    item.setAttribute('src', action)
    item.setAttribute('alt', action)

}

function resetGame(){
    // alert('You have complated the Game')
    score=0
    moves=0
    document.getElementById('score').innerHTML = 'Your score : ' + score
    document.getElementById('moves').innerHTML = 'Moves : ' + moves
    grid.innerHTML=''
    setTimeout(genarateBoard, 300)
}

genarateBoard()
const cards = document.querySelectorAll('img')