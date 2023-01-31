// KLASSER Card, Kortlek (Deck), Player

class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value
       //this.rank = // optional
    }
    showCard() {
        console.log(this.suit, this.value)
    }
}

class Deck {
    constructor() {
        this.cards = []
        this.build()

    }

    build() {
        const suit = ["Hjärter", "Ruter", "Spader", "Klöver"]
        const values = [1,2,3,4,5,6,7,8,10,11,12,13,14]
        suit.forEach(suit => {
            values.forEach(val => {
                this.cards.push(new Card(suit, val))
            })
        })
    } 
    
    //drawCard() // ta bort från kortlek

    showCards() {
        this.cards.forEach(card => {
            console.log(card)
        })
    }
    length() {
        this.cards.length
    }
}

class Player {
    constructor(name) {
        this.name = name
        this.hand = []
    }
}


const deck = new Deck()
deck.showCards()
