import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ProductsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createProductDto: CreateProductDto): import("@prisma/client").Prisma.Prisma__ProductClient<import("@prisma/client").Product, never>;
    findAll(query: string): import("@prisma/client").Prisma.PrismaPromise<import("@prisma/client").Product[]>;
    groupBy(query: string): import("@prisma/client").Prisma.GetProductGroupByPayload<{
        by: ("name" | "price")[];
        where: {
            name: {
                contains: string;
                mode: "insensitive";
            };
        };
        _sum: {
            stockQty: true;
        };
    }>;
    findOne(id: string): import("@prisma/client").Prisma.Prisma__ProductClient<import("@prisma/client").Product, never>;
    update(id: string, updateProductDto: UpdateProductDto): import("@prisma/client").Prisma.Prisma__ProductClient<import("@prisma/client").Product, never>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__ProductClient<import("@prisma/client").Product, never>;
}
