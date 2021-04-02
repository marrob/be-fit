import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalorieCalculatorComponent } from './calorie-calculator.component';
import { CalorieCalculatorRoutingModule } from './calorie-calculator.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [CalorieCalculatorComponent],
  imports: [CommonModule, CalorieCalculatorRoutingModule, ReactiveFormsModule, FormsModule, IonicModule ],
  exports: [CalorieCalculatorComponent]
})
export class CalorieCalculatorModule { }
