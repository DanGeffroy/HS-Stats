import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Card } from './card';
import { Sets } from './sets';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class CardsService {
  private cardsUrl = "https://omgvamp-hearthstone-v1.p.mashape.com/";

  constructor(private http: Http) {}
  getAllCards(): Promise<Sets> {
    let headers = new Headers({"X-Mashape-Key": "HY0cJ4Jkl7mshqqWiolxzLFNuqQ4p1vXxc3jsnJLglrzEOvIyV"});
     return this.http.get(this.cardsUrl+"cards",{headers: headers})
                .toPromise()
                .then(response => response.json().data)
                .catch(this.handleError);
   }

  getCardsBySet(set): Promise<Object[]> {
    let headers = new Headers({"X-Mashape-Key": "HY0cJ4Jkl7mshqqWiolxzLFNuqQ4p1vXxc3jsnJLglrzEOvIyV"});
     return this.http.get(this.cardsUrl+"cards/sets/"+set,{headers: headers})
                .toPromise()
                .then(response => JSON.parse(response.text()))
                .catch(this.handleError);
   }
   private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  test(response){
    console.log(response);
    console.log(JSON.parse(response.text()))
  }
}
