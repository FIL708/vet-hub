'use server';

import { redirect } from 'next/navigation';
import prisma from './db/prisma';

import { OwnerFormData, PetFormData } from '@/types';

export async function addOwner(formData: OwnerFormData) {
    const { firstName, lastName, redirected } = formData;
    if (!firstName || !lastName) {
        throw Error('Missing required fields');
    }

    await prisma.owner.create({ data: { firstName, lastName } });

    if (redirected) {
        redirect('/');
    }
}

export async function addPet(formData: PetFormData) {
    const { name, species, redirected } = formData;

    if (!name || !species) {
        throw Error('Missing required fields');
    }

    await prisma.pet.create({ data: { name, species } });

    if (redirected) {
        redirect('/');
    }
}