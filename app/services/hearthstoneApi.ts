declare var fetch;

export class HearthstoneApi{

	findCard: String;
	findDeck: String;

	//Service
	serviceCall(){
		return new Promise((resolve, reject) => {
     		fetch(this.findCard, {
	      		headers:{
	      			"X-Mashape-Key": "ojOTIgJwAGmshRKAl9MT4bt94nGrp1BlUj5jsnlYR5NDmN2G6q"
	      		}
 	 		})
      		.then(response => response.json())
      		.then(response => {
        		resolve(response); // resolve promise with response if it fetch succeded
      		}).catch(() => {
        		reject(); // reject promise if we catch a fetch error
     		});
    	});
	}

	//Search a Card by Name
	searchCard(card){

		this.findCard = "https://omgvamp-hearthstone-v1.p.mashape.com/cards/search/"+card;

		return this.serviceCall();
	}

	//Search a card by cost, attack, health
	searchSpec(cost = 0, attack = 0, health = 0){

		this.findCard = "https://omgvamp-hearthstone-v1.p.mashape.com/cards?";
		if(attack != 0){
			this.findCard = this.findCard+"&attack="+attack;
		}
		if(cost != 0){
			this.findCard = this.findCard+"&cost="+cost;
		}
		if(health != 0){
			this.findCard = this.findCard+"&health="+health;
		}

		return this.serviceCall();
	}

	//Search a card by ID
	searchByID(id){

		this.findCard = "https://omgvamp-hearthstone-v1.p.mashape.com/cards/"+id;

		return this.serviceCall();
	}

}