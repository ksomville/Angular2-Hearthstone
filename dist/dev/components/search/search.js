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
var hearthstoneApi_1 = require('services/hearthstoneApi');
var DeckServices_1 = require('services/DeckServices');
var storageService_1 = require('services/storageService');
var Search = (function () {
    function Search(hearthstoneApi, deckService, storageService) {
        var b = new angular2_1.FormBuilder();
        this.searchForm = b.group({
            card: ["", angular2_1.Validators.required]
        });
        this.searchSpec = b.group({
            mana: [""],
            attack: [""],
            health: [""]
        });
        this.hearthstoneApi = hearthstoneApi;
        this.storageService = storageService;
        if (this.storageService.loadJson('deck').length == 0) {
            this.storageService.saveJson('deck', '[]');
        }
        this.deck = JSON.parse(this.storageService.loadJson('deck'));
    }
    Search.prototype.onSearch = function (e) {
        var _this = this;
        e.preventDefault();
        if (this.searchForm.valid) {
            this.hearthstoneApi.searchCard(this.searchForm.value.card).then(function (response) {
                _this.datas = response;
            }, function (response) {
                console.log("loading failed");
            });
        }
        else {
            console.error("invalid form", this.searchForm);
        }
    };
    Search.prototype.onSpec = function (e) {
        var _this = this;
        e.preventDefault();
        if (this.searchSpec.valid) {
            this.hearthstoneApi.searchSpec(this.searchSpec.value.mana, this.searchSpec.value.attack, this.searchSpec.value.health).then(function (response) {
                var arrays = new Array();
                for (var prop in response) {
                    for (var i = response[prop].length - 1; i >= 0; i--) {
                        arrays.push(response[prop][i]);
                    }
                    ;
                }
                _this.datas = arrays;
            }, function (response) {
                console.log("loading failed");
            });
        }
        else {
            console.error("invalid form", this.searchSpec);
        }
    };
    Search.prototype.save = function (img) {
        this.deck.push(img);
        this.storageService.saveJson('deck', JSON.stringify(this.deck));
    };
    Search = __decorate([
        angular2_1.Component({
            selector: 'search',
            appInjector: [hearthstoneApi_1.HearthstoneApi, DeckServices_1.DeckServices, storageService_1.StorageService]
        }),
        angular2_1.View({
            directives: [angular2_1.formDirectives, angular2_1.NgFor],
            templateUrl: './components/search/search.html'
        }), 
        __metadata('design:paramtypes', [hearthstoneApi_1.HearthstoneApi, DeckServices_1.DeckServices, storageService_1.StorageService])
    ], Search);
    return Search;
})();
exports.Search = Search;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC50cyJdLCJuYW1lcyI6WyJTZWFyY2giLCJTZWFyY2guY29uc3RydWN0b3IiLCJTZWFyY2gub25TZWFyY2giLCJTZWFyY2gub25TcGVjIiwiU2VhcmNoLnNhdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUJBQXVHLG1CQUFtQixDQUFDLENBQUE7QUFDM0gsK0JBQTZCLHlCQUM3QixDQUFDLENBRHFEO0FBQ3RELDZCQUFpQyx1QkFBdUIsQ0FBQyxDQUFBO0FBQ3pELCtCQUE2Qix5QkFBeUIsQ0FBQyxDQUFBO0FBRXZEO0lBbUJDQSxnQkFBWUEsY0FBOEJBLEVBQUVBLFdBQXlCQSxFQUFFQSxjQUE4QkE7UUFDcEdDLElBQUlBLENBQUNBLEdBQUdBLElBQUlBLHNCQUFXQSxFQUFFQSxDQUFDQTtRQUUxQkEsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0E7WUFDcEJBLElBQUlBLEVBQUVBLENBQUNBLEVBQUVBLEVBQUVBLHFCQUFVQSxDQUFDQSxRQUFRQSxDQUFDQTtTQUNqQ0EsQ0FBQ0EsQ0FBQ0E7UUFFSEEsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0E7WUFDdkJBLElBQUlBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBO1lBQ1ZBLE1BQU1BLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBO1lBQ1pBLE1BQU1BLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBO1NBQ2RBLENBQUNBLENBQUNBO1FBRU5BLElBQUlBLENBQUNBLGNBQWNBLEdBQUdBLGNBQWNBLENBQUNBO1FBQ2xDQSxJQUFJQSxDQUFDQSxjQUFjQSxHQUFHQSxjQUFjQSxDQUFDQTtRQUdyQ0EsRUFBRUEsQ0FBQUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQUEsQ0FBQ0E7WUFDcERBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLFFBQVFBLENBQUNBLE1BQU1BLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1FBQzVDQSxDQUFDQTtRQUNEQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxRQUFRQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUVqRUEsQ0FBQ0E7SUFFREQseUJBQVFBLEdBQVJBLFVBQVNBLENBQUNBO1FBQVZFLGlCQWNDQTtRQVpBQSxDQUFDQSxDQUFDQSxjQUFjQSxFQUFFQSxDQUFDQTtRQUNuQkEsRUFBRUEsQ0FBQUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFFMUJBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFVBQUFBLFFBQVFBO2dCQUNwRUEsS0FBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsUUFBUUEsQ0FBQ0E7WUFDdkJBLENBQUNBLEVBQUVBLFVBQUFBLFFBQVFBO2dCQUNWQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxnQkFBZ0JBLENBQUNBLENBQUNBO1lBQ2xDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNKQSxDQUFDQTtRQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUNQQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxjQUFjQSxFQUFFQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQTtRQUNoREEsQ0FBQ0E7SUFFRkEsQ0FBQ0E7SUFFREYsdUJBQU1BLEdBQU5BLFVBQU9BLENBQUNBO1FBQVJHLGlCQW9CQ0E7UUFsQkFBLENBQUNBLENBQUNBLGNBQWNBLEVBQUVBLENBQUNBO1FBQ25CQSxFQUFFQSxDQUFBQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUUxQkEsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsRUFBRUEsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsRUFBRUEsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBQUEsUUFBUUE7Z0JBQ25JQSxJQUFJQSxNQUFNQSxHQUFHQSxJQUFJQSxLQUFLQSxFQUFFQSxDQUFDQTtnQkFDekJBLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLElBQUlBLFFBQVFBLENBQUNBLENBQUFBLENBQUNBO29CQUMxQkEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsRUFBRUEsQ0FBQ0E7d0JBQ3JEQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDaENBLENBQUNBO29CQUFBQSxDQUFDQTtnQkFDSEEsQ0FBQ0E7Z0JBQ0VBLEtBQUlBLENBQUNBLEtBQUtBLEdBQUdBLE1BQU1BLENBQUNBO1lBQ3JCQSxDQUFDQSxFQUFFQSxVQUFBQSxRQUFRQTtnQkFDVkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxDQUFDQTtZQUNsQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDSkEsQ0FBQ0E7UUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDUEEsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsY0FBY0EsRUFBRUEsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0E7UUFDaERBLENBQUNBO0lBRUZBLENBQUNBO0lBRURILHFCQUFJQSxHQUFKQSxVQUFLQSxHQUFHQTtRQUNQSSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUNwQkEsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsTUFBTUEsRUFBRUEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDakVBLENBQUNBO0lBcEZGSjtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDVkEsUUFBUUEsRUFBRUEsUUFBUUE7WUFDbEJBLFdBQVdBLEVBQUNBLENBQUNBLCtCQUFjQSxFQUFFQSwyQkFBWUEsRUFBRUEsK0JBQWNBLENBQUNBO1NBQzFEQSxDQUFDQTtRQUNEQSxlQUFJQSxDQUFDQTtZQUNMQSxVQUFVQSxFQUFFQSxDQUFDQSx5QkFBY0EsRUFBRUEsZ0JBQUtBLENBQUNBO1lBQ2pDQSxXQUFXQSxFQUFFQSxpQ0FBaUNBO1NBQ2hEQSxDQUFDQTs7ZUE4RURBO0lBQURBLGFBQUNBO0FBQURBLENBckZBLEFBcUZDQSxJQUFBO0FBNUVZLGNBQU0sU0E0RWxCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXcsIGJvb3RzdHJhcCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMsIGZvcm1EaXJlY3RpdmVzLCBDb250cm9sR3JvdXAsIE5nRm9yfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge0hlYXJ0aHN0b25lQXBpfSBmcm9tICdzZXJ2aWNlcy9oZWFydGhzdG9uZUFwaSdcbmltcG9ydCB7RGVja1NlcnZpY2VzLCBDYXJkfSBmcm9tICdzZXJ2aWNlcy9EZWNrU2VydmljZXMnO1xuaW1wb3J0IHtTdG9yYWdlU2VydmljZX0gZnJvbSAnc2VydmljZXMvc3RvcmFnZVNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzZWFyY2gnLFxuXHRhcHBJbmplY3RvcjpbSGVhcnRoc3RvbmVBcGksIERlY2tTZXJ2aWNlcywgU3RvcmFnZVNlcnZpY2VdXG59KVxuQFZpZXcoe1xuXHRkaXJlY3RpdmVzOiBbZm9ybURpcmVjdGl2ZXMsIE5nRm9yXSxcbiAgXHR0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoe1xuXHRzZWFyY2hGb3JtOiBDb250cm9sR3JvdXA7XG5cdHNlYXJjaFNwZWM6IENvbnRyb2xHcm91cDtcblx0aGVhcnRoc3RvbmVBcGk6IEhlYXJ0aHN0b25lQXBpO1xuXHRkZWNrU2VydmljZTogRGVja1NlcnZpY2VzO1xuXHRzdG9yYWdlU2VydmljZTogU3RvcmFnZVNlcnZpY2U7XG5cdGRhdGFzOiBPYmplY3Q7XG5cdGRlY2s6IEFycmF5PFN0cmluZz47XG5cblx0XG5cdGNvbnN0cnVjdG9yKGhlYXJ0aHN0b25lQXBpOiBIZWFydGhzdG9uZUFwaSwgZGVja1NlcnZpY2U6IERlY2tTZXJ2aWNlcywgc3RvcmFnZVNlcnZpY2U6IFN0b3JhZ2VTZXJ2aWNlKSB7XG5cdFx0dmFyIGIgPSBuZXcgRm9ybUJ1aWxkZXIoKTtcblxuXHRcdHRoaXMuc2VhcmNoRm9ybSA9IGIuZ3JvdXAoe1xuXHQgICAgICBcdGNhcmQ6IFtcIlwiLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuXHQgICAgfSk7XG5cblx0ICAgIHRoaXMuc2VhcmNoU3BlYyA9IGIuZ3JvdXAoe1xuXHQgICAgICBcdG1hbmE6IFtcIlwiXSxcbiAgICAgIFx0XHRhdHRhY2s6IFtcIlwiXSxcbiAgICAgIFx0XHRoZWFsdGg6IFtcIlwiXVxuXHQgICAgfSk7XG5cblx0XHR0aGlzLmhlYXJ0aHN0b25lQXBpID0gaGVhcnRoc3RvbmVBcGk7XG5cdCAgICB0aGlzLnN0b3JhZ2VTZXJ2aWNlID0gc3RvcmFnZVNlcnZpY2U7XG5cdCAgICBcblx0ICAgIC8vIEluaXRpYWxpemUgZGVjayB3aXRoIGxvY2FsIHN0b3JhZ2Vcblx0ICAgIGlmKHRoaXMuc3RvcmFnZVNlcnZpY2UubG9hZEpzb24oJ2RlY2snKS5sZW5ndGggPT0gMCl7XG5cdCAgICBcdHRoaXMuc3RvcmFnZVNlcnZpY2Uuc2F2ZUpzb24oJ2RlY2snLCAnW10nKTtcblx0ICAgIH1cblx0ICAgIHRoaXMuZGVjayA9IEpTT04ucGFyc2UodGhpcy5zdG9yYWdlU2VydmljZS5sb2FkSnNvbignZGVjaycpKTtcblxuXHR9XG5cblx0b25TZWFyY2goZSl7XG5cblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0aWYodGhpcy5zZWFyY2hGb3JtLnZhbGlkKSB7IC8vIHJldHVybiB0cnVlIG9yIGZhbHNlLCBkZXBlbmRpbmcgb24gdGhlIGZvcm0gc3RhdGVcblx0XHRcdC8vU2VhcmNoIGNhcmQgb24gc3VibWl0XG5cdFx0XHR0aGlzLmhlYXJ0aHN0b25lQXBpLnNlYXJjaENhcmQodGhpcy5zZWFyY2hGb3JtLnZhbHVlLmNhcmQpLnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdCAgICBcdHRoaXMuZGF0YXMgPSByZXNwb25zZTtcblx0XHQgICAgfSwgcmVzcG9uc2UgPT4ge1xuXHRcdCAgICBcdGNvbnNvbGUubG9nKFwibG9hZGluZyBmYWlsZWRcIik7IC8vIFRoaXMgc2Vjb25kIGZ1bmN0aW9uIGlzIGNhbGxlZCBpZiBwcm9taXNlIGlzIHJlamVjdGVkXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS5lcnJvcihcImludmFsaWQgZm9ybVwiLCB0aGlzLnNlYXJjaEZvcm0pO1xuXHRcdH1cblxuXHR9XG5cblx0b25TcGVjKGUpe1xuXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGlmKHRoaXMuc2VhcmNoU3BlYy52YWxpZCkgeyAvLyByZXR1cm4gdHJ1ZSBvciBmYWxzZSwgZGVwZW5kaW5nIG9uIHRoZSBmb3JtIHN0YXRlXG5cdFx0XHQvL1NlYXJjaCBjYXJkIG9uIHN1Ym1pdFxuXHRcdFx0dGhpcy5oZWFydGhzdG9uZUFwaS5zZWFyY2hTcGVjKHRoaXMuc2VhcmNoU3BlYy52YWx1ZS5tYW5hLCB0aGlzLnNlYXJjaFNwZWMudmFsdWUuYXR0YWNrLCB0aGlzLnNlYXJjaFNwZWMudmFsdWUuaGVhbHRoKS50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0dmFyIGFycmF5cyA9IG5ldyBBcnJheSgpO1xuXHRcdFx0XHRmb3IgKHZhciBwcm9wIGluIHJlc3BvbnNlKXtcblx0XHRcdFx0XHRmb3IgKHZhciBpID0gcmVzcG9uc2VbcHJvcF0ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdFx0XHRcdGFycmF5cy5wdXNoKHJlc3BvbnNlW3Byb3BdW2ldKTtcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0ICAgIFx0dGhpcy5kYXRhcyA9IGFycmF5cztcblx0XHQgICAgfSwgcmVzcG9uc2UgPT4ge1xuXHRcdCAgICBcdGNvbnNvbGUubG9nKFwibG9hZGluZyBmYWlsZWRcIik7IC8vIFRoaXMgc2Vjb25kIGZ1bmN0aW9uIGlzIGNhbGxlZCBpZiBwcm9taXNlIGlzIHJlamVjdGVkXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS5lcnJvcihcImludmFsaWQgZm9ybVwiLCB0aGlzLnNlYXJjaFNwZWMpO1xuXHRcdH1cblx0XG5cdH1cblxuXHRzYXZlKGltZyl7XG5cdFx0dGhpcy5kZWNrLnB1c2goaW1nKTtcblx0XHR0aGlzLnN0b3JhZ2VTZXJ2aWNlLnNhdmVKc29uKCdkZWNrJywgSlNPTi5zdHJpbmdpZnkodGhpcy5kZWNrKSk7XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==