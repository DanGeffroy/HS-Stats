import { Component, OnInit } from '@angular/core';
import { CardsService } from './cards.service';
import { InfosService } from './infos.service';
import { Card } from './card';
import { Infos } from './infos';
import { CardName} from './card-name.pipe';
import { StatsComponent} from './stats/stats.component';

import {PaginatePipe, PaginationControlsCmp, PaginationService} from 'ng2-pagination';

@Component({
  moduleId: module.id,
  selector: 'hs-stats-app',
  templateUrl: 'hs-stats.component.html',
  styleUrls: ['hs-stats.component.css'],
  directives: [PaginationControlsCmp,StatsComponent],
  providers: [
    CardsService,InfosService,PaginationService
  ],
  pipes: [CardName,PaginatePipe]
})
export class HSStatsAppComponent  implements OnInit{
  title = 'hs-stats works!';
  allCards = []
  sets : Object[] = [];
  infos : Infos;
  error: any;

  public query = '';
  public countries = [];
    public filteredList = [];
    public elementRef;

  constructor( private cardsService: CardsService,  private infosService: InfosService) {}

  getCardsBySet(set) {
    this.cardsService
        .getCardsBySet(set)
        .then(response => this.test2(response, set) );
  }
  test2(response, set){
    this.sets = [...this.sets, {"name" : set, "cards" :response}];

    response.forEach(function(element){
      this.countries.push(element.name);
      this.allCards = [...this.allCards, element];
    }.bind(this));
  }
  getInfos(){
    this.infosService
        .getInfos()
        .then(res => this.test(res));
  }

  test(res){
    this.infos = res;
    this.infos.sets.forEach(function(element, index, array) {
      if(element !== "Slush" && element !== "Promo"){
          this.getCardsBySet(element);
      }

    }.bind(this));
  }

  ngOnInit() {
    this.getInfos();
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

}
