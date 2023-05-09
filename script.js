
function arrayCreator(){
    return [
        "https://upload.wikimedia.org/wikipedia/commons/3/30/English_pattern_2_of_clubs.svg",
        "https://upload.wikimedia.org/wikipedia/commons/1/14/English_pattern_3_of_clubs.svg",
        "https://upload.wikimedia.org/wikipedia/commons/c/c0/English_pattern_4_of_clubs.svg",
        "https://upload.wikimedia.org/wikipedia/commons/7/74/English_pattern_5_of_clubs.svg",
        "https://upload.wikimedia.org/wikipedia/commons/0/02/English_pattern_6_of_clubs.svg",
        "https://upload.wikimedia.org/wikipedia/commons/6/60/English_pattern_7_of_clubs.svg",
        "https://upload.wikimedia.org/wikipedia/commons/f/f0/English_pattern_8_of_clubs.svg",
        "https://upload.wikimedia.org/wikipedia/commons/1/14/English_pattern_9_of_clubs.svg",
        "https://upload.wikimedia.org/wikipedia/commons/4/48/English_pattern_10_of_clubs.svg",
        "https://upload.wikimedia.org/wikipedia/commons/8/80/English_pattern_jack_of_clubs.svg",
        "https://upload.wikimedia.org/wikipedia/commons/6/60/English_pattern_7_of_clubs.svg",
        "https://upload.wikimedia.org/wikipedia/commons/b/b3/English_pattern_queen_of_clubs.svg",
        "https://upload.wikimedia.org/wikipedia/commons/3/3e/English_pattern_king_of_clubs.svg",
        "https://upload.wikimedia.org/wikipedia/commons/5/5f/English_pattern_ace_of_clubs.svg",
        "https://upload.wikimedia.org/wikipedia/commons/2/2c/English_pattern_3_of_diamonds.svg",
        "https://upload.wikimedia.org/wikipedia/commons/4/4e/English_pattern_4_of_diamonds.svg",
        "https://upload.wikimedia.org/wikipedia/commons/6/6c/English_pattern_5_of_diamonds.svg",
        "https://upload.wikimedia.org/wikipedia/commons/4/4e/English_pattern_6_of_diamonds.svg",
        "https://upload.wikimedia.org/wikipedia/commons/5/5d/English_pattern_7_of_diamonds.svg",
        "https://upload.wikimedia.org/wikipedia/commons/1/18/English_pattern_8_of_diamonds.svg",
        "https://upload.wikimedia.org/wikipedia/commons/f/f5/English_pattern_9_of_diamonds.svg",
        "https://upload.wikimedia.org/wikipedia/commons/d/da/English_pattern_10_of_diamonds.svg",
        "https://upload.wikimedia.org/wikipedia/commons/1/16/English_pattern_jack_of_diamonds.svg",
        "https://upload.wikimedia.org/wikipedia/commons/4/4f/English_pattern_queen_of_diamonds.svg",
        "https://upload.wikimedia.org/wikipedia/commons/1/1c/English_pattern_king_of_diamonds.svg",
        "https://upload.wikimedia.org/wikipedia/commons/0/00/English_pattern_ace_of_diamonds.svg",
        "https://upload.wikimedia.org/wikipedia/commons/2/26/English_pattern_2_of_hearts.svg",
        "https://upload.wikimedia.org/wikipedia/commons/0/0f/English_pattern_3_of_hearts.svg",
        "https://upload.wikimedia.org/wikipedia/commons/b/bb/English_pattern_4_of_hearts.svg",
        "https://upload.wikimedia.org/wikipedia/commons/c/c6/English_pattern_5_of_hearts.svg",
        "https://upload.wikimedia.org/wikipedia/commons/d/da/English_pattern_6_of_hearts.svg",
        "https://upload.wikimedia.org/wikipedia/commons/c/cb/English_pattern_7_of_hearts.svg",
        "https://upload.wikimedia.org/wikipedia/commons/3/3c/English_pattern_8_of_hearts.svg",
        "https://upload.wikimedia.org/wikipedia/commons/2/22/English_pattern_9_of_hearts.svg",
        "https://upload.wikimedia.org/wikipedia/commons/b/bb/English_pattern_10_of_hearts.svg",
        "https://upload.wikimedia.org/wikipedia/commons/5/56/English_pattern_jack_of_hearts.svg",
        "https://upload.wikimedia.org/wikipedia/commons/9/9d/English_pattern_queen_of_hearts.svg",
        "https://upload.wikimedia.org/wikipedia/commons/1/14/English_pattern_king_of_hearts.svg",
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/English_pattern_ace_of_hearts.svg",
        "https://upload.wikimedia.org/wikipedia/commons/0/0b/English_pattern_2_of_spades.svg",
        "https://upload.wikimedia.org/wikipedia/commons/a/a5/English_pattern_3_of_spades.svg",
        "https://upload.wikimedia.org/wikipedia/commons/3/34/English_pattern_4_of_spades.svg",
        "https://upload.wikimedia.org/wikipedia/commons/9/9c/English_pattern_5_of_spades.svg",
        "https://upload.wikimedia.org/wikipedia/commons/a/ac/English_pattern_6_of_spades.svg",
        "https://upload.wikimedia.org/wikipedia/commons/d/d1/English_pattern_7_of_spades.svg",
        "https://upload.wikimedia.org/wikipedia/commons/4/4d/English_pattern_8_of_spades.svg",
        "https://upload.wikimedia.org/wikipedia/commons/f/f0/English_pattern_9_of_spades.svg",
        "https://upload.wikimedia.org/wikipedia/commons/d/da/English_pattern_10_of_spades.svg",
        "https://upload.wikimedia.org/wikipedia/commons/4/4f/English_pattern_jack_of_spades.svg",
        "https://upload.wikimedia.org/wikipedia/commons/c/ca/English_pattern_queen_of_spades.svg",
        "https://upload.wikimedia.org/wikipedia/commons/f/f1/English_pattern_king_of_spades.svg",
        "https://upload.wikimedia.org/wikipedia/commons/1/19/English_pattern_ace_of_spades.svg"
    ]
}


let cardsContainer = document.getElementById("cardsContainer")
let dealButton = document.getElementById("dealBTN")
let userCards = document.getElementById("userCards")
let cardURL = arrayCreator()
let countOfClicks = 0
let copyOfCardURL = arrayCreator()
let filteredArray = []
let multiply = 52


class DeckOfCards {
    constructor(){
    }

    shuffle(arr){
        for(let i = (arr.length -1); i > 0; i--){
            let randomIndex = Math.floor(Math.random() * (i+1))
            let change = arr[i];
            arr[i] = arr[randomIndex]
            arr[randomIndex] = change
        }
    }

    deal_card(arr){
        multiply--
            let randomCard = cardURL[Math.ceil(Math.random() * multiply )]
            let userCardUI = document.createElement("img")
                userCardUI.setAttribute("src", randomCard)
                userCards.appendChild(userCardUI)
            
                
            filteredArray = cardURL.filter((item, index) => {
                return (item) !== randomCard
                })
            cardURL = filteredArray
        
    }
}


function deckCreator(arr){
    for(let i = 0; i < arr.length; i++){
        let cardUI = document.createElement("img")
        cardUI.setAttribute("src", arr[i])
        cardsContainer.appendChild(cardUI)
    }
}
deckCreator(cardURL)

function removeElement(node){
    while(node.firstChild){
        node.removeChild(node.lastChild)
    }
}



dealButton.addEventListener("click", () => {
    countOfClicks++
    removeElement(cardsContainer)
    let newDeck = new DeckOfCards()

    if(countOfClicks <= 52){
        newDeck.deal_card(cardURL)
        deckCreator(cardURL)
    }
    
    if(countOfClicks === 53){
        removeElement(userCards)
        newDeck.shuffle(copyOfCardURL)
        deckCreator(copyOfCardURL)  
    }
    if(countOfClicks > 53){
        return null
    }
})