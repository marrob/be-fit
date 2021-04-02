import { Injectable } from '@angular/core';
import { IMenuItem } from './imenu-item';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  appName: string = 'be-fit';

  //You have to add the new comoponent link into the app-routing.module.ts
  debugMenuItems: IMenuItem[] = [
    { text: 'Teszt Komponens', link: '/test-link' },
  ];
  
  constructor() { }
}
