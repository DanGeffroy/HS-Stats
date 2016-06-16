import { Component, OnInit } from '@angular/core';
import { CardsService } from './cards.service';
import { InfosService } from './infos.service';
import { Card } from './card';
import { Infos } from './infos';
import { StatsComponent} from './stats/stats.component';
import {CardFinderComponent} from './card-finder/card-finder.component';



@Component({
  moduleId: module.id,
  selector: 'hs-stats-app',
  templateUrl: 'hs-stats.component.html',
  styleUrls: ['hs-stats.component.css'],
  directives: [StatsComponent,CardFinderComponent],
  providers: [
    CardsService,InfosService
  ]
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
    if(set !== "Slush" && set !== "Promo" && set !== "Missions" && set !== "Credits" && set !== "System" && set !== "Hero Skins" && set !== "Tavern Brawl"){
      this.sets = [...this.sets, {"name" : set, "cards" :response}];

      response.forEach(function(element){
        this.countries.push(element.name);
        this.allCards = [...this.allCards, element];
      }.bind(this));
    }
  }
  getInfos(){
    this.infosService
        .getInfos()
        .then(res => this.test(res));
  }

  test(res){
    this.infos = res;
    this.infos.sets.forEach(function(element, index, array) {
      if(element !== "Slush" && element !== "Promo" && element !== "Missions" && element !== "Credits" && element !== "System" && element !== "Hero Skins" && element !== "Tavern Brawl"){
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
