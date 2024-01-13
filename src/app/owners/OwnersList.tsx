import { prisma } from '@/lib/db/prisma';
import OwnerCard from '@/components/OwnerCard';
import getUserSession from '@/lib/getUserSession';

interface OwnersListProps {
    currentPage: number;
    limit: number;
}

export default async function OwnersList({
    currentPage,
    limit,
}: OwnersListProps) {
    const session = await getUserSession();
    const owners = await prisma.owner.findMany({
        include: {
            author: true,
        },
        take: limit,
        skip: (currentPage - 1) * limit,
        orderBy: { createdAt: 'desc' },
    });

    return (
        <ul className='grid min-h-[540px] content-start gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {owners.map((owner) => (
                <li key={owner.id}>
                    <OwnerCard owner={owner} session={session} />
                </li>
            ))}
        </ul>
    );
}
