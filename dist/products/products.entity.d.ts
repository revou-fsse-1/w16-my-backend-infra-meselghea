import { Product } from '@prisma/client';
export declare class ProductEntity implements Product {
    constructor(partial: Partial<ProductEntity>);
    id: string;
    name: string;
    price: number;
    stockQty: number;
    sellerId: number;
    userId: number;
    createAt: Date;
    updateAt: Date;
}
