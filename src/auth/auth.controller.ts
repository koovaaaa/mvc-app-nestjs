import { Controller, Get, Render, Req, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Facebook Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('facebook')
  @UseGuards(AuthGuard('facebook'))
  async facebookAuth() {}

  @Get('facebook/redirect')
  @UseGuards(AuthGuard('facebook'))
  @Render('fb-data')
  async facebookAuthRedirect(@Req() req) {
    return await this.authService.facebookLogin(req);
  }
}
