import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { RegisterUserDto } from './dto/register-user-dto';
import { CreateUserDto } from 'src/users/dto/create-user-dto';
import { Role } from 'generated/prisma/enums';
import { LoginDto } from './dto/login-user-dto';
import { JwtService } from '@nestjs/jwt';



@Injectable()
export class AuthService {
constructor(
  private usersService: UsersService,
  private jwtService: JwtService,
) {}


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

    async loginUser(user: LoginDto) {
  let foundUser;

  if (user.identifier.includes('@')) {
    foundUser = await this.usersService.findByEmail(
      user.identifier,
    );
  } else {
    foundUser = await this.usersService.findByUsername(
      user.identifier,
    );
  }


  if (!foundUser){
    throw new UnauthorizedException('Invalid credentials');
  }

  const isPasswordValid = await bcrypt.compare(
  user.password,
  foundUser.password,
);

if (!isPasswordValid) {
  throw new UnauthorizedException('Invalid credentials');
}

const payload = {
  sub: foundUser.id,
  username: foundUser.username,
  role: foundUser.role,
};

const accessToken = await this.jwtService.signAsync(payload);

return {
  accessToken,
  user: {
    id: foundUser.id,
    username: foundUser.username,
    email: foundUser.email,
    role: foundUser.role,
  },
};
}
}
