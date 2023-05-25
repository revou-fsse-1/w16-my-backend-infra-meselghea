import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength} from 'class-validator';
  
export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    @MinLength(5)
    @MaxLength(50)
    name: string;
    
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    price: number;
    
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    stockQty: number;
    
    @IsNumber()
    @ApiProperty({ required: false, nullable: true })
    sellerId: number;
    
    @IsNumber()
    @ApiProperty({ required: false, nullable: true })
    userId: number;
}
