import { MyService } from 'src/app/my-service.service';

export class HelperClass {
  constructor(public myService: MyService) { }

  helper_class_method() {
    console.log('helper_class method');
  }
}
