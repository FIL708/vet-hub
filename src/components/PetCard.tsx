import { Session } from 'next-auth';
import Avatar from '@/components/Avatar';
import DeleteButton from '@/components/DeleteButton';
import { deletePet } from '@/lib/actions';
import { PetWithUser } from '@/types';

interface PetCardProps {
    pet: PetWithUser;
    session?: Session | null;
    indicator?: boolean;
}

export default function PetCard({
    pet,
    session,
    indicator = true,
}: PetCardProps) {
    const createdAt = new Date(pet.createdAt);
    const isNew =
        Date.now() - createdAt.getTime() < 1000 * 60 * 60 * 24 * 2 && indicator;
    const isAuthorLoggedIn = session?.user.id === pet.authorId;

    return (
        <div className='indicator'>
            {isNew && (
                <span className='badge indicator-item badge-info badge-sm px-1 font-medium'>
                    new
                </span>
            )}

            <div className='flex w-72 flex-col gap-1 rounded-lg border border-neutral-300 bg-base-300 p-2 shadow-lg transition-colors hover:border-primary'>
                <div className='flex items-center justify-between'>
                    <strong className='text-lg'>{pet.name}</strong>
                    {isAuthorLoggedIn && (
                        <DeleteButton
                            action={deletePet}
                            authorId={pet.authorId}
                            recordId={pet.id}
                        />
                    )}
                </div>

                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-1 text-sm'>
                        <Avatar width='5' src={pet.author?.image} />
                        {pet.author?.name?.split(' ')[0]}
                    </div>

                    <span className='text-sm text-accent'>{pet.species}</span>

                    <span className='text-sm text-secondary'>
                        {createdAt.toLocaleDateString()}
                    </span>
                </div>
            </div>
        </div>
    );
}
