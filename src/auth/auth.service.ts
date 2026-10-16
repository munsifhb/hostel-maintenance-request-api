import { ConflictException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { RegisterUserDto } from './dto/register-user-dto';
import { CreateUserDto } from 'src/users/dto/create-user-dto';
import { Role } from 'generated/prisma/enums';



@Injectable()
export class AuthService {
    constructor(private usersService : UsersService) {}


    async registerUser(user : RegisterUserDto) {


        const existingUsername = await this.usersService.findByUsername(user.username);

if (existingUsername) {
  throw new ConflictException('Username already exists');
}


const existingEmail = await this.usersService.findByEmail(user.email);

if (existingEmail) {
  throw new ConflictException('Email already exists');
}


    const hashedPassword = await bcrypt.hash(user.password, 10);

    const newUser: CreateUserDto= {
  ...user,
  password: hashedPassword,
  role: Role.USER,
};

  return this.usersService.createUser(newUser);


    }
}
