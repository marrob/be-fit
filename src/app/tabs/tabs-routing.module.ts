import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetPlannerComponent } from '../components/budget-planner/budget-planner.component';
import { LoginComponent } from '../components/login/login.component';
import { TestComponent } from '../components/test/test.component';
import { MealSelectorComponent } from '../meal-selector/meal-selector.component';
import { Tab1Page } from '../tab1/tab1.page';
import { TabsPage } from './tabs.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'calorie-calculator',
        loadChildren: () => import('../calorie-calculator/calorie-calculator.module').then(m => m.CalorieCalculatorModule)
      },
      {
        path:'login-link',
        component:LoginComponent
//        loadChildren: () => import('../components/login/login.component').then(m => m.LoginComponent)
      },
      {
        path:'budget-planner-link',
        component:BudgetPlannerComponent
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/calorie-calculator',
        pathMatch: 'full'
      }
    ]
  },
  {
    path:'meal-selector-link',
    component:MealSelectorComponent
  },
  {
    path:'test-link',
    component:TestComponent
  },
  {
    path: 'tab1',
    component: Tab1Page
  },
  {
    path: '',
    redirectTo: '/tabs/calorie-calculator',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
