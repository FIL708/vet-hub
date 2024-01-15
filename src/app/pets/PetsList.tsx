import { prisma } from '@/lib/db/prisma';
import PetCard from '@/components/PetCard';
import getUserSession from '@/lib/getUserSession';
import { getPets } from '@/lib/actions';
import Pagination from '@/components/Pagination';

interface PetsListProps {
    currentPage: number;
    pageSize: number;
}

export default async function PetsList({
    currentPage,
    pageSize,
}: PetsListProps) {
    const session = await getUserSession();
    const { pets, totalPages } = await getPets(pageSize, currentPage);

    return (
        <>
            <ul className='grid min-h-[540px] content-start gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {pets.map((pet) => (
                    <li key={pet.id}>
                        <PetCard pet={pet} session={session} />
                    </li>
                ))}
            </ul>
            <Pagination currentPage={currentPage} totalPages={totalPages} />
        </>
    );
}
