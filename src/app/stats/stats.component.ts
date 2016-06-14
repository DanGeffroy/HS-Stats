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
  // Doughnut
   public doughnutChartLabels:string[] = [];
   public doughnutChartData:number[] = [];
   public doughnutChartType:string = 'doughnut';
   public doughnutChartColors: any[] = [{ backgroundColor: ["#ffcdd2", "#e53935", "#f06292", "#e1bee7","#7b1fa2","#3949ab","#2196f3","#81c784","#fdd835","#e65100"] }];

  @Input()
  sets
  constructor() {}

  ngOnInit() {
    setTimeout(function(){
        this.doughnutChartLabels =[];
        this.doughnutChartData = [];

      this.sets.forEach(function(element){
        this.doughnutChartLabels = [...this.doughnutChartLabels, element.name];
        this.doughnutChartData = [...this.doughnutChartData, element.cards.length];
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
