import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddHoldingPageRoutingModule } from './add-holding-routing.module';

import { AddHoldingPage } from './add-holding.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddHoldingPageRoutingModule
  ],
  declarations: [AddHoldingPage]
})
export class AddHoldingPageModule {}
