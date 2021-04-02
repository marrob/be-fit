import { Injectable } from "@angular/core";
import { CalorieKeys, CaloriesSummary } from "./calories.model";

@Injectable({
    providedIn: 'root',
   })
export class CalorieCalculatorService {
    private readonly calories = { protein: 4, carbohydrate: 4, fat: 9 }
    private _caloriesSummary: CaloriesSummary;

    public set caloriesSummary(value: CaloriesSummary) {
        this._caloriesSummary = value;
    }

    constructor() {}

    public calculateCalories(){
        return Object.keys(this.calories)
        .reduce((acc, currentValue: CalorieKeys) => acc + this.calculateCaloriesForNutrientGroup(currentValue), 0)
    }

    public calculateCaloriesForNutrientGroup(key: CalorieKeys): number{
       return this.calories[key] * this._caloriesSummary[key];
    }
}