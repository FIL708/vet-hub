import PetCard from '@/components/PetCard';
import getUserSession from '@/lib/getUserSession';
import { getPets } from '@/lib/actions';
import Pagination from '@/components/Pagination';
import ListLayout from '@/components/ListLayout';

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
            <ListLayout>
                {pets.map((pet) => (
                    <li key={pet.id}>
                        <PetCard pet={pet} session={session} />
                    </li>
                ))}
            </ListLayout>
            <Pagination currentPage={currentPage} totalPages={totalPages} />
        </>
    );
}
