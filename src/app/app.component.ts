import { Component, OnInit } from '@angular/core';
import { HelperClass } from 'src/app/helper-class';
// Duplicate import with the parent class HelperClass
import { MyServiceService } from 'src/app/my-service.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class MyComponent extends HelperClass implements OnInit {

  constructor(private service: MyServiceService) {
    // Duplicate injection with HelperClass
    super(service);
  }

  ngOnInit(): void {
    this.myService.log('a white cat');
  }

}
