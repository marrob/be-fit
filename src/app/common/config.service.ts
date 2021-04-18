import { Injectable } from '@angular/core';
import { IMenuItem } from './imenu-item';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  appName: string = 'be-fit';

  //You have to add the new comoponent link into the tabs-routing.module.ts
  debugMenuItems: IMenuItem[] = [
    { text: 'Login', link: '/tabs/login-link' },
    { text: 'Budget Planner', link:'/tabs/budget-planner-link'},
    { text: 'Calorie Calculator', link: '/tabs/calorie-calculator' },
    { text: 'Meal Selector', link: '/meal-selector-link' },
    { text: 'Teszt Komponens', link: '/test-link' },
  ];
  
  constructor() { }
}
