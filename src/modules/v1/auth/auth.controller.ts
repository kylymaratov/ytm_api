import { Controller, Post, Get } from '@nestjs/common';
//
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('create')
  public createUser() {}

  @Get('google')
  googleAuth() {}
}
