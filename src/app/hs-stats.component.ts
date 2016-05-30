import { Component, OnInit } from '@angular/core';
import { CardsService } from './cards.service';
import { InfosService } from './infos.service';
import { Card } from './card';


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
  cards = {};
  infos = {};
  error: any;

  constructor( private cardsService: CardsService,  private infosService: InfosService) {}
  getAllCards() {
    this.cardsService
        .getAllCards()
        .then(Cards => this.cards = Cards);
  }
  getInfos(){
    this.infosService
        .getInfos()
        .then(Infos => this.infos = Infos);
  }

  ngOnInit() {
    this.getInfos();
  }
}
