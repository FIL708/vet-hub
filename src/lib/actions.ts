'use server';

import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { prisma } from './db/prisma';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { OwnerFormData, PetFormData } from '@/types';

export async function addOwner(formData: OwnerFormData) {
    const session = await getServerSession(authOptions);
    const { firstName, lastName, redirected } = formData;

    if (!firstName || !lastName) {
        throw Error('Missing required fields');
    }

    if (!session) {
        throw Error('Authentication Required');
    }

    await prisma.owner.create({
        data: { firstName, lastName, authorId: session.user.id },
    });

    if (redirected) {
        redirect('/');
    }
}

export async function addPet(formData: PetFormData) {
    const session = await getServerSession(authOptions);
    const { name, species, redirected } = formData;

    if (!name || !species) {
        throw Error('Missing required fields');
    }

    if (!session) {
        throw Error('Authentication Required');
    }

    await prisma.pet.create({
        data: { name, species, authorId: session.user.id },
    });

    if (redirected) {
        redirect('/');
    }
}
