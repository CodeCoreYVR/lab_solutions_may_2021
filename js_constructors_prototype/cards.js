class Card {
    constructor(value, suit) {
        // 1 => Ace, 13 ,12 ,11
        if (value === 1) {
            this.value = 'Ace';
        } else if (value === 11) {
            this.value = 'Jack';
        } else if (value === 12) {
            this.value = 'Queen';
        } else if (value === 13) {
            this.value = 'King';
        } else {
            this.value = value;
        }
        this.suit = suit;
    }
    toString() {
        return `Card { ${this.value} of ${this.suit} }`;
    }
    toObj() {
        return {
            val: this.value,
            suit: this.suit
        }
    }
}
const aceOfSpades = new Card(1, 'spades');
console.log(aceOfSpades.toString());
const tenOfHearts = new Card(10, 'hearts');
console.log(tenOfHearts.toString());
const kingOfDiamonds = new Card(13, 'diamonds');
console.log(kingOfDiamonds.toString());
// aceOfSpades.toString() // returns 'Card { Ace of Spades }'
// tenOfHearts.toString() // returns 'Card { 10 of Hearts }'
// kingOfDiamonds.toString() // returns 'Card { King of Diamonds }'


class Deck {
    constructor() {
        this.cards = [];
    }
    reset() {
        //52 cards
        // => 4 different suits ['clubs','spades','hearts','diamonds']
        // => 13 cards from 1 to 13
        // loop the number from 1 to 13, then inside this loop, we loop the 4 suits
        // put the suits on each number
        // card > value and a suit
        const suitsArr = ['clubs', 'spades', 'hearts', 'diamonds'];
        // i => 1 to 13 not 0 to 13
        for (let i = 1; i < 14; i++) {
            suitsArr.forEach(element => {
                const tempCard = new Card(i, element);
                this.cards.push(tempCard.toObj());
            })
        }
    }
    shuffle() {
        // - shuffle method that will randomly reorder the cards in the deck.
        // Math.random()
        // rule => loop this cards array, switch the place of the index i with the index random
        for (let i = 0; i < this.cards.length; i++) {
            // get the current card;
            // get a random index card;
            // switch the place
            const currentCard = this.cards[i];
            const randomNumber = parseInt(Math.random() * (this.cards.length - 1))
            //range of the this random number is 0 ~ (this.cards.length - 1)
            const randomCard = this.cards[randomNumber];
            // switch
            // cards[i]   cards[randomNumber]
            const tempElement = { ...currentCard };
            this.cards[i] = { ...randomCard };
            this.cards[randomNumber] = tempElement;
        }
        console.log(this.cards);
    }

    draw() {
        // - draw that will remove and return the top card of the deck.
        // get the card on the top
        // remove it from the deck
        // return this card
        const topCard = this.cards.shift();
        return topCard;
    }
}

const deck = new Deck();

console.log(deck.reset());

console.log(deck.shuffle());

console.log(deck.draw());