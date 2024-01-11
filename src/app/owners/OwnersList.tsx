import { prisma } from '@/lib/db/prisma';
import OwnerCard from './OwnerCard';
import { revalidatePath } from 'next/cache';

export default async function OwnersList() {
    const owners = await prisma.owner.findMany({
        include: {
            author: true,
        },
    });
    revalidatePath('/owners');

    return (
        <ul className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {owners.map((owner) => (
                <li key={owner.id}>
                    <OwnerCard owner={owner} />
                </li>
            ))}
        </ul>
    );
}
