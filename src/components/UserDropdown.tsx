import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import ThemeSwitcher from './ThemeSwitcher';
import AuthButton from './AuthButton';
import Pet from '@/assets/icons/pet.svg';
import Person from '@/assets/icons/person.svg';

export default async function UserDropdown() {
    const session = await getServerSession(authOptions);
    console.log(session);
    return (
        <div className='navbar-end'>
            <div className='dropdown dropdown-end'>
                <button
                    tabIndex={0}
                    role='button'
                    className='btn btn-square btn-ghost'
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        className='inline-block h-5 w-5 stroke-current'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
                        ></path>
                    </svg>
                </button>
                <ul
                    tabIndex={0}
                    className='menu dropdown-content z-[1] w-48 rounded-box border-2 border-base-300 bg-base-100 p-2 shadow-xl'
                >
                    <li>
                        <Link href='/new-owner'>
                            <Person className='fill-secondary' />
                            Dodaj typa
                        </Link>
                    </li>
                    <li>
                        <Link href='/new-pet'>
                            <Pet className='fill-secondary' />
                            Dodaj zwierzaka
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
