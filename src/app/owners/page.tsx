import { Suspense } from 'react';
import { prisma } from '@/lib/db/prisma';
import Pagination from '@/components/Pagination';
import Skeleton from './Skeleton';
import OwnersList from './OwnersList';

interface OwnersPageProps {
    searchParams: { page: string };
}

export default async function OwnersPage({
    searchParams: { page = '1' },
}: OwnersPageProps) {
    const totalOwners = await prisma.owner.count();
    const pageSize = 18;
    const currentPage = parseInt(page);
    const totalPages = Math.ceil(totalOwners / pageSize);
    return (
        <>
            <h1 className='text-2xl font-bold text-secondary'>Lista nazwisk</h1>
            <Suspense fallback={<Skeleton />}>
                <OwnersList currentPage={currentPage} limit={pageSize} />
                <Pagination currentPage={currentPage} totalPages={totalPages} />
            </Suspense>
        </>
    );
}
