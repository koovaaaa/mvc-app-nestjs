import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async facebookLogin(req) {
    const user = {
      firstName: req.user.user.firstName,
      lastName: req.user.user.lastName,
      email: req.user.user.email,
    };
    return { user };
  }
}
