import { Node } from "./core/Node.js";
import { Sprite } from "./core/Sprite.js";
import { Card } from "./components/Card.js";

class Game extends Node {
    constructor() {
        super();
        this._init();
        this.canClick = true;
        this.fistCardValue = null;
        this.secondCardValue = null;
    }
    _init() {
        this._createCards();
        this._createScore();
    }
    _createCards() {
        // this.cards = [];
        // for (let index = 0; index < 20; index++) {
        //     this.firstCard = new Card();
        //     this.firstCard.open();
        //     this.secondCard = null;
        // }
        this.cards = [];
        for (let index = 0; index < 20; index++) {
            let card = new Card(index);
            this.cards.push(card);
            card.setValue(index % 10);
            let row = index % 5;
            let col = Math.floor(index / 5);
            card.x = row * 110;
            card.y = col * 110;

            card.elm.addEventListener("click", this.onClickCard.bind(this, card))
            this.addChild(card);
        }
    }
    _createScore() {

    }

    onClickCard(card) {
         if(!this.canClick) return;  

        

    
        let firstCard = new Card();
        firstCard = card;
        firstCard.open();
        console.log(this);
        console.log(firstCard.open());

        
    }

    compareCard() {

    }
    resetGame() {

    }
}
let canClick = true;
let fistCard = null;
let secondCard = null;
let game = new Game();
game.width = 800;
game.height = 600;
game.elm.style.backgroundImage = "url(./images/trucxanh_bg.jpg)";

document.body.appendChild(game.elm);

