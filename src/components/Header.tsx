import Link from 'next/link';
import NavDropdown from './NavDropdown';
import UserDropdown from './UserDropdown';
import Logo from '@/assets/icons/logo.svg';

export default function Header() {
    return (
        <div className='navbar shadow-lg'>
            <NavDropdown />
            <div className='navbar-center'>
                <Link
                    href='/'
                    className='flex items-center gap-2 rounded-xl p-2 text-xl font-bold text-primary transition hover:bg-base-300 active:scale-95 lg:text-3xl'
                >
                    <Logo className='h-10 w-10 fill-primary lg:h-12 lg:w-12' />
                    VetHub
                </Link>
            </div>
            <UserDropdown />
        </div>
    );
}
