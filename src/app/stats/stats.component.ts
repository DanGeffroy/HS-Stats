import { Component, OnInit ,Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-stats',
  templateUrl: 'stats.component.html',
  styleUrls: ['stats.component.css']
})
export class StatsComponent implements OnInit {
  @Input()
  sets
  constructor() {}

  ngOnInit() {
  }

}
