import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
import { AddHoldingPageRoutingModule} from 'src/app/add-holding/add-holding-routing.module'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController, public holdingsService: { loadHoldings: () => void; fetchPrices: (arg0: any) => void; }) {

  }

  ionViewDidLoad(): void {
      this.holdingsService.loadHoldings();
  }

  addHolding(): void {
      this.navCtrl.push('AddHoldingPage');
  }

  goToCryptonator(): void {
      window.open('https://www.cryptonator.com/api', '_system');
  }

  refreshPrices(refresher: any): void {
      this.holdingsService.fetchPrices(refresher);
  }

}
