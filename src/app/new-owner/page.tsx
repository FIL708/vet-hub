import prisma from '@/lib/db/prisma';
import Plus from '@/assets/plus.svg';
import { redirect } from 'next/navigation';

export const metadata = {
    title: 'VetHub - Nowy właściciel',
};

async function addOwners(formData: FormData) {
    'use server';

    const firstName = formData.get('firstName')?.toString();
    const lastName = formData.get('lastName')?.toString();

    if (!firstName || !lastName) {
        throw Error('Missing required fields');
    }

    await prisma.owner.create({ data: { firstName, lastName } });

    redirect('/');
}

export default function NewOwnerPage() {
    return (
        <form
            action={addOwners}
            className='flex w-full min-w-[300px] max-w-3xl flex-col gap-3 p-3'
        >
            <h1 className='text-lg font-bold text-primary'>
                Dodaj nowego właściciela
            </h1>
            <input
                required
                name='firstName'
                placeholder='Imię'
                className='input input-bordered w-full'
            />
            <input
                required
                type='text'
                name='lastName'
                placeholder='Nazwisko'
                className='input input-bordered w-full'
            />
            <div className='form-control'>
                <label className='label cursor-pointer'>
                    <span className='label-text'>Chcę dodać wiecej...</span>
                    <input
                        name='multiple'
                        type='checkbox'
                        className='checkbox'
                    />
                </label>
            </div>
            <button type='submit' className='btn btn-primary'>
                <Plus className='fill-current' />
                Dodaj właściciela
            </button>
        </form>
    );
}
