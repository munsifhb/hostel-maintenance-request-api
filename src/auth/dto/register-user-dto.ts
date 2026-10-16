import {
  IsString,
  IsOptional,
  IsNotEmpty,
  IsEmail,
  IsEnum,
  IsPhoneNumber,
  isString,
} from 'class-validator';
import { Role } from 'generated/prisma/enums';



export class RegisterUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsString()
  @IsPhoneNumber('NG')
  phone : string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email : string;

  

}