import { prisma } from '@/lib/db/prisma';
import { redirect } from 'next/navigation';
import PetCard from '@/components/PetCard';
import getUserSession from '@/lib/getUserSession';
import ListLayout from '@/components/ListLayout';
import Link from 'next/link';

export const metadata = {
    title: 'VetHub - Twoje zwierzaki',
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
                Twoje imiona zwierząt
            </h1>
            {pets.length === 0 ? (
                <>
                    <p>
                        Na chwilę obecną nie dodano jeszcze żadnych nazwisk do
                        listy. Zrób swój pierwszy krok! 😊
                    </p>
                    <Link href='/new-pet' className='btn btn-primary'>
                        Dodaj nowe nazwisko
                    </Link>
                </>
            ) : (
                <ListLayout>
                    {pets.map((pet) => (
                        <li key={pet.id}>
                            <PetCard pet={pet} session={session} />
                        </li>
                    ))}
                </ListLayout>
            )}
        </>
    );
}
