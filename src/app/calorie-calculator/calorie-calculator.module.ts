import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalorieCalculatorComponent } from './calorie-calculator.component';
import { CalorieCalculatorRoutingModule } from './calorie-calculator.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CalorieSummaryComponent } from './calorie-summary/calorie-summary.component';
import { CalorieCalculatorService } from './calorie-summary/calories-calculator.service';



@NgModule({
  declarations: [CalorieCalculatorComponent, CalorieSummaryComponent],
  imports: [CommonModule, CalorieCalculatorRoutingModule, ReactiveFormsModule, FormsModule, IonicModule ],
  providers: [CalorieCalculatorService],
  exports: [CalorieCalculatorComponent]
})
export class CalorieCalculatorModule { }
