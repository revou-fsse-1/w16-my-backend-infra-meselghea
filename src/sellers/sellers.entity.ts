import { Seller } from '@prisma/client';

export class SellerEntity  implements Seller {
    constructor(partial: Partial<SellerEntity>) {
        Object.assign(this, partial);
      }
    id: number;

    name: string;
    
    userId: number;
}