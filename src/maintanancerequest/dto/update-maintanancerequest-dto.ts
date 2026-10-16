import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Category, Status } from 'generated/prisma/enums';





export class UpdateMaintananceRequestDto {
    @IsString()
    @IsOptional()
    title : string;
    
    @IsOptional()
    @IsString()
    description : string;

    @IsEnum(Category)
    @IsOptional()
    category : Category;


    @IsEnum(Status)
    @IsOptional()
    status : Status


}