import { Injectable } from '@angular/core';
import { MyService } from 'src/app/my-service.service';

@Injectable({
  providedIn: 'root'
})
export class HelperClass {
  constructor(public myService: MyService) { }

  helper_class_method() {
    console.log('helper_class method');
  }
}
