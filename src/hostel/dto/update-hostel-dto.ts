import { IsOptional, IsPhoneNumber, IsString } from "class-validator";




export class UpdateHostelDto {


    @IsString()
    @IsOptional()
    name?: string

    @IsString()
    @IsOptional()
    location?: string

    @IsString()
    @IsOptional()
    roomnumbers?: string

}