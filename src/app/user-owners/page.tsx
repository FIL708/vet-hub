import { prisma } from '@/lib/db/prisma';
import { redirect } from 'next/navigation';
import OwnerCard from '@/components/OwnerCard';
import getUserSession from '@/lib/getUserSession';
import ListLayout from '@/components/ListLayout';
import Link from 'next/link';

export const metadata = {
    title: 'VetHub - Twoje nazwiska',
};

export default async function UserOwnersPage() {
    const session = await getUserSession();
    if (!session) {
        redirect('/not-permitted');
    }
    const owners = await prisma.owner.findMany({
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
            {owners.length === 0 ? (
                <>
                    <p>
                        Na chwilę obecną nie dodano jeszcze żadnych nazwisk do
                        listy. Zrób swój pierwszy krok! 😊
                    </p>
                    <Link href='/new-owner' className='btn btn-primary'>
                        Dodaj nowe nazwisko
                    </Link>
                </>
            ) : (
                <ListLayout>
                    {owners.map((owner) => (
                        <li key={owner.id}>
                            <OwnerCard owner={owner} session={session} />
                        </li>
                    ))}
                </ListLayout>
            )}
        </>
    );
}
