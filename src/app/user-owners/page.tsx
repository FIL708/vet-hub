import { prisma } from '@/lib/db/prisma';
import { redirect } from 'next/navigation';
import OwnerCard from '@/components/OwnerCard';
import getUserSession from '@/lib/getUserSession';
import ListLayout from '@/components/ListLayout';

export const metadata = {
    title: 'VetHub - Twoje zwierzaki',
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
                Twoje imiona zwierząt
            </h1>
            <ListLayout>
                {owners.map((owner) => (
                    <li key={owner.id}>
                        <OwnerCard owner={owner} session={session} />
                    </li>
                ))}
            </ListLayout>
        </>
    );
}
