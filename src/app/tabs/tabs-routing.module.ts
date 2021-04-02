import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from '../components/test/test.component';
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
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
<<<<<<< HEAD
=======
      },
      {
        path: '',
        redirectTo: '/tabs/calorie-calculator',
        pathMatch: 'full'
>>>>>>> origin/main
      }
    ]
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
