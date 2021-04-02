import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CalorieCalculatorComponent } from './calorie-calculator.component';

const routes: Routes = [
  {
    path: '',
    component: CalorieCalculatorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalorieCalculatorRoutingModule {}