import { Prisma } from '@prisma/client';

export interface OwnerFormData {
    firstName: string;
    lastName: string;
    redirected: boolean;
}

export interface PetFormData {
    name: string;
    species:
        | 'pies'
        | 'kot'
        | 'koń'
        | 'kawia'
        | 'królik'
        | 'chomik'
        | 'inny'
        | '';
    redirected: boolean;
}

export type OwnerWithUser = Prisma.OwnerGetPayload<{
    include: { author: true };
}>;
