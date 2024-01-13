'use client';

import Image from 'next/image';
import React, { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);
    return (
        <div className='flex flex-col items-center'>
            <h2 className='py-2 text-center text-2xl text-primary'>
                Coś poszło nie tak!
            </h2>
            <Image
                src='https://gifdb.com/images/high/hacker-surprised-error-hacking-rpn6wzshdcozyw4w.gif'
                width={200}
                height={100}
                alt='error gif'
                className='h-auto w-72'
                priority
            />
            <p className='py-2 text-center'>{error.message}</p>
            <button
                className='btn btn-secondary'
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Reset
            </button>
        </div>
    );
}
