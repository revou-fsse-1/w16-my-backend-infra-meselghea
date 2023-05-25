import { Product } from '@prisma/client';

export class ProductEntity implements Product {
    constructor(partial: Partial<ProductEntity>) {
        Object.assign(this, partial);
      }
      
    id: string;

    name: string;
    
    price: number;
    
    stockQty: number;

    sellerId: number;

    userId: number;

    createAt: Date;

    updateAt: Date;
}