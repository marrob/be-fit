import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModulListPageRoutingModule } from './modul-list-routing.module';

import { ModulListPage } from './modul-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModulListPageRoutingModule
  ],
  declarations: [ModulListPage]
})
export class ModulListPageModule {}
