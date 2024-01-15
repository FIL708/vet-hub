import OwnerCard from '@/components/OwnerCard';
import getUserSession from '@/lib/getUserSession';
import Pagination from '@/components/Pagination';
import { getOwners } from '@/lib/actions';

interface OwnersListProps {
    currentPage: number;
    pageSize: number;
}

export default async function OwnersList({
    currentPage,
    pageSize,
}: OwnersListProps) {
    const session = await getUserSession();
    const { owners, totalPages } = await getOwners(pageSize, currentPage);

    return (
        <>
            <ul className='grid min-h-[540px] content-start gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {owners.map((owner) => (
                    <li key={owner.id}>
                        <OwnerCard owner={owner} session={session} />
                    </li>
                ))}
            </ul>
            <Pagination currentPage={currentPage} totalPages={totalPages} />
        </>
    );
}
