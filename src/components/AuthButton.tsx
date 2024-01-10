'use client';

import Google from '@/assets/google.svg';
import Logout from '@/assets/logout.svg';
import { Session } from 'next-auth';
import { signIn, signOut } from 'next-auth/react';

interface AuthButtonProps {
    session: Session | null;
}

export default function AuthButton({ session }: AuthButtonProps) {
    const user = session?.user;
    return (
        <>
            {user ? (
                <button
                    className='btn btn-secondary'
                    onClick={() => signOut({ callbackUrl: '/' })}
                >
                    <Logout className='h-6 w-6 fill-current' />
                    Wyloguj
                </button>
            ) : (
                <button
                    className='btn btn-secondary'
                    onClick={() => signIn('google')}
                >
                    <Google className='h-6 w-6 rounded-full bg-base-100 p-[2px]' />
                    Zaloguj
                </button>
            )}
        </>
    );
}
