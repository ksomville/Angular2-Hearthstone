if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var DeckServices_1 = require('services/DeckServices');
var hearthstoneApi_1 = require('services/hearthstoneApi');
var storageService_1 = require('services/storageService');
var Deck = (function () {
    function Deck(deckService, storageService) {
        this.deck = deckService;
        this.storageService = storageService;
        this.load();
    }
    Deck.prototype.load = function () {
        this.cards = JSON.parse(this.storageService.loadJson('deck'));
    };
    Deck.prototype.delete = function (img) {
        var position = this.cards.indexOf(img);
        if (~position) {
            this.cards.splice(position, 1);
            this.storageService.saveJson('deck', JSON.stringify(this.cards));
        }
    };
    Deck = __decorate([
        angular2_1.Component({
            selector: 'deck',
            appInjector: [DeckServices_1.DeckServices, hearthstoneApi_1.HearthstoneApi, storageService_1.StorageService]
        }),
        angular2_1.View({
            directives: [angular2_1.NgFor],
            templateUrl: './components/deck/deck.html'
        }), 
        __metadata('design:paramtypes', [DeckServices_1.DeckServices, storageService_1.StorageService])
    ], Deck);
    return Deck;
})();
exports.Deck = Deck;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGVjay9kZWNrLnRzIl0sIm5hbWVzIjpbIkRlY2siLCJEZWNrLmNvbnN0cnVjdG9yIiwiRGVjay5sb2FkIiwiRGVjay5kZWxldGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUJBQXFDLG1CQUFtQixDQUFDLENBQUE7QUFDekQsNkJBQWlDLHVCQUF1QixDQUFDLENBQUE7QUFDekQsK0JBQTZCLHlCQUF5QixDQUFDLENBQUE7QUFDdkQsK0JBQTZCLHlCQUF5QixDQUFDLENBQUE7QUFFdkQ7SUFnQkNBLGNBQVlBLFdBQXlCQSxFQUFFQSxjQUE4QkE7UUFDcEVDLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLFdBQVdBLENBQUNBO1FBQ3JCQSxJQUFJQSxDQUFDQSxjQUFjQSxHQUFHQSxjQUFjQSxDQUFDQTtRQUNyQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0E7SUFDaEJBLENBQUNBO0lBRURELG1CQUFJQSxHQUFKQTtRQUNDRSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxRQUFRQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUMvREEsQ0FBQ0E7SUFFREYscUJBQU1BLEdBQU5BLFVBQU9BLEdBQUdBO1FBQ05HLElBQUlBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBRTFDQSxFQUFFQSxDQUFDQSxDQUFFQSxDQUFDQSxRQUFTQSxDQUFDQSxDQUFBQSxDQUFDQTtZQUNoQkEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDL0JBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLFFBQVFBLENBQUNBLE1BQU1BLEVBQUVBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO1FBQ2xFQSxDQUFDQTtJQUNGQSxDQUFDQTtJQWpDRkg7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1ZBLFFBQVFBLEVBQUVBLE1BQU1BO1lBQ2hCQSxXQUFXQSxFQUFDQSxDQUFDQSwyQkFBWUEsRUFBRUEsK0JBQWNBLEVBQUVBLCtCQUFjQSxDQUFDQTtTQUMxREEsQ0FBQ0E7UUFDREEsZUFBSUEsQ0FBQ0E7WUFDTEEsVUFBVUEsRUFBRUEsQ0FBQ0EsZ0JBQUtBLENBQUNBO1lBQ2pCQSxXQUFXQSxFQUFFQSw2QkFBNkJBO1NBQzVDQSxDQUFDQTs7YUEyQkRBO0lBQURBLFdBQUNBO0FBQURBLENBbENBLEFBa0NDQSxJQUFBO0FBeEJZLFlBQUksT0F3QmhCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9kZWNrL2RlY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlldywgTmdGb3J9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7RGVja1NlcnZpY2VzLCBDYXJkfSBmcm9tICdzZXJ2aWNlcy9EZWNrU2VydmljZXMnO1xuaW1wb3J0IHtIZWFydGhzdG9uZUFwaX0gZnJvbSAnc2VydmljZXMvaGVhcnRoc3RvbmVBcGknO1xuaW1wb3J0IHtTdG9yYWdlU2VydmljZX0gZnJvbSAnc2VydmljZXMvc3RvcmFnZVNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkZWNrJyxcblx0YXBwSW5qZWN0b3I6W0RlY2tTZXJ2aWNlcywgSGVhcnRoc3RvbmVBcGksIFN0b3JhZ2VTZXJ2aWNlXVxufSlcbkBWaWV3KHtcblx0ZGlyZWN0aXZlczogW05nRm9yXSxcbiAgXHR0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9kZWNrL2RlY2suaHRtbCdcbn0pXG5cblxuZXhwb3J0IGNsYXNzIERlY2t7XG5cdGRlY2tTZXJ2aWNlOiBEZWNrU2VydmljZXM7XG5cdHN0b3JhZ2VTZXJ2aWNlOiBTdG9yYWdlU2VydmljZTtcblx0ZGVjazogRGVja1NlcnZpY2VzO1xuXHRjYXJkczogQXJyYXk8T2JqZWN0PjtcblxuXHRjb25zdHJ1Y3RvcihkZWNrU2VydmljZTogRGVja1NlcnZpY2VzLCBzdG9yYWdlU2VydmljZTogU3RvcmFnZVNlcnZpY2UpIHtcblx0XHR0aGlzLmRlY2sgPSBkZWNrU2VydmljZTtcblx0ICAgIHRoaXMuc3RvcmFnZVNlcnZpY2UgPSBzdG9yYWdlU2VydmljZTtcblx0ICAgIHRoaXMubG9hZCgpO1xuXHR9XG5cblx0bG9hZCgpIHtcblx0XHR0aGlzLmNhcmRzID0gSlNPTi5wYXJzZSh0aGlzLnN0b3JhZ2VTZXJ2aWNlLmxvYWRKc29uKCdkZWNrJykpO1xuXHR9XG5cblx0ZGVsZXRlKGltZyl7XG5cdCAgICB2YXIgcG9zaXRpb24gPSB0aGlzLmNhcmRzLmluZGV4T2YoaW1nKTtcblxuXHRcdGlmICggfnBvc2l0aW9uICl7XG5cdFx0XHR0aGlzLmNhcmRzLnNwbGljZShwb3NpdGlvbiwgMSk7XG5cdFx0XHR0aGlzLnN0b3JhZ2VTZXJ2aWNlLnNhdmVKc29uKCdkZWNrJywgSlNPTi5zdHJpbmdpZnkodGhpcy5jYXJkcykpO1xuXHRcdH0gXG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=