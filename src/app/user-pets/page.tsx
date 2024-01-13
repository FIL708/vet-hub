import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { prisma } from '@/lib/db/prisma';
import { redirect } from 'next/navigation';
import PetCard from '@/components/PetCard';

export const metadata = {
    title: 'VetHub - Twoje nazwiska',
};

export default async function UserPetsPage() {
    const session = await getServerSession(authOptions);
    if (!session) {
        redirect('/not-permitted');
    }
    const pets = await prisma.pet.findMany({
        where: { authorId: session.user.id },
        include: {
            author: true,
        },
    });
    return (
        <>
            <h1 className='my-6 text-2xl font-bold text-secondary'>
                Dodane przez Ciebie nazwiska
            </h1>
            <ul className='grid min-h-[540px] content-start gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {pets.map((pet) => (
                    <li key={pet.id}>
                        <PetCard pet={pet} session={session} />
                    </li>
                ))}
            </ul>
        </>
    );
}
