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
  cards : Card[];
  infos : Infos;
  error: any;

  constructor( private cardsService: CardsService,  private infosService: InfosService) {}

  getCardsBySet(set) {
    this.cardsService
        .getCardsBySet(set)
        .then(res => this.cards.push(res));
  }
  getInfos(){
    this.infosService
        .getInfos()
        .then(res => this.infos = res);
  }

  ngOnInit() {
    console.log(this.cards)
    this.getInfos();
    this.getCardsBySet("Basic");
    setTimeout(function(){ console.log(this.cards)}, 5000);

  }
}
