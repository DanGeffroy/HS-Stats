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
var cards_service_1 = require('./cards.service');
var infos_service_1 = require('./infos.service');
var stats_component_1 = require('./stats/stats.component');
var card_finder_component_1 = require('./card-finder/card-finder.component');
var HSStatsAppComponent = (function () {
    function HSStatsAppComponent(cardsService, infosService) {
        this.cardsService = cardsService;
        this.infosService = infosService;
        this.title = 'hs-stats works!';
        this.allCards = [];
        this.sets = [];
        this.query = '';
        this.countries = [];
        this.filteredList = [];
    }
    HSStatsAppComponent.prototype.getCardsBySet = function (set) {
        var _this = this;
        this.cardsService
            .getCardsBySet(set)
            .then(function (response) { return _this.test2(response, set); });
    };
    HSStatsAppComponent.prototype.test2 = function (response, set) {
        this.sets = this.sets.concat([{ "name": set, "cards": response }]);
        response.forEach(function (element) {
            this.countries.push(element.name);
            this.allCards = this.allCards.concat([element]);
        }.bind(this));
    };
    HSStatsAppComponent.prototype.getInfos = function () {
        var _this = this;
        this.infosService
            .getInfos()
            .then(function (res) { return _this.test(res); });
    };
    HSStatsAppComponent.prototype.test = function (res) {
        this.infos = res;
        this.infos.sets.forEach(function (element, index, array) {
            if (element !== "Slush" && element !== "Promo" && element !== "Missions" && element !== "Credits" && element !== "System" && element !== "Hero Skins" && element !== "Tavern Brawl") {
                this.getCardsBySet(element);
            }
        }.bind(this));
    };
    HSStatsAppComponent.prototype.ngOnInit = function () {
        this.getInfos();
    };
    HSStatsAppComponent.prototype.filter = function () {
        if (this.query !== "") {
            this.filteredList = this.countries.filter(function (el) {
                return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
            }.bind(this));
        }
        else {
            this.filteredList = [];
        }
    };
    HSStatsAppComponent.prototype.select = function (item) {
        this.query = item;
        this.filteredList = [];
    };
    HSStatsAppComponent.prototype.handleClick = function (event) {
        var clickedComponent = event.target;
        var inside = false;
        do {
            if (clickedComponent === this.elementRef.nativeElement) {
                inside = true;
            }
            clickedComponent = clickedComponent.parentNode;
        } while (clickedComponent);
        if (!inside) {
            this.filteredList = [];
        }
    };
    HSStatsAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hs-stats-app',
            templateUrl: 'hs-stats.component.html',
            styleUrls: ['hs-stats.component.css'],
            directives: [stats_component_1.StatsComponent, card_finder_component_1.CardFinderComponent],
            providers: [
                cards_service_1.CardsService, infos_service_1.InfosService
            ]
        }), 
        __metadata('design:paramtypes', [cards_service_1.CardsService, infos_service_1.InfosService])
    ], HSStatsAppComponent);
    return HSStatsAppComponent;
}());
exports.HSStatsAppComponent = HSStatsAppComponent;
//# sourceMappingURL=hs-stats.component.js.map