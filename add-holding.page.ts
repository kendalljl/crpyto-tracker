import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { HoldingsService } from '../holdings.service';

@Component({
  selector: 'app-add-holding',
  templateUrl: './add-holding.page.html',
  styleUrls: ['./add-holding.page.scss'],
})
export class AddHoldingPage {

  private cryptoUnavailable: boolean = false;
    private checkingValidity: boolean = false;
    private cryptoCode: string;
    private displayCurrency: string;
    private amountHolding;

    constructor(private navCtrl: NavController, private holdingsService: HoldingsService) {

    }

    addHolding(): void {

        this.cryptoUnavailable = false;
        this.checkingValidity = true;

        let holding = {
            crypto: this.cryptoCode,
            currency: this.displayCurrency,
            amount: this.amountHolding || 0
        };

        this.holdingsService.verifyHolding(holding).subscribe((result) => {

            this.checkingValidity = false;

            if(result.success){
                this.holdingsService.addHolding(holding);
                this.navCtrl.pop();
            } else {
                this.cryptoUnavailable = true;
            }

        }, (err) => {    

            this.checkingValidity = false;

        });

    }

}
