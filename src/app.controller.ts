import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// Controller ở Nest phụ trách luôn phần điều hướng trang (cách hoạt động là cộng gộp route Controller với Method)

@Controller()
export class AppController {

  // Inject Provider. --> Khởi tạo appService trong Contructor để ứng dụng hiểu và biết được sự tồn tại của service này khi khởi tạo đối tượng AppController
  constructor(
    private readonly appService: AppService,
    // private readonly userSerice: UserService
  ) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
