import { Suspense } from 'react';
import Skeleton from './Skeleton';
import OwnersList from './OwnersList';

export default async function OwnersPage() {
    return (
        <>
            <h1 className='text-2xl font-bold text-secondary'>Lista nazwisk</h1>
            <Suspense fallback={<Skeleton />}>
                <OwnersList />
            </Suspense>
        </>
    );
}
