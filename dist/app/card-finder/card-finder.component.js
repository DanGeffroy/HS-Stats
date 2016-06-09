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
var card_name_pipe_1 = require('./card-name.pipe');
var ng2_pagination_1 = require('ng2-pagination');
var CardFinderComponent = (function () {
    function CardFinderComponent() {
    }
    CardFinderComponent.prototype.ngOnInit = function () {
    };
    CardFinderComponent.prototype.filter = function () {
        if (this.query !== "") {
            this.filteredList = this.countries.filter(function (el) {
                return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
            }.bind(this));
        }
        else {
            this.filteredList = [];
        }
    };
    CardFinderComponent.prototype.select = function (item) {
        this.query = item;
        this.filteredList = [];
    };
    CardFinderComponent.prototype.handleClick = function (event) {
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
    CardFinderComponent.prototype.flipPanel = function () {
        document.querySelector("#flip-toggle").classList.toggle("flip");
        console.log("fliped");
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CardFinderComponent.prototype, "allCards", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CardFinderComponent.prototype, "sets", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CardFinderComponent.prototype, "infos", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CardFinderComponent.prototype, "query", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CardFinderComponent.prototype, "countries", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CardFinderComponent.prototype, "filteredList", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CardFinderComponent.prototype, "elementRef", void 0);
    CardFinderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-card-finder',
            templateUrl: 'card-finder.component.html',
            styleUrls: ['card-finder.component.css'],
            directives: [ng2_pagination_1.PaginationControlsCmp],
            providers: [ng2_pagination_1.PaginationService],
            pipes: [card_name_pipe_1.CardName, ng2_pagination_1.PaginatePipe]
        }), 
        __metadata('design:paramtypes', [])
    ], CardFinderComponent);
    return CardFinderComponent;
}());
exports.CardFinderComponent = CardFinderComponent;
//# sourceMappingURL=card-finder.component.js.map