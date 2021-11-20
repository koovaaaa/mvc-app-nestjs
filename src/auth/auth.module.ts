import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { FacebookStrategy } from './facebook.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, FacebookStrategy],
})
export class AuthModule {}
