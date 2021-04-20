import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MealSelectorPageRoutingModule } from './meal-selector-routing.module';

import { MealSelectorPage } from './meal-selector.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MealSelectorPageRoutingModule
  ],
  declarations: [MealSelectorPage]
})
export class MealSelectorPageModule {}
