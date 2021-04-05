import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/common/config.service';
import { IMenuItem } from 'src/app/common/imenu-item';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.scss'],
})
export class ComponentListComponent implements OnInit {


  items:IMenuItem[]= this.config.debugMenuItems;

  constructor(private config:ConfigService) {}


  ngOnInit() {}

}
