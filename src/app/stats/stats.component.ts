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
   public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
   public doughnutChartData:number[] = [350, 450, 100];
   public doughnutChartType:string = 'doughnut';


  @Input()
  sets
  constructor() {}

  ngOnInit() {
  }

}
