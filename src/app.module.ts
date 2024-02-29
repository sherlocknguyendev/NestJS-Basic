import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';

// App Module cha này bao gồm các App Module con (Modules con có thể bao gồm (hoặc không) các modules khác)
@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule { }
