import { Component, OnInit } from '@angular/core';
import { HelperClass } from 'src/app/helper-class';
// Duplicate import with the parent class HelperClass
import { MyService } from 'src/app/my-service.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class MyComponent extends HelperClass implements OnInit {

  // Duplicate injection with HelperClass
  constructor(private service: MyService) {
    super(service);
  }

  ngOnInit(): void {
    this.myService.log('my service called in MyComponent');
    this.helper_class_method();
  }

}
