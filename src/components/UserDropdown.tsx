'use client';

import { Session } from 'next-auth';
import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';
import AuthButton from './AuthButton';
import Pet from '@/assets/icons/pet.svg';
import Person from '@/assets/icons/person.svg';
import Dropdown from '@/assets/icons/user-dropdown.svg';
import Avatar from './Avatar';

export default function UserDropdown({ session }: { session: Session | null }) {
    const handleClick = () => {
        const elem = document.activeElement as HTMLElement;
        if (elem) {
            elem?.blur();
        }
    };

    return (
        <div className='navbar-end'>
            <div className='dropdown dropdown-end'>
                <button
                    tabIndex={0}
                    role='button'
                    className='btn btn-square btn-ghost'
                >
                    {session ? (
                        <Avatar src={session.user.image} />
                    ) : (
                        <Dropdown className='inline-block h-5 w-5 stroke-current' />
                    )}
                </button>
                <ul
                    tabIndex={0}
                    className='menu dropdown-content z-[10] w-48 rounded-box border-2 border-base-300 bg-base-100 p-2 shadow-xl'
                >
                    <li>
                        <Link onClick={handleClick} href='/user-owners'>
                            <Person className='fill-secondary' />
                            Twoje nazwiska
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleClick} href='/user-pets'>
                            <Pet className='fill-secondary' />
                            Twoje zwierzaki
                        </Link>
                    </li>
                    <div className='divider divider-primary m-0'></div>
                    <li>
                        <ThemeSwitcher />
                    </li>
                    <AuthButton session={session} />
                </ul>
            </div>
        </div>
    );
}
