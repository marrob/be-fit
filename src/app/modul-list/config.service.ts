import { Injectable } from '@angular/core';
import { IMenuItem } from './imenu-item';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  appName: string = 'be-fit';

  //You have to add the new comoponent link into the tabs-routing.module.ts
  debugMenuItems: IMenuItem[] = [
    { text: 'Auth', link: '/auth' },
    { text: 'Budget Planner', link:'/main-path/tabs/budget-planner-example'},
    { text: 'Calorie Calculator', link: '/main-path/tabs/calorie-calculator' },
    { text: 'Meal Selector', link: '/main-path/tabs/meal-selector' },
    { text: 'Teszt Komponens', link: '/test-link' },
  ];
  
  constructor() { }
}
