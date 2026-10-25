import { Body, Controller, Post, Res } from '@nestjs/common';
import type { Response } from 'express';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register-user-dto';
import { LoginDto } from './dto/login-user-dto';

@Controller('auth')
export class AuthController {

    constructor(private authService : AuthService) {}


    @Post('register')
    async registerUser(@Body() user : RegisterUserDto){
        return this.authService.registerUser(user)
    }

@Post('login')
async loginUser(
  @Body() loginUser: LoginDto,
  @Res({ passthrough: true }) response: Response,
) {
  const result = await this.authService.loginUser(loginUser);

  response.cookie('accessToken', result.accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 1000,
    path: '/',
  });

  return {
    message: 'Login successful',
    user: result.user,
  };
}
}
