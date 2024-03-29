import Avatar from '@/components/Avatar';
import DeleteButton from '@/components/DeleteButton';
import { deleteOwner } from '@/lib/actions';
import { OwnerWithUser } from '@/types';
import { Session } from 'next-auth';

interface OwnerCardProps {
    owner: OwnerWithUser;
    session?: Session | null;
    indicator?: boolean;
}

export default async function OwnerCard({
    owner,
    session,
    indicator = true,
}: OwnerCardProps) {
    const createdAt = new Date(owner.createdAt);
    const isNew =
        Date.now() - createdAt.getTime() < 1000 * 60 * 60 * 24 * 2 && indicator;
    const isAuthorLoggedIn = session?.user.id === owner.authorId;

    return (
        <div className='indicator'>
            {isNew && (
                <span className='badge indicator-item badge-info badge-sm px-1 font-medium'>
                    new
                </span>
            )}

            <div className='flex w-72 flex-col gap-1 rounded-lg border border-neutral-300 bg-base-300 p-2 shadow-lg transition-colors hover:border-primary'>
                <div className='flex items-center justify-between'>
                    <strong className='text-lg'>
                        {`${owner.firstName} ${owner.lastName}`}
                    </strong>
                    {isAuthorLoggedIn && (
                        <DeleteButton
                            action={deleteOwner}
                            authorId={owner.authorId}
                            recordId={owner.id}
                        />
                    )}
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-1 text-sm'>
                        <Avatar width='5' src={owner.author?.image} />
                        {owner.author?.name?.split(' ')[0]}
                    </div>
                    <span className='text-sm text-secondary'>
                        {createdAt.toLocaleDateString()}
                    </span>
                </div>
            </div>
        </div>
    );
}
