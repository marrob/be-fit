import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
        path:'auth-link',
        loadChildren: () => import('../auth/auth.module').then( m => m.AuthPageModule)
      },
      {
        path:'meal-selector',
        loadChildren: () => import('../meal-selector/meal-selector.module').then( m => m.MealSelectorPageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        //loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
        loadChildren: () => import('../modul-list/modul-list.module').then( m => m.ModulListPageModule)
      },
      {
        path: 'modul-list',
        loadChildren: () => import('../modul-list/modul-list.module').then( m => m.ModulListPageModule)
      },
      {
        path: 'budget-planner-example',
        loadChildren: () => import('../budget-planner-example/budget-planner-example.module').then( m => m.BudgetPlannerExamplePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/calorie-calculator',
        pathMatch: 'full'
      }
    ]
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
