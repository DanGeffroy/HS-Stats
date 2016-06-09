"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var CardsService = (function () {
    function CardsService(http) {
        this.http = http;
        this.cardsUrl = "https://omgvamp-hearthstone-v1.p.mashape.com/";
    }
    CardsService.prototype.getAllCards = function () {
        var headers = new http_1.Headers({ "X-Mashape-Key": "HY0cJ4Jkl7mshqqWiolxzLFNuqQ4p1vXxc3jsnJLglrzEOvIyV" });
        return this.http.get(this.cardsUrl + "cards", { headers: headers })
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    CardsService.prototype.getCardsBySet = function (set) {
        var headers = new http_1.Headers({ "X-Mashape-Key": "HY0cJ4Jkl7mshqqWiolxzLFNuqQ4p1vXxc3jsnJLglrzEOvIyV" });
        return this.http.get(this.cardsUrl + "cards/sets/" + set, { headers: headers })
            .toPromise()
            .then(function (response) { return JSON.parse(response.text()); })
            .catch(this.handleError);
    };
    CardsService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    CardsService.prototype.test = function (response) {
        console.log(response);
        console.log(JSON.parse(response.text()));
    };
    CardsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CardsService);
    return CardsService;
}());
exports.CardsService = CardsService;
//# sourceMappingURL=cards.service.js.map