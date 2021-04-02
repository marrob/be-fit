import { Component, OnInit } from '@angular/core';
import { CalorieCalculatorService } from './calories-calculator.service';
import { CalorieKeys, CaloriesSummary } from './calories.model';

@Component({
  selector: 'app-calorie-summary',
  templateUrl: './calorie-summary.component.html',
  styleUrls: ['./calorie-summary.component.scss'],
})
export class CalorieSummaryComponent implements OnInit {

  private caloriesSummary: CaloriesSummary = { protein: 140, fat: 100, carbohydrate: 400};
  private caloriesByNutrientGroup = {};
  private allCalories: number;
  constructor(private calorieCalculatorService: CalorieCalculatorService) { }

  ngOnInit() {
    this.calorieCalculatorService.caloriesSummary = this.caloriesSummary;
    this.allCalories = this.calorieCalculatorService.calculateCalories();
    Object.keys(this.caloriesSummary).map((key: CalorieKeys) => {
      this.caloriesByNutrientGroup[key] = this.calorieCalculatorService.calculateCaloriesForNutrientGroup(key)
    })
  }

}
