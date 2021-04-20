import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BudgetPlannerExamplePageRoutingModule } from './budget-planner-example-routing.module';

import { BudgetPlannerExamplePage } from './budget-planner-example.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BudgetPlannerExamplePageRoutingModule
  ],
  declarations: [BudgetPlannerExamplePage]
})
export class BudgetPlannerExamplePageModule {}
