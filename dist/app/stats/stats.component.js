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
var common_1 = require('@angular/common');
require('chartjs');
var ng2_charts_1 = require('ng2-charts');
var StatsComponent = (function () {
    function StatsComponent() {
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = [];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        // public doughnutChartColors: any[] = [{ backgroundColor: ["#ffce56", "#84587B", "#2F5898", "#D6D2CF"] }];
        this.barChartData = [
            { data: [], label: 'Legendaries' },
            { data: [], label: 'Epic' },
            { data: [], label: 'Rare' },
            { data: [], label: 'Common' }
        ];
        this.numberOfCards = 0;
    }
    StatsComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            this.barChartLabels = [];
            this.barChartData[0].data = [];
            this.sets.forEach(function (element) {
                this.barChartLabels = this.barChartLabels.concat([element.name]);
                var legNumber = 0;
                var epicNumebr = 0;
                var rareNumber = 0;
                var commonNumber = 0;
                element.cards.forEach(function (element) {
                    this.numberOfCards++;
                    if (element.rarity === "Legendary") {
                        legNumber++;
                    }
                    if (element.rarity === "Epic") {
                        epicNumebr++;
                    }
                    if (element.rarity === "Rare") {
                        rareNumber++;
                    }
                    if (element.rarity === "Common") {
                        commonNumber++;
                    }
                }.bind(this));
                this.barChartData[0].data = this.barChartData[0].data.concat([legNumber]);
                this.barChartData[1].data = this.barChartData[1].data.concat([epicNumebr]);
                this.barChartData[2].data = this.barChartData[2].data.concat([rareNumber]);
                this.barChartData[3].data = this.barChartData[3].data.concat([commonNumber]);
            }.bind(this));
        }.bind(this), 5000);
    };
    // events
    StatsComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    StatsComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], StatsComponent.prototype, "sets", void 0);
    StatsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-stats',
            templateUrl: 'stats.component.html',
            styleUrls: ['stats.component.css'],
            directives: [ng2_charts_1.CHART_DIRECTIVES, common_1.NgClass, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], StatsComponent);
    return StatsComponent;
}());
exports.StatsComponent = StatsComponent;
//# sourceMappingURL=stats.component.js.map