import CardSkeleton from '@/components/CardsSkeleton';
import { Suspense } from 'react';
import PetsList from './PetsList';
import { prisma } from '@/lib/db/prisma';
import Pagination from '@/components/Pagination';

export const metadata = {
    title: 'VetHub - Zwierzaki',
};

interface PetsPageProps {
    searchParams: { page: string };
}

export default async function PetsPage({
    searchParams: { page = '1' },
}: PetsPageProps) {
    const totalPets = await prisma.pet.count();
    const pageSize = 18;
    const currentPage = parseInt(page);
    const totalPages = Math.ceil(totalPets / pageSize);
    return (
        <>
            <h1 className='text-2xl font-bold text-secondary'>
                Lista zwierząt
            </h1>

            <Suspense fallback={<CardSkeleton />}>
                <PetsList currentPage={currentPage} limit={pageSize} />
            </Suspense>

            <Pagination currentPage={currentPage} totalPages={totalPages} />
        </>
    );
}
