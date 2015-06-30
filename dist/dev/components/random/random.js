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
var Random = (function () {
    function Random() {
    }
    Random = __decorate([
        angular2_1.Component({
            selector: 'random'
        }),
        angular2_1.View({
            templateUrl: './components/random/random.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Random);
    return Random;
})();
exports.Random = Random;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmFuZG9tL3JhbmRvbS50cyJdLCJuYW1lcyI6WyJSYW5kb20iLCJSYW5kb20uY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUJBQThCLG1CQUFtQixDQUFDLENBQUE7QUFFbEQ7SUFBQUE7SUFRb0JDLENBQUNBO0lBUnJCRDtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDVkEsUUFBUUEsRUFBRUEsUUFBUUE7U0FDbEJBLENBQUNBO1FBQ0RBLGVBQUlBLENBQUNBO1lBQ0pBLFdBQVdBLEVBQUVBLGlDQUFpQ0E7U0FDL0NBLENBQUNBOztlQUdtQkE7SUFBREEsYUFBQ0E7QUFBREEsQ0FScEIsQUFRcUJBLElBQUE7QUFBUixjQUFNLFNBQUUsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3JhbmRvbS9yYW5kb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld30gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdyYW5kb20nXG59KVxuQFZpZXcoe1xuICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9yYW5kb20vcmFuZG9tLmh0bWwnXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBSYW5kb217fVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9