import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { Public } from './decorator/customize';


// Controller ở Nest phụ trách luôn phần điều hướng trang (cách hoạt động là cộng gộp route Controller với Method)

@Controller()
export class AppController {

  // Inject Provider. --> Khởi tạo appService trong Contructor để ứng dụng hiểu và biết được sự tồn tại của service này khi khởi tạo đối tượng AppController
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService
    // private readonly userSerice: UserService
  ) { }


  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  handleLogin(@Request() req) {
    return this.authService.login(req.user)
  }


  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
