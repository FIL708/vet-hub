'use client';

import Delete from '@/assets/icons/delete.svg';
import { useTransition } from 'react';

interface DeleteButtonProps {
    recordId: string;
    authorId: string | null;
    action: (recordId: string, authorId: string | null) => Promise<void>;
}

export default function DeleteButton({
    recordId,
    authorId,
    action,
}: DeleteButtonProps) {
    const [isPending, startTransition] = useTransition();

    const deleteRecord = () => {
        startTransition(async () => await action(recordId, authorId));
    };
    return (
        <button
            className='btn btn-circle btn-ghost btn-sm'
            disabled={isPending}
            onClick={deleteRecord}
        >
            {isPending ? (
                <span className='loading loading-spinner loading-xs'></span>
            ) : (
                <Delete className='stroke-current' />
            )}
        </button>
    );
}
