import { Suspense } from 'react';
import { prisma } from '@/lib/db/prisma';
import Pagination from '@/components/Pagination';
import CardSkeleton from '@/components/CardSkeleton';
import OwnersList from './OwnersList';

export const metadata = {
    title: 'VetHub - Nazwiska',
};

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

            <Suspense fallback={<CardSkeleton />}>
                <OwnersList currentPage={currentPage} limit={pageSize} />
            </Suspense>

            <Pagination currentPage={currentPage} totalPages={totalPages} />
        </>
    );
}
