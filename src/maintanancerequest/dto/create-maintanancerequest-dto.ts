import { IsEnum, IsInt, IsNotEmpty, IsString, Min } from "class-validator";
import { Category } from 'generated/prisma/enums';





export class CreateMaintananceRequestDto {
    @IsString()
    @IsNotEmpty()
    title : string;
    
    @IsNotEmpty()
    @IsString()
    description : string;

    @IsEnum(Category)
    @IsNotEmpty()
    category : Category;


   @IsInt()
  @Min(1)
  hostelId: number;


}