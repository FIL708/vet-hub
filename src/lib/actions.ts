'use server';

import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { prisma } from './db/prisma';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { OwnerFormData, PetFormData } from '@/types';
import { revalidatePath } from 'next/cache';

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

export async function deleteOwner(recordId: string, authorId: string | null) {
    const session = await getServerSession(authOptions);

    if (!session) {
        throw Error('Authentication Required');
    }

    if (authorId !== session?.user.id) {
        throw Error('Operation not permitted');
    }
    const record = await prisma.owner.findUnique({ where: { id: recordId } });

    if (!record) {
        throw Error('Record not found');
    }

    await prisma.owner.delete({ where: { id: recordId } });

    revalidatePath('/owners');
}

export async function deletePet(recordId: string, authorId: string | null) {
    const session = await getServerSession(authOptions);

    if (!session) {
        throw Error('Authentication Required');
    }

    if (authorId !== session?.user.id) {
        throw Error('Operation not permitted');
    }
    const record = await prisma.pet.findUnique({ where: { id: recordId } });

    if (!record) {
        throw Error('Record not found');
    }

    await prisma.pet.delete({ where: { id: recordId } });

    revalidatePath('/pets');
}
