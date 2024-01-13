import { prisma } from '@/lib/db/prisma';
import PetCard from '@/components/PetCard';
import getUserSession from '@/lib/getUserSession';

interface PetsListProps {
    currentPage: number;
    limit: number;
}

export default async function PetsList({ currentPage, limit }: PetsListProps) {
    const session = await getUserSession();
    const pets = await prisma.pet.findMany({
        include: {
            author: true,
        },
        take: limit,
        skip: (currentPage - 1) * limit,
        orderBy: { createdAt: 'desc' },
    });
    return (
        <ul className='grid min-h-[540px] content-start gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {pets.map((pet) => (
                <li key={pet.id}>
                    <PetCard pet={pet} session={session} />
                </li>
            ))}
        </ul>
    );
}
