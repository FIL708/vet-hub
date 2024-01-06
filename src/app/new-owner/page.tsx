import prisma from '@/lib/db/prisma';
import Plus from '@/assets/plus.svg';
import { redirect } from 'next/navigation';
import AddOwnerForm from '@/components/AddOwnerForm';

export const metadata = {
    title: 'VetHub - Nowy właściciel',
};

async function addOwners(formData: FormData) {
    'use server';

    const firstName = formData.get('firstName')?.toString();
    const lastName = formData.get('lastName')?.toString();
    const isRedirected = !Boolean(formData.get('redirect'));
    console.log(firstName, lastName, isRedirected);
    // if (!firstName || !lastName) {
    //     throw Error('Missing required fields');
    // }

    // await prisma.owner.create({ data: { firstName, lastName } });
    document.getElementById('owner-form');
    isRedirected && redirect('/');
}

export default function NewOwnerPage() {
    return <AddOwnerForm />;
}
