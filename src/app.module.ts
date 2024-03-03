import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// App Module cha này bao gồm các App Module con (Modules con có thể bao gồm (hoặc không) các modules khác)
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
