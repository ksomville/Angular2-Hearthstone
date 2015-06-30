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
/// <reference path="../typings/tsd.d.ts" />
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var search_1 = require('./components/search/search');
var random_1 = require('./components/random/random');
var deck_1 = require('./components/deck/deck');
var App = (function () {
    function App() {
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'app'
        }),
        router_1.RouteConfig([
            { path: '/search', component: search_1.Search, as: 'search' },
            { path: '/random', component: random_1.Random, as: 'random' },
            { path: '/deck', component: deck_1.Deck, as: 'deck' }
        ]),
        angular2_1.View({
            templateUrl: './app.html',
            directives: [router_1.RouterOutlet, router_1.RouterLink]
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
angular2_1.bootstrap(App, [router_1.routerInjectables]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6WyJBcHAiLCJBcHAuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsQUFDQSw0Q0FENEM7QUFDNUMseUJBQXlDLG1CQUFtQixDQUFDLENBQUE7QUFDN0QsdUJBQXVFLGlCQUFpQixDQUFDLENBQUE7QUFFekYsdUJBQXFCLDRCQUE0QixDQUFDLENBQUE7QUFDbEQsdUJBQXFCLDRCQUE0QixDQUFDLENBQUE7QUFDbEQscUJBQW1CLHdCQUF3QixDQUFDLENBQUE7QUFFNUM7SUFBQUE7SUFjQUMsQ0FBQ0E7SUFkREQ7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1RBLFFBQVFBLEVBQUVBLEtBQUtBO1NBQ2hCQSxDQUFDQTtRQUNEQSxvQkFBV0EsQ0FBQ0E7WUFDWEEsRUFBRUEsSUFBSUEsRUFBRUEsU0FBU0EsRUFBRUEsU0FBU0EsRUFBRUEsZUFBTUEsRUFBRUEsRUFBRUEsRUFBRUEsUUFBUUEsRUFBRUE7WUFDcERBLEVBQUVBLElBQUlBLEVBQUVBLFNBQVNBLEVBQUVBLFNBQVNBLEVBQUVBLGVBQU1BLEVBQUVBLEVBQUVBLEVBQUVBLFFBQVFBLEVBQUVBO1lBQ3BEQSxFQUFFQSxJQUFJQSxFQUFFQSxPQUFPQSxFQUFFQSxTQUFTQSxFQUFFQSxXQUFJQSxFQUFFQSxFQUFFQSxFQUFFQSxNQUFNQSxFQUFFQTtTQUMvQ0EsQ0FBQ0E7UUFDREEsZUFBSUEsQ0FBQ0E7WUFDSkEsV0FBV0EsRUFBRUEsWUFBWUE7WUFDekJBLFVBQVVBLEVBQUVBLENBQUNBLHFCQUFZQSxFQUFFQSxtQkFBVUEsQ0FBQ0E7U0FDdkNBLENBQUNBOztZQUdEQTtJQUFEQSxVQUFDQTtBQUFEQSxDQWRBLEFBY0NBLElBQUE7QUFFRCxvQkFBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLDBCQUFpQixDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG5pbXBvcnQge0NvbXBvbmVudCwgVmlldywgYm9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge1JvdXRlQ29uZmlnLCBSb3V0ZXJPdXRsZXQsIFJvdXRlckxpbmssIHJvdXRlckluamVjdGFibGVzfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5pbXBvcnQge1NlYXJjaH0gZnJvbSAnLi9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2gnO1xuaW1wb3J0IHtSYW5kb219IGZyb20gJy4vY29tcG9uZW50cy9yYW5kb20vcmFuZG9tJztcbmltcG9ydCB7RGVja30gZnJvbSAnLi9jb21wb25lbnRzL2RlY2svZGVjayc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcCdcbn0pXG5AUm91dGVDb25maWcoW1xuICB7IHBhdGg6ICcvc2VhcmNoJywgY29tcG9uZW50OiBTZWFyY2gsIGFzOiAnc2VhcmNoJyB9LFxuICB7IHBhdGg6ICcvcmFuZG9tJywgY29tcG9uZW50OiBSYW5kb20sIGFzOiAncmFuZG9tJyB9LFxuICB7IHBhdGg6ICcvZGVjaycsIGNvbXBvbmVudDogRGVjaywgYXM6ICdkZWNrJyB9XG5dKVxuQFZpZXcoe1xuICB0ZW1wbGF0ZVVybDogJy4vYXBwLmh0bWwnLFxuICBkaXJlY3RpdmVzOiBbUm91dGVyT3V0bGV0LCBSb3V0ZXJMaW5rXVxufSlcbmNsYXNzIEFwcCB7XG5cbn1cblxuYm9vdHN0cmFwKEFwcCwgW3JvdXRlckluamVjdGFibGVzXSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=