import { Injectable } from '@nestjs/common';

// Service là nơi kết nối tới database để lấy dữ liệu
// Trong trường hợp này thì Model ở Service luôn

@Injectable() //Provider.  Decorator 'Injectable' -> Để cho AppServie hoạt động được ở nơi khác
export class AppService {
  getHello(): string {
    return 'Hello World with VanQuoc';
  }
}
