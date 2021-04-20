import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BudgetPlannerExamplePage } from './budget-planner-example.page';

const routes: Routes = [
  {
    path: '',
    component: BudgetPlannerExamplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BudgetPlannerExamplePageRoutingModule {}
