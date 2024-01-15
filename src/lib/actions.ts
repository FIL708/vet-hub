'use server';

import { redirect } from 'next/navigation';
import { prisma } from './db/prisma';
import { OwnerFormData, PetFormData } from '@/types';
import { revalidatePath } from 'next/cache';
import getUserSession from './getUserSession';

export async function addOwner(formData: OwnerFormData) {
    const session = await getUserSession();
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
    const session = await getUserSession();
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

export async function getOwners(limit: number, current: number) {
    const totalOwners = await prisma.owner.count();
    const totalPages = Math.ceil(totalOwners / limit);

    const owners = await prisma.owner.findMany({
        include: {
            author: true,
        },
        take: limit,
        skip: (current - 1) * limit,
        orderBy: { createdAt: 'desc' },
    });
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return { owners, totalPages };
}

export async function getPets(limit: number, current: number) {
    const totalPets = await prisma.pet.count();
    const totalPages = Math.ceil(totalPets / limit);

    const pets = await prisma.pet.findMany({
        include: {
            author: true,
        },
        take: limit,
        skip: (current - 1) * limit,
        orderBy: { createdAt: 'desc' },
    });
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return { pets, totalPages };
}

export async function deleteOwner(recordId: string, authorId: string | null) {
    const session = await getUserSession();

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
    const session = await getUserSession();

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
