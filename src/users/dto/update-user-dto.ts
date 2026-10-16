import {
  IsString,
  IsOptional,
  IsNotEmpty,
  IsEmail,
  IsEnum,
} from 'class-validator';




export class UpdateUserDto {
  
  @IsOptional()
  @IsString()
  name?: string;


  @IsOptional()
  @IsString()
  username: string;


  
  @IsOptional()
  @IsString()
  password?: string;


}