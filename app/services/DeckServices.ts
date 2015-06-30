export class DeckServices{
	deck: Array<Object>;

	addToDeck(cardImg: String){
		this.deck.push(new Card(cardImg));
	}
}

export class Card{
	cardImg: String;

	constructor(cardImg: String){
		this.cardImg = cardImg;
	}
}