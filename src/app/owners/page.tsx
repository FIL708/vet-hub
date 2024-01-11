import OwnerCard from '@/components/OwnerCard';
import { prisma } from '@/lib/db/prisma';

export default async function OwnersPage() {
    const owners = await prisma.owner.findMany({
        include: {
            author: true,
        },
    });

    return (
        <div>
            <OwnerCard owner={owners[0]} />
        </div>
    );
}
