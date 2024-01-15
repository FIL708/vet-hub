import CardSkeleton from '@/components/CardsSkeleton';
import { Suspense } from 'react';
import PetsList from './PetsList';

export const metadata = {
    title: 'VetHub - Zwierzaki',
};

interface PetsPageProps {
    searchParams: { page: string };
}

export default async function PetsPage({
    searchParams: { page = '1' },
}: PetsPageProps) {
    const currentPage = parseInt(page);
    const pageSize = 18;

    return (
        <>
            <h1 className='text-2xl font-bold text-secondary'>
                Lista zwierząt
            </h1>

            <Suspense fallback={<CardSkeleton pageSize={pageSize} />}>
                <PetsList currentPage={currentPage} pageSize={pageSize} />
            </Suspense>
        </>
    );
}
