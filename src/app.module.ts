import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ApiModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
