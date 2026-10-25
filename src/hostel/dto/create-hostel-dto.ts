import { IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";




export class CreateHostelDto {


    @IsString()
    @IsNotEmpty()
    name : string;

    @IsString()
    @IsNotEmpty()
    location : string;

    @IsString()
    @IsNotEmpty()
    roomNumbers : string;

    @IsString()
    @IsNotEmpty()
    @IsPhoneNumber('NG')
    contact : string
}