var StorageService = (function () {
    function StorageService() {
    }
    StorageService.prototype.saveJson = function (key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    };
    StorageService.prototype.loadJson = function (key) {
        var json = JSON.parse(localStorage.getItem(key));
        return json ? json : [];
    };
    return StorageService;
})();
exports.StorageService = StorageService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3N0b3JhZ2VTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIlN0b3JhZ2VTZXJ2aWNlIiwiU3RvcmFnZVNlcnZpY2UuY29uc3RydWN0b3IiLCJTdG9yYWdlU2VydmljZS5zYXZlSnNvbiIsIlN0b3JhZ2VTZXJ2aWNlLmxvYWRKc29uIl0sIm1hcHBpbmdzIjoiQUFBQTtJQUFBQTtJQVdBQyxDQUFDQTtJQVRDRCxpQ0FBUUEsR0FBUkEsVUFBU0EsR0FBV0EsRUFBRUEsSUFBU0E7UUFDN0JFLFlBQVlBLENBQUNBLE9BQU9BLENBQUNBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO0lBQ2xEQSxDQUFDQTtJQUVERixpQ0FBUUEsR0FBUkEsVUFBU0EsR0FBV0E7UUFDbEJHLElBQUlBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLFlBQVlBLENBQUNBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBO1FBQ2pEQSxNQUFNQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxHQUFHQSxFQUFFQSxDQUFDQTtJQUMxQkEsQ0FBQ0E7SUFFSEgscUJBQUNBO0FBQURBLENBWEEsQUFXQ0EsSUFBQTtBQVhZLHNCQUFjLGlCQVcxQixDQUFBIiwiZmlsZSI6InNlcnZpY2VzL3N0b3JhZ2VTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFN0b3JhZ2VTZXJ2aWNlIHtcblxuICBzYXZlSnNvbihrZXk6IHN0cmluZywgZGF0YTogYW55KSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gIH1cblxuICBsb2FkSnNvbihrZXk6IHN0cmluZykge1xuICAgIGxldCBqc29uID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcbiAgICByZXR1cm4ganNvbiA/IGpzb24gOiBbXTtcbiAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9