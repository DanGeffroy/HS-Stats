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


  @Input()
  sets
  constructor() {}

  ngOnInit() {
    setTimeout(function(){
      this.sets.forEach(function(element){
        this.doughnutChartLabels.push(element.name);
        this.doughnutChartData.push(element.cards.length)
      }.bind(this));
    }.bind(this), 7000);

  }

  // events
public chartClicked(e:any):void {
  console.log(e);
}

public chartHovered(e:any):void {
  console.log(e);
}

}
