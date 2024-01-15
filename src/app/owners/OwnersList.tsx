import OwnerCard from '@/components/OwnerCard';
import getUserSession from '@/lib/getUserSession';
import Pagination from '@/components/Pagination';
import { getOwners } from '@/lib/actions';
import ListLayout from '@/components/ListLayout';
import Link from 'next/link';

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

    if (owners.length === 0) {
        return (
            <>
                <p>
                    Na chwilę obecną nie dodano jeszcze żadnych nazwisk do
                    listy. Możesz być pierwszy! 😊
                </p>
                <Link href='/new-owner' className='btn btn-primary'>
                    Dodaj nowe nazwisko
                </Link>
            </>
        );
    }

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
