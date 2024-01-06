'use client';

import Plus from '@/assets/plus.svg';
import { useFormStatus } from 'react-dom';

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button type='submit' className='btn btn-primary' disabled={pending}>
            {pending ? (
                <span className='loading loading-spinner loading-xs'></span>
            ) : (
                <Plus className='fill-current' />
            )}
            Dodaj właściciela
        </button>
    );
}

export default SubmitButton;
