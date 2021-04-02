import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calorie-calculator',
  templateUrl: './calorie-calculator.component.html',
  styleUrls: ['./calorie-calculator.component.scss'],
})
export class CalorieCalculatorComponent implements OnInit {

  private personalData: FormGroup;  

  constructor(private formBuilder: FormBuilder) { 
    this.personalData = this.formBuilder.group({
      height: [''],
      weight: [''],
      age: [''],
    });
  }

  ngOnInit() {}

}
