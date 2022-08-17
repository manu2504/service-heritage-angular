import { MyService } from 'src/app/my-service.service';

export class HelperClass {
  constructor(public myService: MyService) { }

  help_method() {
    console.log('help method');
  }
}
