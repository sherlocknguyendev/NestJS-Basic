import { Injectable } from '@nestjs/common';

@Injectable() //Provider.  Decorator 'Injectable' -> Để cho AppServie hoạt động được ở nơi khác
export class AppService {
  getHello(): string {
    return 'Hello World with VanQuoc';
  }
}
