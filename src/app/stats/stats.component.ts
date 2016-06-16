import { Component, OnInit ,Input} from '@angular/core';

import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';
import 'chartjs';
import {CHART_DIRECTIVES} from 'ng2-charts';


@Component({
  moduleId: module.id,
  selector: 'app-stats',
  templateUrl: 'stats.component.html',
  styleUrls: ['stats.component.css'],
  directives:[CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class StatsComponent implements OnInit {
  public barChartOptions:any = {
     scaleShowVerticalLines: false,
     responsive: true
   };
   public barChartLabels:string[] = [];
   public barChartType:string = 'bar';
   public barChartLegend:boolean = true;

  // public doughnutChartColors: any[] = [{ backgroundColor: ["#ffce56", "#84587B", "#2F5898", "#D6D2CF"] }];

   public barChartData:any[] = [
     {data: [], label:'Legendaries'},
     {data: [], label:'Epic'},
     {data: [], label:'Rare'},
     {data: [], label:'Common'}
   ];

  @Input()
  sets
  constructor() {}

  ngOnInit() {
    setTimeout(function(){
        this.barChartLabels =[];
        this.barChartData[0].data = [];

      this.sets.forEach(function(element){
        this.barChartLabels = [...this.barChartLabels, element.name];
        var legNumber = 0;
        var epicNumebr = 0;
        var rareNumber = 0;
        var commonNumber = 0
        element.cards.forEach(function(element){
          if(element.rarity ==="Legendary"){
            legNumber++;
          }
          if(element.rarity ==="Epic"){
            epicNumebr++;
          }
          if(element.rarity ==="Rare"){
            rareNumber++;
          }
          if(element.rarity ==="Common"){
            commonNumber++;
          }

        }.bind(this));
        this.barChartData[0].data = [...this.barChartData[0].data, legNumber];
        this.barChartData[1].data = [...this.barChartData[1].data, epicNumebr];
        this.barChartData[2].data = [...this.barChartData[2].data, rareNumber];
        this.barChartData[3].data = [...this.barChartData[3].data, commonNumber];

      }.bind(this));
    }.bind(this), 5000);

  }

  // events
public chartClicked(e:any):void {
  console.log(e);
}

public chartHovered(e:any):void {
  console.log(e);
}

}
