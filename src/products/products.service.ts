import { Injectable , NotFoundException} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}
  
  create(createProductDto: CreateProductDto) {
    return this.prisma.product.create({ data: createProductDto });
  }

  findAll(query: string) {
    return this.prisma.product.findMany({ 
      where: {
        name: { contains: query,
          mode: 'insensitive',
        },
      },
    }); 
  }
  groupBy(query: string) {
    const totalQty = this.prisma.product.groupBy({
      by: ['name', 'price'],
  where: {
    name: { contains: query,
    mode: 'insensitive',
  },
  },
    _sum: {
        stockQty: true,
      },
    })
    if (!totalQty) {
      throw new NotFoundException(`No product found for name: ${query}`);
    }
    return totalQty
    }

findOne(id: string) {
  return this.prisma.product.findUnique({ where:  {id} });
}

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.prisma.product.update({
      where: { id },
      data: updateProductDto,
    });
  }

  remove(id: string) {
    return this.prisma.product.delete({ where: { id } });
  }
}
