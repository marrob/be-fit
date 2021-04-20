import { Injectable } from '@angular/core';
import { IMenuItem } from './imenu-item';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  appName: string = 'be-fit';

  //You have to add the new comoponent link into the tabs-routing.module.ts
  debugMenuItems: IMenuItem[] = [
    { text: 'Auth', link: '/tabs/auth-link' },
    { text: 'Budget Planner', link:'/tabs/budget-planner-example'},
    { text: 'Calorie Calculator', link: '/tabs/calorie-calculator' },
    { text: 'Meal Selector', link: '/tabs/meal-selector' },
    { text: 'Teszt Komponens', link: '/test-link' },
  ];
  
  constructor() { }
}
