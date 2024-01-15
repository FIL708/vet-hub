import { Suspense } from 'react';
import CardsSkeleton from '@/components/CardsSkeleton';
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
    const currentPage = parseInt(page);
    const pageSize = 18;
    return (
        <>
            <h1 className='text-2xl font-bold text-secondary'>Lista nazwisk</h1>

            <Suspense
                key={page}
                fallback={<CardsSkeleton pageSize={pageSize} />}
            >
                <OwnersList currentPage={currentPage} pageSize={pageSize} />
            </Suspense>
        </>
    );
}
