import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs';
import { of } from 'rxjs/observable/of';

interface Holding {
  crypto: string,
  currency: string,
  amount: number,
  value?: number
}

@Injectable({
  providedIn: 'root'
})
export class HoldingsService {

  public holdings: Holding[] = [];

  constructor(private http: HttpClient, private storage: Storage) {

  }

  addHolding(holding: Holding): void {

      this.holdings.push(holding);
      this.fetchPrices();
      this.saveHoldings();

  }

  removeHolding(holding): void {

      this.holdings.splice(this.holdings.indexOf(holding), 1);
      this.fetchPrices();
      this.saveHoldings();

  }

  saveHoldings(): void {
      this.storage.set('cryptoHoldings', this.holdings);
  }

  loadHoldings(): void {

      this.storage.get('cryptoHoldings').then(holdings => {

          if(holdings !== null){
              this.holdings = holdings;
              this.fetchPrices();
          }
      });

  }

  verifyHolding(holding): Observable<any> {
      return this.http.get('https://api.cryptonator.com/api/ticker/' + holding.crypto + '-' + holding.currency);
  }

  fetchPrices(refresher?): void {

      let requests = [];

      for(let holding of this.holdings){

          let request = this.http.get('https://api.cryptonator.com/api/ticker/' + holding.crypto + '-' + holding.currency);

          requests.push(request);

      }

      forkJoin(requests).subscribe(results => {

          results.forEach((result: any, index) => {

              this.holdings[index].value = result.ticker.price;

          });

          if(typeof(refresher) !== 'undefined'){
              refresher.complete();
          }

          this.saveHoldings();

      }, err => {

          if(typeof(refresher) !== 'undefined'){
              refresher.complete();
          }

      });

  }
}
