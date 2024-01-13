import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { prisma } from '@/lib/db/prisma';
import PetCard from './PetCard';

interface PetsListProps {
    currentPage: number;
    limit: number;
}

export default async function PetsList({ currentPage, limit }: PetsListProps) {
    const session = await getServerSession(authOptions);
    const pets = await prisma.pet.findMany({
        include: {
            author: true,
        },
        take: limit,
        skip: (currentPage - 1) * limit,
        orderBy: { createdAt: 'desc' },
    });
    return (
        <ul className='grid content-start gap-6 md:grid-cols-2 lg:min-h-[540px] lg:grid-cols-3'>
            {pets.map((pet) => (
                <li key={pet.id}>
                    <PetCard pet={pet} session={session} />
                </li>
            ))}
        </ul>
    );
}
