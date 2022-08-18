import { Component, OnInit } from '@angular/core';
import { HelperClass } from 'src/app/helper-class';

@Component({
  selector: 'app-my-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class MyComponent implements OnInit {

  // Duplicate injection with HelperClass
  constructor(
    private helper: HelperClass
  ) { }

  ngOnInit(): void {
    this.helper.myService.log('my service called in MyComponent');
    this.helper.helper_class_method();
  }
}
