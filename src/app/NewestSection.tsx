import OwnerCard from '@/components/OwnerCard';
import PetCard from '@/components/PetCard';
import { prisma } from '@/lib/db/prisma';

export default async function NewestSection() {
    const [pets, owners] = await prisma.$transaction([
        prisma.pet.findMany({
            take: 3,
            orderBy: { createdAt: 'desc' },
            include: { author: true },
        }),
        prisma.owner.findMany({
            take: 3,
            orderBy: { createdAt: 'desc' },
            include: { author: true },
        }),
    ]);

    return (
        <section>
            <h1 className='my-6 text-3xl font-bold text-primary'>
                Ostatnio dodane
            </h1>
            <ul className='grid content-start gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {pets.map((pet) => (
                    <li key={pet.id}>
                        <PetCard pet={pet} indicator={false} />
                    </li>
                ))}

                {owners.map((owner) => (
                    <li key={owner.id}>
                        <OwnerCard owner={owner} />
                    </li>
                ))}
            </ul>
        </section>
    );
}
