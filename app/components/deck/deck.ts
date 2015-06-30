import {Component, View, NgFor} from 'angular2/angular2';
import {DeckServices, Card} from 'services/DeckServices';
import {HearthstoneApi} from 'services/hearthstoneApi';
import {StorageService} from 'services/storageService';

@Component({
	selector: 'deck',
	appInjector:[DeckServices, HearthstoneApi, StorageService]
})
@View({
	directives: [NgFor],
  	templateUrl: './components/deck/deck.html'
})


export class Deck{
	deckService: DeckServices;
	storageService: StorageService;
	deck: DeckServices;
	cards: Array<Object>;

	constructor(deckService: DeckServices, storageService: StorageService) {
		this.deck = deckService;
	    this.storageService = storageService;
	    this.load();
	}

	load() {
		this.cards = JSON.parse(this.storageService.loadJson('deck'));
	}

	delete(img){
	    var position = this.cards.indexOf(img);

		if ( ~position ){
			this.cards.splice(position, 1);
			this.storageService.saveJson('deck', JSON.stringify(this.cards));
		} 
	}
}