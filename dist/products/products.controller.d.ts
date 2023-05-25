import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(CreateProductDto: CreateProductDto): import("@prisma/client").Prisma.Prisma__ProductClient<import("@prisma/client").Product, never>;
    findAll(query: string): import("@prisma/client").Prisma.PrismaPromise<import("@prisma/client").Product[]>;
    groupBy(query: string): Promise<(import("@prisma/client").Prisma.PickArray<import("@prisma/client").Prisma.ProductGroupByOutputType, ("name" | "price")[]> & {
        _sum: {
            stockQty: number;
        };
    })[]>;
    findOne(id: string): Promise<import("@prisma/client").Product>;
    update(id: string, updateProductDto: UpdateProductDto): import("@prisma/client").Prisma.Prisma__ProductClient<import("@prisma/client").Product, never>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__ProductClient<import("@prisma/client").Product, never>;
}
