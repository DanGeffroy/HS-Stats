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
        // Doughnut
        this.doughnutChartLabels = [];
        this.doughnutChartData = [];
        this.doughnutChartType = 'doughnut';
        this.doughnutChartColors = [{ backgroundColor: ["#ffcdd2", "#e53935", "#f06292", "#e1bee7", "#7b1fa2", "#3949ab", "#2196f3", "#81c784", "#fdd835", "#e65100"] }];
    }
    StatsComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            this.doughnutChartLabels = [];
            this.doughnutChartData = [];
            this.sets.forEach(function (element) {
                this.doughnutChartLabels = this.doughnutChartLabels.concat([element.name]);
                this.doughnutChartData = this.doughnutChartData.concat([element.cards.length]);
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