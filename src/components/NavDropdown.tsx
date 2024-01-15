'use client';

import Link from 'next/link';
import Pet from '@/assets/icons/pet.svg';
import AddPerson from '@/assets/icons/add-person.svg';
import AddPet from '@/assets/icons/add-pet.svg';
import People from '@/assets/icons/people.svg';

export default function NavDropdown() {
    const handleClick = () => {
        const elem = document.activeElement as HTMLElement;
        if (elem) {
            elem?.blur();
        }
    };

    return (
        <div className='navbar-start'>
            <div className='dropdown'>
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
                            d='M4 6h16M4 12h16M4 18h16'
                        ></path>
                    </svg>
                </button>
                <ul
                    tabIndex={0}
                    className='menu dropdown-content z-10 w-48 rounded-box border-2 border-base-300 bg-base-100 p-2 shadow-xl'
                >
                    <li>
                        <Link onClick={handleClick} href='/owners'>
                            <People className='fill-secondary' />
                            Lista nazwisk
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleClick} href='/pets'>
                            <Pet className='fill-secondary' />
                            Lista zwierząt
                        </Link>
                    </li>
                    <div className='divider divider-primary m-0'></div>
                    <li>
                        <Link onClick={handleClick} href='/new-owner'>
                            <AddPerson className='fill-secondary' />
                            Dodaj nazwisko
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleClick} href='/new-pet'>
                            <AddPet className='fill-secondary' />
                            Dodaj zwierzaka
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
