import OwnerCard from '@/components/OwnerCard';
import getUserSession from '@/lib/getUserSession';
import Pagination from '@/components/Pagination';
import { getOwners } from '@/lib/actions';
import ListLayout from '@/components/ListLayout';

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
            <ListLayout>
                {owners.map((owner) => (
                    <li key={owner.id}>
                        <OwnerCard owner={owner} session={session} />
                    </li>
                ))}
            </ListLayout>
            <Pagination currentPage={currentPage} totalPages={totalPages} />
        </>
    );
}
