import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { prisma } from '@/lib/db/prisma';
import { redirect } from 'next/navigation';
import OwnerCard from '@/components/OwnerCard';

export const metadata = {
    title: 'VetHub - Twoje zwierzaki',
};

export default async function UserOwnersPage() {
    const session = await getServerSession(authOptions);
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
                Dodane przez Ciebie zwierzaki
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
