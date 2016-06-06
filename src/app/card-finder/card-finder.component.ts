import { Component, OnInit, Input} from '@angular/core';
import { CardName} from './card-name.pipe';
import {PaginatePipe, PaginationControlsCmp, PaginationService} from 'ng2-pagination';

@Component({
  moduleId: module.id,
  selector: 'app-card-finder',
  templateUrl: 'card-finder.component.html',
  styleUrls: ['card-finder.component.css'],
  directives:[PaginationControlsCmp],
  providers:[PaginationService],
  pipes: [CardName,PaginatePipe]
})
export class CardFinderComponent implements OnInit {
  @Input()
  allCards
  @Input()
  sets
  @Input()
  infos
  @Input()
  query
  @Input()
  countries
  @Input()
  filteredList
  @Input()
  elementRef

  constructor() {}

  ngOnInit() {
  }
  filter() {
      if (this.query !== ""){
          this.filteredList = this.countries.filter(function(el){
              return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
          }.bind(this));
      }else{
          this.filteredList = [];
      }
  }

  select(item){
      this.query = item;
      this.filteredList = [];
  }

  handleClick(event){
   var clickedComponent = event.target;
   var inside = false;
   do {
       if (clickedComponent === this.elementRef.nativeElement) {
           inside = true;
       }
      clickedComponent = clickedComponent.parentNode;
   } while (clickedComponent);
    if(!inside){
        this.filteredList = [];
    }
  }

  flipPanel(){
    document.querySelector("#flip-toggle").classList.toggle("flip")
    console.log("fliped")

  }

}
