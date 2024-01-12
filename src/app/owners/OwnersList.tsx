import { prisma } from '@/lib/db/prisma';
import OwnerCard from './OwnerCard';
import { revalidatePath } from 'next/cache';

interface OwnersListProps {
    currentPage: number;
    limit: number;
}

export default async function OwnersList({
    currentPage,
    limit,
}: OwnersListProps) {
    const owners = await prisma.owner.findMany({
        include: {
            author: true,
        },
        take: limit,
        skip: (currentPage - 1) * limit,
        orderBy: { createdAt: 'desc' },
    });

    return (
        <ul className=' grid content-start gap-6 md:grid-cols-2 lg:h-[540px] lg:grid-cols-3'>
            {owners.map((owner) => (
                <li key={owner.id}>
                    <OwnerCard owner={owner} />
                </li>
            ))}
        </ul>
    );
}
