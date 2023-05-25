import { Seller } from '@prisma/client';
export declare class SellerEntity implements Seller {
    constructor(partial: Partial<SellerEntity>);
    id: number;
    name: string;
    userId: number;
}
