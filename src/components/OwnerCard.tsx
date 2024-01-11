import { OwnerWithUser } from '@/types';
import Avatar from './Avatar';

interface OwnerCardProps {
    owner: OwnerWithUser;
}

export default function OwnerCard({ owner }: OwnerCardProps) {
    const createdAt = new Date(owner.createdAt);
    const isNew = Date.now() - createdAt.getTime() < 1000 * 60 * 60 * 24 * 2;

    return (
        <div className='indicator'>
            {isNew && (
                <span className='badge indicator-item badge-info badge-sm px-1 font-medium'>
                    new
                </span>
            )}

            <div className='flex w-80 flex-col gap-1 rounded-lg border border-neutral-300 bg-base-300 p-2 shadow-lg transition-shadow hover:shadow-xl'>
                <div>
                    <strong className='text-lg'>{`${owner.firstName} ${owner.lastName}`}</strong>
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
