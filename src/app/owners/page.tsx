import OwnerCard from '@/components/OwnerCard';
import OwnersList from '@/components/OwnersList';
import { prisma } from '@/lib/db/prisma';

export default async function OwnersPage() {
    const owners = await prisma.owner.findMany({
        include: {
            author: true,
        },
    });

    return (
        <>
            <h1 className='text-2xl font-bold text-secondary'>Lista nazwisk</h1>
            <OwnersList ownersList={owners} />
        </>
    );
}
