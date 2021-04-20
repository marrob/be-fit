import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MealSelectorPage } from './meal-selector.page';

const routes: Routes = [
  {
    path: '',
    component: MealSelectorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MealSelectorPageRoutingModule {}
