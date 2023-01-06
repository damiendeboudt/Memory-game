let go = document.getElementById('go')

go.addEventListener('click', () =>{

const cardArray = [
    {
        name:'bowser',
        img: 'image/bowser.png'
    },
    {
        name:'bowser',
        img: 'image/bowser.png'
    },
    {
        name:'luigi',
        img: 'image/luigi.png'
    },
    {
        name:'luigi',
        img: 'image/luigi.png'
    },
    {
        name:'mario',
        img: 'image/mario.png'
    },
    {
        name:'mario',
        img: 'image/mario.png'
    },
    {
        name:'princess',
        img: 'image/princess.png'
    },
    {
        name:'princess',
        img: 'image/princess.png'
    },
    {
        name:'toad',
        img: 'image/toad.png'
    },
    {
        name:'toad',
        img: 'image/toad.png'
    },
    {
        name:'yoshi',
        img: 'image/yoshi.png'
    },
    {
        name:'yoshi',
        img: 'image/yoshi.png'
    },
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grille')
let result= document.querySelector('#result')
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

function createBoard(){
    for (let i = 0; i < cardArray.length; i++) {
        let card = document.createElement('img')
        card.setAttribute('src', 'image/nintendo.png')
        card.setAttribute('data-id', i)
       card.addEventListener('click', flipcard)
        grid.appendChild(card)
    }
}

function checkForMatch (){
    let cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if(cardsChosen[0] === cardsChosen[1]) {
        cards[optionOneId].setAttribute('src', 'image/ok.png')
        cards[optionTwoId].setAttribute('src', 'image/ok.png')
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'image/nintendo.png')
        cards[optionTwoId].setAttribute('src', 'image/nintendo.png')
    }
    cardsChosen = []
    cardsChosenId = []
    result.textContent = cardsWon.length
    if(cardsWon.length === cardArray.length/2) {
        result.textContent = 'GG, '
    }
}

function flipcard(){
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    if(cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}

createBoard()

})

document.getElementById('retry').addEventListener("click", ()=>{
    window.location.reload()
})