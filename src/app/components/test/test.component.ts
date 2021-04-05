import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {}

  back():void{
    this.location.back();
  }

}
