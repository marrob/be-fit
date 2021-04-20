import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config.service';
import { IMenuItem } from './imenu-item';

@Component({
  selector: 'app-modul-list',
  templateUrl: './modul-list.page.html',
  styleUrls: ['./modul-list.page.scss'],
})
export class ModulListPage implements OnInit {

  items:IMenuItem[]= this.config.debugMenuItems;

  constructor(private config:ConfigService) {}

  ngOnInit() {
  }

}
