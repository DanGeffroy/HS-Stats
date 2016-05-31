import { Component, OnInit } from '@angular/core';
import { CardsService } from './cards.service';
import { InfosService } from './infos.service';
import { Card } from './card';
import { Infos } from './infos';

@Component({
  moduleId: module.id,
  selector: 'hs-stats-app',
  templateUrl: 'hs-stats.component.html',
  styleUrls: ['hs-stats.component.css'],
  providers: [
    CardsService,InfosService
  ]
})
export class HSStatsAppComponent  implements OnInit{
  title = 'hs-stats works!';
  sets : Object[] = [];
  infos : Infos;
  error: any;

  constructor( private cardsService: CardsService,  private infosService: InfosService) {}

  getCardsBySet(set) {
    this.cardsService
        .getCardsBySet(set)
        .then(response => this.sets.push({"name" : set, "cards" :response}));
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
}
