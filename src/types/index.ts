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
