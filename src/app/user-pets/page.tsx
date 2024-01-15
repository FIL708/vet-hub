import { prisma } from '@/lib/db/prisma';
import { redirect } from 'next/navigation';
import PetCard from '@/components/PetCard';
import getUserSession from '@/lib/getUserSession';
import ListLayout from '@/components/ListLayout';

export const metadata = {
    title: 'VetHub - Twoje nazwiska',
};

export default async function UserPetsPage() {
    const session = await getUserSession();
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
            <h1 className='text-2xl font-bold text-secondary'>
                Twoje nazwiska
            </h1>
            <ListLayout>
                {pets.map((pet) => (
                    <li key={pet.id}>
                        <PetCard pet={pet} session={session} />
                    </li>
                ))}
            </ListLayout>
        </>
    );
}
