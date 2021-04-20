import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModulListPage } from './modul-list.page';

const routes: Routes = [
  {
    path: '',
    component: ModulListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulListPageRoutingModule {}
