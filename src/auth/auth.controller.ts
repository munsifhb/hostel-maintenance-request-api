import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register-user-dto';

@Controller('auth')
export class AuthController {

    constructor(private authService : AuthService) {}


    @Post('register')
    async registerUser(@Body() user : RegisterUserDto){
        return this.authService.registerUser(user)
    }
}
