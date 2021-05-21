import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
        path: 'modul-list',
        loadChildren: () => import('../modul-list/modul-list.module').then( m => m.ModulListPageModule)
      },
      {
        path: 'budget-planner-example',
        loadChildren: () => import('../budget-planner-example/budget-planner-example.module').then( m => m.BudgetPlannerExamplePageModule)
      },
      {
        path: '',
        redirectTo: '/main-path/tabs/calorie-calculator',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/main-path/tabs/calorie-calculator',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
