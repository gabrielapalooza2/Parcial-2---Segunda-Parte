import {IsBoolean, IsMongoId, IsNotEmpty, IsString} from "class-validator";

export class CreateTaskDto {
    @IsNotEmpty()
    @IsString()
    title: string | undefined;
 
    @IsNotEmpty()
    @IsString()
    description?: string;

    @IsNotEmpty()
    @IsBoolean()
    completed?: boolean;

    @IsNotEmpty()
    @IsMongoId()
    userId?: string;
}
