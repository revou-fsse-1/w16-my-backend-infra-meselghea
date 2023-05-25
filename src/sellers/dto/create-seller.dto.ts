import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength} from 'class-validator';

export class CreateSellerDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    @MinLength(5)
    @MaxLength(50)
    name: string;
    
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    userId: number;
}
