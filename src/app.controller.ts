import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiTags('Hello')
  @Get()
  @Render('index')
  getHello() {
    return { message: this.appService.getHello() };
  }
}
