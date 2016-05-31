import { Component, OnInit } from '@angular/core';
import { CardsService } from './cards.service';
import { InfosService } from './infos.service';
import { Card } from './card';
import { Infos } from './infos';
declare var $:any;

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
    setTimeout(function(){   this.initIsotope(); }.bind(this), 5000);
  }

  ngOnInit() {
    this.getInfos();
  }

  initIsotope(){
        // quick search regex
        var qsRegex;

        // init Isotope
        var $grid = $('.grid').isotope({
          itemSelector: '.element-item',
          layoutMode: 'fitRows',
          filter: function() {
            return qsRegex ? $(this).text().match( qsRegex ) : true;
          }
        });

        // use value of search field to filter
        var $quicksearch = $('.quicksearch').keyup( debounce( function() {
          console.log("lol");
          qsRegex = new RegExp( $quicksearch.val(), 'gi' );
          $grid.isotope();
        }, 200 ) );

        // debounce so filtering doesn't happen every millisecond
        function debounce( fn, threshold ) {
          var timeout;
          return function debounced() {
            if ( timeout ) {
              clearTimeout( timeout );
            }
            function delayed() {
              fn();
              timeout = null;
            }
            timeout = setTimeout( delayed, threshold || 100 );
          }
        }

  }

}
