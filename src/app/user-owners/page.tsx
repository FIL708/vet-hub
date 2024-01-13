import { prisma } from '@/lib/db/prisma';
import { redirect } from 'next/navigation';
import OwnerCard from '@/components/OwnerCard';
import getUserSession from '@/lib/getUserSession';

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
            <h1 className='my-6 text-2xl font-bold text-secondary'>
                Twoje imiona zwierząt
            </h1>
            <ul className='grid min-h-[540px] content-start gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {owners.map((owner) => (
                    <li key={owner.id}>
                        <OwnerCard owner={owner} session={session} />
                    </li>
                ))}
            </ul>
        </>
    );
}
